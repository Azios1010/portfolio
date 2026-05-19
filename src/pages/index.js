import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Head as SEO, Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Jobs />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

export const Head = () => <SEO />;

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
