import Accordian from './components/Accordian';

const App = () => {
  const data = [
    {
      id: '1',
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: '2',
      question: 'What are React hooks?',
      answer: 'Hooks are functions that let you use state and lifecycle methods in functional components.',
    },
    {
      id: '3',
      question: 'What is JSX?',
      answer: 'JSX is a syntax extension for JavaScript that allows you to write HTML elements in React.',
    },
    {
      id: '4',
      question: 'What is the Virtual DOM?',
      answer: 'The Virtual DOM is a programming concept where a virtual representation of the UI is kept in memory and synced with the real DOM.',
    },
  ];
  

  return (
    <div className='w-full h-screen flex justify-center bg-slate-950 items-center'>
      <Accordian data={data}/>


    </div>
  )
}

export default App