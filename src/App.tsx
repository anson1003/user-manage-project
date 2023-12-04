import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { User } from "./components/interfaces";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({ firstname: "", lastname: "", gender: "", age: null });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const createUser = (user: User) => {
    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newUser.firstname || !newUser.lastname || !newUser.gender) {
      alert("Please fill out all fields");
      return;
    }
    if (!newUser.age || newUser.age <= 0) {
      alert("Please enter a valid age");
      return;
    }

    createUser(newUser);
    setNewUser({ firstname: "", lastname: "", gender: "", age: null });
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setUsers([]);
  };

  return (
    <div className="App">
      <UserInput
        newUser={newUser}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <UserList users={users} />
      <button onClick={clearLocalStorage}>Clear</button>
    </div>
  );
};

export default App;
