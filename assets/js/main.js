// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

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

// TEAM POPUP DATA
const teamDetails = {
  pramod: {
    name: "Pramod Mishra",
    role: "Senior Faculty - English",
    exp: "30+ years of teaching experience",
    qualification: "MA in English, B.Ed",
    achievements: "Guided hundreds of students to score 90%+ in English board exams.",
    photo: "assets/images/pramod.jpg",
    audio: "assets/audio/pramod-intro.mp3"
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

// TEAM POPUP OPEN
document.querySelectorAll(".team-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.getAttribute("data-member");
    const data = teamDetails[key];
    if (!data) return;

    document.getElementById("modalName").innerText = data.name;
    document.getElementById("modalRole").innerText = data.role;
    document.getElementById("modalExp").innerText = data.exp;
    document.getElementById("modalQual").innerHTML =
      "<span class='modal-label'>Qualification:</span> " + data.qualification;
    document.getElementById("modalAchievements").innerHTML =
      "<span class='modal-label'>Achievements:</span> " + data.achievements;

    const photoEl = document.getElementById("modalPhoto");
    photoEl.src = data.photo;
    photoEl.style.display = "block";

    const voiceBtn = document.getElementById("voiceBtn");
    const audioEl = document.getElementById("introAudio");

    if (data.audio) {
      audioEl.src = data.audio;
      voiceBtn.style.display = "inline-flex";
    } else {
      voiceBtn.style.display = "none";
      audioEl.removeAttribute("src");
    }

    const modal = document.getElementById("teamModal");
    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  });
});

// TEAM POPUP CLOSE
function closeModal() {
  const modal = document.getElementById("teamModal");
  const audioEl = document.getElementById("introAudio");

  if (audioEl) {
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  modal.classList.remove("show");

  setTimeout(() => {
    modal.style.display = "none";
  }, 250);
}

document.getElementById("teamModal").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});

// Voice intro
function playIntro() {
  const audioEl = document.getElementById("introAudio");
  if (audioEl && audioEl.src) {
    audioEl.currentTime = 0;
    audioEl.play();
  }
}

// GOOGLE SHEETS SEND
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(enquiryForm);

    fetch("https://script.google.com/macros/s/AKfycbz084-9zg-_GzAvnD3Q02NpJjN7pz2Pn3cnjdJ0EzzOO5v21P1VTZadMpEQnSOp7O9z2Q/exec", {
      method: "POST",
      body: formData,
      mode: "no-cors"   // important for CORS
    })
      .then(() => {
        alert("Thank you! Your enquiry has been submitted.");
        enquiryForm.reset();
      })
      .catch(() => {
        alert("Unable to submit right now. Please try again later.");
      });
  });
}
