import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useQueueDoc = () => {
    const [loading, setLoading] = useState(true)
    const {data: queueDoc = [], refetch} = useQuery({
        queryKey: ['queueDoc'],
        queryFn: async() => {
            const res = await fetch('https://learner-cafe-server.vercel.app/queueDoc');
            setLoading(false)
            return res.json();
        }
    })
    return [queueDoc, loading, refetch]
};

export default useQueueDoc;