// My modules
const email_module = require("./node_modules/email_module");
const web_scraper_module = require("./node_modules/web_scraper_module");

var inputFromUser = process.argv[2];

//If user haven't provided any input in console then exit the program
if(!inputFromUser){
  console.log("You forgot to pass some email. Try again!");
  process.exit();
}

//If user provided input, but it wasn't correct email address then exit the program
if(!email_module.inputIsValidEmailAddress(inputFromUser)){
    console.log("This is not valid email format! Try Again!");
    process.exit();
}

var domainName = email_module.getDomainNameFromEmailAddress(inputFromUser);
var url = "http://www." + domainName;

web_scraper_module.startScraping(url);
