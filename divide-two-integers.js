var divide = function (dividend, divisor) {
  const sign = dividend > 0 && divisor > 0 ? '+' : '-';

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  let quotient = 0;
  while (dividend + divisor > divisor) {
    if (dividend > divisor) {
      quotient++;
    } else {
      let lastDividend =
        dividend +
        dividend +
        dividend +
        dividend +
        dividend +
        dividend +
        dividend +
        dividend +
        dividend +
        dividend;
      while (lastDividend > divisor) {
        quotient += 0.1;
        lastDividend -= divisor;
        console.log('quotient', quotient);
      }
    }
    dividend -= divisor;
  }
  // console.log('quotient', quotient);
};

divide(10, -3);
