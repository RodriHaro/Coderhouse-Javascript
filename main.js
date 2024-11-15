// Valores actuales de las monedas (Un aproximado)
const tasasDeCambio = {
  arsADolarBlue: 0.001,
  arsAUsdt: 0.0009,  
  dolarBlueAars: 1145,  
  usdtAars: 1135           
};

// Array de opciones
const opcionesConversion = [
  "1. Pesos Argentinos a Dólar Blue",
  "2. Pesos Argentinos a USDT",
  "3. Dólar Blue a Pesos Argentinos",
  "4. USDT a Pesos Argentinos",
  "5. Salir"
];

// Menu prompt
function mostrarMenu() {
  let menu = "Seleccione una opción de conversión:\n";
  for (let i = 0; i < opcionesConversion.length; i++) {
      menu += opcionesConversion[i] + "\n";
  }
  return prompt(menu);
}

// Conversiones
function convertirArsADolarBlue(ars) {
  const resultado = ars * tasasDeCambio.arsADolarBlue;
  return resultado;
}

function convertirArsAUsdt(ars) {
  const resultado = ars * tasasDeCambio.arsAUsdt;
  return resultado;
}

function convertirDolarBlueAars(dolarBlue) {
  const resultado = dolarBlue * tasasDeCambio.dolarBlueAars;
  return resultado;
}

function convertirUsdtAars(usdt) {
  const resultado = usdt * tasasDeCambio.usdtAars;
  return resultado;
}

// Conversor 
function conversor() {
  let convertir = true;
  while (convertir) {
      const opcion = mostrarMenu();

      if (opcion === null) {
        alert("Gracias por usar el simulador de conversor de divisas.");
        convertir = false;
        break;
    }
      switch(opcion) {
          case "1":
              let ars1 = parseFloat(prompt("Ingrese la cantidad en Pesos Argentinos (ARS) a convertir a USD Blue:"));
              if (!isNaN(ars1) && ars1 > 0) {
                  const resultado1 = convertirArsADolarBlue(ars1);
                  alert(ars1 + " ARS equivalen a " + resultado1.toFixed(2) + " USD Blue.");
              } else {
                  alert("Por favor, ingrese un número válido.");
              }
              break;
          case "2":
              let ars2 = parseFloat(prompt("Ingrese la cantidad en Pesos Argentinos (ARS) a convertir a USDT:"));
              if (!isNaN(ars2) && ars2 > 0) {
                  const resultado2 = convertirArsAUsdt(ars2);
                  alert(ars2 + " ARS equivalen a " + resultado2.toFixed(2) + " USDT.");
              } else {
                  alert("Por favor, ingrese un número válido.");
              }
              break;
          case "3":
              let dolarBlue = parseFloat(prompt("Ingrese la cantidad en USD Blue a convertir a Pesos Argentinos (ARS):"));
              if (!isNaN(dolarBlue) && dolarBlue > 0) {
                  const resultado3 = convertirDolarBlueAars(dolarBlue);
                  alert(dolarBlue + " USD Blue equivalen a " + resultado3.toFixed(2) + " ARS.");
              } else {
                  alert("Por favor, ingrese un número válido.");
              }
              break;
          case "4":
              let usdt = parseFloat(prompt("Ingrese la cantidad en USDT a convertir a Pesos Argentinos (ARS):"));
              if (!isNaN(usdt) && usdt > 0) {
                  const resultado4 = convertirUsdtAars(usdt);
                  alert(usdt + " USDT equivalen a " + resultado4.toFixed(2) + " ARS.");
              } else {
                  alert("Por favor, ingrese un número válido.");
              }
              break;
          case "5":
              const salir = confirm("¿Está seguro que desea salir?");
              if (salir) {
                  convertir = false;
                  alert("Muchas gracias por usar el conversor de divisas.");
              }
              break;
          default:
              alert("Opción no válida. Por favor, selecciona el tipo de cambio correcto");
      }
  }
}

conversor();