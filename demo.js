// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    // (Top-row tabs removed) — keep only small-tabs content switching below

    // Small tabs with content switching (Home / Contact / About)
    const smallTabs = document.querySelectorAll('.tabs-small');
    const content = document.getElementById('tab-content');
    const contentMap = {
        home: [
            'Welcome to the Home tab — line one of content.',
            'Here is a second line describing Home content.'
        ],
        contact: [
            'Contact us at: contact@example.com',
            'Or call +1 (555) 123-4567 during business hours.'
        ],
        about: [
            'About Us: We build beautiful UI components.',
            'Our team loves pixels and good UX.'
        ]
    };

    smallTabs.forEach(tabRow => {
        const tabs = tabRow.querySelectorAll('.small-tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // deactivate siblings in this small tabs row
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');

                // update content area if present
                const key = this.getAttribute('data-tab');
                if (content && contentMap[key]) {
                    content.querySelector('.line1').textContent = contentMap[key][0];
                    content.querySelector('.line2').textContent = contentMap[key][1];
                }
            });
        });
    });

    // Bootstrap button toggle (preserved)
    const bootstrapBtn = document.querySelector('.btn-bootstrap');
    if (bootstrapBtn) {
        bootstrapBtn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});
