const fibonacci = function (fibArg) {
  let fibCount;
  if (typeof fibArg !== "number") {
    fibCount = parseInt(fibArg);
  } else {
    fibCount = fibArg;
  }

  if (fibCount < 0) return "OOPS";
  if (fibCount == 0) return 0;

  let fibN1 = 1, fibN2 = 0;

  for (let i = 2; i <= fibCount; i++) {
    let fibCurrent = fibN1 + fibN2;
    fibN2 = fibN1;
    fibN1 = fibCurrent;
  }

  return fibN1;
};

// Do not edit below this line
module.exports = fibonacci;
