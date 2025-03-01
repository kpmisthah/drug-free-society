
document.addEventListener("DOMContentLoaded", function () {
  // Handle sidebar responsiveness
  const toggleBtn = document.createElement("button");
  toggleBtn.classList.add("btn", "sidebar-toggle");
  toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';

  const header = document.querySelector(".header");
  if (window.innerWidth < 768) {
    header.prepend(toggleBtn);
    document.querySelector(".sidebar").style.display = "none";

    toggleBtn.addEventListener("click", function () {
      const sidebar = document.querySelector(".sidebar");
      sidebar.style.display =
        sidebar.style.display === "none" ? "block" : "none";
    });
  }

  // Upload area functionality
  const uploadArea = document.getElementById("videoUpload");
  if (uploadArea) {
    uploadArea.addEventListener("click", function () {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "video/*";
      fileInput.click();

      fileInput.addEventListener("change", function (e) {
        // Handle file selection
        if (e.target.files.length > 0) {
          const file = e.target.files[0];
          uploadVideo(file); //call the function to upload the video
        }
      });
    });
  }
});

// Convert the outer function to async
async function uploadVideo(file) {
  const formData = new FormData();
  formData.append("video", file);

  try {
    const response = await fetch("/upload-video", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log("Response Data:", data); // Debug: log the response

    // Check the response. Adjust the condition as needed (e.g., data.success or data.videoUrl)
    if (response.ok && data.videoUrl) {
      alert("Video uploaded successfully!");
    } else {
      alert("Upload failed!");
    }
  } catch (error) {
    console.error("Error uploading video:", error);
    alert("Error uploading video.");
  }
}
