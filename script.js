modalBackground = document.getElementsByClassName("modal-background")[0];
btnReport = document.getElementById("btn-report");
reportInput = document.getElementById("reportInput");

function openModal() {
  modalBackground.style.display = "block";
}

function closeModel() {
  modalBackground.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modalBackground) {
    closeModel();
  }
};

btnReport.onclick = function () {
  if (reportInput.value != "") {
    closeModel();
    alert("Denúncia enviada!");
  } else {
    alert("Preencha o campo caso deseje realizar uma denúncia!");
  }
};