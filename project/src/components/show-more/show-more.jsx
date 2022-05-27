import { useAppDispatch } from '../../hooks';
import { addTickets } from '../../store/actions';

function ShowMoreButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        dispatch(addTickets());
      }}
      className="load_more"
    >
      Показать еще
    </button>
  );
}

export default ShowMoreButton;
