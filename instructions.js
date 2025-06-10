
        document.addEventListener("DOMContentLoaded", () => {
            // Initialize elements
            const fileInput = document.getElementById("fileInput");
            const browseBtn = document.getElementById("browseBtn");
            const fileUploadArea = document.getElementById("fileUploadArea");
            const decreaseBtn = document.getElementById("decreaseBtn");
            const increaseBtn = document.getElementById("increaseBtn");
            const sourcesCount = document.getElementById("sourcesCount");
            const promoCodeBtn = document.getElementById("promoCodeBtn");
            const promoCodeContainer = document.getElementById("promoCodeContainer");
            const goBackBtn = document.getElementById("goBackBtn");
            const nextStepBtn = document.getElementById("nextStepBtn");
            const instructionsText = document.getElementById("instructionsText");

            // Load summary data from localStorage or use defaults
            function loadSummaryData() {
                const summaryData = JSON.parse(localStorage.getItem('orderSummary') || '{}');
                
                document.getElementById('summaryWorkType').textContent = summaryData.workType || 'Essay';
                document.getElementById('summaryAcademicLevel').textContent = summaryData.academicLevel || 'College';
                document.getElementById('summaryPageCount').textContent = summaryData.pageCount || '1 page / 275 words';
                document.getElementById('summaryDeadline').textContent = summaryData.deadline || '20 days / Mon, Jun 30';
                document.getElementById('totalPrice').textContent = summaryData.totalPrice || '$7.38';
            }

            // File upload functionality
            browseBtn.addEventListener("click", () => {
                fileInput.click();
            });

            fileInput.addEventListener("change", handleFileSelect);

            // Drag and drop functionality
            fileUploadArea.addEventListener("dragover", (e) => {
                e.preventDefault();
                fileUploadArea.classList.add("dragover");
            });

            fileUploadArea.addEventListener("dragleave", () => {
                fileUploadArea.classList.remove("dragover");
            });

            fileUploadArea.addEventListener("drop", (e) => {
                e.preventDefault();
                fileUploadArea.classList.remove("dragover");
                const files = e.dataTransfer.files;
                handleFiles(files);
            });

            function handleFileSelect(e) {
                const files = e.target.files;
                handleFiles(files);
            }

            function handleFiles(files) {
                if (files.length > 0) {
                    const fileNames = Array.from(files).map(file => file.name).join(", ");
                    fileUploadArea.innerHTML = `
                        <div class="text-success">
                            <i class="bi bi-check-circle me-2"></i>
                            Files selected: ${fileNames}
                        </div>
                        <button class="browse-btn mt-2" id="browseMoreBtn">Browse more files</button>
                    `;
                    
                    // Re-attach event listener for browse more button
                    document.getElementById("browseMoreBtn").addEventListener("click", () => {
                        fileInput.click();
                    });
                }
            }

            // Sources counter functionality
            decreaseBtn.addEventListener("click", () => {
                const currentValue = parseInt(sourcesCount.value);
                if (currentValue > 0) {
                    sourcesCount.value = currentValue - 1;
                }
                updateCounterButtons();
            });

            increaseBtn.addEventListener("click", () => {
                const currentValue = parseInt(sourcesCount.value);
                if (currentValue < 50) {
                    sourcesCount.value = currentValue + 1;
                }
                updateCounterButtons();
            });

            function updateCounterButtons() {
                const value = parseInt(sourcesCount.value);
                decreaseBtn.disabled = value <= 0;
                increaseBtn.disabled = value >= 50;
            }

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

            // Navigation buttons
            goBackBtn.addEventListener("click", () => {
                // Save current form data
                saveFormData();
                // Navigate back to overview page
                window.location.href = 'order.html';
            });

            nextStepBtn.addEventListener("click", () => {
                // Validate form
                if (!instructionsText.value.trim()) {
                    alert("Please provide instructions for your task.");
                    instructionsText.focus();
                    return;
                }

                // Save form data
                saveFormData();
                
                // Navigate to checkout page
                window.location.href = 'checkout.html';
            });

            function saveFormData() {
                const formData = {
                    instructions: instructionsText.value,
                    referencingStyle: document.getElementById('referencingStyle').value,
                    sourcesCount: sourcesCount.value,
                    files: fileInput.files.length > 0 ? Array.from(fileInput.files).map(f => f.name) : []
                };
                
                localStorage.setItem('instructionsData', JSON.stringify(formData));
            }

            // Load existing form data if available
            function loadFormData() {
                const formData = JSON.parse(localStorage.getItem('instructionsData') || '{}');
                
                if (formData.instructions) {
                    instructionsText.value = formData.instructions;
                }
                
                if (formData.referencingStyle) {
                    document.getElementById('referencingStyle').value = formData.referencingStyle;
                }
                
                if (formData.sourcesCount) {
                    sourcesCount.value = formData.sourcesCount;
                }
            }

            // Info section toggles
            const infoHeaders = document.querySelectorAll(".info-header");
            infoHeaders.forEach((header) => {
                header.addEventListener("click", function() {
                    const icon = this.querySelector("i");
                    const target = this.getAttribute("data-bs-target");
                    const collapse = document.querySelector(target);
                    
                    if (collapse.classList.contains("show")) {
                        icon.classList.remove("bi-chevron-up");
                        icon.classList.add("bi-chevron-down");
                    } else {
                        icon.classList.remove("bi-chevron-down");
                        icon.classList.add("bi-chevron-up");
                    }
                });
            });

            // Initialize page
            loadSummaryData();
            loadFormData();
            updateCounterButtons();
        });
