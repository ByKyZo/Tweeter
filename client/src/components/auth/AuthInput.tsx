import React, { useEffect, useState } from 'react';
import { CgCheckO } from 'react-icons/cg';
import { RiErrorWarningLine } from 'react-icons/ri';
import Tooltip from '../widgets/tooltip/Tooltip';
import './auth-input.scss';
// TODO Configuer les tooltip PS : reprendre la config d'ancien projet
// TODO Afficher les erreurs dans le tooltips
// TODO Activer l'icon et le mettre en rouge si il y'a une erreur
// TODO Si le champ et valide mettre une chose verte
// TODO Animer les apparations des icons avec MORPH SVG !

// TODO Faire un morph svg tester !
// TODO Faire un morph svg tester !
// TODO Faire un morph svg tester !
// TODO Faire un morph svg tester !

interface IProps extends React.HTMLProps<HTMLInputElement> {
    error?: string | undefined;
    isTouched?: boolean;
}

const AuthInput = ({ error, isTouched, ...rest }: IProps) => {
    const [hasError, setHasError] = useState(false);
    const [iconRef, setIconRef] = useState<any>(null);
    // const tlMemo = useMemo(
    //     () =>
    //         anime.timeline({
    //             autoplay: false,
    //             easing: 'easeInOutSine',
    //             duration: 300,
    //         }),
    //     []
    // );

    const errorStyle = hasError && 'auth__input-wrapper--error';

    useEffect(() => {
        setHasError(!!(isTouched && error));
    }, [isTouched, error]);

    return (
        <div className={`auth__input-wrapper ${errorStyle}`}>
            <input {...rest} />
            {isTouched &&
                (hasError ? (
                    <div
                        ref={setIconRef}
                        className="auth__input-wrapper__icon auth__input-wrapper__icon--error">
                        <RiErrorWarningLine />
                    </div>
                ) : (
                    <div className="auth__input-wrapper__icon auth__input-wrapper__icon--success">
                        <CgCheckO />
                    </div>
                ))}
            <Tooltip triggerEl={iconRef}>{error}</Tooltip>
        </div>
    );
};

export default AuthInput;
