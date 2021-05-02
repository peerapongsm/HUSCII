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
      size: 0
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/1BNRBr8FX6VrNXGjJ3jmV3X-Sr_jiGPPhiDgpHN2nQL4/gid=0"
    })
      .then((data) => this.setState({size: Object.keys(data).length}))
      .catch((err) => console.warn(err));
  }

  render() {
    var sheets = [];
    for (let i = 0; i < this.state.size; i++) {
      var dir = "/sheet-" + i;
      sheets.push(
        <Route path={dir}>
          <Sheet index={i}/>
        </Route>
      );
    }
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>
              <Link to="/">Bob's awesome inventory</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/sheet-0">All Parts</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/">All Kits</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '5vh', height:'80vh',padding: '0 50px' }}>
          <Switch>
            <Route exact path="/">
              <MenuSheet/>
            </Route>
            {sheets}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bob's inventory ©2021 Created by HUSCII</Footer>
      </Layout>
    );
  }
}

export default App;
