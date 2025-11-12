document.addEventListener("DOMContentLoaded", () => {
  const artworks = {
    Building: [
      {
        id: 1,
        title: "Urban Skyline",
        artist: "ArchitectDreams",
        image: "assets/building1.jpg",
        description: "A stunning view of a modern city skyline at sunset, showcasing the beauty of urban architecture."
      },
      {
        id: 2,
        title: "Ancient Temple",
        artist: "HistoryLover",
        image: "assets/building2.jpg",
        description: "Detailed recreation of an ancient temple with intricate stone carvings and symbolic elements."
      },
      {
        id: 3,
        title: "Glass Tower",
        artist: "ModernistView",
        image: "assets/building3.jpg",
        description: "A minimalist glass tower reflecting clouds and sky, representing modern architectural principles."
      },
      {
        id: 4,
        title: "Rustic Cottage",
        artist: "CountrySide",
        image: "assets/building4.jpg",
        description: "Charming cottage nestled in a forest clearing, with traditional building techniques and natural materials."
      },
      {
        id: 5,
        title: "Futuristic Complex",
        artist: "TomorrowBuilder",
        image: "assets/building5.jpg",
        description: "Conceptual design of a sustainable futuristic building complex with integrated green spaces."
      }
    ],
    Persona: [
      {
        id: 6,
        title: "The Wanderer",
        artist: "SoulSeeker",
        image: "assets/persona1.jpg",
        description: "Portrait of a mysterious traveler with weathered features that tell stories of distant journeys."
      },
      {
        id: 7,
        title: "Digital Identity",
        artist: "CyberArtist",
        image: "assets/persona2.webp",
        description: "Abstract representation of human identity in the digital age, blending organic and technological elements."
      },
      {
        id: 8,
        title: "The Dreamer",
        artist: "MindScape",
        image: "assets/persona3.webp",
        description: "Surreal portrait capturing the essence of imagination and the boundless nature of dreams."
      },
      {
        id: 9,
        title: "Ancient Warrior",
        artist: "HistoryBrush",
        image: "assets/persona4.jpg",
        description: "Detailed portrayal of a legendary warrior with traditional armor and symbolic elements from ancient culture."
      },
      {
        id: 10,
        title: "Modern Hero",
        artist: "ContemporaryVision",
        image: "assets/persona5.jpg",
        description: "Stylized representation of everyday heroism in modern society, challenging traditional hero archetypes."
      }
    ],
    Food: [
      {
        id: 11,
        title: "Harvest Feast",
        artist: "CulinaryCanvas",
        image: "assets/food1.jpg",
        description: "Rich still life of autumn harvest with vibrant fruits, vegetables, and traditional dishes."
      },
      {
        id: 12,
        title: "Sweet Temptations",
        artist: "DessertDreamer",
        image: "assets/food2.jpg",
        description: "Mouthwatering display of artisanal pastries and chocolates with intricate decorative details."
      },
      {
        id: 13,
        title: "Spice Market",
        artist: "FlavorPalette",
        image: "assets/food3.jpg",
        description: "Colorful arrangement of exotic spices from around the world, capturing their texture and vibrancy."
      },
      {
        id: 14,
        title: "Morning Ritual",
        artist: "DailyBliss",
        image: "assets/food4.jpg",
        description: "Intimate scene of a carefully prepared breakfast setting with morning light streaming through a window."
      },
      {
        id: 15,
        title: "Culinary Heritage",
        artist: "TraditionKeeper",
        image: "assets/food5.jpg",
        description: "Celebration of cultural identity through traditional food preparation techniques and iconic dishes."
      }
    ]
  };

  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const navbarLinks = document.getElementById("navbarLinks");
  const navbar = document.querySelector(".navbar");

  function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const navbarLinks = document.getElementById("navbarLinks");

    if (!mobileMenuButton || !navbarLinks) return;

    let isMenuOpen = false;

    function toggleMenu(show) {
        isMenuOpen = show !== undefined ? show : !isMenuOpen;
        mobileMenuButton.classList.toggle("active", isMenuOpen);
        navbarLinks.classList.toggle("active", isMenuOpen);
        navbarLinks.classList.toggle("slide-in", isMenuOpen);
        
        if (!isMenuOpen) {
            const profilePopup = document.getElementById("profilePopup");
            if (profilePopup) {
                profilePopup.classList.remove("active");
            }
        }
    }

    mobileMenuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", (e) => {
        if (isMenuOpen && !mobileMenuButton.contains(e.target) && !navbarLinks.contains(e.target)) {
            toggleMenu(false);
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && isMenuOpen) {
            toggleMenu(false);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768 && isMenuOpen) {
            toggleMenu(false);
        }
    });

    const currentPage = window.location.pathname.split("/").pop() || "HomePage.html";
    const links = navbarLinks.querySelectorAll("a");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
        
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                toggleMenu(false);
            }
        });
    });
  }

  initializeMobileMenu();

  function initializeProfilePopups() {
    const profileIcon = document.getElementById("profileIcon");
    const profilePopup = document.getElementById("profilePopup");
    const followersButton = document.getElementById("followersButton");
    const recentButton = document.getElementById("recentButton");
    const commentButton = document.getElementById("commentButton");

    if (!profileIcon || !profilePopup) return;

    if (!document.getElementById("followersPopup")) {
        const popupHTML = `
            <div class="popup-content" id="followersPopup">
                <h3>Recently Followed Users</h3>
                <ul>
                    <li>@User123</li>
                    <li>@ArtistPro</li>
                    <li>@CreativeMind</li>
                    <li>@NewMember</li>
                </ul>
            </div>
        `;
        profilePopup.insertAdjacentHTML('afterend', popupHTML);
    }

    const allPopups = [
        profilePopup,
        document.getElementById("followersPopup"),
        document.getElementById("recentPopup"),
        document.getElementById("commentPopup")
    ];

    function closeAllPopups() {
        allPopups.forEach(popup => {
            if (popup) popup.classList.remove("active");
        });
    }

    profileIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        const isActive = profilePopup.classList.contains("active");
        closeAllPopups();
        if (!isActive) {
            profilePopup.classList.add("active");
        }
    });

    const buttonPopupPairs = [
        { button: followersButton, popup: document.getElementById("followersPopup") },
        { button: recentButton, popup: document.getElementById("recentPopup") },
        { button: commentButton, popup: document.getElementById("commentPopup") }
    ];

    buttonPopupPairs.forEach(({ button, popup }) => {
        if (button && popup) {
            button.addEventListener("click", (e) => {
                e.stopPropagation();
                const isActive = popup.classList.contains("active");
                
                allPopups.forEach(p => {
                    if (p !== profilePopup && p !== popup) {
                        p.classList.remove("active");
                    }
                });

                if (!isActive) {
                    if (!profilePopup.classList.contains("active")) {
                        profilePopup.classList.add("active");
                    }
                    popup.classList.add("active");
                } else {
                    popup.classList.remove("active");
                }
            });
        }
    });

    document.addEventListener("click", (e) => {
        const isClickInsidePopup = allPopups.some(popup => 
            popup && (popup.contains(e.target) || e.target === popup)
        );
        const isClickOnProfileIcon = profileIcon.contains(e.target);
        const isClickOnButton = buttonPopupPairs.some(({ button }) => 
            button && button.contains(e.target)
        );

        if (!isClickInsidePopup && !isClickOnProfileIcon && !isClickOnButton) {
            closeAllPopups();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAllPopups();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 480) {
            allPopups.forEach(popup => {
                if (popup && popup.classList.contains("active")) {
                    const rect = popup.getBoundingClientRect();
                    if (rect.right > window.innerWidth) {
                        popup.style.right = "0";
                    }
                }
            });
        }
    });
  }

  initializeProfilePopups();

  if (document.getElementById("mainSlides")) {
    initializeMainSlideshow();
  }

  if (document.getElementById("miniSlides")) {
    initializeMiniSlideshow();
  }

  const tagButtons = document.querySelectorAll(".tag-button");
  const galleryCategories = document.querySelectorAll(".gallery-category");
  const galleryPlaceholder = document.getElementById("galleryPlaceholder");
  const artworkModal = document.getElementById("artworkModal");
  const closeModal = document.getElementById("closeModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalArtist = document.getElementById("modalArtist");
  const modalDescription = document.getElementById("modalDescription");
  const modalCategory = document.getElementById("modalCategory");
  const modalLikes = document.getElementById("modalLikes");

  function populateGalleryGrid() {
    Object.keys(artworks).forEach(category => {
      const gridElement = document.getElementById(`${category.toLowerCase()}Grid`);
      if (!gridElement) return;

      gridElement.innerHTML = '';

      artworks[category].forEach(artwork => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.id = artwork.id;
        galleryItem.dataset.category = category;

        galleryItem.innerHTML = `
          <img src="${artwork.image}" alt="${artwork.title}" class="gallery-image">
          <div class="gallery-item-info">
            <h3 class="gallery-item-title">${artwork.title}</h3>
            <p class="gallery-item-artist">by ${artwork.artist}</p>
          </div>
        `;

        galleryItem.addEventListener('click', () => {
          openArtworkModal(artwork, category);
        });

        gridElement.appendChild(galleryItem);
      });
    });
  }

  if (document.querySelector('.gallery-grid')) {
    populateGalleryGrid();
  }

  if (tagButtons.length > 0 && galleryCategories.length > 0) {
    tagButtons.forEach((button) => {
      button.addEventListener("click", function() {
        const category = this.getAttribute("data-category");
        
        tagButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        if (galleryPlaceholder) {
          galleryPlaceholder.style.display = "none";
        }

        galleryCategories.forEach((cat) => {
          cat.classList.remove("active");
        });

        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
          selectedCategory.classList.add("active");
        }
      });
    });
  }

  function openArtworkModal(artwork, category) {
    if (!artworkModal) return;
    
    modalImage.src = artwork.image;
    modalImage.alt = artwork.title;
    modalTitle.textContent = artwork.title;
    modalArtist.textContent = `Artist: ${artwork.artist}`;
    modalDescription.textContent = artwork.description;
    modalCategory.textContent = `#${category}`;
    modalLikes.textContent = Math.floor(Math.random() * 1000) + 100;
    
    artworkModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      artworkModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (artworkModal) {
    artworkModal.addEventListener('click', (e) => {
      if (e.target === artworkModal) {
        artworkModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artworkModal && artworkModal.classList.contains('active')) {
      artworkModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  const submissionForm = document.getElementById("submissionForm");
  if (submissionForm) {
    initializeFormValidation();
  }

  function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;
    const navbarLinks = document.getElementById("navbarLinks");
    const mobileMenuButton = document.getElementById("mobileMenuButton");

    if (mobileMenuButton && navbarLinks) {
      mobileMenuButton.addEventListener("click", () => {
        mobileMenuButton.classList.toggle("active");
        navbarLinks.classList.toggle("active");
        navbarLinks.classList.toggle("slide-in");
      });
    }

    if (isMobile) {
      const galleryItems = document.querySelectorAll('.gallery-item');
      galleryItems.forEach(item => {
        item.addEventListener('touchstart', () => {
          item.classList.add('hover');
        });
        item.addEventListener('touchend', () => {
          item.classList.remove('hover');
        });
      });
    }

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('fade-in');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        if (navbarLinks) navbarLinks.classList.remove('active', 'slide-in');
        if (mobileMenuButton) mobileMenuButton.classList.remove('active');
      }
    });
  }

  handleResponsiveLayout();
});

function initializeMainSlideshow() {
  const mainSlides = document.getElementById("mainSlides");
  const mainDots = document.getElementById("mainDots");

  const slides = [
    { image: "assets/food1.jpg", caption: "Shattered-Earth" },
    { image: "assets/food2.jpg", caption: "elliez1" },
    { image: "assets/food3.jpg", caption: "onisu" },
    { image: "assets/food4.jpg", caption: "Nightblue-art" },
    { image: "assets/food5.jpg", caption: "midjourneyartworks" },
  ];

  slides.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = `slide ${index === 0 ? "active" : ""}`;

    const imageElement = document.createElement("img");
    imageElement.className = "slide-image";
    imageElement.src = slide.image;
    imageElement.alt = slide.caption;

    const captionElement = document.createElement("div");
    captionElement.className = "slide-caption";
    captionElement.innerHTML = `<h3 class="outlined-text">${slide.caption}</h3>`;

    slideElement.appendChild(imageElement);
    slideElement.appendChild(captionElement);
    mainSlides.appendChild(slideElement);

    const dot = document.createElement("span");
    dot.className = `dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(index));
    mainDots.appendChild(dot);
  });

  let currentSlide = 0;
  const slideElements = document.querySelectorAll(".slide");
  const dotElements = document.querySelectorAll(".dot");

  function goToSlide(index) {
    slideElements[currentSlide].classList.remove("active");
    dotElements[currentSlide].classList.remove("active");

    currentSlide = index;

    slideElements[currentSlide].classList.add("active");
    dotElements[currentSlide].classList.add("active");
  }

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }, 3000);
}

function initializeMiniSlideshow() {
  const miniSlides = document.getElementById("miniSlides");
  const miniDots = document.getElementById("miniDots");

  const slides = [
    { image: "assets/SART1.jpg", caption: "Vincent van Gogh, 1889 ❤️10.9k" },
    { image: "assets/SART2.jpg", caption: "Leonardo da Vinci, 1498 ❤️20.1k" },
    { image: "assets/SART3.jpg", caption: "Hieronymus Bosch, 1515 ❤️30.1k" },
    { image: "assets/SART4.jpg", caption: "Raphael, 1509-1511 ❤️20.8k" },
    { image: "assets/SART5.jpg", caption: "Georges Seurat, 1886 ❤️26.3k" },
  ];

  slides.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = `mini-slide ${index === 0 ? "active" : ""}`;

    const imageElement = document.createElement("img");
    imageElement.className = "mini-slide-image";
    imageElement.src = slide.image;
    imageElement.alt = slide.caption;

    const captionElement = document.createElement("div");
    captionElement.className = "mini-slide-caption";
    captionElement.innerHTML = `<h3 class="outlined-text">${slide.caption}</h3>`;

    slideElement.appendChild(imageElement);
    slideElement.appendChild(captionElement);
    miniSlides.appendChild(slideElement);

    const dot = document.createElement("span");
    dot.className = `mini-dot ${index === 0 ? "active" : ""}`;
    dot.addEventListener("click", () => goToSlide(index));
    miniDots.appendChild(dot);
  });

  let currentSlide = 0;
  const slideElements = document.querySelectorAll(".mini-slide");
  const dotElements = document.querySelectorAll(".mini-dot");

  function goToSlide(index) {
    slideElements[currentSlide].classList.remove("active");
    dotElements[currentSlide].classList.remove("active");

    currentSlide = index;

    slideElements[currentSlide].classList.add("active");
    dotElements[currentSlide].classList.add("active");
  }

  setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    goToSlide(nextSlide);
  }, 3000);
}

function initializeTagsInput() {
    const tagSelect = document.getElementById("tagSelect");
    const tagsContainer = document.getElementById("tagsContainer");
    const tagsHiddenInput = document.getElementById("tags");
    const tagsError = document.getElementById("tagsError");

\    if (!tagSelect || !tagsContainer || !tagsHiddenInput) return null;

    const selectedTags = new Set();

    function updateTags() {
        tagsContainer.innerHTML = "";
        selectedTags.forEach(tag => {
            const tagElement = document.createElement("span");
            tagElement.className = "tag";
            tagElement.innerHTML = `${tag} <span class="tag-close" data-tag="${tag}">×</span>`;
            tagsContainer.appendChild(tagElement);
        });

        tagsHiddenInput.value = Array.from(selectedTags).join(",");
        
        tagSelect.value = "";
        
        return validateTags();
    }

    function validateTags() {
        if (selectedTags.size > 5) {
            if (tagsError) {
                tagsError.textContent = "Maximum 5 tags allowed";
                tagsError.style.display = "block";
            }
            return false;
        } else if (selectedTags.size === 0) {
            if (tagsError) {
                tagsError.textContent = "Please select at least one tag";
                tagsError.style.display = "block";
            }
            return false;
        } else {
            if (tagsError) {
                tagsError.style.display = "none";
            }
            return true;
        }
    }

    tagSelect.addEventListener("change", function() {
        const selectedTag = this.value;
        if (selectedTag && !selectedTags.has(selectedTag)) {
            if (selectedTags.size >= 5) {
                tagsError.textContent = "Maximum 5 tags allowed";
                tagsError.style.display = "block";
                this.value = "";
                return;
            }
            selectedTags.add(selectedTag);
            updateTags();
            checkFormValidity();
        }
    });

    tagsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("tag-close")) {
            const tagToRemove = e.target.getAttribute("data-tag");
            selectedTags.delete(tagToRemove);
            updateTags();
            checkFormValidity();
        }
    });

    return {
        validate: validateTags,
        getTags: () => Array.from(selectedTags),
        reset: () => {
            selectedTags.clear();
            updateTags();
        }
    };
}

function initializeCharacterCounter() {
  const descriptionInput = document.getElementById("description");
  const charCount = document.getElementById("charCount");

  if (!descriptionInput || !charCount) return;

  descriptionInput.addEventListener("input", function () {
    const count = this.value.length;
    charCount.textContent = count;

    if (count > 500) {
      charCount.style.color = "#ff0000";
      this.value = this.value.substring(0, 500);
      charCount.textContent = "500";
    } else {
      charCount.style.color = count > 450 ? "#ff9900" : "#666";
    }
  });
}

function validateEmail(email) {
  if (!email) return false;
  
  const atIndex = email.indexOf("@");
  const lastAtIndex = email.lastIndexOf("@");
  if (atIndex === -1 || atIndex !== lastAtIndex) return false;
  if (atIndex === 0 || atIndex === email.length - 1) return false;
  
  const localPart = email.substring(0, atIndex);
  const domain = email.substring(atIndex + 1);
  
  if (localPart.length === 0 || localPart.length > 64) return false;
  if (localPart.startsWith(".") || localPart.endsWith(".")) return false;
  if (localPart.includes("..")) return false;
  
  if (domain.length === 0 || domain.length > 255) return false;
  if (domain.startsWith(".") || domain.endsWith(".")) return false;
  if (domain.includes("..")) return false;
  
  const dotIndex = domain.indexOf(".");
  if (dotIndex === -1) return false;
  
  const domainParts = domain.split(".");
  for (let part of domainParts) {
    if (part.length === 0 || part.length > 63) return false;
    for (let char of part) {
      const code = char.charCodeAt(0);
      const isLetter = (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
      const isNumber = code >= 48 && code <= 57;
      const isHyphen = code === 45;
      if (!isLetter && !isNumber && !isHyphen) return false;
    }
    if (part.startsWith("-") || part.endsWith("-")) return false;
  }
  
  return true;
}

function validateTitle(title) {
  return title.length >= 3 && title.length <= 50;
}

function validateDescription(description) {
  return description.length >= 20 && description.length <= 500;
}

function validateFileUpload(file) {
  if (!file) return false;
  
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  if (!allowedTypes.includes(file.type)) return false;
  
  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) return false;
  
  return true;
}

function validateArtType(artTypeRadios) {
  const isSelected = Array.from(artTypeRadios).some(radio => radio.checked);
  return isSelected;
}

function initializeFormValidation() {
    const form = document.getElementById("submissionForm");
    if (!form) return;

    // Form elements
    const formElements = {
        email: document.getElementById("email"),
        title: document.getElementById("title"),
        description: document.getElementById("description"),
        fileUpload: document.getElementById("fileUpload"),
        submitButton: document.getElementById("submitButton"),
        successMessage: document.getElementById("successMessage"),
        artTypeRadios: document.getElementsByName("artType")
    };

    // Error elements
    const errorElements = {
        email: document.getElementById("emailError"),
        title: document.getElementById("titleError"),
        description: document.getElementById("descriptionError"),
        file: document.getElementById("fileError"),
        artType: document.getElementById("artTypeError")
    };

    const previewElements = {
        fileInfo: document.getElementById("fileInfo"),
        filePreview: document.getElementById("filePreview")
    };

    const tagsInput = initializeTagsInput();
    initializeCharacterCounter();

    function updateFieldValidation(field, errorElement, isValid, errorMessage) {
        if (field) {
            field.classList.toggle("error", !isValid);
        }
        
        if (errorElement) {
            if (!isValid) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = "block";
            } else {
                errorElement.textContent = "";
                errorElement.style.display = "none";
            }
        }
    }

    function validateEmailField() {
        const email = formElements.email?.value.trim() || '';
        const isValid = validateEmail(email);
        console.log('Email validation:', { email, isValid });

        updateFieldValidation(
            formElements.email,
            errorElements.email,
            isValid,
            "Please enter a valid email address"
        );

        return isValid;
    }

    function validateTitleField() {
        const title = formElements.title?.value.trim() || '';
        const isValid = validateTitle(title);
        console.log('Title validation:', { title, isValid });

        updateFieldValidation(
            formElements.title,
            errorElements.title,
            isValid,
            "Title must be between 3 and 50 characters"
        );

        return isValid;
    }

    function validateDescriptionField() {
        const description = formElements.description?.value.trim() || '';
        const isValid = validateDescription(description);
        console.log('Description validation:', { description, isValid });

        updateFieldValidation(
            formElements.description,
            errorElements.description,
            isValid,
            "Description must be between 20 and 500 characters"
        );

        return isValid;
    }

    function validateFileField() {
        const file = formElements.fileUpload?.files[0];
        const isValid = validateFileUpload(file);
        console.log('File validation:', { fileName: file?.name, isValid });

        let errorMessage = "Please select a file to upload";
        if (file) {
            if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'].includes(file.type)) {
                errorMessage = "Please upload a valid image file (JPEG, PNG, GIF, WebP)";
            } else if (file.size > 10 * 1024 * 1024) {
                errorMessage = "File size must be less than 10MB";
            }
        }

        updateFieldValidation(
            formElements.fileUpload,
            errorElements.file,
            isValid,
            errorMessage
        );

        return isValid;
    }

    function validateArtTypeField() {
        const isValid = Array.from(formElements.artTypeRadios).some(radio => radio.checked);
        console.log('Art type validation:', { isValid });

        updateFieldValidation(
            null,
            errorElements.artType,
            isValid,
            "Please select whether your art is AI-generated or not"
        );

        return isValid;
    }

    function checkFormValidity() {
        const validationResults = {
            email: validateEmailField(),
            title: validateTitleField(),
            description: validateDescriptionField(),
            tags: tagsInput ? tagsInput.validate() : true,
            file: validateFileField(),
            artType: validateArtTypeField()
        };

        console.log('All validation results:', validationResults);

        const isValid = Object.values(validationResults).every(Boolean);
        console.log('Final form validity:', isValid);

        if (formElements.submitButton) {
            formElements.submitButton.disabled = !isValid;
            formElements.submitButton.classList.toggle("disabled", !isValid);
            console.log('Submit button state:', { disabled: formElements.submitButton.disabled });
        }

        return isValid;
    }

    if (formElements.email) {
        formElements.email.addEventListener("input", () => checkFormValidity());
        formElements.email.addEventListener("blur", () => checkFormValidity());
    }

    if (formElements.title) {
        formElements.title.addEventListener("input", () => checkFormValidity());
        formElements.title.addEventListener("blur", () => checkFormValidity());
    }

    if (formElements.description) {
        formElements.description.addEventListener("input", () => checkFormValidity());
        formElements.description.addEventListener("blur", () => checkFormValidity());
    }

    if (formElements.fileUpload) {
        formElements.fileUpload.addEventListener("change", () => {
            handleFileUpload(formElements.fileUpload, previewElements.fileInfo, previewElements.filePreview);
            checkFormValidity();
        });
    }

    formElements.artTypeRadios.forEach(radio => {
        radio.addEventListener("change", () => checkFormValidity());
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (checkFormValidity()) {
            const selectedArtType = Array.from(formElements.artTypeRadios).find(radio => radio.checked)?.value;
            
            const formData = {
                email: formElements.email?.value || '',
                title: formElements.title?.value || '',
                description: formElements.description?.value || '',
                tags: tagsInput ? tagsInput.getTags() : [],
                file: formElements.fileUpload?.files[0]?.name || '',
                artType: selectedArtType
            };

            console.log("Form submitted successfully", formData);

            if (formElements.successMessage) {
                formElements.successMessage.style.display = "block";
            }

            setTimeout(() => {
                form.reset();
                if (previewElements.fileInfo) previewElements.fileInfo.textContent = "";
                if (previewElements.filePreview) previewElements.filePreview.style.display = "none";
                if (formElements.successMessage) formElements.successMessage.style.display = "none";
                if (tagsInput) tagsInput.reset();
                Object.values(errorElements).forEach(element => {
                    if (element) element.style.display = "none";
                });
                checkFormValidity();
            }, 3000);
        }
    });

    checkFormValidity();
}

function handleFileUpload(fileInput, fileInfo, filePreview) {
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        if (fileInfo) fileInfo.textContent = "";
        if (filePreview) filePreview.style.display = "none";
        return;
    }

    const file = fileInput.files[0];

    if (validateFileUpload(file)) {
        if (fileInfo) {
            fileInfo.textContent = `File selected: ${file.name} (${formatFileSize(file.size)})`;
        }

        if (filePreview) {
            const previewUrl = URL.createObjectURL(file);
            filePreview.href = previewUrl;
            filePreview.style.display = "inline-block";
            filePreview.textContent = "Preview Image";
        }
    } else {
        if (fileInfo) fileInfo.textContent = "";
        if (filePreview) filePreview.style.display = "none";
    }
}

function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + " bytes";
    if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / 1048576).toFixed(2) + " MB";
}
