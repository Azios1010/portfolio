import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { IconLoader } from '@components/icons';

const draw = keyframes`
  0% { stroke-dashoffset: 300; }
  100% { stroke-dashoffset: 0; }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const scaleOut = keyframes`
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.1); opacity: 0; }
`;

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  transition: opacity 0.2s ease-in-out, z-index 0.2s;
  
  ${props => props.isFinished && css`
    opacity: 0;
    z-index: -1;
    pointer-events: none;
  `}

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    opacity: ${props => (props.isMounted ? 1 : 0)};
    transition: opacity 0.3s ease;
    
    ${props => props.startHide && css`
      animation: ${scaleOut} 0.3s ease-in-out forwards;
    `}

    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      
      path {
        stroke-dasharray: 300;
        stroke-dashoffset: 300;
        ${props => props.isMounted && css`
          animation: ${draw} 1.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.3s forwards;
        `}
      }
      
      #H {
        opacity: 0;
        ${props => props.isMounted && css`
          animation: ${fadeIn} 0.7s cubic-bezier(0.645, 0.045, 0.355, 1) 1.8s forwards;
        `}
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [startHide, setStartHide] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    document.body.classList.add('hidden');
    
    const timeoutMounted = setTimeout(() => setIsMounted(true), 10);
    const timeoutHide = setTimeout(() => setStartHide(true), 3000);
    const timeoutFinish = setTimeout(() => {
      setIsFinished(true);
      document.body.classList.remove('hidden');
      finishLoading();
    }, 3300);

    return () => {
      clearTimeout(timeoutMounted);
      clearTimeout(timeoutHide);
      clearTimeout(timeoutFinish);
      document.body.classList.remove('hidden');
    };
  }, [finishLoading]);

  return (
    <StyledLoader className="loader" isMounted={isMounted} startHide={startHide} isFinished={isFinished}>
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
