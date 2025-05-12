document.querySelectorAll('.ass-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active classes from all buttons
        document.querySelectorAll('.ass-btn').forEach(b => {
            b.classList.remove('btn-outline-warning');
            b.classList.add('btn-outline-dark');
        });

        // Add active class to clicked button
        btn.classList.remove('btn-outline-dark');
        btn.classList.add('btn-outline-warning');

        // In a real application, you would update the description card here
    });
});
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        // Get the service type from data attribute
        const serviceType = btn.getAttribute('data-service');

        // Remove active class from all buttons and content
        document.querySelectorAll('.service-btn').forEach(b => {
            b.classList.remove('active');
        });
        document.querySelectorAll('.service-content').forEach(content => {
            content.classList.remove('active');
        });

        // Add active class to clicked button
        btn.classList.add('active');

        // Show corresponding content
        document.getElementById(`${serviceType}-content`).classList.add('active');
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navigator: true,
        // [
        //     '<span aria-hidden="true">&lsaquo;</span>',
        //     '<span aria-hidden="true">&rsaquo;</span>'
        // ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
});

  $(document).ready(function() {
    $('.js-example-basic-single').select2({
      minimumResultsForSearch: 0
    });
  });
  


