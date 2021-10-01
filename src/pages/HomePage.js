import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

function HomePage() {
  return (
    <div className="home-page">
      <Container>
        <h1>Welcome to the Application</h1>
        <div className="link-container">
          <Link to="/hello">Click to see hello message</Link>
          <Link to="/people">Click to see contacts</Link>
        </div>
      </Container>
    </div>
  );
}

export default withRouter(HomePage);
