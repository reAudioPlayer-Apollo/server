import{F as B}from"./FullShelf.fa533808.js";import{_ as w,o as r,c as d,a as l,t as h,g as b,r as _,i as y,n as C,p as T,b as M,j as F,w as S,k as f,v as j,F as A,e as k,l as D,d as g,f as R}from"./index.d764ccfd.js";import{F as E}from"./FindSources.7fa996ed.js";import{C as H}from"./CollectionHeader.76ec3698.js";const U={name:"MiniPlayer",props:{src:String,artist:String,title:String,display:{type:Boolean,default:!0}},data(){return{playing:!1}},methods:{get(t){fetch(`/api/${t}`)},pause(){this.get("pause")},play(){this.get("play")},playPause(){const t=new CustomEvent("player.play",{detail:{title:this.title,artist:this.artist,source:this.src}});window.dispatchEvent(t)}}},x={class:"miniPlayer"},J=["src"];function q(t,e,s,c,o,i){return r(),d("div",x,[l("audio",{src:s.src,ref:"player"},null,8,J),s.display?(r(),d("span",{key:0,onClick:e[0]||(e[0]=(...p)=>i.playPause&&i.playPause(...p)),class:"material-symbols-rounded circle"},h(o.playing?"pause":"play_arrow"),1)):b("",!0)])}var z=w(U,[["render",q],["__scopeId","data-v-627e71ce"]]);const L={components:{MiniPlayer:z},name:"AlbumEntry",props:{index:Number,id:Number,source:String,artist:{type:String,default:"N/A"},title:{type:String,default:"N/A"},added:Boolean,preview:String},data(){return{highlighted:!1,favourited:this.favourite,isAutoPlaylist:this.$route.path=="/collection/tracks",hovering:!1}},methods:{remove(){fetch("/api/remove",{method:"POST",body:JSON.stringify({playlistId:Number(this.$route.params.id),songId:this.id})})},onselect(){this.highlighted=!this.highlighted},playAt(){this.$emit("edit",this.index)},add(){console.log("add"),this.$emit("add",this.index)}},watch:{added(){console.log("change"),this.$refs.add.innerHTML=this.added?"done":"add"}}},Y={class:"track"},G={class:"trackwrapper"};function K(t,e,s,c,o,i){const p=_("mini-player");return r(),d("div",{onDblclick:e[2]||(e[2]=()=>{i.playAt(),i.onselect()}),onClick:e[3]||(e[3]=(...u)=>i.onselect&&i.onselect(...u)),onMouseover:e[4]||(e[4]=u=>o.hovering=!0),onMouseleave:e[5]||(e[5]=u=>o.hovering=!1),class:C(["albumEntry",{selected:o.highlighted}])},[y(p,{class:C(["miniPlayer",{hidden:!o.hovering}]),title:s.title,artist:s.artist,src:s.source},null,8,["class","title","artist","src"]),o.hovering?b("",!0):(r(),d("span",{key:0,onClick:e[0]||(e[0]=(...u)=>t.edit&&t.edit(...u)),class:"id"},h(s.index+1),1)),l("div",Y,[l("div",G,[l("span",{class:C(["title",{playing:t.playing}])},h(s.title),3),l("span",{class:C(["artist",{playing:t.playing}])},h(s.artist),3)])]),l("span",{onClick:e[1]||(e[1]=(...u)=>i.add&&i.add(...u)),class:"material-symbols-rounded edit",ref:"add"},"add",512)],34)}var Q=w(L,[["render",K],["__scopeId","data-v-9d557f56"]]);const W={name:"AlbumHeader"},O=t=>(T("data-v-1a51c33d"),t=t(),M(),t),X={class:"gridHeader"},Z=O(()=>l("span",{class:"id"},"#",-1)),$=O(()=>l("span",{class:"title"},"Title",-1)),ee=[Z,$];function te(t,e,s,c,o,i){return r(),d("div",X,ee)}var se=w(W,[["render",te],["__scopeId","data-v-1a51c33d"]]);const le={name:"AddAlbumToPlaylist",components:{FindSources:E,AlbumEntry:Q,AlbumHeader:se},props:{cover:String,artist:String,title:String,href:String,id:String,userData:Object},data(){return{showModal:!1,selectedPlaylist:-1,playlist:[],editSong:!1}},computed:{playlists(){var t,e;return(((e=(t=this.userData)==null?void 0:t.data)==null?void 0:e.playlists)||[]).map(s=>s==null?void 0:s.name)}},methods:{share(){window.open(this.href)},preview(){console.log(this.href);const t=new CustomEvent("player.play",{detail:{artist:this.artist,title:this.title,source:this.href}});window.dispatchEvent(t)},close(){this.showModal=!1,this.$emit("close")},openInNewTab(){window.open(this.cover?this.cover:"/assets/img/music_placeholder.png")},addAll(){for(let t=0;t<this.playlist.length;t++)this.add(t)},add(t){const e=this.playlist[t],s=this.playlists.findIndex(c=>c==this.selectedPlaylist);if(console.log(e,s),s<0){alert("no playlist selected");return}this.userData.data.playlists[s].songs.push({source:e.src,title:e.title,artist:e.artists.join(", "),album:this.title,cover:this.cover,duration:"-1:59"}),e.added=!0}},watch:{showModal(){!this.showModal||fetch("/spotify/album",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accessToken:window.location.hash.split("=")[1],albumId:this.id})}).then(t=>t.json()).then(t=>{this.playlist.length=0,this.playlist.push(...t)})}}},m=t=>(T("data-v-6a6ec63e"),t=t(),M(),t),ae={class:"wrapper"},ie={class:"header"},oe=m(()=>l("h3",null,"Add album",-1)),re=m(()=>l("span",{class:"material-symbols-rounded"}," close ",-1)),ne=[re],de=m(()=>l("h4",null,"To Playlist",-1)),ue=m(()=>l("br",null,null,-1)),ce={key:0},_e=m(()=>l("h4",null,"Source",-1)),he={class:"content"},pe=m(()=>l("h4",null,"Title",-1)),me={class:"content"},ve=m(()=>l("h4",null,"Album",-1)),ye={class:"content"},fe=m(()=>l("h4",null,"Artist",-1)),ge={class:"content"},be=m(()=>l("h4",null,"Cover",-1)),we={class:"content"},Se=["src"],De={class:"confirm"},Ae={key:1},ke=["src"],Ce={class:"details"},Ie={class:"detailswrapper"},Pe=R("Album"),Ne=m(()=>l("hr",null,null,-1)),Te=m(()=>l("hr",null,null,-1)),Me={class:"confirm"};function Oe(t,e,s,c,o,i){const p=_("FindSources"),u=_("h7"),v=_("album-header"),I=_("album-entry"),P=_("vue-final-modal"),n=F("observe-visibility");return r(),d("div",null,[y(P,{onClick:t.hideFindSourcesCtx,modelValue:o.showModal,"onUpdate:modelValue":e[14]||(e[14]=a=>o.showModal=a),classes:"modal-containerr","content-class":"addAlbumToPlaylistPopup"},{default:S(()=>[l("div",ae,[l("div",ie,[oe,l("button",{class:"modal-close",onClick:e[0]||(e[0]=(...a)=>i.close&&i.close(...a))},ne)]),de,f(l("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>o.selectedPlaylist=a)},[(r(!0),d(A,null,k(i.playlists,a=>(r(),d("option",{key:a},h(a),1))),128))],512),[[j,o.selectedPlaylist]]),ue,o.editSong?(r(),d("div",ce,[_e,y(p,{ref:"findSources",title:s.title,artist:s.artist},{default:S(()=>[l("div",he,[f(l("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=a=>t.dSource=a),ref:"source"},null,512),[[D,t.dSource]]),l("span",{class:"material-symbols-rounded more",ref:"sourceMore",onClick:e[3]||(e[3]=(...a)=>t.opencontextmenu&&t.opencontextmenu(...a))},"more_vert",512)])]),_:1},8,["title","artist"]),pe,l("div",me,[f(l("input",{"onUpdate:modelValue":e[4]||(e[4]=a=>t.dTitle=a),type:"text"},null,512),[[D,t.dTitle]])]),ve,l("div",ye,[f(l("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>t.dAlbum=a),type:"text",ref:"album"},null,512),[[D,t.dAlbum]])]),fe,l("div",ge,[f(l("input",{"onUpdate:modelValue":e[6]||(e[6]=a=>t.dArtist=a),type:"text"},null,512),[[D,t.dArtist]])]),be,l("div",we,[f(l("input",{type:"text",class:"addSong cover","onUpdate:modelValue":e[7]||(e[7]=a=>t.dCover=a),ref:"cover"},null,512),[[D,t.dCover]]),l("img",{onClick:e[8]||(e[8]=(...a)=>i.openInNewTab&&i.openInNewTab(...a)),class:"addSong cover",src:t.dCover?t.dCover:"/assets/img/music_placeholder.png"},null,8,Se)]),l("div",De,[l("button",{onClick:e[9]||(e[9]=(...a)=>i.add&&i.add(...a)),class:"negative"},"Add")])])):(r(),d("div",Ae,[f((r(),d("div",{class:"padding-20 playlisteditor",onClick:e[12]||(e[12]=(...a)=>t.editPlaylist&&t.editPlaylist(...a))},[l("img",{class:"cover",src:s.cover},null,8,ke),l("div",Ce,[l("div",Ie,[y(u,null,{default:S(()=>[Pe]),_:1}),l("span",{class:"material-symbols-rounded share",onClick:e[10]||(e[10]=(...a)=>i.share&&i.share(...a))},"share"),l("span",{class:"material-symbols-rounded share fill",onClick:e[11]||(e[11]=(...a)=>i.preview&&i.preview(...a))},"play_arrow")]),l("h1",null,h(s.title),1),l("h5",null,h(s.artist),1)])])),[[n,t.headerVisibilityChanged]]),Ne,y(v),Te,(r(!0),d(A,null,k(o.playlist,(a,N)=>(r(),g(I,{onAdd:i.add,key:N,added:a.added,index:N,cover:a.cover,artist:a.artists.join(", "),title:a.title,source:a.src,preview:this.href},null,8,["onAdd","added","index","cover","artist","title","source","preview"]))),128))])),l("div",Me,[l("button",{onClick:e[13]||(e[13]=(...a)=>i.addAll&&i.addAll(...a)),class:"negative"},"Add All")])])]),_:1},8,["onClick","modelValue"])])}var V=w(le,[["render",Oe],["__scopeId","data-v-6a6ec63e"]]);const Ve={name:"ReleaseItem",components:{AddAlbumToPlaylist:V},methods:{redirect(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String,userData:Object}},Be={class:"wrapper"},Fe=["src"],je={key:0,class:"note"};function Re(t,e,s,c,o,i){var u;const p=_("add-album-to-playlist");return r(),d("div",Be,[y(p,{id:(u=this.href)==null?void 0:u.replace("https://open.spotify.com/album/",""),userData:s.userData,cover:s.cover,title:s.title,artist:s.artist,href:s.href,ref:"addAlbum"},null,8,["id","userData","cover","title","artist","href"]),l("div",{class:"item",onClick:e[0]||(e[0]=(...v)=>i.redirect&&i.redirect(...v))},[l("img",{src:s.cover},null,8,Fe),l("h4",null,h(s.title),1),l("p",null,h(s.artist),1),s.releaseDate?(r(),d("p",je,"Released on "+h(s.releaseDate),1)):b("",!0)])])}var Ee=w(Ve,[["render",Re],["__scopeId","data-v-41d778a4"]]);const He={name:"ReleaseItemBig",components:{AddAlbumToPlaylist:V},methods:{redirect(){this.$refs.addAlbum.showModal=!0}},props:{cover:String,title:String,artist:String,href:String,releaseDate:String}},Ue={class:"itemBig"},xe=["src"],Je={class:"wrapper"},qe={key:0,class:"note"};function ze(t,e,s,c,o,i){var u;const p=_("add-album-to-playlist");return r(),d("div",Ue,[y(p,{id:(u=this.href)==null?void 0:u.replace("https://open.spotify.com/album/",""),userData:t.userData,cover:s.cover,title:s.title,artist:s.artist,href:s.href,ref:"addAlbum"},null,8,["id","userData","cover","title","artist","href"]),l("div",{class:"item",onClick:e[0]||(e[0]=(...v)=>i.redirect&&i.redirect(...v))},[l("img",{src:s.cover},null,8,xe),l("div",Je,[l("h4",null,h(s.title),1),l("p",null,h(s.artist),1),s.releaseDate?(r(),d("p",qe,"Released on "+h(s.releaseDate),1)):b("",!0)])])])}var Le=w(He,[["render",ze],["__scopeId","data-v-211925a8"]]);const Ye={components:{CollectionHeader:H,FullShelf:B,Item:Ee,ItemBig:Le},name:"Releases",props:{authorised:Boolean,userData:Object},data(){return{outSoon:[],outNow:[],outAlready:[]}},methods:{load(t){const e=new Date;for(const s of t){const c=new Date(s.releaseDate);e<c?this.outSoon.push(s):e.getMonth()==c.getMonth()&&e.getDate()==c.getDate()&&e.getFullYear()==c.getFullYear()?this.outNow.push(s):this.outAlready.push(s)}}},mounted(){var s,c;const t="apollo.releaseCache",e=window.localStorage.getItem(t);if(!window.location.hash&&((s=this.userData.data)==null?void 0:s.spotifyApiId)&&((c=this.userData.data)==null?void 0:c.spotifyApiSecret)){const o=window.location.href,i="user-follow-read playlist-modify-public";window.location.href=`https://accounts.spotify.com/authorize?client_id=${this.userData.data.spotifyApiId}&redirect_uri=${o.replace("#","%23")}&scope=${i}&response_type=token&state=123`;return}e&&new Date-new Date(JSON.parse(e).requested)<30*60*1e3?this.load(JSON.parse(e).data):window.location.hash&&fetch("/spotify/releaseRadar",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accessToken:window.location.hash.split("=")[1]})}).then(o=>o.json()).then(o=>{window.localStorage.setItem(t,JSON.stringify({requested:new Date,data:o})),this.load(o)})}},Ge={class:"padding-20"},Ke={class:"releases"};function Qe(t,e,s,c,o,i){const p=_("CollectionHeader"),u=_("item-big"),v=_("full-shelf"),I=_("ItemBig"),P=_("Item");return r(),d("div",Ge,[y(p,{onToggleFullSidebar:e[0]||(e[0]=()=>t.$emit("toggleFullSidebar"))}),l("div",Ke,[o.outSoon.length?(r(),g(v,{key:0,heading:"Out Soon"},{default:S(()=>[(r(!0),d(A,null,k(o.outSoon,n=>(r(),g(u,{key:n.url,userData:s.userData,releaseDate:n.releaseDate,cover:n.cover,href:n.url,artist:n.artists.join(", "),title:n.title},null,8,["userData","releaseDate","cover","href","artist","title"]))),128))]),_:1})):b("",!0),o.outNow.length?(r(),g(v,{key:1,heading:"Out Now"},{default:S(()=>[(r(!0),d(A,null,k(o.outNow,n=>(r(),g(I,{key:n.url,userData:s.userData,releaseDate:n.releaseDate,cover:n.cover,href:n.url,artist:n.artists.join(", "),title:n.title},null,8,["userData","releaseDate","cover","href","artist","title"]))),128))]),_:1})):b("",!0),o.outAlready.length?(r(),g(v,{key:2,heading:"Releases"},{default:S(()=>[(r(!0),d(A,null,k(o.outAlready,n=>(r(),g(P,{key:n.url,userData:s.userData,releaseDate:n.releaseDate,cover:n.cover,href:n.url,artist:n.artists.join(", "),title:n.title},null,8,["userData","releaseDate","cover","href","artist","title"]))),128))]),_:1})):b("",!0)])])}var et=w(Ye,[["render",Qe],["__scopeId","data-v-ca162fe0"]]);export{et as default};
