import React from 'react'
import { Link } from 'react-router-dom';
interface User {
    id: number;
    name: string;
    email: string;
    address: string;
} 
const users: User[] = [
    { id: 1, name: 'Nguyen Van A', email: 'nva@gmail.com', address: 'Ha Noi' },
    { id: 2, name: 'Nguyen Van B', email: 'nvb@gmail.com', address: 'Ha Nam' },
    { id: 3, name: 'Nguyen Van C', email: 'nvc@gmail.com', address: 'Ninh Binh' },
];
export default function Bai10_ListUser() {
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
            <Link to={`/user-detail/${user.id}`}>
              <button>Xem chi tiết</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
