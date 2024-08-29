import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./AddCreator.css";

const AddCreator = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.from("Creators").insert([
      {
        name,
        instagram_url: instagramUrl,
        youtube_url: youtubeUrl,
        description,
        image_url: imageUrl,
      },
    ]);

    if (error) {
      setError(error.message);
    } else {
      navigate("/"); // Redirect to the home page after submission
    }

    setLoading(false);
  };

  return (
    <div className="add-creator-form">
      <form onSubmit={handleSubmit}>
        <h2>Add New Creator</h2>
        {error && <p className="error">{error}</p>}
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL (optional):
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <label>
          YouTube:
          <input
            type="url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
        </label>
        <label>
          Instagram:
          <input
            type="url"
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Creator"}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddCreator;
