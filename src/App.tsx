import { framer } from "framer-plugin";
import { FaStar, FaMousePointer, FaCheckCircle, FaMagic, FaBook } from "react-icons/fa";
import PluginButton from "./components/PluginButton";
import "./App.css";

export function App() {
  return (
    <main style={styles.mainContainer} className="fade-in">
      <div style={styles.contentWrapper}>
        <img src="stars.png" alt="Five-star rating" style={styles.responsiveImage} />

        <div style={styles.descriptionContainer}>
          <div style={styles.row}>
            <p style={styles.paragraph}>
              <strong>Documentation</strong> is available <a href="https://kaizengrowth.notion.site/Reviewly-Documentation-1a70ca9b1cab804683b6dc7b3c46c532" target="_blank">here</a>.
            </p>
          </div>

          <div style={styles.row}>
            <p style={styles.paragraph}>Click below to add a fully functional review section.</p>
          </div>
        </div>

        <PluginButton />
        
        <div style={styles.successMessage} id="successMessage">
          <FaCheckCircle style={styles.successIcon} />
          <span>Component inserted successfully!</span>
        </div>
      </div>
    </main>
  );
}

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    transition: "all 0.4s ease-in-out",
    height: "fit-content",
    width: "100%",
    padding: 0,
    margin: 0
  },
  contentWrapper: {
    width: "92%",
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    margin: 0
  },
  responsiveImage: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
    display: "block",
    marginBottom: "12px"
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    gap: "5px",
    width: "100%",
    marginBottom: "12px"
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
    marginBottom: "0px",
    width: "100%"
  },
  paragraph: {
    margin: "0 0 3px 0"
  },
  icon: {
    fontSize: "22px",
    color: "#28a745",
    flexShrink: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "0px",
  },
  iconStar: {
    fontSize: "24px",
    color: "#ffcc00",
  },
  title: {
    fontSize: "0px",
    fontWeight: "bold",
    margin: "0",
  },
  successMessage: {
    display: "none",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#4CAF50",
    margin: "8px 0 0 0",
    padding: 0,
    fontWeight: "bold",
    transition: "opacity 0.5s ease-in-out",
    width: "100%",
    justifyContent: "center"
  },
  successIcon: {
    fontSize: "18px",
  }
};