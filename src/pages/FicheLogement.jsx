import { NavLink } from "react-router-dom";
import "../styles/Banner.css";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LogementTitre from "../components/LogementTitre";
import LogementProprietaire from "../components/LogementProprietaire";
import LogementDescription from "../components/LogementDescription";
import "../styles/FicheLogement.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function FicheLogement() {
  const location = useLocation();
  console.log(location);
  console.log("l'id est:", location.state.appartementId);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/ListeLogement.json")
      .then((response) => response.json())
      .then((responses) => {
        const data = responses.find(
          (response) => response.id === location.state.appartementId
        );
        setData(data);
        console.log("data:", data);
      })
      .catch(console.error);
  }, []);

  if (data == null) return <div>Chargement de l'image..</div>;

  return (
    <>
      <div className="banner">
        <div className="image_banner">
          <NavLink to={`/`}>
            <img className="banner_logo" src="/logo.jpg" alt="logo" />
          </NavLink>
        </div>

        <div className="lien_banner">
          <NavLink to={`/`}>Accueil</NavLink>

          <span className="separation-liens"></span>

          <NavLink to={`/Apropos`}>A propos</NavLink>
        </div>
      </div>
      <div className="ficheLogementTotal">
        <div className="imageLogement">
          <Gallery pictures={data.pictures} />
        </div>

        <div className="titreLogement">
          <LogementTitre
            title={data.title}
            location={data.location}
            tag={data.tags}
          />

          <LogementProprietaire
            rating={data.rating}
            host={data.host}
          />
        </div>

        <div className="descriptionLogement">
          <LogementDescription
            title="Description"
            content={data.description}
          />

          <LogementDescription
            title="Equipements"
            content={data.equipments.map((equipement) => (
              <li key={equipement}>{equipement}</li>
            ))}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FicheLogement;
