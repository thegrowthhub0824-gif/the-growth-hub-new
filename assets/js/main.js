// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close nav when a link is clicked (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ========== TEAM POPUP LOGIC ==========

// Data for each member
const teamDetails = {
  pramod: {
    name: "Ananya Mishra",
    role: "Senior Faculty - English",
    exp: "30+ years of teaching experience",
    qualification: "MA in English, B.Ed",
    achievements: "Guided hundreds of students to score 90%+ in English board exams.",
    photo: "assets/images/anannya.jpg",           // add file later
    audio: "assets/audio/pramod-intro.mp3"       // add file later (optional)
  },
  anannya: {
    name: "Anannya Mishra",
    role: "Senior Faculty - Science & Mathematics",
    exp: "5+ years of teaching experience",
    qualification: "B.Sc (Science), B.Ed",
    achievements: "Known for simple explanations and improving students' problem-solving skills.",
    photo: "assets/images/anannya.jpg",
    audio: "assets/audio/anannya-intro.mp3"
  },
  bibek: {
    name: "Bibekananda Padhan",
    role: "Junior Faculty - Science & Social Science",
    exp: "2+ years of teaching experience",
    qualification: "B.Sc, Training in classroom teaching",
    achievements: "Helps students connect theory with real-life examples.",
    photo: "assets/images/bibek.jpg",
    audio: "assets/audio/bibek-intro.mp3"
  },
  badal: {
    name: "Badal Baboo",
    role: "Junior Faculty - Science & IT",
    exp: "2+ years of teaching experience",
    qualification: "BCA / IT background",
    achievements: "Supports students in understanding IT fundamentals along with science basics.",
    photo: "assets/images/badal.jpg",
    audio: "assets/audio/badal-intro.mp3"
  }
};

// Attach click events to each team card
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-member");
    const data = teamDetails[key];

    if (!data) return;

    document.getElementById("modalName").innerText = data.name;
    document.getElementById("modalRole").innerText = data.role;
    document.getElementById("modalExp").innerText = data.exp;
    document.getElementById("modalQual").innerHTML =
      "<span class='modal-label'>Qualification:</span> " + (data.qualification || "");
    document.getElementById("modalAchievements").innerHTML =
      "<span class='modal-label'>Achievements:</span> " + (data.achievements || "");

    // Photo
    const photoEl = document.getElementById("modalPhoto");
    if (data.photo) {
      photoEl.src = data.photo;
      photoEl.style.display = "block";
    } else {
      photoEl.style.display = "none";
    }

    // Voice intro button
    const voiceBtn = document.getElementById("voiceBtn");
    const audioEl = document.getElementById("introAudio");

    if (data.audio) {
      audioEl.src = data.audio;
      voiceBtn.style.display = "inline-flex";
    } else {
      audioEl.removeAttribute("src");
      voiceBtn.style.display = "none";
    }

    // Demo button – to contact section (or change to WhatsApp link if you want)
    const demoBtn = document.getElementById("demoBtn");
    demoBtn.href = "#contact";

    // Show modal
    // Show modal with animation
const modal = document.getElementById("teamModal");
modal.style.display = "flex";

// small timeout so CSS transition can catch
setTimeout(() => {
  modal.classList.add("show");
}, 10);

  });
});

function closeModal() {
  const modal = document.getElementById("teamModal");
  const audioEl = document.getElementById("introAudio");
  if (audioEl) {
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  // start fade-out
  modal.classList.remove("show");

  // wait for opacity transition to finish, then hide
  setTimeout(() => {
    modal.style.display = "none";
  }, 250);
}
// Close when clicking dark area outside card
document.getElementById("teamModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Play voice intro
function playIntro() {
  const audioEl = document.getElementById("introAudio");
  if (audioEl && audioEl.src) {
    audioEl.currentTime = 0;
    audioEl.play();
  } else {
    alert("Voice intro not available yet.");
  }
}
