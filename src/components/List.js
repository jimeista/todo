import React from 'react'
import { Checkbox, Select, Button, Space } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

const { Option } = Select

const List = () => {
  const state = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()

  const onDelete = (name) => {
    dispatch({ type: 'TODO/DELETE', payload: name })
  }

  const onChangeChecked = (index) => {
    dispatch({ type: 'TODO/CHECKED', payload: index })
  }

  const onChangeColor = (color, index) => {
    dispatch({ type: 'TODO/COLOR', payload: { key: index, color } })
  }

  console.log(state)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 15,
      }}
    >
      <h3 style={{ marginLeft: 0 }}>My List</h3>
      <hr />
      {state.map((todo, index) => (
        <div
          style={{
            display: 'flex',
          }}
          key={`${todo.name}-${index}`}
        >
          <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
            <Checkbox
              checked={todo.checked}
              onChange={() => onChangeChecked(index)}
            />
            <p
              style={{
                fontSize: '20px',
                margin: 0,
                padding: 0,
                marginLeft: 10,
              }}
            >
              {todo.name}
            </p>
          </div>
          <Space direction={'horizontal'}>
            <Select
              size='small'
              placeholder={'Color'}
              defaultValue={todo.color}
              onChange={(value) => onChangeColor(value, index)}
              style={{ width: 80 }}
            >
              {colorScheme.map((color) => (
                <Option value={color} key={color}>
                  {color}
                </Option>
              ))}
            </Select>
            <Button size='small' onClick={() => onDelete(todo.name)}>
              {' '}
              x{' '}
            </Button>
          </Space>
        </div>
      ))}
    </div>
  )
}

export default React.memo(List)

const colorScheme = ['red', 'blue']
