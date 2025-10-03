function openPopup(title, desc, img) {
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupDesc").innerText = desc;
    document.getElementById("popupImg").src = img;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }