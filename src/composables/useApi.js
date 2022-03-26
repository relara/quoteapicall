import { ref } from "vue";
import axios from "axios";

const movies = ref();

const api = axios.create({
    baseURL: "https://the-one-api.dev/v2/",
    headers: {
        Authorization: "Bearer FEy_RMvQlloNnUc1cmOs"
    },
});

export const useApi = () => {
    const getMovies = async () => {
        const response = await api.get("movie");
        movies.value = response.data.docs;
    };

    getMovies();

    return { movies, getMovies };  
};
