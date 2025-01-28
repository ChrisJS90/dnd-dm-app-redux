import { useState } from "react";
import { profBonusCalc, statMod, profCalc } from "../../utilities/functions";
import "./newCharacter.css";

import Modal from "react-modal";
import weapons from "../../utilities/weapons";

const NewCharacter = () => {
  const [newChar, setNewChar] = useState({
    name: "",
    class: "",
    level: 1,
    background: "",
    player: "",
    race: "",
    alignment: "",
    stats: {
      str: 1,
      dex: 1,
      con: 1,
      int: 1,
      wis: 1,
      cha: 1,
    },
    profBonus: 2,
    savingThrows: {
      str: {
        val: 0,
        isProf: false,
      },
      dex: {
        val: 0,
        isProf: false,
      },
      con: {
        val: 0,
        isProf: false,
      },
      int: {
        val: 0,
        isProf: false,
      },
      wis: {
        val: 0,
        isProf: false,
      },
      cha: {
        val: 0,
        isProf: false,
      },
    },
    skills: {
      acrobatics: {
        val: 0,
        isProf: false,
      },
      animHand: {
        val: 0,
        isProf: false,
      },
      arcana: {
        val: 0,
        isProf: false,
      },
      athl: {
        val: 0,
        isProf: false,
      },
      decep: {
        val: 0,
        isProf: false,
      },
      hist: {
        val: 0,
        isProf: false,
      },
      insight: {
        val: 0,
        isProf: false,
      },
      intimid: {
        val: 0,
        isProf: false,
      },
      invest: {
        val: 0,
        isProf: false,
      },
      med: {
        val: 0,
        isProf: false,
      },
      nature: {
        val: 0,
        isProf: false,
      },
      percep: {
        val: 0,
        isProf: false,
      },
      perf: {
        val: 0,
        isProf: false,
      },
      pers: {
        val: 0,
        isProf: false,
      },
      religion: {
        val: 0,
        isProf: false,
      },
      sOfH: {
        val: 0,
        isProf: false,
      },
      stealth: {
        val: 0,
        isProf: false,
      },
      surv: {
        val: 0,
        isProf: false,
      },
    },
    combat: {
      hpMax: 1,
      ac: 1,
      speed: 20,
      hitDice: "",
    },
    attacks: [],
  });

  const [modifiers, setModifiers] = useState({
    str: -5,
    dex: -5,
    con: -5,
    int: -5,
    wis: -5,
    cha: -5,
  });

  function handleChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    if (inputName === "name") {
      setNewChar({ ...newChar, name: inputValue });
    } else if (inputName === "class") {
      setNewChar({ ...newChar, class: inputValue });
    } else if (inputName === "level") {
      setNewChar({
        ...newChar,
        level: inputValue,
        profBonus: profBonusCalc(inputValue),
      });
    } else if (inputName === "background") {
      setNewChar({ ...newChar, background: inputValue });
    } else if (inputName === "player") {
      setNewChar({ ...newChar, player: inputValue });
    } else if (inputName === "race") {
      setNewChar({ ...newChar, race: inputValue });
    } else if (inputName === "alignment") {
      setNewChar({ ...newChar, alignment: inputValue });
    } else if (inputName === "str") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          str: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          str: {
            ...prevState.savingThrows.str,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.str.isProf
            ),
          },
        },
        skills: {
          ...prevState.skills,
          athl: {
            ...prevState.skills.athl,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.athl.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        str: statMod(inputValue),
      }));
    } else if (inputName === "dex") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          dex: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          dex: {
            ...prevState.savingThrows.dex,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.dex.isProf
            ),
          },
        },
        skills: {
          ...prevState.skills,
          acrobatics: {
            ...prevState.skills.acrobatics,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.acrobatics.isProf
            ),
          },
          sOfH: {
            ...prevState.skills.sOfH,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.sOfH.isProf
            ),
          },
          stealth: {
            ...prevState.skills.stealth,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.stealth.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        dex: statMod(inputValue),
      }));
    } else if (inputName === "con") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          con: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          con: {
            ...prevState.savingThrows.con,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.con.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        con: statMod(inputValue),
      }));
    } else if (inputName === "int") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          int: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          int: {
            ...prevState.savingThrows.int,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.int.isProf
            ),
          },
        },
        skills: {
          ...prevState.skills,
          arcana: {
            ...prevState.skills.arcana,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.arcana.isProf
            ),
          },
          hist: {
            ...prevState.skills.hist,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.hist.isProf
            ),
          },
          invest: {
            ...prevState.skills.hist,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.invest.isProf
            ),
          },
          nature: {
            ...prevState.skills.nature,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.nature.isProf
            ),
          },
          religion: {
            ...prevState.skills.religion,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.religion.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        int: statMod(inputValue),
      }));
    } else if (inputName === "wis") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          wis: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          wis: {
            ...prevState.savingThrows.wis,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.wis.isProf
            ),
          },
        },
        skills: {
          ...prevState.skills,
          animHand: {
            ...prevState.skills.animHand,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.animHand.isProf
            ),
          },
          insight: {
            ...prevState.skills.insight,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.insight.isProf
            ),
          },
          med: {
            ...prevState.skills.med,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.med.isProf
            ),
          },
          percep: {
            ...prevState.skills.percep,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.percep.isProf
            ),
          },
          surv: {
            ...prevState.skills.surv,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.surv.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        wis: statMod(inputValue),
      }));
    } else if (inputName === "cha") {
      setNewChar((prevState) => ({
        ...prevState,
        stats: {
          ...prevState.stats,
          cha: inputValue,
        },
        savingThrows: {
          ...prevState.savingThrows,
          cha: {
            ...prevState.savingThrows.cha,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.savingThrows.cha.isProf
            ),
          },
        },
        skills: {
          ...prevState.skills,
          decep: {
            ...prevState.skills.decep,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.decep.isProf
            ),
          },
          intimid: {
            ...prevState.skills.intimid,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.intimid.isProf
            ),
          },
          perf: {
            ...prevState.skills.perf,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.perf.isProf
            ),
          },
          pers: {
            ...prevState.skills.pers,
            val: profCalc(
              newChar.profBonus,
              inputValue,
              newChar.skills.pers.isProf
            ),
          },
        },
      }));
      setModifiers((prevState) => ({
        ...prevState,
        cha: statMod(inputValue),
      }));
    }
  }

  function handleProfs(event) {
    const inputName = event.target.name;
    const isChecked = event.target.checked;
    console.log(event.target.checked);

    // Want to add a check for number of saving throws that is proficient as there can only be two

    if (inputName === "str") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          str: {
            val: profCalc(newChar.profBonus, newChar.stats.str, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "dex") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          dex: {
            val: profCalc(newChar.profBonus, newChar.stats.dex, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "con") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          wis: {
            val: profCalc(newChar.profBonus, newChar.stats.con, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "int") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          int: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "wis") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          wis: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "cha") {
      setNewChar((prevState) => ({
        ...prevState,
        savingThrows: {
          ...prevState.savingThrows,
          cha: {
            val: profCalc(newChar.profBonus, newChar.stats.cha, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "acrobatics") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          acrobatics: {
            val: profCalc(newChar.profBonus, newChar.stats.dex, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "animHand") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          animHand: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "arcana") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          arcana: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "athl") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          athl: {
            val: profCalc(newChar.profBonus, newChar.stats.str, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "decep") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          decep: {
            val: profCalc(newChar.profBonus, newChar.stats.cha, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "hist") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          hist: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "insight") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          insight: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "intimid") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          intimid: {
            val: profCalc(newChar.profBonus, newChar.stats.cha, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "invest") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          invest: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "med") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          med: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "nature") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          nature: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "percep") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          percep: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "perf") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          perf: {
            val: profCalc(newChar.profBonus, newChar.stats.cha, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "pers") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          pers: {
            val: profCalc(newChar.profBonus, newChar.stats.cha, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "religion") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          religion: {
            val: profCalc(newChar.profBonus, newChar.stats.int, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "sOfH") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          sOfH: {
            val: profCalc(newChar.profBonus, newChar.stats.dex, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "stealth") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          stealth: {
            val: profCalc(newChar.profBonus, newChar.stats.dex, isChecked),
            isProf: isChecked,
          },
        },
      }));
    } else if (inputName === "surv") {
      setNewChar((prevState) => ({
        ...prevState,
        skills: {
          ...prevState.skills,
          surv: {
            val: profCalc(newChar.profBonus, newChar.stats.wis, isChecked),
            isProf: isChecked,
          },
        },
      }));
    }
  }

  const [attack, setAttack] = useState({
    name: "",
    ofName: "",
    damage: "",
    dType: "",
    properties: [],
  });

  const [weapon, setWeapon] = useState();

  const [attackModalIsOpen, setAttackModalIsOpen] = useState(false);

  function openAttackModal(e) {
    e.preventDefault();
    setAttackModalIsOpen(true);
  }

  function closeAttackModal(e) {
    // e.preventDefault();
    setAttack({ name: "", ofName: "", damage: "", dType: "", properties: [] });
    setAttackModalIsOpen(false);
  }

  function handleAttackChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "name") {
      setAttack((prevState) => ({
        ...prevState,
        name: inputValue,
      }));
    } else if (inputName === "ofName") {
      const w = weapons.find((wpn) => wpn.name === inputValue);
      setWeapon(w);
      setAttack((prevState) => ({
        ...prevState,
        ofName: inputValue,
        damage: w.damage,
        dType: w.dType,
        properties: w.properties,
      }));
    } else if (inputName === "damage") {
      setAttack((prevState) => ({
        ...prevState,
        damage: inputValue,
      }));
    } else if (inputName === "dType") {
      setAttack((prevState) => ({
        ...prevState,
        dType: inputValue,
      }));
    }
  }

  function handleAttackSubmit(e) {
    e.preventDefault();
    setNewChar((prevState) => ({
      ...prevState,
      attacks: [...prevState.attacks, attack],
    }));
    closeAttackModal();
  }

  return (
    <div>
      <form>
        {/* Basic info block */}
        <div id="basic-info">
          <div className="info-tile">
            <input
              type="text"
              name="name"
              placeholder="Character Name"
              onChange={handleChange}
            />
            <p>Character Name</p>
          </div>
          <div className="info-tile">
            <input
              type="text"
              name="class"
              placeholder="Class?"
              onChange={handleChange}
            />
            <p>Class</p>
          </div>
          <div className="info-tile">
            <input
              type="number"
              name="level"
              placeholder="Level?"
              onChange={handleChange}
            />
            <p>Level</p>
          </div>
          <div className="info-tile">
            <input
              type="text"
              name="background"
              placeholder="Background?"
              onChange={handleChange}
            />
            <p>Background</p>
          </div>
          <div className="info-tile">
            <input
              type="text"
              name="player"
              placeholder="Player Name?"
              onChange={handleChange}
            />
            <p>Player Name</p>
          </div>
          <div className="info-tile">
            <input
              type="text"
              name="race"
              placeholder="Race?"
              onChange={handleChange}
            />
            <p>Race</p>
          </div>
          <div className="info-tile">
            <input
              type="text"
              name="alignment"
              placeholder="Alignment?"
              onChange={handleChange}
            />
            <p>Alignment</p>
          </div>
          <div className="info-tile">{/* Intentionally left blank */}</div>
        </div>

        <div id="details">
          {/* Left column with stats, skills, profeciencies*/}
          <div id="stat-block" className="sheet-column">
            <div id="stats-and-skills">
              <div id="stats">
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="str"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.str}`}</p>
                  <p>Strength</p>
                </div>
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="dex"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.dex}`}</p>
                  <p>Dexterity</p>
                </div>
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="con"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.con}`}</p>
                  <p>Constitution</p>
                </div>
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="int"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.int}`}</p>
                  <p>Intelligence</p>
                </div>
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="wis"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.wis}`}</p>
                  <p>Wisdom</p>
                </div>
                <div className="stat-tile">
                  <input
                    className="stat-num"
                    type="number"
                    name="cha"
                    onChange={handleChange}
                  />
                  <p>{`${modifiers.cha}`}</p>
                  <p>Charisma</p>
                </div>
              </div>
              <div id="skills">
                <div id="proficiency-bonus">
                  <span>{`${newChar.profBonus}`}</span>
                  <span>Proficiency Bonus</span>
                </div>
                <div id="save-throws">
                  <ul id="throw-list">
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="str"
                        onChange={handleProfs}
                      />
                      <span>{`${newChar.savingThrows.str.val}`} Strength</span>
                    </li>
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="dex"
                        onChange={handleProfs}
                      />
                      <span>{`${newChar.savingThrows.dex.val}`} Dexterity</span>
                    </li>
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="con"
                        onChange={handleProfs}
                      />
                      <span>
                        {`${newChar.savingThrows.con.val}`} Constitution
                      </span>
                    </li>
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="int"
                        onChange={handleProfs}
                      />
                      <span>
                        {`${newChar.savingThrows.int.val}`} Intelligence
                      </span>
                    </li>
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="wis"
                        onChange={handleProfs}
                      />
                      <span>{`${newChar.savingThrows.wis.val}`} Wisdom</span>
                    </li>
                    <li className="throw-tile">
                      <input
                        type="checkbox"
                        name="cha"
                        onChange={handleProfs}
                      />
                      <span>{`${newChar.savingThrows.cha.val}`} Charisma</span>
                    </li>
                  </ul>
                </div>
                <div id="skill-profs">
                  <ul>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="acrobatics"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.acrobatics.val}`} Acrobatics (Dex)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="animHand"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.animHand.val}`} Animal Handling (Wis)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="arcana"
                        onClick={handleProfs}
                      ></input>
                      <span>{`${newChar.skills.arcana.val}`} Arcana (Int)</span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="athl"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.athl.val}`} Athletics (Str)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="decep"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.decep.val}`} Deception (Cha)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="hist"
                        onClick={handleProfs}
                      ></input>
                      <span>{`${newChar.skills.hist.val}`} History (Int)</span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="insight"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.insight.val}`} Insight (Wis)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="intimid"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.intimid.val}`} Intimidate (Cha)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="invest"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.invest.val}`} Investigation (Int)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="med"
                        onClick={handleProfs}
                      ></input>
                      <span>{`${newChar.skills.med.val}`} Medicine (Wis)</span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="nature"
                        onClick={handleProfs}
                      ></input>
                      <span>{`${newChar.skills.nature.val}`} Nature (Int)</span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="percep"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.percep.val}`} Perception (Wis)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="perf"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.perf.val}`} Performance (Cha)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="pers"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.pers.val}`} Persuasion (Cha)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="religion"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.religion.val}`} Religion (Int)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="sOfH"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.sOfH.val}`} Sleight of Hand (Dex)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="stealth"
                        onClick={handleProfs}
                      ></input>
                      <span>
                        {`${newChar.skills.stealth.val}`} Stealth (Dex)
                      </span>
                    </li>
                    <li className="skill-tile">
                      <input
                        type="checkbox"
                        name="surv"
                        onClick={handleProfs}
                      ></input>
                      <span>{`${newChar.skills.surv.val}`} Survival (Wis)</span>
                    </li>
                  </ul>
                </div>
                <div className="other-profs">
                  <ul>
                    {/* create new state of new proficiencies as an array and map them here */}
                  </ul>
                  <div id="add-prof">
                    {/* create new input to create new proficiencies */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle column for combat details, i.e. health, AC, equipment */}
          <div className="sheet-column" id="status-block">
            <div id="combat-stats">
              <div id="a-s">
                <div id="ac">
                  <input type="number"></input>
                  <p>Armour Class</p>
                </div>
                <div id="speed">
                  <input type="number"></input>
                  <p>Speed</p>
                </div>
              </div>
              <div id="hp">
                <input type="number"></input>
                <p>Hit Point Maximum</p>
              </div>
              <div id="hit-dice">
                <input type="text"></input>
                <p>Hit Dice</p>
              </div>
            </div>
            <div id="attacks">
              {/* <div id="attack-column-header">
                <p>Name</p>
                <p>Attack Bonus</p>
                <p>Damage</p>
                <p>Damage Type</p>
                <p>Properties</p>
              </div> */}
              <ul>
                <li id="attack-column-header">
                  <p>Name</p>
                  <p>Attack Bonus</p>
                  <p>Damage</p>
                  <p>Damage Type</p>
                  <p>Properties</p>
                </li>
                {newChar.attacks.map((att) => {
                  return (
                    <li className="attack-info">
                      <p>{`${att.name}`}</p>
                      <p>{`+${newChar.profBonus + modifiers.str}`}</p>
                      <p>{`${att.damage} +${modifiers.str}`}</p>
                      <p>{`${att.dType}`}</p>
                      <div>
                        {att.properties.map((prop) => {
                          return <p>{`${prop}`}</p>;
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div id="add-attack">
                <button onClick={openAttackModal}>Add New Attack</button>
                <Modal
                  isOpen={attackModalIsOpen}
                  className="Modal"
                  id="attackModal"
                  overlayClassName="overlay"
                >
                  <form
                    name="attackForm"
                    id="new-attack-form"
                    onSubmit={handleAttackSubmit}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Attack Name"
                      onChange={handleAttackChange}
                    />
                    <select name="ofName" onChange={handleAttackChange}>
                      {weapons.map((w) => {
                        return <option value={w.name}>{`${w.name}`}</option>;
                      })}
                    </select>
                    <div className="attack-detail">
                      <p>Damage</p>
                      <p>{`${attack.damage}`}</p>
                    </div>
                    <div className="attack-detail">
                      <p>Damage Type</p>
                      <p>{`${attack.dType}`}</p>
                    </div>
                    <div>
                      {attack.properties.map((prop) => {
                        return <p>{`${prop}`}</p>;
                      })}
                    </div>
                    <button onClick={handleAttackSubmit}>Add Attack</button>
                  </form>
                  <button onClick={closeAttackModal}>Cancel</button>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewCharacter;
