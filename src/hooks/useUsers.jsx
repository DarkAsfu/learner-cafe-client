import { useQuery } from "@tanstack/react-query";
import { useState } from "react";


const useUsers = () => {
    const [loading, setLoading] = useState(true)
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users');
            setLoading(false)
            return res.json();
        }
    })
    return [users, loading, refetch]
};

export default useUsers;