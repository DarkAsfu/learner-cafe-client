import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useLabReport = () => {
    const [loading, setLoading] = useState(true)
    const {data: labreport = [], refetch} = useQuery({
        queryKey: ['labreport'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/lectures/category/labreport');
            setLoading(false)
            return res.json();
        }
    })
    return [labreport, loading, refetch];
};

export default useLabReport;