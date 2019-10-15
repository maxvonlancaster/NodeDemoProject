var React = require("react");
var ReactDOM = require("react-dom");
import { Jumbotron, Container, Row, Col } from "reactstrap";
import Test from "./components/Test.js";

export class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tests: [],
      testCollection: [],
      a: false
    };
    this.testCards = this.testCards.bind(this);
  }

  componentDidMount() {
    const response = fetch("/tests")
      .then(res => res.json())
      .then(res => {
        this.setState({ tests: res });
      });
  }

  getTestCollection(collectionName) {
    const response = fetch("/test/:" + collectionName)
      .then(res => res.json())
      .then(res => {
        this.setState({ testCollection: res });
      });
  }

  render() {
    this.state.a = true;
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">This is the test project</h1>
          <p className="lead">
            This is a simple hero unit, a simple Jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-2" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className="lead"></p>
        </Jumbotron>
        <Container fluid>
          <Row>{this.testCards()}</Row>
        </Container>
      </div>
    );
  }

  testCards() {
    return this.state.tests.map(test => {
      return (
        <Col className="p-3" sm="4">
          <Test text={test.TestText} title={test.TestName} />
        </Col>
      );
    });
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));


Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};