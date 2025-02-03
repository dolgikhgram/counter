import { createContext, useContext } from 'react';
import styles from './Counter.module.css'
import classnames from "classnames";
import {CounterPropsType} from "../types/types.ts";

const clasessSize = {
    8: 'small',
    12: 'medium',
    16: 'big',
    20: 'large',
    24: 'veryLarge',
}

type CounterContextType = {
    style: 'primary' | 'secondary';
    size: 8 | 12 | 16 | 20 | 24;
    stroke: boolean;
    quantly: string;
    pulse: boolean;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

const useCounter = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error('Counter compound components must be used within Counter component');
    }
    return context;
};

const Root = ({
    style = 'primary',
    size = 16,
    stroke = false,
    quantly = '0',
    pulse = false,
    children,
}: CounterPropsType) => {
    const value = { style, size, stroke, quantly, pulse };
    
    return (
        <CounterContext.Provider value={value}>
            <div className={styles.conteiner}>
                {children}
            </div>
        </CounterContext.Provider>
    );
};

const Badge = () => {
    const { style, size, stroke, quantly } = useCounter();
    
    const counterClasses = classnames(
        styles[clasessSize[size]],
        styles[style],
        styles['counter'],
        styles[stroke ? 'stroke' : ''],
    );

    return (
        <div className={counterClasses}>
            <span className={styles["red-dot"]}>
                {Number(quantly) >= 100 ? '99+' : quantly}
            </span>
        </div>
    );
};

const Pulse = () => {
    const { style, size, pulse } = useCounter();
    
    if (!pulse) return null;

    const pulseStyle = {
        backgroundColor: style === 'primary' ? 'rgba(47, 182, 117, 1)' : 'rgba(131, 102, 86, 0.12)',
        minWidth: size + 'px',
        minHeight: size + 'px',
        padding: size >= 16 ? '0px 4px' : '0px',
    };

    return (
        <>
            <div className={classnames(styles.pulse, styles.one)} style={pulseStyle} />
            <div className={classnames(styles.pulse, styles.two)} style={pulseStyle} />
        </>
    );
};

const Counter = {
    Root,
    Badge,
    Pulse,
};

export default Counter;
