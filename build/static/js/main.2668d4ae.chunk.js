(this["webpackJsonpyuval-chatbot"]=this["webpackJsonpyuval-chatbot"]||[]).push([[0],{202:function(e,a,t){e.exports=t(367)},243:function(e,a){},366:function(e,a,t){},367:function(e,a,t){"use strict";t.r(a);t(203),t(204),t(206);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),m=t(30),s=t(190),u=t(35),o=t(173),i=t.n(o),E=t(372),d=t(381),g=t(373),h=t(374),p=t(382),v=t(375),b=t(376),f=t(377),N=t(378),O=t(379),C=t(183),y=t(51),S=["https://res.cloudinary.com/dgmvbx86i/image/upload/v1591006944/mystery-man_flrhdt.jpg","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/man_dqk5c7.png","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/girl_xo2bcr.png","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/man-1_wpd5yz.png","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/boy-1_xrmk5f.png","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/girl-1_d88b6c.png","https://res.cloudinary.com/dgmvbx86i/image/upload/v1590661790/man-4_kdcc2u.png"],_=function(e){var a=e.showModal,t=e.handleCloseModal,l=e.clientsNames,c=Object(n.useState)(!1),m=Object(u.a)(c,2),s=m[0],o=m[1],i=0,_="";return r.a.createElement(d.a,{show:a,animation:!0},r.a.createElement(d.a.Header,null,r.a.createElement(d.a.Title,{className:"modal-title"},"Come chat with us")),r.a.createElement("hr",null),r.a.createElement(d.a.Body,null,r.a.createElement(E.a,null,r.a.createElement(g.a,null,r.a.createElement("label",null,r.a.createElement("hr",null),"Enter your name")),r.a.createElement(g.a,null,r.a.createElement(h.a,{className:"user-form"},r.a.createElement(p.a,{className:"user-form",placeholder:"Username","aria-label":"Username","aria-describedby":"basic-addon1",value:_.value,onChange:function(e){return function(e){e.preventDefault(),_=e.target.value}(e)}}))),r.a.createElement(g.a,null,r.a.createElement(v.a,{className:"no-name",show:s},r.a.createElement(y.a,{name:"x"}),"Choose other username")),r.a.createElement(g.a,null,r.a.createElement("label",null,r.a.createElement("hr",null),"Choose the avatar you like")),r.a.createElement(g.a,null,r.a.createElement(b.a,{toggle:!0,onChange:function(e){i=e.target.value}},S.slice(1).map((function(e,a){return r.a.createElement(f.a,{xs:2,md:2},r.a.createElement(N.a,{className:"avatar-button",type:"radio",defaultChecked:!0,value:a+1},r.a.createElement(O.a,{src:S[a+1],rounded:!0,fluid:!0})))})))))),r.a.createElement(d.a.Footer,null,r.a.createElement(C.a,{className:"start-button",variant:"primary",onClick:function(){if(l.find((function(e){return e.username===_}))||""===_)o(!0);else{var e={username:_,avatar:S[i]};t(e)}}},r.a.createElement(y.a,{className:"msg-icon",name:"chat"}),"Let`s start talking!")))},j=t(380),w=function(e){var a=e.msg,t=e.currentUser,n=a.user,l=a.message,c=a.time;return""===n.username?r.a.createElement("div",{className:"user-left"},l):r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{isOwn:n.username===t,authorName:n.username,date:c},r.a.createElement(m.a,{imgUrl:n.avatar}),r.a.createElement(m.c,{className:n.username===t?"own":"not-own"},l)))},x=function(e){var a=e.msgHistory,t=e.user,n=e.currentMsg,l=e.handleFormChange,c=e.handleSendMessage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:"message-list-container"},a.map((function(e,n){return n>0&&a[n-1].user.username===e.user.username?r.a.createElement(m.b,{isOwn:t.username===e.user.username},r.a.createElement(m.c,{className:t.username===e.user.username?"own":"not-own"},e.message)):r.a.createElement(w,{key:e.message,msg:e,currentUser:t.username})}))),r.a.createElement(E.a,{className:"message-text-container"},r.a.createElement(h.a,{className:"mb-3"},r.a.createElement(p.a,{className:"message-input",placeholder:"Text a message",value:n,maxLength:"70",onChange:function(e){return l(e)}}),r.a.createElement(h.a.Append,null,r.a.createElement(j.a,{animated:!0,onClick:function(e){return c(e)},disabled:""===n},r.a.createElement(j.a.Content,{visible:!0},"Send"),r.a.createElement(j.a.Content,{hidden:!0},r.a.createElement(y.a,{name:"send"})))))))},k=function(e){var a=e.client,t=e.currentUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{className:"part-image",roundedCircle:!0,src:a.avatar}),t.username===a.username?"".concat(t.username," (You)"):a.username)},T=function(e){var a=e.connList,t=e.currentUser;return 0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"connections"},"Participants"),r.a.createElement("ul",{className:"participants"},a.map((function(e){return r.a.createElement("li",{key:e.user},r.a.createElement(k,{client:e,currentUser:t}))})))):r.a.createElement(r.a.Fragment,null)},U=i()(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).PORT),D=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)([]),m=Object(u.a)(c,2),o=m[0],i=m[1],d=Object(n.useState)({username:"",avatar:""}),g=Object(u.a)(d,2),h=g[0],p=g[1],v=Object(n.useState)(!0),b=Object(u.a)(v,2),f=b[0],N=b[1],O=Object(n.useState)([]),C=Object(u.a)(O,2),y=C[0],S=C[1];Object(n.useEffect)((function(){return U.on("CONNECTIONS_CHANGE",(function(e){S(e)})),U.on("RECEIVE_MSG",(function(e){i((function(a){return[].concat(Object(s.a)(a),[e])}))})),document.title="Awesome Chat",function(){return U.close()}}),[]);return r.a.createElement(E.a,{className:"main-page"},r.a.createElement(E.a,{className:"main-container"},r.a.createElement(E.a,{className:"connections-list-container"},r.a.createElement(T,{currentUser:h,connList:y})),r.a.createElement(E.a,{className:"inner-container"},r.a.createElement(x,{msgHistory:o,user:h,currentMsg:t,handleFormChange:function(e){l(e.target.value)},handleSendMessage:function(e){e.preventDefault();var a=(new Date).toLocaleTimeString();U.emit("SEND_MSG",{message:t,time:a,user:h}),l("")}}))),r.a.createElement(_,{showModal:f,handleCloseModal:function(e){N(!1),p(e),U.emit("SEND_USER_DETAILS",e)},clientsNames:y}))},M=function(){return r.a.createElement(m.d,null,r.a.createElement(D,null))};t(366);c.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[202,1,2]]]);
//# sourceMappingURL=main.2668d4ae.chunk.js.map