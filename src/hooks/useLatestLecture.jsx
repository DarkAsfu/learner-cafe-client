import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useLatestLecture = () => {
    const [loading, setLoading] = useState(true)
    const {data: alllectures = [], refetch} = useQuery({
        queryKey: ['lectures'],
        queryFn: async() => {
            const res = await fetch('https://learner-cafe-server.vercel.app/lectures');
            setLoading(false)
            return res.json();
        }
    })
    return [alllectures, loading, refetch]
};

export default useLatestLecture;