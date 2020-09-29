import React from 'react';

import { Container, EllipseColumn } from './styles';

const Ellipse: React.FC = () => {
  const items = [];

  for (let i = 0; i < 70; i++) {
    items.push(<div></div>);
  }

  return (
    <Container>
      <EllipseColumn>{items}</EllipseColumn>
    </Container>
  );
};

export default Ellipse;
