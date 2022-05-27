import { useAppDispatch, useAppSelector } from '../../hooks';
import { chooseSort } from '../../store/actions';
import sorts from '../../consts/sorts';

function Sort() {
  const dispatch = useAppDispatch();
  const currenSort = useAppSelector((state) => state.choosenSort);

  const sortClickHandler = (sort) => {
    dispatch(chooseSort(sort.value));
  };

  return (
    <>
      <p className="filter_title">Сортировать</p>
      <form action="" className="sort">
        {sorts.map((sort) => (
          <p key={sort.text}>
            <input
              name="sort"
              onChange={() => sortClickHandler(sort)}
              type="radio"
              checked={sort.value === currenSort ? true : false}
              value={sort.value}
            />{' '}
            {sort.text}
          </p>
        ))}
      </form>
    </>
  );
}

export default Sort;
