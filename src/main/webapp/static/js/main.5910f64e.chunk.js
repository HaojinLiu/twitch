(this.webpackJsonptwitchfe=this.webpackJsonptwitchfe||[]).push([[0],{155:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(137),s=n.n(a),i=(n(155),n(12)),o=n(13),l=n(16),u=n(15),d=n(238),j=n(145),h=n(239),m=n(240),f=n(59),b=n(246),O=n(5),g=n(245),p=n(242),x=n(243),y=n(248),v=n(249),S="",C="".concat(S,"/login"),I="".concat(S,"/register"),w="".concat(S,"/logout"),F=function(){return fetch(w,{method:"POST",credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to log out")}))},P="".concat(S,"/game"),E=function(){return fetch(P).then((function(e){if(200!==e.status)throw Error("Fail to get top games");return e.json()}))},k="".concat(S,"/game?game_name="),T="".concat(S,"/search?game_id="),_=function(e){return fetch("".concat(T).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))},R=function(e){return function(e){return fetch("".concat(k).concat(e)).then((function(e){if(200!==e.status)throw Error("Fail to find the game");return e.json()}))}(e).then((function(e){if(e&&e.id)return _(e.id);throw Error("Fail to find the game")}))},D="".concat(S,"/favorite"),L=function(e){return fetch(D,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to add favorite item")}))},M=function(e){return fetch(D,{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({favorite:e})}).then((function(e){if(200!==e.status)throw Error("Fail to delete favorite item")}))},A=function(){return fetch(D,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get favorite item");return e.json()}))},G="".concat(S,"/recommendation"),V=function(){return fetch(G,{credentials:"include"}).then((function(e){if(200!==e.status)throw Error("Fail to get recommended item");return e.json()}))},q=n(6);var N=function(e){var t=e.onSuccess,n=Object(r.useState)(!1),c=Object(O.a)(n,2),a=c[0],s=c[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(f.a,{shape:"round",onClick:function(){s(!0)},style:{marginRight:"20px"},children:"Login"}),Object(q.jsx)(g.a,{title:"Log in",visible:a,onCancel:function(){s(!1)},footer:null,destroyOnClose:!0,children:Object(q.jsxs)(p.a,{name:"normal_login",onFinish:function(e){var n;(n=e,fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)}).then((function(e){if(200!==e.status)throw Error("Fail to log in");return e.json()}))).then((function(e){s(!1),j.b.success("Welcome back, ".concat(e.name)),t()})).catch((function(e){j.b.error(e.message)}))},preserve:!1,children:[Object(q.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(q.jsx)(x.a,{prefix:Object(q.jsx)(y.a,{}),placeholder:"Username"})}),Object(q.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(q.jsx)(x.a.Password,{prefix:Object(q.jsx)(v.a,{}),placeholder:"Password"})}),Object(q.jsx)(p.a.Item,{children:Object(q.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Login"})})]})})]})};var J=function(){var e=Object(r.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(f.a,{shape:"round",type:"primary",onClick:function(){c(!0)},children:"Register"}),Object(q.jsx)(g.a,{title:"Register",visible:n,onCancel:function(){c(!1)},footer:null,destroyOnClose:!0,children:Object(q.jsxs)(p.a,{name:"normal_register",initialValues:{remember:!0},onFinish:function(e){(function(e){return fetch(I,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(200!==e.status)throw Error("Fail to register")}))})(e).then((function(){c(!1),j.b.success("Successfully signed up")})).catch((function(e){j.b.error(e.message)}))},preserve:!1,children:[Object(q.jsx)(p.a.Item,{name:"user_id",rules:[{required:!0,message:"Please input your Username!"}],children:Object(q.jsx)(x.a,{prefix:Object(q.jsx)(y.a,{}),placeholder:"Username"})}),Object(q.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(q.jsx)(x.a,{prefix:Object(q.jsx)(v.a,{}),placeholder:"Password"})}),Object(q.jsx)(p.a.Item,{name:"first_name",rules:[{required:!0,message:"Please input your Firstname!"}],children:Object(q.jsx)(x.a,{placeholder:"firstname"})}),Object(q.jsx)(p.a.Item,{name:"last_name",rules:[{required:!0,message:"Please input your Lastname!"}],children:Object(q.jsx)(x.a,{placeholder:"lastname"})}),Object(q.jsx)(p.a.Item,{children:Object(q.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Register"})})]})})]})},U=n(247),B=n(250),K=n(147),H=n(251),W=n(252),z=b.a.SubMenu,Q="streams",X="videos",Y="clips",Z=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={displayDrawer:!1},e.onDrawerClose=function(){e.setState({displayDrawer:!1})},e.onFavoriteClick=function(){e.setState({displayDrawer:!0})},e.render=function(){var t=e.props.data,n=t.VIDEO,r=t.STREAM,c=t.CLIP;return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(f.a,{type:"primary",shape:"round",onClick:e.onFavoriteClick,icon:Object(q.jsx)(B.a,{}),children:"My Favorites"}),Object(q.jsx)(U.a,{title:"My Favorites",placement:"right",width:720,visible:e.state.displayDrawer,onClose:e.onDrawerClose,children:Object(q.jsxs)(b.a,{mode:"inline",defaultOpenKeys:[Q],style:{height:"100%",borderRight:0},selectable:!1,children:[Object(q.jsx)(z,{icon:Object(q.jsx)(K.a,{}),title:"Streams",children:r.map((function(e){return Object(q.jsx)(b.a.Item,{children:Object(q.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Q),Object(q.jsx)(z,{icon:Object(q.jsx)(H.a,{}),title:"Videos",children:n.map((function(e){return Object(q.jsx)(b.a.Item,{children:Object(q.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},X),Object(q.jsx)(z,{icon:Object(q.jsx)(W.a,{}),title:"Clips",children:c.map((function(e){return Object(q.jsx)(b.a.Item,{children:Object(q.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:"".concat(e.broadcaster_name," - ").concat(e.title)})},e.id)}))},Y)]})})]})},e}return Object(i.a)(n)}(c.a.Component),$=Z,ee=n(254),te=n(255),ne=n(113),re=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={displayModal:!1},e.handleCancel=function(){e.setState({displayModal:!1})},e.searchOnClick=function(){e.setState({displayModal:!0})},e.onSubmit=function(e){R(e.game_name).then((function(e){console.log(e)})).catch((function(e){j.b.error(e.message)}))},e.render=function(){return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(f.a,{shape:"round",onClick:e.searchOnClick,icon:Object(q.jsx)(ne.a,{}),style:{marginLeft:"20px",marginTop:"20px"},children:"Custom Search"}),Object(q.jsx)(g.a,{title:"Custom Search",visible:e.state.displayModal,onCancel:e.handleCancel,footer:null,children:Object(q.jsxs)(p.a,{name:"custom_search",onFinish:e.onSubmit,children:[Object(q.jsx)(p.a.Item,{name:"game_name",rules:[{required:!0,message:"Please enter a game name"}],children:Object(q.jsx)(x.a,{placeholder:"Game name"})}),Object(q.jsx)(p.a.Item,{children:Object(q.jsx)(f.a,{type:"primary",htmlType:"submit",children:"Search"})})]})})]})},e}return Object(i.a)(n)}(c.a.Component),ce=re,ae=n(142),se=n.n(ae),ie=n(122),oe=n(105),le=n(241),ue=n(244),de=n(253),je=ie.a.TabPane,he="stream",me="videos",fe="clips",be=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3?arguments[3]:void 0,c="".concat(e.broadcaster_name," - ").concat(e.title),a=n.find((function(t){return t.id===e.id})),s=function(){a?M(e).then((function(){r()})).catch((function(e){j.b.error(e.message)})):L(e).then((function(){r()})).catch((function(e){j.b.error(e.message)}))};return Object(q.jsxs)(q.Fragment,{children:[t&&Object(q.jsx)(oe.a,{title:a?"Remove from favorite list":"Add to favorite list",children:Object(q.jsx)(f.a,{shape:"circle",icon:a?Object(q.jsx)(B.a,{}):Object(q.jsx)(de.a,{}),onClick:s})}),Object(q.jsx)("div",{style:{overflow:"hidden",textOverflow:"ellipsis",width:450},children:Object(q.jsx)(oe.a,{title:c,children:Object(q.jsx)("span",{children:c})})})]})},Oe=function(e,t,n,r){return Object(q.jsx)(le.b,{grid:{xs:1,sm:2,md:2,lg:2,xl:2},dataSource:e,renderItem:function(e){return Object(q.jsx)(le.b.Item,{style:{marginRight:"20px"},children:Object(q.jsx)(ue.a,{title:be(e,t,n,r),children:Object(q.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(q.jsx)("img",{alt:"Placeholder",src:(c=e.thumbnail_url,c.replace("%{height}","252").replace("%{width}","480").replace("{height}","252").replace("{width}","480"))})})})});var c}})},ge=function(e){var t=e.resources,n=e.loggedIn,r=e.favoriteItems,c=e.favoriteOnChange,a=t.VIDEO,s=t.STREAM,i=t.CLIP,o=r.VIDEO,l=r.STREAM,u=r.CLIP;return Object(q.jsxs)(ie.a,{defaultActiveKey:he,children:[Object(q.jsx)(je,{tab:"Streams",style:{height:"680px",overflow:"auto"},forceRender:!0,children:Oe(s,n,l,c)},he),Object(q.jsx)(je,{tab:"Videos",style:{height:"680px",overflow:"auto"},forceRender:!0,children:Oe(a,n,o,c)},me),Object(q.jsx)(je,{tab:"Clips",style:{height:"680px",overflow:"auto"},forceRender:!0,children:Oe(i,n,u,c)},fe)]})},pe=d.a.Header,xe=d.a.Content,ye=d.a.Sider,ve=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={loggedIn:!1,topGames:[],resources:{VIDEO:[],STREAM:[],CLIP:[]},favoriteItems:{VIDEO:[],STREAM:[],CLIP:[]}},e.favoriteOnChange=function(){A().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){j.b.error(e.message)}))},e.onGameSelect=function(t){var n=t.key;"Recommendation"!==n?_(n).then((function(t){e.setState({resources:t})})):V().then((function(t){e.setState({resources:t})}))},e.customSearchOnSuccess=function(t){e.setState({resources:t})},e.signinOnSuccess=function(){A().then((function(t){e.setState({favoriteItems:t,loggedIn:!0})})).catch((function(e){j.b.error(e.message)}))},e.signoutOnClick=function(){F().then((function(){e.setState({loggedIn:!1}),j.b.success("Successfull signed out")})).catch((function(e){j.b.error(e.message)}))},e.componentDidMount=function(){E().then((function(t){e.setState({topGames:t})})).catch((function(e){j.b.error(e.message)}))},e.render=function(){return Object(q.jsxs)(d.a,{children:[Object(q.jsx)(pe,{children:Object(q.jsxs)(h.a,{justify:"space-between",children:[Object(q.jsx)(m.a,{children:e.state.loggedIn&&Object(q.jsx)($,{data:e.state.favoriteItems})}),Object(q.jsx)(m.a,{children:e.state.loggedIn?Object(q.jsx)(f.a,{shape:"round",onClick:e.signoutOnClick,children:"Logout"}):Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(N,{onSuccess:e.signinOnSuccess}),Object(q.jsx)(J,{})]})})]})}),Object(q.jsxs)(d.a,{children:[Object(q.jsxs)(ye,{width:300,className:"site-layout-background",children:[Object(q.jsx)(ce,{onSuccess:e.customSearchOnSuccess}),Object(q.jsxs)(b.a,{mode:"inline",onSelect:e.onGameSelect,style:{marginTop:"10px"},children:[Object(q.jsx)(b.a.Item,{icon:Object(q.jsx)(ee.a,{}),children:"Recommend for you!"},"Recommendation"),Object(q.jsx)(se.a,{icon:Object(q.jsx)(te.a,{}),title:"Popular Games",className:"site-top-game-list",children:e.state.topGames.map((function(e){return Object(q.jsxs)(b.a.Item,{style:{height:"50px"},children:[Object(q.jsx)("img",{alt:"Placeholder",src:e.box_art_url.replace("{height}","40").replace("{width}","40"),style:{borderRadius:"50%",marginRight:"20px"}}),Object(q.jsx)("span",{children:e.name})]},e.id)}))},"Popular Games")]})]}),Object(q.jsx)(d.a,{style:{padding:"24px"},children:Object(q.jsx)(xe,{className:"site-layout-background",style:{padding:24,margin:0,height:800,overflow:"auto"},children:Object(q.jsx)(ge,{resources:e.state.resources,loggedIn:e.state.loggedIn,favoriteItems:e.state.favoriteItems,favoriteOnChange:e.favoriteOnChange})})})]})]})},e}return Object(i.a)(n)}(c.a.Component),Se=ve,Ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(Se,{})})),Ce()}},[[237,1,2]]]);
//# sourceMappingURL=main.5910f64e.chunk.js.map