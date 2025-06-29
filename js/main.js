const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function() {
    this.classList.toggle("collapsible--expanded");
  })
);

// Input Animation

const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
})

//Toggle Themes

const toggleButton = document.getElementById('theme-toggle');
const themeOptions = document.querySelector('.theme-options');
const radioButtons = document.querySelectorAll('input[name="theme"]');

// Toggle dropdown visibility
toggleButton.addEventListener('click', () => {
  document.querySelector('.theme-switcher').classList.toggle('active');
});

// Apply theme on selection
radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value;
    document.documentElement.className = selectedTheme;
  });
});

// Set default theme (Dark Blue)
document.documentElement.className = 'dark-blue';
