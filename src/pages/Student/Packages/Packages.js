import { Row, Col, Container } from "react-bootstrap";
import "./Packages.css";
import Cardp from "../../../components/Cards/Packagecard/Packagecard";
import Navbar from "../../../components/Navbar/index";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../../../service/client";
import { useState } from "react";
export default function Packages() {
  const [dataa,setDataa]=useState()


  const { id } = useParams();
  console.log(id);
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

    const data=await axios.get(`${API_URL}/api/getMentorPkg/${id}`)
    setDataa(data?.data)
    console.log(data)

  }

  useEffect(()=>{
    getPackage()
  },[])
  return (
    <>
      <Navbar />
      <Container>
        <Row className="mt-5 text-center">
          <h1 className="h1-pkg">Available Packages </h1>
        </Row>
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
