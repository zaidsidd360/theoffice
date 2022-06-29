import React from "react";
import data from "../characters.json";
import "../styles/Characters.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

function Characters() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  const filteredChar = data.filter((char) => {
    return char.firstname.toLowerCase().includes(input.toLowerCase());
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="inp">
          <motion.input
            type="search"
            placeholder="Search Characters"
            onChange={handleChange}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
          />
        </div>
        <div className="charcontainer">
          {filteredChar.map((char, index) => {
            return (
              <>
                <motion.div
                  initial={{ y: "100vh", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", duration: 0.8 }}
                  key={uuidv4()}
                >
                  <Link
                    to={"/characters/" + char._id}
                    className="charcard"
                    key={uuidv4()}
                    onClick={scrollTop}
                  >
                    <img src={char.image} alt="" key={uuidv4()} />
                    <h2 key={uuidv4()}>
                      {char.firstname + " " + char.lastname}
                    </h2>
                  </Link>
                </motion.div>
              </>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Characters;
