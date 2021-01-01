const container = document.querySelector(".container")
const coffees = [
  {name: "Perspiciatis", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee1.jpg" }
  {name: "Voluptatem", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee2.jpg" }
  {name: "Explicabo", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee3.jpg" }
  {name: "Rchitecto", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee4.jpg" }
  {name: "Beatae", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee5.jpg" }
  {name: "Vitae", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee6.jpg" }
  {name: "Inventore", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee7.jpg" }
  {name: "Veritatis", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee8.jpg" }
  {name: "Accusantium", image: "https://cdn.glitch.com/f1d01c4c-8c7b-427f-b48c-1b790902b4e3%2Fcoffee9.jpg" }
]

const showCoffees = () => {
  let output =""
  coffees.forEach(
    ({ name, image }) =>
      (output += "
        <div class="card">
          <img class="card--avatar" src=${image} />
          <h1 class="card--title">${name}</h1>
          <a class="card--link" href="#">Taste</a>
        </div>
      ")
    )
  container.innerHTML = output

}

document.addEventListener("DOMContentLoaded", showCoffees)

if("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
    .register("/serviceWorker.js")
    .then(res => console.log("service worker registered"))
    .catch(err => console.log("service worker not registered", err))

  })
}
