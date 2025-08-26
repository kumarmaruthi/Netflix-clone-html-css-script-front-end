document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Content slider functionality
    const sliders = document.querySelectorAll('.row-slider');
    
    sliders.forEach(slider => {
        const container = slider.querySelector('.slider-container');
        const prevBtn = slider.querySelector('.slider-nav-prev');
        const nextBtn = slider.querySelector('.slider-nav-next');
        
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                container.scrollBy({ left: -container.offsetWidth * 0.8, behavior: 'smooth' });
            });
            
            nextBtn.addEventListener('click', () => {
                container.scrollBy({ left: container.offsetWidth * 0.8, behavior: 'smooth' });
            });
        }
    });

    // Simulate loading content from an API
    function loadContent() {
        // In a real application, this would fetch data from your backend
        console.log('Loading content from API...');
        
        // Simulate API call delay
        setTimeout(() => {
            // This is where you would process the API response
            // and update the DOM with the received data
            console.log('Content loaded successfully');
        }, 1000);
    }

    // Modal functionality
    const loginModal = document.getElementById('login-modal');
    const profileMenu = document.querySelector('.profile-menu');
    
    // In a real app, you would check if the user is logged in
    const isLoggedIn = false;
    
    if (!isLoggedIn) {
        // Show login modal when clicking on profile (if not logged in)
        profileMenu.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.style.display = 'flex';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Form submission
    const authForm = document.querySelector('.auth-form');
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = authForm.querySelector('input[type="email"]').value;
            const password = authForm.querySelector('input[type="password"]').value;
            
            // In a real application, this would send the data to your backend
            console.log('Login attempt:', { email, password });
            
            // Simulate authentication
            setTimeout(() => {
                // On successful authentication, you would:
                // 1. Store the authentication token
                // 2. Update the UI to reflect the logged-in state
                // 3. Close the modal
                loginModal.style.display = 'none';
                alert('Login successful! (This is a demo)');
            }, 1000);
        });
    }

    // Initialize content loading
    loadContent();
    
    // Simulate content recommendations based on user preferences
    function getRecommendations() {
        // In a real app, this would call your backend API
        // which would query MongoDB for user-specific recommendations
        console.log('Fetching personalized recommendations...');
    }
    
    // Check if user is authenticated and get recommendations
    if (isLoggedIn) {
        getRecommendations();
    }
});