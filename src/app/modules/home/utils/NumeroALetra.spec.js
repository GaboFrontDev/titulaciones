const nombres = require("./NumeroALetra.js");
test("Should work NumeroALetras", () => {
  expect(nombres.NumeroALetras(10)).toBe("DIEZ");
});
test("Should be NOVENTA Y CINCO", () => {
  expect(nombres.NumeroALetras(95)).toBe("NOVENTA Y CINCO");
});
