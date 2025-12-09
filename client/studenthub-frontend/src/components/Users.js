// src/components/Users.js
import React, { useEffect, useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get("/users");
        console.log("Users response:", res.data);
        setUsers(Array.isArray(res.data) ? res.data : res.data.users || []);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u._id}>
              {u.name} ({u.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Users;
