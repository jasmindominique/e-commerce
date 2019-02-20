console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`)


// Take the product data and turn into li elements 

//The list: Img, Product Name, Description, Price, Button, ... something more?


// let newHairLi = document.createElement('li'); // 1. Create elements (li)  

let productsUL = document.querySelector("ul.products"); // 2. Find the list in the html

// productsUL.appendChild(newHairLi); // 3. This class needs to add this list elements 

			// 4. Create a loop to show all elements 
  

let displayProducts = function( whichProducts ) {

	// empty out the ul.products (productsUL)
	productsUL.innerHTML = ""; // replace these contents with this string 


	for (let i = 0; i < whichProducts.length; i++) {

		let product = whichProducts[i];
		console.log("found a product", product);

		// make the elements - Put the elements on the screen

		let newHairLi = document.createElement('li'); // 1. Create elements (li)
		productsUL.appendChild(newHairLi); // 3. This class needs to add this list elements 
		
		//images:

		let newImg = document.createElement('img');
		newImg.setAttribute ('src', product.images); 
		newHairLi.appendChild (newImg);

		// h1:
		let newH1 = document.createElement('h1');
		newH1.innerText= product.name;
		newHairLi.appendChild (newH1);

		// h3:
		let newH3 = document.createElement('h3');
		newH3.innerText = product.description;
		newHairLi.appendChild (newH3);

		// price:
		let newP = document.createElement('p');
		newP.innerText= product.price;
		newHairLi.appendChild (newP);

		//button:
		let newButton = document.createElement('button');
		newButton.innerText = "Add to Cart";
		newHairLi.appendChild (newButton);
	};
}

displayProducts( productData )


// //Create sections - Categories ()

// selectConditioner.value
// 1.  Make drop down menu - 1. Categories 2. Sort (price, name, etc..)
	




// 2. listen for change event on the menus -- know when the user has picked a category //

let productList = document.getElementById("product-list"); //find "product'list" in the html

productList.addEventListener("change", function(){ //once found and a user makes a change/selection...
	console.log("Got it (filtering)!");  //console.log when a change is made


	let chosenCategory = productList.value;
	console.log("chosenCategory is ", chosenCategory)


	let filteredProductData = productData.filter(function(product) {
		// in here, look at product.category and decide whether to return true (keep) or false (toss)
		if(chosenCategory === product.category){ //if 
			return true;
		}
		else{
			return false;
		}
	});

	console.log(filteredProductData)
	displayProducts( filteredProductData )


})



// Sort Products: Price - 


let productSort = document.getElementById("product-sort"); //find "product'sort" in the html

productSort.addEventListener("change", function(){ //once found and a user makes a change/selection...
	console.log("Got it (sorting)!");  //console.log when a change is made

	let sortedProductData;

	if ( productSort.value === "lowtohigh" ) {

		sortedProductData = productData.sort(function(a,b){
			return a.price - b.price;
		})
	} else if ( productSort.value === "hightolow" ) {
		sortedProductData = productData.sort(function(a,b){
			return b.price - a.price;
		})


	}



	console.log(sortedProductData)
	
	displayProducts( sortedProductData )

})

// other ways I've tried...

// 	function compare (a, b){
// 		return a-b;
// }


	// productSort.sort(function (a, b) {
	//   return a.price - b.price;



// 	  productSort.sort(function(a, b) {
// 	  return a - b;

// 	});

// 	console.log(productSort);

// })



















