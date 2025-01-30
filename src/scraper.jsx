//npm install axios cheerio
//TODO: Debug this with breakpoints
const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://app.testudo.umd.edu/soc";
function getTerm(name) {
    if (name === "Spring")
        return "01";
    if (name === "Summer")
        return "05";
    if (name === "Fall")
        return "08";
    if (name === "Winter")
        return "12";
    else
        throw "Invalid Term";
} 
let courses = [];
async function scrape() {
    //try-catch so that nothing bothers me
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        //Load which term we're in (this is part of the url from which we will pull the classes)
        const header = $("#page-desc").split(" ");
        const term = header[5] + getTerm([4]);
        //Load all the department prefixes (this is also part of the url from which we will pull the classes)
        const $prefixes = $(".prefix-abbrev");
        const prefixes = [];
        for (let i = 0; i < $prefixes.length; ++i) {
            prefixes.push($prefixes.get(i).text());
        }
        //Now actually do the scraping
        for (const prefix in prefixes) {
            const { department } = await axios.get(url + "/" + term + "/" + prefix);
            $ = cheerio.load(department);
            const $courses = $(".course");
            //Loop through the courses
            for (let i = 0; i < $courses.length; ++i) {
                const course = { prefix: prefix, id: "", title: "", description: "" };
                course.id = $courses.get(i).find(".course-id").text();
                course.title = $courses.get(i).find(".course-title").text();
                course.description = $courses.get(i).find(".approved-course-text").text();
                courses.push(course);
            }
        }
    } catch (error) {
        console.log(error);
    }
}
//Preferably, we'd put this function call in a loop that runs once a day.
scrape();
export { courses };
// import { courses } from 'src/scraper';  ???