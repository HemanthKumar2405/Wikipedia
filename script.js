let input = document.getElementById("searchInput");
let results = document.getElementById("searchResults");
let spin = document.getElementById("spinner");

function appending(i) {
    let container = document.createElement("div");
    container.classList.add("wiki-search-header");
    results.appendChild(container);

    let title = i.title;
    let link = i.link;
    let description = i.description;
    let aaa = document.createElement("h1");
    aaa.href = link;
    aaa.textContent = title;
    container.appendChild(aaa);

    let linkk = document.createElement("a");
    linkk.href = link;
    linkk.textContent = link;
    container.appendChild(linkk);

    let des = document.createElement("p");
    des.textContent = description;
    container.appendChild(des);
}


function accept(eachone) {
    spin.classList.toggle("d-none");
    for (let i of eachone) {
        appending(i);
    }
}

input.addEventListener("keydown", function(event) {
    let val = input.value;
    if (event.key === "Enter") {
        spin.classList.toggle("d-none");
        results.textContent = "";
        let methodtype = {
            method: "GET",
        };

        fetch("https://apis.ccbp.in/wiki-search?search=" + val, methodtype)
            .then(function(each) {
                return each.json();
            })
            .then(function(eachone) {
                accept(eachone.search_results);
            });
    }
});
