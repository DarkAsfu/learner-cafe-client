import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';

const useBooks = () => {
    const [loading, setLoading] = useState(true)
    const {data: books = [], refetch} = useQuery({
        queryKey: ['books'],
        queryFn: async () => {
            const res = await fetch('https://learner-cafe-server.vercel.app/books');
            setLoading(false)
            return res.json();
        }
    })
    return [books, loading, refetch]
};

export default useBooks;