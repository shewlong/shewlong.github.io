webpackJsonp([2],{"+708":function(e,t,n){"use strict";var o={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var e=this;n("JAHf"),this.$nextTick(function(){e.initParticleJS(e.color,e.particleOpacity,e.particlesNumber,e.shapeType,e.particleSize,e.linesColor,e.linesWidth,e.lineLinked,e.lineOpacity,e.linesDistance,e.moveSpeed,e.hoverEffect,e.hoverMode,e.clickEffect,e.clickMode)})},methods:{initParticleJS:function(e,t,n,o,i,r,a,u,l,c,s,p,d,m,f){particlesJS("particles-js",{particles:{number:{value:n,density:{enable:!0,value_area:800}},color:{value:e},shape:{type:o,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:t,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:i,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:u,distance:c,color:r,opacity:l,width:a},move:{enable:!0,speed:s,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:p,mode:d},onclick:{enable:m,mode:f},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},i={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"particles-js",color:e.color,particleOpacity:e.particleOpacity,linesColor:e.linesColor,particlesNumber:e.particlesNumber,shapeType:e.shapeType,particleSize:e.particleSize,linesWidth:e.linesWidth,lineLinked:e.lineLinked,lineOpacity:e.lineOpacity,linesDistance:e.linesDistance,moveSpeed:e.moveSpeed,hoverEffect:e.hoverEffect,hoverMode:e.hoverMode,clickEffect:e.clickEffect,clickMode:e.clickMode}})},staticRenderFns:[]},r=n("VU/8")(o,i,!1,null,null,null);t.a=r.exports},Hl2I:function(e,t){},IcnI:function(e,t,n){"use strict";var o=n("lRwf"),i=n.n(o),r=n("SJI6"),a=n.n(r),u=n("lbHh"),l=n.n(u),c=function(e,t,n){return n?l.a.set(e,t,{expires:n}):l.a.set(e,t)},s=function(e){return l.a.get(e)},p=function(e){return l.a.remove(e)},d=n("vMJZ"),m=n("YaEn"),f={state:{token:s("TOKEN_KEY")},mutations:{SET_TOKEN:function(e,t){e.token=t,c("TOKEN_KEY",t,30)},REMOVE_TOKEN:function(e){e.token=null,p("TOKEN_KEY")}},actions:{Authentication:function(e,t){(0,e.commit)("SET_TOKEN",t),d.a.verifyToken(t).then(function(e){var t=e.data;y.state.configuration.githubUsername==t.login?(i.a.prototype.$notify({title:"成功",message:"Token绑定成功",type:"success"}),m.b.push("/user/new"),y.dispatch("GetInfo")):i.a.prototype.$message({message:"Token用户不一致",type:"error"})}).catch(function(){})},Cancellation:function(e){(0,e.commit)("REMOVE_TOKEN"),i.a.prototype.$message({message:"Token取消绑定",type:"info"})}}},h={state:{avatarUrl:null,name:null,location:null,blog:null,followers:0,following:0},mutations:{SET_AVATAR_URL:function(e,t){e.avatarUrl=t},SET_NAME:function(e,t){e.name=t},SET_LOCATION:function(e,t){e.location=t},SET_BLOG:function(e,t){e.blog=t},SET_FOLLOWERS:function(e,t){e.followers=t},SET_FOLLOWING:function(e,t){e.following=t}},actions:{GetInfo:function(e){var t=e.commit;d.a.getInfo().then(function(e){var n=e.data;t("SET_AVATAR_URL",n.avatar_url),t("SET_NAME",n.name),t("SET_LOCATION",n.location),t("SET_BLOG",n.blog),t("SET_FOLLOWERS",n.followers),t("SET_FOLLOWING",n.following)})}}},g={state:{githubUsername:"",blogTitle:"",blogDescribe:"",htmlTitle:"",fontColor:"",useBackgroundImage:!1,backgroundColorLeft:"",backgroundColorRight:"",audioUrl:"",mini:!1,audioAutoPlay:!1,webSites:[]},mutations:{SET_CONFIGURATION:function(e,t){e.githubUsername=t.githubUsername||"shewlong",e.blogTitle=t.blogTitle||e.githubUsername,e.blogDescribe=t.blogDescribe||"欢迎来到"+e.githubUsername+"的个人博客。",e.htmlTitle=t.htmlTitle||e.githubUsername+"的博客",e.fontColor=t.fontColor||"#ffffff",e.useBackgroundImage=t.useBackgroundImage||!1,e.backgroundColorLeft=t.backgroundColorLeft||"#155799",e.backgroundColorRight=t.backgroundColorRight||"#159957",e.audioUrl=t.audioUrl||"",e.mini=t.mini||!1,e.audioAutoPlay=t.audioAutoPlay||!1,e.webSites=t.webSites||[]}},actions:{LocalReload:function(e,t){(0,e.commit)("SET_CONFIGURATION",t)},Init:function(e){var t=e.commit,n=void 0;(n=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP")).open("GET","../../../static/configuration.json",!1),n.send(),t("SET_CONFIGURATION",JSON.parse(n.responseText))}}},b={token:function(e){return e.token.token},githubUsername:function(e){return e.configuration.githubUsername},blogTitle:function(e){return e.configuration.blogTitle},blogDescribe:function(e){return e.configuration.blogDescribe},htmlTitle:function(e){return e.configuration.htmlTitle},fontColor:function(e){return e.configuration.fontColor},useBackgroundImage:function(e){return e.configuration.useBackgroundImage},backgroundColorLeft:function(e){return e.configuration.backgroundColorLeft},backgroundColorRight:function(e){return e.configuration.backgroundColorRight},audioUrl:function(e){return e.configuration.audioUrl},mini:function(e){return e.configuration.mini},audioAutoPlay:function(e){return e.configuration.audioAutoPlay},webSites:function(e){return e.configuration.webSites},avatarUrl:function(e){return e.user.avatarUrl},name:function(e){return e.user.name},location:function(e){return e.user.location},blog:function(e){return e.user.blog},followersTotal:function(e){return e.user.followers},followingTotal:function(e){return e.user.following}};i.a.use(a.a);var v=new a.a.Store({modules:{token:f,user:h,configuration:g},getters:b}),y=t.a=v},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("lRwf"),i=n.n(o),r=n("Dd8w"),a=n.n(r),u=n("SJI6"),l={name:"App",computed:a()({},Object(u.mapGetters)(["githubUsername","htmlTitle","token"])),created:function(){this.$store.dispatch("Init"),this.token&&this.$store.dispatch("GetInfo")},updated:function(){this.$setTitle(this.$route.meta.title);var e=this.$util.getWindowSize(),t=this.$route.path.split("/");"user"==t[1]&&e.height>1.2*e.width&&this.$router.push("/mobile/user/blog"),"mobile"==t[1]&&e.height<=1.2*e.width&&this.$router.push("/")}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},s=n("VU/8")(l,c,!1,null,null,null).exports,p={cutStr:function(e,t){try{return e.length>t?e.substring(0,t)+"...":e}catch(e){return""}},verifyEmail:function(e){if(null==e||void 0==e)return!1;return/^[0-9A-Za-z_]+@[0-9A-Za-z]+\.[A-Za-z]+/.test(e)},utcToLocal:function(e){var t=function(e){return e>=10?e:"0"+e},n=e.split(/[^0-9]/),o=new Date(n[0],n[1]-1,n[2],n[3],n[4],n[5]),i=new Date(o.getTime()+288e5);return t(i.getFullYear())+"-"+t(i.getMonth()+1)+"-"+t(i.getDate())+" "+t(i.getHours())+":"+t(i.getMinutes())+":"+t(i.getSeconds())},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)})},randomInt:function(e,t){var n=t-e;if(n<0)return e;var o=Math.random()*n+e;return o=parseInt(o,10)},fullScreen:function(){var e=document.documentElement;window.ActiveXObject?new ActiveXObject("WScript.Shell").SendKeys("{F11}"):e.requestFullScreen?e.requestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.webkitRequestFullScreen?e.webkitRequestFullScreen():e.mozRequestFullScreen&&e.mozRequestFullScreen()},fullExit:function(){var e=document.documentElement;window.ActiveXObject?new ActiveXObject("WScript.Shell").SendKeys("{F11}"):e.requestFullScreen?document.exitFullscreen():e.msRequestFullscreen?document.msExitFullscreen():e.webkitRequestFullScreen?document.webkitCancelFullScreen():e.mozRequestFullScreen&&document.mozCancelFullScreen()},parseHeaders:function(e){try{for(var t=e.link.split(","),n=0;n<t.length;n++){var o=t[n];if(!(o.indexOf('rel="last"')<0))for(var i=o.split(/[\?&]/),r=0;r<i.length;r++){var a=i[r].split("=");if("page"==a[0])return parseInt(a[1])}}}catch(e){}return 0},copy:function(e){var t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select();var n=void 0;try{n=document.execCommand("copy")}catch(e){}return document.body.removeChild(t),n},formatTime:function(e){var t=parseInt(e),n=parseInt(t/60),o=parseInt(t%60);return(n<10?"0":"")+parseInt(t/60)+":"+(o<10?"0":"")+parseInt(t%60)},getWindowSize:function(){var e={};return e.width=window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,e.height=window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight,e},addHttp:function(e){return(e.match(/https?:\/\//i)?"":"https://")+e}},d=n("YaEn"),m=n("OS1Z"),f=n.n(m),h=(n("pw1w"),n("Hl2I"),n("IcnI")),g=n("mM94");i.a.use(g.a),i.a.use(f.a),i.a.prototype.$markdown=function(e){return f.a.markdownIt.render(e)},i.a.prototype.$reload=function(e){e.$router.push("/empty"),e.$nextTick(function(){return e.$router.go(-1)})},i.a.prototype.$setTitle=function(e){document.title=e?h.a.state.configuration.htmlTitle+" - "+e:h.a.state.configuration.htmlTitle},i.a.prototype.$share=function(e){e?e=(window.location+"").split("#")[0]+"#"+e:e=window.location;p.copy(e)?i.a.prototype.$confirm("链接已复制,去分享给好友吧!!","分享",{showCancelButton:!1,showClose:!1,type:"success"}):i.a.prototype.$confirm("链接复制失败,可能因为浏览器不兼容","分享",{showCancelButton:!1,showClose:!1,type:"warning"})},d.b.beforeEach(function(e,t,n){h.a.state.token.token?n():(i.a.prototype.$toast("在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"),"/login"===e.path?n():n("login"))}),i.a.prototype.$mobileShare=function(e){e?e=(window.location+"").split("#")[0]+"#"+e:e=window.location;p.copy(e)?i.a.prototype.$dialog.alert({title:"分享",message:"链接已复制,去分享给好友吧!!"}):i.a.prototype.$dialog.alert({title:"分享",message:"链接复制失败,可能因为浏览器不兼容"})},i.a.prototype.$util=p,i.a.config.productionTip=!1,new i.a({el:"#app",router:d.b,store:h.a,components:{App:s},template:"<App/>"})},OMN4:function(e,t){e.exports=axios},SJI6:function(e,t){e.exports=Vuex},YaEn:function(e,t,n){"use strict";var o=n("lRwf"),i=n.n(o),r=n("pRNm"),a=n.n(r),u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"error404"},[n("div",{staticClass:"error404-body-con"},[e._m(0),e._v(" "),n("p",{staticClass:"error404-body-con-message"},[e._v("YOU  LOOK  LOST")]),e._v(" "),n("div",{staticClass:"error404-btn-con"},[n("el-button",{staticStyle:{width:"200px"},attrs:{size:"large",type:"text"},on:{click:e.goHome}},[e._v("返回首页")]),e._v(" "),n("el-button",{staticStyle:{width:"200px","margin-left":"40px"},attrs:{size:"large",type:"primary"},on:{click:e.backPage}},[e._v("返回上一页")])],1)])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"error404-body-con-title"},[this._v("4"),t("span",[t("i",{staticClass:"el-icon-question"})]),this._v("4")])}]};var l=n("VU/8")({name:"Error404",methods:{backPage:function(){this.$router.go(-1)},goHome:function(){this.$router.push("/")}}},u,!1,function(e){n("lItJ")},null,null).exports;n.d(t,"a",function(){return c}),i.a.use(a.a);var c=[{path:"/login",component:function(){return n.e(0).then(n.bind(null,"W2Q3"))},meta:{type:"user",icon:"el-icon-star-off",title:"登录"}},{path:"/test",component:function(){return n.e(0).then(n.bind(null,"k3tE"))},meta:{type:"user",icon:"el-icon-star-off",title:"测试页面"}},{path:"/user/new",redirect:"/user/new/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-star-off",title:"最新动态"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"mS7l"))},meta:{title:"最新动态"}}]},{path:"/user/social",redirect:"/user/social/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-mobile-phone",title:"社交圈"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"b0Ev"))},meta:{title:"社交圈"}},{path:"details/:name",component:function(){return n.e(0).then(n.bind(null,"RKFr"))},meta:{title:"用户资料"}}]},{path:"/user/blog",redirect:"/user/blog/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-edit-outline",title:"博客列表"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"o+S1"))},meta:{title:"博客列表"}},{path:"add",component:function(){return n.e(0).then(n.bind(null,"0XvF"))},meta:{title:"发表博客"}},{path:"edit/:id",component:function(){return n.e(0).then(n.bind(null,"GHqW"))},meta:{title:"编辑博客"}},{path:"details/:id",component:function(){return n.e(0).then(n.bind(null,"E+BO"))},meta:{title:"博客详情"}}]},{path:"/user/project",redirect:"/user/project/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-service",title:"开源项目"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"EN68"))},meta:{title:"项目列表"}},{path:"details/:name",component:function(){return n.e(0).then(n.bind(null,"XEwM"))},meta:{title:"项目详情"}}]},{path:"/user/readme",redirect:"/user/readme/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-document",title:"README.md"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"EOq1"))},meta:{title:"README.md"}}]},{path:"/user/configure",redirect:"/user/configure/main",component:function(){return n.e(0).then(n.bind(null,"AkUR"))},meta:{type:"user",icon:"el-icon-setting",title:"系统配置",LoginRequired:!0},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"fBQ6"))},meta:{title:"系统配置"}}]},{path:"/404",component:l},{path:"/",redirect:"/user/new"},{path:"*",redirect:"/404"},{path:"/mobile/user/blog",redirect:"/mobile/user/blog/main",component:function(){return n.e(0).then(n.bind(null,"uTFI"))},meta:{type:"mobile",icon:"edit",title:"博客"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"SiUS"))},meta:{scrollTop:!0}},{path:"details/:id",component:function(){return n.e(0).then(n.bind(null,"gdSt"))},meta:{scrollTop:!0}}]},{path:"/mobile/user/project",redirect:"/mobile/user/project/main",component:function(){return n.e(0).then(n.bind(null,"uTFI"))},meta:{type:"mobile",icon:"like-o",title:"项目"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"7tV6"))},meta:{scrollTop:!0}},{path:"details/:name",component:function(){return n.e(0).then(n.bind(null,"9xXS"))},meta:{scrollTop:!0}}]},{path:"/mobile/user/self",redirect:"/mobile/user/self/main",component:function(){return n.e(0).then(n.bind(null,"uTFI"))},meta:{type:"mobile",icon:"contact",title:"个人"},children:[{path:"main",component:function(){return n.e(0).then(n.bind(null,"hhhk"))},meta:{scrollTop:!0}}]}],s=new a.a({routes:c,scrollBehavior:function(e,t,n){if(e.meta.scrollTop)return{x:0,y:0}}});s.beforeEach(function(e,t,n){i.a.prototype.$setTitle(e.meta.title),n()});t.b=s},lItJ:function(e,t){},lRwf:function(e,t){e.exports=Vue},pRNm:function(e,t){e.exports=VueRouter},pw1w:function(e,t){},vLgD:function(e,t,n){"use strict";var o=n("//Fk"),i=n.n(o),r=n("OMN4"),a=n.n(r),u=n("lRwf"),l=n.n(u),c=n("IcnI"),s=a.a.create({baseURL:"https://api.github.com",timeout:15e3});s.interceptors.request.use(function(e){e.headers.Authorization="token "+c.a.state.token.token;var t=c.a.state.token.token;if(t){var n="?";e.url.indexOf("?")>=0&&(n="&"),e.url=e.url+n+"access_token="+t}return e},function(e){}),s.interceptors.response.use(function(e){e.data;return e},function(e){var t=void 0;switch(e.response.status){case 401:t="Token错误";break;default:t=e.response.data.message}return l.a.prototype.$message({message:t,type:"error"}),i.a.reject("error")}),t.a=s},vMJZ:function(e,t,n){"use strict";var o=n("vLgD"),i=n("IcnI");t.a={verifyToken:function(e){return Object(o.a)({url:"/user?access_token="+e})},getInfo:function(){var e=i.a.state.configuration.githubUsername;return Object(o.a)({url:"/users/"+e})},followers:function(e){var t=i.a.state.configuration.githubUsername;return Object(o.a)({url:"/users/"+t+"/followers?page="+e.page+"&per_page="+e.pageSize})},following:function(e){var t=i.a.state.configuration.githubUsername;return Object(o.a)({url:"/users/"+t+"/following?page="+e.page+"&per_page="+e.pageSize})},info:function(e){return Object(o.a)({url:"/users/"+e})}}}},["NHnr"]);