import DOM from './Dom.js';

const metaCharset = DOM.create('meta');
DOM.attr(metaCharset, 'charset', 'UTF-8');

const metaViewport = DOM.create('meta');
DOM.attr(metaViewport, 'name', 'viewport');
DOM.attr(metaViewport, 'content', 'width=device-width, initial-scale=1.0');

const title = DOM.create('title');
DOM.html(title, 'Finance App');

const linkGFonts = DOM.create('link');
DOM.attr(linkGFonts, 'rel', 'stylesheet');
DOM.attr(linkGFonts, 'href', 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');

const linkStyle = DOM.create('link');
DOM.attr(linkStyle, 'rel', 'stylesheet');
DOM.attr(linkStyle, 'href', 'css/style.css');

DOM.append(document.head, metaCharset);
DOM.append(document.head, metaViewport);
DOM.append(document.head, title);
DOM.append(document.head, linkGFonts);
DOM.append(document.head, linkStyle);
