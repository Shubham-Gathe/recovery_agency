// src/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

// interface LoginResponse {
//     id: number;
//     types: string;
//     token: string;
// }

const Login: React.FC = () => {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        let authToken = localStorage.getItem('authToken');
        // console.log('auth==',authToken);
        const postData = {
            'type':type,
            'name':name,
            'email':email,
            'password':password,
        }
        try {
            const response = await axios.post('https://cda2-117-204-237-240.ngrok-free.app/sign_up',postData, {
                headers: {
                    'Authorization': authToken,
                    'Content-Type':'application/json'
                }
            });

            const { id, token,} = response.data;
            console.log('User ID:', id);
            console.log('Token:', token);
            // console.log('Type :', responceType);
            alert('Login successful!');
            localStorage.setItem('authToken', token); // Store token

        } catch (err) {
            setError('Login failed. Please try again.');
            console.error('Error logging in:', err);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="type" name= "type" onChange={(e) => setType(e.target.value)}>
                        <option value="caller">Caller</option>
                        <option value="executive">Executive</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">signup</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
