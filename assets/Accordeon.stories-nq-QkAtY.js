import{e as m,o as y,f as o,d as g,b as h,q as w,s as b,t as l,n as x,u as S,v as _}from"./vue.esm-bundler-BKvzBczE.js";import{w as C,e as n,u}from"./index-Bgv8flIi.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DrFu-skq.js";function k(t,e){return y(),m("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[o("path",{"fill-rule":"evenodd",d:"M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z","clip-rule":"evenodd"})])}const H={class:"border rounded-lg overflow-hidden shadow-md"},q={class:"font-semibold"},B={class:"p-4 border-t bg-white"},f=g({__name:"Accordeon",props:{title:String,content:String},setup(t){const e=h(!1),a=()=>{e.value=!e.value};return(c,s)=>(y(),m("div",H,[o("button",{onClick:a,class:"w-full flex gap-4 justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition cursor-pointer",type:"button"},[o("p",q,l(t.title),1),b(S(k),{class:x(["w-6 h-6 transition-transform",{"rotate-180":e.value}])},null,8,["class"])]),w(o("div",B,[o("p",null,l(t.content),1)],512),[[_,e.value]])]))}});f.__docgenInfo={exportName:"default",displayName:"Accordeon",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"content",type:{name:"string"}}],sourceFiles:["/home/runner/work/storybook-project/storybook-project/src/components/Accordeon.vue"]};const I={title:"Components/Accordeon",component:f,tags:["autodocs"],argTypes:{title:{control:"text"},content:{control:"text"}}},r={args:{title:"Titre",content:"Content accordéon"},play:async({canvasElement:t})=>{const e=C(t),a=await e.getByRole("button",{name:/Titre/i}),c=e.getByText(/Content accordéon/i),s=c.closest("div");n(s).toHaveStyle("display: none"),await u.click(a),n(c).toHaveStyle("display: block");const i=t.querySelector(".w-6.h-6");n(i).toHaveClass("rotate-180"),await u.click(a),n(s).toHaveStyle("display: none"),n(i).not.toHaveClass("rotate-180")}};var p,d,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Titre',
    content: 'Content accordéon'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 🔹 Sélectionner le bouton de l'accordéon (par son texte)
    const button = await canvas.getByRole('button', {
      name: /Titre/i
    });

    // 🔹 Vérifier que le contenu est caché par défaut
    const content = canvas.getByText(/Content accordéon/i);
    const contentWrapper = content.closest('div'); // Récupère le premier parent <div>
    expect(contentWrapper).toHaveStyle('display: none');

    // 🔹 Simuler un clic pour ouvrir l'accordéon
    await userEvent.click(button);

    // 🔹 Vérifier que le contenu est maintenant visible
    expect(content).toHaveStyle('display: block');

    // 🔹 Vérifier que l'icône du chevron a tourné (rotation de 180°)
    const chevronIcon = canvasElement.querySelector('.w-6.h-6');
    expect(chevronIcon).toHaveClass('rotate-180');

    // 🔹 Simuler un autre clic pour fermer l'accordéon
    await userEvent.click(button);

    // 🔹 Vérifier que le contenu est de nouveau caché
    expect(contentWrapper).toHaveStyle('display: none');

    // 🔹 Vérifier que l'icône du chevron est revenu à sa position d'origine
    expect(chevronIcon).not.toHaveClass('rotate-180');
  }
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,I as default};
