export type Size = 28 | 36 | 56
export type Style = 'primary' | 'secondary'
export type State = 'enabled' | 'pressed' | 'loading' | 'disabled'
export type Cords = {
    x: number,
    y: number,
}

export type CounterPropsType = {
    style?: 'primary' | 'secondary'
    size?: 8 | 12 | 16 | 20 | 24
    stroke?: boolean
    quantly?: string
    pulse?: boolean
    children?: React.ReactNode
}