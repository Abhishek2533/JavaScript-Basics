// date -> start from 1 january 1970

// simple way to define
const date = 100;

// get more features/properties/methods
const myDate = new Date();    // by defining in this way we get more properties which help lots
console.log(typeof myDate);   // output -> object

// METHODS in this date

// CREATING NEW DATE WITH DEFINED VALUES
let createDate = new Date(2023, 0, 20); // return with day, month and year
let createDate2 = new Date(2023, 0, 20, 5, 3); // return with day, month, year, hour and min
// default time -> 12:00:00 AM


// GETTING VALUES OF DATE OBJECTS
myDate.getFullYear();     // returns the year of a specified date according to local time.
myDate.getMonth();        // returns the month (from 0-11) for the specified date, according to local time.
myDate.getDay();          // returns the day of the week for the specified date, according to local time.
myDate.getHours();        // returns the hours of the specified date as a number between 0 and 23.
myDate.getMinutes();      // returns the minutes of the specified date as a number between 0 and 59.
myDate.getSeconds();      // returns the seconds of the specified date as a number between 0 and 59.
myDate.getMilliseconds(); // returns the milliseconds of the specified date as a number between 0 and 999.

// SETTING VALUES IN DATE OBJECTS
myDate.setFullYear(year);   // sets the full year of the specified date.
myDate.setMonth(month, date); // sets the month of the specified date. If no value is provided for the optional date parameter, the date value will not change unless there is an overflow.
myDate.setMonth(month);     // sets the month of the specified date.
myDate.setDate(date);       // sets the day of the month of the specified date.
myDate.setHours(hours);     // sets the hour of the specified date.
myDate.setMinutes(minutes); // sets the minute of the specified date.
myDate.setSeconds(seconds); // sets the second of the specified date.
myDate.setMilliseconds(ms); // sets the millisecond of the specified date.

// FORMATTED STRING OF THE DATE
myDate.toLocaleString();    // returns a string representing the date in locale format.
myDate.toString();         // returns a string representing the date in RFC 822 format.
myDate.toUTCString();       // returns a string representing the date in UTC format.
myDate.toISOString();       // returns a string representing the date in ISO format.
myDate.toJSON();           // returns a JSON representation of the date.
myDate.toDateString() ;    // return a string specified the day and month.


// CUSTOMIZE FORMAT
myDate.toLocaleString('default', {
    weekday : 'long',
    year : 'numeric',
    month : 'long',
    day : 'numeric'
});




// *****************************************************************************************************************



// METHODS in TimeStamps


// getting timestamp from current time
let nowTimestamp = Math.floor(new Date().valueOf());
console.log('now', nowTimestamp);

// getting timestamp from specific date
let pastTime = new Date("December 17, 1995");
let pastTimeStamp = Math.floor(pastTime.valueOf());
console.log('past', pastTimeStamp);


// converting timestamps back into dates
let nowAsDate = new Date(nowTimestamp);
let pastAsDate = new Date(pastTimeStamp);
console.log('asDates', nowAsDate, pastAsDate);


// calculating difference between two timestamps
let diffInMs = nowTimestamp - pastTimeStamp;
let diffInSec = Math.round((diffInMs % 1000));
let diffInMinute = Math.round((diffInMs / (1000 * 60)) % 60);
let diffInHour = Math.round((diffInMs / (1000 * 60 * 60)) % 24);
let diffInDays = Math.round(Math.abs(diffInMs / (1000 * 60 * 60 * 24)));
console.log(`${diffInDays} days ${diffInHour} hrs ${diffInMinute} mins ${diffInSec} secs`);


// EXAMPLE USING TIMESTAMPS
let startTime = "October 1, 2020";
let endTime = "February 1, 2021";
startTime = new Date(startTime).valueOf();
endTime = new Date(endTime).valueOf();
const totalDuration = endTime - startTime;
const durationInSecond = Math.round(totalDuration / 1000) % 60;
const durationInMinute = Math.round(durationInSecond / 60) % 60;
const durationInHour = Math.round(durationInMinute / 60) % 24;
const durationInDay = Math.round(durationInHour / 24);
console.log(`${durationInDay} days ${durationInHour} hours ${durationInMinute} minutes ${durationInSecond} seconds`);


// EXAMPLE USING DATES
let startDate = new Date("October 1, 2020");
let endDate = new Date("February 1, 2021");
const msPerMinute = 60 * 1000;
const msPerHour = msPerMinute * 60;
const msPerDay = msPerHour * 24;
const elapsed = endDate - startDate;
const elapsedSeconds = Math.round((elapsed % msPerMinute) / 1000);
const elapsedMinutes = Math.round((elapsed % msPerHour) / msPerMinute);
const elapsedHours = Math.round((elapsed % msPerDay) / msPerHour);
const elapsedDays = Math.round(elapsed / msPerDay);
console.log(`${elapsedDays} days ${elapsedHours} hrs ${elapsedMinutes} mins ${elapsedSeconds} secs`);