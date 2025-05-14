
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
    $(".owl-carousel").not('.owl-carousel-2').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: [
            '<img src="./arrow-sm-left-svgrepo-com.svg" alt="Prev">',
            '<img src="./arrow-sm-right-svgrepo-com.svg" alt="Next">'
        ],
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
$(document).ready(function () {
    $(".owl-carousel-2").not('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav:true,
        dots: false,
        navText: [
            '<img src="./arrow-sm-left-svgrepo-com.svg" alt="Prev">',
            '<img src="./arrow-sm-right-svgrepo-com.svg" alt="Next">'
        ],
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
                items: 3
            }
        }
    });
});
$(document).ready(function () {
    $(".testimonial-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav:true,
        dots: false,
        navText: [
            '<img src="./arrow-sm-left-svgrepo-com.svg" alt="Prev">',
            '<img src="./arrow-sm-right-svgrepo-com.svg" alt="Next">'
        ],
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
                items: 3
            }
        }
    });
});


$(document).ready(function () {
    $('.js-example-basic-single').select2({
        minimumResultsForSearch: 0
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Set up initial state - make sure the correct image is shown for the expanded accordion item
    const initialExpandedItem = document.querySelector('.accordion-collapse.show');
    if (initialExpandedItem) {
        const accordionItem = initialExpandedItem.closest('.accordion-item');
        const imageId = accordionItem.getAttribute('data-image');

        if (imageId) {
            // Hide all images first
            document.querySelectorAll('.accordion-image').forEach(img => {
                img.classList.remove('active');
            });

            // Show the correct image
            const targetImage = document.getElementById(imageId);
            if (targetImage) {
                targetImage.classList.add('active');
            }
        }
    }

    // Set up listeners for all accordion buttons
    const accordionButtons = document.querySelectorAll('.accordion-button');
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const isCollapsed = this.classList.contains('collapsed');
            const accordionItem = this.closest('.accordion-item');
            const imageId = accordionItem.getAttribute('data-image');

            // If opening this accordion item
            if (isCollapsed) {
                // Hide all images
                document.querySelectorAll('.accordion-image').forEach(img => {
                    img.classList.remove('active');
                });

                // Show the selected image
                if (imageId) {
                    const targetImage = document.getElementById(imageId);
                    if (targetImage) {
                        targetImage.classList.add('active');
                    }
                }
            }
        });
    });

    // Also handle Bootstrap's collapse events
    const myCollapsible = document.querySelectorAll('.accordion-collapse');
    myCollapsible.forEach(collapseEl => {
        collapseEl.addEventListener('show.bs.collapse', event => {
            const accordionItem = event.target.closest('.accordion-item');
            const imageId = accordionItem.getAttribute('data-image');

            // Hide all images
            document.querySelectorAll('.accordion-image').forEach(img => {
                img.classList.remove('active');
            });

            // Show the selected image
            if (imageId) {
                const targetImage = document.getElementById(imageId);
                if (targetImage) {
                    targetImage.classList.add('active');
                }
            }
        });
    });
});

