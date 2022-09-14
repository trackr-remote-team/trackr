import React, {useRef} from 'react';
import bcrypt from 'bcryptjs';
import { redirect, useNavigate, Link } from 'react-router-dom';

export default function LoginPage() {
    const emailInputRef = useRef<HTMLInputElement>();
    const passwordInputRef = useRef<HTMLInputElement>();
    const navigate = useNavigate();

    const SignUpForm = (e) => {
        e.preventDefault();
        const email = emailInputRef?.current?.value;
        const password = passwordInputRef?.current?.value;

        const hashedPassword = bcrypt.hashSync(password, 10);

        window.localStorage.setItem('login', JSON.stringify({email, hashedPassword}))
    }
    const LoginForm = (e) => {
        e.preventDefault();
        const email = emailInputRef?.current?.value;
        const password = passwordInputRef?.current?.value;

        const getHashedPass = JSON.parse(window.localStorage.getItem('login')).hashedPassword
        
        bcrypt.compare(password, getHashedPass, function(err, isMatch) {
            if(err) {
                throw err;
            } else if (!isMatch) {
                console.log('Password doesnt match');
            } else {
                console.log('Password matches');
                navigate("/dashboard");
            }
        })
    }

    return (
        <>
        <h1>Login Page</h1>
        <Link to="/dashboard">Dashboard</Link>
        <form>
            <input type="email" placeholder="email" ref={emailInputRef} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}/>
            <input type="password" placeholder="password" ref={passwordInputRef} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}/>
            <button type="submit" onClick={(e) => SignUpForm(e)} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}>
                Sign-Up!
            </button>
            <button type="submit" onClick={(e) => LoginForm(e)} style={{ padding: '15px', borderRadius: '10px', margin: '10px' }}>
                Log in!
            </button>
        </form>
        </>
    )
}