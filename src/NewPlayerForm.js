import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPlayerForm = ({ addPlayer }) => {
  const [newPlayer, setNewPlayer] = useState({
    rank: "",
    firstname: "",
    lastname: "",
    age: "",
    trophies: "",
    club: "",
    nationality: "",
    details: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (typeof addPlayer === "function") {
      addPlayer(newPlayer);
      navigate("/ai-array-app");
    } else {
      console.error("addPlayer is not a function");
    }
  };

  const handleChange = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          name="rank"
          type="number"
          value={newPlayer.rank}
          onChange={handleChange}
          placeholder="Rank"
          required
        />
        <input
          name="firstname"
          value={newPlayer.firstname}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          name="lastname"
          value={newPlayer.lastname}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          name="age"
          type="number"
          value={newPlayer.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          name="trophies"
          type="number"
          value={newPlayer.trophies}
          onChange={handleChange}
          placeholder="Trophies"
          required
        />
        <input
          name="club"
          value={newPlayer.club}
          onChange={handleChange}
          placeholder="Club"
          required
        />
        <input
          name="nationality"
          value={newPlayer.nationality}
          onChange={handleChange}
          placeholder="Nationality"
          required
        />
        <textarea
          name="details"
          value={newPlayer.details}
          onChange={handleChange}
          placeholder="Details"
          required
        />
        <button type="submit" className="form-button">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default NewPlayerForm;
