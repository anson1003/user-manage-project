// UserList.tsx
import React from "react";
import { User } from "./interfaces";
import UserListItem from "./UserListItem";

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
<div className="p-4">
  <h2 className="text-lg font-bold mb-4">User List</h2>
  <table className="w-full border border-black border-double">
    <thead className="bg-gray-200">
      <tr>
        <th className="border border-black border-double p-2">User Name</th>
        <th className="border border-black border-double p-2">Gender</th>
        <th className="border border-black border-double p-2">Age</th>
      </tr>
    </thead>
    <tbody>
          {users.map((user, index) => (
            <UserListItem key={index} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
