"use strict";

const numberWithUl = document.querySelectorAll("#categories>li");
console.log("Number of categories: ", numberWithUl.length);
numberWithUl.forEach((item) => {
  const title = item.querySelector("h2");
  console.log("Category:", title.textContent);
  const itemsLength = item.querySelectorAll("li");
  console.log("Elements:", itemsLength.length);
});
// const itemByTagName = document
//   .querySelectorAll("h2")
//   .forEach((item) => console.log("Category:", item.textContent));

// const countLi = document
//   .querySelectorAll("ul>li>ul")
//   .forEach((item) => console.log("Elements:", item.children.length));
