import  { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState(''); 
  const [fetchedData, setFetchedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const fetchGithubUserData = async () => {
    if (!userName.trim()) {
      setError('Please enter a valid GitHub username.');
      setFetchedData(null);
      return;
    }

    setLoading(true);
    setError(null);
    setFetchedData(null); 
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error('User not found. Please check the username.');
      }
      const data = await res.json();
      setFetchedData(data);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-[#0D1117] flex flex-col items-center gap-5 p-5">
      <h1 className="text-white text-2xl font-bold">GitHub Profile Finder</h1>
      <div className="flex gap-3">
        <input
          type="text"
          value={userName}
          onChange={handleChange}
          placeholder="Enter GitHub Username"
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={fetchGithubUserData}
          className="border border-green-400 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-black transition"
        >
          Search
        </button>
      </div>

      {loading ? (
        <h1 className="text-purple-400 mt-5">Loading...</h1>
      ) : error ? (
        <h1 className="text-red-500 mt-5">{error}</h1>
      ) : fetchedData ? (
        <div className="profile w-[20rem] h-[25rem] border border-[#39D353] text-green-500 flex flex-col items-center justify-evenly p-5 rounded-md">
          <div className="w-32 aspect-square overflow-hidden rounded-full border">
            <img
              className="w-full h-full object-cover"
              src={fetchedData.avatar_url}
              alt={fetchedData.name || 'GitHub Avatar'}
            />
          </div>

          <div className="flex justify-between px-2 py-2 w-full">
            <a
              href={`https://github.com/${fetchedData.login}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {fetchedData.name || fetchedData.login}
            </a>
            <h1 className="text-sm text-gray-400">
              Joined on {new Date(fetchedData.created_at).toLocaleDateString()}
            </h1>
          </div>

          <div className="text-center">
            <h1>Public Repos: {fetchedData.public_repos}</h1>
            <h1>Followers: {fetchedData.followers}</h1>
            <h1>Following: {fetchedData.following}</h1>
          </div>
        </div>
      ) : (
        <h1 className="text-purple-400 mt-5">Start by searching for a GitHub profile...</h1>
      )}
    </div>
  );
};

export default App;
