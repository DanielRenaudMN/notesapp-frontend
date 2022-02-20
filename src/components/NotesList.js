import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import NotesService from "../services/NotesService";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    NotesService.getAll()
      .then((response) => {
        console.log("printing response", response.data);
        setNotes(response.data);
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  }, []);

  return (
    <div className="main-content">
      <h4>List of Notes</h4>
      <div className="notes-list mt-4">
        {notes &&
          notes.map((note) => (
            <div key={notes.indexOf(note)} className="notes-preview mt-3">
              <Link to={`/notes/${note.id}`}>
                <h5 className="primary-color text-capitalize">{note.title}</h5>
                <Moment fromNow className="text-italic">
                  {note.updatedAt}
                </Moment>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NotesList;
