// src/components/Listings.js
import React, { useEffect, useState } from "react";
import api from "../api";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await api.get("/listings");
        console.log("Listings response:", res.data);
        setListings(Array.isArray(res.data) ? res.data : res.data.listings || []);
      } catch (err) {
        console.error("Error fetching listings:", err);
      }
    };
    fetchListings();
  }, []);

  return (
    <div>
      <h3>Listings</h3>
      {listings.length === 0 ? (
        <p>No listings found</p>
      ) : (
        <ul>
          {listings.map((l) => (
            <li key={l._id}>
              <strong>{l.title}</strong> - {l.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Listings;
