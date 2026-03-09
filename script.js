// API Key - https://api.giphy.com/v1/gifs/search?api_key=shQ8FuLaj8ovcQshIjpNIeqmtSANPUz3&q=${keyword}&limit=12

let results = document.getElementById("results");

let searchBar = document.getElementById("searchBar");

searchBar.addEventListener("submit", function(e) {
    e.preventDefault();
    let keyword = document.getElementById("searchInput").value;

    if (keyword === "") {
        alert("Enter a valid keyword");
        return;
    };
    results.innerHTML = "Loading...";

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=shQ8FuLaj8ovcQshIjpNIeqmtSANPUz3&q=${keyword}&limit=12`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            results.innerHTML = ""
            data.data.forEach(function(gif) {
                let img = document.createElement("img");
                img.src = gif.images.fixed_height.url;
                results.appendChild(img);
            });
        })
        .catch(function(error) {
            results.innerHTML = "An error has occurred.";
            console.log("Error:", error);
        });
});

