import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, url, repo } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={url || '#!'}
            >
              {btn || ' '}
            </a>
            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                href={repo || '#!'}
              >
                {cta || ''}
              </a>
            )}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
