import React, { useState } from "react";
import { framer } from "framer-plugin";
import { FaPlus, FaSpinner } from "react-icons/fa";

const PluginButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleInsertReviewComponent = async () => {
    setLoading(true);
    try {
      const instance = await framer.addComponentInstance({
        url: "https://framer.com/m/ReviewSummary-3TV0.js@RFyaZnZ4GBBbAJmjtiLP",
        attributes: {
          width: "1800px",
          height: "200px",
        },
      });

      console.log("Review component inserted:", instance);
      const successMessage = document.getElementById("successMessage");
      if (successMessage) {
        setLoading(false)
        successMessage.style.display = "flex";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 5000); // Hide after 5 seconds
      }
    } catch (error) {
      console.error("Error inserting review component:", error);
    }
  };

  return (
    <button
      style={styles.button}
      onClick={handleInsertReviewComponent}
    //   className="pulse-animation"
    >
      {loading ? <FaSpinner style={styles.loadingIcon} className="spin" /> : <FaPlus style={styles.buttonIcon} />}
      {loading ? "Adding..." : "Add Reviews"}
    </button>
  );
};

const styles = {
  button: {
    display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "5px",
      backgroundColor: "#f3f3f3",
      color: "#333333",
      padding: "10px 20px",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontSize: "12px", // Only reduced the font size
      fontWeight: "bold",
      transition: "all 0.3s ease-in-out",
  },
  buttonIcon: {
    fontSize: "12px",
  },
  loadingIcon: {
    fontSize: "16px",
    animation: "spin 1s infinite linear",
  },
};

export default PluginButton;
