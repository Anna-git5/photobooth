const video = document.getElementById("video");
const startBtn = document.getElementById("startBtn");

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
  } catch (error) {
    console.log("Camera error:", error);
    alert("Cannot open camera. Please allow camera permission.");
  }
}

startBtn.addEventListener("click", startCamera);