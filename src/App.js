import React from 'react';
import { Layout, Menu, Tabs} from 'antd';
import {Route, Switch} from 'react-router-dom';
import Sheet from './sheet';
import Add from './add';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component  {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="home">
              <a href="/">
                Bob's awesome inventory
              </a>
            </Menu.Item>
            <Menu.Item key="add">
              <a href="/add">
                Add Item
              </a>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '5vh', height:'100vh', marginLeft: '15vw', padding: '0 50px',}}>
          <Switch>
            <Route exact path="/">
              <Sheet/>
            </Route>
            <Route exact path="/HUSCII">
              <Sheet/>
            </Route>
            <Route exact path="/add">
              <Add/>
            </Route>
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bob's inventory ©2021 Created by HUSCII</Footer>
      </Layout>
    );
  }
}

export default App;
