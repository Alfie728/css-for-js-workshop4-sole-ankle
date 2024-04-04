import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map(shoe => (
        <ShoeCardWrapper>
          <ShoeCard key={shoe.slug} {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const ShoeCardWrapper = styled.div`
  flex: 1;
  max-width: 365px;
  min-width: 275px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  flex: 1;
`;

export default ShoeGrid;
