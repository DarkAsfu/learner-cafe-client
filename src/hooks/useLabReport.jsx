import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLabReport = () => {
    const [loading, setLoading] = useState(true)
    const {data: labreport = [], refetch} = useQuery({
        queryKey: ['labreport'],
        queryFn: async() => {
            const res = await fetch('https://learner-cafe-server.vercel.app/lectures/category/labreport');
            setLoading(false)
            return res.json();
        }
    })
    return [labreport, loading, refetch];
};

export default useLabReport;