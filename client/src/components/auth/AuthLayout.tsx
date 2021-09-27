import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/tweeter-small.svg';
import './auth-layout.scss';

interface IProps {
    children: JSX.Element | JSX.Element[];
    onFormSubmit: (e: any) => void;
    isSignin: boolean;
}

// TODO Animer la bordure + la crée en SVG pour la desiner
// TODO Idem pour le logo PS : Le retravailler sur figma pour pouvoir le dessiner

/**
 * ? Composant de mise en page qui englobe le composant de Login et Register
 */
const AuthLayout = ({ isSignin, onFormSubmit, children }: IProps) => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onFormSubmit(e);
    };

    return (
        <div className="auth">
            <div className="auth__form-wrapper">
                <img className="auth__logo" src={Logo} alt="tweeter-logo" />

                <h2>{isSignin ? 'Sign in' : 'Sign up'}</h2>

                <form noValidate onSubmit={handleSubmit}>
                    {children}
                    <button type="submit">{isSignin ? 'Connexion' : 'Sign up'}</button>
                </form>

                {isSignin ? (
                    <p className="auth__signup-request">
                        You don't have account ? <Link to="/signup">Sign up</Link>
                    </p>
                ) : (
                    <p className="auth__signup-request">
                        You have already account ? <Link to="/signin">Sign in</Link>
                    </p>
                )}
            </div>
        </div>
    );
};

export default AuthLayout;
