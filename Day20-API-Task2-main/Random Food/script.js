const coffeeimage = document.querySelector(".coffeeimage");
const btn = document.querySelector("button");
function getdata() {
  fetch("https://foodish-api.herokuapp.com/api/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      coffeeimage.innerHTML = `<img class="img-fluid image" src="${data.image}" alt="Placeholder image">`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);
