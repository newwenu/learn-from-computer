(function () {
    const btn = document.createElement('label');
    btn.id = 'mdbook-sidebar-collapse-btn';
    btn.htmlFor = 'mdbook-sidebar-toggle-anchor';
    btn.setAttribute('aria-label', '切换侧边栏');
    btn.setAttribute('title', '切换侧边栏');
    btn.innerHTML = '◀';

    const sidebar = document.getElementById('mdbook-sidebar');
    if (sidebar) {
        sidebar.appendChild(btn);
    }

    // Reverse arrow direction when sidebar is hidden
    const checkbox = document.getElementById('mdbook-sidebar-toggle-anchor');
    if (checkbox) {
        checkbox.addEventListener('change', function () {
            btn.innerHTML = checkbox.checked ? '◀' : '▶';
        });
        btn.innerHTML = checkbox.checked ? '◀' : '▶';
    }

    // Mobile: tap on the right side (page content) to close sidebar
    function isMobileDevice() {
        const ua = navigator.userAgent;
        const isMobileUA = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
        const isIPad = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
        return isMobileUA || isIPad;
    }

    if (isMobileDevice() && checkbox) {
        const pageWrapper = document.getElementById('mdbook-page-wrapper');
        if (pageWrapper) {
            pageWrapper.addEventListener('click', function (event) {
                // Only close if sidebar is currently open
                if (checkbox.checked) {
                    checkbox.checked = false;
                    // Trigger change event so other listeners (like the arrow button) update
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        }
    }
})();
