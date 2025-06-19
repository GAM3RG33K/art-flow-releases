// Fetch latest release info from GitHub
async function fetchLatestRelease() {
    try {
        // Updated to use public releases repository
        const response = await fetch('https://api.github.com/repos/GAM3RG33K/art-flow-releases/releases/latest');

        // Handle the case where no releases exist (404)
        if (response.status === 404) {
            console.log('No releases found yet - this is normal for new projects');
            handleNoReleases();
            return;
        }

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const release = await response.json();

        // Update version
        const versionElement = document.getElementById('app-version');
        if (versionElement) {
            versionElement.textContent = release.tag_name || 'v1.0.0';
        }

        // Update download links
        updateDownloadLinks(release);

    } catch (error) {
        console.log('Could not fetch release info:', error.message);
        handleNoReleases();
    }
}

function handleNoReleases() {
    // Set default version
    const versionElement = document.getElementById('app-version');
    if (versionElement) {
        versionElement.textContent = 'v1.0.0';
    }

    // Show "Coming Soon" message for downloads
    const downloadSection = document.getElementById('download-section');
    if (downloadSection) {
        downloadSection.innerHTML = `
            <div class="download-placeholder">
                <h3>Download Coming Soon!</h3>
                <p>We're preparing the first release of ArtFlow. Check back soon for download links!</p>
                <div class="download-buttons">
                    <a href="https://github.com/GAM3RG33K/art-flow-releases" class="download-button" target="_blank">
                        <span class="button-icon">📱</span>
                        <div class="button-content">
                            <div class="button-title">View Releases</div>
                            <div class="button-subtitle">GitHub Repository</div>
                        </div>
                    </a>
                    <a href="https://github.com/GAM3RG33K/art-flow-releases/releases" class="download-button secondary" target="_blank">
                        <span class="button-icon">🔔</span>
                        <div class="button-content">
                            <div class="button-title">Get Notified</div>
                            <div class="button-subtitle">Watch for Releases</div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
}

function updateDownloadLinks(release) {
    const downloadSection = document.getElementById('download-section');
    if (!downloadSection || !release.assets || release.assets.length === 0) {
        handleNoReleases();
        return;
    }

    // Find APK asset
    const apkAsset = release.assets.find(asset =>
        asset.name.toLowerCase().includes('.apk') ||
        asset.name.toLowerCase().includes('android') ||
        asset.name.toLowerCase().includes('art-flow')
    );

    if (apkAsset) {
        downloadSection.innerHTML = `
            <div class="download-available">
                <h3>Download ArtFlow</h3>
                <p>Latest version: ${release.tag_name} • Released: ${new Date(release.published_at).toLocaleDateString()}</p>
                <div class="download-buttons">
                    <a href="${apkAsset.browser_download_url}" class="download-button primary" download>
                        <span class="button-icon">📱</span>
                        <div class="button-content">
                            <div class="button-title">Download APK</div>
                            <div class="button-subtitle">${(apkAsset.size / (1024 * 1024)).toFixed(1)} MB</div>
                        </div>
                    </a>
                    <a href="${release.html_url}" class="download-button secondary" target="_blank">
                        <span class="button-icon">📋</span>
                        <div class="button-content">
                            <div class="button-title">Release Notes</div>
                            <div class="button-subtitle">What's New</div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    } else {
        handleNoReleases();
    }
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Update theme toggle button icon
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    }
}

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
        themeToggle.addEventListener('click', toggleTheme);
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Add loading states
function showLoadingState() {
    const downloadSection = document.getElementById('download-section');
    if (downloadSection) {
        downloadSection.innerHTML = `
            <div class="loading-state">
                <div class="loading-spinner"></div>
                <p>Checking for latest version...</p>
            </div>
        `;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeSmoothScrolling();
    initializeScrollAnimations();

    // Show loading state first
    showLoadingState();

    // Then fetch release info
    fetchLatestRelease();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function () {
    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click animation to buttons
    const buttons = document.querySelectorAll('.download-button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}); 