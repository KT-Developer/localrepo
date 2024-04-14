import React,{useState} from "react";

function ToDoList(){
    const[tasks,setTasks]=useState(["Eat Breakfast","Take a shower","Go on a Stroll"]);
    const[newTask,setNewTask]=useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()!=="")
        setTasks(t=>[...t,newTask]);
        setNewTask("");
    }
    function removeTask(index){
        const updTasks=tasks.filter((_,i)=>i!==index);
        setTasks(updTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updTasks=[...tasks];
            [updTasks[index],updTasks[index-1]]= [updTasks[index-1],updTasks[index]];
            setTasks(updTasks);
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updTasks=[...tasks];
            [updTasks[index],updTasks[index+1]]= [updTasks[index+1],updTasks[index]];
            setTasks(updTasks);
        }
    }
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter a Task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task,index)=><li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button" onClick={()=>removeTask(index)}>
                        Delete
                    </button>

                    <button className="move-up-button" onClick={()=>moveTaskUp(index)}>
                        Move ⬆️
                    </button>

                    <button className="move-down-button" onClick={()=>moveTaskDown(index)}>
                        Move ⬇️
                    </button>
                </li>)}
            </ol>
        </div>
    )
}
export default ToDoList