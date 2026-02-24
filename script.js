// const themeToggle = document.querySelector(".theme-toggle");
// const promptBtn = document.querySelector(".prompt-btn");
// const promptInput = document.querySelector(".prompt-input");

// // get form inputs
// const promptForm = document.querySelector(".prompt-form");
// const modelSelect = document.getElementById("model-select");
// const countSelect = document.getElementById("count-select");
// const ratioSelect = document.getElementById("ratio-select");

// const gridGallary = document.querySelector(".gallery-grid");

// // const API_KEY = process.env.HF;
// const API_KEY = process.env.HF;

// const examplePrompts = [
//   "A magic forest with glowing plants and fairy homes among giant mushrooms",
//   "An old steampunk airship floating through golden clouds at sunset",
//   "A future Mars colony with glass domes and gardens against red mountains",
//   "A dragon sleeping on gold coins in a crystal cave",
//   "An underwater kingdom with merpeople and glowing coral buildings",
//   "A floating island with waterfalls pouring into clouds below",
//   "A witch's cottage in fall with magic herbs in the garden",
//   "A robot painting in a sunny studio with art supplies around it",
//   "A magical library with floating glowing books and spiral staircases",
//   "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
//   "A cosmic beach with glowing sand and an aurora in the night sky",
//   "A medieval marketplace with colorful tents and street performers",
//   "A cyberpunk city with neon signs and flying cars at night",
//   "A peaceful bamboo forest with a hidden ancient temple",
//   "A giant turtle carrying a village on its back in the ocean",
// ];

// //Tip: Whenever you write an IIFE after a statement, always end the previous line with a semicolon.

// // Set theme based on saved preference or system default
// (() => {
//     const savedTheme = localStorage.getItem("theme");
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const isDarkTheme = savedTheme === "dark" || (!savedTheme && systemPrefersDark)
//     document.body.classList.toggle("dark-theme", isDarkTheme); // go to inspect -> application
//     themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// })();

// // Switch between light and dark theme
// const toggleTheme = () => {
//     const isDarkTheme = document.body.classList.toggle("dark-theme");
//     // save the selected theme on local storage and load it on page refresh
//     localStorage.setItem("theme", isDarkTheme ? "dark" : "light")
//     themeToggle.querySelector("i").className = isDarkTheme ? "fa-solid fa-sun" : "fa-solid fa-moon";
// }
// themeToggle.addEventListener("click", toggleTheme);

// // Fill the prompt input with random prompt on click
// promptBtn.addEventListener("click", () => {
//     const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
//     promptInput.value = prompt;
//     promptInput.focus();
// })

// const getImageDimensions = (aspectRatio, baseSize = 512) => {
//    const [width, height] = aspectRatio.split("/").map(Number);
//    const scaleFactor = baseSize / Math.sqrt(width * height);

//    let calculateWidth = Math.round(width * scaleFactor);
//    let calculateHeight = Math.round(height * scaleFactor);

//    // Ensures dimensions are multiple of 16 (AI model requirements)

//    calculateWidth = Math.floor(calculateWidth / 16) * 16;
//    calculateHeight = Math.floor(calculateHeight / 16) * 16;

//   return { width: calculateWidth, height: calculateHeight};
// }

// // generate images based on the provided form values using an API
// const generateImages = async (selectedModel, imageCount, aspectRatio, promptText) => {
//     const MODEL_URL = `https://api-inference.huggingface.co/models/${selectedModel}`;
//     const {width, height} = getImageDimensions(aspectRatio);

//     const imagePromises = Array.from({length: imageCount}, async(_, i) => {
//         // Send request to the AI model API
//          try {
//         const response = await fetch(MODEL_URL, {
//             headers: { 
//                 Authorization: `Bearer ${API_KEY}`,
//                 "Content-Type": "application/json",
//                 "x-use-cache": 'false'
//             },
//         method: "POST",
//         body: JSON.stringify({
//             inputs: promptText,
//             parameters: {width, height},
//             options: {wait_for_model: true, user_cache: false}
//         }),

//     });

//     if(!response.ok){
//         throw new Error((await response.json()) ?.error);
//     }

//     const result = await response.blob();
//     console.log(result);
    
// } catch (error) {
//    console.log(error);
//     }
//     })

//    await Promise.allSettled(imagePromises)

// }


    
// // Creating placeholder cards with loading spinners
// const createImageCards = (selectedModel, imageCount, aspectRatio, promptText) => {
//      gridGallary.innerHTML = "";

//     for(let i = 0; i < imageCount; i++){
//        gridGallary.innerHTML += `<div class="img-card loading" id= "img-card-${i}" style = "aspect-ratio: ${aspectRatio}"> 
//             <div class="status-container">
//               <div class="spinner"></div>
//               <i class="fa-solid fa-triangle-exclamation"></i>
            
//               <p class="status-text">Generating...</p>
//             </div>
//            </div>`
//     }

//     generateImages(selectedModel, imageCount, aspectRatio, promptText);
// }

// // Handle form submission
// const handleFormSubmit = (e) => {
//     e.preventDefault(); // prevent form from submitting
    
//     // Get form values
//     const selectedModel = modelSelect.value;
//     const imageCount = countSelect.value;
//     const aspectRatio = ratioSelect.value || "1/1";
//     const promptText = promptInput.value.trim();

//     createImageCards(selectedModel, imageCount, aspectRatio, promptText);
// }
// promptForm.addEventListener("submit", handleFormSubmit);


// // generate result image cards based on the image count and aspect ratio


const themeToggle = document.querySelector(".theme-toggle");
const promptBtn = document.querySelector(".prompt-btn");
const promptInput = document.querySelector(".prompt-input");

const promptForm = document.querySelector(".prompt-form");
const modelSelect = document.getElementById("model-select");
const countSelect = document.getElementById("count-select");
const ratioSelect = document.getElementById("ratio-select");

const gridGallary = document.querySelector(".gallery-grid");

const examplePrompts = [
  "A magic forest with glowing plants and fairy homes among giant mushrooms",
  "An old steampunk airship floating through golden clouds at sunset",
  "A future Mars colony with glass domes and gardens against red mountains",
  "A dragon sleeping on gold coins in a crystal cave",
  "An underwater kingdom with merpeople and glowing coral buildings",
  "A floating island with waterfalls pouring into clouds below",
  "A witch cottage in fall with magic herbs in the garden",
  "A robot painting in a sunny studio with art supplies around it",
  "A magical library with floating glowing books and spiral staircases",
  "A Japanese shrine during cherry blossom season with lanterns and misty mountains",
  "A cosmic beach with glowing sand and an aurora in the night sky",
  "A medieval marketplace with colorful tents and street performers",
  "A cyberpunk city with neon signs and flying cars at night",
  "A peaceful bamboo forest with a hidden ancient temple",
  "A giant turtle carrying a village on its back in the ocean",
];


// ================= THEME =================

(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const isDarkTheme =
    savedTheme === "dark" || (!savedTheme && systemPrefersDark);

  document.body.classList.toggle("dark-theme", isDarkTheme);
  themeToggle.querySelector("i").className = isDarkTheme
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
})();

const toggleTheme = () => {
  const isDarkTheme = document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  themeToggle.querySelector("i").className = isDarkTheme
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
};

themeToggle.addEventListener("click", toggleTheme);


// ================= RANDOM PROMPT =================

promptBtn.addEventListener("click", () => {
  const prompt =
    examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  promptInput.value = prompt;
  promptInput.focus();
});


// ================= IMAGE DIMENSIONS =================

const getImageDimensions = (aspectRatio, baseSize = 512) => {
  const [width, height] = aspectRatio.split("/").map(Number);
  const scaleFactor = baseSize / Math.sqrt(width * height);

  let calculateWidth = Math.round(width * scaleFactor);
  let calculateHeight = Math.round(height * scaleFactor);

  calculateWidth = Math.floor(calculateWidth / 16) * 16;
  calculateHeight = Math.floor(calculateHeight / 16) * 16;

  return { width: calculateWidth, height: calculateHeight };
};


// // ================= GENERATE IMAGES =================

// const generateImages = async ( imageCount, aspectRatio, promptText) => {
//   const { width, height } = getImageDimensions(aspectRatio);

//   const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
//     const imgCard = document.getElementById(`img-card-${i}`);

//     try {
//       const response = await fetch("http://localhost:3000/generate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           prompt: promptText,
//           width,
//           height
//         })
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText);
//       }

//       const blob = await response.blob();
//       const imageUrl = URL.createObjectURL(blob);

//       imgCard.classList.remove("loading");
//       imgCard.innerHTML = `
//         <img src="${imageUrl}" class="result-img" />
//         <div class="img-overlay">
//           <button class="img-download-btn" onclick="downloadImage('${imageUrl}')">
//             <i class="fa-solid fa-download"></i>
//           </button>
//         </div>
//       `;

//     } catch (error) {
//       imgCard.classList.remove("loading");
//       imgCard.innerHTML = `
//         <div class="status-container">
//           <i class="fa-solid fa-triangle-exclamation"></i>
//           <p class="status-text">Failed</p>
//         </div>
//       `;
//       console.error("Image error:", error);
//     }
//   });

//   await Promise.allSettled(imagePromises);
// };

const generateImages = async (imageCount, aspectRatio, promptText) => {
  const { width, height } = getImageDimensions(aspectRatio);

  const imagePromises = Array.from({ length: imageCount }, async (_, i) => {
    const imgCard = document.getElementById(`img-card-${i}`);

    try {
      imgCard.classList.add("loading");

      const response = await fetch("http://localhost:3000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: promptText,
          width,
          height
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Server error");
      }

      const blob = await response.blob();

      // 🔥 Ensure we actually received an image
      if (!blob.type.startsWith("image/")) {
        const text = await blob.text();
        throw new Error(text || "Invalid image response");
      }

      const imageUrl = URL.createObjectURL(blob);

      imgCard.classList.remove("loading");
      imgCard.innerHTML = `
        <img src="${imageUrl}" class="result-img" />
        <div class="img-overlay">
          <button class="img-download-btn">
            <i class="fa-solid fa-download"></i>
          </button>
        </div>
      `;

      // Download button logic
      const downloadBtn = imgCard.querySelector(".img-download-btn");
      downloadBtn.addEventListener("click", () => {
        const link = document.createElement("a");
        link.href = imageUrl;
        link.download = "generated-image.jpg";
        link.click();
      });

    } catch (error) {
      imgCard.classList.remove("loading");
      imgCard.innerHTML = `
        <div class="status-container">
          <p class="status-text">Failed</p>
        </div>
      `;
      console.error("Image error:", error);
    }
  });

  await Promise.allSettled(imagePromises);
};
// ================= CREATE PLACEHOLDER CARDS =================

const createImageCards = ( imageCount, aspectRatio, promptText) => {
  gridGallary.innerHTML = "";

  for (let i = 0; i < imageCount; i++) {
    gridGallary.innerHTML += `
      <div class="img-card loading" id="img-card-${i}" style="aspect-ratio: ${aspectRatio}">
        <div class="status-container">
          <div class="spinner"></div>
          <p class="status-text">Generating...</p>
        </div>
      </div>
    `;
  }

  generateImages( imageCount, aspectRatio, promptText);
};


// ================= FORM SUBMIT =================

const handleFormSubmit = (e) => {
  e.preventDefault();

  
  const imageCount = Number(countSelect.value);
  const aspectRatio = ratioSelect.value || "1/1";
  const promptText = promptInput.value.trim();

  if (!promptText) return;

  createImageCards( imageCount, aspectRatio, promptText);
};

promptForm.addEventListener("submit", handleFormSubmit);


// ================= DOWNLOAD =================

function downloadImage(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "ai-image.jpg";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}