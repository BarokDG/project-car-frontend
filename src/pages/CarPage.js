import React, { useState, useEffect, useRef } from "react";
import {
  SearchWrapper,
  SearchActionWrapper,
  Pagination,
} from "../styles/Herosection.style";
import Nav from "../components/Navbar";
import Car from "../components/Car";
import { Loader, LoaderContainer } from "../styles/Loader.style";
import { ModalContainer } from "../styles/Modal.style";

import { getCarsAPI } from "../data/api";

export default function CarPage() {
  const [cars, setCars] = useState();

  // for pagination
  const [pageNumber, setPageNumber] = useState(1);

  const searchInput = useRef();

  const getCars = async (pageNumber) => {
    try {
      const carsList = await getCarsAPI(pageNumber);
      setCars(carsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //To start loader
    setCars();

    getCars(pageNumber);
  }, [pageNumber]);

  //Todo
  const handleSearch = () => {};

  return (
    <>
      {!cars && (
        <ModalContainer loader>
          <LoaderContainer>
            <Loader />
            Loading...
          </LoaderContainer>
        </ModalContainer>
      )}
      <Nav />
      <SearchWrapper>
        <h1>Find cars by Make, Model or Keyword</h1>
        <SearchActionWrapper>
          <input
            ref={searchInput}
            type="text"
            placeholder="Enter keywords..."
          />
          <button onClick={handleSearch}>Search</button>
        </SearchActionWrapper>
      </SearchWrapper>
      {cars && (
        <>
          <Car cars={cars.data} />
          <Pagination>
            {[
              ...new Array(Math.ceil(cars.amountOfCars / cars.itemsPerPage)),
            ].map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setPageNumber(index + 1);
                  }}
                >
                  {index + 1}
                </button>
              );
            })}
          </Pagination>
        </>
      )}
    </>
  );
}
