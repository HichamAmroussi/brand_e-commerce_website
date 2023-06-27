import { useEffect, useState } from "react";
import api from "../lib/axios";

function useFetch <T>(url: string, initialState: T): [T, boolean] {
    const [data, setData] = useState<T>(initialState);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get(url);
    
                setIsPending(false);
                setData(response.data);
    
            } catch(err: any) {
                if(err.response) {
                    console.log(err.response.data);
                } else {
                    console.log(`Error:${err.message}`);
                }
            }
        }

        fetchData();
    }, [url])

    return [ data, isPending ];
}

export default useFetch;