let list = [
    { v: "Pizza" },
    { v: "Burger" },
    { v: "Vanilla Shake" },
    { v: "Sandwich" },
    { v: "Soup" },
    { v: "Donuts" },
    { v: "Iced Coffee" },
    { v: "Cupcakes" },
    { v: "Breakfast Pizza" },

]
main = document.querySelector("#main");
ul = document.querySelector("#uls");
input = document.querySelector("#ip");
input.focus();

function show(arr) {
    let c = "";

    arr.forEach(function(val) {
        c += ` <li class="lis">${val.v}</li>`
    })

    ul.innerHTML = c;
}

show(list);

ip.addEventListener("input", function(val) {
    show(filter(list))
});


function filter(data) {

    let ar = [];

    data.forEach(function(val) {
        if (val.v.toLowerCase().startsWith(input.value.toLowerCase())) {
            ar.push(val);
        }
    })
    return ar;
}