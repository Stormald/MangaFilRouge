import { Anime } from "./anime.model";

export class ListPerso {
    userId: number;
    animeId: number;
    score: number;
    favorite: boolean;
    privacy: boolean;
    progression: number;
    startDate: Date;
    endDate: Date;
    totalRewatch: number;
    categoryListPersoId: number;
    anime: Anime;
    categoryListPerso: any;
    user: any;
}
