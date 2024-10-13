document.querySelector('#sortButton').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.toggle('hidden');
});

// Add click event listener to each dropdown item
document.querySelectorAll('.dropdown-item').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const selectedText = item.textContent; // Get the selected text
        document.getElementById('sortText').textContent = selectedText; // Update button text
        document.getElementById('dropdownMenu').classList.add('hidden'); // Hide dropdown menu
    });
});

function toggleDropdown() {
    const dropdown = document.getElementById("filterdown");
    dropdown.classList.toggle("hidden");
}

function getSelectedOptions() {
    const checkboxes = document.querySelectorAll('#filterdown input[type="checkbox"]');
    const selected = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    document.getElementById("selected-options").innerText = "Selected: " + selected.join(", ");
}