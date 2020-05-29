import React from 'react';
import logo from './logo.svg';
import './App.css';
import Memes from './memes'
import Editor from './image_editor.js'
// import 'tui-image-editor/dist/tui-image-editor.css'
//import ImageEditor from '@toast-ui/react-image-editor'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Container, Row,  Col} from 'react-bootstrap'

function App() {
  return (
    <Jumbotron>
      <Container>
        <Row>
          <Col>
            <Memes/>
          </Col>
          <Col>
            <Editor/>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default App;
