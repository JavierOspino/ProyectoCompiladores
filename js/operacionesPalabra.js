$(function () {
  OperacionesBasicas();
});

function OperacionesBasicas() {
  $("#btnEjecutarP").click(function (event) {
    event.preventDefault();

    let re = /^[\w]+$/;
    var match = re.test($("#inputPalabra").val());
    console.log(match);
    if (!match) {
      alert("Entrada Invalida ");
      return;
    }

    let palabra = $("#inputPalabra").val();
    let operacion = $("#selectPalabraOperacion").val();

    if (palabra.length !== 0) {
      if (operacion === "1") {
        cardinalidad = palabra.length;
        alert(cardinalidad);
      } else if (operacion === "2") {
        inversa = palabra.split("").reverse().join("");
        alert(inversa);
      } else {
        alert("Escoja una operacion");
        return;
      }
    }
  });
}
