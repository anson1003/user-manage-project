// UserInput.tsx
import React, { ChangeEvent, FormEvent } from "react";
import { AGE, FIRST_NAME, GENDER, LAST_NAME } from "./constants";
import { User } from "./interfaces";

interface UserInputProps {
  newUser: User;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isLoading: boolean; // Add isLoading prop
}

const UserInput: React.FC<UserInputProps> = ({ newUser, handleInputChange, handleSubmit ,isLoading}) => {
  return (
    <div className="bg-white px-12 pt-6">
      <form onSubmit={handleSubmit} className="border border-black px-6 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block font-bold mb-2">{FIRST_NAME}</label>
          <input required
            className="w-full border py-2 px-3"
            id="firstname"
            type="text"
            name="firstname"
            placeholder={FIRST_NAME}
            value={newUser.firstname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2"></label>
          <input required
            className="w-full border py-2 px-3"
            id="lastname"
            type="text"
            name="lastname"
            placeholder={LAST_NAME}
            value={newUser.lastname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">{GENDER}</label>
          <select required
            className="w-full border py-2 px-3"
            id="gender"
            name="gender"
            placeholder={GENDER}
            value={newUser.gender}
            onChange={handleInputChange}
          >
            <option value="a">------select-gender------</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">{AGE}</label>
          <input required
            className="w-full border py-2 px-3"
            id="age"
            type="text"
            name="age"
            placeholder={AGE}
            value={newUser.age ?? ''}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className={`bg-blue-500 text-white font-bold py-2 px-4 ${isLoading ? 'opacity-30 cursor-not-allowed' : ''}`}
            type="submit"
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? 'Adding...' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
