import  { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const people = [
    { name: "Alice Johnson", city: "New York" },
    { name: "Bob Smith", city: "Los Angeles" },
    { name: "Catherine Davis", city: "Chicago" },
    { name: "David Wilson", city: "Houston" },
    { name: "Emma Brown", city: "Phoenix" },
    { name: "Frank Miller", city: "Philadelphia" },
    { name: "Grace Taylor", city: "San Antonio" },
    { name: "Henry Anderson", city: "San Diego" },
    { name: "Isabella Martinez", city: "Dallas" },
    { name: "Jack Thompson", city: "San Jose" },
    { name: "Kelly White", city: "Austin" },
    { name: "Liam Garcia", city: "Jacksonville" },
    { name: "Madison Clark", city: "San Francisco" },
    { name: "Nathan Rodriguez", city: "Columbus" },
    { name: "Olivia Lee", city: "Fort Worth" },
    { name: "Patrick Moore", city: "Indianapolis" },
    { name: "Quinn Wright", city: "Charlotte" },
    { name: "Rachel Adams", city: "Seattle" },
    { name: "Samuel Baker", city: "Denver" },
    { name: "Taylor Scott", city: "Boston" }
  ];


  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-8">

      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {filteredPeople.map((person, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="text-xl font-semibold text-gray-300 mb-2">{person.name}</div>
            <div className="text-gray-400">{person.city}</div>
          </div>
        ))}
      </div>

      {filteredPeople.length === 0 && (
        <div className="text-center text-gray-600 mt-8">
          No matches found for "{searchTerm}"
        </div>
      )}
    </div>
  );
};

export default App;