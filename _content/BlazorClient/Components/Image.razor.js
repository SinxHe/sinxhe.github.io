export function open_in_new_tab(html){
    const newTab = window.open();
    newTab.document.body.innerHTML = html;
}