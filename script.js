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

const captureBtn = document.getElementById("captureBtn");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function takePhoto() {
  if (!video.videoWidth) {
    alert("Please start the camera first.");
    return;
  }

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.save();
  ctx.translate(canvas.width, 0);
  ctx.scale(-1, 1);
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  ctx.restore();
}

captureBtn.addEventListener("click", takePhoto);