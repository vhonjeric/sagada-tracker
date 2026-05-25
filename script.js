// Add New Gear
function addGear() {
    const input = document.getElementById('gear-input');
    const list = document.getElementById('gear-list');
    
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<input type="checkbox"> <span>${input.value}</span>`;
        list.appendChild(li);
        input.value = ''; // Clear input
    }
}

// Add Custom Expense and Update Budget
let totalBudget = 1300; // Starting total

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('budget-amount');
    const list = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-budget');
    
    // Fallback to "Misc Expense" if they leave the name blank
    const expenseName = nameInput.value.trim() !== '' ? nameInput.value.trim() : 'Misc Expense';
    const amount = parseInt(amountInput.value);

    // Check if the amount is a valid number greater than 0
    if (!isNaN(amount) && amount > 0) {
        // Add to list
        const li = document.createElement('li');
        li.innerText = `${expenseName} - ₱${amount}`;
        list.appendChild(li);
        
        // Update total
        totalBudget += amount;
        totalDisplay.innerText = totalBudget;
        
        // Clear inputs after adding
        nameInput.value = '';
        amountInput.value = '';
    } else {
        alert("Please enter a valid amount!");
    }
}
