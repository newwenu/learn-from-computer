(function () {
    const repoUrl = "https://github.com/newwenu/learn-from-computer";
    const apiUrl = "https://api.github.com/repos/newwenu/learn-from-computer/commits?per_page=1";
    const container = document.getElementById('git-commit-info');
    const timeSpan = document.getElementById('git-commit-time');

    if (!container || !timeSpan) return;

    fetch(apiUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error('GitHub API 请求失败');
            }
            return response.json();
        })
        .then(function (commits) {
            if (commits && commits.length > 0) {
                const commit = commits[0];
                const date = new Date(commit.commit.committer.date);
                const formattedDate = date.getFullYear() + '-' +
                    String(date.getMonth() + 1).padStart(2, '0') + '-' +
                    String(date.getDate()).padStart(2, '0') + ' ' +
                    String(date.getHours()).padStart(2, '0') + ':' +
                    String(date.getMinutes()).padStart(2, '0');
                const shortSha = commit.sha.substring(0, 7);

                container.innerHTML = '<a href="' + repoUrl + '/commit/' + commit.sha + '" target="_blank" rel="noopener noreferrer" title="查看提交详情">' +
                    '版本: ' + shortSha + ' | 更新: ' + formattedDate +
                    '</a>';
            } else {
                timeSpan.textContent = '暂无提交记录';
            }
        })
        .catch(function (error) {
            timeSpan.textContent = '无法获取版本信息';
            console.warn('获取 GitHub commit 信息失败:', error);
        });
})();