import{j as n}from"./other-BR_l8CcN.js";import{aq as y,ar as _,o as f,P as g,al as x,a0 as N,_ as S}from"./common-Bs2PxJRF.js";import"./vendor-CWHhezPt.js";const s=o=>(Vue.pushScopeId("data-v-2c5159b9"),o=o(),Vue.popScopeId(),o),k={class:"lookHistory"},I=s(()=>Vue.createElementVNode("span",{class:"f16"},"观看历史",-1)),C={class:"content"},v={key:1,class:"empty"},H=s(()=>Vue.createElementVNode("img",{src:n,alt:""},null,-1)),O=s(()=>Vue.createElementVNode("div",{class:"title"},"暂无观看历史记录",-1)),w=[H,O],B=s(()=>Vue.createElementVNode("div",{class:"empty"},[Vue.createElementVNode("img",{src:n,alt:""}),Vue.createElementVNode("div",{class:"title"},"暂无观影历史记录")],-1)),E=Vue.defineComponent({name:"LookHistory",__name:"LookHistory",setup(o){const e=Vue.reactive({loadingVideo:!1,loadingOther:!1,isClearHistoryVideo:!1,isClearHistoryOther:!1,currentSlideItemIndex:0,pageSize:15,historyVideo:{total:0,pageNo:0,list:[]},historyOther:{total:0,pageNo:0,list:[]}}),d=Vue.computed(()=>e.currentSlideItemIndex===0?e.historyVideo.list.length:e.historyOther.list.length);Vue.onMounted(()=>{a(!0),c(!0)});async function a(i=!1){if(e.loadingVideo||e.isClearHistoryVideo)return;if(!i){if(e.historyVideo.total<=e.historyVideo.list.length)return;e.historyVideo.pageNo++}e.loadingVideo=!0;let t=await y({pageNo:e.historyVideo.pageNo,pageSize:e.pageSize});console.log(t),e.loadingVideo=!1,t.success&&(e.historyVideo.list=e.historyVideo.list.concat(t.data.list),e.historyVideo.total=t.data.total)}async function c(i=!1){if(e.loadingOther||e.isClearHistoryOther)return;e.loadingOther=!0,i||e.historyOther.pageNo++;let t=await _({pageNo:e.historyOther.pageNo,pageSize:e.pageSize});e.loadingOther=!1,t.success&&(e.historyOther.list=e.historyOther.list.concat(t.data.list),e.historyOther.total=t.data.total)}function u(){N("确定清空？","清空后，以往观看记录不再展示","gray",()=>{if(e.currentSlideItemIndex===0){e.historyVideo.list=[],e.isClearHistoryVideo=!0;return}e.historyOther.list=[],e.isClearHistoryVideo=!0})}return(i,t)=>{const V=Vue.resolveComponent("BaseHeader"),h=Vue.resolveComponent("Indicator"),m=Vue.resolveComponent("Loading"),l=Vue.resolveComponent("SlideItem"),p=Vue.resolveComponent("SlideHorizontal");return Vue.openBlock(),Vue.createElementBlock("div",k,[Vue.createVNode(V,null,Vue.createSlots({center:Vue.withCtx(()=>[I]),_:2},[d.value?{name:"right",fn:Vue.withCtx(()=>[Vue.createElementVNode("span",{class:"second-text-color f13",onClick:u},"清空")]),key:"0"}:void 0]),1024),Vue.createElementVNode("div",C,[Vue.createVNode(h,{style:{width:"calc(100vw - 2rem)","margin-left":"1rem"},tabStyleWidth:"50%",tabTexts:["视频","影视综"],"active-index":e.currentSlideItemIndex,"onUpdate:activeIndex":t[0]||(t[0]=r=>e.currentSlideItemIndex=r)},null,8,["active-index"]),Vue.createVNode(p,{index:e.currentSlideItemIndex,"onUpdate:index":t[1]||(t[1]=r=>e.currentSlideItemIndex=r),class:"SlideHorizontal"},{default:Vue.withCtx(()=>[Vue.createVNode(l,{class:"tab1",style:{overflow:"auto"}},{default:Vue.withCtx(()=>[Vue.createVNode(f,{class:"Scroll",onPulldown:a},{default:Vue.withCtx(()=>[e.historyVideo.total?(Vue.openBlock(),Vue.createBlock(g,{key:0,list:e.historyVideo.list},null,8,["list"])):Vue.createCommentVNode("",!0),e.loadingVideo?(Vue.openBlock(),Vue.createBlock(m,{key:1,"is-full-screen":!1})):(Vue.openBlock(),Vue.createElementBlock(Vue.Fragment,{key:2},[e.historyVideo.list.length?(Vue.openBlock(),Vue.createBlock(x,{key:0})):(Vue.openBlock(),Vue.createElementBlock("div",v,w))],64))]),_:1})]),_:1}),Vue.createVNode(l,{class:"tab2"},{default:Vue.withCtx(()=>[B]),_:1})]),_:1},8,["index"])])])}}}),P=S(E,[["__scopeId","data-v-2c5159b9"]]);export{P as default};
