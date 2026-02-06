import './style.css';

// Sample data for cards
const cardsData = [
    { id: 1, title: 'Laptop', description: 'High-performance laptop', category: 'electronics', price: '$999' },
    { id: 2, title: 'T-Shirt', description: 'Cotton t-shirt', category: 'clothing', price: '$29' },
    { id: 3, title: 'JavaScript Book', description: 'Learn JavaScript', category: 'books', price: '$39' },
    { id: 4, title: 'Smartphone', description: 'Latest smartphone', category: 'electronics', price: '$799' },
    { id: 5, title: 'Jeans', description: 'Denim jeans', category: 'clothing', price: '$59' },
    { id: 6, title: 'Python Book', description: 'Python programming', category: 'books', price: '$45' },
    { id: 7, title: 'Tablet', description: '10-inch tablet', category: 'electronics', price: '$299' },
    { id: 8, title: 'Jacket', description: 'Winter jacket', category: 'clothing', price: '$89' },
];

let filteredCards = [...cardsData];
let selectedCard = null;
let currentView = 'card';
let currentCategory = 'all';
let itemCounter = 0;
let tooltipTimeout = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeSidebar();
    initializeHeader();
    initializeNotification();
    initializeCards();
    initializeForm();
    initializeDropdown();
    initializeTabs();
    initializeItems();
    initializeFAB();
    initializeFooter();
    initializeConfirmation();
    
    // Simulate loading data
    setTimeout(() => {
        document.getElementById('loadingPlaceholder').classList.add('hidden');
        document.getElementById('cardsContainer').classList.remove('hidden');
        renderCards();
    }, 2000);
});

// 1. Collapsible Sidebar with Toggle Button
function initializeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const overlay = document.getElementById('overlay');
    
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        overlay.classList.toggle('active');
        updateSidebarIcon();
    });
    
    // Close sidebar when clicking overlay
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('collapsed');
        overlay.classList.remove('active');
        updateSidebarIcon();
    });
}

function updateSidebarIcon() {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const icon = sidebarToggle.querySelector('i');
    
    if (sidebar.classList.contains('collapsed')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

// 2. Active Sidebar Menu Item
function initializeMenuItems() {
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menuLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');
        });
    });
}

// 3. Expand and Collapse Submenu
function initializeSubmenus() {
    const submenuItems = document.querySelectorAll('.has-submenu');
    submenuItems.forEach(item => {
        const link = item.querySelector('.menu-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
            item.classList.toggle('expanded');
        });
    });
}

// Initialize menu items and submenus
initializeMenuItems();
initializeSubmenus();

// 4. Toggle Header Visibility
function initializeHeader() {
    const header = document.getElementById('header');
    const headerToggle = document.getElementById('headerToggle');
    const icon = headerToggle.querySelector('i');
    
    headerToggle.addEventListener('click', () => {
        header.classList.toggle('hidden');
        if (header.classList.contains('hidden')) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
}

// 5. Sticky Footer on Scroll
function initializeFooter() {
    const footer = document.getElementById('footer');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            footer.classList.add('sticky');
        } else {
            footer.classList.remove('sticky');
        }
        
        lastScrollTop = scrollTop;
    });
}

// 6. Show Notification Banner Manually
// 7. Auto-hide Notification After Few Seconds
function initializeNotification() {
    const notificationBanner = document.getElementById('notificationBanner');
    const closeNotification = document.getElementById('closeNotification');
    const showNotificationBtn = document.getElementById('showNotificationBtn');
    
    showNotificationBtn.addEventListener('click', () => {
        showNotification('Notification shown manually!');
    });
    
    closeNotification.addEventListener('click', () => {
        hideNotification();
    });
    
    // Auto-hide after 5 seconds
    function showNotification(message) {
        document.getElementById('notificationText').textContent = message;
        notificationBanner.classList.add('show');
        
        setTimeout(() => {
            hideNotification();
        }, 5000);
    }
    
    function hideNotification() {
        notificationBanner.classList.remove('show');
    }
}

// 8. Floating Action Button
function initializeFAB() {
    const fab = document.getElementById('fab');
    
    fab.addEventListener('click', () => {
        showNotification('FAB clicked!');
    });
    
    // 9. Show Tooltip on Icon Hover
    // 10. Hide Tooltip When Mouse Leaves
    fab.addEventListener('mouseenter', (e) => {
        showTooltip(e.target, 'Click to perform action');
    });
    
    fab.addEventListener('mouseleave', () => {
        hideTooltip();
    });
}

// Tooltip Functions
function showTooltip(element, text) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = text;
    tooltip.classList.add('show');
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('tooltip');
    tooltip.classList.remove('show');
}

// 11. Dropdown Menu with Open/Close Logic
// 12. Close Dropdown When Clicking Outside
// 13. Toggle Dropdown Arrow Icon Direction
function initializeDropdown() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const dropdownContainer = document.querySelector('.dropdown-container');
    
    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownContainer.classList.toggle('open');
        dropdownMenu.classList.toggle('hidden');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdownContainer.contains(e.target)) {
            dropdownContainer.classList.remove('open');
            dropdownMenu.classList.add('hidden');
        }
    });
    
    // Handle dropdown item clicks
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownBtn.innerHTML = item.textContent + ' <i class="fas fa-chevron-down dropdown-icon"></i>';
            dropdownContainer.classList.remove('open');
            dropdownMenu.classList.add('hidden');
        });
    });
}

// 14. Different Icons Based on State
// Handled by updateSidebarIcon() function

// 15. Disable Background Interaction When Overlay is Active
// Already handled in sidebar toggle - overlay prevents clicks

// 16. Display Cards from Array Data
// 17. Highlight Card on Hover (CSS handles this)
// 18. Select Card on Click
// 19. Unselect Previously Selected Card
// 20. Show Selected Card Details
function initializeCards() {
    renderCards();
}

function renderCards() {
    const container = document.getElementById('cardsGrid');
    container.innerHTML = '';
    
    if (filteredCards.length === 0) {
        document.getElementById('noResults').classList.remove('hidden');
        return;
    }
    
    document.getElementById('noResults').classList.add('hidden');
    
    filteredCards.forEach(card => {
        const cardElement = createCardElement(card);
        container.appendChild(cardElement);
    });
    
    updateCardCount();
}

function createCardElement(card) {
    const div = document.createElement('div');
    div.className = 'card';
    div.dataset.id = card.id;
    
    if (selectedCard && selectedCard.id === card.id) {
        div.classList.add('selected');
    }
    
    div.innerHTML = `
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <p><strong>Price: ${card.price}</strong></p>
        <span class="category">${card.category}</span>
    `;
    
    div.addEventListener('click', () => {
        // Unselect previous
        document.querySelectorAll('.card').forEach(c => c.classList.remove('selected'));
        
        // Select current
        div.classList.add('selected');
        selectedCard = card;
        
        // Show details
        showCardDetails(card);
    });
    
    return div;
}

function showCardDetails(card) {
    const detailsSection = document.getElementById('selectedCardDetails');
    const detailsContent = document.getElementById('cardDetailsContent');
    
    detailsContent.innerHTML = `
        <p><strong>Title:</strong> ${card.title}</p>
        <p><strong>Description:</strong> ${card.description}</p>
        <p><strong>Category:</strong> ${card.category}</p>
        <p><strong>Price:</strong> ${card.price}</p>
    `;
    
    detailsSection.classList.remove('hidden');
}

// 21. Toggle Between Card View and List View
document.getElementById('cardViewBtn').addEventListener('click', () => {
    currentView = 'card';
    document.getElementById('cardViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    document.getElementById('cardsGrid').classList.remove('list-view');
    renderCards();
});

document.getElementById('listViewBtn').addEventListener('click', () => {
    currentView = 'list';
    document.getElementById('listViewBtn').classList.add('active');
    document.getElementById('cardViewBtn').classList.remove('active');
    document.getElementById('cardsGrid').classList.add('list-view');
    renderCards();
});

// 22. Display Count of Total Cards
function updateCardCount() {
    document.getElementById('totalCards').textContent = filteredCards.length;
}

// 23. Filter Cards Using Category Buttons
// 24. Highlight Active Category Button
// 25. Reset Filters Using Reset Button
// 26. Show "No Results Found" UI When List is Empty
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'resetFilters') return;
        
        // Update active button
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter cards
        const category = btn.dataset.category;
        currentCategory = category;
        
        if (category === 'all') {
            filteredCards = [...cardsData];
        } else {
            filteredCards = cardsData.filter(card => card.category === category);
        }
        
        renderCards();
    });
});

document.getElementById('resetFilters').addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    currentCategory = 'all';
    filteredCards = [...cardsData];
    renderCards();
});

// 27. Display Placeholder UI While Loading Data
// 28. Replace Placeholder with Content After Delay
// Already handled in DOMContentLoaded

// 29. Add and Remove Items Visually from UI
// 30. Animate Item Appearance and Removal
function initializeItems() {
    const addItemBtn = document.getElementById('addItemBtn');
    const itemsList = document.getElementById('itemsList');
    
    addItemBtn.addEventListener('click', () => {
        itemCounter++;
        const item = document.createElement('li');
        item.className = 'item';
        item.innerHTML = `
            <span>Item ${itemCounter}</span>
            <button class="remove-item-btn">Remove</button>
        `;
        
        const removeBtn = item.querySelector('.remove-item-btn');
        removeBtn.addEventListener('click', () => {
            item.classList.add('removing');
            setTimeout(() => {
                item.remove();
            }, 300);
        });
        
        itemsList.appendChild(item);
    });
}

// 31. Floating Label Input Fields
// 32. Highlight Input Border on Focus
// Already handled in CSS

// 33. Show Helper Text While Typing
// 34. Show Error Message Only After Blur
// 35. Disable Submit Button Until Input is Filled
function initializeForm() {
    const form = document.getElementById('mainForm');
    const inputs = form.querySelectorAll('.form-input');
    const submitBtn = document.getElementById('submitBtn');
    
    inputs.forEach(input => {
        // Show helper text while typing
        input.addEventListener('input', () => {
            validateInput(input);
            checkFormValidity();
        });
        
        // Show error after blur
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });
    
    // 36. Toggle Password Visibility Icon
    const passwordToggle = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('passwordInput');
    
    passwordToggle.addEventListener('click', () => {
        const icon = passwordToggle.querySelector('i');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
    
    // 37. Display Password Strength Text
    passwordInput.addEventListener('input', () => {
        const strength = calculatePasswordStrength(passwordInput.value);
        const strengthElement = passwordInput.parentElement.querySelector('.password-strength');
        strengthElement.textContent = strength.text;
        strengthElement.style.color = strength.color;
    });
    
    // 38. Show Success Message After Form Submit
    // 39. Auto-clear Success Message After Delay
    // 40. Disable Form Inputs After Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading spinner
        showLoadingSpinner('Submitting form...');
        
        setTimeout(() => {
            hideLoadingSpinner();
            showSuccessOverlay('Form submitted successfully!');
            
            // Disable form inputs
            inputs.forEach(input => {
                input.disabled = true;
            });
            submitBtn.disabled = true;
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = 'Form submitted successfully!';
            successMessage.classList.remove('hidden');
            
            // Auto-clear after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        }, 2000);
    });
    
    function checkFormValidity() {
        const allValid = Array.from(inputs).every(input => {
            return input.value.trim() !== '' && !input.classList.contains('error');
        });
        submitBtn.disabled = !allValid;
    }
    
    function validateInput(input) {
        const errorElement = input.parentElement.querySelector('.error-message');
        
        if (input.value.trim() === '') {
            input.classList.add('error');
            errorElement.textContent = 'This field is required';
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
            input.classList.add('error');
            errorElement.textContent = 'Please enter a valid email';
        } else {
            input.classList.remove('error');
            errorElement.textContent = '';
        }
    }
    
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    function calculatePasswordStrength(password) {
        if (password.length === 0) {
            return { text: '', color: '' };
        } else if (password.length < 6) {
            return { text: 'Weak', color: 'red' };
        } else if (password.length < 10) {
            return { text: 'Medium', color: 'orange' };
        } else {
            return { text: 'Strong', color: 'green' };
        }
    }
}

// 41. Tab Navigation UI
// 42. Highlight Active Tab with Underline
// 43. Switch Content When Tab Changes
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.dataset.tab;
            
            // Remove active class from all tabs and panes
            tabButtons.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// 44. Step Indicator UI
// 45. Highlight Completed Steps
// Already handled in HTML/CSS, can be extended with JS if needed

// 46. Show Confirmation Popup Before Action
// 47. Close Popup Using Cancel Button
function initializeConfirmation() {
    const confirmationBtn = document.getElementById('confirmationBtn');
    const confirmationPopup = document.getElementById('confirmationPopup');
    const confirmBtn = document.getElementById('confirmBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    
    confirmationBtn.addEventListener('click', () => {
        confirmationPopup.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
    
    cancelBtn.addEventListener('click', () => {
        confirmationPopup.classList.remove('show');
        document.body.style.overflow = '';
    });
    
    confirmBtn.addEventListener('click', () => {
        confirmationPopup.classList.remove('show');
        document.body.style.overflow = '';
        
        // Show loading spinner
        showLoadingSpinner('Processing...');
        
        setTimeout(() => {
            hideLoadingSpinner();
            showSuccessOverlay('Action completed successfully!');
        }, 2000);
    });
    
    // Close on overlay click
    confirmationPopup.addEventListener('click', (e) => {
        if (e.target === confirmationPopup) {
            confirmationPopup.classList.remove('show');
            document.body.style.overflow = '';
        }
    });
}

// 48. Show Loading Spinner During Action
// 49. Replace Spinner with Success Message
function showLoadingSpinner(message) {
    const spinner = document.getElementById('loadingSpinner');
    document.getElementById('spinnerMessage').textContent = message;
    spinner.classList.add('show');
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.classList.remove('show');
}

function showSuccessOverlay(message) {
    const overlay = document.getElementById('successOverlay');
    document.getElementById('successOverlayMessage').textContent = message;
    overlay.classList.add('show');
    
    setTimeout(() => {
        overlay.classList.remove('show');
    }, 3000);
}

// 50. Reset UI to Initial State
document.getElementById('resetUIBtn').addEventListener('click', () => {
    // Reset sidebar
    document.getElementById('sidebar').classList.remove('collapsed');
    document.getElementById('overlay').classList.remove('active');
    
    // Reset header
    document.getElementById('header').classList.remove('hidden');
    
    // Reset notification
    document.getElementById('notificationBanner').classList.remove('show');
    
    // Reset cards
    selectedCard = null;
    currentCategory = 'all';
    filteredCards = [...cardsData];
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('[data-category="all"]').classList.add('active');
    renderCards();
    
    // Reset view
    currentView = 'card';
    document.getElementById('cardViewBtn').classList.add('active');
    document.getElementById('listViewBtn').classList.remove('active');
    document.getElementById('cardsGrid').classList.remove('list-view');
    
    // Reset form
    document.getElementById('mainForm').reset();
    document.getElementById('mainForm').querySelectorAll('.form-input').forEach(input => {
        input.disabled = false;
        input.classList.remove('error');
    });
    document.getElementById('submitBtn').disabled = true;
    document.getElementById('successMessage').classList.add('hidden');
    
    // Reset dropdown
    document.querySelector('.dropdown-container').classList.remove('open');
    document.getElementById('dropdownMenu').classList.add('hidden');
    
    // Reset tabs
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
    document.querySelector('.tab-btn').classList.add('active');
    document.getElementById('tab1').classList.add('active');
    
    // Reset items
    document.getElementById('itemsList').innerHTML = '';
    itemCounter = 0;
    
    // Reset popups
    document.getElementById('confirmationPopup').classList.remove('show');
    document.getElementById('loadingSpinner').classList.remove('show');
    document.getElementById('successOverlay').classList.remove('show');
    
    showNotification('UI has been reset to initial state!');
});
