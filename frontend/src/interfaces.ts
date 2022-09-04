export interface IGameMatch {
    metadata: Metadata;
    info:     Info;
}

export interface Info {
    game_mode:           string;
    game_type:           string;
    game_start_time_utc: Date;
    game_version:        string;
    players:             Player[];
    total_turn_count:    number;
}

export interface Player {
    puuid:         string;
    deck_id:       string;
    deck_code:     string;
    factions:      string[];
    game_outcome:  string;
    order_of_play: number;
}

export interface Metadata {
    data_version: string;
    match_id:     string;
    participants: string[];
}

// GameData
export interface GameData {
    associatedCards:       any[];
    associatedCardRefs:    string[];
    assets:                Asset[];
    regions:               Region[];
    regionRefs:            RegionRef[];
    attack:                number;
    cost:                  number;
    health:                number;
    description:           string;
    descriptionRaw:        string;
    levelupDescription:    string;
    levelupDescriptionRaw: string;
    flavorText:            string;
    artistName:            string;
    name:                  string;
    cardCode:              string;
    keywords:              string[];
    keywordRefs:           string[];
    spellSpeed:            SpellSpeed;
    spellSpeedRef:         SpellSpeed;
    rarity:                Rarity;
    rarityRef:             RarityRef;
    subtypes:              string[];
    supertype:             Supertype;
    type:                  Type;
    collectible:           boolean;
    set:                   Set;
}

export interface Asset {
    gameAbsolutePath: string;
    fullAbsolutePath: string;
}

export enum Rarity {
    Champion = "Champion",
    Common = "COMMON",
    Epic = "EPIC",
    Rare = "RARE",
}

export enum RarityRef {
    Champion = "Champion",
    Common = "Common",
    Epic = "Epic",
    Rare = "Rare",
}

export enum RegionRef {
    BandleCity = "BandleCity",
    Bilgewater = "Bilgewater",
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "PiltoverZaun",
    Runeterra = "Runeterra",
    ShadowIsles = "ShadowIsles",
    Shurima = "Shurima",
    Targon = "Targon",
}

export enum Region {
    BandleCity = "Bandle City",
    Bilgewater = "Bilgewater",
    Demacia = "Demacia",
    Freljord = "Freljord",
    Ionia = "Ionia",
    Noxus = "Noxus",
    PiltoverZaun = "Piltover & Zaun",
    Runeterra = "Runeterra",
    ShadowIsles = "Shadow Isles",
    Shurima = "Shurima",
    Targon = "Targon",
}

export enum Set {
    Set1 = "Set1",
    Set2 = "Set2",
    Set3 = "Set3",
    Set4 = "Set4",
    Set5 = "Set5",
    Set6 = "Set6",
    Set6CDE = "Set6cde",
}

export enum SpellSpeed {
    Burst = "Burst",
    Empty = "",
    Fast = "Fast",
    Slow = "Slow",
}

export enum Supertype {
    Champion = "Champion",
    Empty = "",
}

export enum Type {
    Equipment = "Equipment",
    Landmark = "Landmark",
    Spell = "Spell",
    Unit = "Unit",
}
