import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={476}
    viewBox="0 0 280 476"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="144" r="137" />
    <rect x="0" y="296" rx="10" ry="10" width="280" height="25" />
    <rect x="0" y="336" rx="10" ry="10" width="280" height="70" />
    <rect x="122" y="427" rx="20" ry="20" width="158" height="49" />
    <rect x="0" y="438" rx="10" ry="10" width="103" height="25" />
  </ContentLoader>
);

export default Skeleton;
