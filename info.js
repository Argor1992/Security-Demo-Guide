// Authors: Roman Dudkevych, 1254719 und Thorsten Zieres, 1297197

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