// Church Website JavaScript

// Smooth scroll to top when changing tabs
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Admin Login Functionality
    const adminLoginForm = document.getElementById('adminLoginForm');
    const adminPanel = document.getElementById('adminPanel');
    
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple demo login (in production, this should use secure backend authentication)
            if (username === 'admin' && password === 'password') {
                // Hide login form
                adminLoginForm.parentElement.parentElement.style.display = 'none';
                
                // Show admin panel
                adminPanel.style.display = 'block';
                
                // Show success message
                alert('Login successful! Welcome to the admin panel.');
            } else {
                alert('Invalid credentials. Please try again.\n\nDemo credentials:\nUsername: admin\nPassword: password');
            }
        });
    }
    
    // Auto-collapse navbar on mobile after clicking a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        });
    });
    
    // Update active tab in navbar when tab is shown
    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener('shown.bs.tab', function (event) {
            // Remove active class from all nav links
            document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current nav link
            event.target.classList.add('active');
        });
        
        // Add scroll to top on tab change
        tab.addEventListener('click', scrollToTop);
    });
});
