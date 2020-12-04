let libButton = document.getElementById('lib-button');
let libIt = function() {
    let storyDiv = document.getElementById("story");
    let noun = document.getElementById("noun");
    let adjct = document.getElementById("adjective");
    let name = document.getElementById("person");
    storyDiv.innerHTML = noun.value + " " + adjct.value + " " + name.value;
};
libButton.addEventListener('click', libIt);








