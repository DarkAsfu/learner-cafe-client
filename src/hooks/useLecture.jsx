import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLecture = () => {
    const [loading, setLoading] = useState(true)
    const {data: lectures = [], refetch} = useQuery({
        queryKey: ['lecture'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/lectures/category/lecture');
            setLoading(false)
            return res.json();
        }
    })
    return [lectures, loading, refetch]
};

export default useLecture;