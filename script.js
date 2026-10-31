// Ex.6 - JavaScript Styles and Animations

// 1. Digital clock
function display() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  // add a leading zero to single digits
  if (h < 10) h = "0" + h;
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("today").innerHTML = d.toDateString();
}
display();
setInterval(display, 1000);

// 2. Random background colour every 30 seconds
function setBackgroundColor() {
  // values between 60 and 200 keep the colours soft (not too dark or too bright)
  var red = Math.floor(Math.random() * 140) + 60;
  var green = Math.floor(Math.random() * 140) + 60;
  var blue = Math.floor(Math.random() * 140) + 60;
  var color = "rgb(" + red + "," + green + "," + blue + ")";
  document.getElementById("backdrop-box").style.backgroundColor = color;
  document.getElementById("color-name").innerHTML = "Colour: " + color;
}
setBackgroundColor();
setInterval(setBackgroundColor, 30000);

// 3. Increase and decrease font size
function incSize() {
  document.getElementById("para1").style.fontSize = "28px";
  document.getElementById("para1").style.color = "#d9bf86";
}

function decSize() {
  document.getElementById("para1").style.fontSize = "16px";
  document.getElementById("para1").style.color = "#d8d2c6";
}

// 4. Move the camera image to the right, stop and reset
var imgObj = null;
var animate = null;

function init() {
  imgObj = document.getElementById("img");
  imgObj.style.position = "relative";
  imgObj.style.left = "0px";
}

function moveRight() {
  clearTimeout(animate);
  var left = parseInt(imgObj.style.left) + 1;
  var maxLeft = document.getElementById("track").offsetWidth - imgObj.offsetWidth;
  // start again from the left once it reaches the end
  if (left > maxLeft) {
    left = 0;
  }
  imgObj.style.left = left + "px";
  animate = setTimeout(moveRight, 10);
}

function stop() {
  clearTimeout(animate);
  imgObj.style.left = "0px";
}

window.onload = init;

// 5. Array of student objects
var students = [
  { name: "Arun", regno: "URK24CS1201", yob: 1999 },
  { name: "Priya", regno: "URK24CS1214", yob: 2004 },
  { name: "Karthik", regno: "URK24CS1227", yob: 1998 },
  { name: "Divya", regno: "URK24CS1239", yob: 2005 },
  { name: "Rahul", regno: "URK24CS1252", yob: 2000 },
  { name: "Meena", regno: "URK24CS1268", yob: 1997 }
];

var list = document.getElementById("student-list");
var before = document.getElementById("before2000");
var after = document.getElementById("after2000");

for (var i = 0; i < students.length; i++) {
  list.innerHTML += "<p>" + students[i].name + "'s Register Number is " + students[i].regno + "</p>";

  if (students[i].yob < 2000) {
    before.innerHTML += "<li>" + students[i].name + " (" + students[i].yob + ")</li>";
  } else {
    after.innerHTML += "<li>" + students[i].name + " (" + students[i].yob + ")</li>";
  }
}
