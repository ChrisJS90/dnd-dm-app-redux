import { useState } from "react";
import { statMod } from "../../utilities/functions";
import "./characterCard.css"

const CharacterCard = ({ character }) => {
  const [char, setChar] = useState(character);
  const [hp, setHp] = useState(char.combat.hpMax);

  const mods = {
    str: statMod(char.stats.str),
    dex: statMod(char.stats.dex),
    con: statMod(char.stats.con),
    int: statMod(char.stats.int),
    wis: statMod(char.stats.wis),
    cha: statMod(char.stats.cha),
  };

  function handleHp(e) {
    let newHp = hp;

    if (e.target.name === "decrementHp") {
      newHp--;
      if (newHp >= 0) {
        setHp(newHp);
      } else {
        setHp(0);
      }
    } else {
      newHp++;
      if (newHp <= char.combat.hpMax) {
        setHp(newHp);
      } else {
        setHp(char.combat.hpMax);
      }
    }
  }


  return (
    <div id="card">
      <div id="basic-info">
        <h3>{`${char.name}`}</h3>
        <h4>{`Player: ${char.player}`}</h4>
        <div id="basic-details">
          <p>
            {`${char.class}`} Level: {`${char.level}`}
          </p>
          <p>{`${char.race}`}</p>
          <p>{`${char.alignment}`}</p>
        </div>
      </div>
      <div id="combat-info">
        <div id="health">
          <p>{`AC: ${char.combat.ac}`}</p>
          <p>{`HP Max: ${char.combat.hpMax}`}</p>
          <span>
            <p>{`Current HP: ${hp}`}</p>
            <button name="decrementHp" onClick={handleHp}>
              {" "}
              -{" "}
            </button>
            <button name="incrementHp" onClick={handleHp}>
              {" "}
              +{" "}
            </button>
          </span>
        </div>
        {/* <div id="speed-initiative">
          <p>{`Speed: ${char.combat.speed}`}</p>
          <label>
            Initiative
            <input type="number" placeholder="initiative" />
          </label>
        </div> */}
      </div>
      <div id="stats">
        <div className="stat">
          <p>Strength</p>
          <p>{`${char.stats.str}`}</p>
          <p>{`${mods.str}`}</p>
        </div>
        <div className="stat">
          <p>Dexterity</p>
          <p>{`${char.stats.dex}`}</p>
          <p>{`${mods.dex}`}</p>
        </div>
        <div className="stat">
          <p>Constitution</p>
          <p>{`${char.stats.con}`}</p>
          <p>{`${mods.con}`}</p>
        </div>
        <div className="stat">
          <p>Intelligence</p>
          <p>{`${char.stats.int}`}</p>
          <p>{`${mods.int}`}</p>
        </div>
        <div className="stat">
          <p>Wisdom</p>
          <p>{`${char.stats.wis}`}</p>
          <p>{`${mods.wis}`}</p>
        </div>
        <div className="stat">
          <p>Charisma</p>
          <p>{`${char.stats.cha}`}</p>
          <p>{`${mods.cha}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard
