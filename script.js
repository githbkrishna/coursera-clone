const data = [
    {title: "Card 1", category: "category1", image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 2", category: "category2", image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 3", category: "category3", image: "https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 4", category: "category1", image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 6", category: "category2", image: "https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 5", category: "category2", image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 7", category: "category2", image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 8", category: "category2", image: "https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
    {title: "Card 9", category: "category2", image: "https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit."},
];

const mainSection = document.getElementById("mainSection");

function displayCards(cards) {
    mainSection.innerHTML = "";
    cards.forEach(card => {
        const cardElem = document.createElement("div");
        cardElem.classList.add("card");
        
        const titleElem = document.createElement("div");
        titleElem.classList.add("cardtitle");
        titleElem.textContent = card.title;
        
        const categoryElem = document.createElement("div");
        categoryElem.classList.add("cardcat");
        categoryElem.textContent = card.category;

        const imgElem = document.createElement("img");
        imgElem.src = card.image;
        // imgElem.alt = card.title;

        const paraElem = document.createElement("div");
        paraElem.textContent = card.para;

        cardElem.appendChild(imgElem);
        cardElem.appendChild(titleElem);
        cardElem.appendChild(categoryElem);
        cardElem.appendChild(paraElem);

        mainSection.appendChild(cardElem);
    });
}

displayCards(data);


// filter category by category from aside 
function filterCategory(category) {
    const filteredData = data.filter(card => card.category === category);
    displayCards(filteredData);
}
    

// filter category by category from aside 
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredData = data.filter(card => card.title.toLowerCase().includes(searchTerm));
    displayCards(filteredData);
});