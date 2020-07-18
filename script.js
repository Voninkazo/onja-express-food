console.log('good luck!');
const btns = document.getElementById('button-add');
const outerModal = document.querySelector('.outer-modal');
const innerModal = document.querySelector('.inner-modal');

btns.addEventListener('click', event => {
  outerModal.classList.add('open');
  innerModal.innerHTML =`
  <form>
				<p>Your name :</p>
				<input class="input-form" type="text" id="name" name="name" placeholder="Enter your name here"
					required />
				<p>Please select your dish :</p>
				<select name="dish" class="select-form" required>
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
				<button class="submitOrder" type="submit">Add this order</button>
			</form>
  `
});
const name = document.querySelector('#name');

const submitBtn = document.getElementById('btn-submit');
submitBtn.addEventListener('click', event => {
  const title = document.createElement('span');
  title.textContent = `${name.value}`;
  const orderList = document.getElementById('name-list');
  orderList.appendChild(title);
});
