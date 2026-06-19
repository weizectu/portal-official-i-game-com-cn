(function() {
    'use strict';

    var siteConfig = {
        portalUrl: 'https://portal-official-i-game.com.cn',
        keyword: '爱游戏',
        pageTitle: '平台引导页'
    };

    var cardData = [
        { icon: '💡', title: '提示', content: '点击下方按钮可快速访问主站' },
        { icon: '🏷️', title: '关键词', content: siteConfig.keyword + ' 官方入口' },
        { icon: '📘', title: '说明', content: '本页为辅助导航，不存储敏感数据' }
    ];

    var badges = [
        { label: '官方', color: '#4caf50' },
        { label: siteConfig.keyword, color: '#2196f3' },
        { label: '安全', color: '#ff9800' }
    ];

    function createElement(tag, attrs, children) {
        var el = document.createElement(tag);
        if (attrs) {
            for (var key in attrs) {
                if (key === 'className') {
                    el.className = attrs[key];
                } else if (key === 'style' && typeof attrs[key] === 'object') {
                    for (var prop in attrs[key]) {
                        el.style[prop] = attrs[key][prop];
                    }
                } else {
                    el.setAttribute(key, attrs[key]);
                }
            }
        }
        if (children) {
            children.forEach(function(child) {
                if (typeof child === 'string') {
                    el.appendChild(document.createTextNode(child));
                } else if (child instanceof Node) {
                    el.appendChild(child);
                }
            });
        }
        return el;
    }

    function buildCard(item) {
        var card = createElement('div', { className: 'card-item', style: { border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '12px', background: '#fafafa' } });
        var header = createElement('div', { className: 'card-header', style: { display: 'flex', alignItems: 'center', gap: '8px' } });
        var iconSpan = createElement('span', { className: 'card-icon' }, [item.icon]);
        var titleSpan = createElement('span', { className: 'card-title', style: { fontWeight: 'bold', fontSize: '1.1em' } }, [item.title]);
        header.appendChild(iconSpan);
        header.appendChild(titleSpan);
        var body = createElement('div', { className: 'card-body', style: { marginTop: '8px', color: '#333' } }, [item.content]);
        card.appendChild(header);
        card.appendChild(body);
        return card;
    }

    function buildBadge(badge) {
        var span = createElement('span', {
            className: 'badge',
            style: {
                display: 'inline-block',
                padding: '4px 12px',
                margin: '4px',
                borderRadius: '16px',
                background: badge.color,
                color: '#fff',
                fontSize: '0.9em',
                fontWeight: '500'
            }
        }, [badge.label]);
        return span;
    }

    function init() {
        var container = document.getElementById('site-helper-root');
        if (!container) {
            container = createElement('div', { id: 'site-helper-root', style: { maxWidth: '600px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' } });
            document.body.appendChild(container);
        }

        var heading = createElement('h2', { style: { textAlign: 'center', marginBottom: '24px' } }, [siteConfig.pageTitle]);
        container.appendChild(heading);

        var cardsContainer = createElement('div', { className: 'cards-container' });
        cardData.forEach(function(item) {
            cardsContainer.appendChild(buildCard(item));
        });
        container.appendChild(cardsContainer);

        var badgeContainer = createElement('div', { className: 'badges-wrapper', style: { textAlign: 'center', marginTop: '20px' } });
        badges.forEach(function(b) {
            badgeContainer.appendChild(buildBadge(b));
        });
        container.appendChild(badgeContainer);

        var linkContainer = createElement('div', { style: { textAlign: 'center', marginTop: '24px' } });
        var link = createElement('a', {
            href: siteConfig.portalUrl,
            target: '_blank',
            rel: 'noopener noreferrer',
            style: {
                display: 'inline-block',
                padding: '12px 28px',
                background: '#1976d2',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold'
            }
        }, ['前往 ' + siteConfig.keyword + ' 官网']);
        linkContainer.appendChild(link);
        container.appendChild(linkContainer);

        var note = createElement('p', { style: { textAlign: 'center', marginTop: '16px', fontSize: '0.85em', color: '#777' } }, ['此页面为辅助导航，所有操作均跳转至 ' + siteConfig.portalUrl]);
        container.appendChild(note);

        var accessInfo = createElement('div', { className: 'access-info', style: { marginTop: '12px', padding: '10px', background: '#e3f2fd', borderRadius: '4px', fontSize: '0.9em', textAlign: 'center' } }, ['使用说明：点击上方链接可打开官方平台，关键词"' + siteConfig.keyword + '"用于内容标识。']);
        container.appendChild(accessInfo);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();