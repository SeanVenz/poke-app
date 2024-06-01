import { useEffect, useState } from "react"
import axios from "axios";

export const usePokeApiSemiPersistentState = (initialState, link) => {
    const [value, setValue] = useState(initialState);

    const fetchData = async () => {
        await axios.get(link)
            .then((response) => {
                setValue(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData();
    });

    return [value, setValue];
}