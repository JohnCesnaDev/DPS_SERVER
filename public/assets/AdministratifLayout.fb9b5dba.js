import{Q as c}from"./QBtn.63af1d86.js";import{Q as f,a as p}from"./QToolbar.dad4a12f.js";import{Q as _,a as v,b as Q,c as k,E as g}from"./EssentialLink.c3166a31.js";import{Q as h,a as w}from"./QItem.1be2ff41.js";import"./axios.b678b6db.js";import{r as i,a as L,o as l,c as n,w as t,e,f as b,g as V,F as C,h as s,i as x,m as B}from"./index.bf4f2ade.js";import"./render.188e8231.js";import"./QResizeObserver.228b3f0b.js";import"./use-dark.f3adcad0.js";import"./QScrollObserver.3ab734fe.js";import"./selection.e3d44e10.js";import"./format.3e32b8d9.js";const y=s("DPS Administratif"),D=x("div",null,"V0.0.1",-1),N=s("Menu"),J={setup(T){const u=i([{title:"Acceuil",caption:"page d'aceuil",icon:"home",link:"/administratif/acceuil"},{title:"Nouveau Client",caption:"page des nouveaux clients",icon:"home",link:"/administratif/newClient"}]),a=i(!1);function d(){a.value=!a.value}return(F,r)=>{const m=L("router-view");return l(),n(_,{view:"hHh Lpr lFf"},{default:t(()=>[e(v,{elevated:""},{default:t(()=>[e(f,null,{default:t(()=>[e(c,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:d}),e(p,null,{default:t(()=>[y]),_:1}),D]),_:1})]),_:1}),e(Q,{modelValue:a.value,"onUpdate:modelValue":r[0]||(r[0]=o=>a.value=o),"show-if-above":"",bordered:""},{default:t(()=>[e(h,null,{default:t(()=>[e(w,{header:""},{default:t(()=>[N]),_:1}),(l(!0),b(C,null,V(u.value,o=>(l(),n(g,B({key:o.title},o),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),e(k,{style:{background:"grey"}},{default:t(()=>[e(m)]),_:1})]),_:1})}}};export{J as default};
