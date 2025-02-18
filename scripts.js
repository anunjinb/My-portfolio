document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable__title-bar");
    const expandable = ev.target.closest(".expandable");
    
    console.log(expandable);
    if (isExpandableTitle) {
        expandable.classList.toggle("expandable--open");
    } 

    return;
});

document.body.addEventListener("click", (ev) => {
    const isExpandableTitle = !!ev.target.closest(".expandable2__title-bar");
    const expandable = ev.target.closest(".expandable2");
    
    console.log(expandable);
    if (isExpandableTitle) {
        expandable.classList.toggle("expandable2--open");
    } 

    return;
});