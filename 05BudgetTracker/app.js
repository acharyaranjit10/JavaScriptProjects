document.addEventListener("DOMContentLoaded", function() {
    // Get the necessary DOM elements
    const addTransactionButton = document.getElementById("add-transaction");
    const transactionNameInput = document.getElementById("transaction-name");
    const transactionAmountInput = document.getElementById("transaction-amount");
    const transactionCategoryInput = document.getElementById("transaction-category");
    const transactionsList = document.getElementById("transactions-list");
    const totalBalanceDisplay = document.getElementById("total-balance");
    const filterCategorySelect = document.getElementById("filter-category");
    const clearFiltersButton = document.getElementById("clear-filters");

    // Initialize data (from localStorage if available)
    let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    // Function to render the transactions
    function renderTransactions() {
        transactionsList.innerHTML = "";
        let filteredTransactions = transactions;

        // Apply category filter if selected
        if (filterCategorySelect.value !== "all") {
            filteredTransactions = transactions.filter(transaction => transaction.category === filterCategorySelect.value);
        }

        filteredTransactions.forEach(transaction => {
            const li = document.createElement("li");
            li.classList.add("transaction-item", transaction.category);
            li.innerHTML = `
                <span>${transaction.name} - $${transaction.amount}</span>
                <button class="delete-btn" data-id="${transaction.id}">Delete</button>
            `;
            transactionsList.appendChild(li);
        });

        // Update total balance
        updateTotalBalance();
    }

    // Function to update total balance
    function updateTotalBalance() {
        let totalBalance = 0;
        transactions.forEach(transaction => {
            if (transaction.category === "income") {
                totalBalance += parseFloat(transaction.amount);
            } else if (transaction.category === "expense") {
                totalBalance -= parseFloat(transaction.amount);
            }
        });

        totalBalanceDisplay.textContent = totalBalance.toFixed(2);
    }

    // Function to save transactions to localStorage
    function saveTransactions() {
        localStorage.setItem("transactions", JSON.stringify(transactions));
    }

    // Function to add a new transaction
    function addTransaction(name, amount, category) {
        const newTransaction = {
            id: Date.now(), // unique ID based on the current timestamp
            name: name,
            amount: amount,
            category: category
        };
        transactions.push(newTransaction);
        saveTransactions();
        renderTransactions();
    }

    // Event listener for adding a new transaction
    addTransactionButton.addEventListener("click", function() {
        const name = transactionNameInput.value.trim();
        const amount = parseFloat(transactionAmountInput.value.trim());
        const category = transactionCategoryInput.value;

        if (name && !isNaN(amount)) {
            addTransaction(name, amount, category);
        } else {
            alert("Please fill in valid transaction details.");
        }

        // Clear inputs after adding
        transactionNameInput.value = "";
        transactionAmountInput.value = "";
    });

    // Event listener for deleting a transaction
    transactionsList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-btn")) {
            const transactionId = event.target.getAttribute("data-id");
            transactions = transactions.filter(transaction => transaction.id != transactionId);
            saveTransactions();
            renderTransactions();
        }
    });

    // Event listener for category filter
    filterCategorySelect.addEventListener("change", function() {
        renderTransactions();
    });

    // Event listener for clearing filters
    clearFiltersButton.addEventListener("click", function() {
        filterCategorySelect.value = "all";
        renderTransactions();
    });

    // Initial render of transactions
    renderTransactions();
});
