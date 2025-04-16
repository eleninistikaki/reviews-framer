import { framer } from "framer-plugin";
import { FaCheckCircle } from "react-icons/fa";
import PluginButton from "./components/PluginButton";
import "./App.css";

framer.showUI({
  position: "top right",
  width: 290,
  height: 220,
});

export function App() {
  return (
    <main className="main-container fade-in">
      <div className="content-wrapper">
        <img src="stars.png" alt="Five-star rating" className="responsive-image" />

        <div className="description-container">
          <div className="row">
            <p className="paragraph">
              <strong>Documentation</strong> is available{" "}
              <a
                href="https://kaizengrowth.notion.site/Reviewly-Documentation-1a70ca9b1cab804683b6dc7b3c46c532"
                target="_blank"
              >
                here
              </a>.
            </p>
          </div>

          <div className="row">
            <p className="paragraph">Click below to add a fully functional review section.</p>
          </div>
        </div>

        <PluginButton />

        <div className="success-message" id="successMessage">
          <FaCheckCircle className="success-icon" />
          <span>Component inserted successfully!</span>
        </div>
      </div>
    </main>
  );
}
