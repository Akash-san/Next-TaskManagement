import { ITask } from "@/types/tasks"
import Task from "./Task"


interface taskListProp{
    tasks:ITask[]
}
const TaskList:React.FC<taskListProp> = ({tasks}) => {
    return (
        <div className="overflow-x-auto mt-8">
            <table className="table">
                <thead className=" bg-slate-300">
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {tasks.map((task)=>(
                   <Task key={task.id} task={task}/>
                    
                   ))}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList