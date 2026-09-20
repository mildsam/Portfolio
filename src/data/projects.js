export const projects = [
  {
    id: 1,
    title: "Premia",
    subtitle: "Real-Time Virtual Cinema Platform",
    category: ["Backend", "Client Work"],
    role: "Backend Developer",
    description:
      "A real-time virtual cinema platform supporting ticket purchases, secure video playback, watch parties, and admin functionality.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Redis",
      "WebSockets",
      "JWT",
      "Paystack",
      "Cloudinary",
      "Cloudflare Stream",
      "SendGrid"
    ],
    features: [
      "REST API development",
      "Authentication and authorization",
      "Passwordless magic-link authentication",
      "Admin authentication",
      "Ticket and payment integration with Paystack",
      "Payment reference handling and duplicate-payment protection",
      "Secure video playback authorization",
      "Cloudinary media handling",
      "WebSocket-based watch-party functionality",
      "Redis-based session enforcement",
      "Email workflows using SendGrid",
      "Database operations with MongoDB and Mongoose"
    ],
    image: "/assets/images/premia-logo.png",
    imageFit: "contain",
    repository: "",
    liveUrl: "",
    caseStudy: {
      overview:
        "Premia is a real-time virtual cinema platform involving ticket purchases, secure video playback, and watch-party functionality. I worked on the project as a Backend Developer, focusing on APIs, authentication, payments, and core backend functionality.",
      myRole: "Backend Developer",
      backendResponsibilities:
        "Developed REST APIs, implemented backend business logic, managed MongoDB operations, integrated third-party services, and worked on real-time WebSocket functionality.",
      technicalArchitecture:
        "A Node.js and Express.js REST API connected to MongoDB. Redis was used for session enforcement, while WebSockets supported real-time watch-party features. The backend also integrated Paystack, Cloudinary, Cloudflare Stream, and SendGrid.",
      keyFeatures:
        "Passwordless magic-link authentication, secure video playback, Paystack payment processing, watch parties, session enforcement, and automated email workflows.",
      technologies:
        "Node.js, Express.js, MongoDB, Mongoose, Redis, WebSockets, JWT, Paystack, Cloudinary, Cloudflare Stream, SendGrid",
      outcome:
        "Implemented backend functionality supporting ticket purchases, secure video access, user authentication, and real-time watch-party features."
    },
    featured: true
  },

  {
    id: 2,
    title: "MyLurah",
    subtitle: "Women’s Health & Wellness Mobile Application",
    category: ["Backend"],
    role: "Backend Developer",
    description:
      "Contributed to the backend of MyLurah during Version 2, implementing APIs, business logic, tracking functionality, automated workflows, and push notifications for a mobile application.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Node-Cron",
      "OneSignal",
      "Day.js"
    ],
    features: [
      "REST API development",
      "Backend business logic",
      "Menstrual cycle tracking",
      "Pregnancy tracking",
      "Cycle and date calculations",
      "Database operations",
      "Authentication",
      "Scheduled background jobs",
      "Push notification workflows",
      "Medical appointment functionality"
    ],
    image: "/assets/images/mylurah.png",
    imageFit: "object-fit",
    repository: "",
    liveUrl: "",
    caseStudy: {
      overview:
        "MyLurah is a women’s health and wellness mobile application. I joined the project during Version 2 and worked on the backend services supporting menstrual and pregnancy tracking, appointments, reminders, and notifications.",
      myRole: "Backend Developer",
      version2Contribution:
        "Joined during Version 2 to improve the backend structure, implement API endpoints, and expand the application's tracking and notification functionality.",
      backendResponsibilities:
        "Developed APIs and backend logic for menstrual and pregnancy tracking, appointments, reminders, and user data.",
      technicalImplementation:
        "Used Express.js for the API layer and MongoDB for data storage. Day.js was used for date and cycle calculations, while Node-Cron handled scheduled jobs and OneSignal was used for push notifications.",
      keyFeatures:
        "Menstrual and pregnancy tracking, cycle calculations, appointment functionality, scheduled reminders, and push notification workflows.",
      technologies:
        "Node.js, Express.js, MongoDB, Mongoose, JWT, Node-Cron, OneSignal, Day.js"
    },
    featured: true
  },

  {
    id: 3,
    title: "Greenfield Explore",
    subtitle: "Corporate Oil & Gas Website",
    category: ["Web", "Client Work"],
    role: "Web Developer",
    description:
      "A corporate website developed for an oil and gas company to present its services, company information, and online presence.",
    technologies: [
      "Corporate Website",
      "Admin Dashboard",
      "Content Management",
      "Responsive Design",
      "SEO"
    ],
    features: [
      "Corporate website implementation",
      "Admin dashboard",
      "Content management functionality",
      "SEO-focused implementation",
      "Responsive design",
      "Domain and email integration"
    ],
    image: "/assets/images/greenfield.jpg",
    imageFit: "cover",
    repository: "",
    liveUrl: "https://www.greenfieldexplore.com",
    caseStudy: {
      overview:
        "Greenfield Explore is a corporate website developed for an oil and gas company to establish its online presence and present its services and company information.",
      clientProject: "Yes",
      objective:
        "To deliver a professional corporate website with content management functionality and an SEO-focused structure.",
      myRole: "Web Developer",
      keyFeatures:
        "Responsive website, content management functionality, admin dashboard, and SEO-focused implementation.",
      implementation:
        "Developed the corporate website and integrated content management functionality using an AI-assisted development workflow.",
      outcome:
        "Delivered and deployed the company's corporate website with administrative content management functionality."
    },
    featured: true
  },

  {
    id: 4,
    title: "Phishing Detection System",
    subtitle: "Machine Learning-Based Phishing Detection",
    category: ["AI / ML"],
    role: "Final-Year Project",
    description:
      "A machine learning system that uses 57 URL-based features to detect phishing websites, with XGBoost for classification and SHAP for model explainability.",
    technologies: [
      "Python",
      "Flask",
      "XGBoost",
      "SHAP",
      "Optuna",
      "Tailwind CSS"
    ],
    features: [
      "57 URL-based features",
      "XGBoost classification",
      "SHAP-based model explainability",
      "Optuna hyperparameter optimization",
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
      problem:
        "Identifying potentially malicious phishing websites automatically before users interact with them.",
      approach:
        "Used supervised machine learning on 57 URL-based features to classify websites as legitimate or phishing.",
      machineLearningModel:
        "Used an XGBoost classifier for classification on the extracted URL features.",
      featureEngineering:
        "Extracted 57 features from URLs, including string characteristics, domain information, and the presence of specific characters.",
      explainability:
        "Integrated SHAP to interpret model predictions and identify features that contributed to individual classifications.",
      optimization:
        "Used Optuna for automated hyperparameter tuning.",
      results:
        "The model achieved 94.79% accuracy, 94.94% precision, 94.86% recall, 94.90% F1 score, and 94.79% AUC on the reported evaluation."
    },
    featured: true
  },

  {
    id: 5,
    title: "Zeqah",
    subtitle: "Educational Support Platform",
    category: ["Web", "Volunteer"],
    role: "Lead Web Developer",
    description:
      "A responsive educational support platform built to provide student admission guidance and IT skill development resources.",
    technologies: [
      "HTML5",
      "JavaScript",
      "Tailwind CSS",
      "Firebase Authentication",
      "Firestore"
    ],
    features: [
      "Custom CMS for blog management",
      "Markdown editing and live preview",
      "Blog search and filtering",
      "Lead-capture forms",
      "Admin dashboard for submissions"
    ],
    image: "/assets/images/Zeqah.jpg",
    imageFit: "cover",
    repository: "",
    liveUrl: "",
    caseStudy: {
      overview:
        "Zeqah is an educational support platform that provides student admission guidance and IT skill development resources. I volunteered as the Lead Web Developer to build the platform and its custom CMS.",
      myRole: "Lead Web Developer (Volunteer)",
      technicalImplementation:
        "Built a custom CMS using Firebase Authentication and Firestore. Implemented Markdown editing with live preview, blog search and filtering, lead-capture forms, and an admin dashboard for submissions.",
      keyFeatures:
        "Custom CMS, Markdown editing, live preview, blog search and filtering, lead capture, and admin dashboard.",
      technologies:
        "HTML5, JavaScript (ES6+), Tailwind CSS, Firebase Authentication, Firestore"
    },
    featured: true
  }
];