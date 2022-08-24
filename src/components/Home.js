import TaskCard from "./TaskCard"
import Form from "./Form"

function Home({ taskList, handleAddTask, deleteTask  }) {
   
    const taskItems = taskList.map(task => {
        return <TaskCard
            key = {task.id}
            task = {task}
            deleteTask = {deleteTask}
        />
        
    })

    return (
        <div>
            <Form 
                handleAddTask={handleAddTask}
            />
            { taskItems }
        </div>
    )
}

export default Home