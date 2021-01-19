import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

const data = [
  'aaaaaaa',
  'bbbbbbb',
  'cccccccc',
  'ddddddddd'
]

class TodoList extends Component {

  render() {
    return (
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input placeholder='todo info' style={{width: '300px', marginRight: '10px'}} />
          <Button type='primary'>提交</Button>
        </div>
        <List 
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

export default TodoList;