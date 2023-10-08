import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useMyDocument = () => {
    const { user } =useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    const { data: myDocument = [], refetch } = useQuery({
        queryKey: ['myDocument'],
        queryFn: async() =>{
            const res = await fetch(`https://learner-cafe-server.vercel.app/myLectures?email=${user?.email}`)
            setLoading(false)
            return res.json();
        }
    })
    return [myDocument, loading, refetch]
};

export default useMyDocument;