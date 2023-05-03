// author: Evan
;(function(){

const STYLE_ID = `custom_style_element_xx`;
const chatEl = document.querySelector('.Chat_chat__Bdojy');

function hideChat() {

    chatEl.style.display = 'none';

    const styleEl = document.createElement('style');
    styleEl.id = STYLE_ID;
    styleEl.innerHTML = `
    @media screen and (min-width: 800px)and (min-height:500px) {
        .AppShell_app-shell__slfko {
            grid-template-columns:minmax(400px,1fr) 10fr !important;
        }
    }`;

    document.body.appendChild(styleEl);

}

function showChat() {

    chatEl.style.display = '';
    const styleEl = document.querySelector(`#${STYLE_ID}`);
    if (styleEl != null) {
        styleEl.remove();
    }
}

if (chatEl == null) return;

if (chatEl.style.display === 'none') {
    showChat();
} else {
    hideChat();
}

})();
