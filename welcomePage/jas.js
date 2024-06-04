// jas.js
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const barbershopList = document.getElementById('barbershopList');
    const barbershops = barbershopList.getElementsByClassName('barbershop-item');

    searchBar.addEventListener('keyup', (e) => {
        const searchText = e.target.value.toLowerCase();

        Array.from(barbershops).forEach((barbershop) => {
            const barbershopName = barbershop.querySelector('.barbershop-name').textContent.toLowerCase();

            if (barbershopName.includes(searchText)) {
                barbershop.style.display = '';
            } else {
                barbershop.style.display = 'none';
            }
        });
    });
});