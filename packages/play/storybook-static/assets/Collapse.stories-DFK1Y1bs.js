import{s as y,c as V,B as $,t as N}from"./index-BFZE8xDk.js";import{d as w,b as S,e as I,f as D,w as T,o as B,g as r,j,k as z,l as c,m as p,n as H,t as L,p as u,q as O,s as q,v as A,u as F,x as G,y as P,T as J,z as K}from"./vue.esm-bundler-CJaBpEhO.js";const X=Symbol("collapseContext"),M={class:"xc-collapse"},Q="XcCollapse",R=V(w({name:Q,__name:"Collapse",props:{modelValue:{},accordion:{type:Boolean}},emits:["update:modelValue","change"],setup(e,{emit:n}){const l=e,i=n,o=S(l.modelValue);function a(t){o.value=t,i("update:modelValue",t),i("change",t)}return l.accordion&&o.value.length>1&&console.warn("accordion mode should only have one active item"),D(()=>{l.accordion&&o.value.length>1&&N()}),T(()=>l.modelValue,t=>a(t)),K(X,{activeNames:o,handleItemClick:function(t){let s=[...o.value];if(l.accordion)return s=[s[0]===t?"":t],void a(s);const m=s.indexOf(t);m>-1?s.splice(m,1):s.push(t),a(s)}}),(t,s)=>(B(),I("div",M,[r(t.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-2830aa5a"]]),v=e=>e.style.height="0px",h=e=>e.style.height=`${e.scrollHeight}px`,x=e=>e.style.height="",f=e=>e.style.overflow="hidden",b=e=>e.style.overflow="",U={beforeEnter(e){v(e),f(e)},enter:e=>h(e),afterEnter(e){x(e),b(e)},beforeLeave(e){h(e),f(e)},leave:e=>v(e),afterLeave(e){x(e),b(e)}},W=["id"],Y={class:"xc-collapse-item__title"},Z={class:"xc-collapse-item__wapper"},ee=["id"],ae=V(w({name:"XcCollapseItem",__name:"CollapseItem",props:{name:{},title:{},disabled:{type:Boolean}},setup(e){const n=e,l=j(X,void 0),i=z(()=>{var a;return(a=l==null?void 0:l.activeNames.value)==null?void 0:a.includes(n.name)});function o(){n.disabled||(l==null||l.handleItemClick(n.name))}return(a,t)=>(B(),I("div",{class:u(["xc-collapse-item",{"is-disabled":a.disabled}])},[c("div",{class:u(["xc-collapse-item__header",{"is-disabled":a.disabled,"is-active":i.value}]),id:`item-header-${a.name}`,onClick:o},[c("span",Y,[r(a.$slots,"title",{},()=>[H(L(a.title),1)],!0)]),p($,{icon:"angle-right",class:"header-angle"})],10,W),p(J,F({name:"slide"},G(P(U))),{default:O(()=>[q(c("div",Z,[c("div",{class:"xc-collapse-item__content",id:`item-content-${a.name}`},[r(a.$slots,"default",{},void 0,!0)],8,ee)],512),[[A,i.value]])]),_:3},16)],2))}}),[["__scopeId","data-v-6a061dc6"]]),k=y(R),E=y(ae),se={title:"Example/Collapse",component:k,subcomponents:{XcCollapseItem:E},tags:["autodocs"]},d={render:e=>({components:{XcCollapse:k,XcCollapseItem:E},setup(){return{args:e}},template:`
    <xc-collapse v-bind="args">
      <xc-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </xc-collapse-item>
      <xc-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </xc-collapse-item>
      <xc-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </xc-collapse-item>
    </xc-collapse>
    `}),args:{accordion:!0,modelValue:["a"]}};var g,_,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      XcCollapse,
      XcCollapseItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <xc-collapse v-bind="args">
      <xc-collapse-item name="a" title="Title a">
        <div>this is content a</div>
      </xc-collapse-item>
      <xc-collapse-item name="b" title="title b">
        <div>this is content b</div>
      </xc-collapse-item>
      <xc-collapse-item name="c" title="title c  disable" disabled>
        <div>this is content c</div>
      </xc-collapse-item>
    </xc-collapse>
    \`
  }),
  args: {
    accordion: true,
    modelValue: ['a']
  }
}`,...(C=(_=d.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const oe=["Default"];export{d as Default,oe as __namedExportsOrder,se as default};
