(this.webpackJsonphuscii=this.webpackJsonphuscii||[]).push([[0],{106:function(e,t,n){},140:function(e,t,n){},233:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(27),o=n.n(i),a=(n(140),n(69)),s=n(70),l=n(84),u=n(80),h=n(236),d=n(48),j=n(96),b=n(118),f=n.n(b),p=n(238),m=n(239),g=n(38),x=n(237),O=n(119),y=n.n(O),k=n(86),C=(n(106),n(19)),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,r=t.selectedKeys,i=t.confirm,o=t.clearFilters;return Object(C.jsxs)("div",{style:{padding:8},children:[Object(C.jsx)(p.a,{ref:function(e){c.searchInput=e},placeholder:"Search ".concat(e),value:r[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return c.handleSearch(r,i,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(C.jsxs)(m.b,{children:[Object(C.jsx)(g.a,{type:"primary",onClick:function(){return c.handleSearch(r,i,e)},icon:Object(C.jsx)(k.a,{}),size:"small",style:{width:90},children:"Search"}),Object(C.jsx)(g.a,{onClick:function(){return c.handleReset(o)},size:"small",style:{width:90},children:"Reset"}),Object(C.jsx)(g.a,{type:"link",size:"small",onClick:function(){i({closeDropdown:!1}),c.setState({searchText:r[0],searchedColumn:e})},children:"Filter"})]})]})},filterIcon:function(e){return Object(C.jsx)(k.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return c.searchInput.select()}),100)},render:function(t){return c.state.searchedColumn===e?Object(C.jsx)(y.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[c.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},c.handleSearch=function(e,t,n){t(),c.setState({searchText:e[0],searchedColumn:n})},c.handleReset=function(e){e(),c.setState({searchText:""})},c.state={sheet:[]},c}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;f.a.init({key:"1BNRBr8FX6VrNXGjJ3jmV3X-Sr_jiGPPhiDgpHN2nQL4",simpleSheet:!0}).then((function(t){return e.setState({sheet:t})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){var e=[Object(j.a)({title:"product_name",dataIndex:"product_name",key:"product_name",width:"20%"},this.getColumnSearchProps("product_name")),{title:"stock",dataIndex:"stock",key:"stock",sorter:function(e,t){return e.stock-t.stock}},Object(j.a)({title:"description",dataIndex:"description",key:"description"},this.getColumnSearchProps("description")),{title:"img",dataIndex:"img",key:"img"},{title:"Action",key:"action",render:function(e,t){return Object(C.jsxs)(m.b,{size:"middle",children:[Object(C.jsx)("a",{href:"https://www.google.com/",children:"Edit"}),Object(C.jsx)("a",{href:"https://www.google.com/",children:"Delete"})]})}}];return Object(C.jsx)(x.a,{columns:e,dataSource:this.state.sheet})}}]),n}(r.a.Component),v=h.a.Header,w=h.a.Content,I=h.a.Footer,F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(h.a,{className:"layout",children:[Object(C.jsxs)(v,{children:[Object(C.jsx)("div",{className:"logo"}),Object(C.jsx)(d.a,{theme:"dark",mode:"horizontal",children:Object(C.jsx)(d.a.Item,{children:"Bob's awesome inventory"},"1")})]}),Object(C.jsx)(w,{style:{marginTop:"5vh",height:"100vh",padding:"0 50px"},children:Object(C.jsx)(S,{})}),Object(C.jsx)(I,{style:{textAlign:"center"},children:"Bob's inventory \xa92021 Created by HUSCII"})]})}}]),n}(r.a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,240)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(F,{})}),document.getElementById("root")),T()}},[[233,1,2]]]);
//# sourceMappingURL=main.b4a598a1.chunk.js.map