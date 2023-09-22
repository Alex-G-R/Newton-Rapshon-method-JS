const num = document.getElementById("numberOne");
const oblicz = document.getElementById("oblicz");
const result = document.getElementById("result");

oblicz.addEventListener("click", () => {
    let number = parseFloat(document.getElementById("numberOne").value);
    let dokladnosc = parseFloat(document.getElementById("dokladnoscPier").value);

    let x = number / 2;
    
    replay();

    function replay() {
        let prevX = x;
        x = 0.5 * (x + number / x);

        if (Math.abs(x - prevX) > dokladnosc) {
            replay();
        } else {
            result.innerHTML = x.toFixed(10); 
        }
    } 
});
