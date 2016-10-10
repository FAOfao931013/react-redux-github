import 'framework7';
import 'framework7/dist/css/framework7.ios.css';

const $ = window.Dom7;
const Framework7 = window.Framework7;
const myApp = new Framework7({
    ajaxLinks: 'ajax',
    router: false,
    sortable: false,
    swipeout: false,
    // fastClicks: false
});

const mainView = () => myApp.addView('.view-main');

$(document).on('click', 'a:not(.link-tel)', e => e.preventDefault());

export default { $, Framework7, myApp, mainView };
