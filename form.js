const form = document.getElementById("item-form");

function onSubmit(e) {
    // e.preventDefault() CORE function in this coding part
    e.preventDefault();
    const item = document.getElementById("item-input").value;
    const priority = document.getElementById("priority-input").value;
    if (item == '' || priority == "0") {
        alert("Please fill out the form");
        return;
    }
    console.log(item,priority);
}
// form.addEventListener("submit", onSubmit);

// case using formData object
function onSubmit2(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const item = formData.get("item");
    const priority =formData.get("priority");
    console.log(item,priority);
    // new format to get data
    const entries = formData.entries();
    console.log(entries);
    for (let entry of entries){
        console.log (entry[1]);
    }
}
form.addEventListener("submit", onSubmit2);