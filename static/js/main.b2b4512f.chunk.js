(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},201:function(e,t,c){},202:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),i=c.n(r),o=(c(95),c(23)),l=c.n(o),u=c(38),d=c(11),j=c(238),h=c(239),f=c(240),b=c(21),v=(c(97),c(229)),O=c(233),p=c(234);var x=function(e){var t=e.title,c=e.cases,a=e.isRed,s=e.active,r=e.total,i=Object(b.a)(e,["title","cases","isRed","active","total"]);return Object(n.jsx)(v.a,{className:"info_card ".concat(s&&"selected"," ").concat(a&&"red-top"),onClick:i.click,children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(p.a,{children:t}),Object(n.jsx)("h2",{className:"infoBox_cases ".concat(!a&&"green"),children:c}),Object(n.jsxs)(p.a,{children:[r," Total"]})]})})},m=(c(101),c(102),c(13)),y=c.n(m),g=function(e){var t=e.listCountry;return Object(n.jsxs)("div",{className:"table",children:[Object(n.jsx)("h2",{children:"Cases by Countries"}),Object(n.jsx)("div",{className:"list",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("p",{className:"list-item",children:[Object(n.jsx)("span",{children:t}),Object(n.jsx)("strong",{children:y()(c).format("0,0")})]})}))})]})},C=(c(103),c(236)),w=c(237),k=c(242),N=c(241),S=c(235),D=function(e){return e?"+".concat(y()(e).format("0.0a")):"+0"},I=function(e){var t=e;return t.sort((function(e,t){return t.cases-e.cases})),t},R={cases:{hex:"#CC1034",mult:400},recovered:{hex:"#7DD71D",mult:600},deaths:{hex:"#C0C0C0",mult:1e3}},T=function(e,t){return e.map((function(e){return Object(n.jsx)(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,radius:Math.sqrt(e[t])*R[t].mult,pathOptions:{color:R[t].hex,fillColor:R[t].hex},children:Object(n.jsx)(S.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:e.country})}),Object(n.jsxs)("div",{children:["Cases: ",y()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{children:["Recovered: ",y()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{children:["Deaths: ",y()(e.deaths).format("0,0")]})]})})})}))};var _=function(e){var t=e.center,c=e.zoom,a=e.casesType,s=e.mapcountries;function r(e){var t=e.center,c=e.zoom;return Object(C.a)().setView(t,c),null}return Object(n.jsx)("div",{className:"Map",children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)(r,{center:t,zoom:c}),Object(n.jsx)(k.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a>\r contributors'}),T(s,a)]})})},M=(c(104),c(83)),z=(c(201),{legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return y()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return y()(e).format("0a")}}}]}}),E=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var F=function(e){var t=e.casesType,c=Object(a.useState)({}),s=Object(d.a)(c,2),r=s[0],i=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=E(e,t);i(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsxs)("div",{className:"graph",children:[Object(n.jsxs)("h2",{children:["Worldwide new ",t]}),(null===r||void 0===r?void 0:r.length)>0?Object(n.jsx)(M.Line,{className:"line",data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:z}):Object(n.jsx)("h1",{children:"load.."})]})};var A=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],b=i[1],v=Object(a.useState)({}),O=Object(d.a)(v,2),p=O[0],m=O[1],y=Object(a.useState)([]),C=Object(d.a)(y,2),w=C[0],k=C[1],N=Object(a.useState)("worldwide"),S=Object(d.a)(N,2),R=S[0],T=S[1],M=Object(a.useState)("cases"),z=Object(d.a)(M,2),E=z[0],A=z[1],L=Object(a.useState)({lat:34.8,lng:-40.5}),B=Object(d.a)(L,2),J=B[0],P=B[1],V=Object(a.useState)(3),W=Object(d.a)(V,2),Y=W[0],q=W[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){m(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2,cases:e.cases}})),c=I(e);b(e),s(t),k(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,T(t.target.value),n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=5,fetch(n).then((function(e){return e.json()})).then((function(e){m(e),P("worldwide"===c?[34.8,-40.5]:[e.countryInfo.lat,e.countryInfo.long]),q(4)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app_left",children:[Object(n.jsxs)("div",{className:"app_header",children:[Object(n.jsx)("h1",{children:"COVID-19 TRACKER"}),Object(n.jsx)(j.a,{className:"app_dropDown",children:Object(n.jsxs)(h.a,{variant:"outlined",value:R,onChange:K,children:[Object(n.jsx)(f.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(f.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app_stats",children:[Object(n.jsx)(x,{click:function(e){return A("cases")},active:"cases"===E,isRed:!0,title:"Covid Cases",cases:D(p.todayCases),total:D(p.cases)}),Object(n.jsx)(x,{click:function(e){return A("recovered")},active:"recovered"===E,title:"Recovered",cases:D(p.todayRecovered),total:D(p.recovered)}),Object(n.jsx)(x,{click:function(e){return A("deaths")},active:"deaths"===E,isRed:!0,title:"Deaths",cases:D(p.todayDeaths),total:D(p.deaths)})]}),Object(n.jsx)(_,{center:J,zoom:Y,casesType:E,mapcountries:o})]}),Object(n.jsxs)("div",{className:"app_right",children:[Object(n.jsx)(g,{listCountry:w}),Object(n.jsx)(F,{casesType:E})]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,244)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root")),L()},95:function(e,t,c){},97:function(e,t,c){}},[[202,1,2]]]);
//# sourceMappingURL=main.b2b4512f.chunk.js.map