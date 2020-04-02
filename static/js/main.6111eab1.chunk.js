(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{18:function(e,a,t){e.exports=t(46)},23:function(e,a,t){},24:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(17),l=t.n(c),s=(t(23),t(2)),i=t(3),m=t(4),o=t(5);t(24);var u=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card bg-dark text-white  text-wrap"},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&auto=format&fit=crop&w=3289&q=80",className:"card-img",id:"pic1",alt:"pic"}),r.a.createElement("div",{className:"card-img-overlay y-bottom"},r.a.createElement("h1",{className:"card-text display-2 text-lg-center text-sm-right text-wrap  "},'"Best. Food. Ever."'),r.a.createElement("h5",{className:"card-text text-lg-center text-sm-right font-weight-bold text-wrap"},"\u2013Gov. Andy Beshear"))))},p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},r.a.createElement("h1",{className:"display-4",id:"Home"},"Kate's Kitchen")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("a",{className:"nav-link",href:"#Home"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#Location"},"Location")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#Contact"},"Contact"))),r.a.createElement("span",{className:"navbar-text bg-dark text-light"},"Order Now")))}}]),t}(r.a.Component),d=t(6),v=t.n(d),h=t(7);var b=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-body"},r.a.createElement("p",{className:"card-text"},e.description,r.a.createElement("a",null," ",e.price))))},f=t(26).default,E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={menuArray:[]},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(v.a.mark((function e(){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==window.localStorage.length){e.next=4;break}this.getItems(this.props.menuNumber),e.next=8;break;case 4:return console.log("local storage"),a=JSON.parse(localStorage.getItem(this.props.menuAlias)),e.next=8,this.setState({menuArray:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){window.localStorage.setItem(this.props.menuAlias,JSON.stringify(this.state.menuArray))}},{key:"getItems",value:function(){var e=Object(h.a)(v.a.mark((function e(a){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("https://entree-f18.herokuapp.com/v1/menu/"+a).then((function(e){console.log("response");var a=e.data.menu_items.map((function(e){var a=Math.floor(20*Math.random()+1);return e.price=a,e}));return console.log(a),a})).catch((function(e){console.log(e)})).finally((function(){console.log("finally")}));case 2:return t=e.sent,console.log(t),e.next=6,this.setState({menuArray:t});case 6:case"end":return e.stop()}}),e,this)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.menuArray.map((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{key:a,description:e.description,price:" $".concat(e.price)}))}));return 0===this.state.menuArray.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"card-title text-center p-3"},this.props.menuType),e)}}]),t}(r.a.Component),g=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 text-center offset-1 m-3 p-3"},r.a.createElement("h5",{className:"card-title",id:"Location"},"Location"),r.a.createElement("p",{className:"card-text"},"348 E Main St",r.a.createElement("br",null),"Lexington, KY 40502"),r.a.createElement("a",{href:"#",className:"btn btn-primary",id:"Contact"},"Map")),r.a.createElement("div",{className:"col-4 offset-1 text-center m-3 p-3"},r.a.createElement("h5",{className:"card-title",id:"Location"},"Hours"),r.a.createElement("p",{className:"card-text"},"Monday - Thursday 11:00 a.m. -- 10:00 p.m.",r.a.createElement("br",null),"Friday - Sunday 11:00 a.m. -- 11:00 p.m."),r.a.createElement("br",null))))}}]),t}(r.a.Component),N=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={},e.sections=[{name:"Appetizers",number:5,alias:"appetizers"},{name:"Mains",number:15,alias:"mains"},{name:"Soups & Salads",number:3,alias:"soups"},{name:"Sides",number:5,alias:"sides"},{name:"Desserts",number:5,alias:"desserts"}],e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(u,null),this.sections.map((function(e,a){return r.a.createElement(E,{key:a,menuType:e.name,menuNumber:e.number,menuAlias:e.alias})})),r.a.createElement(g,null))}}]),t}(r.a.Component);t(44),t(45);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6111eab1.chunk.js.map