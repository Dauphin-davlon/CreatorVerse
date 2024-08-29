import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";
import "./ViewCreator.css";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
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
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCreator();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit-creator/${id}`);
  };

  const handleHomepage = () => {
    navigate(`/`);
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this creator?")) {
      try {
        const { error } = await supabase.from("Creators").delete().eq("id", id);
        if (error) throw error;
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <div className="grid">
        <img
          src={creator.image_url}
          alt={creator.name}
          className="creator-card-image"
        />
        <div>
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>

          {creator.instagram_url && (
            <div>
              <a
                href={creator.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Visit Creator's instagram"}
              </a>
            </div>
          )}

          {creator.youtube_url && (
            <div>
              <a
                href={creator.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {"Visit Creator's youtube"}
              </a>
            </div>
          )}
          <div className="button-group">
            <button className="edit-button" onClick={handleHomepage}>
              Homepage
            </button>
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;
