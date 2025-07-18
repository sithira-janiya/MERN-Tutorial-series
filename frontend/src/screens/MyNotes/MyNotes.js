import React from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import notes from "../../data/notes"; // ✅ fixed import

const MyNotes = () => {
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // You can add delete logic here
      console.log("Deleted:", id);
    }
  };

  return (
    <MainScreen title="Welcome Back Sithira Janiya..">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>

      <Accordion defaultActiveKey="0">
        {notes.map((note, index) => (
          <Card style={{ margin: 10 }} key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {/* Use Accordion.Button for header toggle */}
                <Accordion.Item eventKey={String(index)}>
                  <Accordion.Header>{note.title}</Accordion.Header>
                  <Accordion.Body>
                    <h4>
                      <Badge bg="success">Category - {note.category}</Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <p>{note.content}</p>
                      <footer className="blockquote-footer">
                        Created On - date
                      </footer>
                    </blockquote>
                    <div className="mt-3">
                      <Link to={`/note/${note._id}`}>
                        <Button>Edit</Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="mx-2"
                        onClick={() => deleteHandler(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </span>
            </Card.Header>
          </Card>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
