import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return <div className="bg-pink-200">Hello Hanpengbutt Bolg!</div>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
