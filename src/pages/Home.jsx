import React from "react";
import { useEffect } from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Home() {
  const imagesArray = [
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/The-Office-Wallpapers.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/The-Office-HD-Background.jpg",
    "https://www.cheatsheet.com/wp-content/uploads/2020/11/jim-and-pam-the-office-1200x800.jpg",
    "https://wallpapercave.com/wp/BlbVe8a.jpg",
    "https://www.cheatsheet.com/wp-content/uploads/2020/04/the-office.jpg",
    "https://img.nbc.com/sites/nbcunbc/files/images/2019/8/29/190829_4021423_Dwight_s_Fire_Drill___The_Office__Episode_Hi_anvver_1.jpg",
    "https://www.hdwallpaper.nu/wp-content/uploads/2016/09/The-Office_wallpaper_015462.jpg",
    "https://wallpapermemory.com/uploads/704/the-office-us-background-hd-1080p-45993.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/07/HD-The-Office-Images.jpg",
    "https://images7.alphacoders.com/872/thumb-1920-872878.jpg",
  ];

  const videosArray = [
    "https://www.youtube.com/embed/_8RdHJkH2gs",
    "https://www.youtube.com/embed/s-lQHuPUPWc",
    "https://www.youtube.com/embed/gO8N3L_aERg",
    "https://www.youtube.com/embed/Vmb1tqYqyII",
  ];

  var video = videosArray[Math.floor(Math.random() * videosArray.length)];

  const scrollTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <>
      <motion.section
        className="main"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="synopsis"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h1>The Office: An American Workplace</h1>
          <p>
            is a mockumentary that documents the exploits of a paper supply
            company in Scranton, Pennsylvania. Made up of head chief Michael
            Scott, a harmlessly deluded and ignorantly insensitive boss who
            cares about the welfare of his employees while trying to put his own
            spin on company policy. The Office (2005) takes a look at the lives
            of its co-workers: bored but talented salesman Jim, his mildly
            sociopathic, butt kissing enemy Dwight, mildly righteous
            receptionist Pam, and indifferent temp Ryan.
          </p>
          <div className="links-container">
            <a
              className="links rotate"
              href="https://www.instagram.com/theoffice/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={28} />
            </a>
            <a
              className="links rotate"
              href="https://www.youtube.com/c/TheOfficeUS/videos"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube size={28} />
            </a>
            <a
              className="links col-change"
              href="https://legacy-editor.archilogic.com/3d/archilogic/nsh7wfvq?sceneId=3d6acff4-abcd-4c58-b3f3-d56d99642199&mode=view&view-menu=none&main-menu=none"
              target="_blank"
              rel="noreferrer"
            >
              Take a tour!
            </a>
          </div>
        </motion.div>
      </motion.section>
      <section className="sec-two">
        <div>
          <h1>The Office Album</h1>
          <Splide
            aria-label="My Favorite Images"
            className="carousal"
            options={{
              rewind: true,
              gap: "2rem",
              pagination: false,
            }}
          >
            {imagesArray.map((image) => {
              return (
                <SplideSlide key={Math.random()}>
                  <img src={image} alt="Office Images" />
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
        <div>
          <h1>Watch a trailer.. sort of.</h1>
          <iframe
            className="video"
            width="600"
            height="355"
            src={video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="sec-thr">
        <h1>
          <div className="smoltext">
            Ready, <strong>grasshopper</strong>?
          </div>
          <div className="bigtext">
            Let's{" "}
            <a
              href="https://www.netflix.com/browse?jbv=70136120"
              rel="noreferrer"
            >
              start watching.
            </a>
          </div>
        </h1>
      </section>
    </>
  );
}

export default Home;
