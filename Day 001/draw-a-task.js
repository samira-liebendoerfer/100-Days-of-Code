// ARRAY WITH MY TASKS
let myTasks = [
  "Header/Navigation: change size on scroll",
  "Header/Navigation: remove and add on scroll",
  "Header/Navigation: change elements position on scroll",
  "Change image on scroll",
  "Animate logo element on scroll",
  "Animate text",
  "Ascii random art generator",
  "JS midi keyboard",
  "Control a shape with the keyboard input",
  "CSS3 painting",
  "CSS3 animated landscape",
  "Javascript browser plugin",
  "JS drawing (canvas)",
  "Console ascii signature",
  "White room escape puzzle",
  "Youtube random video",
  "Giphy API",
  "SVG logo animation",
  "CSS filter",
  "Super hero name generator",
  "Mailchimp high five animation",
  "The game of life",
  "Crazy button effects",
  "JS physics falling shapes",
  "Text animation",
];

// FUNCTION TO SHOW A TASK
function showTask() {
  // PICK A RANDOM TASK FROM THE LIST
  let task = myTasks[Math.floor(Math.random() * myTasks.length)];
  console.log("task: ", task);

  // PRINT MY TASK
  document.write("Today's task is: ", task);
}

// showTask();

// TESTING

// let lastItem = myTasks.length - 1;
// console.log("lastItem: ", lastItem);
// let taskLength = myTasks.length;
// console.log("taskLength: ", taskLength);

// MATH RANDOM
//   function getRandomInt(max) {
//   return Math.floor(Math.random() * Math.floor(max));
// }

// TEST SHUFFLE AN ARRAY

//  Shuffle the array of tasks
//  function shuffleTasks(tasks) {
//    return tasks.sort(() => Math.random() - 0.5);
//  }

//  // Show the shuffled tasks
//  function showTasks() {
//    let taskList = [
//      "Header/Navigation: change size on scroll",
//      "Header/Navigation: remove and add on scroll",
//      "Header/Navigation: change elements position on scroll",
//      "Change image on scroll",
//    ];
//    let shuffledTasks = shuffleTasks(taskList);
//    document.write(shuffledTasks);
//  }
