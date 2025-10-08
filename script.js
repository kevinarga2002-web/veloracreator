// JavaScript untuk efek interaktif
document.addEventListener('DOMContentLoaded', function() {
    console.log('Velora Creator Website Loaded');
    
    // Efek scroll halus untuk semua link internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Efek parallax untuk background animation
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const background = document.querySelector('.background-animation');
        if (background) {
            background.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Animasi saat elemen muncul di viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Terapkan animasi untuk semua card
    const animatedElements = document.querySelectorAll('.owner-card, .community-container, .game-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Animasi untuk section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach((title, index) => {
        title.style.opacity = '0';
        title.style.transform = index % 2 === 0 ? 'translateX(-50px)' : 'translateX(50px)';
        title.style.transition = 'opacity 1s ease, transform 1s ease';
        setTimeout(() => {
            title.style.opacity = '1';
            title.style.transform = 'translateX(0)';
        }, 500 + index * 200);
    });

    // Animasi stagger untuk skills list
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 1000 + index * 100);
    });

    // Animasi stagger untuk community links
    const communityLinks = document.querySelectorAll('.community-link');
    communityLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateY(30px)';
        link.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 1200 + index * 150);
    });

    // Animasi untuk footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.opacity = '0';
        footer.style.transform = 'translateY(30px)';
        footer.style.transition = 'opacity 1s ease, transform 1s ease';
        setTimeout(() => {
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
        }, 1500);
    }

    // Animasi pulse untuk game images
    const gameImages = document.querySelectorAll('.game-image');
    gameImages.forEach((img, index) => {
        setTimeout(() => {
            img.style.animation = 'pulse 2s infinite';
        }, 2000 + index * 500);
    });

    // Efek hover dinamis untuk card
    const cards = document.querySelectorAll('.owner-card, .game-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(138, 43, 226, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });
    });

    // Animasi teks berkedip untuk logo
    const logo = document.querySelector('.logo');
    if (logo) {
        setInterval(() => {
            logo.style.animation = 'none';
            setTimeout(() => {
                logo.style.animation = 'glow 2s ease-in-out infinite alternate';
            }, 10);
        }, 5000);
    }

    // Efek ketik untuk tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        tagline.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                tagline.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Mulai efek ketik setelah halaman dimuat
        setTimeout(typeWriter, 1000);
    }

    // Tambahkan partikel
    createParticles();
});

// Fungsi untuk menambahkan efek partikel
function createParticles() {
    const background = document.querySelector('.background-animation');
    if (!background) return;
    
    // Hapus partikel lama jika ada
    const oldParticles = document.querySelectorAll('.particle');
    oldParticles.forEach(particle => particle.remove());
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        const opacity = 0.3 + Math.random() * 0.4;
        const purpleShade = 138 + Math.floor(Math.random() * 50);
        particle.style.background = `rgba(${purpleShade}, 43, 226, ${opacity})`;
        
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        
        const duration = 15 + Math.random() * 15;
        const delay = Math.random() * 5;
        particle.style.animation = `particleFloat ${duration}s infinite ease-in-out ${delay}s`;
        
        background.appendChild(particle);
    }
}

// Handle resize window
window.addEventListener('resize', function() {
    createParticles();
});

// Tambahkan efek klik pada link
document.querySelectorAll('.community-link, .game-link').forEach(link => {
    link.addEventListener('click', function(e) {
        // Efek ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

        // For community links, allow redirect after ripple effect
        if (this.classList.contains('community-link') && this.href !== '#') {
            setTimeout(() => {
                window.location.href = this.href;
            }, 300);
        } else {
            // For game links or placeholder links, show alert
            setTimeout(() => {
                alert('Redirecting to: ' + this.textContent);
            }, 300);
        }
    });
});

// Tambahkan style untuk ripple effect
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);