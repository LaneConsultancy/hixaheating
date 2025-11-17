// Cookie Consent Management
(function() {
    'use strict';
    
    const COOKIE_CONSENT_KEY = 'hixa_cookie_consent';
    const GA_ID = 'G-0M6494J79T';
    
    // Check if user has already made a choice
    function getConsentStatus() {
        return localStorage.getItem(COOKIE_CONSENT_KEY);
    }
    
    // Save consent choice
    function saveConsentStatus(status) {
        localStorage.setItem(COOKIE_CONSENT_KEY, status);
    }
    
    // Load Google Analytics
    function loadGoogleAnalytics() {
        // Create and append gtag.js script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script);
        
        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        window.gtag = gtag;
        
        gtag('js', new Date());
        gtag('config', GA_ID, {
            'anonymize_ip': true, // GDPR compliance - anonymize IP addresses
            'cookie_flags': 'SameSite=None;Secure'
        });
    }
    
    // Show cookie banner
    function showBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'block';
        }
    }
    
    // Hide cookie banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.display = 'none';
        }
    }
    
    // Handle accept button click
    function handleAccept() {
        saveConsentStatus('accepted');
        hideBanner();
        loadGoogleAnalytics();
    }
    
    // Handle decline button click
    function handleDecline() {
        saveConsentStatus('declined');
        hideBanner();
    }
    
    // Initialize on page load
    function init() {
        const consentStatus = getConsentStatus();
        
        if (consentStatus === 'accepted') {
            // User previously accepted - load analytics
            loadGoogleAnalytics();
        } else if (consentStatus === 'declined') {
            // User previously declined - do nothing
        } else {
            // No choice made yet - show banner
            showBanner();
        }
        
        // Attach event listeners
        const acceptBtn = document.getElementById('cookie-accept');
        const declineBtn = document.getElementById('cookie-decline');
        
        if (acceptBtn) {
            acceptBtn.addEventListener('click', handleAccept);
        }
        
        if (declineBtn) {
            declineBtn.addEventListener('click', handleDecline);
        }
    }
    
    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
