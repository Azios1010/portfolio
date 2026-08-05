import React from 'react';
import { withPrefix } from 'gatsby';
import styled from 'styled-components';
import { useIntersectionObserver } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useIntersectionObserver();

  const skills = [
    'Python',
    'PyTorch',
    'YOLO11n',
    'OpenCV & NumPy',
    'scikit-learn',
    '3-D Kalman Filtering',
    'C / C++ & Windows APIs',
    'Arduino / HIL',
    'Docker',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer} className="reveal-on-scroll">
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I&apos;m Huan, a Computer Engineering student at Hanoi University of Science and
              Technology (HUST), with a primary research focus on computer vision and intelligent
              systems.
            </p>

            <p>
              My work explores perception-driven applications, including object detection, depth
              estimation, multi-object tracking, and hardware-integrated evaluation. Alongside
              computer vision research, I also have hands-on experience in Vietnamese NLP and
              retrieval-augmented generation, from developing sentiment analysis models to building
              modular RAG pipelines.
            </p>

            <p>
              I am particularly interested in developing AI systems that are experimentally
              validated, aware of real-world constraints, and practical for deployment.
            </p>

            <p>Here are a few technologies I&apos;ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <img
              className="img"
              src={withPrefix('/avt_profile_nguyenvanhuan.png')}
              alt="Huan Nguyen portrait"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
