import{f as Ct,w as A,u,e as p,c as _}from"./index-Ds2nHl6m.js";import{s as gt,c as ft,a as Bt,B as U}from"./index-BFZE8xDk.js";import{d as yt,C as Tt,j as wt,b as kt,k as B,D as K,o as I,q as St,g as H,E as q,m as Ot,F as L,y as Et,p as zt,G as $t,e as Pt,z as jt,r as It,H as P}from"./vue.esm-bundler-CJaBpEhO.js";var Ht=typeof global=="object"&&global&&global.Object===Object&&global,At=typeof self=="object"&&self&&self.Object===Object&&self,D=Ht||At||Function("return this")(),h=D.Symbol,ht=Object.prototype,Dt=ht.hasOwnProperty,Gt=ht.toString,m=h?h.toStringTag:void 0;function Mt(t){var e=Dt.call(t,m),n=t[m];try{t[m]=void 0;var o=!0}catch{}var a=Gt.call(t);return o&&(e?t[m]=n:delete t[m]),a}var Xt=Object.prototype,Ft=Xt.toString;function Nt(t){return Ft.call(t)}var Rt="[object Null]",Wt="[object Undefined]",Z=h?h.toStringTag:void 0;function bt(t){return t==null?t===void 0?Wt:Rt:Z&&Z in Object(t)?Mt(t):Nt(t)}function Vt(t){return t!=null&&typeof t=="object"}var Ut="[object Symbol]";function G(t){return typeof t=="symbol"||Vt(t)&&bt(t)==Ut}function Kt(t,e){for(var n=-1,o=t==null?0:t.length,a=Array(o);++n<o;)a[n]=e(t[n],n,t);return a}var M=Array.isArray,J=h?h.prototype:void 0,Q=J?J.toString:void 0;function vt(t){if(typeof t=="string")return t;if(M(t))return Kt(t,vt)+"";if(G(t))return Q?Q.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function O(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var qt="[object AsyncFunction]",Lt="[object Function]",Zt="[object GeneratorFunction]",Jt="[object Proxy]";function Qt(t){if(!O(t))return!1;var e=bt(t);return e==Lt||e==Zt||e==qt||e==Jt}var j=D["__core-js_shared__"],Y=function(){var t=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function Yt(t){return!!Y&&Y in t}var te=Function.prototype,ee=te.toString;function ne(t){if(t!=null){try{return ee.call(t)}catch{}try{return t+""}catch{}}return""}var oe=/[\\^$.*+?()[\]{}|]/g,ae=/^\[object .+?Constructor\]$/,re=Function.prototype,se=Object.prototype,ce=re.toString,ie=se.hasOwnProperty,le=RegExp("^"+ce.call(ie).replace(oe,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function ue(t){if(!O(t)||Yt(t))return!1;var e=Qt(t)?le:ae;return e.test(ne(t))}function pe(t,e){return t==null?void 0:t[e]}function X(t,e){var n=pe(t,e);return ue(n)?n:void 0}var tt=function(){try{var t=X(Object,"defineProperty");return t({},"",{}),t}catch{}}(),de=9007199254740991,ge=/^(?:0|[1-9]\d*)$/;function fe(t,e){var n=typeof t;return e=e??de,!!e&&(n=="number"||n!="symbol"&&ge.test(t))&&t>-1&&t%1==0&&t<e}function ye(t,e,n){e=="__proto__"&&tt?tt(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function mt(t,e){return t===e||t!==t&&e!==e}var he=Object.prototype,be=he.hasOwnProperty;function ve(t,e,n){var o=t[e];(!(be.call(t,e)&&mt(o,n))||n===void 0&&!(e in t))&&ye(t,e,n)}var me=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,_e=/^\w*$/;function xe(t,e){if(M(t))return!1;var n=typeof t;return n=="number"||n=="symbol"||n=="boolean"||t==null||G(t)?!0:_e.test(t)||!me.test(t)||e!=null&&t in Object(e)}var x=X(Object,"create");function Ce(){this.__data__=x?x(null):{},this.size=0}function Be(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Te="__lodash_hash_undefined__",we=Object.prototype,ke=we.hasOwnProperty;function Se(t){var e=this.__data__;if(x){var n=e[t];return n===Te?void 0:n}return ke.call(e,t)?e[t]:void 0}var Oe=Object.prototype,Ee=Oe.hasOwnProperty;function ze(t){var e=this.__data__;return x?e[t]!==void 0:Ee.call(e,t)}var $e="__lodash_hash_undefined__";function Pe(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=x&&e===void 0?$e:e,this}function d(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}d.prototype.clear=Ce;d.prototype.delete=Be;d.prototype.get=Se;d.prototype.has=ze;d.prototype.set=Pe;function je(){this.__data__=[],this.size=0}function E(t,e){for(var n=t.length;n--;)if(mt(t[n][0],e))return n;return-1}var Ie=Array.prototype,He=Ie.splice;function Ae(t){var e=this.__data__,n=E(e,t);if(n<0)return!1;var o=e.length-1;return n==o?e.pop():He.call(e,n,1),--this.size,!0}function De(t){var e=this.__data__,n=E(e,t);return n<0?void 0:e[n][1]}function Ge(t){return E(this.__data__,t)>-1}function Me(t,e){var n=this.__data__,o=E(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}function b(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}b.prototype.clear=je;b.prototype.delete=Ae;b.prototype.get=De;b.prototype.has=Ge;b.prototype.set=Me;var Xe=X(D,"Map");function Fe(){this.size=0,this.__data__={hash:new d,map:new(Xe||b),string:new d}}function Ne(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function z(t,e){var n=t.__data__;return Ne(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Re(t){var e=z(this,t).delete(t);return this.size-=e?1:0,e}function We(t){return z(this,t).get(t)}function Ve(t){return z(this,t).has(t)}function Ue(t,e){var n=z(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}function g(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}g.prototype.clear=Fe;g.prototype.delete=Re;g.prototype.get=We;g.prototype.has=Ve;g.prototype.set=Ue;var Ke="Expected a function";function F(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(Ke);var n=function(){var o=arguments,a=e?e.apply(this,o):o[0],s=n.cache;if(s.has(a))return s.get(a);var c=t.apply(this,o);return n.cache=s.set(a,c)||s,c};return n.cache=new(F.Cache||g),n}F.Cache=g;var qe=500;function Le(t){var e=F(t,function(o){return n.size===qe&&n.clear(),o}),n=e.cache;return e}var Ze=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Je=/\\(\\)?/g,Qe=Le(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Ze,function(n,o,a,s){e.push(a?s.replace(Je,"$1"):o||n)}),e});function Ye(t){return t==null?"":vt(t)}function tn(t,e){return M(t)?t:xe(t,e)?[t]:Qe(Ye(t))}function en(t){if(typeof t=="string"||G(t))return t;var e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function nn(t,e,n,o){if(!O(t))return t;e=tn(e,t);for(var a=-1,s=e.length,c=s-1,i=t;i!=null&&++a<s;){var l=en(e[a]),f=n;if(l==="__proto__"||l==="constructor"||l==="prototype")return t;if(a!=c){var v=i[l];f=void 0,f===void 0&&(f=O(v)?v:fe(e[a+1])?[]:{})}ve(i,l,f),i=i[l]}return t}function y(t,e,n){return t==null?t:nn(t,e,n)}const _t=Symbol("buttonGroupContext"),on=ft(yt({name:"XcButton",__name:"Button",props:{tag:{type:[String,Object,Function],default:"button"},type:{},size:{},nativeType:{default:"button"},disabled:{type:Boolean},loading:{type:Boolean},icon:{},circle:{type:Boolean},plain:{type:Boolean},round:{type:Boolean},loadingIcon:{},autofocus:{type:Boolean},useThrottle:{type:Boolean,default:!0},throttleDuration:{default:500}},emits:["click"],setup(t,{expose:e,emit:n}){const o=t,a=n,s=Tt(),c=wt(_t,void 0),i=kt(),l=B(()=>(c==null?void 0:c.size)??(o==null?void 0:o.size)??""),f=B(()=>(c==null?void 0:c.type)??(o==null?void 0:o.type)??""),v=B(()=>(c==null?void 0:c.disabled)||(o==null?void 0:o.disabled)||!1),N=B(()=>({marginRight:s.default?"6px":"0px"})),R=r=>a("click",r),xt=Bt(R,o.throttleDuration,{trailing:!1});return e({ref:i}),(r,W)=>(I(),K($t(r.tag),{ref_key:"_ref",ref:i,class:zt(["xc-button",{[`xc-button--${f.value}`]:!0,[`xc-button--${l.value}`]:!0,"is-plain":r.plain,"is-round":r.round,"is-circle":r.circle,"is-disabled":v.value,"is-loading":r.loading}]),autofocus:r.autofocus,type:r.tag==="button"?r.nativeType:void 0,disabled:!(!v.value&&!r.loading)||void 0,onClick:W[0]||(W[0]=V=>r.useThrottle?Et(xt)(V):R(V))},{default:St(()=>[r.loading?H(r.$slots,"loading",{key:0},()=>[Ot(U,{class:"loading-icon",icon:r.loadingIcon??"spinner",style:L(N.value),size:"1x",spin:""},null,8,["icon","style"])],!0):q("",!0),r.icon&&!r.loading?(I(),K(U,{key:1,icon:r.icon,style:L(N.value),size:"1x"},null,8,["icon","style"])):q("",!0),H(r.$slots,"default",{},void 0,!0)]),_:3},8,["autofocus","type","disabled","class"]))}}),[["__scopeId","data-v-57c37d24"]]),an={class:"xc-button-group"},rn=ft(yt({name:"XcButtonGroup",__name:"ButtonGroup",props:{size:{},type:{},disabled:{type:Boolean}},setup(t){const e=t;return jt(_t,It({size:P(e,"size"),type:P(e,"type"),disabled:P(e,"disabled")})),(n,o)=>(I(),Pt("div",an,[H(n.$slots,"default",{},void 0,!0)]))}}),[["__scopeId","data-v-b577972d"]]),C=gt(on),sn=gt(rn),pn={title:"Example/Button",component:C,tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},size:{control:{type:"select"},options:["large","default","small",""]},disabled:{control:"boolean"},loading:{control:"boolean"},useThrottle:{control:"boolean"},throttleDuration:{control:"number"},autofocus:{control:"boolean"},tag:{control:{type:"select"},options:["button","a","div"]},nativeType:{control:{type:"select"},options:["button","submit","reset",""]},icon:{control:{type:"text"}},loadingIcon:{control:{type:"text"}}},args:{onClick:Ct()}},$=t=>`
<div style="margin: 5px">
  ${t}
</div>
`,T={argTypes:{content:{control:{type:"text"}}},args:{type:"primary",content:"Button"},render:t=>({components:{XcButton:C},setup(){return{args:t}},template:$('<xc-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xc-button>')}),play:async({canvasElement:t,args:e,step:n})=>{const a=A(t).getByTestId("story-test-btn");await n("When useThrottle is set to true, the onClick should be called once",async()=>{y(e,"useThrottle",!0),await u.tripleClick(a),p(e.onClick).toHaveBeenCalledOnce(),_()}),await n("When useThrottle is set to false, the onClick should be called three times",async()=>{y(e,"useThrottle",!1),await u.tripleClick(a),p(e.onClick).toHaveBeenCalledTimes(3),_()}),await n("When disabled is set to true, the onClick should not be called",async()=>{y(e,"disabled",!0),await u.click(a),p(e.onClick).toHaveBeenCalledTimes(0),y(e,"disabled",!1),_()}),await n("When loading is set to true, the onClick should not be called",async()=>{y(e,"loading",!0),await u.click(a),p(e.onClick).toHaveBeenCalledTimes(0),y(e,"loading",!1),_()})}},w={argTypes:{content:{control:{type:"text"}}},args:{content:"Button",autofocus:!0},render:t=>({components:{XcButton:C},setup(){return{args:t}},template:$(`
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <xc-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xc-button>
      `)}),play:async({args:t})=>{await u.keyboard("{enter}"),p(t.onClick).toHaveBeenCalledOnce(),_()}},k={aegs:{icon:"Search"},render:t=>({components:{XcButton:C},setup(){return{args:t}},template:$(`
      <xc-button circle v-bind="args"></xc-button>
      `)}),play:async({canvasElement:t,args:e,step:n})=>{const o=A(t);await n("click button",async()=>{await u.click(o.getByRole("button"))}),p(e.onClick).toHaveBeenCalled()}},S={argTypes:{groupType:{control:{type:"select"},options:["primary","success","warning","danger","info",""]},groupSize:{control:{type:"select"},options:["large","default","small",""]},groupDisabled:{control:"boolean"},content1:{control:{type:"text"},defaultValue:"Button1"},content2:{control:{type:"text"},defaultValue:"Button2"}},args:{round:!0,content1:"Button1",content2:"Button2"},render:t=>({components:{XcButton:C,XcButtonGroup:sn},setup(){return{args:t}},template:$(`
      <xc-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
        <xc-button v-bind="args">{{args.content1}}</xc-button>
        <xc-button v-bind="args">{{args.content2}}</xc-button>
      </xc-button-group>
      `)}),play:async({canvasElement:t,args:e,step:n})=>{const o=A(t);await n("click btn1",async()=>{await u.click(o.getByText("Button1"))}),await n("click btn2",async()=>{await u.click(o.getByText("Button2"))}),p(e.onClick).toHaveBeenCalled()}};var et,nt,ot;T.parameters={...T.parameters,docs:{...(et=T.parameters)==null?void 0:et.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    type: 'primary',
    content: 'Button'
  },
  render: args => ({
    components: {
      XcButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`<xc-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xc-button>\`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByTestId('story-test-btn');
    await step('When useThrottle is set to true, the onClick should be called once', async () => {
      set(args, 'useThrottle', true);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledOnce();
      clearAllMocks();
    });
    await step('When useThrottle is set to false, the onClick should be called three times', async () => {
      set(args, 'useThrottle', false);
      await userEvent.tripleClick(btn);
      expect(args.onClick).toHaveBeenCalledTimes(3);
      clearAllMocks();
    });
    await step('When disabled is set to true, the onClick should not be called', async () => {
      set(args, 'disabled', true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, 'disabled', false);
      clearAllMocks();
    });
    await step('When loading is set to true, the onClick should not be called', async () => {
      set(args, 'loading', true);
      await userEvent.click(btn);
      expect(args.onClick).toHaveBeenCalledTimes(0);
      set(args, 'loading', false);
      clearAllMocks();
    });

    // await step('click btn', async () => {
    //   const button = canvas.getByRole('button')
    //   await userEvent.click(button)
    // })
    // await expect(args.onClick).toHaveBeenCalled()
  }
}`,...(ot=(nt=T.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var at,rt,st;w.parameters={...w.parameters,docs:{...(at=w.parameters)==null?void 0:at.docs,source:{originalSource:`{
  argTypes: {
    content: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    content: 'Button',
    autofocus: true
  },
  render: args => ({
    components: {
      XcButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <p>请点击浏览器的刷新页面来获取按钮聚焦</p>
      <xc-button data-testid="story-test-btn" v-bind="args">{{args.content}}</xc-button>
      \`)
  }),
  play: async ({
    args
  }) => {
    await userEvent.keyboard('{enter}');
    expect(args.onClick).toHaveBeenCalledOnce();
    clearAllMocks();
  }
}`,...(st=(rt=w.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ct,it,lt;k.parameters={...k.parameters,docs:{...(ct=k.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  aegs: {
    icon: 'Search'
  },
  render: args => ({
    components: {
      XcButton
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <xc-button circle v-bind="args"></xc-button>
      \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(lt=(it=k.parameters)==null?void 0:it.docs)==null?void 0:lt.source}}};var ut,pt,dt;S.parameters={...S.parameters,docs:{...(ut=S.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  argTypes: {
    groupType: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'warning', 'danger', 'info', '']
    },
    groupSize: {
      control: {
        type: 'select'
      },
      options: ['large', 'default', 'small', '']
    },
    groupDisabled: {
      control: 'boolean'
    },
    content1: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button1'
    },
    content2: {
      control: {
        type: 'text'
      },
      defaultValue: 'Button2'
    }
  },
  args: {
    round: true,
    content1: 'Button1',
    content2: 'Button2'
  },
  render: args => ({
    components: {
      XcButton,
      XcButtonGroup
    },
    setup() {
      return {
        args
      };
    },
    template: container(\`
      <xc-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
        <xc-button v-bind="args">{{args.content1}}</xc-button>
        <xc-button v-bind="args">{{args.content2}}</xc-button>
      </xc-button-group>
      \`)
  }),
  play: async ({
    canvasElement,
    args,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('click btn1', async () => {
      await userEvent.click(canvas.getByText('Button1'));
    });
    await step('click btn2', async () => {
      await userEvent.click(canvas.getByText('Button2'));
    });
    expect(args.onClick).toHaveBeenCalled();
  }
}`,...(dt=(pt=S.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};const dn=["Default","Autofocus","Circle","Group"];export{w as Autofocus,k as Circle,T as Default,S as Group,dn as __namedExportsOrder,pn as default};
