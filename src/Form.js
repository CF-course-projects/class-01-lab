import React from 'react';
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'

class HornForm extends React.Component {

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="selector">
            <Form.Select onChange={(e) => this.props.handleSelect(e.target.value)}>
              <option value="1">1 Horn</option> 
              <option value="2">2 Horns</option> 
              <option value="3">3 Horns</option> 
              <option value="100">3+ Horns</option>
              <option value="0">Show all Beasts</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Container>
    )
  }
}

export default HornForm;
