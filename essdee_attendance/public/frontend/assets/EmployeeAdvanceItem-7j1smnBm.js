import{E as u,j as o,k as a,x as t,i as f,c as l,l as c,v as h,K as s,q as _,ah as g,t as x,a5 as y}from"./frappe-ui-DZDZpt4w.js";import{a as v}from"./currencies-SJR35BQj.js";import w from"./EmployeeAvatar-BxuleOmI.js";import"./index-DY6of2et.js";const $={},k={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-0.855 -0.855 24 24",height:"24",width:"24",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},b=t("g",{id:"wallet--money-payment-finance-wallet"},[t("path",{id:"Vector",d:"M19.105714285714285 16.7175v3.184285714285714c0 0.4222362857142857 -0.16781185714285712 0.8272774285714285 -0.4663386428571428 1.125804214285714S17.935807714285716 21.49392857142857 17.513571428571428 21.49392857142857H2.3882142857142856c-0.4222681285714286 0 -0.8272296642857142 -0.16781185714285712 -1.1258153592857143 -0.4663386428571428C0.9638148235714286 20.729063142857143 0.7960714285714285 20.324022 0.7960714285714285 19.901785714285715V7.960714285714285c0 -2.6379418928571425 2.1384866785714287 -4.776428571428571 4.776428571428571 -4.776428571428571H15.92142857142857v3.9803571428571427"}),t("path",{id:"Vector_2",d:"M20.697857142857142 11.941071428571428H15.125357142857142c-0.43965432857142855 0 -0.7960714285714285 0.3564171 -0.7960714285714285 0.7960714285714285v3.184285714285714c0 0.43959064285714283 0.3564171 0.7960714285714285 0.7960714285714285 0.7960714285714285H20.697857142857142c0.43959064285714283 0 0.7960714285714285 -0.3564807857142857 0.7960714285714285 -0.7960714285714285V12.737142857142857c0 -0.43965432857142855 -0.3564807857142857 -0.7960714285714285 -0.7960714285714285 -0.7960714285714285Z"}),t("path",{id:"Vector_3",d:"M19.105714285714285 11.941071428571428v-3.184285714285714c0 -0.4222681285714286 -0.16781185714285712 -0.8272296642857142 -0.4663386428571428 -1.1258201357142856C18.340848857142856 7.332391028571428 17.935807714285716 7.164642857142857 17.513571428571428 7.164642857142857H5.5725"})],-1),j=[b];function V(r,i){return o(),a("svg",k,j)}const C=u($,[["render",V]]),M={class:"flex flex-col w-full justify-center gap-2.5"},S={class:"flex flex-row items-center justify-between"},B={class:"flex flex-row items-start gap-3 grow"},D={class:"flex flex-col items-start gap-1"},H={key:0,class:"text-lg font-bold text-gray-800 leading-6"},q={class:"text-gray-600"},E={key:1,class:"text-lg font-bold text-gray-800 leading-6"},I={class:"text-xs font-normal text-gray-500"},N=t("span",{class:"whitespace-pre"}," · ",-1),R={class:"whitespace-nowrap"},F={class:"flex flex-row justify-end items-center gap-2"},T={key:0,class:"flex flex-row items-center gap-2 pl-8"},A={class:"text-sm text-gray-600 grow"},G={__name:"EmployeeAdvanceItem",props:{doc:{type:Object},isTeamRequest:{type:Boolean,default:!1},workflowStateField:{type:String,required:!1}},setup(r){const i=f("$dayjs"),e=r,p={Paid:"green",Unpaid:"orange",Claimed:"blue",Returned:"gray","Partly Claimed and Returned":"orange"},n=l(()=>v(e.doc.currency)),m=l(()=>i(e.doc.posting_date).format("D MMM")),d=l(()=>e.workflowStateField?e.doc[e.workflowStateField]:e.doc.status);return(P,z)=>(o(),a("div",M,[t("div",S,[t("div",B,[c(C,{class:"h-5 w-5 mt-[3px] text-gray-500"}),t("div",D,[e.doc.balance_amount?(o(),a("div",H,[h(s(`${n.value} ${e.doc.balance_amount} /`)+" ",1),t("span",q,s(`${n.value} ${e.doc.paid_amount}`),1)])):(o(),a("div",E,s(`${n.value} ${e.doc.advance_amount}`),1)),t("div",I,[t("span",null,s(e.doc.purpose),1),N,t("span",R,s(m.value),1)])])]),t("div",F,[c(_(g),{variant:"outline",theme:p[d.value],label:d.value,size:"md"},null,8,["theme","label"]),c(_(x),{name:"chevron-right",class:"h-5 w-5 text-gray-500"})])]),e.isTeamRequest?(o(),a("div",T,[c(w,{employeeID:e.doc.employee},null,8,["employeeID"]),t("div",A,s(e.doc.employee_name),1)])):y("",!0)]))}};export{G as default};
//# sourceMappingURL=EmployeeAdvanceItem-7j1smnBm.js.map