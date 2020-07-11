import React /**,{ useState } */ from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import useForm from '../hooks/formHook';

function TodoForm(props) {
  // const [item, setItem] = useState({});
  const [handleSubmit, handleInputChange] = useForm(settingItem)

  async function settingItem(note){
    props.handleSubmit(note);
  }

  return (
    <>
      <h3>Add Item</h3>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>To Do Item</Form.Label>
          <Form.Control
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group >
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Assigned To</Form.Label>
          <Form.Control
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default TodoForm;
