import React from 'react';

import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface HeaderProps {}

const StyledPage = styled.div`
  color: pink;
`;

export const Page2 = (props: HeaderProps) => {
  return (
    <StyledPage>
        <Container>
            <Row>
                <Col><Button variant="contained" color="primary">Hello</Button></Col>
                <Col><Button variant="contained" color="primary">World</Button></Col>
            </Row>
        </Container>
    </StyledPage>
  );
};

export default Page2;
