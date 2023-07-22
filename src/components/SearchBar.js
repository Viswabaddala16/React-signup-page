import React, { useState,useEffect } from "react";
import axios from "axios";
// console.log("Client_id",process.env.REACT_APP_CLIENT_ID);
const SearchBar = ({ setInfo }) => {
  const [search, setSearch] = useState("");

  useEffect(()=>{

    console.log("I am working")
    getImages()
  },[])

  async function getImages() {
    try {
      let request = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query: search || "nature"
        },
        headers: {
          Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`
        }
      });

      setInfo(request.data.results);
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={getImages}>Search</button>
    </div>
  );
};

export default SearchBar;
