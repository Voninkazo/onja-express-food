console.log('good luck!');
const btns = document.getElementById('button-add');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

//show form

btns.addEventListener('click', event => {
	event.preventDefault();
	outerModal.classList.add('open');
	innerModal.innerHTML = `
  <form id="form">
		<p>Your name :</p>
			<input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here"
					required />
		<p>Please select your dish :</p>
				<select name="dish" id="dish" class="select-form" required>
					<option value="romazava">Romazava</option>
					<option value="koba">Koba</option>
					<option value="ravitoto">Ravitoto</option>
					<option value="mokary">Mokary</option>
					<option value="achard">Achard</option>
					<option value="masikita">Masikita</option>
					<option value="sambos">Sambos</option>
					<option value="mofo-baolina">Mofo baolina</option>
					<option value="ranonapango">Ranonapango</option>
				</select>
		<p>Please select the size of your plate :</p>
				<input type="radio" id="small" name="size" value="small" required />
				<label for="small">Small</label><br />
				<input type="radio" id="medium" name="size" value="medium" />
				<label for="medium">Medium</label><br />
				<input type="radio" id="large" name="size" value="large" />
				<label for="large">Large</label><br />
				<p>How many pieces do you want to order?</p>
				<input class="input-form" type="number" id="quantity" name="amount" placeholder="Enter a number here"
					required />
		<button class="submitOrder" id ="btn-submit" type="submit">Add this order</button>
</form>
  `;
});

// submit form
window.addEventListener('submit', (event) => {
	event.preventDefault();
	if (event.target.matches('form')) {
		const getForm = document.getElementById('form');
		const myDish = document.querySelector('[name="dish"]');
		const mySize = document.querySelector('[name="size"]');
		const myQuantity = document.querySelector('#quantity');
		const myName = document.getElementById('name');
		const myhtml = `
	<div class="order" data-dish=${myDish.value} data-size=${mySize.value} data-amount=${myQuantity.value}>
		<span class="title">
			${myName.value}
		</span>
		<button class="details">Details</button>
		<button class="served">Delete order</button>
	</div>
`;
		event.target = myhtml;
		const orderList = document.querySelector('.order-list'); // grab the div
		orderList.insertAdjacentHTML('beforeend', myhtml); // append the new html
		outerModal.classList.remove('open'); // remove modal outer
		getForm.reset();// reset form
	}
});

// show details
const handleDetail = (event) => {
	const detailButton = event.target;
	const myOrder = detailButton.closest('.order'); // to get the detail
	if (detailButton.target.matches('.details')) {
		outerModal.classList.add('open');// show the modal again
		const details = `
		<h1>Onja Express Food</h1>
		<h2>Order List</h2>
		<div>
			<p> ${myOrder.dataset.myDish} 
				${myOrder.dataset.mySize}
				${myOrder.dataset.myQuantity}
			</p>
		</div>
		`;
		innerModal.innerHTML = details;
	}
};

// handle delete button

const handleDeleteButton = (event) => {
	if (event.matches('.served')) {
		event.closest('.order').remove(); // delete the order
	}
}