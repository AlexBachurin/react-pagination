import { useState, useEffect } from "react"
import { paginate } from "./utils";
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

//custom hook to fetch data
export const useFetch = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(url);
            const items = await response.json();
            //use paginate function before we set it to state
            const paginateItems = paginate(items);

            setData(paginateItems);
            setLoading(false);
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getData();
    }, [])


    return { data, loading };
}