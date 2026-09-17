(() => {
  const output = document.getElementById("output");
  const input = document.getElementById("commandInput");
  const form = document.getElementById("commandForm");
  const body = document.getElementById("terminalBody");
  const clearButton = document.getElementById("clearWindow");
  const quickActions = [...document.querySelectorAll("[data-command]")];

  const PROFILE = {
    name: "Md Azharuddin",
    role: "Full Stack Developer",
    summary: "Full Stack Developer with 2+ years of experience building production web applications.",
    stack: ["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    ai: ["Python", "FastAPI", "RAG", "Vector Databases", "LLMs", "AI Agents", "MCP"],
    interests: ["Full Stack", "Real-Time Systems", "Backend Engineering", "AI Engineering", "Cloud & DevOps", "SaaS"],
    projects: [
      {
        name: "Real-Time Chat",
        tech: "React + Node.js + Socket.io",
        desc: "Real-time messaging, typing indicators, streaming and AI chatbot integration."
      },
      {
        name: "RetailOS",
        tech: "MERN + AI",
        desc: "A multi-tenant retail ERP concept for small businesses with inventory and AI-powered workflows."
      },
      {
        name: "Pharmacy Management System",
        tech: "Next.js + Node.js + MongoDB",
        desc: "Inventory and pharmacy management workflows for a retail pharmacy."
      },
      {
        name: "AI / RAG Experiments",
        tech: "Python + FastAPI + RAG + LLMs",
        desc: "Hands-on experiments around retrieval-augmented generation and AI application architecture."
      }
    ]
  };

  const commands = [
    "help", "about", "whoami", "skills", "projects", "experience",
    "education", "ai", "recommend", "contact", "neofetch", "pwd",
    "ls", "date", "clear"
  ];

  let history = [];
  let historyIndex = -1;

  const line = (text = "", cls = "output-line") => {
    const el = document.createElement("div");
    el.className = `line ${cls}`;
    el.textContent = text;
    output.appendChild(el);
  };

  const block = (text) => {
    text.split("\n").forEach((part) => line(part));
  };

  const scrollBottom = () => { body.scrollTop = body.scrollHeight; };

  const banner = () => {
    line("╭──────────────────────────────────────────────────────────╮", "accent");
    line("│  MD AZHARUDDIN // INTERACTIVE DEVELOPER TERMINAL       │", "accent");
    line("│  Full Stack • Backend • AI Engineering                  │", "accent");
    line("╰──────────────────────────────────────────────────────────╯", "accent");
    line("");
    line("Welcome. This terminal is interactive — try `help`.");
    line("Tip: try `ask what technologies does azharuddin use?`");
    line("");
  };

  function help() {
    block(
`Available commands:

  about          About Md Azharuddin
  whoami         Developer identity
  skills         Technical stack
  projects       Explore featured projects
  experience     Work experience overview
  education      Education
  ai             AI engineering journey
  recommend      Recommend a project to explore
  ask <question> Ask the profile knowledge base
  neofetch       Developer system card
  ls             List terminal sections
  pwd            Show current path
  date           Show current date
  clear          Clear terminal

Navigation:
  ↑ / ↓          Command history
  Tab            Complete a command
  Ctrl/Cmd + L   Clear terminal`
    );
  }

  function about() {
    block(`${PROFILE.name}
${PROFILE.role}

${PROFILE.summary}

Focus:
  Building scalable web applications, real-time systems,
  backend APIs and AI-powered products.

Current direction:
  Expanding from MERN/full-stack development into
  Python, FastAPI, RAG, LLMs and AI agents.`);
  }

  function skills() {
    block(`Frontend
  ${PROFILE.stack.slice(0, 4).join(" • ")}

Backend
  ${PROFILE.stack.slice(4).join(" • ")}

AI Engineering
  ${PROFILE.ai.join(" • ")}

Engineering Interests
  ${PROFILE.interests.join(" • ")}`);
  }

  function projects() {
    PROFILE.projects.forEach((p, i) => {
      line(`[0${i + 1}] ${p.name}`, "accent");
      line(`     ${p.tech}`, "muted");
      line(`     ${p.desc}`);
      line("");
    });
    line("Use the GitHub profile links to explore the actual repositories.", "muted");
  }

  function experience() {
    block(`Software / Technical Support Engineering
  Production application development and technical problem solving.

Full Stack Development
  React, Node.js, API integration, authentication,
  state management, rate limiting and real-time communication.

Recent direction
  Moving deeper into backend engineering and AI application development.`);
  }

  function education() {
    block(`B.Tech — Computer Science & Engineering
M.M University
2023 • 8.2 CGPA`);
  }

  function ai() {
    block(`AI Engineering Journey

Learning:
  Python
  FastAPI
  RAG
  Vector Databases
  LLM APIs
  AI Agents
  MCP

Goal:
  Build practical AI-powered products and integrate
  intelligent workflows into full-stack applications.

Approach:
  Learn → Experiment → Build → Integrate → Ship`);
  }

  function recommend() {
    block(`Choose based on what you want to explore:

  Real-Time Chat
    → WebSockets, streaming, state management and AI integration.

  RetailOS
    → SaaS architecture, multi-tenancy, inventory and business workflows.

  Pharmacy Management System
    → CRUD-heavy business applications and operational workflows.

  AI / RAG Experiments
    → RAG, LLM applications, retrieval and AI architecture.

Try ` + "`projects`" + ` to inspect them all.`);
  }

  function contact() {
    block(`Let's connect:

  LinkedIn   → github.com/Md-Azharuddin02
  GitHub     → github.com/Md-Azharuddin02

For direct profile links, use the social buttons on the main GitHub README.`);
  }

  function neofetch() {
    block(`             .--.          md-azharuddin
            |o_o |         ----------------
            |:_/ |         OS: Developer
           //   \\ \\        Shell: Portfolio Terminal
          (|     | )       Role: Full Stack Developer
         /'\\_   _/\\`\\       Stack: MERN + Next.js
         \\___)=(___/       AI: RAG + LLMs + Agents
                           Status: Building & Learning`);
  }

  function ls() {
    block(`about/
skills/
projects/
experience/
education/
ai/
contact/
recommend/`);
  }

  function answerQuestion(question) {
    const q = question.toLowerCase();

    if (!q) {
      line("Usage: ask <your question>", "error");
      line('Example: ask what technologies does azharuddin use?', "muted");
      return;
    }

    if (/(tech|stack|use|language|framework|frontend|backend)/.test(q)) {
      line("Answer:", "accent");
      line(`Azharuddin works mainly with ${PROFILE.stack.join(", ")}.`);
      line(`He's also exploring ${PROFILE.ai.join(", ")}.`);
      return;
    }

    if (/(ai|rag|llm|agent|mcp)/.test(q)) {
      line("Answer:", "accent");
      line("His current AI direction includes Python, FastAPI, RAG, vector databases, LLMs, AI agents and MCP.");
      return;
    }

    if (/(project|build|built|portfolio)/.test(q)) {
      line("Answer:", "accent");
      line(`Featured work includes ${PROFILE.projects.map(p => p.name).join(", ")}.`);
      return;
    }

    if (/(experience|job|work|developer)/.test(q)) {
      line("Answer:", "accent");
      line("He has 2+ years of experience building production web applications, with a strong focus on React, Node.js, APIs, authentication and real-time systems.");
      return;
    }

    if (/(contact|linkedin|github|reach)/.test(q)) {
      contact();
      return;
    }

    line("Answer:", "accent");
    line("I can answer questions about Azharuddin's profile, stack, projects, experience and AI journey.");
    line("Try: `ask what is his AI focus?`", "muted");
  }

  function run(raw) {
    const command = raw.trim();
    if (!command) return;

    line(`md-azharuddin@portfolio:~$ ${command}`, "command-line");

    const [name, ...rest] = command.split(/\s+/);
    const arg = rest.join(" ");
    const cmd = name.toLowerCase();

    switch (cmd) {
      case "help": help(); break;
      case "about": about(); break;
      case "whoami": line(`${PROFILE.name} — ${PROFILE.role}`); break;
      case "skills": skills(); break;
      case "projects": projects(); break;
      case "experience": experience(); break;
      case "education": education(); break;
      case "ai": ai(); break;
      case "recommend": recommend(); break;
      case "contact": contact(); break;
      case "neofetch": neofetch(); break;
      case "ls": line("about/  skills/  projects/  experience/  education/  ai/  contact/  recommend/"); break;
      case "pwd": line("/home/md-azharuddin/portfolio"); break;
      case "date": line(new Date().toString()); break;
      case "clear": output.replaceChildren(); break;
      case "ask": answerQuestion(arg); break;
      default:
        line(`command not found: ${name}`, "error");
        line("Type `help` to see available commands.", "muted");
    }

    scrollBottom();
  }

  function autocomplete() {
    const value = input.value.trim().toLowerCase();
    if (!value) return;
    const match = commands.find(c => c.startsWith(value));
    if (match) input.value = match;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    history = history.filter(item => item !== value);
    history.push(value);
    historyIndex = history.length;
    run(value);
    input.value = "";
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.max(0, historyIndex - 1);
      input.value = history[historyIndex] || "";
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!history.length) return;
      historyIndex = Math.min(history.length, historyIndex + 1);
      input.value = history[historyIndex] || "";
    } else if (event.key === "Tab") {
      event.preventDefault();
      autocomplete();
    } else if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") {
      event.preventDefault();
      output.replaceChildren();
    }
  });

  quickActions.forEach((button) => {
    button.addEventListener("click", () => {
      run(button.dataset.command);
      input.value = "";
      input.focus();
    });
  });

  clearButton.addEventListener("click", () => {
    output.replaceChildren();
    input.focus();
  });

  body.addEventListener("click", (event) => {
    if (event.target.tagName !== "BUTTON") input.focus();
  });

  banner();
  input.focus();
})();
