import { getAllDishes, addNewDish, getOneDish, updateDish, deleteDish } from "../server-request.js"

//Generats all dishes from json-db and send them to main
export async function appAll() {

  const menues = await getAllDishes()
  console.log(menues);

  if (menues.length === 0) {
    alert('Det finns inga rätter att visa')
    const sec1 = document.createElement('section')
    const aDish = document.createElement('h3')
    aDish.innerText = "Menyn innehåller inga rätter.";
    sec1.appendChild(aDish)
    document.querySelector('main').appendChild(sec1)

  } else {
    const sec1 = document.createElement('section')

    for (let menue of menues) {
      let { dish, description, price } = menue;

      const aDish = document.createElement('h3')
      const aDescr = document.createElement('p')
      const aPrice = document.createElement('p')
      aDish.innerText = dish;
      aDescr.innerText = description;
      aPrice.innerText = `Pris: ${price} kr`;
      aPrice.setAttribute('id', 'price-style')
      sec1.appendChild(aDish)
      sec1.appendChild(aDescr)
      sec1.appendChild(aPrice)

      console.log(`Rätt: ${dish}\nBeskrivning: ${description} år\nPris: ${price}`);
    }
    document.querySelector('main').appendChild(sec1)
  }
}

//Generats all dishes from json-db and send them to "loged in"-main
export async function appAllAdmin() {

  const menues = await getAllDishes()
  console.log(menues);

  if (menues.length === 0) {
    alert('Det finns inga rätter att visa')
    const sec1 = document.createElement('section')
    const aDish = document.createElement('h3')
    aDish.innerText = "Menyn innehåller inga rätter.";
    sec1.appendChild(aDish)
    document.querySelector('main').appendChild(sec1)

  } else {
    const sec1 = document.createElement('section')

    for (let menue of menues) {
      let { id, dish, description, price } = menue;
      const aId = document.createElement('p')
      const aDish = document.createElement('h3')
      const aDescr = document.createElement('p')
      const aPrice = document.createElement('p')
      aId.innerText = `(För att redigera eller radera en rätt, ange id: ${id})`
      aDish.innerText = dish;
      aDescr.innerText = description;
      aPrice.innerText = `Pris: ${price} kr`;
      aId.setAttribute('class', 'adminID')
      aPrice.setAttribute('id', 'price-style')
      sec1.appendChild(aDish)
      sec1.appendChild(aId)
      sec1.appendChild(aDescr)
      sec1.appendChild(aPrice)

      console.log(`Id: ${id}\nRätt: ${dish}\nBeskrivning: ${description} år\nPris: ${price}`);
    }
    document.querySelector('main').appendChild(sec1)
  }
}


// Add a new dish to json-db -------------------------
export async function appAdd() {

  btn2.addEventListener("click", async function (e) {
    e.preventDefault();

    const dishes = await getAllDishes()
    let nextId = 1
    for (let dish of dishes) {
      if (dish.id >= nextId) {
        nextId = dish.id
        nextId++
      }
    }

    const addDish = document.querySelector('#dish').value
    const addDescription = document.querySelector('#description').value
    const addPrice = document.querySelector('#price').value

    console.log(`Maträtt: ${addDish}
    Beskrivning: ${addDescription}
    Pris: ${addPrice}`);

    let dish = {
      id: nextId,
      dish: addDish,
      description: addDescription,
      price: parseInt(addPrice)
    }

    console.log(`Maträtt: ${addDish}
    Beskrivning: ${addDescription}
    Pris: ${addPrice}`);

    addNewDish(dish);

    alert('En ny rätt har lagts till.')
  })
}

//performe updates to a dish of choise -----------------
export async function appUpdate() {

  btn3.addEventListener("click", async function () {

    const pickId = document.querySelector('#pickId').value
    const addDish = document.querySelector('#dish').value
    const addDescription = document.querySelector('#description').value
    const addPrice = document.querySelector('#price').value

    let dish = await getOneDish(pickId)
    console.log(dish);

    dish = {
      id: dish.id,
      dish: addDish,
      description: addDescription,
      price: parseInt(addPrice)
    }

    updateDish(dish)

    alert(`${addDish} har uppdaterats i databasen`)
  })
}

//Delete a dish of choise ---------------------------
export async function appDelete() {

  btn4.addEventListener("click", async function (e) {
    e.preventDefault()
    const deleteId = document.querySelector('#pickId').value

    const menue = await getOneDish(deleteId)
    deleteDish(menue)

    alert(`användare med id ${deleteId} har raderats.`)
  })
}

export function appLogin() {
  document.querySelector('#btn-login').innerHTML = "Logga in";
}







// Not in use...
//-------------------------------------------------------
// Search for dish.
// const search = ["one", "two", "three"]
// const index = search.findIndex(num => num.includes())
// return index;

