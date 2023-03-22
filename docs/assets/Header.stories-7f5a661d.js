var a=Object.defineProperty;var o=(e,r)=>a(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime-5688454a.js";import{H as n}from"./Header-2f2775e8.js";import"./index-f99ca99a.js";import"./iframe-e67a6312.js";import"./Button-ab24859c.js";const y={title:"Example/Header",component:n,parameters:{storySource:{source:`import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
`,locationsMap:{"logged-in":{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}},"logged-out":{startLoc:{col:48,line:14},endLoc:{col:78,line:14},startBody:{col:48,line:14},endBody:{col:78,line:14}}}},layout:"fullscreen"}},t=o(e=>s(n,{...e}),"Template"),d=t.bind({});d.args={user:{name:"Jane Doe"}};const l=t.bind({});l.args={};const L=["LoggedIn","LoggedOut"];export{d as LoggedIn,l as LoggedOut,L as __namedExportsOrder,y as default};
//# sourceMappingURL=Header.stories-7f5a661d.js.map
