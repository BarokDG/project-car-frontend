import React, { useState, useEffect, useRef } from "react";
import {
  SearchWrapper,
  SearchActionWrapper,
  Pagination,
} from "../styles/Herosection.style";
import Nav from "../components/Navbar";
import Car from "../components/Car";
import { Loader, LoaderContainer } from "../styles/Loader.style";
import {
  FilterBar,
  Select,
  SwitchContainer,
  Switch,
} from "../styles/Filter.style";
import { ModalContainer } from "../styles/Modal.style";
import EmptyState from "../components/EmptyState";

import { getCarsAPI } from "../data/api";

export default function CarPage() {
  const [cars, setCars] = useState(null);

  const searchInput = useRef();

  // for pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [filterRules, setFilterRules] = useState({
    loan: false,
  });

  const getCars = async (pageNumber) => {
    // To resume loader
    setCars(null);

    try {
      const carsList = await getCarsAPI(pageNumber, filterRules);
      setCars(carsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCars(pageNumber, filterRules);
  }, [pageNumber, filterRules]);

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
            type="search"
            placeholder="Enter keywords..."
          />
          <button
            onClick={() => {
              filterRules.keyword = searchInput.current.value;

              setFilterRules({ ...filterRules });
              setPageNumber(1);
            }}
          >
            Search
          </button>
        </SearchActionWrapper>
      </SearchWrapper>
      <FilterBar>
        <Select defaultValue="" onChange={() => {}}>
          <option value="" disabled hidden>
            Year
          </option>
          <option value="2001">2001</option>
          <option value="2005">2005</option>
        </Select>
        <SwitchContainer>
          <input
            onChange={() => {
              filterRules.loan = !filterRules.loan;

              setFilterRules({ ...filterRules });
              setPageNumber(1);
            }}
            type="checkbox"
            name="loan"
            id=""
          />
          <Switch />
          <span>loan available</span>
        </SwitchContainer>
      </FilterBar>
      {cars && (
        <>
          {cars.data.length ? (
            <>
              <Car cars={cars.data} />
              <Pagination>
                {[
                  ...new Array(
                    Math.ceil(cars.amountOfCars / cars.itemsPerPage)
                  ),
                ].map((item, index) => {
                  return (
                    <button
                      key={index}
                      className={pageNumber === index + 1 ? "active-page" : ""}
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
          ) : (
            <EmptyState />
          )}
        </>
      )}
    </>
  );
}
