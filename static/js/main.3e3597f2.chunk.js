(this.webpackJsonphuscii=this.webpackJsonphuscii||[]).push([[0],{101:function(e,t,n){},152:function(e,t,n){},248:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(28),a=n.n(s),i=(n(152),n(58)),o=n(59),l=n(66),h=n(64),d=n(250),u=n(54),j=n(131),b=n.n(j),p=n(23),f=n(49),x=n(252),O=n(253),g=n(43),m=n(251),y=n(82),C=n.n(y),w=n(97),S=(n(101),n(6)),v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;if(Object(i.a)(this,n),(r=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,c=t.selectedKeys,s=t.confirm,a=t.clearFilters;return Object(S.jsxs)("div",{style:{padding:8},children:[Object(S.jsx)(x.a,{ref:function(e){r.searchInput=e},placeholder:"Search ".concat(e),value:c[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return r.handleSearch(c,s,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(S.jsxs)(O.b,{children:[Object(S.jsx)(g.a,{type:"primary",onClick:function(){return r.handleSearch(c,s,e)},icon:Object(S.jsx)(w.a,{}),size:"small",style:{width:90},children:"Search"}),Object(S.jsx)(g.a,{onClick:function(){return r.handleReset(a)},size:"small",style:{width:90},children:"Reset"}),Object(S.jsx)(g.a,{type:"link",size:"small",onClick:function(){s({closeDropdown:!1}),r.setState({searchText:c[0],searchedColumn:e})},children:"Filter"})]})]})},filterIcon:function(e){return Object(S.jsx)(w.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return r.searchInput.select()}),100)},render:function(t){return r.state.searchedColumn===e?Object(S.jsx)(C.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[r.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},r.handleSearch=function(e,t,n){t(),r.setState({searchText:e[0],searchedColumn:n})},r.handleReset=function(e){e(),r.setState({searchText:""})},"undefined"===typeof r.props.id){var c=r.props.match.params.sheet.split("-")[1];r.state={sheet:r.props.data[c].elements}}else r.state={sheet:r.props.data[0].elements.filter((function(e){return e.part_name.toLowerCase().includes(r.props.id)}))};return console.log(r.state.sheet),r}return Object(o.a)(n,[{key:"render",value:function(){var e=[Object(f.a)({title:"Part Name",dataIndex:"part_name",width:"15%"},this.getColumnSearchProps("part_name")),Object(f.a)({title:"Kit Name",dataIndex:"kit_name",width:"10%"},this.getColumnSearchProps("kit_name")),{title:"Available",dataIndex:"available",width:"2%",sorter:function(e,t){return e.stock-t.stock}},{title:"Stock",dataIndex:"stock",width:"2%",sorter:function(e,t){return e.stock-t.stock}},Object(f.a)({title:"Description",dataIndex:"description"},this.getColumnSearchProps("description")),{title:"Image",dataIndex:"img",width:"15%"}];return Object(S.jsx)(m.a,{columns:e,dataSource:this.state.sheet})}}]),n}(c.a.Component),k=Object(p.f)(v),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).getColumnSearchProps=function(e){return{filterDropdown:function(t){var n=t.setSelectedKeys,c=t.selectedKeys,s=t.confirm,a=t.clearFilters;return Object(S.jsxs)("div",{style:{padding:8},children:[Object(S.jsx)(x.a,{ref:function(e){r.searchInput=e},placeholder:"Search ".concat(e),value:c[0],onChange:function(e){return n(e.target.value?[e.target.value]:[])},onPressEnter:function(){return r.handleSearch(c,s,e)},style:{width:188,marginBottom:8,display:"block"}}),Object(S.jsxs)(O.b,{children:[Object(S.jsx)(g.a,{type:"primary",onClick:function(){return r.handleSearch(c,s,e)},icon:Object(S.jsx)(w.a,{}),size:"small",style:{width:90},children:"Search"}),Object(S.jsx)(g.a,{onClick:function(){return r.handleReset(a)},size:"small",style:{width:90},children:"Reset"}),Object(S.jsx)(g.a,{type:"link",size:"small",onClick:function(){s({closeDropdown:!1}),r.setState({searchText:c[0],searchedColumn:e})},children:"Filter"})]})]})},filterIcon:function(e){return Object(S.jsx)(w.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(t,n){return n[e]?n[e].toString().toLowerCase().includes(t.toLowerCase()):""},onFilterDropdownVisibleChange:function(e){e&&setTimeout((function(){return r.searchInput.select()}),100)},render:function(t){return r.state.searchedColumn===e?Object(S.jsx)(C.a,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[r.state.searchText],autoEscape:!0,textToHighlight:t?t.toString():""}):t}}},r.handleSearch=function(e,t,n){t(),r.setState({searchText:e[0],searchedColumn:n})},r.handleReset=function(e){e(),r.setState({searchText:""})},r.state={sheet:r.props.data.elements},r}return Object(o.a)(n,[{key:"render",value:function(){var e=[Object(f.a)({title:"Kit name",dataIndex:"Kit_name",width:"20%"},this.getColumnSearchProps("Kit_name")),Object(f.a)({title:"Description",dataIndex:"description"},this.getColumnSearchProps("description")),Object(f.a)({title:"Content",dataIndex:"content"},this.getColumnSearchProps("content"))];return Object(S.jsx)(m.a,{columns:e,dataSource:this.state.sheet,onRow:function(e,t){return{onClick:function(e){window.location.href="#/sheets/sheet-"+(t+1)}}}})}}]),n}(c.a.Component),P=d.a.Header,T=d.a.Content,F=d.a.Footer,E=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={size:0,sheets:Object},r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.a.init({key:"https://docs.google.com/spreadsheets/d/1BNRBr8FX6VrNXGjJ3jmV3X-Sr_jiGPPhiDgpHN2nQL4/gid=0"}).then((function(t){return e.setState({size:Object.keys(t).length,sheets:t})})).catch((function(e){return console.warn(e)}))}},{key:"render",value:function(){return Object(S.jsxs)(d.a,{className:"layout",children:[Object(S.jsxs)(P,{style:{backgroundColor:"#52057b",display:"flex"},children:[Object(S.jsx)("h1",{style:{color:"gold",marginRight:"1vw"},children:"ECE Inventory"}),Object(S.jsxs)(u.a,{theme:"dark",mode:"horizontal",style:{backgroundColor:"#52057b"},children:[Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/dir",style:{color:"gold"},children:"All Kits"})}),Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/sheets/sheet-0",style:{color:"gold"},children:"All Parts"})}),Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/wire",style:{color:"gold"},children:"Wires"})}),Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/gauge",style:{color:"gold"},children:"Gauges"})}),Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/circuit",style:{color:"gold"},children:"Circuits"})}),Object(S.jsx)(u.a.Item,{children:Object(S.jsx)("a",{href:"#/resistor",style:{color:"gold"},children:"Resistors"})})]})]}),Object(S.jsx)(T,{style:{height:"auto",padding:"0 50px",paddingTop:"5vh",paddingBottom:"3vh",backgroundColor:"black"},children:Object(S.jsxs)(p.c,{children:[Object(S.jsx)(p.a,{exact:!0,path:"/",children:Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)("div",{style:{textAlign:"center",marginTop:"20vh",marginBottom:"40vh",fontSize:"28pt"},children:[Object(S.jsx)("h1",{style:{fontSize:"34pt",color:"white"},children:"Welcome to Electrical and Computer Engineering (ECE) Inventory!!"}),Object(S.jsxs)("p",{style:{color:"white"},children:["Choose ",Object(S.jsx)("a",{href:"#/sheets/sheet-0",children:"All parts"})," to see all parts and ",Object(S.jsx)("a",{href:"#/dir",children:"All kits"})," to see all kits"]})]})})}),Object(S.jsx)(p.a,{path:"/dir",children:Object(S.jsx)(I,{data:this.state.sheets.directory})}),Object(S.jsx)(p.a,{path:"/wire",children:Object(S.jsx)(k,{data:this.state.sheets,id:"wire"},window.location.hash)}),Object(S.jsx)(p.a,{path:"/gauge",children:Object(S.jsx)(k,{data:this.state.sheets,id:"gauge"},window.location.hash)}),Object(S.jsx)(p.a,{path:"/circuit",children:Object(S.jsx)(k,{data:this.state.sheets,id:"circuit"},window.location.hash)}),Object(S.jsx)(p.a,{path:"/resistor",children:Object(S.jsx)(k,{data:this.state.sheets,id:"resistor"},window.location.hash)}),Object(S.jsx)(p.a,{path:"/sheets/:sheet",children:Object(S.jsx)(k,{data:this.state.sheets},window.location.hash)})]})}),Object(S.jsx)(F,{style:{textAlign:"center",color:"white",backgroundColor:"#52057b"},children:"ECE inventory \xa92021 Created by HUSCII"})]})}}]),n}(c.a.Component),z=Object(p.f)(E),D=n(81),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,254)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(D.a,{children:Object(S.jsx)(z,{})})}),document.getElementById("root")),R()}},[[248,1,2]]]);
//# sourceMappingURL=main.3e3597f2.chunk.js.map