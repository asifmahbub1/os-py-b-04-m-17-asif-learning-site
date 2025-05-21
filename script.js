document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    document.getElementById("formMessage").innerText = "All fields are required.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("formMessage").innerText = "Please enter a valid email address.";
    return;
  }

  const contactData = { name, email, message };
  localStorage.setItem("contactFormData", JSON.stringify(contactData));
  document.getElementById("formMessage").innerText = "Thank you! Your message has been saved.";
  document.getElementById("contactForm").reset();

  // Scroll to the success message smoothly
  document.getElementById("formMessage").scrollIntoView({ behavior: "smooth" });
});
