const weapons = [
    // Simple Melee Weapons
    {
        name: "Club",
        group: "Simple Melee Weapons",
        damage: "1d4",
        dType: "bludgeoning",
        properties: ["Light"]
    },
    {
        name: "Dagger",
        group: "Simple Melee Weapons",
        damage: "1d4",
        dType: "piercing",
        properties: ["Finesse", "Light", "Thrown (range 20/60)"]
    },
    {
        name: "Greatclub",
        group: "Simple Melee Weapons",
        damage: "1d8",
        dType: "bludgeoning",
        properties: ["Two-handed"]
    },
    {
        name: "Handaxe",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "slashing",
        properties: ["Light", "Thrown (range 20/60)"]
    },
    {
        name: "Javelin",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Thrown (range 20/60)"]
    },
    {
        name: "Light hammer",
        group: "Simple Melee Weapons",
        damage: "1d4",
        dType: "bludgeoning",
        properties: ["Light", "Thrown (range 20/60"]
    },
    {
        name: "Mace",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "bludgeoning",
        properties: []
    },
    {
        name: "Quarterstaff",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "bludgeoning",
        properties: ["Versatile (1d8)"]
    },
    {
        name: "Sickle",
        group: "Simple Melee Weapons",
        damage: "1d4",
        dType: "slashing",
        properties: ["Light"]
    },
    {
        name: "Spear",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Thrown (range 20/60)", "Versatile (1d8)"]
    },
    {
        name: "Mace",
        group: "Simple Melee Weapons",
        damage: "1d6",
        dType: "bludgeoning",
        properties: []
    },
    // Simple Ranged Weapons
    {
        name: "Crossbow, light",
        group: "Simple Ranged Weapons",
        damage: "1d8",
        dType: "piercing",
        properties: ["Ammunition (range 80/320)", "Loading", "Two-handed"]
    },
    {
        name: "Dart",
        group: "Simple Ranged Weapons",
        damage: "1d4",
        dType: "piercing",
        properties: ["Finesse", "Thrown (range 20/60)"]
    },
    {
        name: "Shortbow",
        group: "Simple Ranged Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Ammunition (range 80/320)", "Two-handed"]
    },
    {
        name: "Sling",
        group: "Simple Ranged Weapons",
        damage: "1d4",
        dType: "bludgeoning",
        properties: ["Ammunition (range 30/120)"]
    },
    // Martial Melee Weapons
    {
        name: "Battleaxe",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "slashing",
        properties: ["Versatile (1d10)"]
    },
    {
        name: "Flail",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "bludgeoning",
        properties: []
    },
    {
        name: "Glaive",
        group: "Martial Melee Weapons",
        damage: "1d10",
        dType: "slashing",
        properties: ["Heavy", "Reach", "Two-handed"]
    },
    {
        name: "Greataxe",
        group: "Martial Melee Weapons",
        damage: "1d12",
        dType: "slashing",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Greatsword",
        group: "Martial Melee Weapons",
        damage: "2d6",
        dType: "slashing",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Halberd",
        group: "Martial Melee Weapons",
        damage: "1d10",
        dType: "slashing",
        properties: ["Heavy", "Reach", "Two-handed"]
    },
    {
        name: "Lance",
        group: "Martial Melee Weapons",
        damage: "1d12",
        dType: "piercing",
        properties: ["Reach", "Special"]
    },
    {
        name: "Longsword",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "slashing",
        properties: ["Versatile (1d10)"]
    },
    {
        name: "Maul",
        group: "Martial Melee Weapons",
        damage: "2d6",
        dType: "bludgeoning",
        properties: ["Heavy", "Two-handed"]
    },
    {
        name: "Morningstar",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "piercing",
        properties: []
    },
    {
        name: "Pike",
        group: "Martial Melee Weapons",
        damage: "1d10",
        dType: "piercing",
        properties: ["Heavy", "Reach", "Two-handed"]
    },
    {
        name: "Rapier",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "piercing",
        properties: ["Finesse"]
    },
    {
        name: "Scimitar",
        group: "Martial Melee Weapons",
        damage: "1d6",
        dType: "slashing",
        properties: ["Finesse", "Light"]
    },
    {
        name: "Shortsword",
        group: "Martial Melee Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Finesse", "Light"]
    },
    {
        name: "Trident",
        group: "Martial Melee Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Thrown (range 20/60)", "Versatile (1d8)"]
    },
    {
        name: "War Pick",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "piercing",
        properties: []
    },
    {
        name: "Warhammer",
        group: "Martial Melee Weapons",
        damage: "1d8",
        dType: "bludgeoning",
        properties: ["Versatile (1d10)"]
    },
    {
        name: "Whip",
        group: "Martial Melee Weapons",
        damage: "1d4",
        dType: "slashing",
        properties: ["Finesse", "reach"]
    },
    // Martial Ranged Weapons
    {
        name: "Blowgun",
        group: "Martial Ranged Weapons",
        damage: "1",
        dType: "piercing",
        properties: ["Ammunition (range 25/100)", "Loading"]
    },
    {
        name: "Crossbow, hand",
        group: "Martial Ranged Weapons",
        damage: "1d6",
        dType: "piercing",
        properties: ["Ammunition (range 30/120)", "Light", "Loading"]
    },
    {
        name: "Crossbow, heavy",
        group: "Martial Ranged Weapons",
        damage: "1d10",
        dType: "piercing",
        properties: ["Ammunition (range 100/400)", "Heavy", "Loading", "Two-handed"]
    },
    {
        name: "Longbow",
        group: "Martial Ranged Weapons",
        damage: "1d8",
        dType: "piercing",
        properties: ["Ammunition (range 150/600)", "Heavy", "Two-handed"]
    },
    {
        name: "Net",
        group: "Martial Ranged Weapons",
        damage: "0",
        dType: "none",
        properties: ["Special", "Thrown (range 5/15"]
    }
]

export default weapons