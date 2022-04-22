const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const list = document.querySelector(".taskList");
const btnDelete = document.querySelector(".btnDelete");

let task = new String("");
let array = [];

function getTask(e){task = e.target.value};


const showTask = (e) => {
    let htmlTask = "";
    
    e.preventDefault();
    array.push(task);
    inputTask.value = "";
    array.forEach((value , index) => {
        htmlTask += `<div class="resultFather"
                        <section class="child" key=${index}>
                            <input type="checkbox" class="check"></input><label>${value}</label>
                        </section>
                    </div>`
    })
    list.innerHTML = htmlTask;
}


const deleteTask = () => {
    console.log ("hola");
    // array.forEach(task=>{
        //     console.log(task);
        // })
};

btnDelete.addEventListener("click", deleteTask);
inputTask.addEventListener("keyup", getTask);
btnAdd.addEventListener("click", showTask);