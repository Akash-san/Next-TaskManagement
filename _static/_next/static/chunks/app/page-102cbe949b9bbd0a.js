(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1259:function(e,t,s){Promise.resolve().then(s.bind(s,3155)),Promise.resolve().then(s.bind(s,787))},139:function(e,t,s){"use strict";s.d(t,{_5:function(){return i},eT:function(){return l},gI:function(){return n}});let a="http://localhost:3001/task",n=async e=>{let t=await fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();return s},l=async e=>{let t=await fetch("".concat(a,"/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await t.json();return s},i=async e=>{await fetch("".concat(a,"/").concat(e),{method:"DELETE"})}},3155:function(e,t,s){"use strict";s.r(t);var a=s(9268),n=s(1033),l=s(4136),i=s(6006),c=s(139),r=s(6008),o=s(6462);t.default=()=>{let e=(0,r.useRouter)(),[t,s]=(0,i.useState)(!1),[d,u]=(0,i.useState)(""),h=async t=>{t.preventDefault(),await (0,c.gI)({id:(0,o.Z)(),text:d}),u(""),s(!1),e.refresh()};return(0,a.jsxs)("div",{children:[(0,a.jsxs)("button",{onClick:()=>s(!0),className:"btn btn-primary w-full",children:["Add Task ",(0,a.jsx)(n.Lfi,{className:" ml-4",size:18})," "]}),(0,a.jsx)(l.Z,{modalOpen:t,setModalOpen:s,children:(0,a.jsxs)("form",{onSubmit:h,children:[(0,a.jsx)("h4",{className:"font-bold text-lg",children:"Add New Tasks"}),(0,a.jsxs)("div",{className:"modal-action",children:[(0,a.jsx)("input",{value:d,onChange:e=>u(e.target.value),type:"text",placeholder:"Type here",className:"input input-bordered w-full "}),(0,a.jsx)("button",{type:"submit",className:"btn",children:"Sumbit"})]})]})})]})}},4136:function(e,t,s){"use strict";var a=s(9268);s(6006),t.Z=e=>{let{modalOpen:t,setModalOpen:s,children:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"checkbox",id:"my-modal-3",className:"modal-toggle"}),(0,a.jsx)("div",{className:"modal ".concat(t?"modal-open":""),children:(0,a.jsxs)("div",{className:"modal-box relative",children:[(0,a.jsx)("label",{onClick:()=>s(!1),className:"btn btn-sm btn-circle absolute right-2 top-2",children:"✕"}),n]})})]})}},787:function(e,t,s){"use strict";s.r(t);var a=s(9268),n=s(6006),l=s(3393),i=s(4136),c=s(6008),r=s(139);t.default=e=>{let{task:t}=e,s=(0,c.useRouter)(),[o,d]=(0,n.useState)(!1),[u,h]=(0,n.useState)(!1),[m,x]=(0,n.useState)(t.text),p=async e=>{e.preventDefault(),await (0,r.eT)({id:t.id,text:m}),x(""),d(!1),s.refresh()},f=async e=>{await (0,r._5)(e),h(!1),s.refresh()};return(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"w-full",children:t.text}),(0,a.jsxs)("td",{className:"flex gap-5",children:[(0,a.jsx)(l.vPQ,{onClick:()=>d(!0),cursor:"pointer",className:"text-blue-500",size:24}),(0,a.jsx)(i.Z,{modalOpen:o,setModalOpen:d,children:(0,a.jsxs)("form",{onSubmit:p,children:[(0,a.jsx)("h3",{className:"font-bold text-lg",children:"Edit task"}),(0,a.jsxs)("div",{className:"modal-action",children:[(0,a.jsx)("input",{value:m,onChange:e=>x(e.target.value),type:"text",placeholder:"Type here",className:"input input-bordered w-full"}),(0,a.jsx)("button",{type:"submit",className:"btn",children:"Submit"})]})]})}),(0,a.jsx)(l.Ybf,{onClick:()=>h(!0),cursor:"pointer",className:"text-red-500",size:24}),(0,a.jsxs)(i.Z,{modalOpen:u,setModalOpen:h,children:[(0,a.jsx)("h3",{className:"text-lg",children:"Are you sure, you want to delete this task?"}),(0,a.jsx)("div",{className:"modal-action",children:(0,a.jsx)("button",{onClick:()=>f(t.id),className:"btn",children:"Yes"})})]})]})]},t.id)}}},function(e){e.O(0,[173,614,253,961,744],function(){return e(e.s=1259)}),_N_E=e.O()}]);