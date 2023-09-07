const currentDay = document.querySelector(
 ".currentDayOfTheWeek"
);

const currentUtcTime = document.querySelector(
 ".currentUTCTime"
);
//GETTING THE CURRENT DAY CODE
const currentDate = new Date();

const daysOfWeek = [
 "Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
];

const dayOfWeekIndex = currentDate.getDay();
const currentDayOfWeek =
 daysOfWeek[dayOfWeekIndex];
currentDay.textContent = currentDayOfWeek;

//CODE FOR GETTING THE CURRENT UTC TIME
// Get the current UTC time in milliseconds
const currentUTCTime = new Date().getTime();

// Display the current UTC time
currentUtcTime.textContent =
 currentUTCTime + "ms";
