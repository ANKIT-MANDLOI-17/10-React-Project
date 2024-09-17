import React, { useState } from "react";

const GitHubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  const fetchProfile = async () => {
    setError("");
    setProfile(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        throw new Error("Profile not found");
      }
    } catch (error) {
      setError("Profile not found!");
    }
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      fetchProfile();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Finder</h1>
      <form onSubmit={handleSubmit} className="flex space-x-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {profile && (
        <div className="mt-8 p-4 bg-white rounded-lg shadow-lg w-80 ">
          <img
            src={profile.avatar_url}
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto"
          />
          <h2 className="text-center text-2xl font-semibold mt-4">
            {profile.name}
          </h2>
          <p className="text-center text-gray-600">{profile.bio}</p>
          <div className="mt-4 text-center">
            <p>
              <span className="font-bold">Followers:</span> {profile.followers}
            </p>
            <p>
              <span className="font-bold">Following:</span> {profile.following}
            </p>
            <a
              href={profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubProfileFinder;
