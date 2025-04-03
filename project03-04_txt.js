/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Step 1: Name and date

      Author: Matney Moller
      Date:   4/3/2025  

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

//Step 3: Create function starImages to display ratings/stars
function starImages(rating) {
      //Step a: declare variable
      let ImageText = "";
      //Step b: loop through the number of stars in the rating
      for (let i = 0; i < rating; i++) {
            //Step c: Add text "<img src= 'star.png' alt='star rating' />" to the ImageText variable for each star
            ImageText += "<img src='star.png' alt='star rating' />";
      }
      //Step d: Return the value of ImageText from the function
      return ImageText;
}



//Step 5: create for loop with the counter variable ranging from 0 to the length of the reviewers array
for (let i = 0; i < reviewers.length; i++) {
      //Within each iteration in the for loop, generate HTML code for a table that contains the review from each customer



      //Step 6: Declare variable named reviewCode and assign it to an empty string
      let reviewCode = ""; // Declare reviewCode before its first usage

      //Step b: Add else if statement that adds one of three possible strings to the value of the reviewCode
      if (reviewType[i] == "P") {
            reviewCode += "<table class='prime'>";
      } else if (reviewType[i] == "N") {
            reviewCode += "<table class='new'>";
      } else {
            reviewCode += "<table>";
      }

reviewCode += "<caption>" + reviewTitles[i] + "</caption>";

reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";

reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";

reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";

reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";

reviewCode += "</table>";

      //Step d: insertAdjacentHTML() method to insert the value of reviewCode into the article tag, use getElementsByTagName() to get the article tag and use the index of 0 to select the first article tag in the document
      document.getElementsByTagName("article")[0].insertAdjacentHTML("beforeend", reviewCode);
}

      

