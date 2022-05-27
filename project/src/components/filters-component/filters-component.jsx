import Filter from '../../components/filter-component/filter-component';
import Sort from '../../components/sort-component/sort-component';
import AirlineFilter from '../airline-filter/airline-filter';
import PriceFilter from '../price-filter/price-filter';

function Filters() {
  return (
    <>
      <Sort />
      <Filter />
      <PriceFilter />
      <AirlineFilter />
    </>
  );
}
export default Filters;
