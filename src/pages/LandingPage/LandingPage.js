import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import Filter from "../../components/Filter/Filter";
import MainSlider from "../../components/MainSlider/MainSlider";
import Products from "../../components/Products/Products";
import SortingFiler from "../../components/SortingFilter/SortingFiler";

const LandingPage = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col lg="3" md="12">
            <Row>
              <Col lg="12" md="12">
                <Filter />
              </Col>
              <Col lg="12" className="d-lg-block d-none">
                <Categories />
              </Col>
            </Row>
          </Col>
          <Col lg="9" md="12">
            <MainSlider />
            <SortingFiler />
            <Products />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
