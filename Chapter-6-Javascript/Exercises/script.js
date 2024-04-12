const petrolCostInput = document.getElementById('petrol-cost');
const litersInput = document.getElementById('liters-purchased');
const calculateBtn = document.getElementById('calculate-btn');
const totalCostDisplay = document.getElementById('total-cost');
calculateBtn.addEventListener('click', () => {
const petrolCost = parseFloat(petrolCostInput.value);
const litersPurchased = parseFloat(litersInput.value);
const totalCost = petrolCost * litersPurchased;
totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
})