import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useLatestLecture = () => {
    const [loading, setLoading] = useState(true)
    const {data: alllectures = [], refetch} = useQuery({
        queryKey: ['lectures'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/lectures');
            setLoading(false)
            return res.json();
        }
    })
    return [alllectures, loading, refetch]
};

export default useLatestLecture;