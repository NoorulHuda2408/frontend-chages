import { Row, Col, Container } from "react-bootstrap";
import "./Packages.css";
import Cardp from "../../../components/Cards/Packagecard/Packagecard";
import Navbar from "../../../components/Navbar/index";
import Modalpkg from "../../../components/Modal/ModalAddPackages/Modalpkg";
import { useState } from "react";
export default function TeacherPackages() {
  const [modalpkg,setModalPkg]=useState(false)
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
    <Modalpkg
     show={modalpkg}
     onHide={() => setModalPkg(false)}
    />
      <Navbar />
      <Container>
        <Row className="mt-5 text-center">
          <h1 className="h1-pkg">Available Packages </h1>
        </Row>
        <button className="btn-learn mt-3" onClick={() => {setModalPkg(true)}}>
          Add Package
        </button>
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
