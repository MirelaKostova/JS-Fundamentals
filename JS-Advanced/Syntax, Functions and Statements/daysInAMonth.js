function daysInAMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

daysInAMonth(1, 2012);
// 31

daysInAMonth(2, 2021);
// 28
