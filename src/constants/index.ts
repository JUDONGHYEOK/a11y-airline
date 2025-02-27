export const COUNTER = {
  MIN_PASSENGER: 0,
  MAX_PASSENGER: 3,
};

export const ERROR_MESSAGE = {
  EXCEED_PASSENGER: `승객의 최대 인원은 ${COUNTER.MAX_PASSENGER}명입니다.`,
  FALL_SHORT_OF_MIN_PASSENGER: `승객의 최소 인원은 ${COUNTER.MIN_PASSENGER}명입니다.`,
  OUT_OF_BOUNDS: `성인 승객은 최소 ${COUNTER.MIN_PASSENGER}명 이상 ${COUNTER.MAX_PASSENGER}명의 자연수 이하여야 합니다.`,
};
