let submitKp = document.getElementById("submit");
submitKp.addEventListener("click", function submitResult() {
    let fullNavn = document.getElementById("fullnavnSk").value
    let emailAd = document.getElementById("mailSk").value
    let fødsDato = document.getElementById("datoSk").value
    let brukNavn = document.getElementById("brukerSk").value
    if (brukNavn == "" || fullNavn == "" || emailAd == "" || fødsDato == "") {
        window.alert("All Fields are required")
    }
    else {
        let medlem = {navn: fullNavn, Email: emailAd, Dato: fødsDato};
        localStorage.setItem(brukNavn, JSON.stringify(medlem));
        window.alert("Velkommen Til Klanen!")
    }
});