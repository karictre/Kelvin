var tempKelvin = 0;
function update() {
  const temperature = document.getElementByID('inTemp').value;
  const from = document.getElementByID('fromUnit').value;
  tempKelvin = toKelvin()
  const to = document.getElementByID('toUnit').value;
  
}

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
    case "Cricket":
      return 5.63e10*Math.exp(-6290/temperature)/13;
    case "Fire":
      return -274;
    case "Hydrogen":
      return (temperature-32)*5/9+273.15;
  }
}

addEventListener