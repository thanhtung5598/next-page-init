import type { PropsWithChildren } from 'react';

type ProfileContainerProps = PropsWithChildren<{}>;

const ProfileContainer = ({ children }: ProfileContainerProps) => {
  return (
    <div className="">
      <main>{children}</main>
    </div>
  );
};

export default ProfileContainer;
