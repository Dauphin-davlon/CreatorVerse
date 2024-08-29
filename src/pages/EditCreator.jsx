import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./EditCreator.css";

const EditCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [name, setName] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        const { data, error } = await supabase
          .from("Creators")
          .select()
          .eq("id", id)
          .single();
        if (error) throw error;
        setCreator(data);
        setName(data.name);
        setInstagramUrl(data.instagram_url);
        setDescription(data.description);
        setImageUrl(data.image_url);
        setYoutubeUrl(data.youtube_url);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("Creators")
        .update({
          name,
          instagram_url: instagramUrl,
          description,
          image_url: imageUrl,
          youtube_url: youtubeUrl,
        })
        .eq("id", id);
      if (error) throw error;
      navigate(`/creator/${id}`);
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="edit-creator-container">
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit} className="edit-creator-form">
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
          Instagram URL:
          <input
            type="url"
            value={instagramUrl}
            onChange={(e) => setInstagramUrl(e.target.value)}
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
          YouTube (optional):
          <input
            type="url"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
          />
        </label>
        <button type="submit" className="save-button">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditCreator;
