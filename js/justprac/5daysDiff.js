// Create a function that takes two dates and returns the number of days between the first and second date.

// Examples
// getDays(
//   new Date("June 14, 2019"),
//   new Date("June 20, 2019")
// )

function getDays(date1,date2){
    const dateDiff = Math.abs(date2-date1);
    console.log(Math.ceil(dateDiff/(1000*60*24*60))); 
}
 getDays(
    new Date("June 14, 2019"),
    new Date("June 20, 2019")
  ) 
  getDays(
    new Date("December 29, 2018"),
    new Date("January 1, 2019")
  )