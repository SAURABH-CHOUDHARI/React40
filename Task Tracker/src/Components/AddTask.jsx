import { useState } from "react"
import PropTypes from 'prop-types'

const AddTask = ( { onAdd } ) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [remainder, setRemainder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Please Add Text')
            return
        }

        onAdd({text , day , remainder})

        setDay("")
        setText("")
        setRemainder(false)
    }

    return (
        <form className="flex flex-col gap-4 py-3" onSubmit={onSubmit}>
            <div className="flex flex-col">
                <label htmlFor="task">Task :</label>
                <input type="text" id='task' placeholder="Add Task" className="border-2 border-black py-2 px-2"
                value={text} onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="time">Day and Time :</label>
                <input type="datetime-local" id='time' placeholder="Add Day and Time" className="border-2 border-black py-2 px-2 "
                value={day} onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="flex gap-5 justify-between pr-2 ">
                <label htmlFor="set">Set Remainder</label>
                <input type="checkbox" id='set' className="scale-125 active:scale-110" checked={remainder}
                value={remainder}   onChange={(e) => setRemainder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="bg-black py-2 text-white rounded-md font-medium active:scale-95" />
        </form>
    )
}

AddTask.propTypes = {
    label: PropTypes.string.isRequired,
    onAdd : PropTypes.func,
}

export default AddTask