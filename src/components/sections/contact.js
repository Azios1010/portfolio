import React from 'react';
import styled from 'styled-components';
import { email } from '@config';
import { useIntersectionObserver } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useIntersectionObserver();

  return (
    <StyledContactSection id="contact" ref={revealContainer} className="reveal-on-scroll">
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        I&apos;m open to research collaborations, internships, and engineering opportunities in
        computer vision, intelligent transportation, AI engineering, Agentic AI, object tracking,
        and hardware-in-the-loop systems. If you&apos;re working on a related project or interested in
        collaborating, feel free to get in touch.
      </p>

      <a className="email-link" href={`mailto:${email}`}>
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
