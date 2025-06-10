
        document.addEventListener("DOMContentLoaded", () => {
            // Initialize elements
            const writerCards = document.querySelectorAll(".writer-card");
            const writerRadios = document.querySelectorAll('input[name="writerLevel"]');
            const paymentMethods = document.querySelectorAll(".payment-method");
            const paymentRadios = document.querySelectorAll('input[name="paymentMethod"]');
            const promoCodeBtn = document.getElementById("promoCodeBtn");
            const promoCodeContainer = document.getElementById("promoCodeContainer");
            const goBackBtn = document.getElementById("goBackBtn");
            const checkoutBtn = document.getElementById("checkoutBtn");
            const showMoreBtn = document.getElementById("showMoreBtn");
            const totalPriceElement = document.getElementById("totalPrice");

            let basePrice = 7.38;
            let currentTotal = basePrice;

            // Load summary data from localStorage
            function loadSummaryData() {
                const summaryData = JSON.parse(localStorage.getItem('orderSummary') || '{}');
                
                document.getElementById('summaryWorkType').textContent = summaryData.workType || 'Essay';
                document.getElementById('summaryAcademicLevel').textContent = summaryData.academicLevel || 'College';
                document.getElementById('summaryPageCount').textContent = summaryData.pageCount || '1 page / 275 words';
                document.getElementById('summaryDeadline').textContent = summaryData.deadline || '20 days / Mon, Jun 30';
                
                if (summaryData.totalPrice) {
                    basePrice = parseFloat(summaryData.totalPrice.replace('$', ''));
                    currentTotal = basePrice;
                    updateTotalPrice();
                }
            }

            // Writer level selection
            writerCards.forEach(card => {
                card.addEventListener("click", () => {
                    // Remove selected class from all cards
                    writerCards.forEach(c => c.classList.remove("selected"));
                    
                    // Add selected class to clicked card
                    card.classList.add("selected");
                    
                    // Check the radio button
                    const radio = card.querySelector('input[type="radio"]');
                    radio.checked = true;
                    
                    // Update price based on selection
                    updateWriterLevelPrice(radio.value);
                });
            });

            // Writer level radio change
            writerRadios.forEach(radio => {
                radio.addEventListener("change", () => {
                    updateWriterLevelPrice(radio.value);
                });
            });

            function updateWriterLevelPrice(level) {
                let additionalCost = 0;
                
                switch(level) {
                    case 'top':
                        additionalCost = 2.21;
                        break;
                    case 'premium':
                        additionalCost = 4.43;
                        break;
                    default:
                        additionalCost = 0;
                }
                
                currentTotal = basePrice + additionalCost;
                updateAdditionalServices();
            }

            // Payment method selection
            paymentMethods.forEach(method => {
                method.addEventListener("click", () => {
                    // Remove selected class from all methods
                    paymentMethods.forEach(m => m.classList.remove("selected"));
                    
                    // Add selected class to clicked method
                    method.classList.add("selected");
                    
                    // Check the radio button
                    const radio = method.querySelector('input[type="radio"]');
                    radio.checked = true;
                });
            });

            // Additional services
            const serviceCheckboxes = document.querySelectorAll('.service-item input[type="checkbox"]');
            serviceCheckboxes.forEach(checkbox => {
                checkbox.addEventListener("change", updateAdditionalServices);
            });

            function updateAdditionalServices() {
                let additionalCost = 0;
                
                // Get writer level cost
                const selectedWriter = document.querySelector('input[name="writerLevel"]:checked').value;
                switch(selectedWriter) {
                    case 'top':
                        additionalCost += 2.21;
                        break;
                    case 'premium':
                        additionalCost += 4.43;
                        break;
                }
                
                // Add service costs
                if (document.getElementById('plagiarismReport').checked) additionalCost += 14.99;
                if (document.getElementById('highPriority').checked) additionalCost += 9.99;
                if (document.getElementById('copyOfSources').checked) additionalCost += 1.11;
                if (document.getElementById('textUpdates').checked) additionalCost += 1.99;
                
                currentTotal = basePrice + additionalCost;
                updateTotalPrice();
            }

            function updateTotalPrice() {
                totalPriceElement.textContent = `$${currentTotal.toFixed(2)}`;
            }

            // Show more options
            showMoreBtn.addEventListener("click", () => {
                // This would typically show more service options
                alert("More additional options would be displayed here");
            });

            // Promo code toggle
            promoCodeBtn.addEventListener("click", () => {
                promoCodeContainer.classList.toggle("d-none");
                const icon = promoCodeBtn.querySelector("i");
                if (promoCodeContainer.classList.contains("d-none")) {
                    icon.classList.remove("bi-chevron-up");
                    icon.classList.add("bi-chevron-down");
                } else {
                    icon.classList.remove("bi-chevron-down");
                    icon.classList.add("bi-chevron-up");
                }
            });

            // Navigation
            goBackBtn.addEventListener("click", () => {
                saveCheckoutData();
                window.location.href = 'instructions.html';
            });

            // Checkout process
            checkoutBtn.addEventListener("click", () => {
                // Validate required fields
                const email = document.getElementById('emailInput').value;
                const agreeTerms = document.getElementById('agreeTerms').checked;
                
                if (!email) {
                    alert("Please enter your email address.");
                    document.getElementById('emailInput').focus();
                    return;
                }
                
                if (!agreeTerms) {
                    alert("Please agree to the Terms and Conditions and Privacy Policy.");
                    document.getElementById('agreeTerms').focus();
                    return;
                }
                
                // Save all order data
                saveCheckoutData();
                
                // Process checkout (in real implementation, this would integrate with payment processor)
                alert(`Order submitted successfully! Total: $${currentTotal.toFixed(2)}`);
                
                // Redirect to success page or reset form
                // window.location.href = 'success.html';
            });

            function saveCheckoutData() {
                const checkoutData = {
                    writerLevel: document.querySelector('input[name="writerLevel"]:checked').value,
                    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
                    email: document.getElementById('emailInput').value,
                    phone: document.getElementById('phoneInput').value,
                    countryCode: document.getElementById('countryCode').value,
                    services: {
                        plagiarismReport: document.getElementById('plagiarismReport').checked,
                        highPriority: document.getElementById('highPriority').checked,
                        copyOfSources: document.getElementById('copyOfSources').checked,
                        simpleLanguage: document.getElementById('simpleLanguage').checked,
                        textUpdates: document.getElementById('textUpdates').checked
                    },
                    totalAmount: currentTotal,
                    agreeTerms: document.getElementById('agreeTerms').checked
                };
                
                localStorage.setItem('checkoutData', JSON.stringify(checkoutData));
            }

            // Load existing checkout data if available
            function loadCheckoutData() {
                const checkoutData = JSON.parse(localStorage.getItem('checkoutData') || '{}');
                
                if (checkoutData.email) {
                    document.getElementById('emailInput').value = checkoutData.email;
                }
                
                if (checkoutData.phone) {
                    document.getElementById('phoneInput').value = checkoutData.phone;
                }
                
                if (checkoutData.countryCode) {
                    document.getElementById('countryCode').value = checkoutData.countryCode;
                }
                
                if (checkoutData.services) {
                    Object.keys(checkoutData.services).forEach(service => {
                        const checkbox = document.getElementById(service);
                        if (checkbox) {
                            checkbox.checked = checkoutData.services[service];
                        }
                    });
                }
                
                if (checkoutData.writerLevel) {
                    const writerRadio = document.querySelector(`input[name="writerLevel"][value="${checkoutData.writerLevel}"]`);
                    if (writerRadio) {
                        writerRadio.checked = true;
                        writerRadio.closest('.writer-card').classList.add('selected');
                    }
                }
                
                if (checkoutData.paymentMethod) {
                    const paymentRadio = document.querySelector(`input[name="paymentMethod"][value="${checkoutData.paymentMethod}"]`);
                    if (paymentRadio) {
                        paymentRadio.checked = true;
                        paymentRadio.closest('.payment-method').classList.add('selected');
                    }
                }
            }

            // Initialize page
            loadSummaryData();
            loadCheckoutData();
            updateAdditionalServices();
        });
    