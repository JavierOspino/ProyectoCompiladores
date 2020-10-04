$(function () {
  OperacionesLenguajeBasicas();
  PotenciaLenguaje();
});

function PotenciaLenguaje() {
  $("#btnEjecutarL").click(function (e) {
    e.preventDefault();
    let operacion = $("#selectOperacionLenguaje").val();
    if (operacion === "6") {
      let re = /^([\w]+(,|))+[^,]$/;
      let re2 = /^[\d]+$/;
      var match = re.test($("#inputLenguaje1").val());
      var match2 = re2.test($("#inputLenguaje2").val());
      console.log(match, match2);
      if (!match || !match2) {
        alert("Entrada Invalida para la potencia ");
        return;
      }

      let lenguaje1 = $("#inputLenguaje1").val().split(",");
      let potencia = $("#inputLenguaje2").val();
      let potenciaF = $("#inputLenguaje1").val().split(",");

      let tam = lenguaje1.length;

      if (potencia !== "" && $("#inputLenguaje1").val() !== "") {
        if (potencia === 0) {
          alert("vacio");
        } else if (potencia === 1) {
          alert(lenguaje1);
        } else {
          for (let x = 1; x < potencia; x++) {
            let tam2 = potenciaF.length;
            for (let i = 0; i < tam; i++) {
              for (let j = 0; j < tam2; j++) {
                potenciaF.push(lenguaje1[i] + potenciaF[j]);
              }
            }
          }
        }
      }
      alert(potenciaF);
    }
  });
}

function OperacionesLenguajeBasicas() {
  $("#btnEjecutarL").click(function (event) {
    event.preventDefault();

    let operacion = $("#selectOperacionLenguaje").val();
    let re = /^([\w]+(,|))+[^,]$/;
    var match = re.test($("#inputLenguaje1").val());
    var match2 = re.test($("#inputLenguaje2").val());
    console.log(match, match2);
    if ((!match || !match2) && operacion !== "6") {
      alert("Entrada Invalida");
      return;
    }
    let lenguaje1 = $("#inputLenguaje1").val().split(",");
    let lenguaje2 = $("#inputLenguaje2").val().split(",");

    if (lenguaje1.length !== 0) {
      if (operacion === "1" && lenguaje2.length !== 0) {
        union = new Set(lenguaje1.concat(lenguaje2));
        union = Array.from(union);
        alert(union);
      } else if (operacion === "2" && lenguaje2.length !== 0) {
        interseccion = lenguaje1.filter((x) => new Set(lenguaje2).has(x));
        alert(interseccion);
      } else if (operacion === "3" && lenguaje2.length !== 0) {
        diferencia1 = lenguaje1.filter((e) => lenguaje2.indexOf(e) === -1); //A-B
        alert(diferencia1);
      } else if (operacion === "4" && lenguaje2.length !== 0) {
        diferencia2 = lenguaje2.filter((e) => lenguaje1.indexOf(e) === -1); //B-A
        alert(diferencia2);
      } else if (operacion === "5" && lenguaje2.length !== 0) {
        concatenacion = [];
        for (let x of lenguaje1)
          for (let y of lenguaje2) concatenacion.push(x + y);
        alert(concatenacion);
      } else if (operacion === "7") {
        inversa = [];
        for (x of lenguaje1) inversa.push(x.split("").reverse().join(""));
        alert(inversa);
      } else if (operacion === "8") {
        cardinalidad = lenguaje1.length;
        alert(cardinalidad);
      } else if (operacion !== "6") {
        alert("Escoja una operacion");
        return;
      }
    }
  });
}
