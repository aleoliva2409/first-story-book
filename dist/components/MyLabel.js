import { jsx as _jsx } from "react/jsx-runtime";
import './mylabel.css';
const MyLabel = ({ label, size, allCaps, color = 'primary', customColor, }) => {
    return (_jsx("span", { className: `label ${size} text-${color}`, style: { color: customColor }, children: allCaps ? label.toUpperCase() : label }));
};
export default MyLabel;
