import { listCat, listDog } from "../api";

export const menuDog = () => [...new Set(listDog.map((Val) => Val.typeOf))];
export const menuCat = () => [...new Set(listCat.map((Val) => Val.typeOf))];
