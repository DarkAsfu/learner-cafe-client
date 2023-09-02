import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const usePresentation = () => {
    const [loading, setLoading] = useState(true)
    const {data: presentation = [], refetch} = useQuery({
        queryKey: ['presentation'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/lectures/category/presentation');
            setLoading(false)
            return res.json();
        }
    })
    return [presentation, loading, refetch]
};

export default usePresentation;