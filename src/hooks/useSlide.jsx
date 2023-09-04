import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useSlide = () => {
    const [loading, setLoading] = useState(true)
    const {data: slide = [], refetch} = useQuery({
        queryKey: ['slide'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/lectures/category/slide');
            setLoading(false)
            return res.json();
        }
    })
    return [slide, loading, refetch]
};

export default useSlide;