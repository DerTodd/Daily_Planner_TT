var saveButton = document.getElementsByClassName("saveButton");
var events9 = document.getElementById("events9");
var saveBtn = document.getElementsByClassName("saveBtn");




    function saveScheduledEvents() {
        // Save related form data as an object
        var scheduledEvents = {
          nineOClock: events9.value.trim(),
          
        };
        // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
        localStorage.setItem("scheduledEvents", JSON.stringify(scheduledEvents));
      }
      
      function renderScheduledEvents() {
        // Use JSON.parse() to convert text to JavaScript object
        var carryOverEvents = JSON.parse(localStorage.getItem("studentGrade"));
        // Check if data is returned, if not exit out of the function
        if (carryOverEvents !== null) {
        document.getElementById("saved-events9").textContent = carryOverEvents.events9;
        
        } else {
          return;
        }
      }
      
      saveBtn.addEventListener("click", function(event) {
      event.preventDefault();
      console.log(event.target);
      saveScheduledEvents();
      renderScheduledEvents();
      });
      
      // The init() function fires when the page is loaded 
      function init() {
        // When the init function is executed, the code inside renderLastGrade function will also execute
        renderScheduledEvents();
      }
      init();
      

//     // This function is being called below and will run when the page loads.
// function init() {
//     // Get stored todos from localStorage
//     var storedTodos = JSON.parse(localStorage.getItem("todos"));
  
//     // If todos were retrieved from localStorage, update the todos array to it
//     if (storedTodos !== null) {
//       todos = storedTodos;
//     }
  
//     // This is a helper function that will render todos to the DOM
//     renderTodos();
//   }
  
//   function storeTodos() {
//     // Stringify and set key in localStorage to todos array
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }
  
//   // Add submit event to form
//   todoForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var todoText = todoInput.value.trim();
  
//     // Return from function early if submitted todoText is blank
//     if (todoText === "") {
//       return;
//     }
  
//     // Add new todoText to todos array, clear the input
//     todos.push(todoText);
//     todoInput.value = "";
  
//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   });
  
//   // Add click event to todoList element
//   todoList.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // Checks if element is a button
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Store updated todos in localStorage, re-render the list
//       storeTodos();
//       renderTodos();
//     }
//   });
  
//   // Calls init to retrieve data and render it to the page on load
//   init()