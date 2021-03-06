// Business Logic for To-Do List
function ToDoList() { 
  this.toDo = []; // sets array
}

// Logic for adding Task
ToDoList.prototype.addTask = function(completeTask) {
  this.toDo.push(completeTask);
}

// Business Logic for Task
function Task(item, date) { // constructor, holding all list items
  this.item = item;
  this.date = date;
}

// Business Logic for Task with date
Task.prototype.completeTask = function(item, date) {
  return this.item + " by " + this.date;
}



// var firstTask = new Task("Cleaning", "12 pm");
// var secondTask = new Task("Make breakfast", "9am");
// var thirdTask = new Task("Laundry", "2 pm");
// console.log(firstTask);
// console.log(secondTask);
// console.log(thirdTask);

//front end
$(document).ready(function() {
  var taskList = new ToDoList();
  $("form#form1").submit(function(event) { // adding new task to list
    event.preventDefault();
    //  $("#output").append("<li>" + firstTask.item + "</li>")   
    $("#output").toggle().empty();
    var newTask = $("#task").val();
    var newDate = $("#date").val();
    var firstTask = new Task(newTask, newDate);
    var taskRunThru = function(newTask, newDate) {
      taskList.completeTask(newTask, newDate);
      taskList.toDo.addTask(finalTask);
      console.log(tasklist.toDo);
    });
    // Task.completeTask(newTask, newDate);
    // construct task
    // taskList.addTask(firstTask);
    // console.log(taskList);
    // loop through the array of objects
    // for each object print out the item and date properties
    var loopyBoi = taskList.toDo.forEach() { 
      function(newTask, newDate) {
      taskList.completeTask(newTask, newDate);
      taskList.toDo.addTask(finalTask);
      //taskList.toDo.push(firstTask);
      console.log(tasklist.toDo);
    });
  }
  });

  $("ul").on('click','li',function() {
    console.log($(this));
    $(this).toggleClass("clickedOn");
  });

  $("form#removeForm").submit(function(){
    event.preventDefault();
    $("#output").empty();
  });
});