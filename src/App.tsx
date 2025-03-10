import { framer } from "framer-plugin";
import { FaStar, FaMousePointer, FaCheckCircle, FaMagic, FaBook } from "react-icons/fa";
import PluginButton from "./components/PluginButton";
import "./App.css";

framer.showUI({
  position: "top right",
  width: 340,
  height: 320,
});

export function App() {
  return (
    <main style={styles.container} className="fade-in">
      <div style={styles.header}>
        <FaStar style={styles.iconStar} />
        <h3 style={styles.title}>Reviewly</h3>
      </div>

      <div style={styles.descriptionContainer}>
      <div style={styles.row}>
          <FaBook style={styles.icon} />
          <p>
            <strong>Documentation</strong> is available <a href="https://kaizengrowth.notion.site/Reviewly-Documentation-1a70ca9b1cab804683b6dc7b3c46c532" target="_blank">here</a>.
          </p>
        </div>

        <div style={styles.row}>
          <FaMagic style={styles.icon} />
          <p>
            <strong>Review Summary</strong> integrates seamlessly into your Framer design.
          </p>
        </div>

        <div style={styles.row}>
          <FaMousePointer style={styles.icon} />
          <p>Click below to add a fully functional review section.</p>
        </div>


      </div>

      <PluginButton />

      <div style={styles.successMessage} id="successMessage">
        <FaCheckCircle style={styles.successIcon} />
        <span>Component inserted successfully!</span>
      </div>
    </main>
  );
}

const styles = {
  descriptionContainer: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "flex-start",
    textAlign: "left" as "left",
    gap: "12px", // Space between row
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "4px", // Ensures even spacing between rows
  },
  icon: {
    fontSize: "22px",
    color: "#28a745",
    flexShrink: 0, // Prevents icon from resizing
  },
  container: {
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #ffffff, #f0f2f5)",
    borderRadius: "14px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: "all 0.4s ease-in-out",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "16px",
  },
  iconStar: {
    fontSize: "24px",
    color: "#ffcc00",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "0",
  },
  successMessage: {
    display: "none",
    alignItems: "center",
    gap: "10px",
    fontSize: "14px",
    color: "#4CAF50",
    marginTop: "12px",
    fontWeight: "bold",
    transition: "opacity 0.5s ease-in-out",
  },
  successIcon: {
    fontSize: "18px",
  },
};
