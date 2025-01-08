import CharacterCard from "../../components/characterCard/characterCard";
import Sidebar from "../../components/sidebar/sidebar";
import testCharacters from "../../testCharacters";
import "./dashboard.css";

import { useState, useEffect } from "react";

const Dashboard = () => {
  const [characters, setCharacters] = useState(testCharacters);

  // useEffect(() => {
  //     fetch('../../testCharacters.json')
  //     .then((res) => res.json())
  //     .then((data) => {
  //         console.log('data response', data)
  //         setCharacters(...characters, data)
  //     })
  // })

  console.log(characters);

  return (
    <div id="dashboard">
      <div id="sidebar">
        <Sidebar />
      </div>
      <div id="main-dash">
          {characters.map((char) => {
            return (
                <CharacterCard character={char} />
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
