console.log(window);
console.log(window.document);
console.log(document.body);

// inner HTML is all son under body
console.log(document.body.innerHTML);

// the below method will refresh all HTML, 
// therefore need to be specific such as get ElementByID
// document.body.innerHTML = "<p>Hello</p>";

console.log(document.body.innerText);
document.getElementById("main").innerHTML = "<h1>Hello World!</h1>";
console.log(document.getElementById("main"));