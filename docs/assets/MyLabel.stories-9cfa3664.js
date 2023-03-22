var p=Object.defineProperty;var l=(e,o)=>p(e,"name",{value:o,configurable:!0});import{j as n}from"./jsx-runtime-f29f5735.js";import"./index-f43df481.js";import"./iframe-e89c9832.js";const a=l(({label:e,size:o,allCaps:s,color:c="primary",customColor:i})=>n("span",{className:`label ${o} text-${c}`,style:{color:i},children:s?e.toUpperCase():e}),"MyLabel"),t=a;try{a.displayName="MyLabel",a.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Is label",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"Is size of label",name:"size",required:!0,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Capitalize all characters",name:"allCaps",required:!0,type:{name:"boolean"}},color:{defaultValue:{value:"primary"},description:"Setting color",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},customColor:{defaultValue:null,description:"Setting custom color",name:"customColor",required:!1,type:{name:"string"}}}}}catch{}const g={parameters:{storySource:{source:`import { ComponentMeta, ComponentStory } from '@storybook/react';\r
import MyLabel from '../../components/MyLabel';\r
\r
export default {\r
  title: 'UI/MyLabel',\r
  component: MyLabel,\r
  argTypes: {\r
    color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },\r
    size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },\r
    customColor: { control: 'color' },\r
  },\r
} as ComponentMeta<typeof MyLabel>;\r
\r
const Template: ComponentStory<typeof MyLabel> = (args) => (\r
  <MyLabel {...args} />\r
);\r
\r
export const Basic = Template.bind({});\r
Basic.args = {\r
  label: 'Basic Label',\r
  size: 'normal',\r
  allCaps: false,\r
};\r
\r
export const Secondary = Template.bind({});\r
Secondary.args = {\r
  label: 'Secondary Label',\r
  size: 'normal',\r
  allCaps: false,\r
  color: 'secondary',\r
};\r
\r
export const Tertiary = Template.bind({});\r
Tertiary.args = {\r
  label: 'Tertiary Label',\r
  size: 'normal',\r
  allCaps: false,\r
  color: 'tertiary',\r
};\r
\r
export const FontColor = Template.bind({});\r
FontColor.args = {\r
  label: 'FontColor Label',\r
  size: 'h2',\r
  allCaps: false,\r
  customColor: '#020202',\r
};\r
`,locationsMap:{basic:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},secondary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},tertiary:{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}},"font-color":{startLoc:{col:49,line:14},endLoc:{col:1,line:16},startBody:{col:49,line:14},endBody:{col:1,line:16}}}}},title:"UI/MyLabel",component:t,argTypes:{color:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["normal","h1","h2","h3"]},customColor:{control:"color"}}},r=l(e=>n(t,{...e}),"Template"),y=r.bind({});y.args={label:"Basic Label",size:"normal",allCaps:!1};const d=r.bind({});d.args={label:"Secondary Label",size:"normal",allCaps:!1,color:"secondary"};const m=r.bind({});m.args={label:"Tertiary Label",size:"normal",allCaps:!1,color:"tertiary"};const u=r.bind({});u.args={label:"FontColor Label",size:"h2",allCaps:!1,customColor:"#020202"};const M=["Basic","Secondary","Tertiary","FontColor"];export{y as Basic,u as FontColor,d as Secondary,m as Tertiary,M as __namedExportsOrder,g as default};
//# sourceMappingURL=MyLabel.stories-9cfa3664.js.map
