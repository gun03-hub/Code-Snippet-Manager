import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MySnippet from './MySnippet';

const Snippets = () => {
  const [posts, setPosts] = useState([]);
  const [newSnippet, setNewSnippet] = useState({ title: '', snippet: '' });
  const [editingSnippet, setEditingSnippet] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/snippets");
      const data = res.data;
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const handleAddSnippet = async () => {
    const res = await axios.post("/api/snippets", newSnippet);
    const data = res.data;
    setPosts([...posts, data]);
    setNewSnippet({ title: '', snippet: '' });
  };

  const handleEditSnippet = async (snippet) => {
    const res = await axios.put(`/api/snippets/${snippet._id}`, snippet);
    const data = res.data;
    setEditingSnippet(null);
    setPosts(posts.map((post) => (post._id === data._id ? data : post)));
  };

  const handleDeleteSnippet = async (id) => {
    await axios.delete(`/api/snippets/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div>
      <h1>Snippets</h1>
      <div>
        <h2>Add Snippet</h2>
        <input
          type="text"
          placeholder="Title"
          value={newSnippet.title}
          onChange={(e) => setNewSnippet({ ...newSnippet, title: e.target.value })}
        />
        <textarea
          placeholder="Snippet"
          value={newSnippet.snippet}
          onChange={(e) => setNewSnippet({ ...newSnippet, snippet: e.target.value })}
        />
        <button onClick={handleAddSnippet}>Add Snippet</button>
      </div>
      <div>
        <h2>My Snippets</h2>
        {posts.map((post) => (
          <MySnippet
            key={post._id}
            snippet={post}
            onEdit={handleEditSnippet}
            onDelete={handleDeleteSnippet}
          />
        ))}
      </div>
      {editingSnippet && (
        <MySnippet
          snippet={editingSnippet}
          onEdit={handleEditSnippet}
          onDelete={handleDeleteSnippet}
        />
      )}
    </div>
  );
};

export default Snippets;