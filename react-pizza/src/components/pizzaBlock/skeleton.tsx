import React from "react"
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={459}
    viewBox="0 0 280 459"
    backgroundColor="#f0f0f0"
    foregroundColor="#ecebeb"
    className="pizza-block"
  >
    <circle cx="134" cy="136" r="125" /> 
    <rect x="0" y="274" rx="10" ry="10" width="280" height="23" /> 
    <rect x="0" y="321" rx="10" ry="10" width="273" height="88" /> 
    <rect x="0" y="431" rx="10" ry="10" width="95" height="30" /> 
    <rect x="125" y="420" rx="24" ry="24" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;