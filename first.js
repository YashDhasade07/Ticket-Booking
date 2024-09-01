//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button





let initialPrice;
let totValue = document.getElementById('totalPrice');

let movName = document.getElementById('selectMovie');

moviesList.forEach(function (movie) {
    let optionElement = document.createElement('option');
    optionElement.value = movie.movieName;
    optionElement.textContent = `${movie.movieName} $${movie.price}`
    movName.appendChild(optionElement)
})

document.addEventListener('DOMContentLoaded', function () {
    let titleName = document.getElementById('movieName');
    let titlePrice = document.getElementById('moviePrice');
    titleName.textContent = `${moviesList[0].movieName}`
    titlePrice.textContent = `$${moviesList[0].price}`
    // // totValue.textContent = `$${moviesList[0].price}`;
    initialPrice = moviesList[0].price;
});

// movName.selectedIndex=0;

movName.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex];
    // console.log(`Selected option: ${selectedOption.value} - ${selectedOption.text}`);
    moviesList.forEach(function (movie) {
        if (selectedOption.value == movie.movieName) {
            let titleName = document.getElementById('movieName');
            let titlePrice = document.getElementById('moviePrice');
            titleName.textContent = `${movie.movieName}`
            titlePrice.textContent = `$${movie.price}`

            // total price(testing phase)
            // let totSeats =document.getElementById('numberOfSeat');
           // // totValue.textContent = `$${movie.price}`;
            initialPrice = movie.price;
        }
    })
})

let unoccupiedSeats = document.querySelectorAll('#seatCont .seat:not(.occupied)');
let finalValue;
let spanElement = document.querySelector('.noSelected');
let numberOfSeat = document.getElementById('numberOfSeat');
unoccupiedSeats.forEach((seat) => {
    seat.addEventListener('click', function () {
        if(!seat.classList.contains('occupied')){
        seat.classList.toggle('selected')

        // to update the price
        let selectedCount = document.querySelectorAll('#seatCont .selected');
        // let totValue = document.getElementById('totalPrice');
        finalValue = initialPrice * selectedCount.length;
        totValue.textContent = `$${finalValue}`;
        //updating number of seats

        numberOfSeat.textContent = `${selectedCount.length}`

        //  updating the seat list

        let allSeats = document.querySelectorAll('#seatCont .seat')
        if (selectedCount.length > 0) {
            spanElement.textContent = "";
            let seatList = document.createElement('ul');
            allSeats.forEach((s, idx) => {
                if (s.classList.contains('selected')) {
                    let listItem = document.createElement('li');
                    listItem.classList.add('selectedSeat')
                    listItem.textContent = `${idx + 1}`
                    seatList.appendChild(listItem)
                }

            })
            spanElement.appendChild(seatList)
        }
        else {
            spanElement.textContent = "no seat selected";
        }}
    })
 
})


// continue btn
let contBtn = document.getElementById('proceedBtn');
contBtn.addEventListener('click', function () {
    let s = document.querySelectorAll('#seatCont .selected');
    if (s.length <= 0) {
        alert('Oops no seat Selected')
    } else {
        alert('Yayy! Your Seats have been booked')

        s.forEach((seat) => {
            seat.classList.remove('selected')
            seat.classList.add('occupied')
        })

        finalValue = 0;
        // let totValue = document.getElementById('totalPrice');
        totValue.textContent = `$${finalValue}`;
        spanElement.textContent = "no seat selected";
        numberOfSeat.textContent='0'
        
    }
})

//  cancle btn
let cancBtn = document.getElementById('cancelBtn');
cancBtn.addEventListener('click', function () {
    let s = document.querySelectorAll('#seatCont .selected');
    if (s.length > 0) {
        s.forEach((seat) => {
            seat.classList.remove('selected')
            
        })
        
        finalValue = 0;
        totValue.textContent = `$${finalValue}`;
        spanElement.textContent = "no seat selected";
        numberOfSeat.textContent='0'
        
    }
    
})
