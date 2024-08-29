import { useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";
import "./ShowCreators.css";
import LandingImage from "../assets/netzwerk-total-001.jpg";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCreators = async () => {
      try {
        const { data, error } = await supabase.from("Creators").select();
        if (error) throw error;
        setCreators(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCreators();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Landing Page Image Section */}
      <section className="landing-page">
        <img src={LandingImage} alt="Network" className="landing-image" />
        <Link to="/add-creator">
          <button className="add-creator-button">Add Creator</button>
        </Link>
      </section>

      {/* Creators List */}
      <div className="creators-grid">
        {creators.map((creator) => (
          <article className="card" key={creator.id}>
            <header>
              <img
                src={creator.image_url}
                alt={creator.name}
                className="card-image"
              />
              <h3>{creator.name}</h3>
            </header>
            <div className="name-heading">
              <Link to={`/creator/${creator.id}`}>View Details</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ShowCreators;
