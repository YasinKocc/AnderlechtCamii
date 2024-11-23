//BOXES
const boxes = document.querySelectorAll('.main-box1, .main-box2, .main-box3');

const showBoxes = () => {
    const windowHeight = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; 
        if (boxTop < windowHeight) { 
            box.classList.add('visible'); 
        }
    });
};

window.addEventListener('scroll', showBoxes);
showBoxes();

// Modal'ı açar ve kişi bilgilerini doldurur
function openModal(name, job, info, imageUrl) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalJob').innerText = job;
    document.getElementById('modalInfo').innerText = info;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('personModal').style.display = "block";
}

// Modal'ı kapatır
function closeModal() {
    document.getElementById('personModal').style.display = "none";
}

// Esc tuşuna basıldığında modal'ı kapatır
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Menü açma ve kapama işlevi
// Menü açma fonksiyonu
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = sidebar.style.width === '250px' ? '0' : '250px'; // Sidebar'ı aç ve kapa
  }
  
  // Menü kapama fonksiyonu
  function closeMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.width = '0'; // Sidebar'ı kapat
  }
  
  