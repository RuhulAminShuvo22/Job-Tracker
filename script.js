let currentTab = "all";

/* ===== JOB DATA (8 JOBS) ===== */
let jobs = [
  {
    id: 1,
    company: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$3000",
    description: "React & Tailwind UI",
    status: "all"
  },
  {
    id: 2,
    company: "Amazon",
    position: "Backend Engineer",
    location: "USA",
    type: "Full Time",
    salary: "$4000",
    description: "Node.js & AWS",
    status: "all"
  },
  {
    id: 3,
    company: "Meta",
    position: "UI Designer",
    location: "UK",
    type: "Contract",
    salary: "$2500",
    description: "Figma & UX Research",
    status: "all"
  },
  {
    id: 4,
    company: "Microsoft",
    position: "Software Engineer",
    location: "Canada",
    type: "Full Time",
    salary: "$4200",
    description: "Enterprise app development",
    status: "all"
  },
  {
    id: 5,
    company: "Netflix",
    position: "Full Stack Developer",
    location: "USA",
    type: "Full Time",
    salary: "$4800",
    description: "Frontend & Backend work",
    status: "all"
  },
  {
    id: 6,
    company: "Spotify",
    position: "Frontend Engineer",
    location: "Europe",
    type: "Remote",
    salary: "$3500",
    description: "Modern JS & UI",
    status: "all"
  },
  {
    id: 7,
    company: "Tesla",
    position: "Software Developer",
    location: "Germany",
    type: "Full Time",
    salary: "$5000",
    description: "Automation tools",
    status: "all"
  },
  {
    id: 8,
    company: "OpenAI",
    position: "Web Developer",
    location: "Remote",
    type: "Full Time",
    salary: "$6000",
    description: "AI product UI",
    status: "all"
  }
];
/* ===== RENDER JOBS ===== */
function renderJobs() {
  const container = document.getElementById("jobsContainer");
  const emptyState = document.getElementById("emptyState");

  container.innerHTML = "";

  const filteredJobs =
    currentTab === "all"
      ? jobs
      : jobs.filter(job => job.status === currentTab);

  document.getElementById("tabCount").innerText =
    `${filteredJobs.length} Jobs`;

  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }
   filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "bg-white p-6 rounded-2xl shadow";

    card.innerHTML = `
      <!-- STATUS -->
      <span class="badge mb-2 ${
        job.status === "interview"
          ? "badge-success"
          : job.status === "rejected"
          ? "badge-error"
          : "badge-outline"
      }">
        ${job.status === "all" ? "NOT APPLIED" : job.status.toUpperCase()}
      </span>

      <!-- POSITION -->
      <h3 class="text-lg font-semibold mt-2">${job.position}</h3>

      <!-- COMPANY -->
      <p class="font-medium">${job.company}</p>

      <!-- LOCATION -->
      <p class="text-sm text-gray-500">${job.location}</p>

      <!-- TYPE + SALARY -->
      <div class="flex items-center gap-3 text-sm mt-2">
        <span class="badge badge-outline">${job.type}</span>
        <span class="font-bold">${job.salary}</span>
      </div>

      <!-- DESCRIPTION -->
      <p class="text-sm text-gray-600 mt-3">${job.description}</p>

      <!-- BUTTONS -->
      <div class="flex gap-2 mt-4">
        <button class="btn btn-success btn-sm"
          onclick="setStatus(${job.id}, 'interview')">
          Interview
        </button>

        <button class="btn btn-error btn-sm"
          onclick="setStatus(${job.id}, 'rejected')">
          Rejected
        </button>

        <button class="btn btn-outline btn-sm"
          onclick="deleteJob(${job.id})">
          Delete
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  updateDashboard();
}

/* ===== STATUS UPDATE ===== */
function setStatus(id, status) {
  jobs = jobs.map(job =>
    job.id === id ? { ...job, status } : job
  );
  renderJobs();
}

/* ===== DELETE JOB ===== */
function deleteJob(id) {
  jobs = jobs.filter(job => job.id !== id);
  renderJobs();
}

/* ===== DASHBOARD ===== */
function updateDashboard() {
  document.getElementById("totalCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText =
    jobs.filter(j => j.status === "interview").length;
  document.getElementById("rejectedCount").innerText =
    jobs.filter(j => j.status === "rejected").length;
}
