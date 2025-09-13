const singersSelect = document.getElementById('singersSelect');
const singersContainer = document.getElementById('singersContainer');
let selectedSingers = [];

singersSelect.addEventListener('change', function() {
    const selected = this.value;
    if(selected && !selectedSingers.includes(selected)){
        selectedSingers.push(selected);
        updateTags();
    }
    // Reset select after selection
    this.selectedIndex = 0;
});

function updateTags(){
    singersContainer.innerHTML = '';
    selectedSingers.forEach((singer, index) => {
        const tag = document.createElement('div');
        tag.classList.add('singer-tag');
        tag.textContent = singer + ' ✖';
        tag.addEventListener('click', () => {
            selectedSingers.splice(index, 1);
            updateTags();
        });
        singersContainer.appendChild(tag);
    });
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();

    if(name === "" || age === "" || email === "" || selectedSingers.length === 0){
        alert("Please fill all fields and select at least one singer.");
        return;
    }

    alert(`Thank you, ${name}!\nAge: ${age}\nEmail: ${email}\nFavorite Singers: ${selectedSingers.join(', ')}`);
    form.reset();
    selectedSingers = [];
    updateTags();
});