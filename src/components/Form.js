import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input, Button, message } from 'antd'

const TodoForm = () => {
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  const onSubmit = async () => {
    try {
      const todo = await form.validateFields()

      if (todo.name) {
        message.success('Success')
        dispatch({
          type: 'TODO/ADD',
          payload: {
            name: todo.name,
            checked: false,
            completed: false,
            color: '',
          },
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
