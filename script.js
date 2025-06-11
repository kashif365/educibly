
$(document).ready(function () {
    $("#navbar").load("navbar.html");
    $("#footer").load("footer.html");
});

// const currentPage = window.location.pathname.split("/").pop();
// document.querySelectorAll(".nav-link").forEach(link => {
//     const linkHref = link.getAttribute("href").replace("./", "");
//     if (linkHref === currentPage) {
//         link.classList.add("active");
//     }
// });

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
    $(".owl-carousel").not('.owl-carousel-2, .testimonial-carousel, .service-carousel, .about-card, .writer-carousel, .experts-carousel').owlCarousel({
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
        nav: false,
        dots: true,
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
        nav: false,
        dots: true,
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
    $(".service-carousel").owlCarousel({
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
                items: 3
            }
        }
    });
});
$(document).ready(function () {
    $(".about-card").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });
});
$(document).ready(function () {
    $(".writer-carousel").owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        navText: [
            '<img src="./arrow-sm-left-svgrepo-com.svg" alt="Prev">',
            '<img src="./arrow-sm-right-svgrepo-com.svg" alt="Next">'
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 2
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


// $(document).ready(function () {
//     const $toggleButton = $('#toggleButton');
//     const $additionalContent = $('#additionalContent');

//     $toggleButton.on('click', function () {
//         if ($additionalContent.is(':visible')) {
//             $additionalContent.hide();
//             $toggleButton.html('Show more <i class="fas fa-chevron-down"></i>');
//         } else {
//             $additionalContent.show();
//             $toggleButton.html('Show less <i class="fas fa-chevron-up"></i>');
//         }
//     });
// });
   $(document).ready(function () {
        $('#toggleButton').on('click', function () {
            $('#additionalContent').slideToggle();

            if ($('#additionalContent').is(':visible')) {
                $(this).html('Show less <i class="fas fa-chevron-up"></i>');
            } else {
                $(this).html('Show more <i class="fas fa-chevron-down"></i>');
            }
        });
    });





// function handleCarousel() {
//     if (window.innerWidth < 992) {
//         // Only initialize if not already initialized
//         if (!$('.experts-carousel').hasClass('owl-loaded')) {
//             $('.experts-carousel').removeClass('d-none').addClass('d-block');
//             $('.experts-container .d-lg-block').addClass('d-none');

//             // Initialize Owl Carousel
//             $('.experts-carousel').owlCarousel({
//                 loop: true,
//                 margin: 10,
//                 nav: false,
//                 dots: true,
//                 autoplay: true,
//                 autoplayTimeout: 3000,
//                 autoplayHoverPause: true,
//                 responsive: {
//                     0: {
//                         items: 1
//                     },
//                     576: {
//                         items: 2
//                     },
//                     768: {
//                         items: 3
//                     }
//                 }
                
//             });
//         }
//     } else {
//         // Destroy carousel if it's initialized
//         if ($('.experts-carousel').hasClass('owl-loaded')) {
//             $('.experts-carousel').owlCarousel('destroy');
//         }

//         // Show regular layout, hide carousel
//         $('.experts-carousel').addClass('d-none').removeClass('d-block');
//         $('.experts-container .d-lg-block').removeClass('d-none');
//     }
// }

// // Run on page load
// $(document).ready(function () {
//     handleCarousel();

//     // Run on window resize
//     $(window).resize(function () {
//         handleCarousel();
//     });
// });



 $(document).ready(function () {
    // Run this only if screen width is less than 992px
    if ($(window).width() < 992) {
        $('.experts-carousel').owlCarousel({
            center: true,
            items: 3,
            loop: true,
            margin: 20,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            stagePadding: 0,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                600: {
                    items: 3,
                    stagePadding: 0
                },
                1000: {
                    items: 3,
                    stagePadding: 0
                }
            },
            onInitialized: function (event) {
                updateCenterItem();
            },
            onTranslated: function (event) {
                updateCenterItem();
            }
        });

        function updateCenterItem() {
            $('.expert-card').removeClass('center');
            $('.owl-item.active.center .expert-card').addClass('center');
        }

        $('.experts-carousel').on('changed.owl.carousel', function (event) {
            setTimeout(function () {
                $('.expert-card').removeClass('center');
                $('.owl-item.active.center .expert-card').addClass('center');
            }, 50);
        });
    }
});

        

const backToTopButton = document.getElementById("myBtn");

// Show/hide button based on scroll position
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
});

// Smooth scroll to top with precision
backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();

    // For browsers that don't support smooth scrolling natively
    const scrollToTop = function () {
        const currentPosition = window.pageYOffset;
        if (currentPosition > 0) {
            // Create a smooth, pixel-perfect scroll
            window.scrollTo(0, currentPosition - currentPosition / 8);
            requestAnimationFrame(scrollToTop);
        }
    };

    // Try native smooth scrolling first, fallback to custom function
    if ("scrollBehavior" in document.documentElement.style) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        requestAnimationFrame(scrollToTop);
    }
});

// Trigger scroll event on page load to check initial position
window.dispatchEvent(new Event("scroll"));

$(document).ready(function () {
    // Hide all review cards
    $('.review-box .col-lg-6').hide();

    // Show only the first 4
    $('.review-box .col-lg-6:lt(4)').fadeIn(300);

    $('#show-more').click(function () {
        $('.review-box .col-lg-6').fadeIn(400);
        $('#show-more').fadeOut(200);
        $('#show-less').fadeIn(200);
    });

    $('#show-less').click(function () {
        $('.review-box .col-lg-6').fadeOut(200, function () {
            $('.review-box .col-lg-6:lt(4)').fadeIn(300);
        });
        $('#show-less').fadeOut(200);
        $('#show-more').fadeIn(200);
    });
});

$(document).ready(function () {
    function handleResponsiveDisplay() {
        if ($(window).width() < 768) {
            $('.extra-col').hide(); // Hide extra columns on small devices
            $('#show-more').show();
            $('#show-less').hide();

            $('#show-more').click(function () {
                $('.extra-col').slideDown();
                $('#show-more').hide();
                $('#show-less').show();
            });

            $('#show-less').click(function () {
                $('.extra-col').slideUp();
                $('#show-more').show();
                $('#show-less').hide();
            });
        } else {
            // Reset everything on large screens
            $('.extra-col').show();
            $('#show-more, #show-less').hide();
        }
    }

    // Initial check
    handleResponsiveDisplay();

    // Re-check on window resize
    $(window).resize(function () {
        handleResponsiveDisplay();
    });
});

