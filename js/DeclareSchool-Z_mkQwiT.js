import{e as o,_ as s}from"./common-D6sxLcFq.js";import"./vendor-DiOKTLh6.js";const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAkCAYAAACTz/ouAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAHGSURBVEhL7ZVLSwJRGIZfXWjeiuwi2lVXUdugX9AigtLU+o1BQVGJZZFQYVRQUFQk4o0WtddC1JrvdCYnmXFuuusBmfN9yPswM9+cY/kSQA+x8mvP+Beo0hVBoVhiPzlMT1Hq+BR3d/dsHYuuIhicYmsRU3cgDSeazSZftTAsaA+fm51BKDTNqxaGBHLhS0uLsFgsvNNCt0BPOKFLoDec0CwwEk5oEhgNJ1QFZsKJjgKz4YSioBvhhKygXH7tSjghK7Ba/7Yr1SoajQav9CErGBvzY2FhnlfCblkoYWt7F7VajXe003E3zWSucH5xySsgEPCzHdNut/GOOqrb9fXNLdLpM14BPt8o4rEwHI4+3umMpvOAXjhNlcjI8BDi8TBcLhfvKKP5wHl4eETy8ATi373eQawLEo/Hw2oldJ1oT88vSCSOfg+WgYF+bKyvsasSugRENpvD3n7yd2zdbrcgibA7kkO3gMjni9jZPUC9Xme1y+lEXJDQu2lHcavoBB3s0egKbLafcaUPcXNzG5VKhdVSDAmIyYlxNq7iN/Hx8YlcrsDWUgw9Iilvb+84Sv2McCS8zN6JFNMCNQw/Iq38C1TpsQD4BoWj1W29vRJAAAAAAElFTkSuQmCC",c={class:"declare-school"},m={class:"content"},V={class:"row"},i={key:0,class:"row"},A={key:1,class:"department-row"},p=Vue.defineComponent({name:"DeclareSchool",__name:"DeclareSchool",setup(v){const l=VueRouter.useRouter(),r=VueRouter.useRoute(),t=Vue.reactive({form:{name:"",location:"",departmentInfoType:""},type:1});Vue.onMounted(()=>{t.type=Number(r.query.type)});function a(){if(!t.form.name)return o("请输入学校全称");if(t.type===1&&!t.form.location)return o("请输入学校所在城市");if(t.type===2&&!t.form.departmentInfoType)return o("请选择信息问题");o("申报成功"),setTimeout(l.back,1e3)}return(N,e)=>{const u=Vue.resolveComponent("BaseHeader");return Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createVNode(u,null,{center:Vue.withCtx(()=>e[2]||(e[2]=[Vue.createElementVNode("span",{class:"f16"},"申报学校信息",-1)])),_:1}),Vue.createElementVNode("div",m,[Vue.createElementVNode("div",V,[e[3]||(e[3]=Vue.createElementVNode("div",{class:"label"},"学校全称",-1)),Vue.withDirectives(Vue.createElementVNode("input",{type:"text",placeholder:"请输入学校全称(必填)","onUpdate:modelValue":e[0]||(e[0]=n=>t.form.name=n)},null,512),[[Vue.vModelText,t.form.name]])]),t.type===1?(Vue.openBlock(),Vue.createElementBlock("div",i,[e[4]||(e[4]=Vue.createElementVNode("div",{class:"label"},"所在城市",-1)),Vue.withDirectives(Vue.createElementVNode("input",{type:"text",placeholder:"请输入学校所在城市(必填)","onUpdate:modelValue":e[1]||(e[1]=n=>t.form.location=n)},null,512),[[Vue.vModelText,t.form.location]])])):Vue.createCommentVNode("",!0),t.type===2?(Vue.openBlock(),Vue.createElementBlock("div",A,e[5]||(e[5]=[Vue.createElementVNode("div",{class:"label"},"信息问题",-1),Vue.createElementVNode("div",{class:"right"},[Vue.createElementVNode("span",null,"点击选择(必选)"),Vue.createElementVNode("img",{src:d,alt:""})],-1)]))):Vue.createCommentVNode("",!0),e[6]||(e[6]=Vue.createElementVNode("div",{class:"notice"},"感谢你的反馈，我们将尽快核对信息",-1)),Vue.createElementVNode("div",{class:"btn",onClick:a},"提交")])])}}}),f=s(p,[["__scopeId","data-v-a99de8f3"]]);export{f as default};
