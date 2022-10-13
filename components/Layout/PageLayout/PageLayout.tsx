import Head from 'next/head';
import React, { HTMLProps } from 'react';
import { layoutProps } from '../../../interfaces';
import { Footer } from '../Footer';
import Header from '../Header';

const PageLayout: React.FC<HTMLProps<HTMLDivElement>> = React.memo(
  ({ title, children }: layoutProps) => {
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    );
  }
);

PageLayout.displayName = 'PageLayout';

export default PageLayout;
