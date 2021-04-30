import React from 'react';
import { Layout, Menu} from 'antd';
import Sheet from './sheet';
import './App.css';

const { Header, Content, Footer } = Layout;

class App extends React.Component  {

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">Bob's awesome inventory</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: '5vh', height:'80vh',padding: '0 50px' }}>
          <Sheet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Bob's inventory ©2021 Created by HUSCII</Footer>
      </Layout>
    );
  }
}

export default App;
