const copyButton = document.getElementById("copyButton");
const copyStatus = document.getElementById("copyStatus");

copyButton.addEventListener("click", async () => {
  const licenseText = document.querySelector(".license").innerText;

  try {
    await navigator.clipboard.writeText(licenseText);
    copyStatus.textContent = "License copied!";
  } catch (error) {
    copyStatus.textContent = "Could not copy automatically. Select the text manually.";
  }
});
