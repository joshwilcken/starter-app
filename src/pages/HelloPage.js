import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Hello from '../components/Hello';

function HelloPage() {
  return (
    <div className='app'>
      <div className='app-body'>
        <Container fluid className='text-center'>
          <Hello />
        </Container>
      </div>
    </div>
  );
}

export default HelloPage;
