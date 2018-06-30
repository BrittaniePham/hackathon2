import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const ItemForm = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name' placeholder='Name' />
        <Form.Input fluid label='$Price' placeholder='$Price' />
        <Form.Input fluid label='Catagory' placeholder='Catagory' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default ItemForm