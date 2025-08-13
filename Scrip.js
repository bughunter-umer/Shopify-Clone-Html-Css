// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Navigation item highlighting
    const navItems = document.querySelectorAll('.proj li');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.style.textDecoration = 'none');
            item.style.textDecoration = 'underline';
        });
    });

    // Search feature
    const searchInput = document.querySelector('.input input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Searching for: ${searchInput.value}`);
        }
    });

    // Button handlers
    document.querySelector('.fst button').addEventListener('click', () => {
        alert("Redirecting to add product page...");
    });

    document.querySelector('.snd button').addEventListener('click', () => {
        alert("Generating design based on your business...");
    });

    document.querySelector('.prof1 button').addEventListener('click', () => {
        alert("Payment methods activated!");
    });

    document.querySelector('.prof2 button').addEventListener('click', () => {
        alert("Shipping rates reviewed.");
    });

    document.querySelector('.prof:last-child button').addEventListener('click', () => {
        alert("Domain customization options opened.");
    });

    document.querySelector('.bottom button').addEventListener('click', () => {
        alert("Starting screen share call...");
    });

    // Store name editing
    const header = document.querySelector('.top');
    const storeNameTag = document.createElement('div');
    storeNameTag.innerHTML = `
        <input type="text" id="storeNameInput" placeholder="Enter store name" />
        <button id="changeNameBtn">Change Name</button>
        <div id="storeNameDisplay"></div>
    `;
    header.after(storeNameTag);

    document.getElementById('changeNameBtn').addEventListener('click', () => {
        const name = document.getElementById('storeNameInput').value.trim();
        if (name) {
            document.getElementById('storeNameDisplay').textContent = `Store Name: ${name}`;
        }
    });
});
