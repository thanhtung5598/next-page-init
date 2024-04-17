import { useMemo, type PropsWithChildren } from 'react';
import Footer from './footer';
import Header from './header';
import { MainContainer } from '@/components/atoms';

export enum HeaderType {
  main,
}

export enum ContainerType {
  main,
}

export enum FooterType {
  main,
}

type MainLayoutProps = PropsWithChildren<{
  header: HeaderType;
  container: ContainerType;
  footer: FooterType;
}>;

const MainLayout = ({
  children,
  header,
  container,
  footer,
}: MainLayoutProps) => {
  const renderHeader = useMemo(() => {
    switch (header) {
      case HeaderType.main: {
        return <Header />;
      }

      default: {
        return undefined;
      }
    }
  }, [header]);

  const renderContainer = useMemo(() => {
    switch (container) {
      case ContainerType.main: {
        return <MainContainer>{children}</MainContainer>;
      }

      default: {
        return undefined;
      }
    }
  }, [children, container]);

  const renderFooter = useMemo(() => {
    switch (footer) {
      case FooterType.main: {
        return <Footer />;
      }

      default: {
        return undefined;
      }
    }
  }, [footer]);

  return (
    <>
      {renderHeader}
      {renderContainer}
      {renderFooter}
    </>
  );
};

export default MainLayout;
