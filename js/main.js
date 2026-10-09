// Change color box dynamically in Hero section
function changeColor(hexColor) {
  const box = document.getElementById('colorPreviewBox');
  box.style.backgroundColor = hexColor;
  box.innerText = `Tone: ${hexColor.toUpperCase()}`;
}

// Paint Calculator Logic
function calculatePaint() {
  const perimeter = parseFloat(document.getElementById('perimeter').value);
  const height = parseFloat(document.getElementById('height').value);
  const coats = parseInt(document.getElementById('coats').value);
  
  const resultDiv = document.getElementById('calcResult');
  const calcArea = document.getElementById('calcArea');
  const calcGallons = document.getElementById('calcGallons');

  if (!perimeter || !height || perimeter <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for length and height.");
    return;
  }

  // Calculate Wall Area
  const wallArea = perimeter * height;
  const totalSquareFeet = wallArea * coats;
  
  // Average gallon covers ~350 sq ft
  const coveragePerGallon = 350;
  const gallonsNeeded = Math.ceil(totalSquareFeet / coveragePerGallon);

  // Update UI
  calcArea.textContent = `Total Surface Area (${coats} coat/s): ${totalSquareFeet.toLocaleString()} sq. ft.`;
  calcGallons.textContent = `Estimated Paint Needed: ${gallonsNeeded} Gallon(s)`;
  
  resultDiv.classList.remove('hidden');
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = "Thank you! We've received your request and will contact you shortly.";
  status.classList.remove('hidden');
  document.getElementById('contactForm').reset();
}