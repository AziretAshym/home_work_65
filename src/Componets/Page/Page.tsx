import React from 'react';

  interface Props {
    title: string;
    subtitle: string;
    content: string;
  }

const Page: React.FC<Props> = ({title, subtitle, content}) => {
  return (
    <div className="container">
      <h2 className="text-center">{title}</h2>
      <p className="text-center"><strong>{subtitle}</strong></p>
      <p>{content}</p>
    </div>
  );
};

export default Page;