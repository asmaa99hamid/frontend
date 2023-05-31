"use strict";(self["webpackChunkOsboha180"]=self["webpackChunkOsboha180"]||[]).push([[5891],{85117:function(t,e,a){var s=a(66330),r=TypeError;t.exports=function(t,e){if(!delete t[e])throw r("Cannot delete property "+s(e)+" of "+s(t))}},30541:function(t,e,a){var s=a(82109),r=a(47908),i=a(26244),n=a(83658),o=a(85117),c=a(7207),l=1!==[].unshift(0),d=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(t){return t instanceof TypeError}},u=l||!d();s({target:"Array",proto:!0,arity:1,forced:u},{unshift:function(t){var e=r(this),a=i(e),s=arguments.length;if(s){c(a+s);var l=a;while(l--){var d=l+s;l in e?e[d]=e[l]:o(e,d)}for(var u=0;u<s;u++)e[u]=arguments[u]}return n(e,a+s)}})},22658:function(t,e,a){var s=a(66252),r=a(24150),i=a(79940);class n{async createGroup(t){try{const e=await r.hi.post("/group/create",t,{headers:{"Content-type":"multipart/form-data"}});return e.data.data}catch(e){(0,s.S3)(e)}}async getAll(){try{const t=await r.hi.get("/group");return await t.data}catch(t){return t}}async getById(t){try{const e=await r.hi.get(`group/show/${t}`);return e.data.data}catch(e){return e}}async getBooks(t){try{const e=await r.hi.get(`group/books/${t}`);return e.data.data}catch(e){(0,s.S3)(e)}}async getAllGroupExceptions(t){try{const e=await r.hi.get(`group/group-exceptions/${t}`);return e.data.data}catch(e){return e}}async exceptionsFilter(t,e){try{const a=await r.hi.get(`group/exceptions-filter/${t}/${e}`);return a.data.data}catch(a){return a}}async BasicMarksView(t){try{const e=await r.hi.get(`group/basic-mark-view/${t}`);return e.data.data}catch(e){return e}}async AllAchievements(t,e){try{const a=await r.hi.get(`group/all-achievements/${t}/${e}`);return a.data.data}catch(a){return a}}async AchievementAsPages(t,e){try{const a=await r.hi.get(`group/achievement-as-pages/${t}/${e}`);return a.data.data}catch(a){return a}}async searchForAmbassadorAchievement(t,e,a){try{const s=await r.hi.get(`group/search-for-ambassador-achievement/${t}/${e}/${a}`);return s.data.data}catch(s){return s}}async searchForAmbassador(t,e){try{const a=await r.hi.get(`group/search-for-ambassador/${t}/${e}`);return a.data.data}catch(a){return a}}async createLeaderRequest(t){try{const e=await r.hi.post("/group/create-leader-request",t,{headers:{"Content-type":"multipart/form-data"}});return e.data.data}catch(e){return e}}async lastLeaderRequest(t){try{const e=await r.hi.get(`group/last-leader-request/${t}`);return e.data.data}catch(e){return e}}async deleteById(t){try{return await r.hi["delete"](`/group/delete/${t}`)}catch(e){return e}}async update(t){}async getGroupByType(t){try{const e=await r.hi.post("/group/GroupByType",{type_id:t});return e.data}catch(e){return e}}async userGroups(){try{const t=await r.hi.get("/group/user-groups");return t.data.data}catch(t){return t}}async statistics(t){try{const e=await r.hi.get(`group/statistics/${t}`);return e.data.data}catch(e){(0,i.F)(e,"statistics")}}async thesesAndScreensByWeek(t,e){try{const a=await r.hi.get(`group/theses-and-screens-by-week/${t}/${e}`);return a.data.data}catch(a){(0,s.S3)(a)}}async monthAchievement(t,e){try{const a=await r.hi.get(`group/month-achievement/${t}/${e}`);return a.data.data}catch(a){(0,s.S3)(a)}}}e["Z"]=new n},79940:function(t,e,a){a.d(e,{F:function(){return r}});a(57658);var s=a(1120);function r(t,e=""){throw console.log(`[ERROR] ${e} =>`,t.response.data),404===t.response.data.statusCode?s.Z.push({name:"NotFound"}):403===t.response.data.statusCode&&s.Z.push({name:"NotAuthorized"}),t}},96596:function(t,e,a){a.d(e,{Z:function(){return d}});var s=a(66252);function r(t,e,a,r,i,n){const o=(0,s.up)("Pie");return(0,s.wg)(),(0,s.j4)(o,{data:a.data,options:a.options},null,8,["data","options"])}var i=a(32005),n=a(65750);n.kL.register(n.Dx,n.u,n.De,n.ZL,n.uw,n.f$,n.qi);var o={name:"PieChart",props:["data","options"],components:{Pie:i.by},data(){return{}}},c=a(83744);const l=(0,c.Z)(o,[["render",r]]);var d=l},95891:function(t,e,a){a.r(e),a.d(e,{default:function(){return Jt}});var s=a(66252);const r=(0,s._)("h2",null,"فريق ABC احصائيات",-1);function i(t,e,a,i,n,o){const c=(0,s.up)("Marks"),l=(0,s.up)("MostRead"),d=(0,s.up)("Achievement"),u=(0,s.up)("ThseseAndQuotes"),h=(0,s.up)("GroupMonth"),m=(0,s.up)("iq-card");return n.statistics?((0,s.wg)(),(0,s.j4)(m,{key:0},{body:(0,s.w5)((()=>[r,(0,s.Wm)(c,{statistics:n.statistics.total_statistics,week_title:this.statistics.week.title},null,8,["statistics","week_title"]),n.statistics.most_read?((0,s.wg)(),(0,s.j4)(l,{key:0,most_read:n.statistics.most_read},null,8,["most_read"])):(0,s.kq)("",!0),o.noStatistics?(0,s.kq)("",!0):((0,s.wg)(),(0,s.j4)(d,{key:1,total:this.statistics.total},null,8,["total"])),(0,s.Wm)(u,{total_theses:n.statistics.total_statistics.total_thesis??0,total_screenshot:n.statistics.total_statistics.total_screenshot??0},null,8,["total_theses","total_screenshot"]),(0,s.Wm)(h,{monthAchievement:n.statistics.month_achievement,monthTitle:n.statistics.month_achievement_title},null,8,["monthAchievement","monthTitle"])])),_:1})):(0,s.kq)("",!0)}var n=a(3577);const o={class:"row"},c={class:"col-lg-12 col-md-12"},l={class:"card"},d={class:"card-header"},u={class:"header-title"},h={class:"card-title"},m={class:"card-body"},_={class:"mb-3"},p={class:"d-flex justify-content-between mt-2 text-dark"},v=(0,s._)("h6",null,"المعدل العام",-1),g={class:"mb-3"},w={class:"d-flex justify-content-between mt-2 text-dark"},y=(0,s._)("h6",null,"إنجاز القراءة",-1),f={class:"mb-3"},k={class:"d-flex justify-content-between mt-2 text-dark"},b=(0,s._)("h6",null,"إنجاز الكتابة",-1),A={class:"mb-3"},x={class:"d-flex justify-content-between mt-2 text-dark"},$=(0,s._)("h6",null,"اعرف مشروعك",-1),j={class:"row"},D={class:"col-6"},C={class:"text-dark d-flex flex-column align-items-center"},Z=(0,s._)("h6",{class:"d-inline-flex"},[(0,s.Uk)(" عدد الصفحات المقروءة "),(0,s._)("span",{class:"material-symbols-outlined me-2"}," auto_stories ")],-1),F={class:"col-6"},q={class:"text-dark d-flex flex-column align-items-center"},W=(0,s._)("h6",{class:"d-inline-flex"},[(0,s.Uk)(" عدد الأطروحات المكتوبة "),(0,s._)("span",{class:"material-symbols-outlined me-2"}," draw ")],-1);function M(t,e,a,r,i,M){const S=(0,s.up)("progressbar"),z=(0,s.up)("b-progress");return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",c,[(0,s._)("div",l,[(0,s._)("div",d,[(0,s._)("div",u,[(0,s._)("h4",h,"انجاز الأسبوع "+(0,n.zw)(a.week_title),1)])]),(0,s._)("div",m,[(0,s._)("div",_,[(0,s._)("div",p,[v,(0,s._)("small",null,(0,n.zw)(M.getAverage(a.statistics.team_out_of_100))+"%",1)]),(0,s.Wm)(z,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{className:"bg-primary",style:(0,n.j5)({width:M.getAverage(a.statistics.team_out_of_100)+"%"}),"aria-valuenow":M.getAverage(a.statistics.team_out_of_100),"aria-valuemin":0,"aria-valuemax":100},null,8,["style","aria-valuenow"])])),_:1})]),(0,s._)("div",g,[(0,s._)("div",w,[y,(0,s._)("small",null,(0,n.zw)(M.getAverage(a.statistics.team_reading_mark))+" / 50",1)]),(0,s.Wm)(z,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{className:"bg-primary",style:(0,n.j5)({width:M.getAverage(a.statistics.team_reading_mark)/50*100+"%"}),"aria-valuenow":M.getAverage(a.statistics.team_reading_mark),"aria-valuemin":0,"aria-valuemax":50},null,8,["style","aria-valuenow"])])),_:1})]),(0,s._)("div",f,[(0,s._)("div",k,[b,(0,s._)("small",null,(0,n.zw)(M.getAverage(a.statistics.team_writing_mark))+" / 40",1)]),(0,s.Wm)(z,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{className:"bg-primary",style:(0,n.j5)({width:M.getAverage(a.statistics.team_writing_mark)/40*100+"%"}),"aria-valuenow":M.getAverage(a.statistics.team_writing_mark),"aria-valuemin":0,"aria-valuemax":40},null,8,["style","aria-valuenow"])])),_:1})]),(0,s._)("div",A,[(0,s._)("div",x,[$,(0,s._)("small",null,(0,n.zw)(M.getAverage(a.statistics.team_support_mark))+" / 10",1)]),(0,s.Wm)(z,{class:"shadow-none w-100 mt-2",style:{height:"6px"}},{default:(0,s.w5)((()=>[(0,s.Wm)(S,{className:"bg-primary",style:(0,n.j5)({width:M.getAverage(a.statistics.team_support_mark)/10*100+"%"}),"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100"},null,8,["style"])])),_:1})]),(0,s._)("div",j,[(0,s._)("div",D,[(0,s._)("div",C,[Z,(0,s._)("h2",null,(0,n.zw)(t.formatNumber(a.statistics.total_pages)),1)])]),(0,s._)("div",F,[(0,s._)("div",q,[W,(0,s._)("h2",null,(0,n.zw)(t.formatNumber(a.statistics.total_thesis)),1)])])])])])])])}var S=a(8209),z={name:"GroupMarks",props:{statistics:{type:[Object],required:!0},week_title:{type:[String],required:!0}},methods:{...S.Z,getAverage(t){return Math.round(t).toFixed(2)}}},G=a(83744);const O=(0,G.Z)(z,[["render",M]]);var T=O;const B={class:"row"},L={class:"col-lg-12 col-md-12"},R={class:"card"},N=(0,s._)("div",{class:"card-header"},[(0,s._)("div",{class:"header-title"},[(0,s._)("h4",{class:"card-title"},"الأكثر قراءة")])],-1),P={class:"card-body"},E={class:"row d-flex justify-content-center mb-2"},I={class:"col-6 m-auto d-flex justify-content-end"},U={class:"col-6 m-auto"},Q={style:{direction:"rtl"}};function V(t,e,a,r,i,o){const c=(0,s.up)("BaseAvatar"),l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",B,[(0,s._)("div",L,[(0,s._)("div",R,[N,(0,s._)("div",P,[(0,s._)("div",E,[(0,s._)("div",I,[(0,s.Wm)(c,{profileImg:a.most_read.user.user_profile.profile_picture,profile_id:a.most_read.user.user_profile.id,title:a.most_read.user.name,gender:a.most_read.user.gender,avatarClass:"avatar-120 rounded-circle"},null,8,["profileImg","profile_id","title","gender"])]),(0,s._)("div",U,[(0,s.Wm)(l,{to:{name:"user.profile",params:{user_id:a.most_read.user.id}}},{default:(0,s.w5)((()=>[(0,s._)("h3",null,(0,n.zw)(a.most_read.user.name),1)])),_:1},8,["to"]),(0,s._)("h5",Q,(0,n.zw)(t.formatNumber(a.most_read.max_total_pages))+" صفحة ",1)])])])])])])}var H={name:"MostRead",props:{most_read:{type:[Object],required:!0}},methods:{...S.Z}};const J=(0,G.Z)(H,[["render",V]]);var K=J;const X={class:"row"},Y={class:"col-lg-12 col-md-12"},tt={class:"card"},et={class:"card-body"},at={class:"container mt-3 d-flex align-items-center justify-content-center"};function st(t,e,a,r,i,n){const o=(0,s.up)("Doughnut");return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("div",Y,[(0,s._)("div",tt,[(0,s._)("div",et,[(0,s._)("div",at,[(0,s.Wm)(o,{id:"my-chart-id",options:i.chartOptions,data:i.chartData},null,8,["options","data"])])])])])])}var rt=a(32005),it=a(65750);it.kL.register(it.Dx,it.u,it.De,it.ZL,it.uw,it.f$,it.qi);var nt={name:"Marks",created(){this.chartData.datasets[0].data[0]=this.total.out_of_100,this.chartData.datasets[0].data[1]=this.total.out_of_90,this.chartData.datasets[0].data[2]=this.total.zero,this.chartData.datasets[0].data[3]=this.total.freezed,this.chartData.datasets[0].data[4]=this.total.others},components:{Doughnut:rt.$I},props:{total:{type:[Object],required:!0}},data(){return{chartData:{labels:["100","90","صفر","تجميد","غير ذلك"],datasets:[{label:"عدد السفراء",data:[],backgroundColor:["#22803f","#192f36","#831018","#D0ECFF","#CAE0CD"],hoverOffset:4}]},chartOptions:{responsive:!0}}}};const ot=(0,G.Z)(nt,[["render",st]]);var ct=ot,lt=a(49963);const dt={class:"col-12"},ut={class:"card card-block card-stretch card-height"},ht={class:"card-header"},mt={class:"d-flex justify-content-between flex-wrap"},_t=(0,s._)("h4",{class:"card-title"},"الأطروحات والاقتباسات",-1),pt={class:"dropdown w-100"},vt=(0,s._)("option",{class:"dropdown-item",value:"current",selected:""}," هذا الأسبوع ",-1),gt=(0,s._)("option",{class:"dropdown-item",value:"previous"}," الاسبوع السابق ",-1),wt=(0,s._)("option",{class:"dropdown-item",value:"in_a_month"}," خلال الشهر ",-1),yt=[vt,gt,wt],ft={class:"card-body"},kt={key:1,class:"d-flex justify-content-center align-items-center"},bt={class:"text-muted"},At={key:0},xt={key:1};function $t(t,e,a,r,i,n){const o=(0,s.up)("PieChart");return(0,s.wg)(),(0,s.iD)("div",dt,[(0,s._)("div",ut,[(0,s._)("div",ht,[(0,s._)("div",mt,[_t,(0,s._)("div",pt,[(0,s.wy)((0,s._)("select",{class:"form-select",onChange:e[0]||(e[0]=t=>n.thesesAndScreensByWeek()),"onUpdate:modelValue":e[1]||(e[1]=t=>i.weekFilter=t)},yt,544),[[lt.bM,i.weekFilter]])])])]),(0,s._)("div",ft,[i.theses||i.screenshots?((0,s.wg)(),(0,s.j4)(o,{key:0,data:n.pie_data,options:i.pie_options},null,8,["data","options"])):((0,s.wg)(),(0,s.iD)("div",kt,[(0,s._)("h4",bt,[(0,s.Uk)(" لا يوجد أطروحات لهذا "),"in_a_month"==i.weekFilter?((0,s.wg)(),(0,s.iD)("span",At,"الشهر")):((0,s.wg)(),(0,s.iD)("span",xt,"الأسبوع"))])]))])])])}var jt=a(96596),Dt=a(22658),Ct={name:"Thsese And Quotes Statistics",created(){this.theses=this.total_theses,this.screenshots=this.total_screenshot},props:{total_theses:{required:!0},total_screenshot:{required:!0}},components:{PieChart:jt.Z},data(){return{theses:0,screenshots:0,weekFilter:"current",pie_options:{responsive:!0,maintainAspectRatio:!1}}},methods:{async thesesAndScreensByWeek(){try{const t=await Dt.Z.thesesAndScreensByWeek(this.$route.params.group_id,this.weekFilter);this.theses=t.total_thesis,this.screenshots=t.total_screenshot}catch(t){console.log("[Group ThseseAndQuotes] error",t)}}},computed:{pie_data(){let t={labels:["الأطروحات","الاقتباسات"],datasets:[{backgroundColor:["#278036","#1D1A55"],data:[]}]};return this.theses&&(t.datasets[0].data[0]=this.theses),this.screenshots&&(t.datasets[0].data[1]=this.screenshots),t}}};const Zt=(0,G.Z)(Ct,[["render",$t]]);var Ft=Zt;const qt={class:"col-12"},Wt={class:"card card-block card-stretch card-height"},Mt={class:"card-header"},St={class:"d-flex justify-content-between flex-wrap"},zt=(0,s._)("h4",{class:"card-title"},"احصائيات حسب الشهر",-1),Gt={class:"dropdown w-100"},Ot=(0,s._)("option",{class:"dropdown-item",value:"current",selected:""}," هذا الشهر ",-1),Tt=(0,s._)("option",{class:"dropdown-item",value:"previous"}," الشهر السابق ",-1),Bt=[Ot,Tt],Lt={class:"card-body"},Rt={key:1,class:"d-flex justify-content-center align-items-center"},Nt=(0,s._)("h4",{class:"text-muted"},"لا يوجد احصائيات لهذا الشهر",-1),Pt=[Nt];function Et(t,e,a,r,i,n){const o=(0,s.up)("LineChartGenerator");return(0,s.wg)(),(0,s.iD)("div",qt,[(0,s._)("div",Wt,[(0,s._)("div",Mt,[(0,s._)("div",St,[zt,(0,s._)("div",Gt,[(0,s.wy)((0,s._)("select",{class:"form-select",onChange:e[0]||(e[0]=t=>n.userMonthAchievement()),"onUpdate:modelValue":e[1]||(e[1]=t=>i.monthFilter=t)},Bt,544),[[lt.bM,i.monthFilter]])])])]),(0,s._)("div",Lt,[i.month_achievement?((0,s.wg)(),(0,s.j4)(o,{key:0,data:n.line_data,options:i.line_option},null,8,["data","options"])):((0,s.wg)(),(0,s.iD)("div",Rt,Pt))])])])}a(30541);it.kL.register(it.Dx,it.u,it.De,it.ZL,it.uw,it.f$,it.qi,it.od,it.jn);var It={name:"GroupMonthStatistics",created(){this.month_achievement=this.monthAchievement,this.month_title=this.monthTitle},props:{monthAchievement:{type:[Object],default:null},monthTitle:{type:[String],required:!0}},components:{LineChartGenerator:rt.x1},data(){return{month_achievement:[],month_title:"شهر",monthFilter:"current",line_option:{responsive:!0,maintainAspectRatio:!1}}},methods:{async userMonthAchievement(){try{const t=await Dt.Z.monthAchievement(this.$route.params.group_id,this.monthFilter);this.month_title=t.month_achievement_title,this.month_achievement=t.month_achievement}catch(t){console.log(t),404==t.response.data.statusCode&&(S.Z.toggleToast("لا يوجد احصائيات لهذا الشهر","error"),this.monthFilter="current")}}},computed:{formated_month_title(){let t=this.month_title.split(" ");return t[t.length-1]},line_data(){let t={labels:[" ","الأول","الثاني","الثالث","الرابع","الخامس"],datasets:[{label:"يناير",data:[],fill:!1,borderColor:"#1D1A55",tension:.1}]};return t.labels=Object.keys(this.month_achievement),t.datasets[0].data=Object.values(this.month_achievement),t.datasets[0].label=this.formated_month_title,t.labels.unshift(""),t.datasets[0].data.unshift(50),t}}};const Ut=(0,G.Z)(It,[["render",Et]]);var Qt=Ut,Vt={name:"GroupStatistics",components:{Marks:T,MostRead:K,Achievement:ct,ThseseAndQuotes:Ft,GroupMonth:Qt},async created(){this.statistics=await Dt.Z.statistics(this.$route.params.group_id)},data(){return{statistics:null}},computed:{noStatistics(){return!(this.statistics.total.out_of_100||this.statistics.total.out_of_90||this.statistics.total.zero||this.statistics.total.freezed||this.statistics.total.others)}},methods:{}};const Ht=(0,G.Z)(Vt,[["render",i]]);var Jt=Ht}}]);
//# sourceMappingURL=5891.e49a6d69.js.map