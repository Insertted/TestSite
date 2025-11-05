function transitionToMain() {
    const startScreen = document.getElementById('start-screen');
    const mainSite = document.getElementById('main-site');
    const logo = document.getElementById('logo');
    
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);
    
    setTimeout(() => {
        overlay.style.transition = 'transform 0.8s ease-in-out';
        overlay.style.transform = 'scaleY(1)';
        
        setTimeout(() => {
            startScreen.classList.remove('active');
            mainSite.classList.add('active');
            
            mainSite.style.opacity = '0';
            mainSite.style.transition = 'opacity 0.5s ease-in-out';
            
            setTimeout(() => {
                mainSite.style.opacity = '1';
                
                setTimeout(() => {
                    overlay.style.transition = 'transform 0.8s ease-in-out';
                    overlay.style.transform = 'scaleY(0)';
                    
                    setTimeout(() => {
                        document.body.removeChild(overlay);
                    }, 800);
                }, 300);
            }, 50);
        }, 800);
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');
    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.5)';
    logo.style.transition = 'all 1s ease-in-out';
    
    setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1)';
    }, 300);
});

document.addEventListener('keydown', function(event) {
    if (event.code === 'Enter' || event.code === 'Space') {
        const startScreen = document.getElementById('start-screen');
        if (startScreen.classList.contains('active')) {
            transitionToMain();
        }
    }
});