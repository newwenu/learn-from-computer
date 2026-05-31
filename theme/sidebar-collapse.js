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
})();
