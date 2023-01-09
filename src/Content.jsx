import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Content() {
  return (
    <div className="content">
      <div className="row">
        <div className="col-12 col-sm-4">
          <section id="self-intro">
            <h2>Hello</h2>
            <p>
              I'm a front-end developer, digital advertising specialist, social media planner, fashion content producer, aspiring full-stack developer.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="src/assets/Masafumi_Nozawa.pdf" target="_blank">View my profile in resume format</a>
          </section>
        </div>
        <div className="col-12 col-sm-4">
          <section id="projects">
            <h2>Projects</h2>
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
                <a href="https://www.google.com">Project 3</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
              <li>
                <a href="https://www.google.com">Project 4</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
              <li>
                <a href="https://www.google.com">Project 5</a>
                <p>
                  coming soon/coming soon/coming soon/coming soon/coming
                  soon/coming soon/coming soon/coming soon
                </p>
              </li>
              <li>
                <a href="https://www.google.com">Project 6</a>
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
            <p>
              Please feel free to reach me out. It may take up to 2-3 days for response. But, I'm happy to receive any sorts of messages.
            </p>
            <a href="mf.nozawa@gmail.com">Email Masafumi Nozawa</a>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Content;
