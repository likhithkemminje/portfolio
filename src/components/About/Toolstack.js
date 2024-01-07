import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="lan-text">
      English
      </Col>
      <Col xs={4} md={2} className="lan-text">
        Kannada
      </Col>
      <Col xs={4} md={2} className="lan-text">
        Hindi
      </Col>
      <Col xs={4} md={2} className="lan-text">
       Tulu
      </Col>
    </Row>
  );
}

export default Toolstack;
