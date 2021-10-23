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

export interface NTJson {
    current: NTRun;
    previous: NTRun;
}
