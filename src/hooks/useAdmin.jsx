import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`)
            // return res.data.admin;
            const data = await res.json();
            return data.admin;
            
        }
    })
    return [isAdmin, isAdminLoading];
};

export default useAdmin;