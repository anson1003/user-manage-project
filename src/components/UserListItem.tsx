// UserListItem.tsx
import React from "react";
import { User } from "./interfaces";

interface UserListItemProps {
  user: User;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  let bgColorClass = '';
  if (user.age !== null && user.age !== undefined) {
  if (user.age < 18) {
    bgColorClass = 'bg-yellow-200';
  } else if (user.age > 50) {
    bgColorClass = 'bg-green-200';
  }}
  return (
    <tr className={bgColorClass}>
    <td className="border border-black border-double p-2">{user.firstname} {user.lastname}</td>
    <td className="border border-black border-double p-2">{user.gender}</td>
    <td className="border border-black border-double p-2">{user.age}</td>
  </tr>
  );
};

export default UserListItem;