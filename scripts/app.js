// 简单的交互示例
document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('.intro');

    introSection.addEventListener('click', function () {
        window.location.href = 'pages/project-details.html';
    });

    // 添加鼠标悬停提示
    introSection.title = '点击查看详细介绍';
    introSection.style.cursor = 'pointer';

    // 主题切换功能
    const themeSwitch = document.getElementById('themeSwitch');
    
    // 检查本地存储中的主题设置
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // 检查系统主题偏好
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    }

    // 主题切换事件处理
    themeSwitch.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 监听系统主题变化
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});