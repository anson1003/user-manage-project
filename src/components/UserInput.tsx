// UserInput.tsx
import React, { ChangeEvent, FormEvent } from "react";
import { User } from "./interfaces";

interface UserInputProps {
  newUser: User;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const UserInput: React.FC<UserInputProps> = ({ newUser, handleInputChange, handleSubmit }) => {
  return (
    <div className="bg-white px-12 pt-6">
      <form onSubmit={handleSubmit} className="border border-black px-6 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block font-bold mb-2">First Name</label>
          <input
            className="w-full border py-2 px-3"
            id="firstname"
            type="text"
            name="firstname"
            placeholder="Firstname"
            value={newUser.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Last Name</label>
          <input
            className="w-full border py-2 px-3"
            id="lastname"
            type="text"
            name="lastname"
            placeholder="Lastname"
            value={newUser.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Gender</label>
          <select
            className="w-full border py-2 px-3"
            id="gender"
            name="gender"
            placeholder="Age"
            value={newUser.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Age</label>
          <input
            className="w-full border py-2 px-3"
            id="age"
            type="text"
            name="age"
            placeholder="Age"
            value={newUser.age ?? ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 text-white font-bold py-2 px-4" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
