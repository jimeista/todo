import React from 'react'

import { Form, Input, Button } from 'antd'

const TodoForm = ({ setTodos }) => {
  const [form] = Form.useForm()

  const onSubmit = async () => {
    const todo = await form.validateFields()
    setTodos((state) => [
      ...state,
      {
        name: todo.name,
        checked: false,
        completed: false,
        color: '',
      },
    ])
    form.resetFields()
  }

  return (
    <Form form={form} style={{ display: 'flex', padding: 20 }}>
      <Form.Item name={'name'} noStyle={true}>
        <Input placeholder={'New Todo'} />
      </Form.Item>
      <Form.Item noStyle={true}>
        <Button onClick={onSubmit}>+</Button>
      </Form.Item>
    </Form>
  )
}

export default React.memo(TodoForm)
