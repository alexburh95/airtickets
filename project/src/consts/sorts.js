const SORTS = {
  UP: 'UP',
  DOWN: 'DOWN',
  TIME: 'TIME',
};

const sorts = [
  {
    value: SORTS.UP,
    text: 'по позврастанию цены',
  },
  {
    value: SORTS.DOWN,
    text: 'по убыванию цены',
  },
  {
    value: SORTS.TIME,
    text: 'по времени перелета',
  },
];

export { SORTS };
export default sorts;
