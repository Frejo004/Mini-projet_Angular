import { Work } from "./work";

export interface Auteur {
    id:          number;
    name:        string;
    birthYear:   number;
    deathYear:   number;
    nationality: string[] | string;
    works:       Work[];
}