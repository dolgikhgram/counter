import React, { createContext, useContext, useEffect, useState } from "react";
import classnames from "classnames";
import styles from './Button.module.css'
import { Cords, Size, State, Style } from "../types/types.ts";
import Counter from "../Counter/Counter.tsx";

export interface ButtonContextType {
    style: Style;
    size: Size;
    state: State;
    loading: boolean;
    disabled?: boolean;
    ripple?: Cords;
    setRipple: (cords?: Cords) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

const useButton = () => {
    const context = useContext(ButtonContext);
    if (!context) {
        throw new Error('Button compound components must be used within Button component');
    }
    return context;
};

const clasessSize = {
    28: 'small',
    36: 'medium',
    56: 'large',
};

export interface ButtonRootProps {
    style?: Style;
    size?: Size;
    state?: State;
    loading?: boolean;
    disabled?: boolean;
    children?: React.ReactNode;
    className?: string;
}

const Root = ({
    children,
    size = 36,
    state = 'enabled',
    loading = false,
    disabled,
    style = 'primary',
}: ButtonRootProps) => {
    const [ripple, setRipple] = useState<Cords>();

    useEffect(() => {
        if (ripple) {
            const timeoutId = setTimeout(() => {
                setRipple(undefined);
            }, 600);

            return () => clearTimeout(timeoutId);
        }
    }, [ripple]);

    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();

        setRipple({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const value = {
        style,
        size,
        state,
        loading,
        disabled,
        ripple,
        setRipple,
    };

    return (
        <ButtonContext.Provider value={value}>
            <div className={styles.container}>
                <button
                    disabled={disabled}
                    onClick={handleClick}
                    className={classnames(styles[clasessSize[size]], styles[style], styles[state], styles.btn)}
                >
                    {children}
                </button>
            </div>
        </ButtonContext.Provider>
    );
};

const Content = ({ children }: { children: React.ReactNode }) => {
    const { loading } = useButton();
    
    if (loading) return null;
    
    return (
        <div className={styles.content}>
            <span className={styles.truncate}>{children}</span>
        </div>
    );
};

const ContentWithCounter = ({ children, counter }: { children: React.ReactNode, counter: React.ReactNode }) => {
    const { loading } = useButton();
    
    if (loading) return null;
    
    return (
        <div className={styles['content-with-counter']}>
            <Content>{children}</Content>
            {counter}
        </div>
    );
};

const Ripple = () => {
    const { ripple } = useButton();
    
    if (!ripple) return null;
    
    return (
        <span
            className={styles.ripple}
            style={{
                left: ripple.x,
                top: ripple.y,
            }}
        />
    );
};

const Loader = () => {
    const { loading, style } = useButton();
    
    if (!loading) return null;

    return (
        <div>
            <div className={styles.shimmer}></div>
            <div className={styles.svg}>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
                    <radialGradient id='a12' cx='.66' fx='.66' cy='.3125' fy='.3125'
                                    gradientTransform='scale(1.5)'>
                        <stop offset='0' stop-color={style === 'primary' ? '#FFFBF7' : '#040404'}></stop>
                        <stop offset='.3' stop-color={style === 'primary' ? '#FFFBF7' : '#040404'} stop-opacity='.9'></stop>
                        <stop offset='.6' stop-color={style === 'primary' ? '#FFFBF7' : '#040404'} stop-opacity='.6'></stop>
                        <stop offset='.8' stop-color={style === 'primary' ? '#FFFBF7' : '#040404'} stop-opacity='.3'></stop>
                        <stop offset='1' stop-color={style === 'primary' ? '#FFFBF7' : '#040404'} stop-opacity='0'></stop>
                    </radialGradient>
                    <circle transform-origin='center' fill='none' stroke='url(#a12)' stroke-width='15'
                            stroke-linecap='round' stroke-dasharray='200 1000' stroke-dashoffset='0'
                            cx='100' cy='100' r='70'>
                        <animateTransform type='rotate' attributeName='transform' calcMode='spline'
                                          dur='2' values='360;0' keyTimes='0;1' keySplines='0 0 1 1'
                                          repeatCount='indefinite'></animateTransform>
                    </circle>
                    <circle transform-origin='center' fill='none' opacity='.2' 
                            stroke={style === 'primary' ? '#FFFBF7' : '#040404'}
                            stroke-width='15' stroke-linecap='round' cx='100' cy='100' r='70'></circle>
                </svg>
            </div>
        </div>
    );
};

const Button = {
    Root,
    Content,
    ContentWithCounter,
    Ripple,
    Loader,
    Counter,
};

export default Button;