import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {AppBar} from 'material-ui';

class MovieBrowser extends React.Component {
  render() {
    return (
      <div>
        <AppBar title='Movie Browser' />
        <Container>
          <Row>
            <p>Search will go here</p>
          </Row>
          <Row>
            <p>Movie list will go here</p>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieBrowser;