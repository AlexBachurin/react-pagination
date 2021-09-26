import { useState, useEffect } from "react"

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

//custom hook to fetch data
export const useFetch = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        const response = await fetch(url);
        const items = await response.json();
        console.log(items);
        setData(items);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])


    return { data, loading };
}