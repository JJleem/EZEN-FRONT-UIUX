import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={50}
          src="https://static.vecteezy.com/system/resources/thumbnails/002/775/156/small_2x/unknown-person-icon-vector.jpg"
          alt="profile"
        />
      </Col>
      <Col lg={10}>
        <div>{item?.name}</div>
        <div>{item?.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
