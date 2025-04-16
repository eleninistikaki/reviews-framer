import React, { useState } from "react";
import { framer } from "framer-plugin";
import { FaPlus, FaSpinner } from "react-icons/fa";
import "./PluginButton.css";

const PluginButton: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const handleInsertReviewComponent = async () => {
    setLoading(true);
    try {
      await framer.addComponentInstance({
        url: "https://framer.com/m/ReviewSummary-3TV0.js@RFyaZnZ4GBBbAJmjtiLP",
        attributes: {
          width: "1700px",
          height: "200px",
        },
      });

      framer.notify("Review component added successfully!", {
        durationMs: 5000,
        variant: "success",
      });
    } catch (error) {
      framer.notify("Failed to add the review component.", {
        durationMs: 5000,
        variant: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="plugin-button" onClick={handleInsertReviewComponent}>
      {loading ? (
        <FaSpinner className="plugin-loading-icon" />
      ) : (
        <FaPlus className="plugin-button-icon" />
      )}
      {loading ? "Adding..." : "Add Reviews"}
    </button>
  );
};

export default PluginButton;
