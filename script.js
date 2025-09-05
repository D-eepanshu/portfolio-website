// ====== Header Background Change on Scroll ======
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-slate-900/80", "backdrop-blur-md", "shadow-md");
  } else {
    header.classList.remove("bg-slate-900/80", "backdrop-blur-md", "shadow-md");
  }
});

// ====== Mobile Menu Toggle ======
const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ====== Scroll Reveal Animation ======
const revealElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("opacity-100", "translate-y-0");
      el.classList.remove("opacity-0", "translate-y-10");
    }
  });
};

// Initial state
revealElements.forEach((el) => {
  el.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ====== AI Modal Logic ======
const aiModal = document.getElementById("ai-modal");
const closeModalBtn = document.getElementById("close-modal-btn");
const modalContent = document.getElementById("modal-content");

// Open modal with content
function openModal(content) {
  modalContent.innerHTML = content;
  aiModal.classList.remove("hidden");
}

// Close modal
closeModalBtn.addEventListener("click", () => {
  aiModal.classList.add("hidden");
});

// Close modal when clicking outside
aiModal.addEventListener("click", (e) => {
  if (e.target === aiModal) {
    aiModal.classList.add("hidden");
  }
});

// ====== Generate Bio (Mock AI) ======
const bioBtn = document.getElementById("generate-bio-btn");
const bioText = document.getElementById("bio-text");
const bioBtnText = document.getElementById("bio-btn-text");
const bioLoader = document.getElementById("bio-loader");

if (bioBtn) {
  bioBtn.addEventListener("click", () => {
    bioBtn.disabled = true;
    bioBtnText.textContent = "Refining...";
    bioLoader.classList.remove("hidden");

    setTimeout(() => {
      bioText.textContent =
        "Innovative Software Engineer skilled in full-stack development, data-driven problem solving, and building AI-powered solutions to transform ideas into impactful products.";
      bioBtnText.textContent = "✨ Refine Bio with AI";
      bioLoader.classList.add("hidden");
      bioBtn.disabled = false;
    }, 2000);
  });
}

// ====== Generate Interview Question (Mock AI) ======
const questionBtns = document.querySelectorAll(".generate-question-btn");

questionBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const loader = btn.querySelector(".loader");
    const text = btn.querySelector("span:first-child");

    btn.disabled = true;
    text.textContent = "Generating...";
    loader.classList.remove("hidden");

    setTimeout(() => {
      openModal(`
        <h3 class="text-xl font-bold mb-4 text-indigo-400">Interview Question</h3>
        <p class="text-slate-300">Explain the difference between supervised and unsupervised learning, and provide a real-world example of each.</p>
      `);

      text.textContent = "✨ Generate Interview Question";
      loader.classList.add("hidden");
      btn.disabled = false;
    }, 2000);
  });
});

// ====== Generate Project Idea (Mock AI) ======
const projectBtn = document.getElementById("generate-project-btn");
const projectBtnText = document.getElementById("project-btn-text");
const projectLoader = document.getElementById("project-loader");

if (projectBtn) {
  projectBtn.addEventListener("click", () => {
    projectBtn.disabled = true;
    projectBtnText.textContent = "Thinking...";
    projectLoader.classList.remove("hidden");

    setTimeout(() => {
      openModal(`
        <h3 class="text-xl font-bold mb-4 text-indigo-400">AI Project Idea</h3>
        <p class="text-slate-300">Build a <strong>Personalized Learning Platform</strong> that adapts course content based on user progress and feedback using Machine Learning and NLP.</p>
      `);

      projectBtnText.textContent = "✨ Suggest a Project Idea";
      projectLoader.classList.add("hidden");
      projectBtn.disabled = false;
    }, 2000);
  });
}

// ====== Generate Career Advice (Mock AI) ======
const careerBtn = document.getElementById("generate-career-btn");
const careerBtnText = document.getElementById("career-btn-text");
const careerLoader = document.getElementById("career-loader");
const careerOutput = document.getElementById("career-advice-output");

if (careerBtn) {
  careerBtn.addEventListener("click", () => {
    careerBtn.disabled = true;
    careerBtnText.textContent = "Analyzing...";
    careerLoader.classList.remove("hidden");

    setTimeout(() => {
      careerOutput.innerHTML = `
        <div class="glass-card p-6 rounded-xl">
          <h3 class="text-xl font-bold mb-3 text-indigo-400">AI Career Advice</h3>
          <p class="text-slate-300">Focus on mastering <strong>cloud computing</strong> (AWS, GCP), advance your <strong>ML & NLP expertise</strong>, and contribute to open-source projects. This will make you stand out for top-tier software engineering and AI roles.</p>
        </div>
      `;
      careerOutput.classList.remove("hidden");

      careerBtnText.textContent = "✨ Get AI Career Advice";
      careerLoader.classList.add("hidden");
      careerBtn.disabled = false;
    }, 2500);
  });
}
