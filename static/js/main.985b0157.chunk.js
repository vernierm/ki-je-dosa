(this["webpackJsonpki-je-dosa"]=this["webpackJsonpki-je-dosa"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(3),r=a.n(i),c=(a(19),a(6)),o=(a(20),a(8)),l=a(9),u=a(4),m=a(11),j=a(10),b=(a(21),a(22),a(1)),h=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={currentItem:0},n.setCurrentItem=n.setCurrentItem.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"setCurrentItem",value:function(e){var t=this.props.items.length;e<0||e>t-1?console.log("dev error: item out of range"):this.setState({currentItem:e})}},{key:"render",value:function(){var e=this,t=this.state.currentItem,a=this.props.items.length,n=[t,(t+1)%a,(t+2)%a,(t+3)%a,(t+4)%a,(t+5)%a];return Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:[this.props.items[n[0]].male," i ",this.props.items[n[1]].female," ",this.props.items[n[2]].where," ",this.props.items[n[3]].doingWhat,", dojde ",this.props.items[n[4]].thirdPerson," i re\u010de `",this.props.items[n[5]].statement,"!`"]}),Object(b.jsxs)("p",{children:["[",t+1," / ",a,"]"]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"Display-button",onClick:function(){return e.setCurrentItem(t-1)},disabled:t<=0,children:"nazad"}),Object(b.jsx)("button",{className:"Display-button",onClick:function(){return e.setCurrentItem(t+1)},disabled:t>=a-1,children:"naprid"}),Object(b.jsx)("button",{className:"Display-button",onClick:this.props.onNewGameClick,disabled:t<a-1,children:"nova igra"})]})]})}}]),a}(s.a.Component),d=a(7),p=a(14),O=(a(24),a(5));function v(e){return Object(b.jsxs)("label",{children:[e.label,Object(b.jsx)("input",{className:"Form-input",name:e.name,type:"text",spellCheck:"false",autocomplete:"off",value:e.value,onChange:e.onChange})]})}var f={male:"",female:"",where:"",doingWhat:"",thirdPerson:"",statement:""};function x(e){var t=Object(n.useState)(f),a=Object(p.a)(t,2),s=a[0],i=a[1],r=Object(O.b)(),o=function(e){var t=e.target,a=t.name,n=t.value;i(Object(c.a)(Object(c.a)({},s),{},Object(d.a)({},a,n)))};return Object(b.jsxs)("form",{className:"Form-input",onSubmit:function(t){t.preventDefault();var a=s;!function(e){return e.male&&e.female&&e.where&&e.doingWhat&&e.thirdPerson&&e.statement}(a)?r.show("popuni sva polja"):(t.target.reset(),i(f),e.onClick(a))},children:[Object(b.jsx)(v,{label:"Mu\u0161ki:",name:"male",value:s.male,onChange:o}),Object(b.jsx)(v,{label:"\u017denska:",name:"female",value:s.female,onChange:o}),Object(b.jsx)(v,{label:"Kadi?",name:"where",value:s.where,onChange:o}),Object(b.jsx)(v,{label:"\u010ca delaju?",name:"doingWhat",value:s.doingWhat,onChange:o}),Object(b.jsx)(v,{label:"Ki je do\u0161a?",name:"thirdPerson",value:s.thirdPerson,onChange:o}),Object(b.jsx)(v,{label:"\u010ca je reka?",name:"statement",value:s.statement,onChange:o}),Object(b.jsx)("input",{className:"Form-button",type:"submit",value:"Unesi"})]})}var g="INPUT_STATE",k=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={submittedForms:[],gameState:g},n.enterOutputState=n.enterOutputState.bind(Object(u.a)(n)),n.handleNewGame=n.handleNewGame.bind(Object(u.a)(n)),n}return Object(l.a)(a,[{key:"saveForm",value:function(e){this.setState({submittedForms:this.state.submittedForms.concat([e])})}},{key:"enterOutputState",value:function(e){this.state.submittedForms.length<3?this.props.alert.show("unesi baren 3"):this.setState({gameState:"OUTPUT_STATE"})}},{key:"handleNewGame",value:function(){this.setState({submittedForms:[],gameState:g})}},{key:"render",value:function(){var e=this;return this.state.gameState===g?Object(b.jsx)("div",{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(x,{onClick:function(t){return e.saveForm(t)}}),Object(b.jsxs)("p",{children:["Broj rundi: ",this.state.submittedForms.length]}),Object(b.jsx)("button",{className:"Game-button",onClick:this.enterOutputState,children:"Amooo"})]})}):Object(b.jsx)(h,{items:this.state.submittedForms,onNewGameClick:this.handleNewGame})}}]),a}(s.a.Component),C=Object(O.c)()(k),N=a(13),S={position:"bottom center",timeout:2e3,offset:"30px",transition:"scale"};var w=function(){return Object(b.jsx)(O.a,Object(c.a)(Object(c.a)({template:N.a},S),{},{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)("img",{src:"/ki-je-dosa/kjd.png",className:"App-logo",alt:"logo"})}),Object(b.jsx)("div",{className:"App-body",children:Object(b.jsx)(C,{})})]})}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.985b0157.chunk.js.map