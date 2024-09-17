import React, { useState, useEffect } from "react";

const AutocompleteSearch = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [showsuggestion, setShowsuggetion] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const result = await response.json();
        const usernames = result.users.map(
          (user) => `${user.firstName} ${user.lastName}`
        );
        setData(usernames);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    const filteredSuggestions = data.filter((username) =>
      username.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredData(filteredSuggestions);
    setShowsuggetion(true);
  };

  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold my-6 text-center">Auto Complete Search</h1>

      <div className="relative w-72 mx-auto mt-10">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search username..."
          className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
        />

        {/* Suggestions Dropdown */}
        {showsuggestion && filteredData.length > 0 && (
          <ul className="absolute top-12 left-0 w-full bg-white border border-gray-400 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            {filteredData.map((username, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                onClick={() => {
                  setQuery(username);
                  setShowsuggetion(false);
                }}
              >
                {username}
              </li>
            ))}
          </ul>
        )}

        {/* No Results Found */}
        {query && filteredData.length === 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-400 rounded-lg shadow-lg px-4 py-2">
            No results found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AutocompleteSearch;
