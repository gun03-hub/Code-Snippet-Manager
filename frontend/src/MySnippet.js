import React from 'react';

const MySnippet = ({ snippet, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedSnippet, setEditedSnippet] = React.useState(snippet);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    onEdit(editedSnippet);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedSnippet((prevSnippet) => ({ ...prevSnippet, [name]: value }));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            name="title"
            value={editedSnippet.title}
            onChange={handleChange}
          />
          <textarea
            name="snippet"
            value={editedSnippet.snippet}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{snippet.title}</h3>
          <p>{snippet.snippet}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(snippet._id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default MySnippet;