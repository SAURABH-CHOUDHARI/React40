import React, { useState } from 'react'

const App = () => {
  const [teams, setTeams] = useState( [
    {
      name: "Chennai Super Kings",
      shortName: "CSK",
      primaryColor: "#FFFF00",
      secondaryColor: "#0081E8",
      image: "/api/placeholder/200/200",
      homeGround: "M. A. Chidambaram Stadium"
    },
    {
      name: "Mumbai Indians",
      shortName: "MI",
      primaryColor: "#004BA0",
      secondaryColor: "#D1AB3E",
      image: "/api/placeholder/200/200",
      homeGround: "Wankhede Stadium"
    },
    {
      name: "Royal Challengers Bangalore",
      shortName: "RCB",
      primaryColor: "#EC1C24",
      secondaryColor: "#000000",
      image: "/api/placeholder/200/200",
      homeGround: "M. Chinnaswamy Stadium"
    },
    {
      name: "Kolkata Knight Riders",
      shortName: "KKR",
      primaryColor: "#3A225D",
      secondaryColor: "#B3A123",
      image: "/api/placeholder/200/200",
      homeGround: "Eden Gardens"
    },
    {
      name: "Delhi Capitals",
      shortName: "DC",
      primaryColor: "#282968",
      secondaryColor: "#D71920",
      image: "/api/placeholder/200/200",
      homeGround: "Arun Jaitley Stadium"
    },
    {
      name: "Punjab Kings",
      shortName: "PBKS",
      primaryColor: "#ED1B24",
      secondaryColor: "#FFFFFF",
      image: "/api/placeholder/200/200",
      homeGround: "IS Bindra Stadium"
    },
    {
      name: "Rajasthan Royals",
      shortName: "RR",
      primaryColor: "#EA1A85",
      secondaryColor: "#254AA5",
      image: "/api/placeholder/200/200",
      homeGround: "Sawai Mansingh Stadium"
    },
    {
      name: "Sunrisers Hyderabad",
      shortName: "SRH",
      primaryColor: "#F7A721",
      secondaryColor: "#000000",
      image: "/api/placeholder/200/200",
      homeGround: "Rajiv Gandhi International Stadium"
    },
    {
      name: "Lucknow Super Giants",
      shortName: "LSG",
      primaryColor: "#A7D5EF",
      secondaryColor: "#193B6A",
      image: "/api/placeholder/200/200",
      homeGround: "BRSABV Ekana Cricket Stadium"
    },
    {
      name: "Gujarat Titans",
      shortName: "GT",
      primaryColor: "#1B2133",
      secondaryColor: "#0B4973",
      image: "/api/placeholder/200/200",
      homeGround: "Narendra Modi Stadium"
    }
  ])
  const [winner, setWinner] = useState("")

  const getWinner = () => {
    const temp = teams[Math.floor(Math.random()*teams.length)]
    setWinner(temp)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center text-white flex-col bg-black " 
    style={{
      background: winner 
        ? `linear-gradient(45deg, ${winner.primaryColor}, ${winner.secondaryColor})`
        : 'black'
    }}
    >
      <div 
  className='w-[30rem] b rounded-lg text-center backdrop-blur-2xl hover:scale-105 duration-300 shadow-xl'
  style={{
    background: winner 
    ? `linear-gradient(45deg, ${winner.secondaryColor}, ${winner.primaryColor})`
    : 'darktgray'
  }}
>
  <h1 className='text-2xl mt-5'>Winner of IPL 2025</h1>
  <h1 className={`text-white text-5xl my-5`}>
    {winner ? winner.name : "Get Winner"}
  </h1>
  <button 
    className='bg-zinc-100 active:scale-95 shadow-lg text-black text-lg font-semibold py-2 px-10 rounded-3xl mb-5 hover:scale-105 duration-300'
    onClick={getWinner}
  >
    Winner
  </button>
</div>

    </div>
  )
}

export default App