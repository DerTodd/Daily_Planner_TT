var saveButton = document.getElementsByClassName("saveButton");
var events9 = document.getElementById("events9");
//var saveBtn = document.getElementById("saveBtn9");
//var saveBtn = document.getElementsByClassName("saveBtn");
var savedEvents9 = document.getElementById("saved-events9");
//var comment = document.getElementById("msg");
var buttons = document.getElementById("Buttons");
var events10 = document.getElementById("events10");
var events11 = document.getElementById("events11");
var events12 = document.getElementById("events12");
var events1 = document.getElementById("events1");
var events2 = document.getElementById("events2");
var events3 = document.getElementById("events3");
var events4 = document.getElementById("events4");
var events5 = document.getElementById("events5");
var currentDay = document.getElementById("currentDay");
var currentHour = moment().format("h");


setInterval(function setTime() {
  var dayAndTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  var dayWeek = moment().format("[Today is] dddd ");
  hour = moment().format("h");
  document.getElementById("currentDay").textContent = dayWeek + dayAndTime;
  

}, 1000);

    function saveScheduledEvents() {
        // Save related form data as an object
        var scheduledEvents = {
          events9: events9.value.trim(),
          events10: events10.value.trim(),
          events11: events11.value.trim(),
          events12: events12.value.trim(),
          events1: events1.value.trim(),
          events2: events2.value.trim(),
          events3: events3.value.trim(),
          events4: events4.value.trim(),
          events5: events5.value.trim(),
          
        };
        // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
        localStorage.setItem("scheduledEvents", JSON.stringify(scheduledEvents));
        console.log(scheduledEvents)
      }
      
      function renderScheduledEvents() {
        // Use JSON.parse() to convert text to JavaScript object
        var carryOverEvents = JSON.parse(localStorage.getItem("scheduledEvents"));
        console.log(carryOverEvents);
        // Check if data is returned, if not exit out of the function
        if (carryOverEvents !== null) {
        document.getElementById("events9").textContent = carryOverEvents.events9;
        document.getElementById("events10").textContent = carryOverEvents.events10;
        document.getElementById("events11").textContent = carryOverEvents.events11;
        document.getElementById("events12").textContent = carryOverEvents.events12;
        document.getElementById("events1").textContent = carryOverEvents.events1;
        document.getElementById("events2").textContent = carryOverEvents.events2;
        document.getElementById("events3").textContent = carryOverEvents.events3;
        document.getElementById("events4").textContent = carryOverEvents.events4;
        document.getElementById("events5").textContent = carryOverEvents.events5;
        
        
        } else {
          return;
        }
      }
      
      buttons.addEventListener("click", function(event) {
      event.preventDefault();
      console.log(event.target);
      saveScheduledEvents();
      renderScheduledEvents();
      });
      
      // The init() function fires when the page is loaded 
      function init() {
        // When the init function is executed, the code inside renderLastGrade function will also execute
        renderScheduledEvents();
        console.log(currentHour);
      }
      init();
      

