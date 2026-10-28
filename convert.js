const universalGas = 8.314;
const hMol = 2.016e-3;

const inputForm = document.getElementById('inputForm')
addEventListener('input', function(){
  const temperature = document.getElementById('inTemp').value;
  const fromUnit = document.getElementById('convFrom').value;
  const tempKelvin = toKelvin(temperature, fromUnit);
  const toUnit = document.getElementById('convTo').value;
  const newTemp = toNewUnit(tempKelvin, toUnit);
  const destination = document.getElementById('result');
  destination.textContent = newTemp;
})

function toKelvin(temperature, units) {
  switch (units) {
    case "Kelvin":
      return temperature;
    case "Celsius":
      return temperature+273.15;
    case "Fahrenheit":
      return (temperature-32)*5/9+273.15;
  }
}

function toNewUnit(temperature, units) {
  switch (units) {
    case "Cricket Hz":
      return 5.63e10*Math.exp(-6290/temperature)/13;
    case "Fire Color":
      return -274;
    case "Hydrogen Speed":
      return (3*universalGas*temperature/hMol)**0.5;
    case "Kelvin":
      return temperature;
  }
}
