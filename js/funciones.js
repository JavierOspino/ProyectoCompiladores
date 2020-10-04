$(function () {
  $("#selectOperacionLenguaje").change(function () {
    if (
      $(this).val() === "6" ||
      $(this).val() === "7" ||
      $(this).val() === "8"
    ) {
      $("#inputLenguaje2").prop("disabled", true);
    } else {
      $("#inputLenguaje2").prop("disabled", false);
    }
  });
});
