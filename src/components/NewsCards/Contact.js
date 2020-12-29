import React from "react";
import "./Contact.css";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div className="container__aboutUs">
      {/* <Fade top>
        <center>
          <h1>About Us</h1>
        </center>
      </Fade> */}
      <div className="container__details">
        <div className="details__image">
          <h1>About Us</h1>
        </div>
        <div className="details__text">
          <Fade left>
            <p className="me-text">
              I am Sanchit Soni, an aspiring Web Developer currently pursuing my
              B.Tech from LNCT, majoring in Information Technology. Web
              Development is something that has always interested and fascinated
              me. Having a prior experience of over 5 months in real time
              project. Talking about my hobbies, watching informational web
              series and movies along with some pc games help me relax and focus
              better at work.
            </p>
          </Fade>
          <br></br>
          <Fade left>
            {/* <p>
              I am Nilay Neerav, a backend developer currently pursuing my
              B.Tech from LNCT, in Information Technology. I have 5 months
              internship experience in developing the backend of a real time
              project.
            </p> */}
          </Fade>
          <br></br>
          <Fade left>
            {/* <p>
              I am Nischay Mehrotra, a python developer majoring my engineering
              at LNCT college from Information Technology. Have always loved to
              train models and machine and provide them an artificial mind so
              that they can perform similar tasks to humans so have been
              developing and training myself daily in python and moving forward
              to machine learning and data science world.
            </p> */}
          </Fade>
        </div>
      </div>
      <div className="container__image">
        {/* <img src="https://www.vtdesignz.com/wp-content/uploads/2016/06/about-us-banner.jpg"></img> */}
      </div>
      <div className="container__3">
        <div className="row1">
          <div className="quote">
            <div>
              <Fade left>
                <center>
                  <p className="text">
                    “First, solve the problem. Then, write the code.” – John
                    Johnson
                  </p>
                </center>
              </Fade>
            </div>
          </div>
          <div className="image">
            <Fade right>
              <center>
                <img
                  className="img1"
                  src="https://image.freepik.com/free-vector/web-developer-works-laptop-horizontal-banner-with-young-programmer-job-colorful-illustration-flat-style_198278-423.jpg"
                ></img>
              </center>
            </Fade>
          </div>
        </div>
        <div className="row2">
          <div className="image">
            <Fade left>
              <center>
                <img
                  className="img1"
                  src="https://image.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg"
                ></img>
              </center>
            </Fade>
          </div>
          <div className="quote">
            <Fade right>
              <center>
                <p className="text">
                  “Experience is the name everyone gives to their mistakes.” –
                  Oscar Wilde
                </p>
              </center>
            </Fade>
          </div>
        </div>
        <div className="row3">
          <div className="quote">
            <Fade left>
              <center>
                <p className="text">
                  "Simplicity is the soul of efficiency.” – Austin Freeman
                </p>
              </center>
            </Fade>
          </div>
          <div className="image">
            <Fade right>
              <center>
                <img
                  className="img1"
                  src="https://image.freepik.com/free-vector/website-development-web-page-programming-coding_277904-5103.jpg"
                ></img>
              </center>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
