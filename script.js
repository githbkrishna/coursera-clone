const data = [
    {title:"FullStack development", category:{ course:"FullStack development",language:"english"}, image:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"UI UX Design", category:{ course:"category1",language:"hindi"}, image:"https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"Marketing", category:{ course:"Marketing",language:"english"}, image:"https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"Data Analyst", category:{ course:"category1",language:"hindi"}, image:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"Frontend Dev", category:{ course:"category1",language:"english"}, image:"https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"Backend Dev", category:{ course:"category1",language:"hindi"}, image:"https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"Cyber Security", category:{ course:"Cyber Security",language:"english"} , image:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"AI & ML", category:{ course:"category1",language:"german"}, image:"https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
    {title:"learn hindi", category:{ course:"category1",language:"german"}, image:"https://images.pexels.com/photos/5965839/pexels-photo-5965839.jpeg?auto=compress&cs=tinysrgb&w=600", star:"⭐ 4.7 (21k reviews)", level:"Begginer • specilization • 1-3 months", para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.", provider:{pname:"IBM Inc", pimg:"https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=600"}},
];

const mainSection = document.getElementById("mainSection");

function displayCards(cards) {

    mainSection.innerHTML = "";

    // 1st method 
    // cards.forEach(card => {
    //     const cardElem = document.createElement("div");
    //     cardElem.classList.add("card");
        
    //     const titleElem = document.createElement("div");
    //     titleElem.classList.add("cardtitle");
    //     titleElem.textContent = card.title;
        
    //     const categoryElem = document.createElement("div");
    //     categoryElem.classList.add("cardcat");
    //     categoryElem.textContent = card.category.course;

    //     const imgElem = document.createElement("img");
    //     imgElem.src = card.image;
    //     // imgElem.alt = card.title;

    //     const paraElem = document.createElement("div");
    //     paraElem.textContent = card.para;

    //     const starElem = document.createElement("div");
    //     starElem.textContent = card.star;

    //     const levelElem = document.createElement("div");
    //     levelElem.textContent = card.level;

    //     // new items added
    //     const courseInfoElem = document.createElement("div");
    //     courseInfoElem.classList.add("cardcourseinfo");

    //     const courseElem = document.createElement("div");
    //     courseElem.classList.add("cardcourse");
    //     courseElem.textContent = card.provider.pname;

    //     const courseimgElem = document.createElement("img");
    //     courseimgElem.classList.add("cardcourseimg");
    //     courseimgElem.src = card.provider.pimg;

    //     cardElem.appendChild(imgElem);
        
    //     // new append childs we will write them in the top of the card so do write it top of all append child
    //     cardElem.appendChild(courseInfoElem)
    //     courseInfoElem.appendChild(courseimgElem)
    //     courseInfoElem.appendChild(courseElem)

    //     cardElem.appendChild(titleElem);
    //     cardElem.appendChild(categoryElem);
    //     cardElem.appendChild(paraElem);
    //     cardElem.appendChild(starElem);
    //     cardElem.appendChild(levelElem);

    //     mainSection.appendChild(cardElem);
    // });



    // 2nd method 
    
    cards.forEach(card => {
        const cardElem = `
            <div class="card">
                <img src="${card.image}" alt="${card.title}">
                <div class="cardcourseinfo">
                <img src="${card.provider.pimg}" alt="${card.title}" class="cardcourseimg">
                <div class="cardcourse">${card.provider.pname}</div>
                </div>
                <div class="cardtitle">${card.title}</div>
                <div class="cardcat">${card.category.course}</div>
                <div class="cardpara">${card.para}</div>
                <div class="cardstar">${card.star}</div>
                <div class="cardlevel">${card.level}</div>
            </div>`;
     
        mainSection.innerHTML += cardElem;
    });
}

displayCards(data);


var searchnomber = document.querySelector(".datano")

// // filter category by course from aside 
// function filterCategory(category) {
//     // const filteredData = data.filter(card => card.category === category);
//     const filteredData = data.filter(card => card.category.course === category);
//     displayCards(filteredData);
    
//     searchnomber.innerHTML = `filter by ${category} ${filteredData.length}`
// }


// filter category by category from aside 
function filterCategory(category) {
    const filteredData = data.filter(card => card.category.course == category);
    displayCards(filteredData);
    console.log(filteredData.length);

    searchnomber.innerHTML = `filter by ${category} (${filteredData.length})`
}


// filter category by language from aside 
function filterAnotherCategory(category) {
    const filteredData = data.filter(card => card.category.language == category);
    displayCards(filteredData);

    searchnomber.innerHTML = `filter by ${category} (${filteredData.length})`
}
    

// filter category by category from aside 
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    // const filteredData = data.filter(card => card.title.toLowerCase().includes(searchTerm) || card.category.toLowerCase().includes(searchTerm));
    const filteredData = data.filter(card => card.title.toLowerCase().includes(searchTerm));
    displayCards(filteredData);

    searchnomber.innerHTML = `filter by ${searchTerm} (${filteredData.length})`
});


// Disable right-click (Context Menu)
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this page.");
});

// Disable F12 (Developer Tools)
document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
        alert("Developer Tools are disabled.");
    }
});

// Disable 'Ctrl+Shift+I' (Inspect Element shortcut)
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        alert("Inspect Element is disabled.");
    }
});

// Disable 'Ctrl+U' (View Source)
if (e.ctrlKey && e.key === 'U') {
    e.preventDefault();
    alert("Viewing source code is disabled.");
}
