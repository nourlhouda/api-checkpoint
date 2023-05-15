
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListOfUSers from "./ListOfUSers";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
      console.log(result.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListOfUSers key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
