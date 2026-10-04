// All portfolio content lives here. Edit this file to update the site.
// Everything below comes from the resume; nothing is invented.

export const profile = {
  name: "Madheshwarr MM",
  title: "Software Test Engineer",
  positioning:
    "Tester with three years of manual and automation testing, an ISTQB certification, and research into how Generative AI is changing the way software gets tested.",
  location: "Auckland, New Zealand",
  email: "madheshwarr.mm@gmail.com",
  phone: "022 396 2659",
  phoneHref: "+64223962659",
  resume: "/Madheshwarr_MM_Resume.pdf",
  // Add LinkedIn / GitHub here when you have them, e.g. { label: "LinkedIn", href: "https://..." }
  links: [] as { label: string; href: string }[],
  about: [
    "I'm a software testing professional with three years of experience in manual and automation testing, across the full testing lifecycle in Agile teams. At Virtusa I built a Selenium and Java automation framework and cut manual regression effort by approximately 40%.",
    "I hold an ISTQB Foundation Level certification and a Master of Applied Technologies in Computing from Unitec in Auckland. My research interviewed 17 New Zealand testing professionals on how Generative AI is used in testing, and it was selected for the 2025 ITP Research Symposium.",
    "I'm looking for a software test engineer role in a technology team that cares about reliable releases and is open to AI-assisted testing done with proper human validation.",
  ],
};

export const highlights = [
  { label: "Experience", value: "3 years in testing, manual and automation" },
  { label: "Certified", value: "ISTQB Foundation Level" },
  { label: "Automation", value: "About 40% less manual regression effort" },
  { label: "AI-Assisted Testing", value: "Research-driven understanding of modern testing practices;" },
];

export const work = [
  {
    name: "Selenium automation framework for a banking system",
    context: "Virtusa Consulting Services · 2022–2024",
    problem: "Regression testing was largely manual and took effort across every release cycle.",
    solution:
      "Implemented a Page Object Model framework with Selenium WebDriver, Java, TestNG and Maven, and automated end-to-end checks of complex UI workflows.",
    contribution:
      "Built the framework and ran the automated end-to-end suites, validating business logic and data integrity across multiple releases.",
    outcome:
      "Reduced manual regression effort by approximately 40%, with better test coverage, release efficiency and confidence in quality.",
    tech: ["Java", "Selenium WebDriver", "TestNG", "Maven", "Page Object Model"],
  },
  {
    name: "The Impact of Generative AI on Software Testing : A Qualitative Approach",
    context: "Academic Qualitative research · Feb–Nov 2025",
    problem:
      "How are testing professionals in New Zealand actually using Generative AI, and where does it fall short?",
    solution:
      "Interviewed 17 testing professionals, from Test Engineers to Managers, covering test generation, automation, defect analysis, documentation and human-AI collaboration.",
    contribution: "Conducted the study and the interviews.",
    outcome:
      "Selected after peer review to present at the 2025 ITP Research Symposium. Built a practical view of understanding of where tools like ChatGPT, GitHub Copilot and Claude help testing, and where their limits, risks and need for human validation sit especially in New Zealand context.",
    tech: ["Qualitative research", "Interviews", "GenAI in testing"],
  },
  {
    name: "Airline ticket booking application testing",
    context: "Virtusa Delivery Internship · 2021–2022",
    problem: "An airline booking application built by internal developers needed to be tested against its requirements.",
    solution:
      "Designed test scenarios and test cases from the requirements, then executed them manually with the required input data across multiple web browsers.",
    contribution: "Designed the test scenarios and test cases and executed them manually.",
    outcome:
      "Gained hands-on grounding in test planning, strategy, case design, execution and defect reporting.",
    tech: ["Manual testing", "Test case design", "Cross-browser testing"],
  },
];

export const experience = [
  {
    role: "Associate Software Engineer, Software Quality Assurance",
    company: "Virtusa Consulting Services",
    period: "May 2022 – Jul 2024",
    points: [
      "Reduced manual regression effort by approximately 40% through targeted test automation, improving coverage and release efficiency.",
      "Implemented a Page Object Model automation framework using Selenium WebDriver, Java, TestNG and Maven for a banking system.",
      "Performed functional, regression, integration and end-to-end testing on web applications to support reliable releases.",
      "Ran end-to-end automation of complex UI workflows, validating business logic and data integrity across multiple release cycles.",
      "Worked with developers, business analysts and Scrum Masters through sprint planning, stand-ups, demos and retrospectives in 4-week Agile sprints.",
      "Started as an on-the-job trainee learning Java, SQL databases, STLC foundations and automation frameworks.",
    ],
  },
  {
    role: "Delivery Intern, QA Engineer",
    company: "Virtusa Consulting Services",
    period: "Sep 2021 – Apr 2022",
    points: [
      "Led and coordinated a cross-functional internship team of business analysts, developers and testers: task allocation, progress tracking, communication and reporting.",
      "Tested an airline ticket booking application against its requirements, designing scenarios and cases and executing them manually in multiple browsers.",
      "Learned test planning, test strategy, test case design, execution and defect reporting.",
    ],
  },
];

export const skills = [
  { group: "Test automation", items: ["Selenium WebDriver", "Java Basics", "TestNG", "Maven", "Page Object Model"] },
  {
    group: "Testing practice",
    items: [
      "Functional testing",
      "Regression testing",
      "Integration testing",
      "End-to-end testing",
      "Test planning and strategy",
      "Test case design",
      "Defect reporting",
      "Cross-browser testing",
    ],
  },
  { group: "Process", items: ["Agile / Scrum", "STLC", "Sprint planning", "Stand-ups, demos, retrospectives"] },
  { group: "Databases", items: ["SQL"] },
  {
    group: "Generative AI in QA",
    items: ["ChatGPT", "GitHub Copilot", "Claude", "Test generation", "Defect analysis", "Human validation of AI output"],
  },
  { group: "Collaboration", items: ["Cross-functional teamwork", "Team coordination", "Public speaking"] },
];

export const education = [
  {
    title: "Master of Applied Technologies, Computing",
    place: "Unitec, Auckland, New Zealand",
    period: "Jul 2024 – Feb 2026",
  },
  {
    title: "Bachelor of Technology, Information Technology",
    place: "Anna University, Chennai, India",
    period: "Aug 2018 – May 2022",
  },
];

export const certifications = [
  { title: "ISTQB Certified Foundational Level Software Tester", period: "Apr 2022" },
  { title: "NPTEL Certification in Software Testing", period: "Sep 2020" },
];

export const research = [
  {
    title: "ITP Research Symposium 2025, Research Presenter",
    period: "Nov 2025",
    text: "Selected to represent Unitec after peer review of my research, and presented the findings to an academic and industry audience.",
  },
  {
    title: "Three-Minute to Impact, Research Presentation",
    period: "Oct 2025",
    text: "Presented my research in the university's Three-Minute to Impact research presentation.",
  },
  {
    title: "International Student Connector, Unitec",
    period: "Jan – Nov 2025",
    text: "Led student teams across campus events and orientation, supported new and international students, and spoke at student events.",
  },
];
