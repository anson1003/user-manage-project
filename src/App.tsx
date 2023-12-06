import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { User } from "./components/interfaces";
import UserInput from "./components/UserInput";
import UserList from "./components/UserList";


const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<User>({ firstname: "", lastname: "", gender: "", age: null });
  const [isLoading, setIsLoading] = useState(false);


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

    // if (!newUser.firstname || !newUser.lastname || !newUser.gender) {
    //   alert("Please fill out all fields");
    //   return;
    // }
    // if (!newUser.age || newUser.age <= 0) {
    //   alert("Please enter a valid age");
    //   return;
    // }
    
    setIsLoading(true);
    setTimeout(() => {
    createUser(newUser);
    setNewUser({ firstname: "", lastname: "", gender: "", age: null });
    setIsLoading(false); // Set loading state back to false after the operation is completed
  }, 500);
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setUsers([]);
  };

  return (
    <div className="App relative">
      {isLoading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
      </div>
    )}
      <UserInput
        newUser={newUser}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading} 
      />
      <UserList users={users} />
      <button onClick={clearLocalStorage}>Clear</button>
    </div>
  );
};

export default App;
