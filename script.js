document.getElementById('converter-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const euro = parseFloat(document.getElementById('euro').value);
    let conversionRate;

    // Déterminer le taux de conversion en fonction du montant en euro
    if (euro >= 17 && euro < 30) {
        conversionRate = 4.5;
    } else if (euro >= 30) {
        conversionRate = 4.3;
    } else {
        conversionRate = 5.0;
    }

    const dinarTunisien = euro * conversionRate;

    document.getElementById('result').innerText = `${euro} euro(s) = ${dinarTunisien.toFixed(2)} dinar(s) tunisien(s)`;
});
