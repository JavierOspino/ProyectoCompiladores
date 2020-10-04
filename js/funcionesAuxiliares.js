$(function () {
  DesactivarLenguaje2();
  CambiarLabel();
});

function DesactivarLenguaje2() {
  $("#selectOperacionLenguaje").change(function () {
    if ($(this).val() === "7" || $(this).val() === "8") {
      $("#inputLenguaje2").prop("value", "");
      $("#inputLenguaje2").prop("disabled", true);
    } else {
      $("#inputLenguaje2").prop("disabled", false);
    }
  });
}

function CambiarLabel() {
  $("#selectOperacionLenguaje").change(function () {
    if ($(this).val() === "6") {
      $("#labelLenguaje2").text("Potencia");
      $("#inputLenguaje2").prop("value", "");
    } else {
      $("#labelLenguaje2").text("Lenguaje 2");
    }
  });
}
