import{d as b,b as x,e as y,f as n,t as s,n as h,o as f}from"./vue.esm-bundler-BKvzBczE.js";import{w as v,u as C,e as w}from"./index-Bgv8flIi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";const _={class:"text-xl font-bold px-4 py-3 bg-gray-100"},k={class:"text-gray-600 p-4 flex gap-2 flex-col"},g=b({__name:"Card",props:{title:{},content:{},borderRadius:{}},setup(c){const e=x("Changer le texte"),r=()=>{e.value="Le texte a changé après un clic ! 🎉"};return(t,R)=>(f(),y("div",{class:h(["shadow-md bg-white overflow-hidden",t.borderRadius])},[n("h2",_,s(t.title),1),n("div",k,[n("div",null,s(t.content),1),n("div",null,[n("button",{onClick:r,class:"px-4 py-2 bg-blue-500 text-white rounded",type:"button"},s(e.value),1)])])],2))}});g.__docgenInfo={exportName:"default",displayName:"Card",description:"",tags:{},props:[{name:"title",required:!0,type:{name:"string"}},{name:"content",required:!0,type:{name:"string"}},{name:"borderRadius",required:!1,type:{name:"string"}}],sourceFiles:["/Users/jerem/Desktop/storybook/mon-projet-storybook/src/components/Card.vue"]};const D={title:"Components/Card",component:g,tags:["autodocs"],argTypes:{title:{control:"text"},content:{control:"text"},borderRadius:{control:{type:"select"},options:["rounded-none","rounded","rounded-lg","rounded-full"]}}},o={args:{title:"Ma première card test",content:"Ceci est un test de composant Storybook !",borderRadius:"rounded-none"}},a={args:{title:"Carte interactive",content:"Clique sur le bouton pour changer le texte",borderRadius:"rounded"},play:async({canvasElement:c})=>{const e=v(c),r=await e.getByRole("button",{name:/Changer le texte/i});await C.click(r);const t=await e.findByText(/Le texte a changé après un clic ! 🎉/i);w(t).toBeInTheDocument()}};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    title: 'Ma première card test',
    content: 'Ceci est un test de composant Storybook !',
    borderRadius: 'rounded-none'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,p,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Carte interactive',
    content: 'Clique sur le bouton pour changer le texte',
    borderRadius: 'rounded'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🔹 Sélectionner le bouton par son texte
    const button = await canvas.getByRole('button', {
      name: /Changer le texte/i
    });

    // 🔹 Simuler un clic
    await userEvent.click(button);

    // 🔹 Vérifier que le texte a changé après le clic
    const updatedText = await canvas.findByText(/Le texte a changé après un clic ! 🎉/i);
    expect(updatedText).toBeInTheDocument();
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const E=["Default","InteractiveTest"];export{o as Default,a as InteractiveTest,E as __namedExportsOrder,D as default};
