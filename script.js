/* M3 D4
* You are creating the "shopping cart experience" for a Online Marketplace.
* You have the list of the available books from the current API:
* https://striveschool-api.herokuapp.com/books
* What you have to do is:

* 0) Get all the products from the API using a fetch ✅
* 1) Display the list of items available on the page using template literals `` and .forEach ✅
* 2) Add a "add to cart button" ✅
* 3) When the button is pressed, change the style of the item and add it to another list
* 4) Add "skip" button next to each item ✅
* 5) When pressed, the button should remove from the page the item not interesting for the user
* 6) Add a "search bar". When the user types more than 3 chars, you should filter the content of the page to show only the items with a matching name (hint: use .filter method)
* 7) Allow the user to delete items from the cart list
* 
* [EXTRA]
* 8) Add a "clean cart" button, to clean the whole list.
* 9) Create a second "detail page" for the product. When the user clicks on a product name, the app should redirect him to the secondary page, passing the ASIN in query string
* 10) In page "detail" show some details of the selected product (https://striveschool-api.herokuapp.com/books/1940026091 to fetch the details of a specific book)
*/

// 1. fetch, then and catch!
// 2. convert to json
/* 3. dipslay available books 
*    -> `` and foreach
*    -> create card for every element + add to cart button
*    -> 
*/
// 4. filter them based on search button.value (more than 3 char)


/* Global variables 🌍 */
const row = document.querySelector('.row')

window.onload = () => {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then(function (res){
        return res.json()
    })
    .then(function (jsonBooks) {
        console.log(jsonBooks)

        displayBooks(jsonBooks)
    })
    .catch(function (err) {
        alert(err) //do i get the type error and the code? like 404?
    })
}

const displayBooks = function(array){ //array = jsonBooks, element = jsonBooks[i]
    array.forEach(element => {
        row.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3 mb-3 pr-2">
            <div class="card mb-4 shadow-sm h-100">
                <img src=${element.img} alt="some pic">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">Price: ${element.price}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary onclick="changeStyle()">
                            Add
                            </button>
                        </div>
                        <small class="text-muted">${element.category}</small>
                    </div>
                </div>
                <button class="btn btn-primary">Skip</button>
            </div>
        </div>
       `
    });
}


// const changeStyle = function(element){
//     document.getElementById(`${element.asin}`).style.backgroundColor = red;
// }

