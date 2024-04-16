import * as React from 'react';

const IconCircle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6.42578" cy="6" r="6" fill="#F0B401" />
    </svg>
  );
};

IconCircle.displayName = 'IconCircle';

export default IconCircle;
