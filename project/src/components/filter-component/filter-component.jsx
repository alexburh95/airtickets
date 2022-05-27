import { toggleFilterCriteris } from '../../store/actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import filters from '../../consts/filters';

function Filter() {
  const dispatch = useAppDispatch();
  const transfersOptions = useAppSelector(
    (state) => state.choosenTransferOptions
  );

  const filterClickHandler = (filter) => {
    dispatch(toggleFilterCriteris(filter.value));
  };

  return (
    <>
      <p className="filter_title">Фильтровать</p>
      <form action="" className="sort">
        {filters.map((filter) => (
          <p key={filter.value}>
            <input
              name="sort"
              onChange={() => filterClickHandler(filter)}
              type="checkbox"
              value={filter.value}
              checked={transfersOptions.includes(filter.value)}
            />{' '}
            {filter.text}
          </p>
        ))}
      </form>
    </>
  );
}

export default Filter;
