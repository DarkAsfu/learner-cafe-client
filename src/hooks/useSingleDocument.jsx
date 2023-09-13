import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useSingleDocument = (id) => {
    const [loading, setLoading] = useState(true)
    const {data: document = [], refetch} = useQuery({
        queryKey: ['document'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/lectures/${id}`);
            setLoading(false)
            return res.json();
        }
    })
    return [document, loading, refetch]
};

export default useSingleDocument;