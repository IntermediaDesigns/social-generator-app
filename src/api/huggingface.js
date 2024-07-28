import { HfInference } from "@huggingface/inference";
require('dotenv').config();
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const dialogModal = document.getElementById("dialog-modal");
const imageContainer = document.getElementById("image-container");
const form = document.getElementById("formContainer");



/** show dialog on load **/
dialogModal.show();

async function submitButton(event) {
  event.preventDefault();

  dialogModal.close();

  const prompt = document.getElementById("user-input").value;

  const loadingIndicator = document.createElement("div");
  loadingIndicator.className = "loading-indicator";
  loadingIndicator.textContent = "...Loading Image";
  imageContainer.appendChild(loadingIndicator);

  try {
    const response = await hf.textToImage({
      model: "stabilityai/stable-diffusion-2",
      inputs: prompt,
      parameters: {
        negative_prompt: "blurry",
      },
    });

    const imageUrl = await blobToBase64(response);

    imageContainer.removeChild(loadingIndicator);
    imageContainer.querySelector("img").src = imageUrl;

    // Show the regenerate button after the image is generated
    document.getElementById("regenerate-button").style.display = "block";
  } catch (error) {
    console.error("Error generating image:", error);
  }
}

const regenerateButton = document.getElementById("regenerate-button");
regenerateButton.addEventListener("click", regeneratePrompt);

function regeneratePrompt() {
  // Clear the previous input
  document.getElementById("user-input").value = "";

  // Hide the regenerate button
  document.getElementById("regenerate-button").style.display = "none";

  // Show the dialog modal
  dialogModal.show();
}

form.addEventListener("submit", submitButton);

async function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal
 *    should be hidden.
 * 2. Use the inputted text to generate an image
 *    for the e-card using an AI model.
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 *
 * 🎁 hint.md for help!
 **/
