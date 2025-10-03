function openPopup(title, desc, img) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupDesc").innerText = desc;
    document.getElementById("popupImg").src = img;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }

  const buttons = document.querySelectorAll("button[data-target]");

// Her buton için tıklama eventi ekliyoruz
buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const targetId = button.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});