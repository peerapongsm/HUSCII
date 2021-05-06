import React from 'react';
import { Layout, Menu} from 'antd';
import Tabletop from 'tabletop';
import {Route, Switch, withRouter} from 'react-router-dom';
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
    return (
      <Layout className="layout">
        <Header style={{backgroundColor: '#5E22A9'}}>
          <div className="logo"/>
          <Menu theme="dark" mode="horizontal" style={{backgroundColor: '#5E22A9'}}>
            <Menu.Item>
              <a href="#/" style={{color: 'gold'}}>ECE Inventory</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#/dir" style={{color: 'gold'}}>All Kits</a>
            </Menu.Item>
            <Menu.Item>
              <a href="#/sheet-0" style={{color: 'gold'}}>All Parts</a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '5vh', height:'auto',padding: '0 50px' }}>
          <Switch>
            <Route exact path="/">
                  <>
                    <div style={{textAlign: 'center', marginTop: '20vh', marginBottom: '40vh', fontSize: '28pt'}}>
                      <h1>Welcome to Bob's awesome Inventory!!</h1>
                      <p>Choose <a href="#/sheet-0">All parts</a> to see all parts and <a href="#/dir">All kits</a> to see all kits</p>
                    </div>
                  </>
            </Route>
            <Route path="/dir">
              <MenuSheet data={this.state.sheets.directory}/>
            </Route>
            <Route path="/:sheet">
              <Sheet data={this.state.sheets} key={window.location.hash}/>
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center', color: 'white', backgroundColor: '#CBC3E3'}}>Bob's awesome inventory ©2021 Created by HUSCII</Footer>
      </Layout>
    );
  }
}

export default withRouter(App);
