import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/tweeter-small.svg';
import './login.scss';

const Login = () => {
    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="login__form-wrapper">
                <img className="login__logo" src={Logo} alt="tweeter-logo" />
                <h2>Sign in</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Connexion</button>
                </form>
                <p className="login__signup-request">
                    You don't have account ? <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
