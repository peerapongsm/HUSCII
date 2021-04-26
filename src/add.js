import React from 'react';
import { Form, Input, Button} from 'antd';

export default class Add extends React.Component  {
  constructor(props) {
    super(props);
    this.state  = {
      product_name: "",
      stock: 0,
      description: "",
      img: "",
    }
  }

  handleChange = (event) => {
      let field = event.target.name;
      let value = event.target.value;
      let changes = {};
      changes[field] = value;
      this.setState(changes);
  }

  handleSubmit = () => {
    var raw = JSON.stringify(this.state);

    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/add", requestOptions)
      .catch(error => console.log('error', error));
  }

  render() {
      return (
      <>
        <Form layout="vertical"
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: "75%",
          backgroundColor: "white",
          paddingTop: "5vh",
        }}>
          <Form.Item label="Product Name">
            <Input name="product_name" onChange={this.handleChange}
              style={{width: "30vw"}}/>
          </Form.Item>
          <Form.Item label="Stock">
            <Input name="stock" onChange={this.handleChange}
            style={{width: "30vw"}}/>
          </Form.Item>
          <Form.Item label="Description">
            <Input name="description" onChange={this.handleChange}
            style={{width: "30vw"}}/>
          </Form.Item>
          <Form.Item label="img">
            <Input name="img" onChange={this.handleChange}
            style={{width: "30vw"}}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" href="/"
            onClick={this.handleSubmit}>Submit</Button>
          </Form.Item>
        </Form>
      </>
      );
  }
}
