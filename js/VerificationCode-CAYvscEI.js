import{L as r}from"./LoginInput-CjcznwbB.js";import{u}from"./other-BR_l8CcN.js";import{av as V,a as p,b as f,d as m,a0 as _,_ as C}from"./common-Bs2PxJRF.js";import"./vendor-CWHhezPt.js";const g=t=>(Vue.pushScopeId("data-v-02f38bf3"),t=t(),Vue.popScopeId(),t),h={class:"VerificationCode"},v={class:"content"},N=g(()=>Vue.createElementVNode("div",{class:"desc"},[Vue.createElementVNode("div",{class:"title"},"请输入验证码"),Vue.createElementVNode("div",{class:"sub-title"},"验证码已通过短信发送到+86 13800138000")],-1)),k={key:0,class:"options"},w=Vue.defineComponent({name:"VerificationCode",__name:"VerificationCode",setup(t){const n=u(),e=Vue.reactive({showAnim:!1,showTooltip:!1,loading:!1,phone:"",password:"",code:"",isSendVerificationCode:!0,showVoiceCode:!1});Vue.onMounted(()=>{setTimeout(()=>{e.showVoiceCode=!0},3e3)});function a(){return V("语音验证码","我们将以电话的方式告知你验证码，请注意接听","",()=>{setTimeout(()=>{_("","您的手机可能由于空号/欠费/停机无法收到验证码，请恢复手机号状态，如果您因为换号无法收到验证码，可以尝试找回账号","",()=>{},null,"找回账号","返回","")},2e3)},"知道了")}async function d(){p(),await f(500),m(),e.isSendVerificationCode=!0}function s(){e.loading=!0,setTimeout(()=>{e.isSendVerificationCode=!0,e.loading=!1},1e3)}return(S,o)=>{const c=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("dy-button");return Vue.openBlock(),Vue.createElementBlock("div",h,[Vue.createVNode(c,{mode:"light",backMode:"dark",backImg:"back"},{right:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"f14",onClick:o[0]||(o[0]=i=>Vue.unref(n)("/login/help"))},"帮助与设置")]),_:1}),Vue.createElementVNode("div",v,[N,Vue.createVNode(r,{autofocus:"",type:"code",modelValue:e.code,"onUpdate:modelValue":o[1]||(o[1]=i=>e.code=i),placeholder:"请输入验证码",isSendVerificationCode:e.isSendVerificationCode,"onUpdate:isSendVerificationCode":o[2]||(o[2]=i=>e.isSendVerificationCode=i),onSend:d},null,8,["modelValue","isSendVerificationCode"]),e.showVoiceCode?(Vue.openBlock(),Vue.createElementBlock("div",k,[Vue.createElementVNode("span",null,[Vue.createTextVNode(" 收不到短信？"),Vue.createElementVNode("span",{class:"link",onClick:a},"获取语音验证码")])])):Vue.createCommentVNode("",!0),Vue.createVNode(l,{type:"primary",loading:e.loading,active:!1,disabled:e.code.length<4,onClick:s},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(e.loading?"登录中":"登录"),1)]),_:1},8,["loading","disabled"])])])}}}),B=C(w,[["__scopeId","data-v-02f38bf3"]]);export{B as default};
