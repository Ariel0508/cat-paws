import{_ as N,k as R,l as U,g as _,s as D,h as E,r as f,o as n,c as i,b as p,w as m,a as t,d as g,F as I,m as q,t as r,y as V,C as B,j as S}from"./index-rRgU2xyF.js";import{a as k}from"./axios-G2rPRu76.js";import{u as A}from"./cartStore-JyZy7-1Z.js";import{u as F}from"./toastMessage-kKI3NqS4.js";import{_ as O}from"./ToastMessages-9cuA_cXF.js";import{_ as H}from"./loading-a3rePalS.js";const Q="/cat-paws/assets/empty-cart-Cdy4DvIF.png";var z={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"rubby-api",BASE_URL:"/cat-paws/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const G={setup(){const{VITE_APP_URL:l,VITE_APP_PATH:d}=z,C=R(),o=U(),y=A(),T=F(),{pushMessage:v}=T,{getCart:c}=y,w=_([]),b=_(o.params.productId),e=_(y.carts),s=_({loadingItem:""}),$=_(!1),L=()=>{C.push("/order")},h=()=>{const a=`${l}/api/${d}/cart`;k.get(a).then(u=>{e.value=u.data.data})},P=(a,u=1)=>{const x={product_id:a.product_id,qty:u};s.value.loadingItem=a.id;const M=`${l}/api/${d}/cart/${a.id}`;k.put(M,{data:x}).then(()=>{s.value.loadingItem="",h()})},j=a=>{s.value.loadingItem=a;const u=`${l}/api/${d}/cart/${a}`;k.delete(u).then(x=>{s.value.loadingItem="",v({style:"success",title:"刪除成功",content:x.data.message}),c(),h()})};return D(()=>e.value,()=>{h()}),E(()=>{c(),h()}),{products:w,id:b,carts:e,status:s,isLoading:$,changeCartQty:P,goToOrder:L,removeCartItem:j,getCartList:h}},components:{ToastMessages:O}},J=t("img",{src:H,width:"500",alt:"loading",style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},null,-1),K=t("div",{class:"container mt-7 p-0"},[t("nav",{"aria-label":"breadcrumb"},[t("ol",{class:"breadcrumb"},[t("li",{class:"breadcrumb-item active","aria-current":"page"},"購物車")])])],-1),W={key:0,class:"text-center mb-8"},X={class:"d-flex flex-column justify-content-center align-items-center"},Y=t("img",{src:Q,class:"img-fluid object-fit-cover",alt:"emptycartpicture",width:"300"},null,-1),Z={class:"text-brown fs-5"},tt=t("br",null,null,-1),et={key:1,class:"container mt-7"},ot=t("div",{class:"container-fluid mt-6 rwdStep"},[t("div",{class:"position-relative m-4"},[t("div",{class:"progress",style:{height:"2px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"0%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-brown rounded-pill",style:{width:"2rem",height:"2rem"}}," 1 "),t("button",{type:"button",class:"position-absolute top-0 start-50 translate-middle btn btn-sm btn-gray2 rounded-pill",style:{width:"2rem",height:"2rem"}}," 2 "),t("button",{type:"button",class:"position-absolute top-0 start-100 translate-middle btn btn-sm btn-gray2 rounded-pill",style:{width:"2rem",height:"2rem"}}," 3 ")]),t("div",{class:"pt-1"},[t("div",{class:"position-relative m-4"},[t("div",{class:"position-absolute top-0 start-0 translate-middle text-brown",style:{width:"4rem",height:"2rem"}}," 確認商品 "),t("div",{class:"position-absolute top-0 start-50 translate-middle",style:{width:"4rem",height:"2rem"}}," 填寫資料 "),t("div",{class:"position-absolute top-0 start-100 translate-middle",style:{width:"4rem",height:"2rem"}}," 完成訂單 ")])])],-1),st={class:"row"},nt={class:"table align-middle border-lightBrown pc mt-6"},it=t("thead",null,[t("tr",{class:"text-center"},[t("th",{width:"200"},"商品名稱"),t("th",{width:"120"},"單價"),t("th",{width:"200",class:"text-center"},"數量"),t("th",{width:"200"},"小計"),t("th",{width:"100"},"刪除")])],-1),lt={class:"text-center"},dt=["src"],at={class:"input-group w-100"},rt=["disabled","onClick"],ct=t("span",{style:{height:"16px",width:"16px"}},"-",-1),ht=[ct],ut=["onClick"],_t=t("span",{style:{height:"16px",width:"16px"}},[t("i",{class:"bi bi-trash"})],-1),pt=[_t],bt=["onUpdate:modelValue","disabled"],mt=["onClick"],gt=t("span",{style:{height:"16px",width:"16px"}},"+",-1),yt=[gt],vt=["onClick"],wt={key:0,class:"spinner-border spinner-border-sm","aria-hidden":"true"},xt=t("i",{class:"bi bi-trash"},null,-1),ft={class:"border-white"},kt=t("td",null,null,-1),Ct=t("td",null,null,-1),Tt=t("td",null,null,-1),It=t("td",null,null,-1),qt={class:"text-black mt-3 pe-7 text-end fs-5"},Vt={class:"border-white"},Bt=t("td",null,null,-1),$t=t("td",null,null,-1),Lt=t("td",null,null,-1),Pt=t("td",null,null,-1),jt={class:"p-3"},Mt={class:"d-flex justify-content-center text-brown"},Nt={class:"d-flex align-items-center justify-content-center btnHover",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}},Rt={class:"mobile mt-5"},Ut={class:"row"},Dt={class:"col-4 p-0"},Et=["src"],St={class:"col-8 p-0"},At={class:"row mt-3 align-items-center"},Ft={class:"col-3"},Ot={class:"col-9"},Ht={class:"input-group w-100 ps-3"},Qt=["disabled","onClick"],zt=t("span",{style:{height:"16px",width:"16px"}},"-",-1),Gt=[zt],Jt=["onClick"],Kt=t("span",{style:{height:"16px",width:"16px"}},[t("i",{class:"bi bi-trash"})],-1),Wt=[Kt],Xt=["onUpdate:modelValue","disabled"],Yt=["onClick"],Zt=t("span",{style:{height:"16px",width:"16px"}},"+",-1),te=[Zt],ee={class:"border-top border-lightBrown p-3 bg-white"},oe={class:"text-black text-end mt-3 fs-5"},se={class:"d-flex justify-content-end text-brown my-3"},ne={class:"d-flex align-items-center justify-content-center btnHover",style:{width:"185px",height:"40px",background:"#ffffff",border:"1px solid #a2672d"}};function ie(l,d,C,o,y,T){var b;const v=f("VueLoading"),c=f("RouterLink"),w=f("ToastMessages");return n(),i("div",null,[p(v,{active:o.isLoading,"is-full-page":!0,"background-color":"#FFF8F1",opacity:1,"z-index":1060},{default:m(()=>[J]),_:1},8,["active"]),K,((b=o.carts.carts)==null?void 0:b.length)===0?(n(),i("div",W,[t("div",X,[Y,t("div",Z,[g(" 購物車還沒有商品呦~ "),tt,p(c,{to:"/products",class:"btn btn-brown text-decoration-none m-3"},{default:m(()=>[g("按我去選購")]),_:1})])])])):(n(),i("div",et,[ot,t("div",st,[t("table",nt,[it,t("tbody",lt,[(n(!0),i(I,null,q(o.carts.carts,e=>(n(),i("tr",{key:e.id},[t("td",null,[t("div",null,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,dt)]),t("div",null,[p(c,{class:"text-decoration-none text-black",to:`/product/${e.product.id}`},{default:m(()=>[g(r(e.product.title),1)]),_:2},1032,["to"])])]),t("td",null,"$"+r(l.$filters.numberToCurrencyNo(e.product.price)),1),t("td",null,[t("div",at,[e.qty>1?(n(),i("button",{key:0,type:"button",class:"btn btn-outline-lightBrown",disabled:e.qty===1,onClick:s=>{e.qty--,o.changeCartQty(e,e.qty)}},ht,8,rt)):(n(),i("button",{key:1,type:"button",class:"btn btn-outline-brown border-lightBrown",onClick:s=>o.removeCartItem(e.id)},pt,8,ut)),V(t("input",{"onUpdate:modelValue":s=>e.qty=s,type:"number",min:"1",max:"20",class:"form-control text-center","aria-label":"Dollar amount (with dot and two decimal places)",readonly:"",disabled:e.productId===o.status.loadingItem},null,8,bt),[[B,e.qty]]),t("button",{type:"button",class:"btn btn-outline-lightBrown",onClick:s=>{e.qty++,o.changeCartQty(e,e.qty)}},yt,8,mt)])]),t("td",null,"$"+r(l.$filters.numberToCurrencyNo(e.total)),1),t("td",null,[t("button",{class:"btn btn-outline-brown border-0",onClick:s=>o.removeCartItem(e.id)},[e.id===o.status.loadingItem?(n(),i("span",wt)):S("",!0),xt],8,vt)])]))),128))]),t("tfoot",null,[t("tr",ft,[kt,Ct,Tt,It,t("td",null,[t("div",qt," 總計：$"+r(l.$filters.numberToCurrencyNo(o.carts.total))+"元 ",1)])]),t("tr",Vt,[Bt,$t,Lt,Pt,t("td",jt,[t("div",Mt,[t("div",Nt,[t("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block btnHover",style:{width:"175px",height:"30px","line-height":"30px"},onClick:d[0]||(d[0]=(...e)=>o.goToOrder&&o.goToOrder(...e))},"立即結帳 ")])])])])])]),t("div",Rt,[(n(!0),i(I,null,q(o.carts.carts,e=>(n(),i("div",{class:"border-top border-lightBrown p-3 bg-white",key:e.id},[t("div",Ut,[t("div",Dt,[t("img",{src:e.product.imageUrl,class:"img-fluid object-fit-cover",style:{width:"80px",height:"80px"},alt:""},null,8,Et)]),t("div",St,[p(c,{class:"text-decoration-none text-black",to:`/product/${e.product.id}`,style:{"font-size":"14px"}},{default:m(()=>[g(r(e.product.title),1)]),_:2},1032,["to"]),t("div",At,[t("div",Ft," $"+r(l.$filters.numberToCurrencyNo(e.total)),1),t("div",Ot,[t("div",Ht,[e.qty>1?(n(),i("button",{key:0,type:"button",class:"btn btn-outline-lightBrown",disabled:e.qty===1,onClick:s=>{e.qty--,o.changeCartQty(e,e.qty)}},Gt,8,Qt)):(n(),i("button",{key:1,type:"button",class:"btn btn-outline-brown border-lightBrown",onClick:s=>o.removeCartItem(e.id)},Wt,8,Jt)),V(t("input",{"onUpdate:modelValue":s=>e.qty=s,type:"number",min:"1",max:"20",class:"form-control text-center","aria-label":"Dollar amount (with dot and two decimal places)",readonly:"",disabled:e.productId===o.status.loadingItem},null,8,Xt),[[B,e.qty]]),t("button",{type:"button",class:"btn btn-outline-lightBrown",onClick:s=>{e.qty++,o.changeCartQty(e,e.qty)}},te,8,Yt)])])])])])]))),128)),t("div",ee,[t("div",oe," 總計：$"+r(l.$filters.numberToCurrencyNo(o.carts.total))+"元 ",1),t("div",se,[t("div",ne,[t("a",{class:"text-center bg-brown text-decoration-none text-white m-1 d-block",style:{width:"175px",height:"30px","line-height":"30px"},onClick:d[1]||(d[1]=(...e)=>o.goToOrder&&o.goToOrder(...e))},"立即結帳 ")])])])])])])),p(w)])}const ue=N(G,[["render",ie]]);export{ue as default};
