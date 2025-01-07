import React, { useState } from 'react';

const App = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const galleries = [
    {
      image: "https://images.unsplash.com/photo-1735370436237-779239d71e8e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      texts: ["HEY", "LET'S", "DANCE"]
    },
    {
      image: "https://images.unsplash.com/photo-1509978778156-518eea30166b?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      texts: ["GIVE", "TAKE", "RECEIVE"]
    },
    {
      image: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      texts: ["EXPERIENCE", "IT", "TODAY"]
    },
    {
      image: "https://images.unsplash.com/photo-1524602997322-c1900e093d3d?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      texts: ["Give", "ALL", "YOU CAN"]
    },
    {
      image: "https://images.unsplash.com/photo-1415356838286-df6fd593e8b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      texts: ["LIFE", "IN", "MOTION"]
    }
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  console.log(expandedIndex)

  return (
    <div className="w-screen h-screen flex overflow-hidden ">
      {galleries.map((gallery, index) => (
        <div
          key={index}
        className={`relative transition-all duration-500 ease-in cursor-pointer ${
            expandedIndex === null
              ? 'w-full'
              : expandedIndex === index
              ? 'w-full'
              : 'w-[15rem]'
          }`}
          onClick={() => handleClick(index)}
        >
          <img
            src={gallery.image}
            alt=""
            className="h-full w-full object-cover"
          />
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center
              ${expandedIndex === index ? 'gap-10' : 'gap-[28rem]'}
              transition-all duration-500 ease-in-out`}
          >
            {gallery.texts.map((text, textIndex) => (
              <h1
                key={textIndex}
                className={`text-white font-semibold transition-all duration-1000
                  ${textIndex === 1 ? 'text-6xl' : 'text-4xl'}
                  ${expandedIndex === index ? 'opacity-100' : 'opacity-80'}
                `}
              >
                {text}
              </h1>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;