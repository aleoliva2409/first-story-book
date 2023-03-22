/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
    Is label
    */
    label: string;
    /**
    Is size of label
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    Capitalize all characters
     */
    allCaps: boolean;
    /**
    Setting color
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
    Setting custom color
     */
    customColor?: string;
}
declare const MyLabel: ({ label, size, allCaps, color, customColor, }: MyLabelProps) => JSX.Element;
export default MyLabel;
