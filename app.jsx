var React = require("react");
var ReactDOM = require("react-dom");
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import Test from "./components/Test.js";

export class Hello extends React.Component {
  render() {
    return (
    <div>
      <Jumbotron>
        <h1 className="display-3">This is the test project</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col className="p-3" sm="4">
            <Test text="sample text" title="sample title"/>
          </Col>
        </Row>
      </Container>
    </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
