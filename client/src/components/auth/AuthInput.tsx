import anime from 'animejs';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './auth-input.scss';
// TODO Configuer les tooltip PS : reprendre la config d'ancien projet
// TODO Afficher les erreurs dans le tooltips
// TODO Activer l'icon et le mettre en rouge si il y'a une erreur
// TODO Si le champ et valide mettre une chose verte
// TODO Animer les apparations des icons avec MORPH SVG !

interface IProps extends React.HTMLProps<HTMLInputElement> {
    error?: string | undefined;
    isTouched?: boolean;
}

const AuthInput = ({ error, isTouched, ...rest }: IProps) => {
    const iconRefPath1 = useRef<SVGPathElement>(null);
    const iconRefPath2 = useRef<SVGPathElement>(null);
    const [active, setActive] = useState(false);
    const tlMemo = useMemo(
        () =>
            anime.timeline({
                autoplay: false,
                easing: 'easeInOutSine',
                duration: 300,
            }),
        []
    );

    const hasError = isTouched && error;
    const errorStyle = hasError && 'auth__input-wrapper--error';

    useEffect(() => {
        const iconPath1 = iconRefPath1.current;
        const iconPath2 = iconRefPath2.current;

        tlMemo.add(
            {
                targets: iconPath1,
                d: [{ value: 'M48 0H28V77H48V0Z' }],
            },
            0
        );
        tlMemo.add(
            {
                targets: iconPath2,
                d: [{ value: 'M48 77H0V97H48V77Z' }],
            },
            0
        );
    }, []);

    useEffect(() => {
        if (!isTouched) return;

        if (tlMemo.began) {
            tlMemo.reverse();
        }
        if (tlMemo.paused) {
            tlMemo.play();
        }
    }, [isTouched, error]);

    useEffect(() => {
        console.log(tlMemo);
        if (tlMemo.began) {
            tlMemo.reverse();
        }
        if (tlMemo.paused) {
            tlMemo.play();
        }
    }, [active]);

    return (
        <div className={`auth__input-wrapper ${errorStyle}`}>
            <button onClick={() => setActive((old) => !old)}>test</button>
            <input {...rest} />
            <svg
                className="auth__input-wrapper__icon"
                viewBox="0 0 20 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path ref={iconRefPath1} d="M20 0H0V77H20V0Z" fill="#C4C4C4" />
                <path ref={iconRefPath2} d="M20 89H0V109H20V89Z" fill="#C4C4C4" />
            </svg>
            {/* <RiErrorWarningLine className="auth__input-wrapper__icon" /> */}
        </div>
    );
};

export default AuthInput;
