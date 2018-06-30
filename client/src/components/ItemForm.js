import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

class ItemForm extends React.Component {

  defaultValues = { name: '', price: '', category: '' }
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submit(this.state)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  
  render() {
    const { name, price, category } = this.state
    const { toggleForm } = this.props
    return(
    <Segment inverted>
      <Form inverted onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input 
            name='name'
            fluid 
            label='Name' 
            placeholder='Name' 
            defaultValue={name}
            onChange={this.handleChange}
          />
          <Form.Input
            name='price'
            fluid 
            label='$Price' 
            placeholder='$Price' 
            defaultValue={price}
            onChange={this.handleChange}
          />
          <Form.Input
            name='category'
            fluid 
            label='Category' 
            placeholder='Category' 
            defaultValue={category}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Button type='submit' onClick={toggleForm}>Submit</Form.Button>
      </Form>
    </Segment>
    )
  }
}
export default ItemForm