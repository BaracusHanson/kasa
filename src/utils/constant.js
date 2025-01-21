import { createContext } from "react";
import hero1Image from "../assets/hero1.png";
import hero2Image from "../assets/hero2.png";
import axios from 'axios';

export const titleHome = "Chez vous, partout et ailleurs";
export const titleAbout = "";
export const img1 = hero1Image;
export const img2 = hero2Image;
export const ctx = createContext();
export   const url = "src/utils/data.json";
export const fetchData = async (url) => {
    try {
        const response = await axios.get(url);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};