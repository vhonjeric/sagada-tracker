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

// Add Expense and Update Budget
let totalBudget = 1300; // Starting total

function addExpense() {
    const input = document.getElementById('budget-input');
    const list = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-budget');
    const amount = parseInt(input.value);

    if (!isNaN(amount) && amount > 0) {
        // Add to list
        const li = document.createElement('li');
        li.innerText = `Custom Expense - ₱${amount}`;
        list.appendChild(li);
        
        // Update total
        totalBudget += amount;
        totalDisplay.innerText = totalBudget;
        
        input.value = ''; // Clear input
    }
}
