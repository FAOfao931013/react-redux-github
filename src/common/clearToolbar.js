import f7 from './f7.js';

let {$} = f7;

let $pages = $('#pages');

export default () => {
    $pages.removeClass('toolbar-fixed');
};
