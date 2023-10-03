import { Row, Col, Container } from "react-bootstrap";
import "./Packages.css";
import Cardp from "../../../components/Cards/Packagecard/Packagecard";
import Navbar from "../../../components/Navbar/index";
export default function Packages() {
  const packages = [
    {
      title: "Basic Package",
      price: 500,
      features: {
        sessions: 10,
        support: "Online Support",
        studyMaterials: "Study Materials",
        Mode: "Home Tution & Online Tuiton",
      },
    },
    {
      title: "Monthly Package",
      price: 1000,
      features: {
        sessions: 10,
        support: "Online Support",
        studyMaterials: "Study Materials",
        Mode: "Home Tution & Online Tuiton",
      },
    },
    {
      title: "Premium Package",
      price: 2000,
      features: {
        sessions: 10,
        support: "Online Support",
        studyMaterials: "Study Materials",
        Mode: "Online",
      },
    },
    // Add more packages as needed
  ];
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5 text-center">
          <h1 className="h1-pkg">Available Packages </h1>
        </Row>
        <Row className="mt-5 mb-3">
          {packages.map((item, index) => {
            return (
              <Col key={index} md={12} lg={4}>
                <Cardp
                  title={item.title}
                  price={item.price}
                  features={item.features}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
