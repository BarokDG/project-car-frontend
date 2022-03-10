// import { Button } from 'bootstrap';
import React, { useState, useEffect} from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import Modal from "./Modal";
import {getMultipleFiles} from '../data/api';
import {
  CarTitle,
  CarContainer,
  CarImage,
  CarDate,
  CarDescription,
  ActionButton,
} from "../styles/Car.style";

function Car(props) {
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [multipleFiles, setMultipleFiles] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getMultipleFilesList = async () => {
    try {
        const fileslist = await getMultipleFiles();
        setMultipleFiles(fileslist);
        console.log(multipleFiles);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMultipleFilesList();
  }, []);
  return (
    <>
      <Row md={3} xs={1} sm={2}>
      {multipleFiles.map((car, index) => {
          return (
            <>
              <Col>
                <CarContainer>
                  <CarImage src={`http://localhost:5000/${car.files[0].filePath}`} />
                  <CarTitle>
                    {car.make} 
                  </CarTitle>
                  <CarDate>{car.year} model</CarDate>
                  <CarDescription>
                    {car.transmission} Transmission
                    <br /> {car.price} <br /> 
                    <br /> {car.comment}
                  </CarDescription>
                  <ActionButton onClick={() => setActive(true)}>
                    <i class="fa fa-user icon"></i> Contact Buyer
                  </ActionButton>
                  <Modal
                    active={active}
                    hideModal={() => setActive(false)}
                    title="Modal Title"
                    car={car}
                  >
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                    {car.files.map((file, index) =>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src={`http://localhost:5000/${file.filePath}`}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    )}
                    </Carousel>
                    <CarDescription>
                      Contact Number: {car.carId}
                    </CarDescription>
                  </Modal>
                </CarContainer>
              </Col>
            </>
          );
        })}
      </Row>
    </>
  );
}

export default Car;
