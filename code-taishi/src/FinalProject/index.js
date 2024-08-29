import "./index.css";
import { useState, useEffect, useRef } from "react";
import trashion from "../Assets/trashion.jpeg";
import SwahiliPal from "../Assets/SwahiliPalLogo.png";
import Swahilipal from "../Assets/Swahilipal.png";
function FinalProject() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  return (
    <div className="div-container">
      <div className="modal" style={{ display: showModal ? "block" : "none" }}>
        <div className="modal-content" ref={modalRef}>
          <div className="cardsContainer">
            <div className="cardsText" id="delivery-card">
              <p className="theme-one-text">
                <h3 className="h1Tag">SwahiliPal Ownership</h3>
                
                <h4>Copyright Protection for SwahiliPal's</h4> 
                Content SwahiliPal's
                content, including the structured translations, personalized
                vocabulary, and contextual examples, will be eligible for
                copyright protection in Kenya. According to the Copyright Act of
                2001, literary works like computer programs and databases are
                protected for the lifetime of the author plus 50 years. To
                ensure proper protection, SwahiliPal should: Clearly indicate
                copyright notices on all content and software Register the
                copyright with the Kenya Copyright Board (KECOBO) for official
                recognition Enforce copyright by monitoring for unauthorized use
                and taking legal action if necessary
              </p>
              <br />

               
              <p className="theme-two">
                
                <h3 className="h1Tag"> Creativity </h3>
                The platform's creative design is evident in its interactive
                features that blend structured translations with personalized
                vocabulary building. SwahiliPal not only focuses on translating
                words and phrases but also enhances the learning experience by
                providing contextual examples in real-time. This creative
                integration of translation and context helps learners understand
                the practical application of language in various scenarios,
                making the learning process both engaging and relevant.
              </p>

              



              <p className="theme-three">
                <h3 className="h1Tag">Technical Know-How</h3>
                SwahiliPal’s backend utilizes Automatic Speech Recognition (ASR)
                technology to convert spoken language into text. This system is
                designed to accurately recognize and transcribe speech,
                providing users with real-time feedback on their pronunciation.
                Speech Input: Users speak into the app, and the ASR system
                captures their voice. Audio Processing: The system cleans the
                audio to remove background noise and enhances the clarity of the
                speech. Word Recognition: The ASR engine analyzes the cleaned
                audio to identify the spoken words using machine learning
                models. Feedback Mechanism: After processing, the app provides
                instant feedback on pronunciation, helping users improve their
                speaking skills
                <div className="app-benefits">
                  <div>
                    <img
                      className="phone-cover"
                      src={Swahilipal}
                      alt="Swahili-pal-app"
                    />
                  </div>

                  <ul>
                    <h3>Benefits of using SwahiliPal</h3>
                    <li>
                      Flexible Learning Schedule: Kioko can learn at his own
                      pace, fitting language study into his busy academic life.
                    </li>
                    <li>
                      Interactive and Engaging Content: The learning experience
                      keeps him motivated and makes language acquisition
                      enjoyable.
                    </li>
                    <li>
                      Support for Language Understanding: By focusing on
                      practical vocabulary and cultural context, Kioko can
                      quickly gain confidence in his ability to communicate
                      effectively.
                    </li>
                    <li>
                      Limited Time for Language Study: The app's flexibility
                      allows him to learn in short bursts that fit around his
                      academic commitments.
                    </li>
                  </ul>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="finalprojeIct">
        <div className="blog-container">
          <div>
            <img
              className="phone-cover"
              src={SwahiliPal}
              alt="Swahili-pal-app"
            />
          </div>

          <div className="Swahili-blog">
            <h1 className="blog-heading">
              Cultural Roots: East African indigenous language Preservation in
              shaping identity and knowledge
            </h1>
            <p className="about-book-text">
              SwahiliPal is designed to revolutionize the language learning
              experience by providing a comprehensive, interactive platform that
              combines structured translations with personalized vocabulary
              building. The app aims to create an engaging environment that
              fosters self-directed learning, allowing users like Kioko Kwame to
              take control of their educational journey. SwahiliPal will offer a
              robust translation feature that will not only translate words and
              phrases, but will also provide contextual examples in real-time.
            </p>
            <button
              className="read-more-btn"
              onClick={() => setShowModal(true)}
            >
              Read More
            </button>
          </div>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default FinalProject;
