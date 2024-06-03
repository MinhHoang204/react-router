import React from 'react'
import { useParams } from 'react-router-dom';
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
export default function Bai10_UserDetail() {
  const { id } = useParams<{ id: string }>();
  const user = users.find(user => user.id === Number(id));

  if (!user) {
    return <div>User not found</div>;
  }
  return (
    <div>
      <h1>User Detail</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Address: {user.address}</p>
    </div>
  )
}
