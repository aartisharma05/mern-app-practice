import React, { useState, useEffect } from "react";

const MultipleReturn = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        console.log(data);
        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error: " + error.message);
      }
    }

    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
  return (
    <div>
      <ul>
        {users.map((item) => {
          return <li key={item.id}>{item.login}</li>;
        })}
      </ul>
    </div>
  );
};

export default MultipleReturn;
