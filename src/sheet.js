import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './App.css';

export default class Sheet extends React.Component  {

  constructor(props) {
    super(props);
    this.state  = {
      sheet: []
    }
  }

  componentDidMount() {
    this.updateSheet();
  }

  updateSheet = () => {
    fetch("http://localhost:3001/", {
      header:  {'Access-Control-Allow-Origin':'*'}
    })
      .then(response => response.json())
      .then(data => this.setState({sheet: data}));
  }

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  handleDelete = (id) => {
    var raw = JSON.stringify({
      "productID": id,
    });

    var requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3001/delete", requestOptions)
      .then(this.updateSheet)
      .catch(error => console.log('error', error));
  }

  render() {
    const columns = [
      {
        title: 'ProductID',
        dataIndex: 'ProductID',
        key: 'ProductID',
        width: '20%',
      },
      {
        title: 'product_name',
        dataIndex: 'product_name',
        key: 'product_name',
        width: '20%',
        ...this.getColumnSearchProps('product_name'),
      },
      {
        title: 'stock',
        dataIndex: 'stock',
        key: 'stock',
        sorter: (a, b) => a.stock - b.stock,
      },
      {
        title: 'description',
        dataIndex: 'description',
        key: 'description',
        ...this.getColumnSearchProps('description'),
      },
      {
        title: 'img',
        dataIndex: 'img',
        key: 'img',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <Space size="middle">
            <Button type="danger" onClick={() => this.handleDelete(record.ProductID)}>Delete</Button>
          </Space>
        ),
      },
    ];
    return <Table columns={columns} dataSource={this.state.sheet} />;
  }
}
