(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{176:function(e,t,n){e.exports=n(414)},181:function(e,t,n){},182:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},183:function(e,t,n){},209:function(e,t){},211:function(e,t){},242:function(e,t){},243:function(e,t){},291:function(e,t){},293:function(e,t){},316:function(e,t){},414:function(e,t,n){"use strict";n.r(t);var a=n(15),o=n.n(a),i=n(169),c=n.n(i),r=(n(181),n(170)),s=n(171),l=n(174),u=n(172),m=n(175),h=n(31),g=(n(182),n(183),n(89)),d=n.n(g),p=n(173),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={imgs:[],value:"",copied:!1},n.handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.getImages=n.getImages.bind(Object(h.a)(Object(h.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getImages",value:function(e){var t=this,n={uri:e,headers:{"User-Agent":"Request-Promise","Access-Control-Allow-Origin":"*"}};d()(n).then(function(e){var n=document.createElement("div");n.innerHTML=e;for(var a=n.getElementsByTagName("img"),o=[],i=0;i<a.length;i++)console.log(a[i].src),""!=a[i].src&&o.push(a[i].src);t.setState({imgs:o})}).catch(function(e){console.log(e)})}},{key:"handleChange",value:function(e){var t={};t[e.target.name]=e.target.value,this.setState(t),""==e.target.value&&this.setState({status:""}),this.getImages(e.target.value)}},{key:"componentDidMount",value:function(){d()({uri:"https://api.upcitemdb.com/prod/v1/lookup",method:"post",headers:{"User-Agent":"Request-Promise","Content-Type":"application/json",user_key:"only_for_dev_or_pro",key_type:"3scale"},json:!0}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("input",{value:this.state.url,placeholder:"enter image link here",className:"linkInput",onChange:this.handleChange,name:"url"})),o.a.createElement("div",null,o.a.createElement("div",null,this.state.imgs.map(function(t){return o.a.createElement(p.CopyToClipboard,{text:t,onCopy:function(){return e.setState({copied:!0})}},o.a.createElement("button",{className:"grid-button"},o.a.createElement("img",{src:t,height:"300",width:"300",className:"grid-img"})))}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[176,1,2]]]);
//# sourceMappingURL=main.16b203b5.chunk.js.map