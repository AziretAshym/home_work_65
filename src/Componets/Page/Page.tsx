import React from 'react';

  interface Props {
    title: string;
    subtitle: string;
    content: string;
  }

const Page: React.FC<Props> = ({title, subtitle, content}) => {
  return (
    <div className="container">
      <h2 className="text-center fs-1 mb-4">{title}</h2>
      <p className="text-center fs-4 mb-4"><strong>{subtitle}</strong></p>
      <p className="fs-5">{content}</p>
    </div>
  );
};

export default Page;