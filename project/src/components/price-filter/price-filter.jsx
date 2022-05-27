import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setMaxPrice, setMinPrice } from '../../store/actions';

function PriceFilter() {
  const dispatch = useAppDispatch();

  const maxPrice = useAppSelector((state) => state.maxPrice);
  const minPrice = useAppSelector((state) => state.minPrice);

  const maxPriceChangeHandler = (e) => {
    dispatch(setMaxPrice(Number(e.target.value)));
  };

  const minPriceChangeHandler = (e) => {
    dispatch(setMinPrice(Number(e.target.value)));
  };

  return (
    <>
      <p className="filter_title">Цена</p>
      <form action="" className="price">
        <p>
          От
          <input
            onChange={minPriceChangeHandler}
            type="number"
            size="20"
            value={minPrice === '' ? 0 : minPrice}
          />
        </p>
        <p>
          До
          <input
            onChange={maxPriceChangeHandler}
            type="number"
            size="20"
            value={maxPrice === '' ? 100000 : maxPrice}
          />
        </p>
      </form>
    </>
  );
}
export default PriceFilter;
