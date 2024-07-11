const dropdownItems = document.querySelectorAll('.dropdown-item');
const htmlElement = document.documentElement;

// Function to set the theme
function setTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Store in localStorage
}

// Event listener for theme selection
dropdownItems.forEach(item => {
  item.addEventListener('click', (event) => {
      const selectedTheme = event.target.dataset.themeValue;
      setTheme(selectedTheme);
  });
});

// Initial theme setup (from localStorage or default)
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    setTheme(storedTheme);
    themeSelect.value = storedTheme; // Update the dropdown
}
