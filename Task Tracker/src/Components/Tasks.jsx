import PropTypes from "prop-types"
import Task from "./Task"
const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        <>
        <div className=" py-5">
        {tasks.map((task, idx) =>(
            
            <Task key={idx} task={task} onDelete={onDelete} onToggle={onToggle}
            ></Task>
        ))}
        </div>
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array ,
    onDelete : PropTypes.func,
    onToggle : PropTypes.func,
}


export default Tasks