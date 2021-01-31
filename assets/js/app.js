// Define UI Variables 
const taskInput = document.querySelector('#task'); 
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter'); 
const taskList = document.querySelector('.collection'); 
const clearBtn = document.querySelector('.clear-tasks'); 

const reloadIcon = document.querySelector('.fa'); 



form.addEventListener('submit', addNewTask);

clearBtn.addEventListener('click', clearAllTasks);

filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);
 
reloadIcon.addEventListener('click', reloadPage);






function addNewTask(e) {

    e.preventDefault(); 


   
    if (taskInput.value === '') {
        taskInput.style.borderColor = "red";

        return;
    }

    
    const li = document.createElement('li');
   
    li.className = 'collection-item';
    
    li.appendChild(document.createTextNode(taskInput.value));
   
    const link = document.createElement('a');
   
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
   
    li.appendChild(link);
    
    taskList.appendChild(li);




}





 
function clearAllTasks() {

    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}




function filterTasks(e) {

    /*  
    Instruction for Handling the Search/filter 
    
    1. Receive the user input from the text input 
    2. Assign it to a variable so the us can reuse it 
    3. Use the querySelectorAll() in order to get the collection of li which have  .collection-item class 
    4. Iterate over the collection item Node List using forEach
    5. On each element check if the textContent of the li contains the text from User Input  [can use indexOf]
    6 . If it contains , change the display content of the element as block , else none
    
    
    */

}

// Remove Task function definition 
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are You Sure about that ?')) {
            e.target.parentElement.parentElement.remove();

        }

    }
}


function reloadPage() {
   
    location.reload();
}