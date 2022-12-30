import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <ul className="social-media">
          <li>
            <a
              target="_blank"
              href="https://www.github.com/neriobalza/"
              title="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.twitter.com/neriobalza_/"
              title="Twitter"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/neriobalza/"
              title="Linkedin"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <div className="copy-right">
          <p>
            This page was handcrafted by{" "}
            <a
              target="_blank"
              href="https://www.neriobalza.com/"
              title="Nerio Balza"
            >
              @neriobalza
            </a>
            .
          </p>
        </div>

        <div className="colophon">
          <p className="colophon-entry">
            Icons made by{" "}
            <a
              target="_blank"
              href="https://www.flaticon.com/authors/freepik"
              title="Freepik"
            >
              Freepik
            </a>
            {" from "}
            <a
              target="_blank"
              href="https://www.flaticon.com/"
              title="Flaticon"
            >
              www.flaticon.com
            </a>
            .
          </p>

          <p className="colophon-entry">
            Avocado images taken from{" "}
            <a
              target="_blank"
              href="https://www.californiaavocado.com/avocado101/avocado-varieties"
              title="California Avocado"
            >
              Avocado 101
            </a>
            {" at "}
            <a
              target="_blank"
              href="https://www.californiaavocado.com"
              title="Flaticon"
            >
              California Avocado
            </a>
            .
          </p>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          height: 260px;
          border-top: 1px solid var(--border-color);
          box-shadow: 0px -5px 5px var(--border-color);
          padding: 4rem 2rem;
          color: #555;
          display: grid;
          place-content: center;
        }

        .social-media {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .social-media li a {
          font-size: 2rem;
          padding: 1rem;
          background: var(--dark-gray);
          color: var(--white);
          border-radius: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .copy-right {
          text-align: center;
          margin-bottom: 2rem;
        }

        .copy-right p a {
          color: rgba(0, 0, 255, 0.6);
        }

        .colophon {
          text-align: center;
          font-size: 1.2rem;
        }

        .colophon-entry > a {
          color: rgba(0, 0, 255, 0.6);
        }
      `}</style>
    </>
  );
};

export default Footer;
