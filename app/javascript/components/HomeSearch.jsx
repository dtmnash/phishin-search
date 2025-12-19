import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import oldManFishing from "../images/old_man_fishing.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const HomeSearch = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (term) {
      navigate(`/search?term=${encodeURIComponent(term)}`);
    }
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "calc(100vh - 56px)", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="container has-text-centered">
        <div className="columns is-centered">
          <div className="column is-half">
            <figure className="image is-inline-block" style={{ marginBottom: "2rem" }}>
                <img src={oldManFishing} alt="Man fishing" style={{ maxHeight: "400px", width: "auto" }} />
            </figure>

            <form onSubmit={handleSearch}>
                <div className="field has-addons has-addons-centered">
                    <div className="control is-expanded">
                        <input
                            className="input is-large"
                            type="text"
                            placeholder="go phishin"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            autoCapitalize="off"
                        />
                    </div>
                    <div className="control">
                        <button className="button is-large is-info">
                            <span className="icon">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </button>
                    </div>
                </div>
            </form>

            <div style={{ marginTop: "2rem" }}>
                <Link to="/years" className="button is-text is-large has-text-white">
                    Browse Catalog
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
