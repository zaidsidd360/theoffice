import React from "react";
import seasonsData from "../seasons.json";
import "../styles/Seasons.css";
import { AiFillCaretDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Seasons() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      {seasonsData.map((season) => {
        return (
          <motion.div
            className="seasons-main"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="container-main"
              key={season.s_id}
              initial={{ opacity: 0, y: 400 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 0.8 }}
            >
              <details className="detail">
                <summary className="summary">
                  <h2>{season.name}</h2>
                  <AiFillCaretDown className="arrow" size={28} />
                </summary>
                <div className="sumimg-container">
                  <img
                    className="left-img"
                    src={season.cover}
                    alt="Season Cover"
                  />
                  <p>{season.summary}</p>
                </div>
              </details>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

export default Seasons;
