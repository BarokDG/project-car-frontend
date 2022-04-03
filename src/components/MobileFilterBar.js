import { useState } from "react";

import FilterBarWrapper from "../components/FilterBar";

import { ModalContainer } from "../styles/Modal.style";

import { ReactComponent as Filter } from "../assets/filter.svg";

export default function MobileFilterBarWrapper() {
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
          <FilterBarWrapper />
        </ModalContainer>
      )}
    </>
  );
}
