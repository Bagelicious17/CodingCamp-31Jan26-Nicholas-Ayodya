// Navigation Logic
function showPage(pageId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show requested section
    const target = document.getElementById(`${pageId}-page`);
    target.classList.add('active');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Welcoming Logic
function enterSite() {
    const visitorName = document.getElementById('visitorName').value;
    const overlay = document.getElementById('welcome-overlay');
    const mainContent = document.getElementById('main-content');
    const welcomeText = document.getElementById('welcome-text');

    if (visitorName.trim() === "") {
        alert("Please enter your name my guy!");
        return;
    }

    // Update display names
    welcomeText.innerHTML = `${visitorName}, <br>Welcome to Website`;
    
    // Handle Transitions
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.visibility = 'hidden';
        mainContent.style.opacity = '1';
    }, 800);
    
    // Pre-fill form
    document.getElementById('inputNama').value = visitorName;
    document.getElementById('displayNama').innerText = visitorName;
}

// Update Time Function
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('en-GB', { 
        weekday: 'short', 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZoneName: 'short' 
    });
    document.getElementById('displayTime').innerText = timeString;
}

updateTime();
setInterval(updateTime, 1000);

// Form Logic
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('inputNama').value;
    const tanggal = document.getElementById('inputTanggal').value;
    const pesan = document.getElementById('inputPesan').value;
    const jk = document.querySelector('input[name="jk"]:checked').value;

    if(!nama) {
        alert("Please enter your name!");
        return;
    }

    const updateBox = (id, val) => {
        const el = document.getElementById(id);
        el.classList.add('opacity-0');
        setTimeout(() => {
            el.innerText = val || "-";
            el.classList.remove('opacity-0');
            el.classList.add('transition-opacity', 'duration-300', 'opacity-100');
        }, 200);
    };

    updateBox('displayNama', nama);
    updateBox('displayTanggal', tanggal);
    updateBox('displayJK', jk);
    updateBox('displayPesan', pesan);
    
    document.getElementById('welcome-text').innerHTML = `${nama.split(' ')[0]}, <br>Welcome to Website`;
});