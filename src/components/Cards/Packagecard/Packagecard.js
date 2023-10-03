
import "./Packagecard.css";
import Card from "react-bootstrap/Card";
import { FaCalendar, FaUsers, FaBook, FaModx } from 'react-icons/fa';
import { IoMdDesktop, IoMdPeople } from 'react-icons/io';
export default function Packagecard({ title, price, features }) {
  return (
    <Card className="card-mainp  mt-4">
     <Card.Header className="card-header text-center">{title}</Card.Header>
      <Card.Body className="card3-body">
      <Card.Title className="card-title">${price}</Card.Title>
      <ul className="ul-txt">
          <li className="li-txt">
            <FaCalendar size={24} color="#D22B2B"  /> {features.sessions} Sessions
          </li>
          <li className="li-txt">
            <FaUsers size={24} color="#1A4B80"/> {features.support}
          </li>
          <li className="li-txt">
            <FaBook   size={24} color="#BFAD26"/> {features.studyMaterials}
          </li>
          <li className="li-txt">
          {features.Mode === 'Online' ? (
              <IoMdDesktop  size={24} color="rgb(244, 140, 6)"/>
            ) : (
              <IoMdPeople size={24} color="#2698D1" />
            )}{' '}
            {features.Mode}
          </li>
        </ul>
        
        
      </Card.Body>
    </Card>
  );
}
