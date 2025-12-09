import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  const fetchListings = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/listings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(res.data.listings || []);
    } catch (err) {
      console.log(err);
      setListings([]);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(res.data.users || []);
    } catch (err) {
      console.log(err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchListings();
    fetchUsers();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = "/signin";
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>Listings</h3>
      {listings.length === 0 ? <p>No listings found.</p> : (
        <ul>
          {listings.map(listing => (
            <li key={listing._id}>
              <h4>{listing.title}</h4>
              <p>{listing.description}</p>
              <p>Price: ${listing.price}</p>
              <p>Owner: {listing.owner.name}</p>
            </li>
          ))}
        </ul>
      )}

      <h3>Users</h3>
      {users.length === 0 ? <p>No users found.</p> : (
        <ul>
          {users.map(user => (
            <li key={user._id}>{user.name} ({user.email})</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
