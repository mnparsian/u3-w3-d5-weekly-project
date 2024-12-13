import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./SideBar";
import MainContent from "./MainContent";

const Home = () => (
  <>
    <Container fluid className="vh-100">
      <Row>
        {/* Sidebar */}
        <Col md={2} className="p-0 bg-dark position-fixed vh-100" style={{ zIndex: 1 }}>
          <Sidebar />
        </Col>

        {/* MainContent */}
        <Col md={{ span: 10, offset: 2 }} className="p-0 overflow-auto vh-100">
          <MainContent />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
