import React from 'react'
import { Form, Input, Button, message } from 'antd'

import { store } from '../store'

const TodoForm = () => {
  const [form] = Form.useForm()

  const onSubmit = async () => {
    try {
      const todo = await form.validateFields()

      if (todo.name) {
        message.success('Success')
        store.add({
          name: todo.name,
          checked: false,
          completed: false,
          color: '',
        })
        form.resetFields()
      } else {
        message.info('Need to fill todo!')
      }
    } catch (err) {
      console.log(err)
    }
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
