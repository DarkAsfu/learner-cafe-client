import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLecture = () => {
    const [loading, setLoading] = useState(true)
    const {data: lectures = [], refetch} = useQuery({
        queryKey: ['lecture'],
        queryFn: async() => {
            const res = await fetch('https://learner-cafe-server.vercel.app/lectures/category/lecture');
            setLoading(false)
            return res.json();
        }
    })
    return [lectures, loading, refetch]
};

export default useLecture;