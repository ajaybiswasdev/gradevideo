import moment from "moment";

export const getNextDays = (count) => {
  const nextDays = [];
  const d = new Date();
  for (let i = 0; i < count; i++) {
    d.setDate(d.getDate() + 1);
    nextDays.push(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`);
  }
  return nextDays;
};

export const getDetailsDays = (count) => {
  const nextDays = [];
  const d = new Date();
  for (let i = 0; i < count; i++) {
    d.setDate(d.getDate() + 1);
    nextDays.push({
      month: moment(d).format("MMM"),
      day: moment(d).format("DD"),
      weekday: moment(d).format("dddd"),
      tutor_date: moment(d).format("MM/DD/YYYY"),
    });
  }
  console.log(nextDays);
  return nextDays;
};
