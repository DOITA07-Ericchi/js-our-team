function chiketto() {
    let キロ = document.getElementById("kiro").value;
    let 才 = document.getElementById("sai").value;
    let 価格 = キロ * 0.21;
    // Scusami Bryan. Volevo vedere se le variabili andavano davvero scritte
    // unicamente con caratteri dell'alfabeto latino. Non lo faccio più.

    if (才 < 18){
        価格 = 価格-(価格 / 100 * 20);
    } else if (才 >= 65){
        価格 = 価格-(価格 / 100 * 40);
    }

    価格 = 価格.toFixed(2);
    document.getElementById("kotae").innerHTML = 価格 + "€";
}