import{r as j,j as e,C as L,a as E,B as n,b as v,T as d,d as B,c as D,L as f,R as N,I as _,e as M,f as O,g as q,h as W,N as R,i as z,k as A,l as Q,m as Z,n as $,o as b,p as G,q as H,s as K,t as Y,u as V,A as J,v as U,w as X}from"./vendor-plM9eKvu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const w=j.createContext({cart:[],addToCart:()=>{},removeFromCart:()=>{},increaseProductQuantity:()=>{},decreaseProductQuantity:()=>{}}),m=()=>j.useContext(w),e2=({children:t})=>{const[r,a]=j.useState(()=>{const l=localStorage.getItem("cart");return l?JSON.parse(l):[]});j.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(r))},[r]);const o=l=>{a(x=>{var h;const c=x.findIndex(u=>u.id===l.id);if(c!==-1){const u=[...x],k=(h=u[c].quantity)!=null?h:0;return u[c]={...u[c],quantity:k+1},u}else return[...x,{...l,quantity:1}]})},s=l=>{a(x=>x.filter(c=>c.id!==l))},i=l=>{a(x=>x.map(c=>{var h;return c.id===l?{...c,quantity:((h=c.quantity)!=null?h:1)+1}:c}))},p=l=>{a(x=>x.map(c=>{var h,u;return c.id===l&&((h=c.quantity)!=null?h:1)>1?{...c,quantity:((u=c.quantity)!=null?u:1)-1}:c}).filter(c=>c.quantity!==0))};return e.jsx(w.Provider,{value:{cart:r,addToCart:o,removeFromCart:s,increaseProductQuantity:i,decreaseProductQuantity:p},children:t})},g={fontFamily:"Montserrat",fontWeight:"600",fontSize:"17px"},t2=t=>{const{addToCart:r}=m();return e.jsx(L,{sx:{borderRadius:5,width:"350px",p:1,boxShadow:"10px 20px 10px rgba(0,0,0,0.05)",opacity:t.isAvailable?1:.5,transition:t.isAvailable?"0.3s":"none","&:hover":t.isAvailable?{boxShadow:"15px 25px 15px rgba(0,0,0,0.1)",transform:"scale(1.05)"}:{},cursor:t.isAvailable?"pointer":"not-allowed"},children:e.jsxs(E,{sx:{display:"flex",flexDirection:"column",gap:4},children:[e.jsx(n,{sx:{display:"flex",justifyContent:"center"},children:e.jsx(v,{component:"img",image:t.product_image,sx:{height:"237px",width:"220px",objectFit:"contain"}})}),e.jsxs(n,{children:[e.jsxs(n,{display:"flex",justifyContent:"space-between",children:[e.jsx(d,{variant:"h5",sx:{fontStyle:g},children:t.product_name}),e.jsxs(n,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsxs(d,{variant:"h6",sx:{fontStyle:g,color:"#FFCE7F"},children:[t.product_price,"₽"]}),e.jsx(d,{sx:{color:t.product_discount?"#FFCE7F":"transparent",textDecoration:"line-through"},children:t.product_discount?"".concat(t.product_discount,"₽"):"0₽"})]})]}),e.jsxs(n,{display:"flex",justifyContent:"space-between",children:[e.jsxs(n,{display:"flex",alignItems:"center",children:[e.jsx(B,{sx:{color:"#FFCE7F"}}),e.jsx(d,{component:"p",sx:{fontStyle:g,color:"#838383"},children:t.product_rate})]}),e.jsx(D,{children:e.jsx(f,{color:"inherit",sx:{fontStyle:g,textDecoration:"none",pointerEvents:t.isAvailable?"auto":"none",transition:t.isAvailable?"0.3s":"none","&:hover":t.isAvailable?{transform:"scale(1.2)"}:{}},onClick:()=>r(t),children:"Купить"})})]})]})]})})},n2=t=>e.jsx(d,{variant:"h4",sx:{fontFamily:"Montserrat",fontWeight:"600",fontSize:20,color:"#838383",m:2},children:t.title}),F="/assets/apple-byz-C71R_H7h.png",S="/assets/apple-earpods-CZeia3Nm.png",I="/assets/apple-earpods-box-DfSGp7Bb.png",s2="/assets/apple-airpods-nc7PoGrK.png",r2="/assets/gerlax-C3LOGG7c.png",o2="/assets/borophone-DTf8--bE.png",i2=[{section_title:"Наушники",products:[{id:1,product_image:F,product_name:"Apple BYZ S852I",product_price:"2927",product_discount:"3527",product_rate:"4.7",isAvailable:!0},{id:2,product_image:S,product_name:"Apple EarPods",product_price:"2327",product_discount:null,product_rate:"4.5",isAvailable:!0},{id:3,product_image:I,product_name:"Apple EarPods",product_price:"2327",product_discount:null,product_rate:"4.5",isAvailable:!1},{id:4,product_image:F,product_name:"Apple BYZ S852I",product_price:"2927",product_discount:null,product_rate:"4.7",isAvailable:!0},{id:5,product_image:S,product_name:"Apple EarPods",product_price:"2327",product_discount:null,product_rate:"4.5",isAvailable:!0},{id:6,product_image:I,product_name:"Apple EarPods",product_price:"2327",product_discount:null,product_rate:"4.5",isAvailable:!0}]},{section_title:"Беспроводные наушники",products:[{id:7,product_image:s2,product_name:"Apple AirPods",product_price:"9527",product_discount:null,product_rate:"4.7",isAvailable:!0},{id:8,product_image:r2,product_name:"GERLAX GH-04",product_price:"6257",product_discount:null,product_rate:"4.7",isAvailable:!0},{id:9,product_image:o2,product_name:"BOROFONE BO4",product_price:"7527",product_discount:null,product_rate:"4.7",isAvailable:!0}]}],a2=()=>{const[,t]=j.useState([]),r=a=>{t(o=>[...o,a])};return e.jsx(n,{children:i2.map(a=>e.jsxs(N.Fragment,{children:[e.jsx(n2,{title:a.section_title}),e.jsx(n,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",gap:3},children:a.products.map(o=>e.jsx(t2,{id:o.id,product_image:o.product_image,product_name:o.product_name,product_price:o.product_price,product_discount:o.product_discount,product_rate:o.product_rate,isAvailable:o.isAvailable,onAddToCart:()=>r(o)}))})]},a.section_title))})},c2={display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center"},l2=({product:t})=>{var l;const{removeFromCart:r,increaseProductQuantity:a,decreaseProductQuantity:o}=m(),s=j.useContext(w).cart.find(x=>x.id===t.id),i=(l=s==null?void 0:s.quantity)!=null?l:1,p=()=>{r(t.id)};return e.jsx(L,{sx:{borderRadius:5,width:"633px",pl:2,pr:1,boxShadow:"10px 20px 10px rgba(0,0,0,0.05)",transition:"0.3s","&:hover":{boxShadow:"0 8px 20px 20px rgba(255, 255, 255, 0.6)",transform:"translateY(-2px)"}},children:e.jsx(E,{children:e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(n,{sx:{boxStyles:c2},children:[e.jsx(v,{component:"img",image:t.product_image,sx:{height:"136px",width:"146px",objectFit:"contain"}}),e.jsxs(D,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},disableSpacing:!0,children:[e.jsx(_,{"aria-label":"remove item",onClick:()=>o(t.id),children:e.jsx(M,{fontSize:"large",sx:{color:"#FFCE7F"}})}),e.jsx(d,{children:i}),e.jsx(_,{"aria-label":"add item",onClick:()=>a(t.id),children:e.jsx(O,{fontSize:"large",sx:{color:"#FFCE7F"}})})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",flexDirection:"column",gap:2},children:[e.jsx(d,{variant:"h5",component:"h2",children:t.product_name}),e.jsxs(d,{color:"textSecondary",children:[t.product_price," ₽"]})]})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",flexDirection:"column",alignItems:"flex-end",gap:20},children:[e.jsx(f,{onClick:p,sx:{cursor:"pointer"},children:e.jsx(q,{sx:{color:"#DF6464"}})}),e.jsxs(d,{sx:{fontWeight:"600"},children:[parseInt(t.product_price)*i," ₽"]})]})]})})})},d2=()=>{const{cart:t}=m(),r=t.reduce((a,o)=>{var p;const i=parseFloat(o.product_price)*((p=o.quantity)!=null?p:1);return a+i},0);return e.jsx(n,{sx:{},children:e.jsx(n,{sx:{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",borderRadius:5,flexBasis:"100%",boxShadow:"10px 20px 10px rgba(0,0,0,0.05)",backgroundColor:"#ffffff"},children:e.jsxs(n,{children:[e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",p:2},children:[e.jsx(d,{sx:{fontSize:15,fontWeight:600},children:"ИТОГО"}),e.jsxs(d,{sx:{fontSize:15,fontWeight:600},children:["₽ ",r.toFixed(2)]})]}),e.jsx(W,{variant:"contained",sx:{width:"350px",p:3,fontWeight:600,fontSize:17,backgroundColor:"#000000",borderRadius:5,textTransform:"none",":hover":{backgroundColor:"#000000",transition:"0.3s","&:hover":{boxShadow:"15px 25px 15px rgba(0,0,0,0.1)",transform:"scale(1.05)"}}},children:"Перейти к оформлению"})]})})})},x2=t=>e.jsx(d,{variant:"h4",sx:{fontFamily:"Montserrat",fontWeight:"600",fontSize:20,m:2},children:t.title}),p2=()=>{const{cart:t}=m();return e.jsxs(n,{children:[e.jsx(x2,{title:"Корзина"}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:t.map((r,a)=>e.jsx(l2,{product:r},a))}),e.jsx(d2,{})]})]})};var C=(t=>(t.MAIN="/",t.CART="/cart",t.NOT_FOUND="*",t))(C||{});const T=()=>e.jsx(f,{component:R,to:"".concat(C.MAIN),sx:{textDecoration:"none",color:"inherit"},children:e.jsx(d,{sx:{fontWeight:700,fontSize:25,color:"inherit",transition:"color 0.3s ease-in-out","&:hover":{color:"#FFA542"}},variant:"h4",children:"QPICK"})}),y=t=>e.jsx(f,{sx:{fontWeight:"400",fontSize:17,textDecoration:"none",color:"inherit",p:1,pl:2,pr:2,"&:hover":{color:"#FFA542"}},href:"#",children:t.footer_text}),u2="data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15.05%2027.09C18.2432%2027.09%2021.3056%2025.8215%2023.5636%2023.5636C25.8215%2021.3056%2027.09%2018.2432%2027.09%2015.05C27.09%2011.8568%2025.8215%208.79437%2023.5636%206.53643C21.3056%204.2785%2018.2432%203.01%2015.05%203.01C11.8568%203.01%208.79437%204.2785%206.53643%206.53643C4.2785%208.79437%203.01%2011.8568%203.01%2015.05C3.01%2018.2432%204.2785%2021.3056%206.53643%2023.5636C8.79437%2025.8215%2011.8568%2027.09%2015.05%2027.09ZM15.05%2030.1C6.73789%2030.1%200%2023.3621%200%2015.05C0%206.73789%206.73789%200%2015.05%200C23.3621%200%2030.1%206.73789%2030.1%2015.05C30.1%2023.3621%2023.3621%2030.1%2015.05%2030.1ZM10.3695%2016.8109L6.60996%2015.6385C5.79726%2015.3901%205.79275%2014.8303%206.79207%2014.4284L21.4402%208.76964C22.2906%208.42348%2022.7722%208.86144%2022.4967%209.95858L20.003%2021.7277C19.8284%2022.566%2019.3242%2022.7661%2018.6244%2022.3794L14.7851%2019.5379L12.9957%2021.2656C12.8121%2021.4432%2012.6631%2021.5952%2012.3801%2021.6329C12.0987%2021.672%2011.8669%2021.5877%2011.6969%2021.1212L10.3875%2016.8003L10.3695%2016.8124V16.8109Z'%20fill='%23101010'/%3e%3c/svg%3e",h2="/assets/VK-C7YmUJxa.svg",f2="data:image/svg+xml,%3csvg%20width='31'%20height='31'%20viewBox='0%200%2031%2031'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M7.90578%2024.8235L8.9954%2025.4601C10.8329%2026.5317%2012.9228%2027.0943%2015.05%2027.09C17.4313%2027.09%2019.7591%2026.3838%2021.7391%2025.0609C23.719%2023.7379%2025.2622%2021.8575%2026.1735%2019.6575C27.0848%2017.4575%2027.3232%2015.0366%2026.8587%2012.7011C26.3941%2010.3656%2025.2474%208.22025%2023.5636%206.53643C21.8797%204.85261%2019.7344%203.70591%2017.3989%203.24134C15.0634%202.77678%2012.6425%203.01521%2010.4425%203.92649C8.24248%204.83777%206.36209%206.38096%205.03912%208.36093C3.71615%2010.3409%203.01002%2012.6687%203.01002%2015.05C3.01002%2017.2112%203.5774%2019.2836%204.64144%2021.1061L5.27655%2022.1957L4.29378%2025.8092L7.90578%2024.8235ZM0.00604013%2030.1L2.0408%2022.6231C0.700052%2020.3248%20-0.0043504%2017.7108%202.02155e-05%2015.05C2.02155e-05%206.73788%206.7379%200%2015.05%200C23.3621%200%2030.1%206.73788%2030.1%2015.05C30.1%2023.3621%2023.3621%2030.1%2015.05%2030.1C12.3903%2030.1043%209.77748%2029.4004%207.47987%2028.0607L0.00604013%2030.1ZM9.61847%207.98853C9.82014%207.97348%2010.0233%207.97348%2010.225%207.98251C10.3063%207.98853%2010.3875%207.99757%2010.4688%208.0066C10.7081%208.03368%2010.9715%208.17967%2011.0603%208.38134C11.5087%209.39872%2011.9452%2010.4236%2012.3666%2011.4515C12.4599%2011.6803%2012.4042%2011.9738%2012.2266%2012.2597C12.1045%2012.4531%2011.9724%2012.64%2011.8308%2012.8196C11.6608%2013.0378%2011.295%2013.4381%2011.295%2013.4381C11.295%2013.4381%2011.146%2013.6157%2011.2032%2013.837C11.2243%2013.9212%2011.2935%2014.0431%2011.3567%2014.1455L11.4455%2014.2885C11.8308%2014.9311%2012.3485%2015.5828%2012.9806%2016.1968C13.1612%2016.3714%2013.3373%2016.5505%2013.527%2016.7175C14.2313%2017.3391%2015.0289%2017.8463%2015.8898%2018.2225L15.8973%2018.2255C16.0252%2018.2812%2016.09%2018.3113%2016.2766%2018.3911C16.3699%2018.4302%2016.4662%2018.4648%2016.564%2018.4904C16.6651%2018.5162%2016.7716%2018.5113%2016.8699%2018.4765C16.9683%2018.4417%2017.054%2018.3784%2017.1164%2018.2948C18.206%2016.9749%2018.3053%2016.8891%2018.3144%2016.8891V16.8921C18.3901%2016.8215%2018.48%2016.7679%2018.5781%2016.735C18.6762%2016.702%2018.7803%2016.6904%2018.8832%2016.701C18.9735%2016.707%2019.0653%2016.7235%2019.1496%2016.7612C19.9488%2017.1269%2021.2566%2017.6973%2021.2566%2017.6973L22.1325%2018.0901C22.28%2018.1608%2022.414%2018.3279%2022.4185%2018.4889C22.4245%2018.5897%2022.4335%2018.7523%2022.3989%2019.0503C22.3508%2019.4401%2022.2334%2019.9081%2022.116%2020.1534C22.0356%2020.3209%2021.9289%2020.4743%2021.7999%2020.608C21.6481%2020.7674%2021.4818%2020.9125%2021.3033%2021.0414C21.2415%2021.0878%2021.1788%2021.133%2021.1152%2021.1768C20.928%2021.2956%2020.7356%2021.4061%2020.5387%2021.5079C20.1513%2021.7138%2019.7233%2021.8319%2019.2851%2021.8541C19.0067%2021.8691%2018.7282%2021.8902%2018.4483%2021.8752C18.4363%2021.8752%2017.5935%2021.7442%2017.5935%2021.7442C15.4537%2021.1814%2013.4749%2020.1271%2011.8143%2018.665C11.4741%2018.3655%2011.1596%2018.0434%2010.8375%2017.7229C9.49807%2016.3909%208.48671%2014.9537%207.87267%2013.5962C7.55838%2012.9299%207.38861%2012.2046%207.37452%2011.4681C7.36831%2010.5543%207.66701%209.6646%208.22334%208.93969C8.3332%208.79822%208.43704%208.65073%208.61614%208.48067C8.80727%208.30007%208.92767%208.20375%209.05861%208.13753C9.2327%208.05029%209.42261%207.9991%209.61696%207.98703L9.61847%207.98853Z'%20fill='%23101010'/%3e%3c/svg%3e",C2=({icon:t,link:r})=>e.jsx(n,{sx:{borderRadius:200,transition:"0.3s","&:hover":{boxShadow:"0 5px 15px rgba(0,0,0,0.3)",transform:"scale(1.2)"}},children:e.jsx(f,{href:r,target:"_blank",children:e.jsx(v,{style:{cursor:"pointer"},component:"img",image:t,alt:"social_network"})})}),j2=[{icon:h2,link:"https://vk.com/"},{icon:u2,link:"https://web.telegram.org/"},{icon:f2,link:"https://web.whatsapp.com/"}],m2=()=>e.jsxs(n,{sx:{background:"#FFFFFF",mt:5,borderTopRightRadius:15,borderTopLeftRadius:15,p:4,display:"flex",justifyContent:"space-between",bottom:0,position:"static",boxShadow:"10px 20px 20px rgba(0,0,0,0.05)"},children:[e.jsx(T,{}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsx(y,{footer_text:"Избранное"}),e.jsx(y,{footer_text:"Корзина"}),e.jsx(y,{footer_text:"Контакты"})]}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsx(y,{footer_text:"Условия сервиса"}),e.jsxs(n,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsx(z,{}),e.jsx(f,{sx:{cursor:"pointer",textDecoration:"none",color:"inherit","&:hover":{color:"#FFA542"}},children:"Рус"}),e.jsx(f,{sx:{cursor:"pointer",textDecoration:"none",color:"inherit","&:hover":{color:"#FFA542"}},children:"Eng"})]})]}),e.jsx(n,{sx:{alignItems:"flex-start"},children:e.jsx(n,{sx:{display:"flex",justifyContent:"space-between",gap:2,alignItems:"center"},children:j2.map((t,r)=>e.jsx(C2,{icon:t.icon,link:t.link},r))})})]}),P=({children:t})=>{const{cart:r}=m(),a=r.reduce((o,s)=>{var i;return o+((i=s.quantity)!=null?i:1)},0);return e.jsx(n,{children:e.jsxs(n,{sx:{margin:"0 auto",pt:2,minHeight:"100vh",maxWidth:"1135px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[e.jsxs(n,{children:[e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(T,{}),e.jsxs(n,{sx:{display:"flex",gap:2},children:[e.jsx(_,{onClick:()=>{},children:e.jsx(A,{badgeContent:0,color:"warning",children:e.jsx(Q,{sx:{color:"#838383"}})})}),e.jsx(f,{component:R,to:"".concat(C.CART),children:e.jsx(_,{onClick:()=>{},children:e.jsx(A,{badgeContent:a,color:"warning",children:e.jsx(Z,{sx:{color:"#838383"}})})})})]})]}),e.jsx(n,{sx:{margin:"0 auto",pt:2,maxWidth:"1110px"},children:t})]}),e.jsx(m2,{})]})})},g2=()=>e.jsxs($,{children:[e.jsx(b,{path:C.MAIN,element:e.jsx(P,{children:e.jsx(a2,{})})}),e.jsx(b,{path:C.CART,element:e.jsx(P,{children:e.jsx(p2,{})})}),e.jsx(b,{path:C.NOT_FOUND,element:e.jsx(G,{to:C.MAIN})})]}),y2=()=>e.jsx(e2,{children:e.jsx(g2,{})}),_2=H({palette:{background:{default:"#EAEAEA"}},typography:{fontFamily:"Montserrat, sans-serif"}}),b2=K.createRoot(document.getElementById("root"));b2.render(e.jsx(Y,{theme:_2,children:e.jsx(V,{dateAdapter:J,children:e.jsxs(U,{children:[e.jsx(y2,{}),e.jsx(X,{})]})})}));
