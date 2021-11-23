const convertWeeks = (pointdate, birthdate) => {
  const daydiff = pointdate.diff(birthdate, "day");
  const diff = Math.round((daydiff * 10) / 7) / 10;
  return diff;
};

const convertMonths = (pointdate, birthdate) => {
  const unit = "month";
  const daydiff = pointdate.diff(birthdate, "day");
  const datediff = pointdate.diff(birthdate, unit);
  let diff = 0;
  if (daydiff > 365) {
    const years = pointdate.diff(birthdate, "year");
    const months = datediff % 12;
    const rest = daydiff - years * 365 - months * 30;
    diff = datediff + Math.round((rest * 10) / 30) / 10;
  } else {
    const rest = daydiff - datediff * 30;
    diff = datediff + Math.round((rest * 10) / 30) / 10;
  }
  return diff;
};

// eslint-disable-next-line import/prefer-default-export
export const convert = (pointdate, birthdate, unit) => {
  if (unit === "month") {
    return convertMonths(pointdate, birthdate);
  }
  if (unit === "week") {
    return convertWeeks(pointdate, birthdate);
  }
  return 0;
};
