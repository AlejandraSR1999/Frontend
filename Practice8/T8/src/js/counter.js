document.addEventListener("DOMContentLoaded", function() {
    const clickButton = document.getElementById("click-button");

    clickButton.addEventListener("click", function () {
        let output = document.querySelector("#click-count")
        let result = Number(output.innerHTML) + 1;
        output.innerHTML = result
    });
});
