/**
 * @param date Must be a JavaScript new Date() object
 */
function howLongSince(date) {
  let start = new moment(date);
  let now = new moment();
  let zero = 0;

  let years = getYearsFromNow(date);
  if (years === zero) {
    years = zero;
  } else {
    start.add(years, 'years');
  }

  let months = getMonthsFromNow(start.toDate());
  if (months === zero) {
    months = zero;
  } else {
    start.add(months, 'months');
  }

  let days = getDaysFromNow(start.toDate());
  if (days === zero) {
    days = zero;
  } else {
    start.add(days, 'days');
  }

  let hours = getHoursFromNow(start.toDate());

  return { years, months, days, hours };
}

function getYearsFromNow(date) {
  let start = new moment(date);
  let now = new moment();
  let duration = moment.duration(now.diff(start));
  return Math.floor(duration.asYears());
}

function getMonthsFromNow(date) {
  let start = new moment(date);
  let now = new moment();
  let duration = moment.duration(now.diff(start));
  return Math.floor(duration.asMonths());
}

function getDaysFromNow(date) {
  let start = new moment(date);
  let now = new moment();
  let duration = moment.duration(now.diff(start));
  return Math.floor(duration.asDays());
}

function getHoursFromNow(date) {
  let start = new moment(date);
  let now = new moment();
  let duration = moment.duration(now.diff(start));
  return Math.floor(duration.asHours());
}
