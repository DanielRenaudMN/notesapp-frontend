import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NotesService from "../services/NotesService"

export const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("programming");
  const navigate = useNavigate();

  const saveNote = (e) => {
    e.preventDefault();// stops the page from reloading
    const note = {title, body, category};
    console.log('printing note', note);
    NotesService.create(note)
      .then(response => {
        console.log('note added successfully', response.data)
        navigate('/')
      })
      .catch(error => {
        console.log('something went wrong', error);
      })
  }
  return (
    <div className="create">
      <form>
        <div className="form-group">
          <label htmlFor="title">
            {" "}
            Note Title: <sup>*</sup>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">
            {" "}
            Note Description: <sup>*</sup>
          </label>
          <textarea id="body" className="form-control" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="category"> Note Category:</label>
          <select id="category" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="programming">Programming</option>
            <option value="vacation">Vacation</option>
            <option value="meeting">Meeting</option>
            <option value="blogging">Blogging</option>
          </select>
        </div>
        <div className="text-center">
          <button onClick={(e) => saveNote(e)}>Add note</button>
        </div>
      </form>
    </div>
  );
};
