import{_ as i,a as l,r,o as t,b as n,e,F as d,j as u,f as p,g as w,t as _}from"./index.ac53b162.js";const h={data(){return{news:[]}},mounted(){l.get("http://clean-city/public/api/news").then(o=>this.news=o.data)}},f={class:"news"},m={class:"news__container"},v=e("div",{class:"news__title"},"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",-1),g={class:"news__items"},x=["src"],k={class:"news__date"};function y(o,N,V,B,a,$){const c=r("router-link");return t(),n("div",f,[e("div",m,[v,e("ul",g,[(t(!0),n(d,null,u(a.news,s=>(t(),n("li",{class:"news__item",key:s.id},[p(c,{to:"/news/"+s.id},{default:w(()=>[e("img",{src:s.url,alt:""},null,8,x),e("div",k,[e("p",null,_(s.date),1)]),e("h1",null,_(s.title),1)]),_:2},1032,["to"])]))),128))])])])}const C=i(h,[["render",y]]);export{C as default};