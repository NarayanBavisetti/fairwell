import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from 'react';
import { Authentication } from "../lib/services/authentication.service";

export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = { email, password };
    if (payload) {
      return Authentication.emailLogin(payload)
        .then((response) => {
          console.log(response, "response")
          if (response) router.push(`/dashboard`);;
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
    <div>
      {!session ? (
        <>
          <p>Not signed in</p>
          <br />
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Sign in</button>
          </form>
          <button onClick={() => signIn('google')}>Google Sign in</button>
        </>
      ) : (
        <div>
          <h4>Signed in as {session.user.name}</h4>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </div>
  );
}
