import React, { useLayoutEffect, useState } from 'react'
import { Checkbox, Select, Button, Space, message } from 'antd'

import { store } from '../store'

import { Spinner } from '../components/Spinner'

const { Option } = Select

const List = () => {
  const [state, setState] = useState(store.initialState)

  console.log(state)

  useLayoutEffect(() => {
    store.fetch()
    store.subscribe(setState)
    store.init()
  }, [])

  const onDelete = (name) => {
    message.success(`Todo: ${name} successfully deleted`)
    store.delete(name)
  }

  const onChangeChecked = (index) => {
    message.success(`Todo successfully changed`)
    store.checked(index)
  }

  const onChangeColor = (color, index) => store.color(color, index)

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        padding: 15,
        overflow: 'scroll',
      }}
    >
      <h3 style={{ marginLeft: 0 }}>My List</h3>
      <hr />

      {state.status === 'success' ? (
        state.data.map((todo, index) => (
          <div
            style={{
              display: 'flex',
            }}
            key={`${todo.name}-${index}`}
          >
            <div
              style={{ width: '90%', display: 'flex', alignItems: 'center' }}
            >
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
        ))
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default React.memo(List)

const colorScheme = ['red', 'blue']
