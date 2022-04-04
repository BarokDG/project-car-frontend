import {
  FilterBar,
  FilterBarItem,
  SwitchContainer,
  Switch,
} from "../styles/Herosection.style";

export default function FilterBarWrapper() {
  return (
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
    </FilterBar>
  );
}
