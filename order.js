document.addEventListener("DOMContentLoaded", () => {
  // Initialize variables and elements
  const workTypeButtons = document.querySelectorAll("#workTypeButtons .work-type-btn")
  const workTypeSelect = document.getElementById("workTypeSelect")
  const subjectSelect = document.getElementById("subjectSelect")
  const subjectTags = document.querySelectorAll(".subject-tag")
  const academicLevelSelect = document.getElementById("academicLevelSelect")
  const pageCountSelect = document.getElementById("pageCountSelect")
  const deadlineSelect = document.getElementById("deadlineSelect")
  const nextStepBtn = document.getElementById("nextStepBtn")
  const promoCodeBtn = document.getElementById("promoCodeBtn")
  const promoCodeContainer = document.getElementById("promoCodeContainer")
  const subjectError = document.getElementById("subjectError")
  const backToTopBtn = document.getElementById("myBtn")

  // Summary elements
  const summaryWorkType = document.getElementById("summaryWorkType")
  const summarySubject = document.getElementById("summarySubject")
  const summaryAcademicLevel = document.getElementById("summaryAcademicLevel")
  const summaryPageCount = document.getElementById("summaryPageCount")
  const summaryDeadline = document.getElementById("summaryDeadline")
  const totalPrice = document.getElementById("totalPrice")

  // Price calculation variables
  const basePrice = 7.38
  const priceMultipliers = {
    "High School": 0.8,
    College: 1.0,
    Undergraduate: 1.2,
    "Master's": 1.5,
    PhD: 2.0,

    "20 days / Tue, Jun 10": 1.0,
    "15 days / Thu, Jun 5": 1.2,
    "10 days / Sat, May 31": 1.5,
    "7 days / Wed, May 28": 1.8,
    "3 days / Sat, May 24": 2.2,
    "24 hours / Wed, May 22": 3.0,

    "1 page / 275 words": 1.0,
    "2 pages / 550 words": 2.0,
    "3 pages / 825 words": 3.0,
    "4 pages / 1100 words": 4.0,
    "5 pages / 1375 words": 5.0,
  }

  // Function to calculate and update price
  function updatePrice() {
    let price = basePrice

    // Apply academic level multiplier
    price *= priceMultipliers[academicLevelSelect.value] || 1.0

    // Apply deadline multiplier
    price *= priceMultipliers[deadlineSelect.value] || 1.0

    // Apply page count multiplier
    price *= priceMultipliers[pageCountSelect.value] || 1.0

    // Update the price display
    totalPrice.textContent = "$" + price.toFixed(2)
  }

  // Function to update summary
  function updateSummary() {
    summaryWorkType.textContent = workTypeSelect.value
    summaryAcademicLevel.textContent = academicLevelSelect.value
    summaryPageCount.textContent = pageCountSelect.value
    summaryDeadline.textContent = deadlineSelect.value

    if (subjectSelect.value) {
      summarySubject.textContent = subjectSelect.value
      subjectError.style.display = "none"
    } else {
      summarySubject.textContent = "Not selected"
    }

    updatePrice()
  }

  // Work type buttons functionality
  workTypeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      workTypeButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Update select value
      const workType = this.getAttribute("data-type")
      workTypeSelect.value = workType

      // Update summary
      summaryWorkType.textContent = workType
    })
  })

  // Work type select change
  workTypeSelect.addEventListener("change", function () {
    const selectedType = this.value

    // Update buttons
    workTypeButtons.forEach((btn) => {
      if (btn.getAttribute("data-type") === selectedType) {
        btn.classList.add("active")
      } else {
        btn.classList.remove("active")
      }
    })

    // Update summary
    summaryWorkType.textContent = selectedType
  })

  // Subject tags functionality
  subjectTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      const subject = this.getAttribute("data-subject")
      subjectSelect.value = subject
      summarySubject.textContent = subject
      subjectError.style.display = "none"

      // Update active state
      subjectTags.forEach((t) => t.classList.remove("active"))
      this.classList.add("active")
    })
  })

  // Subject select change
  subjectSelect.addEventListener("change", function () {
    if (this.value) {
      summarySubject.textContent = this.value
      subjectError.style.display = "none"

      // Update active state of tags
      const selectedSubject = this.value
      subjectTags.forEach((tag) => {
        if (tag.getAttribute("data-subject") === selectedSubject) {
          tag.classList.add("active")
        } else {
          tag.classList.remove("active")
        }
      })
    } else {
      summarySubject.textContent = "Not selected"
    }
  })

  // Academic level select change
  academicLevelSelect.addEventListener("change", function () {
    summaryAcademicLevel.textContent = this.value
    updatePrice()
  })

  // Page count select change
  pageCountSelect.addEventListener("change", function () {
    summaryPageCount.textContent = this.value
    updatePrice()
  })

  // Deadline select change
  deadlineSelect.addEventListener("change", function () {
    summaryDeadline.textContent = this.value
    updatePrice()
  })

  // Promo code button toggle
  promoCodeBtn.addEventListener("click", function () {
    promoCodeContainer.classList.toggle("d-none")
    const icon = this.querySelector("i")
    if (promoCodeContainer.classList.contains("d-none")) {
      icon.classList.remove("bi-chevron-up")
      icon.classList.add("bi-chevron-down")
    } else {
      icon.classList.remove("bi-chevron-down")
      icon.classList.add("bi-chevron-up")
    }
  })

  // Next step button click
  nextStepBtn.addEventListener("click", () => {
    // Validate subject
    if (!subjectSelect.value) {
      subjectError.style.display = "block"
      subjectSelect.focus()
      return
    }

    // Proceed to next step (for demo purposes, just show an alert)
    alert("Proceeding to step 2: Instructions")

    // In a real implementation, you would navigate to the next page or show the next step
    // window.location.href = 'instructions.html';
  })

  // Info section toggles
  const infoHeaders = document.querySelectorAll(".info-header")
  infoHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const icon = this.querySelector("i")
      const isCollapsed = this.getAttribute("aria-expanded") === "false"

      if (isCollapsed) {
        icon.classList.remove("bi-chevron-down")
        icon.classList.add("bi-chevron-up")
      } else {
        icon.classList.remove("bi-chevron-up")
        icon.classList.add("bi-chevron-down")
      }
    })
  })

  // Back to top button functionality
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Initialize the summary on page load
  updateSummary()
})
