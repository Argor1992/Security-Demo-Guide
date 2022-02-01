/**
 * @author Roman Dudkevych, 1254716 70%
 * @author Thorsten Zieres, 1297197 30%
 */


/**
 * Funktion um einen "smoothscroll" zu ermöglichen. Navigationsbar innerhalb der Info- sowie Demoseiten wird animiert.
 */
let navLinks = document.querySelectorAll('.smoothscroll');

window.addEventListener('scroll', () => {

    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight;
    var scrolled = (winScroll / height);

    navLinks.forEach ( link => {
        
        let section = document.querySelector(link.hash);
        
        link.classList.remove('active');
        
        link.onclick = (e) => {
            e.preventDefault();
            let elementPosition = section.offsetTop;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth',
            });
        };
    });

    let index = Math.round(scrolled * navLinks.length);
    navLinks[index].classList.add('active');
});