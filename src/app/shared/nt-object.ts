export interface NTJson {
    current: NTRun;
    previous: NTRun;
}
export interface NTRun {
    char: number;
    lasthit: number;
    world: number;
    level: number;
    crown: number;
    wepA: number;
    wepB: number;
    skin: number;
    ultra: number;
    charlvl: number;
    loops: number;
    win: boolean;
    mutations: string;
    kills: number;
    health: number;
    steamid: string;
    type: string;
    timestamp: number;
}

export interface CardRun {
    char: string;
    lasthit: string;
    world: number;
    level: number;
    worldName: string;
    crown: string;
    wepA: string;
    wepB: string;
    skin: string;
    ultra: string;
    charlvl: number;
    loops: number;
    mutations: string[];
    kills: number;
    type: string;
    time: string;    
}

export function ntRunToCardRun(ntRun: NTRun): CardRun {
    var cardRun: CardRun = {
        char: Characters[ntRun.char],
        lasthit: Enemies[ntRun.lasthit],
        world: ntRun.world,
        level: ntRun.level,
        worldName: Areas[ntRun.world],
        crown: Crowns[ntRun.crown],
        wepA: Weapons[ntRun.wepA],
        wepB: Weapons[ntRun.wepB],
        skin: ntRun.skin == 0 ? "" : "B",
        // If ntRun.ultra is 1 or 2, it returns A or B; empty if ntRun its 0.
        ultra: ntRun.ultra == 0 ? "" : ntRun.ultra == 1 ? "A" : "B",
        charlvl: ntRun.charlvl,
        loops: ntRun.loops,
        mutations: [],
        kills: ntRun.kills,
        type: ntRun.type,
        time: new Date(ntRun.timestamp).toString()
    }

    for (let index = 0; index < ntRun.mutations.length; index++) {
        const char = ntRun.mutations.charAt(index);
        if (char == "1") {
            cardRun.mutations.push(Mutations[index]);
        }
    }

    return cardRun
}

export enum Characters {
    "Fish" = 1, //Number 1
    "Crystal" = 2,
    "Eyes" = 3,
    "Melting" = 4,
    "Plant" = 5,
    "Y.V." = 6,
    "Steroids" = 7,
    "Robot" = 8,
    "Chicken" = 9,
    "Rebel" = 10,
    "Horror" = 11,
    "Rogue" = 12, //Number 12
    "Skeleton" = 14, //Number 14
    "Frog" = 15 //Number 15
}

export enum Enemies {
    "Nothing" = -1,
    "Bandit",
    "Maggot",
    "Rad Maggot",
    "Big Maggot",
    "Scorpion",
    "Gold Scorpion",
    "Big Bandit",
    "Rat",
    "Rat King",
    "Green Rat",
    "Gator",
    "Exploder",
    "Toxic Frog",
    "Mom",
    "Assassin",
    "Raven",
    "Salamander",
    "Sniper",
    "Big Dog",
    "Spider",
    "(Not in game)",
    "Laser Crystal",
    "Snow Bandit",
    "Snowbot",
    "Wolf",
    "Snowtank",
    "Lil Hunter",
    "Freak",
    "Explo Freak",
    "Rhino Freak",
    "Necromancer",
    "Turret",
    "Technomancer",
    "Guardian",
    "Explo Guardian",
    "Dog Guardian",
    "Throne",
    "Throne II",
    "Bone Fish",
    "Crab",
    "Turtle",
    "Venus Grunt",
    "Venus Sarge",
    "Fireballer",
    "Super Fireballer",
    "Jock",
    "Cursed Spider",
    "Cursed Crystal",
    "Mimic",
    "Health Mimic",
    "Grunt",
    "Inspector",
    "Shielder",
    "Crown Guardian",
    "Explosion",
    "Small Explosion",
    "Fire Trap",
    "Shield",
    "Toxin",
    "Horror",
    "Barrel",
    "Toxic Barrel",
    "Golden Barrel",
    "Car",
    "Venus Car",
    "Venus Car Fixed",
    "Venuz Car 2",
    "Icy Car",
    "Thrown Car",
    "Mine",
    "Crown of Death",
    "Rogue Strike",
    "Blood Launcher",
    "Blood Cannon",
    "Blood Hammer",
    "Disc",
    "Curse Eat",
    "Big Dog Missile",
    "Halloween Bandit",
    "Lil Hunter Fly",
    "Throne Death",
    "Jungle Bandit",
    "Jungle Assassin",
    "Jungle Fly",
    "Crown of Hatred",
    "Ice Flower",
    "Cursed Ammo Pickup",
    "Underwater Lightning",
    "Elite Grunt",
    "Blood Gamble",
    "Elite Shielder",
    "Elite Inspector",
    "Captain",
    "Van",
    "Buff Gator",
    "Generator",
    "Lightning Crystal",
    "Golden Snowtank",
    "Green Explosion",
    "Small Generator",
    "Golden Disc",
    "Big Dog Explosion",
    "IDPD Freak",
    "Throne II Death",
    "(Not in game 2)"
}

export enum Areas {
    "Crown Vault" = 100,
    "Desert" = 1,
    "Oasis" = 101,
    "Sewers" = 2,
    "Pizza Sewers" = 102,
    "Scrapyard" = 3,
    "Y.V's Mansion" = 103,
    "Crystal Caves" = 4,
    "Cursed Crystal Caves" = 104,
    "Frozen City" = 5,
    "Jungle" = 105,
    "Labs" = 6,
    "The Palace" = 7,
    "Campfire" = 0,
    "Y.V's Crib" = 107,
    "I.D.P.D. Headquarters" = 106
}

export enum AreasFilenames {
    "Crown Vault" = 100,
    "Desert" = 1,
    "Oasis" = 101,
    "Sewers" = 2,
    "Pizza Sewers" = 102,
    "Scrapyard" = 3,
    "YVs Mansion" = 103,
    "Crystal Caves" = 4,
    "Cursed Crystal Caves" = 104,
    "Frozen City" = 5,
    "Jungle" = 105,
    "Labs" = 6,
    "The Palace" = 7,
    "Campfire" = 0,
    "YVs Crib" = 107,
    "IDPD Headquarters" = 106
}

export enum Crowns {
    "No Crown" = 1,
    "Crown of Death",
    "Crown of Life",
    "Crown of Haste",
    "Crown of Guns",
    "Crown of Hatred",
    "Crown of Blood",
    "Crown of Destiny",
    "Crown of Love",
    "Crown of Luck",
    "Crown of Curses",
    "Crown of Risk",
    "Crown of Protection"
}

export enum Weapons {
    "Nothing" = 0,
    "Revolver",
    "Triple Machinegun",
    "Wrench",
    "Machinegun",
    "Shotgun",
    "Crossbow",
    "Grenade Launcher",
    "Double Shotgun",
    "Minigun",
    "Auto Shotgun",
    "Auto Crossbow",
    "Super Crossbow",
    "Shovel",
    "Bazooka",
    "Sticky Launcher",
    "SMG",
    "Assault Rifle",
    "Disc Gun",
    "Laser Pistol",
    "Laser Rifle",
    "Slugger",
    "Gatling Slugger",
    "Assault Slugger",
    "Energy Sword",
    "Super Slugger",
    "Hyper Rifle",
    "Screwdriver",
    "Laser Minigun",
    "Blood Launcher",
    "Splinter Gun",
    "Toxic Bow",
    "Sentry Gun",
    "Wave Gun",
    "Plasma Gun",
    "Plasma Cannon",
    "Energy Hammer",
    "Jackhammer",
    "Flak Cannon",
    "Golden Revolver",
    "Golden Wrench",
    "Golden Machinegun",
    "Golden Shotgun",
    "Golden Crossbow",
    "Golden Grenade Launcher",
    "Golden Laser Pistol",
    "Chicken Sword",
    "Nuke Launcher",
    "Ion Cannon",
    "Quadruple Machinegun",
    "Flamethrower",
    "Dragon",
    "Flare Gun",
    "Energy Screwdriver",
    "Hyper Launcher",
    "Laser Cannon",
    "Rusty Revolver",
    "Lightning Pistol",
    "Lightning Rifle",
    "Lightning Shotgun",
    "Super Flak Cannon",
    "Sawed-off Shotgun",
    "Splinter Pistol",
    "Super Splinter Gun",
    "Lighting SMG",
    "Smart Gun",
    "Heavy Crossbow",
    "Blood Hammer",
    "Lightning Cannon",
    "Pop Gun",
    "Plasma Rifle",
    "Pop Rifle",
    "Toxic Launcher",
    "Flame Cannon",
    "Lightning Hammer",
    "Flame Shotgun",
    "Double Flame Shotgun",
    "Auto Flame Shotgun",
    "Cluster Launcher",
    "Grenade Shotgun",
    "Grenade Rifle",
    "Rogue Rifle",
    "Party Gun",
    "Double Minigun",
    "Gatling Bazooka",
    "Auto Grenade Shotgun",
    "Ultra Revolver",
    "Ultra Laser Pistol",
    "Sledgehammer",
    "Heavy Revolver",
    "Heavy Machinegun",
    "Heavy Slugger",
    "Ultra Shovel",
    "Ultra Shotgun",
    "Ultra Crossbow",
    "Ultra Grenade Launcher",
    "Plasma Minigun",
    "Devastator",
    "Golden Plasma Gun",
    "Golden Slugger",
    "Golden Splinter Gun",
    "Golden Screwdriver",
    "Golden Bazooka",
    "Golden Assault Rifle",
    "Super Disc Gun",
    "Heavy Auto Crossbow",
    "Heavy Assault Rifle",
    "Blood Cannon",
    "Dog Spin Attack",
    "Dog Missile",
    "Incinerator",
    "Super Plasma Cannon",
    "Seeker Pistol",
    "Seeker Shotgun",
    "Eraser",
    "Guitar",
    "Bouncer SMG",
    "Bouncer Shotgun",
    "Hyper Slugger",
    "Super Bazooka",
    "Frog Pistol",
    "Black Sword",
    "Golden Nuke Launcher",
    "Golden Disc Gun",
    "Heavy Grenade Launcher",
    "Gun Gun",
    "Golden Frog Pistol" = 201
}

export enum Mutations {
    "Heavy Heart" = 0,
    "Rhino Skin",
    "Extra Feet",
    "Plutonium Hunger",
    "Rabbit Paw",
    "Throne Butt",
    "Lucky Shot",
    "Bloodlust",
    "Gamma Guts",
    "Second Stomach",
    "Back Muscle",
    "Scarier Face",
    "Euphoria",
    "Long Arms",
    "Boiling Veins",
    "Shotgun Shoulders",
    "Recycle Gland",
    "Laser Brain",
    "Last Wish",
    "Eagle Eyes",
    "Impact Wrists",
    "Bolt Marrow",
    "Stress",
    "Trigger Fingers",
    "Sharp Teeth",
    "Patience",
    "Hammerhead",
    "Strong Spirit",
    "Open Mind"
}