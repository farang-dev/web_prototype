import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Content() {
  return (
    <div className="content">
      <div className="row">
        <div className="col-12 col-sm-4">
          <section id="self-intro">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="./src/assets/Masafumi_Nozawa.pdf" target="_blank">View my profile in resume format</a>
          </section>
        </div>
        <div className="col-12 col-sm-4">
          <section id="projects">
            <h2>My Projects</h2>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <a href="https://www.google.com">Project 1</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
              <li>
                <a href="https://www.google.com">Project 2</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
              <li>
                <a href="https://www.google.com">Project 2</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
            </ul>
          </section>
        </div>
        <div className="col-12 col-sm-4" >
          <section id="contact">
            <h2>Contact</h2>
            <video src="src/assets/video.mp4" autoplay loop muted>
            </video>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="mf.nozawa@gmail.com">Email Masafumi Nozawa</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Content;
