import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import axios from "axios";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null); // ✅ FIX: Declare error state

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      // You can add delete logic here
      console.log("Deleted:", id);
    }
  };

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get("/api/notes");
      setNotes(data);
    } catch (err) {
      setError("Failed to fetch notes."); // ✅ FIX: Handle fetch error
      console.error("Fetch error:", err);
    }
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome Back Sithira Janiya..">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {error && <p style={{ color: "red" }}>{error}</p>}{" "}
      {/* ✅ FIX: Shows fetch error */}
      <Accordion defaultActiveKey="0">
        {notes.map((note, index) => (
          <Accordion.Item eventKey={String(index)} key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header>
                <Accordion.Header>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <span style={{ fontSize: "18px", fontWeight: "500" }}>
                      {note.title}
                    </span>
                    <div style={{ marginLeft: "auto" }}>
                      <Link to={`/note/${note._id}`}>
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="mx-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteHandler(note._id);
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </Accordion.Header>
              </Card.Header>
              <Accordion.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created On - {note.createdAt}
                  </footer>
                </blockquote>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        ))}
      </Accordion>
    </MainScreen>
  );
};

export default MyNotes;
