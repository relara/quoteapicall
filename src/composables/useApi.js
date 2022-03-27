import { ref } from "vue";
import axios from "axios";

const quotes = ref();

const api = axios.create({
    baseURL: "https://strangerthings-quotes.vercel.app/api/quotes",
});

export const useApi = () => {
    const getQuotes = async () => {
        const response = await api.get("quote");
        quotes.value = response.data;
    };

    getQuotes();

    return { quotes, getQuotes };  
};
