import React from 'react';
import { Input, Button, List } from 'antd';

/* 
  UI组件，傻瓜组件，不关心业务逻辑，只负责UI表现
  当组件只有一个 render 函数时，就是 无状态组件
  无状态  函数式  组件，性能更高
*/
const TodoListUI = (props) => {
  return (
    <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <div>
          <Input 
            value={props.inputValue} 
            placeholder='todo info' 
            style={{width: '300px', marginRight: '10px'}} 
            onChange={props.handleInputChange}
          />
          <Button
            type='primary'
            onClick={props.handleBtnClick}
          >提交</Button>
        </div>
        <List 
          style={{marginTop: '10px', width: '300px'}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)}
        />
      </div>
  )
}

export default TodoListUI;