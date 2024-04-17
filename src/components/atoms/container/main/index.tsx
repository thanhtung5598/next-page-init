import type { PropsWithChildren } from 'react';

type MainContainerProps = PropsWithChildren<{}>;

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
};

export default MainContainer;
