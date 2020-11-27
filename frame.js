const remote = require('electron').remote;
const currentWindow = remote.getCurrentWindow();

insertLinkCss = function()
{
    let head = document.getElementsByTagName('head')[0],
        link = element('link');
    link.rel = 'stylesheet';
    link.href= './css/frame.css';
    head.appendChild(link);
}

createFrame = function()
{
    insertLinkCss();
    let fr = frame();
    fr.appendChild(favicon());
    fr.appendChild(pageTitle());
    fr.appendChild(btnGroup());
    document.body.appendChild(fr);
};

frame       = function()
{
    let frame = element('div');
    
    frame.id = 'frame';
    frame.setAttribute('draggable','true');

    return frame;
}

favicon     = function()
{
    let icon = element('img');

    icon.src = '../favicon.png';
    icon.alt = 'Gramense';
    icon.id  = 'favicon';

    return icon;
}

pageTitle   = function()
{
    let title = element('h1');

    title.innerHTML = 'Criador de promoções';

    return title;
}

btnGroup    = function()
{
    let btnGp = element('div');
    let btnMin= createButton('../Minimize.svg'),
        btnMax= createButton('../Maximized.svg'),
        btnCls= createButton('../Close.svg');

    btnGp.classList.add('frame-btn');

    btnMin.addEventListener('click', () => { currentWindow.minimize(); });
    btnMax.addEventListener('click', () => {
        if(!currentWindow.isMaximized())
            currentWindow.maximize();
        else
            currentWindow.unmaximize();
    });
    btnCls.addEventListener('click', () => { currentWindow.close(); });

    btnGp.appendChild(btnMin);
    btnGp.appendChild(btnMax);
    btnGp.appendChild(btnCls);

    return btnGp;
}

createButton= function(image)
{
    let btn = element('button'),
        img = element('img');

    img.src = image;

    btn.appendChild(img);
    return btn;
}

function element(tag)
{
    return document.createElement(tag);
}

Element.prototype.css = function (styles)
{
    for(let [attr,val] of Object.entries(styles))
    {
        this.style[attr] = val;
    }
}

createFrame();