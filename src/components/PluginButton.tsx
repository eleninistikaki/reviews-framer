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
    gap: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "12px 20px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 6px 15px rgba(0, 123, 255, 0.3)",
  },
  buttonIcon: {
    fontSize: "16px",
  },
  loadingIcon: {
    fontSize: "16px",
    animation: "spin 1s infinite linear",
  },
};

export default PluginButton;
