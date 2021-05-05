import React from 'react';
import { Layout, Menu} from 'antd';
import Tabletop from 'tabletop';
import {Route, Switch, Link} from 'react-router-dom';
import Sheet from './sheet';
import MenuSheet from './menusheet';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state  = {
      size: 0,
      sheets: Object
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/1BNRBr8FX6VrNXGjJ3jmV3X-Sr_jiGPPhiDgpHN2nQL4/gid=0"
    })
      .then((data) => this.setState({size: Object.keys(data).length, sheets: data}))
      .catch((err) => console.warn(err));
  }

  render() {
    var sheets = [];
    for (let i = 0; i < this.state.size; i++) {
      var dir = "/sheet-" + i;
      sheets.push(
        <Route path={dir}>
          <Sheet data={this.state.sheets[i]}/>
        </Route>
      );
    }
    return (
      <Layout className="layout">
        <Header style={{backgroundColor: '#5E22A9'}}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" style={{backgroundColor: '#5E22A9'}}>
            <Menu.Item style={{color: 'gold'}}>
              Bob's awesome inventory
            </Menu.Item>
            <Menu.Item>
              <Link to="/dir" style={{color: 'gold'}}>All Kits</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sheet-0" style={{color: 'gold'}}>All Parts</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '5vh', height:'auto',padding: '0 50px' }}>
          <Switch>
            <Route exact path="/">
                  <>
                    <div style={{textAlign: 'center', marginTop: '30vh', marginBottom: '25vh', fontSize: '28pt'}}>
                      <h1>Welcome to Bob's awesome Inventory!!</h1>
                      <p>Choose <a href="#/sheet-0">All parts</a> to see all parts and <a href="#/dir">All kits</a> to see all kits</p>
                    </div>
                  </>
            </Route>
            <Route exact path="/dir">
              <MenuSheet data={this.state.sheets.directory}/>
            </Route>
            {sheets}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#CBC3E3'}}>Bob's awesome inventory ©2021 Created by HUSCII</Footer>
      </Layout>
    );
  }
}

export default App;
