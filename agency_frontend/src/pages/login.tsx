// src/Login.tsx
import React, { useState } from 'react';
import axios from 'axios';

interface LoginResponse {
    id: number;
    type: string;
    token: string;
}

const Login: React.FC = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);

        try {
            const response = await axios.post<LoginResponse>('http://16.171.247.65:3000/login', {
                email,
                password,
            });

            const { id, token } = response.data;
            localStorage.setItem('authToken', token); // Store token

        } catch (err) {
            setError('Login failed. Please try again.');
            console.error('Error logging in:', err);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={email}
                        onChange={(e) => setUsername(e.target.value)}
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
                <button type="submit">Login</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
};

export default Login;
