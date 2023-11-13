import { Row, Col, Container } from "react-bootstrap";
import "./Packages.css";
import Cardp from "../../../components/Cards/Packagecard/Packagecard";
import Navbar from "../../../components/Navbar/index";
import Modalpkg from "../../../components/Modal/ModalAddPackages/Modalpkg";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useSelector } from "react-redux";

export default function TeacherPackages() {
  const [modalpkg,setModalPkg]=useState(false)
  const [dataa,setDataa]=useState()

  const userData = useSelector((state) => state?.signin?.signInData?.data);

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

  async function getPackage(){

    const data=await axios.get(`${API_URL}/api/getMentorPkg/${userData?._id}`)
    setDataa(data?.data)
    console.log(data)

  }

  useEffect(()=>{
    getPackage()
  },[])
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
          {dataa?.map((item, index) => {
            return (
              <Col key={index} md={12} lg={4}>
                <Cardp
                  title={item?.typeOfPkg}
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
