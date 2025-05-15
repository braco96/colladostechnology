import{r as m}from"./index.Dy6lLLXr.js";/* empty css                       */var o={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function h(){if(x)return i;x=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function l(u,e,r){var a=null;if(r!==void 0&&(a=""+r),e.key!==void 0&&(a=""+e.key),"key"in e){r={};for(var c in e)c!=="key"&&(r[c]=e[c])}else r=e;return e=r.ref,{$$typeof:n,type:u,key:a,ref:e!==void 0?e:null,props:r}}return i.Fragment=s,i.jsx=l,i.jsxs=l,i}var d;function v(){return d||(d=1,o.exports=h()),o.exports}var t=v();const p=[{text:"About",href:"#"},{text:"services",link:"#"},{text:"blog",link:"#"},{text:"contact",link:"#"}],_=({classActive:n,onClick:s})=>t.jsx("button",{onClick:s,className:`hamburger hamburger--collapse ${n}`,type:"button",children:t.jsx("span",{className:"hamburger-box",children:t.jsx("span",{className:"hamburger-inner"})})}),k=()=>{const[n,s]=m.useState(!1),l=()=>{s(r=>!r)},u=()=>{s(!1)},e=n?"is-active":"";return t.jsxs(t.Fragment,{children:[t.jsx("nav",{className:`header__menu ${e}`,children:t.jsx("ul",{className:`header__list ${e}`,children:p.map((r,a)=>t.jsx("li",{className:"header__item",children:t.jsx("a",{onClick:u,className:"header__link  header__link--regular",href:r.href||"#",children:r.text})},a))})}),t.jsx(_,{classActive:e,onClick:l})]})};export{k as default};
