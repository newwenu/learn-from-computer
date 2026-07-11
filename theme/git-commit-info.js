(function () {
    var repoUrl = "https://github.com/newwenu/learn-from-computer";
    var container = document.getElementById('git-commit-info');
    var timeSpan = document.getElementById('git-commit-time');

    if (!container || !timeSpan) return;

    if (typeof version !== 'undefined' && version.sha) {
        var date = new Date(version.date);
        var formattedDate = date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0') + ' ' +
            String(date.getHours()).padStart(2, '0') + ':' +
            String(date.getMinutes()).padStart(2, '0');

        container.innerHTML = '<a href="' + repoUrl + '/commit/' + version.fullSha + '" target="_blank" rel="noopener noreferrer" title="查看提交详情">' +
            '版本: ' + version.sha + ' | 更新: ' + formattedDate +
            '</a>';
    } else {
        timeSpan.textContent = '开发版本';
    }
})();
