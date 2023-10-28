import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useCategory = (category) => {
    const [loading, setLoading] = useState(true)
    const {data: categories = [], refetch} = useQuery({
        queryKey: ['categories'],
        queryFn: async() => {
            const res = await fetch(`https://learner-cafe-server.vercel.app/lectures/category/${category}`);
            setLoading(false)
            return res.json();
        }
    })
    return [categories, loading, refetch];
};

export default useCategory;