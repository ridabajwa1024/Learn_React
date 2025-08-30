import React, { useState } from "react";

function SearchList() {
  const [search, setSearch] = useState(""); // input ki value store hogi

  const users = [
    { id: 1, name: "Ali", age: 18 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Ahmed", age: 22 },
    { id: 4, name: "Ayesha", age: 19 },
  ];

  // filter logic: jo user ka name search input se match kare
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>User List</h2>

      {/* Input box */}
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // input ki value update hogi
      />

      {/* Filtered list */}
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))
        ) : (
          <p>No user found</p> // agar koi match na mile
        )}
      </ul>
    </div>
  );
}

export default SearchList;
