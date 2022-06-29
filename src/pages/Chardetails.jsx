import React from "react";
import { useParams } from "react-router-dom";
import data from "../characters.json";
import { motion } from "framer-motion";
import "../styles/Chardetails.css";

function Chardetails() {
  var thirdName = "";
  var details = {};

  let params = useParams();

  details = data.filter((char) => {
    return char._id === params._id;
  });

  if (details[0].actor[2] === undefined) {
    thirdName = "";
  } else {
    thirdName = details[0].actor[2];
  }

  var quotesobj = details[0].quotes;

  var randquote = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  };

  const quotefinal = randquote(quotesobj);

  return (
    <>
      <div className="main-detail-container">
        <motion.div
          className="containerdeets"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.7 }}
        >
          <img src={details[0].image} alt="" />
          <div className="deets">
            <h3>{details[0].firstname + " " + details[0].lastname}</h3>
            <p>{details[0].summary}</p>
            <h4>
              Portrayed by:{" "}
              <a
                href={
                  "https://en.wikipedia.org/wiki/" +
                  details[0].actor[0] +
                  "_" +
                  details[0].actor[1] +
                  "_" +
                  thirdName
                }
                target="_blank"
                rel="noreferrer"
              >
                {details[0].actor[0] +
                  " " +
                  details[0].actor[1] +
                  " " +
                  thirdName}
              </a>
            </h4>
          </div>
        </motion.div>
        <div className="quote">
          <h1>{quotefinal}</h1>
          <h5>-{details[0].firstname + " " + details[0].lastname}</h5>
        </div>
      </div>
    </>
  );
}

export default Chardetails;
