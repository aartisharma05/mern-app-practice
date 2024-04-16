import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.github.com/users");
        const data = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <ul>
          {userData.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.login}</p>
                <img
                  className="h-10 w-10"
                  src={item.avatar_url}
                  alt={item.login}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FetchData;
