
interface ButtonProps {
    label?: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    children?: React.ReactNode;
    isLoading?: boolean;
    style?: React.CSSProperties;
    id?:  string;
    name?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    className,
    type = 'button',
    children,
    isLoading = false,
    style,
    id,
    name,
    ...rest
}) => {
    return (
        <button
            {...rest}
            id={id}
            name={name}
            type={type}
            disabled={disabled || isLoading}
            onClick={onClick}
            className={className}
            style={style}
        >
            {isLoading ? 'Loading...' : children || label}
            
        </button>
    );
};

export default Button