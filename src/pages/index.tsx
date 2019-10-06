import React from "react";
import { BlogList } from "../components/blogs/blog-list";
import PageTitle from "../components/page/page-title";
import SEO from "../gatsby/seo";
import { styled } from "../theme";
import { Link } from "../theme/text";

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title={<Link href="/">Gatsby Starter Personal Blog</Link>} />
    <BlogList
      excerpt="This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter."
      title="New beginnings"
      subtitle="May 28, 2015"
    />
    <BlogList
      excerpt="This is my first post on my new fake blog! How exciting! I’m sure I’ll write a lot more interesting things in the future. Oh, and here’s a…"
      title="My Second Post!"
      subtitle="May 06, 2015"
    />
  </Layout>
);

export default IndexPage;
