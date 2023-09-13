import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useBookmarks = () => {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const {data: bookmarks = [], refetch} = useQuery({
        queryKey: ['bookmarks'],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/mybookmarks?email=${user?.email}`)
            setLoading(false)
            return res.json();
        }
    })
    return [bookmarks, loading, refetch]
};

export default useBookmarks;