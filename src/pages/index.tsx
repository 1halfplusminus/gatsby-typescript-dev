import React from "react";
import styled from "styled-components";
import SEO from "../components/seo";

const Title = styled.h1`
  margin: 0 0 12px 0;
  padding: 0;
  color: red;
`;

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Title>Hello world</Title>
  </div>
);

export default IndexPage;
