import{_ as a}from"./Header-D4xDEEY6.js";import"./iframe-Dhk70TJI.js";import"./preload-helper-CN8MlaEF.js";import"./Button-BO4u6rB0.js";const{fn:o}=__STORYBOOK_MODULE_TEST__,_={title:"Example/Header",component:a,render:p=>({components:{MyHeader:a},setup(){return{args:p}},template:'<my-header :user="args.user" />'}),parameters:{layout:"fullscreen"},args:{onLogin:o(),onLogout:o(),onCreateAccount:o()},tags:["autodocs"]},e={args:{user:{name:"Jane Doe"}}},r={args:{user:null}};var s,n,t;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,m,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    user: null
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const L=["LoggedIn","LoggedOut"];export{e as LoggedIn,r as LoggedOut,L as __namedExportsOrder,_ as default};
