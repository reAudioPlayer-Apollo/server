import{F as C}from"./FullShelf.ce31f735.js";import{_ as y,o as d,c as p,a as e,t as w,n as h,r as u,w as _,v as m,d as f,e as k,p as T,b as D,f as v,F as I,g as b}from"./index.4c51d2c6.js";const x={name:"Theme",props:{name:String},methods:{selected(){return window.getCurrentTheme()==this.name},select(){window.setTheme(this.name),this.$emit("selected")}}},A=["src"];function F(s,t,i,r,n,o){return d(),p("div",{onClick:t[0]||(t[0]=(...c)=>o.select&&o.select(...c)),class:"wrapper"},[e("p",{class:h({selected:o.selected()})},w(i.name),3),e("img",{src:`/assets/img/themes/${i.name}.svg`,class:h({selected:o.selected()})},null,10,A)])}var B=y(x,[["render",F],["__scopeId","data-v-6c52691c"]]);const P={components:{Theme:B,FullShelf:C},name:"Preferences",methods:{updateThemes(){this.themeSelected=window.getCurrentTheme()},toggleFullSidebar(){this.$emit("toggleFullSidebar")},saveSpotify(){this.userData.tokens||(this.userData.tokens={}),this.userData.tokens.spotifyApiId=this.spotifyClientId,this.userData.tokens.spotifyApiSecret=this.spotifyClientSecret,fetch("/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.userData.data)}).then(s=>{console.log(s),this.$emit("close")})}},props:{userData:Object},watch:{userData(){var s,t,i,r;this.spotifyClientId=(t=(s=this.userData)==null?void 0:s.tokens)==null?void 0:t.spotifyApiId,this.spotifyClientSecret=(r=(i=this.userData)==null?void 0:i.tokens)==null?void 0:r.spotifyApiSecret}},data(){var i,r,n,o;const s=["night-jade","neon","default","light"],t=window.getCurrentTheme();return console.log(this.userData),{themes:s,themeSelected:t,spotifyClientId:(r=(i=this.userData)==null?void 0:i.tokens)==null?void 0:r.spotifyApiId,spotifyClientSecret:(o=(n=this.userData)==null?void 0:n.tokens)==null?void 0:o.spotifyApiSecret}}},a=s=>(T("data-v-6321a924"),s=s(),D(),s),V={class:"preferences"},j={class:"spotify"},E=a(()=>e("h2",null,"Spotify",-1)),M=a(()=>e("summary",null,"How to",-1)),N=v("1) Head over to the "),O=a(()=>e("p",null,"2) Create An App",-1)),H=a(()=>e("p",null,"3) Enter any name and any description",-1)),U=a(()=>e("p",null,[v("4) Edit the settings: set the redirect url to "),e("a",{href:"https://eu-apollo.herokuapp.com/collection/releases"},"https://eu-apollo.herokuapp.com/collection/releases")],-1)),z=a(()=>e("p",null,"5) Copy and enter the client id and secret into the corresponding input field",-1)),J={class:"wrapTogether"},L=a(()=>e("p",null,"Client ID: ",-1)),q={class:"wrapTogether"},G=a(()=>e("p",null,"Client Secret: ",-1)),K={class:"wrapTogether spaceBetween"},Q=a(()=>e("h2",null,"Themes",-1)),R={class:"mobileMenu showIfMobile"};function W(s,t,i,r,n,o){const c=u("theme"),g=u("full-shelf");return d(),p("div",V,[e("div",j,[E,e("details",null,[M,e("p",null,[N,e("a",{onClick:t[0]||(t[0]=()=>s.redirect("https://developer.spotify.com/dashboard/applications"))},"spotify developer dashboard")]),O,H,U,z]),e("div",J,[L,_(e("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=l=>n.spotifyClientId=l)},null,512),[[m,n.spotifyClientId]])]),e("div",q,[G,_(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>n.spotifyClientSecret=l)},null,512),[[m,n.spotifyClientSecret]])]),e("div",K,[e("button",{onClick:t[3]||(t[3]=(...l)=>o.saveSpotify&&o.saveSpotify(...l))},"save")])]),e("div",null,[Q,e("div",R,[e("span",{onClick:t[4]||(t[4]=(...l)=>o.toggleFullSidebar&&o.toggleFullSidebar(...l)),class:"material-symbols-rounded"},"menu")]),(d(),f(g,{heading:"",key:n.themeSelected},{default:k(()=>[(d(!0),p(I,null,b(n.themes,(l,S)=>(d(),f(c,{onSelected:o.updateThemes,key:S,name:l},null,8,["onSelected","name"]))),128))]),_:1}))])])}var Z=y(P,[["render",W],["__scopeId","data-v-6321a924"]]);export{Z as default};
