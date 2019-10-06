import React, { PropsWithChildren } from "react";
import { Box } from "../../theme/box";
import { Link, Text } from "../../theme/text";
import { Title2 } from "../../theme/title";

export interface BlogListProps {
  title: string;
  subtitle: string;
  excerpt: string;
}

const Small = Text.withComponent("small");

export const BlogList = ({ title, subtitle, excerpt }: BlogListProps) => {
  return (
    <BlogList.Wrapper>
      <BlogList.Title title={title} />
      <BlogList.Subtile title={subtitle} />
      <BlogList.Text text={excerpt} />
    </BlogList.Wrapper>
  );
};

BlogList.Text = ({ text }) => {
  return (
    <Text fontFamily="serif" lineHeight="28px" fontSize="100%">
      {text}
    </Text>
  );
};

BlogList.Wrapper = ({ children }: PropsWithChildren<{}>) => {
  return <Box marginBottom={2}>{children}</Box>;
};

BlogList.Subtile = ({ title }: { title: string }) => {
  return (
    <Small lineHeight="22.4px" fontSize={1}>
      {title}
    </Small>
  );
};

BlogList.Title = ({ title }: { title: string }) => {
  return (
    <Title2>
      <Link lineHeight={1.1} fontSize="1.4427rem" color="main">
        {title}
      </Link>
    </Title2>
  );
};
