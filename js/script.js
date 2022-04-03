const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// question 1

const cat = {
  complain: function () {
    console.log("Meow!");
  },
};

// question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// question 3

heading.style.fontSize = "2em";

// question 4

heading.classList.add("subheading");

// question 5

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((element) => (element.style.color = "red"));

// question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New Paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

// question 7

function logName(list) {
  list.forEach((cat) => console.log(cat.name));
}

logName(cats);

// question 8
const catContainer = document.querySelector(".cat-container");
function createCats(cats) {
  cats.forEach(
    (cat) =>
      (catContainer.innerHTML += `<div>
                                            <h5>${cat.name}</h5>
                                            <p>${cat.age}</p>
                                            </div>`)
  );
}

createCats(cats);
