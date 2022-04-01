import React, { useState, useEffect } from "react";

import Nav from "../components/Navbar";
import Car from "../components/Car";
import EmptyState from "../components/EmptyState";

import {
  ActionWrapper,
  FilterBar,
  FilterBarItem,
  SwitchContainer,
  Switch,
  Pagination,
} from "../styles/Herosection.style";
import { Loader, LoaderContainer } from "../styles/Loader.style";
import { ModalContainer } from "../styles/Modal.style";

import { getCarsAPI } from "../data/api";

export default function CarPage() {
  const [cars, setCars] = useState(null);

  // for pagination
  const [pageNumber, setPageNumber] = useState(1);
  const [filterRules, setFilterRules] = useState({});

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

  const handleFilter = async () => {
    let options = ["start", "end", "min", "max", "transmission"];

    options.forEach((option) => {
      filterRules[option] = document.querySelector(`[name=${option}]`).value;
    });

    filterRules.loan = document.querySelector("[name='loan'").checked;

    setFilterRules({ ...filterRules });
    setPageNumber(1);
  };

  const clearFilter = async () => {
    let options = ["start", "end", "min", "max", "transmission", "search"];

    options.forEach((option) => {
      document.querySelector(`[name=${option}]`).value = "";
    });

    document.querySelector("[name='loan'").checked = false;

    setFilterRules({});
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
      <ActionWrapper>
        <h1>Find cars by Make, Model or Keyword</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            filterRules.keyword = e.target.search.value;

            setFilterRules({ ...filterRules });
            setPageNumber(1);
          }}
        >
          <input type="search" name="search" placeholder="Enter keywords..." />
          <input type="submit" value="Search" />
        </form>
        <FilterBar>
          <FilterBarItem>
            <div>
              <label htmlFor="">Year</label>
              <select name="start" id="" defaultValue="">
                <option value="" hidden>
                  From
                </option>
                <option value="">Any</option>
                <option value="1980">1980</option>
                <option value="1990">1990</option>
                <option value="2000">2000</option>
                <option value="2010">2010</option>
                <option value="2020">2020</option>
              </select>
              <select name="end" id="">
                <option value="" hidden>
                  To
                </option>
                <option value="">Any</option>
                <option value="1980">1980</option>
                <option value="1990">1990</option>
                <option value="2000">2000</option>
                <option value="2010">2010</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </FilterBarItem>
          <FilterBarItem>
            <div>
              <label htmlFor="">Price</label>
              <select name="min" id="" defaultValue="">
                <option value="" hidden>
                  Min
                </option>
                <option value="">Any</option>
                <option value="500000">500000</option>
                <option value="750000">750000</option>
                <option value="1000000">1000000</option>
                <option value="1500000">1500000</option>
                <option value="2000000">2000000</option>
              </select>
              <select name="max" id="">
                <option value="" hidden>
                  Max
                </option>
                <option value="">Any</option>
                <option value="500000">500000</option>
                <option value="750000">750000</option>
                <option value="1000000">1000000</option>
                <option value="1500000">1500000</option>
                <option value="2000000">2000000</option>
              </select>
            </div>
          </FilterBarItem>
          <FilterBarItem>
            <div>
              <label htmlFor="">Transmission</label>
              <select name="transmission" id="" defaultValue="">
                <option value="">Any</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
          </FilterBarItem>
          <FilterBarItem>
            <div>
              <label htmlFor="loan">Loan</label>
              <SwitchContainer>
                <input type="checkbox" name="loan" id="" />
                <Switch />
                <span>Available</span>
              </SwitchContainer>
            </div>
          </FilterBarItem>
          <FilterBarItem>
            <button className="clear" onClick={clearFilter}>
              Clear
            </button>
            <button className="filter" onClick={handleFilter}>
              Filter
            </button>
          </FilterBarItem>
        </FilterBar>
      </ActionWrapper>
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
