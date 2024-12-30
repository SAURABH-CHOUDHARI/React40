import PropTypes from "prop-types"
import {FaTimes} from "react-icons/fa"
const Task = ({ task, onDelete , onToggle }) => {
    
    return (
        <div className={`py-2 px-2 mt-5 cursor-pointer bg-slate-100 ${task.remainder ? 'border-green-500 border-solid border-l-4 bg-green-100' : '' }`}  onDoubleClick={() =>
            onToggle(task.id)
        }>
            <h3 className="flex justify-between text-xl font-semibold text-zinc-800">
                {task.text} 
                <FaTimes className="text-2xl text-red-600 cursor-pointer" onClick={() => 
                    onDelete(task.id)}/>
            </h3>
            <h4 className="text-sm text-zinc-600">{task.day}</h4>
            <h5>{task.remainder}</h5>
        </div>
    )
}

Task.propTypes = {
    task : PropTypes.object,
    onDelete: PropTypes.func,
    onToggle : PropTypes.func,
}
export default Task