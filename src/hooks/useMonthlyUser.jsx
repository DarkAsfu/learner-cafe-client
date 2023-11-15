import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useMonthlyUser = () => {
    const [loading, setLoading] = useState(true)
    const {data: monthlyUser = [], refetch} = useQuery({
        queryKey: ['monthlyUser'],
        queryFn: async() => {
            const res = await fetch('https://learner-cafe-server.vercel.app/monthlyUserRegistration');
            setLoading(false)
            return res.json();
        }
    })
    return [monthlyUser, loading, refetch]
};

export default useMonthlyUser;