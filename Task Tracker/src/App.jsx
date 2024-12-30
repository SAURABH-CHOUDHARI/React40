
import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask';

const App = () => {
  const [ShowAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id : 0,
      text: "Prepare presentation for team meeting",
      day: "Monday at 9:00 AM",
      remainder: true
    },
    {
      id: 1 ,
      text: "Grocery shopping",
      day: "Tuesday at 5:30 PM", 
      remainder: false
    },
    {
      id : 2,
      text: "Dentist appointment",
      day: "Wednesday at 2:15 PM",
      remainder: true
    },
  ]);
  const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
  } 
  const ToggleRemainder = (id) => {
    setTasks(tasks.map((task) => (task.id) === id ? 
    {...task, remainder: !task.remainder } 
    : task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000 ) +1
    const newTask = {id , ...task}
    setTasks([...tasks, newTask])
  }
    
  return (
    <main className='flex w-full h-full justify-center py-10'>
    <div className='w-[35rem] border-solid border-zinc-600 border-2 font-[Poppins]  rounded-xl px-10'>
      <Header onAdd={() => setShowAddTask(!ShowAddTask)} showAdd={ShowAddTask}/>
      {ShowAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={ToggleRemainder}/> : 'No Tasks To Show'}
    </div>
    </main>
  )
}

export default App