import CharacterCard from "../../components/characterCard/characterCard";
import Sidebar from "../../components/sidebar/sidebar";
import testCharacters from "../../testCharacters";

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
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <ul>
          {characters.map((char) => {
            return (
              <li>
                <CharacterCard character={char} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
