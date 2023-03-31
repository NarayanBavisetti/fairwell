import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { Authentication } from '../lib/services/authentication.service';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = { username, email, password };
        if (payload) {
            return Authentication.emailSignUp(payload)
                .then((response) => {
                    console.log(response, "response")
                    if (response) router.push(`/signin`);;
                })
                .catch((error) => {
                    alert("Error Signing Up",);
                    console.log(error);
                });
        } else {
            alert("error");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign up</button>
        </form>
    );
}
