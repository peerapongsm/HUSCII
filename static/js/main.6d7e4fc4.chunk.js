(this.webpackJsonphuscii=this.webpackJsonphuscii||[]).push([[0],{101:function(e,t,n){},152:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),s=n.n(c),o=(n(152),n(58)),i=n(59),l=n(66),h=n(64),d=n(250),u=n(53),j=n(131),b=n.n(j),f=n(23),p=n(54),m=n(252),x=n(253),O=n(43),g=n(251),y=n(82),C=n.n(y),S=n(97),v=(n(101),n(7)),k=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;Object(o.a)(this,n),(r=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,c=t.confirm,s=t.clearFilters;return Object(v.jsxs)("div",{style:{padding:8},children:[Object(v.jsx)(m.a,{ref:function(e){r.searchInput=e},placeholder:"Search ".concat(e),value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return r.handleSearch(a,c,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(v.jsxs)(x.b,{children:[Object(v.jsx)(O.a,{type:"primary",onClick:function(){return r.handleSearch(a,c,e)},icon:Object(v.jsx)(S.a,{}),size:"small",style:{width:90},children:"Search"}),Object(v.jsx)(O.a,{onClick:function(){return r.handleReset(s)},size:"small",style:{width:90},children:"Reset"}),Object(v.jsx)(O.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),r.setState({searchText:a[0],searchedColumn:e})},children:"Filter"})]})]})},filterIcon:function(e){return Object(v.jsx)(S.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return r.searchInput.select()}),100)},render:function(t){return r.state.searchedColumn===e?Object(v.jsx)(C.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[r.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},r.handleSearch=function(e,t,n){t(),r.setState({searchText:e[0],searchedColumn:n})},r.handleReset=function(e){e(),r.setState({searchText:""})};var a=r.props.match.params.sheet.split("-")[1];return r.state={sheet:r.props.data[a].elements},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=window.location.hash.split("-")[1];this.setState({sheet:this.props.data[e].elements})}},{key:"render",value:function(){var e=[Object(p.a)({title:"Part Name",dataIndex:"part_name",width:"20%"},this.getColumnSearchProps("part_name")),Object(p.a)({title:"Kit Name",dataIndex:"kit_name",width:"20%"},this.getColumnSearchProps("kit_name")),{title:"Available",dataIndex:"available",sorter:function(e,t){return e.stock-t.stock}},{title:"Stock",dataIndex:"stock",sorter:function(e,t){return e.stock-t.stock}},Object(p.a)({title:"Description",dataIndex:"description"},this.getColumnSearchProps("description")),{title:"Image",dataIndex:"img"}];return Object(v.jsx)(g.a,{columns:e,dataSource:this.state.sheet,rowKey:function(e){return e.part_name+e.kit_name}})}}]),n}(a.a.Component),w=Object(f.f)(k),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,a=t.selectedKeys,c=t.confirm,s=t.clearFilters;return Object(v.jsxs)("div",{style:{padding:8},children:[Object(v.jsx)(m.a,{ref:function(e){r.searchInput=e},placeholder:"Search ".concat(e),value:a[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return r.handleSearch(a,c,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(v.jsxs)(x.b,{children:[Object(v.jsx)(O.a,{type:"primary",onClick:function(){return r.handleSearch(a,c,e)},icon:Object(v.jsx)(S.a,{}),size:"small",style:{width:90},children:"Search"}),Object(v.jsx)(O.a,{onClick:function(){return r.handleReset(s)},size:"small",style:{width:90},children:"Reset"}),Object(v.jsx)(O.a,{type:"link",size:"small",onClick:function(){c({closeDropdown:!1}),r.setState({searchText:a[0],searchedColumn:e})},children:"Filter"})]})]})},filterIcon:function(e){return Object(v.jsx)(S.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return r.searchInput.select()}),100)},render:function(t){return r.state.searchedColumn===e?Object(v.jsx)(C.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[r.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},r.handleSearch=function(e,t,n){t(),r.setState({searchText:e[0],searchedColumn:n})},r.handleReset=function(e){e(),r.setState({searchText:""})},r.state={sheet:r.props.data.elements},r}return Object(i.a)(n,[{key:"render",value:function(){var e=[Object(p.a)({title:"Kit name",dataIndex:"Kit_name",width:"20%"},this.getColumnSearchProps("Kit_name")),Object(p.a)({title:"Description",dataIndex:"description"},this.getColumnSearchProps("description")),{title:"Content",dataIndex:"content"}];return Object(v.jsx)(g.a,{columns:e,dataSource:this.state.sheet,rowKey:function(e){return e.Kit_name},onRow:function(e,t){return{onClick:function(e){window.location.href="#/sheet-"+(t+1)}}}})}}]),n}(a.a.Component),T=d.a.Header,F=d.a.Content,P=d.a.Footer,D=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={size:0,sheets:Object},r}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.init({key:"https://docs.google.com/spreadsheets/d/1BNRBr8FX6VrNXGjJ3jmV3X-Sr_jiGPPhiDgpHN2nQL4/gid=0"}).then((function(t){return e.setState({size:Object.keys(t).length,sheets:t})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){return Object(v.jsxs)(d.a,{className:"layout",children:[Object(v.jsxs)(T,{style:{backgroundColor:"#5E22A9"},children:[Object(v.jsx)("div",{className:"logo"}),Object(v.jsxs)(u.a,{theme:"dark",mode:"horizontal",style:{backgroundColor:"#5E22A9"},children:[Object(v.jsx)(u.a.Item,{children:Object(v.jsx)("a",{href:"#/",style:{color:"gold"},children:"ECE Inventory"})}),Object(v.jsx)(u.a.Item,{children:Object(v.jsx)("a",{href:"#/dir",style:{color:"gold"},children:"All Kits"})}),Object(v.jsx)(u.a.Item,{children:Object(v.jsx)("a",{href:"#/sheet-0",style:{color:"gold"},children:"All Parts"})})]})]}),Object(v.jsx)(F,{style:{marginTop:"5vh",height:"auto",padding:"0 50px"},children:Object(v.jsxs)(f.c,{children:[Object(v.jsx)(f.a,{exact:!0,path:"/",children:Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{style:{textAlign:"center",marginTop:"20vh",marginBottom:"40vh",fontSize:"28pt"},children:[Object(v.jsx)("h1",{children:"Welcome to Bob's awesome Inventory!!"}),Object(v.jsxs)("p",{children:["Choose ",Object(v.jsx)("a",{href:"#/sheet-0",children:"All parts"})," to see all parts and ",Object(v.jsx)("a",{href:"#/dir",children:"All kits"})," to see all kits"]})]})})}),Object(v.jsx)(f.a,{path:"/dir",children:Object(v.jsx)(I,{data:this.state.sheets.directory})}),Object(v.jsx)(f.a,{path:"/:sheet",children:Object(v.jsx)(w,{data:this.state.sheets},window.location.hash)})]})}),Object(v.jsx)(P,{style:{textAlign:"center",color:"white",backgroundColor:"#CBC3E3"},children:"Bob's awesome inventory \xa92021 Created by HUSCII"})]})}}]),n}(a.a.Component),K=Object(f.f)(D),z=n(81),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(z.a,{children:Object(v.jsx)(K,{})})}),document.getElementById("root")),B()}},[[248,1,2]]]);
//# sourceMappingURL=main.6d7e4fc4.chunk.js.map