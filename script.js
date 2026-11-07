/* ========================================
   DOTA SHOP - COMPLETE UPDATED SCRIPT
   ======================================== */
// PRODUCT LISTINGS
const products = [
  {
    id: 1004,
    name: "War Rig Eradicators",
    category: "Cache Sets",
    condition: "Unbundled",
    hero: "Techies",
    price: 450,
    stock: 1,
    image: "./cache/War Rig Eradicators.png",
    featured: 1004
  },
  {
    id: 1004,
    name: "Blue Horizons",
    category: "Cache Sets",
    condition: "unbundled",
    hero: "Phoenix",
    price: 500,
    stock: 1,
    image: "./cache/Blue Horizons.png",
    featured: 1004
  },
  {
    id: 1003,
    name: "Bird of Prey",
    category: "Cache Sets",
    condition: "unbundled",
    hero: "Legion Commander",
    price: 700,
    stock: 1,
    image: "./cache/Bird of Prey.png",
    featured: 1003
  },
   {
    id: 1002,
    name: "Crimson Dawn",
    category: "Cache Sets",
    condition: "unbundled",
    hero: "Phoenix",
    price: 350,
    stock: 1,
    image: "./cache/Crimson Dawn.png",
    featured: 1002
  },
   {
    id: 105,
    name: "Star Sage",
    category: "Cache Sets",
    condition: "unbundled",
    hero: "Phoenix",
    price: 150,
    stock: 1,
    image: "./cache/Star Sage.png",
    featured: 105
  },
  {
    id: 104,
    name: "Wasteland Rattler",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Snapfire",
    price: 150,
    stock: 5,
    image: "./cache/Wasteland Rattler.png",
    featured: 104
  },
  {
    id: 103,
    name: "Undying Love",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Undying",
    price: 400,
    stock: 1,
    image: "./cache/Undying Love.png",
    featured: 103
  },
  {
    id: 102,
    name: "Unchained Entropy",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Ancient Apparition",
    price: 150,
    stock: 1,
    image: "./cache/Unchained Entropy.png",
    featured: 102
  },
  {
    id: 101,
    name: "Thundervolt",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Zues",
    price: 180,
    stock: 0,
    image: "./cache/Thundervolt.png",
    featured: 101
  },
  {
    id: 100,
    name: "The White Widow",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Broodmother",
    price: 180,
    stock: 2,
    image: "./cache/The White Widow.png",
    featured: 100
  },
  {
    id: 99,
    name: "The Burning Sentinel",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Dawnbreaker",
    price: 100,
    stock: 5,
    image: "./cache/The Burning Sentinel.png",
    featured: 99
  },
  {
    id: 98,
    name: "Taurhorn Terror",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Spirit Breaker",
    price: 130,
    stock: 3,
    image: "./cache/Taurhorn Terror.png",
    featured: 98
  },
  {
    id: 97,
    name: "Svarof the Infernal",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Primal Beast",
    price: 150,
    stock: 2,
    image: "./cache/Svarog the Infernal.png",
    featured: 97
  },
  {
    id: 96,
    name: "Starforge Reformer",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Dawnbreaker",
    price: 150,
    stock: 0,
    image: "./cache/Starforge Reformer.png",
    featured: 96
  },
  {
    id: 95,
    name: "Spellbreaker's Braid",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Persona",
    hero: "Anti Mage",
    price: 350,
    stock: 4,
    image: "./cache/Spellbreaker's Braid.png",
    featured: 95
  },
  {
    id: 94,
    name: "Sodbustin' Saboteurs",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Teachies",
    price: 180,
    stock: 1,
    image: "./cache/Sodbustin' Saboteurs.png",
    featured: 94
  },
  {
    id: 93,
    name: "Shellshock Saturnalia",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Snapfire",
    price: 200,
    stock: 1,
    image: "./cache/Shellshock Saturnalia.png",
    featured: 93
  },
  {
    id: 92,
    name: "Shadow Stalker",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Persona",
    hero: "Phantom Assassin",
    price: 350,
    stock: 2,
    image: "./cache/Shadow Stalker.png",
    featured: 92
  },
  {
    id: 91,
    name: "Serket of the Black Sands",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Immortal",
    hero: "Sand King",
    price: 1200,
    stock: 1,
    image: "./cache/Serket of the Black Sands.png",
    featured: 91
  },
  {
    id: 90,
    name: "Seeker of the Crescent Wheel",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Luna",
    price: 180,
    stock: 2,
    image: "./cache/Seeker of the Crescent Wheel.png",
    featured: 90
  },
  {
    id: 89,
    name: "Seed of Strife",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Chen",
    price: 150,
    stock: 1,
    image: "./cache/Seed of Strife.png",
    featured: 89
  },
  {
    id: 88,
    name: "School of the Solar Fang",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Marci",
    price: 130,
    stock: 4,
    image: "./cache/School of the Solar Fang.png",
    featured: 88
  },
  {
    id: 87,
    name: "Rotzo the Clown",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Immortal",
    hero: "Pudge",
    price: 400,
    stock: 2,
    image: "./cache/Rotzo the Clown.png",
    featured: 87
  },
  {
    id: 86,
    name: "Rot-Iron Ripper",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Necrophose",
    price: 180,
    stock: 2,
    image: "./cache/Rot Iron Ripper.png",
    featured: 86
  },
    {
    id: 85,
    name: "Red Dawn",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Dawnbreaker",
    price: 150,
    stock: 5,
    image: "./cache/Red Dawn.png",
    featured: 85
  },
  {
    id: 84,
    name: "Prehistoric Predator",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Primal Beast",
    price: 150,
    stock: 1,
    image: "./cache/Prehistoric Predator.png",
    featured: 84
  },
  {
    id: 83,
    name: "Pallbringer",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Immortal",
    hero: "Earth Shaker",
    price: 450,
    stock: 1,
    image: "./cache/Pallbringer.png",
    featured: 83
  },
  {
    id: 82,
    name: "Needlepoint Necromancer",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Dazzle",
    price: 150,
    stock: 2,
    image: "./cache/Needlepoint Necromancer.png",
    featured: 82
  },
  {
    id: 81,
    name: "Mechamancer",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Venomancer",
    rarity: "Very Rare",
    price: 600,
    stock: 1,
    image: "./cache/Mechamancer.png",
    featured: 81
  },
  {
    id: 80,
    name: "Mecha Nyx",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Nyx Assassin",
    price: 150,
    stock: 1,
    image: "./cache/Mecha Nyx.png",
    featured: 80
  },
  {
    id: 79,
    name: "Martyrdom of the Brineborn",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Naga Siren",
    price: 150,
    stock: 1,
    image: "./cache/Martyrdom of the Brineborn.png",
    featured: 79
  },
  {
    id: 78,
    name: "Mariposa Mori",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Muerta",
    price: 180,
    stock: 5,
    image: "./cache/Mariposa Mori.png",
    featured: 78
  },
  {
    id: 77,
    name: "Lord of the Sundered Souls",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Shadow Fiend",
    price: 250,
    stock: 2,
    image: "./cache/Lord of the Sundered Souls.png",
    featured: 77
  },
  {
    id: 76,
    name: "Little Red",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Marci",
    price: 200,
    stock: 1,
    image: "./cache/Little Red.png",
    featured: 76
  },
  {
    id: 75,
    name: "Laurels of the Dawnstar",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Marci",
    price: 150,
    stock: 1,
    image: "./cache/Laurels of the Dawnstar.png",
    featured: 75
  },
  {
    id: 74,
    name: "Harrow's Harvest",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Ringmaster",
    price: 150,
    stock: 2,
    image: "./cache/Harrow's Harvest.png",
    featured: 74
  },
  {
    id: 73,
    name: "Hare of the Cog",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Clockwerk",
    price: 150,
    stock: 1,
    image: "./cache/Hare of the Cog.png",
    featured: 73
  },
    {
    id: 72,
    name: "Graviton Blackguard",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Enigma",
    price: 150,
    stock: 1,
    image: "./cache/Graviton Blackguard.png",
    featured: 72
  },
  {
    id: 71,
    name: "Glutton of Punishment",
    category: "Cache Sets",
    condition: "Bundled",
    rarity: "Persona",
    hero: "Pudge",
    price: 350,
    stock: 3,
    image: "./cache/Glutton of Punishment.png",
    featured: 71
  },
  {
    id: 70,
    name: "Frozen Nova",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Ancient Apparition",
    price: 150,
    stock: 1,
    image: "./cache/Frozen Nova.png",
    featured: 70
  },
  {
    id: 69,
    name: "Foreseen Horizons",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Oracle",
    price: 150,
    stock: 3,
    image: "./cache/Foreseen Horizons.png",
    featured: 69
  },
  {
    id: 68,
    name: "Faithful Fortune",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Marci",
    price: 150,
    stock: 2,
    image: "./cache/Faithful Fortune.png",
    featured: 68
  },
  {
    id: 67,
    name: "Elegy of the Reaper",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Grimstroke",
    price: 150,
    stock: 1,
    image: "./cache/Elegy of the Reaper.png",
    featured: 67
  },
  {
    id: 66,
    name: "Crystal Colossus",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Spirit Breaker",
    rarity: "Very Rare",
    price: 1000,
    stock: 1,
    image: "./cache/Crystal Colossus.png",
    featured: 66
  },
  {
    id: 65,
    name: "Bloodzo the Bear",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Ursa",
    price: 150,
    stock: 1,
    image: "./cache/Bloodzo the Bear.png",
    featured: 65
  },
  {
    id: 64,
    name: "Bloodmoon Stalker",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Luna",
    price: 400,
    stock: 5,
    image: "./cache/Bloodmoon Stalker.png",
    featured: 64
  },
  {
    id: 63,
    name: "Blinding Bastion",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Omniknight",
    price: 150,
    stock: 2,
    image: "./cache/Blinding Bastion.png",
    featured: 63
  },
  {
    id: 62,
    name: "Blackwing Bandolera",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Muerta",
    price: 200,
    stock: 2,
    image: "./cache/Blackwing Bandolera.png",
    featured: 62
  },
  {
    id: 61,
    name: "Bilge Rat Buccaneer",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Hoodwink",
    price: 130,
    stock: 2,
    image: "./cache/Bilge Rat Buccaneer.png",
    featured: 61
  },
  {
    id: 60,
    name: "Ardalan Arsonist",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Dark Willow",
    price: 250,
    stock: 1,
    image: "./cache/Ardalan Arsonist.png",
    featured: 60
  },
  {
    id: 59,
    name: "Ardalan Arms Race",
    category: "Cache Sets",
    condition: "Bundled",
    hero: "Snapfire",
    price: 250,
    stock: 2,
    image: "./cache/Ardalan Arms Race.png",
    featured: 59
  },
  {
    id: 58,
    name: "Angel of the Abyss",
    category: "Cache Sets",
    condition: "Bundled",
    price: 200,
    stock: 2,
    image: "./cache/Angel of the Abyss.png",
    featured: 58
  },
  {
    id: 56,
    name: "Mega-Kills: Cave Johnson",
    category: "Random",
    rarity: "Mythical",
    price: 2,
    stock: 0,
    image: "./random/Mega-Kills Cave Johnson.png",
    featured: 56
  },
  {
    id: 55,
    name: "Announcer: Pirate Captain",
    category: "Random",
    rarity: "Mythical",
    price: 2,
    stock: 0,
    image: "./random/Announcer Pirate Captain.png",
    featured: 57
  },
  {
    id: 57,
    name: "Mega-Kills: Crystal Maiden",
    category: "Random",
    rarity: "Mythical",
    price: 4,
    stock: 0,
    image: "./random/Mega-Kills Crystal Maiden.png",
    featured: 55
  },
    {
    id: 54,
    name: "Announcer: Crystal Maiden",
    category: "Random",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./random/Announcer Crystal Maiden.png",
    featured: 54
  },
  {
    id: 53,
    name: "Announcer: Clockwerk",
    category: "Random",
    rarity: "Mythical",
    price: 10,
    stock: 1,
    image: "./random/Announcer Clockwerk.png",
    featured: 52
  },
  {
    id: 52,
    name: "Mega-Kills: Kunkka & Tidehunter",
    category: "Random",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./random/Mega-Kills Kunkka & Tidehunter.png",
    featured: 52
  },
  {
    id: 50,
    name: "Unbroken Stallion Cursor Pack",
    category: "Cursor Pack",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./cursor/Unbroken Stallion Cursor Pack.png",
    featured: 50
  },
  {
    id: 49,
    name: "The International 2019 Cursor Pack",
    category: "Cursor Pack",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./cursor/The International 2019 Cursor Pack.png",
    featured: 49
  },
  {
    id: 48,
    name: "The International 2016 Cursor Pack",
    category: "Cursor Pack",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./cursor/The International 2016 Cursor Pack.png",
    featured: 48
  },
  {
    id: 47,
    name: "Genuine DAC 2015 Mirana Cursor Pack",
    category: "Cursor Pack",
    rarity: "Mythical",
    price: 25,
    stock: 0,
    image: "./cursor/Genuine DAC 2015 Mirana Cursor Pack.png",
    featured: 47
  },
  {
    id: 46,
    name: "Diretide 2020 Cursor Pack",
    category: "Cursor Pack",
    rarity: "Mythical",
    price: 5,
    stock: 0,
    image: "./cursor/Diretide 2020 Cursor Pack.png",
    featured: 46
  },
  {
    id: 45,
    name: "Kinetic: Allure of the Succubus",
    hero: "Queen of Pain",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 8,
    originalPrice: 10,
    stock: 1,
    image: "./kinetic/Kinetic.png",
    featured: 45
  },
  {
    id: 44,
    name: "Kinetic: Bladekeeper's Bladefury",
    hero: "Juggernaut",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 25,
    originalPrice: 31,
    stock: 0,
    image: "./kinetic/Kinetic.png",
    featured: 44
  },
  {
    id: 43,
    name: "Kinetic: Bladekeeper's Blade Dance",
    hero: "Juggernaut",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 52,
    originalPrice: 66,
    stock: 0,
    image: "./kinetic/Kinetic.png",
    featured: 43
  },
  {
    id: 42,
    name: "Kinetic: Bladekeeper's Omnislash",
    hero: "Juggernaut",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 25,
    originalPrice: 31,
    stock: 0,
    image: "./kinetic/Kinetic.png",
    featured: 42
  },
  {
    id: 41,
    name: "Kinetic: Muh Keen Gun",
    hero: "Sniper",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 8,
    originalPrice: 10,
    stock: 1,
    image: "./kinetic/Kinetic.png",
    featured: 41
  },
  {
    id: 40,
    name: "Kinetic: Booties of Travel!",
    hero: "Tinker",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 8,
    originalPrice: 10,
    stock: 1,
    image: "./kinetic/Kinetic.png",
    featured: 40
  },
  {
    id: 39,
    name: "Kinetic: Crow's Feet",
    hero: "Pudge",
    category: "Kinetic Gem",
    rarity: "Rare",
    price: 115,
    originalPrice: 141,
    stock: 1,
    image: "./kinetic/Kinetic.png",
    featured: 39
  },
  {
    id: 38,
    name: "Infused Armor of the Fearful Aria",
    hero: "Phantom Assasin",
    category: "Infused",
    rarity: "Mythical",
    price: 175,
    originalPrice: 219,
    stock: 0,
    image: "./infused/Infused Armor of the Fearful Aria.png",
    featured: 38
  },
  {
    id: 51,
    name: "Taunt: Skip to the Good Stuff!",
    hero: "Pudge",
    category: "Taunt",
    rarity: "Legendary",
    price: 72,
    originalPrice: 90,
    stock: 1,
    image: "./taunt/Taunt Skip to the Good Stuff!.png",
    featured: 51
  },
  {
    id: 37,
    name: "Taunt: Step Lively",
    hero: "Kunkka",
    category: "Taunt",
    rarity: "Mythical",
    price: 22,
    originalPrice: 28,
    stock: 1,
    image: "./taunt/Taunt Step Lively.png",
    featured: 37
  },
    {
    id: 36,
    name: "Taunt: Sawed-off Watergun",
    hero: "Morphling",
    category: "Taunt",
    rarity: "Mythical",
    price: 17,
    originalPrice: 22,
    stock: 1,
    image: "./taunt/Taunt Sawed-off Watergun.png",
    featured: 36
  },
  {
    id: 35,
    name: "Taunt: Curious Movements Indeed",
    hero: "Tinker",
    category: "Taunt",
    rarity: "Mythical",
    price: 5,
    originalPrice: 7,
    stock: 1,
    image: "./taunt/Taunt Curious Movements Indeed.png",
    featured: 35
  },
  {
    id: 34,
    name: "Taunt: Advanced Bladework",
    hero: "Tinker",
    category: "Taunt",
    rarity: "Mythical",
    price: 25,
    originalPrice: 31,
    stock: 1,
    image: "./taunt/Taunt Advanced Bladework.png",
    featured: 34
  },
  {
    id: 33,
    name: "Taunt: Hot Eats",
    hero: "Ember Spirit",
    category: "Taunt",
    rarity: "Mythical",
    price: 16,
    originalPrice: 21,
    stock: 0,
    image: "./taunt/Taunt Hot Eats.png",
    featured: 33
  },
  {
    id: 32,
    name: "Wraith of the Red Sands",
    hero: "Phantom Lancer",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 16,
    originalPrice: 21,
    stock: 0,
    image: "./images/Wraith of the Red Sands.png",
    featured: 32
  },
  {
    id: 31,
    name: "Thornwatch",
    hero: "Skywrath Mage",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 0,
    image: "./images/Thornwatch.png",
    featured: 31
  },
  {
    id: 30,
    name: "Surly Bogstomper",
    hero: "Bristleback",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 16,
    originalPrice: 20,
    stock: 0,
    image: "./images/Surly Bogstomper.png",
    featured: 30
  },
  {
    id: 29,
    name: "Song of the Sea Lotus",
    hero: "Naga Siren",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 12,
    originalPrice: 15,
    stock: 0,
    image: "./images/Song of the Sea Lotus.png",
    featured: 29
  },
  {
    id: 28,
    name: "Scorn of the Winged Sentinel",
    hero: "Luna",
    category: "mix/sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 232,
    originalPrice: 290,
    stock: 1,
    image: "./images/Scorn of the Winged Sentinel.png",
    featured: 28
  },
  {
    id: 27,
    name: "Plague Baron",
    hero: "Necrophose",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 28,
    originalPrice: 35,
    stock: 0,
    image: "./images/Plague Baron.png",
    featured: 27
  },
  {
    id: 26,
    name: "Patterns of the Pristine",
    hero: "Enigma",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Unbundled",
    price: 24,
    originalPrice: 30,
    stock: 3,
    image: "./images/Patterns of the Pristine.png",
    featured: 21
  },
  {
    id: 25,
    name: "Night Terrors",
    hero: "Bat Rider",
    category: "mix/sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 100,
    originalPrice: 133,
    stock: 2,
    image: "./images/Night Terrors.png",
    featured: 25
  },
  {
    id: 24,
    name: "Hunger of the Howling Wilds",
    hero: "Riki",
    category: "mix/sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 230,
    originalPrice: 305,
    stock: 1,
    image: "./images/Hunger of the Howling Wilds.png",
    featured: 24
  },
  {
    id: 23,
    name: "Feast of the Unwilling",
    hero: "Bloodseeker",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 20,
    originalPrice: 26,
    stock: 0,
    image: "./images/Feast of the Unwilling.png",
    featured: 23
  },
  {
    id: 22,
    name: "Eye of the Fateweaver",
    hero: "Oracle",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 20,
    originalPrice: 25,
    stock: 1,
    image: "./images/Eye of the Fateweaver.png",
    featured: 22
  },
  {
    id: 21,
    name: "Edge of Extinction",
    hero: "Beastmaster",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 20,
    originalPrice: 25,
    stock: 4,
    image: "./images/Edge of Extinction.png",
    featured: 21
  },
  {
    id: 20,
    name: "Dark Realm Oracles",
    hero: "Death Prophet",
    category: "mix/sets",
    rarity: "rare",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 0,
    image: "./images/Dark Realm Oracles.png",
    featured: 20
  },
    {
    id: 19,
    name: "Cunning cultivation",
    hero: "Witch Doctor",
    category: "mix/sets",
    rarity: "rare",
    condition: "Bundled",
    price: 30,
    originalPrice: 40,
    stock: 0,
    image: "./images/Cunning Cultivations.png",
    featured: 19
  },
  {
    id: 113,
    name: "Bladeform Legacy Mask",
    hero: "Juggernaut",
    category: "random",
    rarity: "Legendary",
    price: 27,
    originalPrice: 34,
    stock: 1,
    image: "./random/Bladeform Legacy Mask.png",
    featured: 113
  },
  {
    id: 117,
    name: "Stoneclaw Scavengers Radiant Towers",
    category: "random",
    rarity: "Legendary",
    price: 106,
    originalPrice: 133,
    stock: 1,
    image: "./random/Stoneclaw Scavengers Radiant Towers.png",
    featured: 117
  },
  {
    id: 114,
    name: "Crownfall Creeps Bundle",
    category: "mix/sets",
    rarity: "Legendary",
    condition: "Bundled",
    price: 150,
    originalPrice: 150,
    stock: 1,
    image: "./images/Crownfall Creeps Bundle.png",
    featured: 114
  },
  {
    id: 112,
    name: "Tempest Revelation",
    hero: "Zeus",
    category: "Immortal",
    rarity: "Immortal",
    price: 47,
    originalPrice: 59,
    stock: 1,
    image: "./Immortal/Tempest Revelation.png",
    featured: 112
  },
  {
    id: 111,
    name: "Moonfall",
    hero: "Luna",
    category: "Immortal",
    rarity: "Immortal",
    price: 77,
    originalPrice: 97,
    stock: 1,
    image: "./Immortal/Moonfall.png",
    featured: 111
  },
  {
    id: 110,
    name: "Magus Apex",
    hero: "Zeus",
    category: "Immortal",
    rarity: "Immortal",
    price: 176,
    originalPrice: 220,
    stock: 1,
    image: "./Immortal/Magus Apex.png",
    featured: 110
  },
  {
    id: 109,
    name: "Immortal Pantheon",
    hero: "Zeus",
    category: "Immortal",
    rarity: "Immortal",
    price: 25,
    originalPrice: 32,
    stock: 1,
    image: "./Immortal/Immortal Pantheon.png",
    featured: 109
  },
  {
    id: 108,
    name: "Golden Deepshock Destroyer",
    hero: "Tidehunter",
    category: "Immortal",
    rarity: "Immortal",
    price: 93,
    originalPrice: 116,
    stock: 1,
    image: "./Immortal/Golden Deepshock Destroyer.png",
    featured: 108
  },
   {
    id: 107,
    name: "Golden Edge of the Lost Order",
    hero: "Juggernaut",
    category: "Immortal",
    rarity: "Immortal",
    price: 95,
    originalPrice: 119,
    stock: 1,
    image: "./Immortal/Golden Edge of the Lost Order.png",
    featured: 107
  },
  {
    id: 106,
    name: "Edge of the Lost Order",
    hero: "Juggernaut",
    category: "Immortal",
    rarity: "Immortal",
    price: 50,
    originalPrice: 63,
    stock: 1,
    image: "./Immortal/Edge of the Lost Order.png",
    featured: 106
  },
  {
    id: 1,
    name: "Feast of Abscession lvl 1",
    hero: "Pudge",
    category: "Arcana",
    rarity: "Arcana",
    price: 1200,
    originalPrice: 1492,
    stock: 0,
    image: "./images/Pudge-arc.png",
    featured: 1
  },
  {
    id: 115,
    name: "Bladeform Legacy lvl2",
    hero: "Juggernaut",
    category: "Arcana",
    rarity: "Arcana",
    price: 1500,
    originalPrice: 1954,
    stock: 1,
    image: "./Arcana/Bladeform Legacy.png",
    featured: 115
  },
  {
    id: 2,
    name: "Atomic Ray Thrusters",
    hero: "Gyrocopter",
    category: "Immortal",
    rarity: "Immortal",
    price: 95,
    originalPrice: 119,
    stock: 1,
    image: "./images/Atomic Ray Thrusters.png",
    featured: 2
  },
  {
    id: 3,
    name: "Genuine Hell's Usher",
    hero: "Phantom Assassin",
    category: "Immortal",
    rarity: "immortal",
    price: 110,
    originalPrice: 146,
    stock: 0,
    image: "./images/Genuine Hell's Usher.png",
    featured: 3
  },
  {
    id: 4,
    name: "Golden Scavenging Guttleslug",
    hero: "Pudge",
    category: "Immortal",
    rarity: "Immortal",
    price: 640,
    originalPrice: 754,
    stock: 0,
    image: "./images/Golden Scavenging Guttleslug.png",
    featured: 4
  },
  {
    id: 5,
    name: "Phantom Concord",
    hero: "Phantom Lancer",
    category: "Immortal",
    rarity: "Immortal",
    price: 70,
    originalPrice: 87,
    stock: 0,
    image: "./images/Phantom Concord.png",
    featured: 5
  },
  {
    id: 6,
    name: "The Abscesserator",
    hero: "Pudge",
    category: "Immortal",
    rarity: "Immortal",
    price: 280,
    originalPrice: 348,
    stock: 0,
    image: "./images/The Abscesserator.png",
    featured: 6
  },
  {
    id: 7,
    name: "Limbs of Lycosidae",
    hero: "Broodmother",
    category: "Immortal",
    rarity: "Immortal",
    price: 2,
    stock: 0,
    image: "./images/brood.png",
    featured: 7
  },
  {
    id: 8,
    name: "Infernal Cavalcade",
    hero: "Centaur Warrunner",
    category: "Immortal",
    rarity: "Immortal",
    price: 2,
    stock: 2,
    image: "./images/cent.png",
    featured: 8
  },
  {
    id: 9,
    name: "Claws of Nuranu",
    hero: "Lone Druid",
    category: "Immortal",
    rarity: "Immortal",
    price: 5,
    stock: 0,
    image: "./images/druid.png",
    featured: 9
  },
  {
    id: 10,
    name: "Arcanic Resonance Beam",
    hero: "Tinker",
    category: "Immortal",
    rarity: "Immortal",
    price: 5,
    stock: 0,
    image: "./images/tinker.png",
    featured: 10
  },
  {
    id: 11,
    name: "Arcane Infestation",
    hero: "Broodmother",
    category: "mix/sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 1,
    image: "./images/Arcane Infestation.png",
    featured: 11
  },
  {
    id: 12,
    name: "Arena Champion",
    hero: "Mars",
    category: "mix/sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 120,
    originalPrice: 150,
    stock: 1,
    image: "./images/Arena Champion.png",
    featured: 12
  },
  {
    id: 13,
    name: "Blackshield Protodrone",
    hero: "Tinker",
    category: "Mix/Sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 120,
    originalPrice: 150,
    stock: 1,
    image: "./images/Blackshield Protodrone.png",
    featured: 13
  },
  {
    id: 14,
    name: "Bottomfeeder",
    hero: "Nyx Assassin",
    category: "Mix/Sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 2,
    image: "./images/Bottomfeeder.png",
    featured: 14
  },
  {
    id: 16,
    name: "Candy Cat",
    hero: "Pudge",
    category: "Mix/Sets",
    rarity: "Rare",
    condition: "Bundled",
    price: 40,
    originalPrice: 53,
    stock: 0,
    image: "./images/Candy Cat.png",
    featured: 16
  },
  {
    id: 17,
    name: "Chasm Of The Broken Code",
    hero: "Terrorblade",
    category: "Mix/Sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 150,
    originalPrice: 188,
    stock: 0,
    image: "./images/Chasm of the Broken Code.png",
    featured: 17
  },
  {
    id: 18,
    name: "Crimsonwing Slayer",
    hero: "Legion Commander",
    category: "Mix/Sets",
    rarity: "Mythical",
    condition: "Bundled",
    price: 15,
    originalPrice: 20,
    stock: 0,
    image: "./images/Crimsonwing Slayer.png",
    featured: 18
  },
{
  id: 15,
  name: "Weather Snow",
  category: "Weather",
  rarity: "Genuine",
  price: 250,
  stock: 0,
  image: "./images/Snow.png",
  featured: 15
},

];

// GENERAL SETTINGS

const rarityPriority = {
  "arcana": 1,
  "immortal": 2,
  "legendary": 3,
  "mythical": 4,
  "rare": 5,
  "uncommon": 6,
  "common": 7
};

const money = (amount) =>
  "₱" + amount.toLocaleString("en-PH");

let activeCategory = "All";
let cart = [];
let toastTimer;

const grid = document.getElementById("productGrid");
const cacheSetGrid = document.getElementById("cacheSetGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const toast = document.getElementById("toast");

// ========================================
// PRODUCT FILTERING, SEARCH AND SORTING
// ========================================

function visibleProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let list = products.filter((product) => {
    if (product.stock <= 0) return false;

    const category = product.category.toLowerCase();
    const selected = activeCategory.toLowerCase();

    const matchesCategory =
      selected === "all" || category === selected;

    const searchableText = [
      product.name,
      product.hero,
      product.category,
      product.rarity,
      product.condition,
      product.symbol
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      searchableText.includes(searchTerm);

    return (searchTerm ? true : matchesCategory) && matchesSearch;
  });

  if (sortSelect.value === "low") {
    list.sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "high") {
    list.sort((a, b) => b.price - a.price);
  } else if (sortSelect.value === "name") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else {
    list.sort((a, b) => {
      const rarityA =
        rarityPriority[(a.rarity || "").toLowerCase()] ?? 99;

      const rarityB =
        rarityPriority[(b.rarity || "").toLowerCase()] ?? 99;

      // Higher featured number = more recently listed.
      return rarityA - rarityB || b.featured - a.featured;
    });
  }

  return list;
}

// ========================================
// CATEGORY STOCK TOTALS
// ========================================

function updateCategoryCounts() {
  // Count available product listings in each category.
  const countCategory = (categoryName) => {
    return products.filter(
      (product) =>
        product.category.toLowerCase() === categoryName.toLowerCase() &&
        product.stock > 0
    ).length;
  };

  // Count all available product listings.
  const allCount = products.filter(
    (product) => product.stock > 0
  ).length;

  const counts = {
    countAll: allCount,
    countArcana: countCategory("Arcana"),
    countImmortals:
      countCategory("Immortal") + countCategory("Immortals"),
    countMixSets: countCategory("Mix/Sets"),
    countCacheSets: countCategory("Cache Sets"),
    countWeather: countCategory("Weather"),

    // New categories
    countTaunt: countCategory("Taunt"),
    countInfused: countCategory("Infused"),
    countKineticGem: countCategory("Kinetic Gem"),
    countCursorPack: countCategory("Cursor Pack"),
    countRandom: countCategory("Random"),
    countCouriersWards:
      countCategory("Couriers/Wards") +
      countCategory("Couriers") +
      countCategory("Wards")
  };

  Object.entries(counts).forEach(([id, count]) => {
    const element = document.getElementById(id);

    if (element) {
      element.textContent = count;
    }
  });
}

// ========================================
// DISPLAY MARKET PRODUCTS
// ========================================

function renderProducts() {
  const list = visibleProducts();

  document.getElementById("resultsText").textContent =
    `Showing ${list.length} item${list.length === 1 ? "" : "s"}`;

  grid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--glow:${product.glow || "#8751c4"}">
        <span class="rarity">${product.rarity}</span>

${
  product.originalPrice && product.originalPrice > product.price
    ? `<span class="discount-badge">
        🔥 ${Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )}% OFF
      </span>`
    : ""
}
        ${
          product.image
            ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
            : `<span class="item-symbol" aria-hidden="true">${product.symbol || "✦"}</span>`
        }
      </div>

<div class="card-body">
  <span class="item-category">${product.category}</span>
  <h3>${product.name}</h3>

  ${product.hero ? `
  <p class="product-hero">${product.hero}</p>
` : ""}

  ${
  (product.category || "").trim().toLowerCase() === "cache sets"
    ? `<span class="item-condition giftable">GIFTABLE ONLY</span>`
    : `<span class="item-condition tradable-marketable">
         TRADABLE / MARKETABLE
       </span>`
}

        <p class="stock-label ${product.stock <= 0 ? "sold-out" : ""}">
          ${product.stock <= 0 ? "SOLD OUT" : `${product.stock} piece${product.stock === 1 ? "" : "s"} available`}
        </p>

        <div class="card-bottom">
          <div class="price-stack">
  ${
    product.originalPrice && product.originalPrice > product.price
      ? `<span class="original-price">${money(product.originalPrice)}</span>`
      : ""
  }
  <span class="price">${money(product.price)}</span>
</div>
          ${
            product.stock <= 0
              ? '<span class="sold-out-text">Sold Out</span>'
              : `<button class="add-button" data-add="${product.id}" aria-label="Add ${product.name} to cart">+</button>`
          }
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("emptyState").hidden = list.length !== 0;
}

// ========================================
// DISPLAY CACHE SETS
// ========================================

function renderCacheSets() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const list = products.filter((product) => {
    if (product.category.toLowerCase() !== "cache sets") return false;
    if (product.stock <= 0) return false;

    const searchableText = [
      product.name,
      product.hero,
      product.category,
      product.rarity,
      product.condition
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchableText.includes(searchTerm);
  });
    // Newest listings first (higher featured number = newer listing)
  list.sort((a, b) => b.featured - a.featured);

  cacheSetGrid.innerHTML = list.map((product) => `
    <article class="product-card">
      <div class="product-art" style="--glow:${product.glow || "#8751c4"}">
        <span class="rarity">${product.rarity || "CACHE SET"}</span>
        ${
          product.image
            ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
            : `<span class="item-symbol" aria-hidden="true">${product.symbol || "✦"}</span>`
        }
      </div>

      <div class="card-body">
        <span class="item-category">CACHE SET</span>
        <h3>${product.name}</h3>

        ${product.hero ? `
          <p class="product-hero">${product.hero}</p>
        ` : ""}

        ${product.condition ? `
  <span class="item-condition ${
    product.condition === "Bundled" ? "bundled" : "unbundled"
  }">${product.condition}</span>
` : ""}

<span class="item-condition giftable">GIFTABLE ONLY</span>

        <p class="stock-label">
          ${product.stock} piece${product.stock === 1 ? "" : "s"} available
        </p>

        <div class="card-bottom">
          <span class="price">${money(product.price)}</span>
          <button class="add-button" data-add="${product.id}"
            aria-label="Add ${product.name} to cart">+</button>
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("cacheEmptyState").hidden = list.length !== 0;
}

// ========================================
// NOTIFICATION MESSAGE
// ========================================

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// ========================================
// ADD PRODUCTS TO CART
// ========================================

function addToCart(id) {
  const product = products.find((item) => item.id === id);

  if (!product) return;

  if (product.stock <= 0) {
    showToast("Sorry, this item is sold out!");
    return;
  }

  const existing = cart.find((item) => item.id === id);
  const quantityInCart = existing ? existing.qty : 0;

  if (quantityInCart >= product.stock) {
    showToast("You have reached the available stock!");
    return;
  }

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }

  renderCart();
  showToast(`${product.name} added to cart`);
}

// ========================================
// DISPLAY SHOPPING CART
// ========================================

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  document.getElementById("cartCount").textContent = count;

  const items = document.getElementById("cartItems");

  if (!cart.length) {
    items.innerHTML = `
      <div class="cart-empty">
        Your cart is empty.<br>
        Explore the market and add an item.
      </div>
    `;
  } else {
    items.innerHTML = cart.map(item => {
      const p = products.find(product => product.id === item.id);

      return `
        <div class="cart-row">

          <div class="cart-thumb" style="color:${p.glow || "#8751c4"}">
            ${p.symbol || "✦"}
          </div>

          <div class="cart-item-details">

            <strong>${p.name}</strong>

            <small>${money(p.price)} each</small>

            <div class="quantity-controls">

              <button
                class="quantity-button"
                data-decrease="${p.id}"
                aria-label="Decrease quantity">
                −
              </button>

              <span class="quantity-number">${item.qty}</span>

              <button
                class="quantity-button"
                data-increase="${p.id}"
                aria-label="Increase quantity"
                ${item.qty >= p.stock ? "disabled" : ""}>
                +
              </button>

            </div>

            <button class="remove-button" data-remove="${p.id}">
              Remove
            </button>

          </div>

          <strong class="cart-item-total">
            ${money(p.price * item.qty)}
          </strong>

        </div>
      `;
    }).join("");
  }

  const total = cart.reduce((sum, item) => {
    const p = products.find(product => product.id === item.id);
    return sum + p.price * item.qty;
  }, 0);

  document.getElementById("cartTotal").textContent = money(total);
}

// ========================================
// OPEN AND CLOSE SHOPPING CART
// ========================================

function openCart() {
  document.getElementById("cartOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("cartOverlay").hidden = true;
  document.body.style.overflow = "";
}

document.getElementById("cartButton").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("closeCartBackdrop").addEventListener("click", closeCart);

// ========================================
// CATEGORY BUTTONS
// ========================================

/* ========================================
   COLLAPSIBLE CATEGORY SIDEBAR
   ======================================== */

const categorySidebar = document.getElementById("categorySidebar");
const toggleCategoriesButton = document.getElementById("toggleCategories");
const categoryList = document.getElementById("categoryList");
const categoryToggleArrow = document.getElementById("categoryToggleArrow");

if (
  categorySidebar &&
  toggleCategoriesButton &&
  categoryList &&
  categoryToggleArrow
) {
  toggleCategoriesButton.addEventListener("click", () => {
    const isCollapsed = categorySidebar.classList.toggle(
      "categories-collapsed"
    );

    categoryList.hidden = isCollapsed;

    toggleCategoriesButton.setAttribute(
      "aria-expanded",
      String(!isCollapsed)
    );

    toggleCategoriesButton.title = isCollapsed
      ? "Expand categories"
      : "Collapse categories";

    categoryToggleArrow.textContent = isCollapsed
      ? "▶"
      : "▼";
  });
}


document.querySelectorAll(".category").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
        document.querySelectorAll(".category").forEach((categoryButton) => {
      categoryButton.classList.toggle(
        "active",
        categoryButton === button
      );
    });

    renderProducts();
  });
});

// ========================================
// SEARCH AND SORTING
// ========================================

searchInput.addEventListener("input", () => {
  renderProducts();
  renderCacheSets();
});

sortSelect.addEventListener("change", renderProducts);

// ========================================
// ADD-TO-CART BUTTONS
// ========================================

function handleAddClick(event) {
  const button = event.target.closest("[data-add]");

  if (button) {
    addToCart(Number(button.dataset.add));
  }
}

grid.addEventListener("click", handleAddClick);
cacheSetGrid.addEventListener("click", handleAddClick);

// ========================================
// HEADER NAVIGATION
// ========================================

document.querySelectorAll(".nav-links a[data-nav]").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-links a[data-nav]").forEach((navLink) => {
      navLink.classList.toggle("active", navLink === link);
    });
  });
});

// ========================================
// SHOPPING CART QUANTITY CONTROLS
// ========================================

document.getElementById("cartItems").addEventListener("click", event => {

  // INCREASE QUANTITY
  const increaseButton = event.target.closest("[data-increase]");

  if (increaseButton) {
    const id = Number(increaseButton.dataset.increase);
    const product = products.find(p => p.id === id);
    const item = cart.find(p => p.id === id);

    if (product && item && item.qty < product.stock) {
      item.qty++;
      renderCart();
    } else {
      showToast("You have reached the available stock!");
    }

    return;
  }

  // DECREASE QUANTITY
  const decreaseButton = event.target.closest("[data-decrease]");

  if (decreaseButton) {
    const id = Number(decreaseButton.dataset.decrease);
    const item = cart.find(p => p.id === id);

    if (item) {
      item.qty--;

      if (item.qty <= 0) {
        cart = cart.filter(p => p.id !== id);
      }

      renderCart();
    }

    return;
  }

  // REMOVE ITEM COMPLETELY
  const removeButton = event.target.closest("[data-remove]");

  if (removeButton) {
    const id = Number(removeButton.dataset.remove);

    cart = cart.filter(item => item.id !== id);

    renderCart();
  }

});

// ========================================
// GCASH AND MARIBANK PAYMENT POPUP
// ========================================

const paymentOverlay = document.getElementById("paymentOverlay");
const paymentDetails = document.getElementById("paymentDetails");

// Open the payment popup from checkout

document.getElementById("checkoutButton").addEventListener("click", () => {
  // Make sure the cart contains items.
  if (!cart.length) {
    showToast("Your cart is empty!");
    return;
  }

  // Calculate the exact total using the cart items.
  const total = cart.reduce((sum, item) => {
    const product = products.find(
      (entry) => entry.id === item.id
    );

    return sum + product.price * item.qty;
  }, 0);

  // Open the payment page and pass the total.
  const paymentUrl = new URL(
    "./payment.html/payment.html",
    window.location.href
  );

  paymentUrl.searchParams.set("total", String(total));

  // Pass a safe snapshot of the purchased items to the payment page.
  const orderItems = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return {
      name: product.name,
      price: product.price,
      qty: item.qty,
      subtotal: product.price * item.qty
    };
  });

  paymentUrl.searchParams.set("items", JSON.stringify(orderItems));

  const paymentTab = window.open(paymentUrl.href, "_blank");

  // Notify the customer if the browser blocks the new tab.
  if (!paymentTab) {
    showToast("Please allow pop-ups for this website.");
  }
});

// ========================================
// ESCAPE KEY SUPPORT
// ========================================

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    paymentOverlay.hidden = true;
  }
});

// ========================================
// INITIALIZE WEBSITE
// ========================================

updateCategoryCounts();
renderProducts();
renderCacheSets();
renderCart();