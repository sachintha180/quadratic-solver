function determinant(a, b, c) {
    return (b ** 2) - 4 * a * c;
}

function solve(a, b, d) {
    return Math.abs((-b + Math.sqrt(d)) / (2 * a))
}

document.addEventListener("DOMContentLoaded", () => {

    const solveBtn = document.querySelector("#solve");
    const errorMsg = document.querySelector("#error");
    const resultLbl = document.querySelector("#result");

    solveBtn.addEventListener("click", (e) => {

        const a = document.querySelector("#coeff-a").value;
        const b = document.querySelector("#coeff-b").value;
        const c = document.querySelector("#const-c").value;

        if (a && b && c) {
            errorMsg.innerHTML = "Looks good, no errors."
            errorMsg.style.color = "#777";

            const d = determinant(a, b, c);
            if (d >= 0) {
                resultLbl.innerHTML = `x (2 d.p.) = +/- ${solve(a, b, d).toFixed(2)}`
            }
            else {
                resultLbl.innerHTML = "No real solutions exist."
            }
        }
        else {
            errorMsg.innerHTML = "Either a, b or c is missing / invalid, please fill in."
            errorMsg.style.color = "#ff0000";
        }


    });

})