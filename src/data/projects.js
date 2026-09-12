export const projects = [
  {
    id: 1,
    title: "Premia",
    subtitle: "Real-Time Virtual Cinema Platform",
    category: ["Backend", "Client Work"],
    role: "Backend Developer",
    description: "Premia is a real-time virtual cinema platform involving ticket purchases, secure video playback and watch-party functionality.",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "Redis", 
      "WebSockets", "JWT", "Paystack", "Cloudinary", "Cloudflare Stream", "SendGrid"
    ],
    features: [
      "REST API development",
      "Authentication and authorization",
      "Passwordless magic-link authentication",
      "Admin authentication",
      "Ticket/payment integration with Paystack",
      "Secure media/playback authorization",
      "Cloudinary media handling",
      "WebSocket-based watch-party functionality",
      "Redis-based session enforcement and horizontal scaling",
      "Email workflows using SendGrid",
      "Database design and operations with MongoDB/Mongoose"
    ],
    image: "/assets/images/premia-logo.png",
    imageFit: "contain",
    repository: "",
    liveUrl: "",
    caseStudy: {
      overview: "Premia is a real-time virtual cinema platform involving ticket purchases, secure video playback and watch-party functionality. I worked on this project specifically as a Backend Developer to build out the API, authentication, and core logic.",
      myRole: "Backend Developer",
      backendResponsibilities: "Developing REST APIs, managing database operations, integrating third-party services, and building real-time WebSocket capabilities.",
      technicalArchitecture: "A Node.js/Express.js REST API interacting with MongoDB. It uses Redis for session management and WebSockets for real-time features. It integrates heavily with external APIs like Paystack and Cloudinary.",
      keyFeatures: "Passwordless magic-link auth, secure media authorization, watch-parties, and automated email workflows.",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, Redis, WebSockets, JWT, Paystack, Cloudinary, Cloudflare Stream, SendGrid",
      outcome: "Successfully implemented the backend architecture to support real-time video playback and secure ticket purchases."
    },
    featured: true
  },
  {
    id: 2,
    title: "MyLurah",
    subtitle: "Women’s Health & Wellness Tracking Platform",
    category: ["Backend"],
    role: "Backend Developer",
    description: "Contributed to the backend engineering of MyLurah during Version 2, implementing APIs, business logic, automated workflows and notification functionality for menstrual and pregnancy tracking.",
    technologies: [
      "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Node-Cron", "OneSignal", "Day.js"
    ],
    features: [
      "REST API development",
      "Backend business logic",
      "Menstrual tracking functionality",
      "Pregnancy tracking functionality",
      "Database operations",
      "Authentication",
      "Date and cycle calculations",
      "Scheduled jobs with Node-Cron",
      "Push notification workflows with OneSignal"
    ],
    image: "/assets/images/mylurah.png",
    imageFit: "object-fit",
    repository: "",
    liveUrl: "https://mylurah.com",
    caseStudy: {
      overview: "MyLurah is a comprehensive women's health and wellness tracking platform. I joined the project during Version 2 to focus on improving and expanding the backend architecture.",
      myRole: "Backend Developer",
      version2Contribution: "Joined the project during Version 2 to implement robust API endpoints, optimize business logic, and introduce automated workflows.",
      backendResponsibilities: "Developed APIs for tracking functionality, calculated date cycles, and scheduled push notifications for users.",
      technicalImplementation: "Used Express.js for the API layer and MongoDB for persistence. Implemented complex cycle calculations with Day.js and orchestrated scheduled notification jobs via Node-Cron and OneSignal.",
      technologies: "Node.js, Express.js, MongoDB, Mongoose, JWT, Node-Cron, OneSignal, Day.js"
    },
    featured: true
  },
  {
    id: 3,
    title: "Greenfield Explore",
    subtitle: "Corporate Oil & Gas Website",
    category: ["Full-Stack"],
    role: "Web Developer",
    description: "A professional corporate website developed for an oil & gas company, designed to establish a stronger digital presence and present the company's services and information professionally.",
    technologies: ["Corporate website", "Admin dashboard", "Responsive design", "SEO-focused"],
    features: [
      "Corporate website implementation",
      "Admin dashboard integration",
      "Content management functionality",
      "SEO-focused implementation",
      "Responsive design"
    ],
    image: "/assets/images/greenfield.jpg",
    repository: "",
    liveUrl: "https://www.greenfieldexplore.com", // Preserve if available in old project files
    caseStudy: {
      overview: "A professional corporate website developed for an oil & gas company, designed to establish a stronger digital presence and present the company's services and information professionally.",
      clientProject: "Yes",
      objective: "To deliver a professional, SEO-optimized digital presence for a corporate client.",
      myRole: "Web Developer",
      keyFeatures: "Responsive layouts, content management capabilities, and an admin dashboard.",
      implementation: "Developed the corporate website and integrated content management features with an AI-assisted development workflow.",
      outcome: "Delivered a modern, accessible web presence that met the client's corporate requirements."
    },
    featured: true
  },
  {
    id: 4,
    title: "Phishing Detection System",
    subtitle: "Machine Learning-Based Phishing Detection",
    category: ["AI / ML", "Full-Stack"],
    role: "Final-Year Project",
    description: "A machine learning system that uses 57 features to detect phishing websites, leveraging XGBoost for high accuracy and SHAP for explainability.",
    technologies: [
      "Python", "Flask", "XGBoost", "SHAP", "Optuna", "TailwindCSS"
    ],
    features: [
      "Accuracy: 94.79%",
      "Precision: 94.94%",
      "Recall: 94.86%",
      "F1 Score: 94.90%",
      "AUC: 94.79%"
    ],
    image: "/assets/images/phishingDetector.png",
    repository: "https://github.com/mildsam/Phishing-Detection-System",
    liveUrl: "",
    caseStudy: {
      problem: "Identifying malicious phishing websites automatically before users are compromised.",
      approach: "Used supervised machine learning on 57 distinct URL features to classify websites as legitimate or phishing.",
      machineLearningModel: "Utilized an XGBoost classifier for optimal performance on tabular feature data.",
      featureEngineering: "Extracted 57 features from URLs, such as string length, domain characteristics, and presence of specific characters.",
      explainability: "Integrated SHAP (SHapley Additive exPlanations) to interpret model predictions and highlight which features contributed most to a classification.",
      optimization: "Used Optuna for automated hyperparameter tuning to achieve the best possible model configuration.",
      results: "Achieved strong evaluation metrics on the test set: Accuracy: 94.79%, Precision: 94.94%, Recall: 94.86%, F1 Score: 94.90%, AUC: 94.79%."
    },
    featured: true
  },
  {
    id: 5,
    title: "EDU BOT: AI Educational Interface",
    subtitle: "AI Educational Interface",
    category: ["Earlier Projects"],
    role: "Frontend Developer",
    description: "A responsive Single Page Application (SPA) providing an interactive chat interface for educational assistance.",
    technologies: ["Tailwind CSS", "JavaScript", "SPA Logic"],
    features: [],
    image: "/assets/images/edubot.png",
    repository: "",
    liveUrl: "https://mildsam.github.io/Edu-bot/",
    caseStudy: {
      overview: "A frontend-focused project demonstrating UI implementation for an AI chat interface.",
    },
    featured: false
  },
  {
    id: 6,
    title: "Lumina E-Commerce",
    subtitle: "Modern E-Commerce Platform",
    category: ["Earlier Projects"],
    role: "Frontend Developer",
    description: "A responsive Single Page E-Commerce application built with vanilla JavaScript for state management.",
    technologies: ["Vanilla JS", "Tailwind CSS", "SPA"],
    features: [],
    image: "/assets/images/e-commerceProject.png",
    repository: "",
    liveUrl: "https://mildsam.github.io/E-commerce_demo/",
    caseStudy: {
      overview: "Implemented a shopping cart, product filtering, and a simulated checkout flow entirely on the client side.",
    },
    featured: false
  },
  {
    id: 7,
    title: "Nexus Analytics Dashboard",
    subtitle: "Analytics Dashboard UI",
    category: ["Earlier Projects"],
    role: "Frontend Developer",
    description: "A functional dashboard featuring user authentication, real-time simulated KPIs, SVG charting, and theme switching.",
    technologies: ["Tailwind CSS", "JavaScript", "SVG Charting"],
    features: [],
    image: "/assets/images/dashboard.png",
    repository: "",
    liveUrl: "https://mildsam.github.io/Nexus_Dashboard/",
    caseStudy: {
      overview: "A demonstration of complex client-side interactions and dashboard visualization techniques.",
    },
    featured: false
  }
];
