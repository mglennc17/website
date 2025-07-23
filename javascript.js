window.onload = function () {
    let incrementButton = document.getElementById("incrementButton");
    let incrementButtonPower = 1;
    let upgradeButtonCost = 100;
    let upgradeButtonPower = 1;
    let autoButtonCost = 100;
    let autoButtonPower = 0;
    let counter = 0;




    function updateCounter() {
        incrementButton.innerText = Math.round(counter * 10) / 10;
    }

    function autoButtonAccumulator() {
        counter = counter * 10 + ( autoButtonPower ) ;
        counter /= 10;
        updateCounter();
        setTimeout(autoButtonAccumulator, 100);
    }




    incrementButton.addEventListener("click", function() {
        counter += incrementButtonPower;
        updateCounter();
    });

    document.getElementById("upgradeButton").addEventListener("click", function() {
        if(counter >= upgradeButtonCost) {
            counter -= upgradeButtonCost;
            incrementButtonPower += upgradeButtonPower;
            upgradeButtonPower *= 2;
            upgradeButtonCost *= 2;
            incrementButton.innerText = `+${incrementButtonPower}`;
            document.getElementById("upgradeButton").innerHTML = `Button Power * 2<br><br>cost:${upgradeButtonCost}`;
            document.getElementById("buttonPower").innerText = `Button Power: ${incrementButtonPower}`;
        }
    })

    document.getElementById("autoButton").addEventListener("click", function() {
        if (counter >= autoButtonCost) {
            counter -= autoButtonCost;
            autoButtonCost *= 2;
            if (autoButtonPower == 0) {autoButtonPower++; autoButtonAccumulator();} else {autoButtonPower *= 2;};
            console.log(autoButtonPower);
            document.getElementById("autoButton").innerHTML = `+${autoButtonPower*2}/sec<br><br>cost:${autoButtonCost}`;
            document.getElementById("autoPower").innerText = `+${autoButtonPower}/sec`;
        }
    })

}