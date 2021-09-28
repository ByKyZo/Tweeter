import anime from 'animejs';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CgCheckO } from 'react-icons/cg';
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
                // d: [{ value: 'M48 0H28V77H48V0Z' }],
                d: [
                    {
                        value: 'M179 89.5C179 138.929 138.929 179 89.5 179C40.0705 179 0 138.929 0 89.5C0 40.0706 40.0705 0 89.5 0C138.929 0 179 40.0706 179 89.5ZM137 59L97.5 116.5L81.5 105.333L120 47.5L137 59ZM86 132L97.5 116.5L58.5 88.5L47 105.5L86 132Z',
                    },
                ],
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
            <button style={{ position: 'fixed' }} onClick={() => setActive((old) => !old)}>
                test
            </button>
            <input {...rest} />
            {/* <svg
                className="auth__input-wrapper__icon"
                viewBox="0 0 20 109"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path ref={iconRefPath1} d="M20 0H0V77H20V0Z" fill="#C4C4C4" />
                <path ref={iconRefPath2} d="M20 89H0V109H20V89Z" fill="#C4C4C4" />
            </svg> */}

            {/* fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M179 89.5C179 138.929 138.929 179 89.5 179C40.0705 179 0 138.929 0 89.5C0 40.0706 40.0705 0 89.5 0C138.929 0 179 40.0706 179 89.5ZM137 59L97.5 116.5L81.5 105.333L120 47.5L137 59ZM86 132L97.5 116.5L58.5 88.5L47 105.5L86 132Z"
                    fill="#C4C4C4" */}
            {/* <svg
                className="auth__input-wrapper__icon"
                // width="179"
                // height="179"
                viewBox="0 0 179 179"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    ref={iconRefPath1}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M179 89.5C179 138.929 138.929 179 89.5 179C40.0705 179 0 138.929 0 89.5C0 40.0706 40.0705 0 89.5 0C138.929 0 179 40.0706 179 89.5ZM100 27V110H79V27H100ZM100 151V130H79V151H100Z"
                    fill="#C4C4C4"
                />
            </svg> */}

            {/* <RiErrorWarningLine className="auth__input-wrapper__icon" /> */}
            <CgCheckO className="auth__input-wrapper__icon" />
        </div>
    );
};

export default AuthInput;
