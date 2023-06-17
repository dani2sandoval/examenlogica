function Operacion() {
var input1 = parseInt(document.getElementById("input1").value);
var input2 = parseInt(document.getElementById("input2").value);
var input3 = parseInt(document.getElementById("input3").value);
var resultado = document.getElementById("resultado");

if (input1 > input3) {
var multiplicacion = input1 * input2 * input3;
resultado.innerHTML = "Se realizó la operación de multiplicación, el resultado es = " + multiplicacion;
      } else if (input1 === input2) {
        var suma = input1 + input2 + input3;
        resultado.innerHTML = "Se realizó la operación de suma, el resultado es = " + suma;
      } else {
        resultado.innerHTML = "No se da ninguna condición";
      }
    }

    function concatenarRepetir() {
        var valor1 = document.getElementById('input1').value;
        var valor2 = document.getElementById('input2').value;
        var valor3 = document.getElementById('input3').value;
  
        var textoConcatenado = valor1 + valor2 + valor3;
        var resultado = parseInt(valor1) * parseInt(valor2) + parseInt(valor3);
  
        document.getElementById('resultado').innerHTML = "Texto concatenado: " + textoConcatenado + "<br>Resultado: " + resultado;
      }