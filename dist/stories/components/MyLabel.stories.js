import { jsx as _jsx } from "react/jsx-runtime";
import MyLabel from '../../components/MyLabel';
export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
        customColor: { control: 'color' },
    },
};
const Template = (args) => (_jsx(MyLabel, { ...args }));
export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    allCaps: false,
};
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Secondary Label',
    size: 'normal',
    allCaps: false,
    color: 'secondary',
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Tertiary Label',
    size: 'normal',
    allCaps: false,
    color: 'tertiary',
};
export const FontColor = Template.bind({});
FontColor.args = {
    label: 'FontColor Label',
    size: 'h1',
    allCaps: false,
    customColor: '#020202',
};
