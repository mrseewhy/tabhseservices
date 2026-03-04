import { NavLink } from "react-router-dom";

// 1. Define props interface
interface LinkButtonProps {
    color: string;
    to: string;
    children: React.ReactNode;
}

// 2. Use React.FC (or just typed function parameter)
const LinkButton: React.FC<LinkButtonProps> = ({
    color,
    to,                      // default value
    children,
}) => {
    return (
        <NavLink to={to}>
            <span className={`${color} py-3 px-6 rounded-md font-semibold text-sm  transition-all duration-300 `}>
                {children}
            </span>
        </NavLink>
    );
};

export default LinkButton;