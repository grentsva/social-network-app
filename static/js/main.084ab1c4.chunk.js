(this["webpackJsonpsocial-network-app"]=this["webpackJsonpsocial-network-app"]||[]).push([[0],{128:function(e,t,a){"use strict";a.d(t,"d",(function(){return b})),a.d(t,"e",(function(){return O})),a.d(t,"c",(function(){return _})),a.d(t,"b",(function(){return w})),a.d(t,"f",(function(){return k}));var n=a(7),r=a.n(n),o=a(15),s=a(26),i=a(4),c=a(13),u=function(e,t,a,n){return e.map((function(e){return e[a]===t?Object(i.a)(Object(i.a)({},e),n):e}))},l="samurai-network/follow/FOLLOW",m="samurai-network/follow/UNFOLLOW",f="samurai-network/users/SET_USERS",p="samurai-network/users/SET_CURRENT_PAGE",d="samurai-network/users/SET_TOTAL_USERS_COUNT",h={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:l,userId:e}},g=function(e){return{type:m,userId:e}},b=function(e){return{type:p,currentPage:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},O=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},_=function(e,t){return function(){var a=Object(o.a)(r.a.mark((function a(n){var o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n(E(!0)),a.next=3,c.d.getUsers(e,t);case 3:o=a.sent,n(E(!1)),n((s=o.items,{type:f,users:s})),n((r=o.totalCount,{type:d,count:r}));case 7:case"end":return a.stop()}var r,s}),a)})));return function(e){return a.apply(this,arguments)}}()},j=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n,o){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(O(!0,a)),e.next=3,n(a);case 3:0===e.sent.data.resultCode&&t(o(a)),t(O(!1,a));case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}(),w=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(a,e,c.d.follow.bind(c.d),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:j(a,e,c.d.unfollow.bind(c.d),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case m:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:Object(s.a)(t.users)});case p:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case d:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},13:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c}));var n=a(134),r=n.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"db859786-8663-4823-a587-15dd10c849f9"}}),o={getUsers(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:e=>r.post("follow/".concat(e)),unfollow:e=>r.delete("follow/".concat(e))},s={getProfile:e=>r.get("profile/"+e),getStatus:e=>r.get("profile/status/"+e),updateStatus:e=>r.put("profile/status",{status:e}),savePhoto(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:e=>r.put("profile",e)},i={me:()=>r.get("auth/me"),login(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:()=>r.delete("auth/login")},c={getCaptchaUrl:()=>r.get("security/get-captcha-url")}},131:function(e,t,a){e.exports=a.p+"static/media/preloader.de3c9476.svg"},132:function(e,t,a){e.exports={preloader:"Preloader_preloader__1wDbB"}},133:function(e,t,a){e.exports={status:"ProfileStatus_status__3j_9I"}},135:function(e,t,a){e.exports={item:"Post_item__2K8XG"}},136:function(e,t,a){},16:function(e,t,a){e.exports={nav:"Navbar_nav__23NiJ",item:"Navbar_item__35w9N",activeLink:"Navbar_activeLink__3rerr"}},163:function(e,t,a){e.exports=a(289)},168:function(e,t,a){},169:function(e,t,a){},27:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3COqm",dialogsItems:"Dialogs_dialogsItems__2_eON",active:"Dialogs_active__24fgn",messages:"Dialogs_messages__2Fb6b",message:"Dialogs_message__3anMZ"}},289:function(e,t,a){"use strict";a.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(0),r=a.n(n),o=a(65),s=a.n(o),i=(a(168),a(30)),c=a(31),u=a(33),l=a(32),m=(a(169),a(16)),f=a.n(m),p=a(12),d=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.active)},r.a.createElement(p.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:f.a.activeLink},"Users")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(p.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")))},h=a(10),v=a(26),g=a(4),b="samurai-network/profile/SEND_MESSAGE",E={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Andrew"},{id:3,name:"Sveta"},{id:4,name:"Sasha"},{id:5,name:"Viktor"},{id:6,name:"Valera"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:var a=t.newMessageBody;return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(v.a)(e.messages),[{id:e.messages.length+1,message:a}])});default:return e}},_=a(27),j=a.n(_),w=function(e){var t="/dialogs/"+e.id;return r.a.createElement("div",{className:j.a.dialog+" "+j.a.active},r.a.createElement(p.b,{to:t},e.name))},k=function(e){return r.a.createElement("div",{className:j.a.dialog},e.message)},S=a(125),y=a(126),P=a(88),C=a(39),N=a.n(C),I=function(e){e.input;var t=e.meta,a=t.touched,n=t.error,o=e.children,s=a&&n;return r.a.createElement("div",{className:N.a.formControl+" "+(s?N.a.error:"")},r.a.createElement("div",null,o),s&&r.a.createElement("span",null,n))},x=function(e){var t=e.input,a=(e.meta,e.child,Object(P.a)(e,["input","meta","child"]));return r.a.createElement(I,e,r.a.createElement("textarea",Object.assign({},t,a)))},A=function(e){var t=e.input,a=(e.meta,e.child,Object(P.a)(e,["input","meta","child"]));return r.a.createElement(I,e,r.a.createElement("input",Object.assign({},t,a)))},T=function(e,t,a,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(S.a,Object.assign({placeholder:e,name:t,validate:a,component:n},o)),s)},U=function(e){if(!e)return"Field is required"},L=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},D=L(50),M=Object(y.a)({form:"dialog-add-message-form"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{component:x,validate:[U,D],placeholder:"Enter your message",name:"newMessageBody"})),r.a.createElement("div",null,r.a.createElement("button",null,"Send")))})),F=function(e){var t=e.dialogsPage,a=t.dialogs.map((function(e){return r.a.createElement(w,{name:e.name,key:e.id,id:e.id})})),n=t.messages.map((function(e){return r.a.createElement(k,{message:e.message,key:e.id})}));return e.isAuth?r.a.createElement("div",{className:j.a.dialogs},r.a.createElement("div",{className:j.a.dialogsItems},a),r.a.createElement("div",{className:j.a.messages},r.a.createElement("div",null,n),r.a.createElement(M,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}}))):r.a.createElement(h.a,{to:"/login"})},B=a(11),G=function(e){return{isAuth:e.auth.isAuth}},R=a(8),z=Object(R.d)(Object(B.b)((function(e){return{dialogsPage:e.dialogsPage,isAuth:e.auth.isAuth}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:b,newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(u.a)(n,t);var a=Object(l.a)(n);function n(){return Object(i.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return this.props.isAuth?r.a.createElement(e,this.props):r.a.createElement(h.a,{to:"/login"})}}]),n}(r.a.Component);return Object(B.b)(G)(t)}))(F),H=a(52),J=a(40),V=a.n(J),W=a(51),X=a(133),Y=a.n(X),Z=function(e){var t=Object(n.useState)(!1),a=Object(H.a)(t,2),o=a[0],s=a[1],i=Object(n.useState)(e.status),c=Object(H.a)(i,2),u=c[0],l=c[1];Object(n.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",{className:Y.a.status},!o&&r.a.createElement("div",null,r.a.createElement("span",{onDoubleClick:function(){s(!0)}},e.status||"")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){s(!1),e.updateStatus(u)},value:u})))},q=Object(y.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return r.a.createElement("form",{onSubmit:t},n&&r.a.createElement("div",{className:N.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),":",T("","lookingForAJob",[],A,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),":",T("My professional skills","lookingForAJobDescription",[],x)),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),":",T("About me","aboutMe",[],x)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":",Object.keys(a.contacts).map((function(e){return r.a.createElement("div",{key:e},r.a.createElement("b",null,e,": ",T(e,"contacts."+e,[],A)))}))),r.a.createElement("div",null,r.a.createElement("button",null,"save")))})),K=a(67),$=a.n(K),Q=function(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return r.a.createElement("div",{className:V.a.profileDescription},r.a.createElement("span",null,"My Information: "),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),":",Object.keys(t.contacts).map((function(e){return r.a.createElement(ee,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))),a&&r.a.createElement("div",{className:V.a.editButton,onClick:n}))},ee=function(e){var t=e.contactTitle,a=e.contactValue;return r.a.createElement("div",{className:V.a.contact},r.a.createElement("b",null,t),": ",a)},te=function(e){var t=e.profile,a=e.status,o=e.updateStatus,s=e.isOwner,i=e.savePhoto,c=e.saveProfile,u=Object(n.useState)(!1),l=Object(H.a)(u,2),m=l[0],f=l[1];if(!t)return r.a.createElement(W.a,null);return r.a.createElement("div",null,r.a.createElement("div",{className:V.a.fullName},t.fullName),r.a.createElement(Z,{status:a,updateStatus:o}),r.a.createElement("div",{className:V.a.profileData},r.a.createElement("div",null,r.a.createElement("img",{src:t.photos.large||$.a,className:V.a.mainPhoto,alt:""}),s&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})),m?r.a.createElement(q,{initialValues:t,profile:t,onSubmit:function(e){c(e).then((function(){f(!1)}))}}):r.a.createElement(Q,{goToEditMode:function(){f(!0)},profile:t,isOwner:s})))},ae=a(7),ne=a.n(ae),re=a(15),oe=a(13),se=a(25),ie="samurai-network/profile/ADD_POST",ce="samurai-network/users/SET_USER_PROFILE",ue="samurai-network/profile/status/SET_STATUS",le="samurai-network/profile/DELETE_POST",me="samurai-network/profile/photo/SAVE_PHOTO_SUCCESS",fe={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"It's my first post",likesCount:11},{id:3,message:"Blabla",likesCount:11},{id:4,message:"Dada",likesCount:11}],profile:null,status:""},pe=function(e){return{type:ue,status:e}},de=function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(a){var n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.b.getProfile(e);case 2:n=t.sent,a((r=n.data,{type:ce,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ie:var a={id:e.posts.length+1,message:t.newPostText,likesCount:0};return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(v.a)(e.posts),[a]),newPostText:""});case ce:return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});case ue:return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case le:return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case me:return Object(g.a)(Object(g.a)({},e),{},{profile:Object(g.a)(Object(g.a)({},e.profile),{},{photos:t.photos})});default:return e}},ve=a(94),ge=a.n(ve),be=a(135),Ee=a.n(be),Oe=function(e){return r.a.createElement("div",{className:Ee.a.item},r.a.createElement("img",{src:$.a,alt:""}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"like")," ",e.likesCount))},_e=L(10),je=Object(y.a)({form:"ProfileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(S.a,{name:"newPostText",component:x,validate:[U,_e]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),we=r.a.memo((function(e){var t=Object(v.a)(e.posts).reverse().map((function(e){return r.a.createElement(Oe,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:ge.a.postsBlock},r.a.createElement("h4",null,"My posts"),r.a.createElement(je,{onSubmit:function(t){e.addPost(t.newPostText)}}),r.a.createElement("div",{className:ge.a.posts},t))})),ke=Object(B.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:ie,newPostText:e}}(t))}}}))(we),Se=a(136),ye=a.n(Se),Pe=function(e){return r.a.createElement("div",{className:ye.a.profile},r.a.createElement(te,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),r.a.createElement(ke,null))},Ce=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(Pe,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),a}(r.a.Component),Ne=Object(R.d)(Object(B.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isAuth:e.auth.isAuth,authorizedUserId:e.auth.userId}}),{getUserProfile:de,getStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(a){var n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.b.getStatus(e);case 2:n=t.sent,a(pe(n.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(a){return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&a(pe(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(a){var n;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,oe.b.savePhoto(e);case 2:0===(n=t.sent).data.resultCode&&a((r=n.data.data.photos,{type:me,photos:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(re.a)(ne.a.mark((function t(a,n){var r,o;return ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n().auth.userId,t.next=3,oe.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}a(de(r)),t.next=10;break;case 8:return a(Object(se.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}}),h.f)(Ce),Ie=a(71),xe=a.n(Ie),Ae=function(e){return r.a.createElement("header",{className:xe.a.header},r.a.createElement("span",{className:xe.a.logo},"\u0412 REACT'\u0415"),r.a.createElement("div",{className:xe.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")," "):r.a.createElement(p.b,{to:"/login"},"Login")))},Te="samurai-network/auth/SET_USER_DATA",Ue={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Le=function(e,t,a,n){return{type:Te,payload:{userId:e,email:t,login:a,isAuth:n}}},De=function(e){return{type:"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Me=function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n,r,o,s;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.me();case 2:0===(a=e.sent).data.resultCode&&(n=a.data.data,r=n.id,o=n.login,s=n.email,t(Le(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Fe=function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(De(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:case"samurai-network/auth/GET_CAPTCHA_URL_SUCCESS":return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},Ge=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(Ae,this.props)}}]),a}(r.a.Component),Re=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.logout();case 2:0===e.sent.data.resultCode&&t(Le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ge),ze=Object(y.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error,n=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},T("Email","email",[U],A),T("Password","password",[U],A,{type:"password"}),T(null,"rememberMe",[],A,{type:"checkbox"},"remember me"),n&&r.a.createElement("img",{src:n,alt:""}),n&&T("Symbols from image","captcha",[U],A,{}),a&&r.a.createElement("div",{className:N.a.formSummaryError},a),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),He=Object(B.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,a,n){return function(){var r=Object(re.a)(ne.a.mark((function r(o){var s,i;return ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,oe.a.login(e,t,a,n);case 2:0===(s=r.sent).data.resultCode?o(Me()):(10===s.data.resultCode&&o(Fe()),i=s.data.messages.length>0?s.data.messages[0]:"Error",o(Object(se.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Je={initialized:!1},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},We={},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We;return e},Ye=a(128),Ze=a(137),qe=a(127),Ke=Object(R.c)({profilePage:he,dialogsPage:O,usersPage:Ye.a,auth:Be,form:qe.a,sidebar:Xe,app:Ve}),$e=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,Qe=Object(R.e)(Ke,$e(Object(R.a)(Ze.a)));window.store=Qe;var et=Qe,tt=r.a.lazy((function(){return a.e(3).then(a.bind(null,293))})),at=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Re,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.b,{path:"/dialogs",render:function(){return r.a.createElement(z,null)}}),r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ne,null)}}),r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(W.a,null)},r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(tt,null)}})),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(He,null)}}))):r.a.createElement(W.a,null)}}]),a}(n.Component),nt=Object(R.d)(h.f,Object(B.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Me());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(at),rt=function(e){return r.a.createElement(p.a,null,r.a.createElement(B.a,{store:et},r.a.createElement(nt,null)))};s.a.render(r.a.createElement(rt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,a){e.exports={formControl:"FormsControls_formControl__1FWXx",error:"FormsControls_error__2wOdM",formSummaryError:"FormsControls_formSummaryError__3vc7t"}},40:function(e,t,a){e.exports={profileData:"ProfileInfo_profileData__3SrSm",fullName:"ProfileInfo_fullName__nPbo5",mainPhoto:"ProfileInfo_mainPhoto__2dRZU",profileDescription:"ProfileInfo_profileDescription__3NpCi",contact:"ProfileInfo_contact__3fNjo",editButton:"ProfileInfo_editButton__2TrP9"}},51:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(131),s=a.n(o),i=a(132),c=a.n(i);t.a=function(e){return r.a.createElement("div",{className:c.a.preloader},r.a.createElement("img",{src:s.a,alt:""}))}},67:function(e,t,a){e.exports=a.p+"static/media/user.2afd1c89.png"},71:function(e,t,a){e.exports={header:"Header_header__1kjaB",logo:"Header_logo__2RpXr",loginBlock:"Header_loginBlock__2x9P3"}},94:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__18jrA",posts:"MyPosts_posts__PRm42"}}},[[163,1,2]]]);
//# sourceMappingURL=main.084ab1c4.chunk.js.map