import "./CardProgress.css";
import Card from "react-bootstrap/Card";

import { Table } from "react-bootstrap";
export default function CardProgress(props) {
  const reportData = [
    {
      course: "Mathematics",
      grade: "A",
      Marks: "90",
      comment: "Excellent performance in mathematics.",
    },
    {
      course: "Science",
      grade: "B",
      Marks: "70",
      comment: "Good effort in science class.",
    },
    {
      course: "History",
      grade: "C",
      Marks: "60",
      comment: "Average performance in history.",
    },
    {
      course: "Urdu",
      grade: "C",
      Marks: "60",
      comment: "Average performance in Urdu.",
    },
    {
      course: "English",
      grade: "A",
      Marks: "99",
      comment: "Excellent performance in English.",
    },
  ];
  return (
    <Card className="card-mainpro  mt-4">
      <Card.Header className="card-head text-center">
        Overall Progress
      </Card.Header>
      <Card.Body className="cardpro-body">
        <Table striped bordered hover table-responsive>
          <thead className="thead-main">
            <tr>
              <th className="th-common">Course</th>
              <th className="th-common">Obt Marks</th>
              <th className="th-common">Total Marks</th>
              <th className="th-common">Comment</th>
              <th className="th-common">Notes</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {props?.data?.length > 0
              ? props?.data?.map((item, index) => (
                  <tr key={index}>
                    <td>{item.subject}</td>
                    <td>{item.obtainMarks}</td>
                    <td>{item.totalMarks}</td>
                    <td>{item.feedback}</td>
                    <td className="limited-width-cell">
                      {item.notes ? <a href={item.notes} target="_blank" style={{textDecoration:"underline",color:"blue"}}>Click here</a> : "No notes"}
                    </td>
                  </tr>
                ))
              : "No data Found"}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}
