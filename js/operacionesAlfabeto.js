$("#btnEjecutar").click(function (event) {
  event.preventDefault();

  let re = /^([\w]+(,|))+[^,]$/;
  var match = re.test($("#inputAlfabeto1").val());
  var match2 = re.test($("#inputAlfabeto2").val());
  console.log(match, match2);
  if (!match || !match2) {
    alert("Entrada Invalida");
    return;
  }
  var alfabeto1 = $("#inputAlfabeto1").val().split(",");
  var alfabeto2 = $("#inputAlfabeto2").val().split(",");
  var operacion = $("#selectOperacion").val();

  if (operacion === "1") {
    union = new Set(alfabeto1.concat(alfabeto2));
    union = Array.from(union);
    alert(union);
  } else if (operacion === "2") {
    interseccion = alfabeto1.filter((x) => new Set(alfabeto2).has(x));
    alert(interseccion);
  } else if (operacion === "3") {
    diferencia1 = alfabeto1.filter((e) => alfabeto2.indexOf(e) === -1); //A-B
    alert(diferencia1);
  } else if (operacion === "4") {
    diferencia2 = alfabeto2.filter((e) => alfabeto1.indexOf(e) === -1); //B-A
    alert(diferencia2);
  } else {
    alert("Escoja una operacion");
    return;
  }
});
