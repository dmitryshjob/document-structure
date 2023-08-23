const links = document.querySelectorAll('.has-tooltip');
console.log(links)

links.forEach(tooltipLink => {
    tooltipLink.insertAdjacentHTML('afterend', '<div class="tooltip" style="left: 0; top: 0"></div>');
    tooltipLink.addEventListener('click', (e) => {
        e.preventDefault();
        tooltipLink.nextElementSibling.classList.toggle('tooltip_active');
        tooltipLink.nextElementSibling.textContent = tooltipLink.title;
        tooltipLink.nextElementSibling.style.top = `${tooltipLink.getBoundingClientRect().bottom}px`;
        tooltipLink.nextElementSibling.style.left = `${tooltipLink.getBoundingClientRect().left}px`;
        return false;
   });
});


