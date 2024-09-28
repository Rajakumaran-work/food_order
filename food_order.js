function filterCuisine() {
    const selectedCuisine = document.getElementById('cuisine-filter').value;
    const foodBoxes = document.querySelectorAll('.food-box');
    const titleContainer = document.querySelector('.title-container');

    let visibleFoodBoxes = 0;

    foodBoxes.forEach(box => {
        const cuisine = box.getAttribute('data-cuisine');
        box.style.display = (selectedCuisine === 'all' || cuisine === selectedCuisine) ? 'block' : 'none';

        if (box.style.display === 'block') {
            visibleFoodBoxes++;
        }
    });

    titleContainer.style.display = (selectedCuisine === 'all' && visibleFoodBoxes > 0) ? 'flex' : 'none';
}
