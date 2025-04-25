const url = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
let place = document.querySelector("#place");

let getFact = async () => {
    // try {
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        place.innerText = data[1].text; // assuming `text` contains the fact
    // } catch (error) {
    //     console.error("Error fetching cat fact:", error);
    //     place.textContent = "Failed to fetch a cat fact.";
    // }
};

btn.addEventListener("click", getFact);
