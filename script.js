const display = document.getElementById('display');

const numberbuttons = document.querySelectorAll("[data-number]");


numberbuttons.forEach(function(button) {
    button.addEventListener("click", function() {
        
        const number = button.dataset.number;   

        if(display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    });
});