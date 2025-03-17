import { useEffect, useState } from 'react';

interface DataItem {
    id: number;
    name: string;
    role: string;
}

const Table = () => {
    const [data, setData] = useState<DataItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/data');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);
console.log("data",data);
    return (
       <div>hello </div>
    );
};

export default Table;