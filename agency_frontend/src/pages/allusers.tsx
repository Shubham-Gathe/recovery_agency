import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllUsers = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let authToken = localStorage.getItem('authToken');

        // Function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cda2-117-204-237-240.ngrok-free.app/user_block/users', {
                    headers: {
                        'Authorization': authToken,
                        'Content-Type': 'application/json',
                        'ngrok-skip-browser-warning ': 'fgdfgdf',
                    }
                });
                // Replace with your URL
                setData(response.data);
            } catch (error) {
                setError('Failed. Please try again.');
            }
        };

        // Call fetchData function
        fetchData();
    }, []); // Empty dependency array means this effect runs once when the component mounts

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Data:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default AllUsers;
