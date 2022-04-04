import { useState } from "react";

import FilterBarWrapper from "../components/FilterBar";

import { ModalContainer } from "../styles/Modal.style";

import { ReactComponent as Filter } from "../assets/filter.svg";

export default function MobileFilterBarWrapper({ filterUtil }) {
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <>
      <button className="open-filter" onClick={() => setOpenFilter(true)}>
        Filter
        <Filter />
      </button>
      {openFilter && (
        <ModalContainer
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setOpenFilter(false);
            }
          }}
        >
          <div className="filter-modal">
            <h3>Filter</h3>
            <FilterBarWrapper />
            <div className="filter-apply">
              <button
                className="filter-primary"
                onClick={() => {
                  filterUtil();
                  setOpenFilter(false);
                }}
              >
                Apply
              </button>
              <button onClick={() => setOpenFilter(false)}>Cancel</button>
            </div>
          </div>
        </ModalContainer>
      )}
    </>
  );
}
