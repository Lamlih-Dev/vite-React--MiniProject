import React from "react";
import { useState } from "react";
import UserProfileCard from "./components/user-profile-card/UserProfileCard";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const team = [
    {
      id: 1,
      photo: "images/me.jpeg",
      name: "Ahmed Lamlih",
      description: "A web developer and currently learning cybersecurity at JobInTech",
      age: 24,
      hobbies: ["Surf", "Basket Ball", "Foot Ball"]
    },
    {
      id: 2,
      photo: "images/user1.avif",
      name: "Afifa Latif",
      description: "An expert in UX/UI designs at JobInTech, with good skills",
      age: 21,
      hobbies: ["Reading", "Dance", "Movies"]
    },
    {
      id: 3,
      photo: "images/user2.jpg",
      name: "Fatiha khalif",
      description: "A sales expert and currently learning web technologies   at JobInTech",
      age: 22,
      hobbies: ["Travel", "Modeling", "Chess"]
    },
  ]
  return (
  <>
    <Navbar />
    <div className="app">
      <div className="container">
        <div className=" row gy-2">
          {team.map((team_member) => (
            <UserProfileCard key={team_member.id} id={team_member.id} photo={team_member.photo} name={team_member.name} description={team_member.description} age={team_member.age} hobbies={team_member.hobbies} />
          ))}
        </div>
      </div>
    </div>
  </>
  );
}

export default App;