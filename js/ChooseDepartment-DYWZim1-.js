import{u as p}from"./other-BR_l8CcN.js";import{_ as d}from"./common-Bs2PxJRF.js";import"./vendor-CWHhezPt.js";const m=t=>(Vue.pushScopeId("data-v-c721ab0a"),t=t(),Vue.popScopeId(),t),V={class:"choose-school"},i=m(()=>Vue.createElementVNode("span",{class:"f16"},"选择院系",-1)),_={class:"content"},h={class:"nearby"},v=["onClick"],f=Vue.defineComponent({name:"ChooseDepartment",__name:"ChooseDepartment",setup(t){const a=VueRouter.useRouter(),c=p(),n=Vue.reactive({departments:[],schoolName:""});Vue.onMounted(()=>{for(let e=0;e<5;e++)n.departments.push("院系"+e)});function r(e){localStorage.setItem("changeDepartment",e),a.back()}return(e,s)=>{const u=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",V,[Vue.createVNode(u,null,{center:Vue.withCtx(()=>[i]),right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:s[0]||(s[0]=o=>Vue.unref(c)("/me/declare-school",{type:2}))},"没有找到?")]),_:1}),Vue.createElementVNode("div",_,[Vue.createElementVNode("div",h,[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(n.departments,(o,l)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"item",key:l,onClick:k=>r(o)},Vue.toDisplayString(o),9,v))),128))])])])}}}),N=d(f,[["__scopeId","data-v-c721ab0a"]]);export{N as default};
