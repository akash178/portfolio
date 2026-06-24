// ============================================
// SHARED PROJECT DATA
// ============================================
const projects = [
  {
    id: "esop",
    title: "ESOP",
    category: ["web", "ui"],
    description:
      "Redesigned employee share management experience with simplified workflows and improved usability.",
    tags: ["Web", "Finance"],
    image: "assets/images/projects/esop/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "Internal Project",
    tools: "Figma, React",
    overview: {
      problem:
        "The existing ESOP platform was built on an outdated technology stack, resulting in slow performance, poor usability, and an overall frustrating user experience for employees and administrators.",
      solution:
        "Redesigned and rebuilt the platform with a modern technology stack and completely new user interface, delivering a faster, more intuitive, and user-friendly experience.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Research & Discovery",
        description:
          "Studied financial dashboard designs on Figma, Dribbble, and Behance. Conducted stakeholder interviews to gather business requirements and mapped complex equity management user flows.",
      },
      {
        icon: "✏️",
        title: "Wireframing & Architecture",
        description:
          "Created low-fidelity wireframes to map out information architecture, ensuring heavy financial data remained readable and transaction flows were clear.",
      },
      {
        icon: "🎨",
        title: "UI Design & Component System",
        description:
          "Designed complete user and admin interfaces in Figma with a dedicated design system consisting of reusable components, accessible typographic hierarchies, and dual color themes.",
      },
      {
        icon: "✅",
        title: "Usability Testing",
        description:
          "Validated prototype designs with administrative internal stakeholders at every milestone to ensure compliance, accuracy, and alignment with business goals.",
      },
      {
        icon: "💻",
        title: "Frontend Development",
        description:
          "Developed the semantic, fully responsive frontend using React based strictly on the approved Figma designs.",
      },
      {
        icon: "🚀",
        title: "Deployment & Handover",
        description:
          "Optimized the codebase, pushed production-ready code to Bitbucket, and closely collaborated with the backend engineering team for seamless API integration.",
      },
    ],
    features: [
      {
        icon: "📊",
        title: "Dashboard Overview",
        description:
          "Clear visualization of employee shareholdings and portfolio value at a glance.",
      },
      {
        icon: "💼",
        title: "Easy Transactions",
        description:
          "Simplified workflows for buying, selling, and managing employee shares.",
      },
      {
        icon: "📈",
        title: "Portfolio Analytics",
        description:
          "Detailed analytics and insights about ESOP performance and trends.",
      },
    ],
    results: [
      { value: "+60%", label: "User Adoption" },
      { value: "80%", label: "Task Success Rate" },
      { value: "4.6/5", label: "User Satisfaction" },
    ],
    gallery: [
      "assets/images/projects/esop/1.png",
      "assets/images/projects/esop/2.png",
      "assets/images/projects/esop/3.png",
      "assets/images/projects/esop/4.png",
      "assets/images/projects/esop/5.png",
      "assets/images/projects/esop/6.png",
    ],
  },
  {
    id: "whatsapp-db",
    title: "TJC WhatsApp DB",
    category: ["web", "ui"],
    description:
      "Analytics dashboard that monitors customer WhatsApp interactions, concerns, and service performance.",
    tags: ["Web", "Dashboard"],
    image: "assets/images/projects/whatsapp-db/mockup-1.jpg",
    role: "UI/UX Designer & Developer",
    duration: "3 months",
    client: "TJC Group",
    tools: "Figma, NextJs, Apex Charts, MSSQL",
    overview: {
      problem:
        "Customer service teams lacked a centralized system to monitor WhatsApp conversations, customer concerns, and service performance, making support management inefficient.",
      solution:
        "Designed and developed a unified analytics dashboard that consolidates WhatsApp conversations, sentiment insights, and operational metrics into a single platform.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "User Research & Benchmarking",
        description:
          "Explored customer analytics dashboard patterns and enterprise reporting systems to understand support agent pain points and contextual WhatsApp metadata requirements.",
      },
      {
        icon: "🧱",
        title: "Data Architecture & Wireframing",
        description:
          "Drafted layouts focusing heavily on data density, grouping complex conversation logs and metric cards logically for rapid scannability.",
      },
      {
        icon: "🎨",
        title: "High-Fidelity Design",
        description:
          "Designed the complete dashboard UI in Figma, utilizing reusable chart components, consistent visual hierarchy, and precise data visualization layouts.",
      },
      {
        icon: "✅",
        title: "Stakeholder Validation",
        description:
          "Conducted structured design reviews with TJC Group stakeholders to evaluate data accuracy configurations and refine filtering controls.",
      },
      {
        icon: "💻",
        title: "Full-Stack Development",
        description:
          "Built the production frontend using Next.js, engineered complex interactive data visualizations via Apex Charts, and integrated database queries with MSSQL.",
      },
      {
        icon: "🚀",
        title: "Production Handover",
        description:
          "Documented data models and component architecture, committed clean code to Bitbucket, and deployed features to the team environment.",
      },
    ],
    features: [
      {
        icon: "💬",
        title: "Conversation Monitoring",
        description:
          "Real-time tracking of customer WhatsApp conversations and interactions.",
      },
      {
        icon: "📊",
        title: "Analytics & Insights",
        description:
          "Detailed analytics on response times, customer satisfaction, and service trends.",
      },
      {
        icon: "🎯",
        title: "Performance Metrics",
        description:
          "Track team performance, resolution rates, and customer satisfaction scores.",
      },
    ],
    results: [
      { value: "+75%", label: "Response Efficiency" },
      { value: "50%", label: "Support Cost Reduction" },
      { value: "4.7/5", label: "Customer Satisfaction" },
    ],
    gallery: [
      "assets/images/projects/whatsapp-db/1.png",
      "assets/images/projects/whatsapp-db/2.png",
      "assets/images/projects/whatsapp-db/3.png",
      "assets/images/projects/whatsapp-db/4.png",
      "assets/images/projects/whatsapp-db/5.png",
      "assets/images/projects/whatsapp-db/6.png",
    ],
  },
  {
    id: "shopping-assistant",
    title: "Shopping Assistant",
    category: ["ui"],
    description:
      "AI-powered conversational assistant helping customers manage orders, payments, and support requests.",
    tags: ["Web", "Ecommerce"],
    image: "assets/images/projects/shopping-assistant/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "1.5 months",
    client: "ShopLC",
    tools: "HTML, CSS, JS",
    overview: {
      problem:
        "Customers struggled to navigate the ShopLC platform, discover relevant products, and manage their orders efficiently, while customer support agents faced challenges handling large volumes of inquiries.",
      solution:
        "Developed an intelligent conversational shopping assistant that guides users through product discovery, order management, and support interactions through a natural chat experience.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "UX Review & Flow Analysis",
        description:
          "Analyzed the provided UI designs alongside e-commerce chatbot conventions to evaluate intuitive messaging patterns, bubble layouts, and quick-reply placements.",
      },
      {
        icon: "💻",
        title: "Interface Development",
        description:
          "Implemented pixel-perfect responsive layouts utilizing semantic HTML, modular CSS, Bootstrap grids, and dynamic vanilla JavaScript for fluid animations.",
      },
      {
        icon: "✅",
        title: "Integration & Testing",
        description:
          "Integrated the custom frontend interface with core AI backend endpoints; heavily validated critical conversational customer journeys, cart checkout transitions, and fallback states.",
      },
      {
        icon: "🚀",
        title: "Platform Handover",
        description:
          "Packaged lightweight, dependency-optimized code blocks and handed them over directly to the ShopLC development teams for seamless native integration.",
      },
    ],
    features: [
      {
        icon: "🤖",
        title: "AI Conversations",
        description:
          "Natural language conversations for product discovery and support.",
      },
      {
        icon: "🛒",
        title: "Smart Recommendations",
        description:
          "Personalized product recommendations based on browsing and purchase history.",
      },
      {
        icon: "💳",
        title: "Order Management",
        description:
          "Easy order tracking, returns, and payment issue resolution through chat.",
      },
    ],
    results: [
      { value: "-35%", label: "Cart Abandonment" },
      { value: "+45%", label: "Customer Engagement" },
      { value: "3.2s", label: "Avg Response Time" },
    ],
    gallery: [
      "assets/images/projects/shopping-assistant/1.png",
      "assets/images/projects/shopping-assistant/2.png",
      "assets/images/projects/shopping-assistant/3.png",
    ],
  },
  {
    id: "voc",
    title: "Voice of Customer",
    category: ["web"],
    description:
      "Customer insights dashboard that analyzes feedback, sentiments, and trends to support business decisions.",
    tags: ["Web", "Dashboard"],
    image: "assets/images/projects/voc/mockup-1.jpg",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2.5 months",
    client: "Internal Project",
    tools: "Figma, NextJS, MSSQL, Apex Charts",
    overview: {
      problem:
        "Customer feedback was scattered across multiple channels and Excel-based processes, making it difficult for management to gain actionable insights and make informed decisions.",
      solution:
        "Created a centralized Voice of Customer platform that aggregates feedback, performs sentiment analysis, and provides business intelligence through interactive dashboards.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Research & Workflows",
        description:
          "Studied industry-standard customer analytics and complex NLP data aggregation dashboards to define reporting hierarchies and sentiment scoring workflows.",
      },
      {
        icon: "📐",
        title: "Information Architecture",
        description:
          "Created an optimized navigational flow mapping how chaotic omnichannel data streams merge into organized visual metrics.",
      },
      {
        icon: "🎨",
        title: "UI Design System",
        description:
          "Designed the complete responsive dashboard ecosystem in Figma, establishing micro-interactions, distinct sentiment color indicators, and cohesive styling presets.",
      },
      {
        icon: "✅",
        title: "Stakeholder Review",
        description:
          "Reviewed active prototypes with operational and management stakeholders to iteratively tune user permissions, data groupings, and metric filter criteria.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Engineered the responsive dashboard application via Next.js, linking layout controls with secure database endpoints and generating rich visualizations using Apex Charts.",
      },
      {
        icon: "🚀",
        title: "Project Delivery",
        description:
          "Pushed structured code repositories to Bitbucket, prepared detailed architecture documentation, and transferred production details to the engineering wing.",
      },
    ],
    features: [
      {
        icon: "📣",
        title: "Feedback Aggregation",
        description:
          "Centralized collection of customer feedback from multiple sources and channels.",
      },
      {
        icon: "😊",
        title: "Sentiment Analysis",
        description:
          "AI-powered sentiment analysis to understand customer emotions and satisfaction levels.",
      },
      {
        icon: "📊",
        title: "Trend Analytics",
        description:
          "Identify trends, patterns, and emerging issues from customer feedback over time.",
      },
    ],
    results: [
      { value: "+40%", label: "Decision Accuracy" },
      { value: "500+", label: "Feedback Sources" },
      { value: "92%", label: "Sentiment Accuracy" },
    ],
    gallery: [
      "assets/images/projects/voc/1.png",
      "assets/images/projects/voc/2.png",
      "assets/images/projects/voc/3.png",
      "assets/images/projects/voc/4.png",
      "assets/images/projects/voc/5.png",
      "assets/images/projects/voc/6.png",
    ],
  },
  {
    id: "genai",
    title: "GEN AI CMS",
    category: ["web"],
    description:
      "AI-powered content management system that generates and publishes product title and content automatically",
    tags: ["Web", "AI"],
    image: "assets/images/projects/genai/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "ShopLC",
    tools: "NextJS",
    overview: {
      problem:
        "Manual creation of product titles and descriptions required significant effort, slowing content production and increasing operational costs.",
      solution:
        "Developed an AI-powered CMS that automatically generates product titles, descriptions, and marketing content, significantly improving content production efficiency.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "UX Flow Discovery",
        description:
          "Evaluated common generative AI prompting interfaces and catalog systems to conceptualize a fast, batch-oriented user flow optimized for internal content writers.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Translated complex generation screens and side-by-side editing panes into fully responsive, semantic, and interactive Next.js interfaces.",
      },
      {
        icon: "✅",
        title: "API Integration & Testing",
        description:
          "Wired frontend UI hooks into LLM backend infrastructure, conducting strict testing on asynchronous processing behaviors, streaming responses, and generation error bounds.",
      },
      {
        icon: "🚀",
        title: "DevOps Deployment",
        description:
          "Packaged containerized builds and transferred the finalized code ecosystem over to the ShopLC DevOps team for staging rollout and monitoring.",
      },
    ],
    features: [
      {
        icon: "🤖",
        title: "AI Content Generation",
        description:
          "Automatically generate compelling product titles and descriptions using AI.",
      },
      {
        icon: "📝",
        title: "Smart Editing Tools",
        description:
          "Intuitive interface for reviewing, editing, and refining AI-generated content.",
      },
      {
        icon: "⚡",
        title: "Batch Processing",
        description:
          "Process hundreds of products simultaneously with AI content generation.",
      },
    ],
    results: [
      { value: "-80%", label: "Content Creation Time" },
      { value: "1000+", label: "Products/Month" },
      { value: "+35%", label: "Conversion Improvement" },
    ],
    gallery: [
      "assets/images/projects/genai/1.png",
      "assets/images/projects/genai/2.png",
      "assets/images/projects/genai/3.png",
      "assets/images/projects/genai/4.png",
      "assets/images/projects/genai/5.png",
      "assets/images/projects/genai/6.png",
    ],
  },
  {
    id: "lc-miles",
    title: "LC Miles",
    category: ["web"],
    description:
      "AI-powered logistics platform that identifies cost-effective transportation options to save time and expenses.",
    tags: ["Web"],
    image: "assets/images/projects/lc-miles/mockup-1.jpg",
    role: "UI/UX Designer & Developer",
    duration: "3 months",
    client: "ShopLC",
    tools: "NextJs, MSSQL",
    overview: {
      problem:
        "Logistics teams spent considerable time manually comparing carriers and shipping routes, resulting in inefficiencies, higher costs, and delivery delays.",
      solution:
        "Created a logistics intelligence platform that analyzes route and carrier data to recommend the most cost-effective and efficient shipping options.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Requirement Gathering",
        description:
          "Interviewed logistics coordinators to map parameters required for precise routing, such as shipping volume restrictions, transit SLAs, and carrier rates.",
      },
      {
        icon: "💡",
        title: "AI-Assisted Development",
        description:
          "Designed and rapidly implemented an interactive single-page application dashboard using Next.js, leveraging tools like Gemini and ChatGPT to fast-track boilerplate layout rendering.",
      },
      {
        icon: "🔗",
        title: "API Endpoint Integration",
        description:
          "Mapped and bound the UI elements to live Python-based geographic route optimization engines and machine learning APIs engineered by the backend architecture squad.",
      },
      {
        icon: "✅",
        title: "E2E Testing & Validation",
        description:
          "Executed extensive end-to-end validation tracking lifecycle runs of route calculations, historical pricing comparisons, and data edge cases.",
      },
      {
        icon: "🚀",
        title: "Deployment Coordination",
        description:
          "Delivered optimized codebases directly to the specialized ShopLC DevOps division for reliable containerized server implementation.",
      },
    ],
    features: [
      {
        icon: "🚚",
        title: "Smart Route Optimization",
        description:
          "AI-powered algorithm that finds the most cost-effective and efficient shipping routes.",
      },
      {
        icon: "💰",
        title: "Cost Comparison",
        description:
          "Compare rates from multiple carriers and select the best option for each shipment.",
      },
      {
        icon: "📍",
        title: "Real-time Tracking",
        description:
          "Track shipments in real-time with accurate delivery estimates and notifications.",
      },
    ],
    results: [
      { value: "-25%", label: "Shipping Costs" },
      { value: "+40%", label: "On-time Delivery" },
      { value: "500+", label: "Carriers Integrated" },
    ],
    gallery: [
      "assets/images/projects/lc-miles/1.png",
      "assets/images/projects/lc-miles/2.png",
    ],
  },
  {
    id: "innov8",
    title: "Innov8",
    category: ["web"],
    description:
      "Idea management platform enabling employees to submit, explore, and implement innovations across the organization.",
    tags: ["Web"],
    image: "assets/images/projects/innov8/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "Internal Project",
    tools: "HTML, CSS, Bootstrap, JavaScript",
    overview: {
      problem:
        "Employee ideas were often lost due to the absence of a structured platform for submitting, evaluating, and tracking innovation initiatives.",
      solution:
        "Created an innovation management platform that encourages idea sharing, enables transparent evaluation, and tracks implementation progress.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "UX Review & Gamification",
        description:
          "Analyzed internal crowd-sourcing solutions and structured submission loops to map out clear social voting systems and progression milestones.",
      },
      {
        icon: "💻",
        title: "UI Implementation",
        description:
          "Coded clean, accessible, and responsive layouts matching provided mockups, utilizing semantic HTML5, custom CSS styling, Bootstrap components, and modular JavaScript.",
      },
      {
        icon: "✅",
        title: "Flow Validation",
        description:
          "Conducted rigorous verification across critical path journeys, assessing form validation limits, comment streams, and administrative tracking pipelines.",
      },
      {
        icon: "🚀",
        title: "Engineering Delivery",
        description:
          "Handed over cleanly commented, scalable web assets directly to the corporate engineering department for final application tier attachment.",
      },
    ],
    features: [
      {
        icon: "💡",
        title: "Idea Submission",
        description:
          "Simple and engaging interface for employees to submit and describe their ideas.",
      },
      {
        icon: "👥",
        title: "Collaborative Evaluation",
        description:
          "Transparent voting and feedback system for evaluating and improving ideas.",
      },
      {
        icon: "📊",
        title: "Implementation Tracking",
        description:
          "Track approved ideas through development and measure their impact.",
      },
    ],
    results: [
      { value: "500+", label: "Ideas Submitted" },
      { value: "40%", label: "Idea Implementation Rate" },
      { value: "4.8/5", label: "Platform Rating" },
    ],
    gallery: [
      "assets/images/projects/innov8/1.png",
      "assets/images/projects/innov8/2.png",
      "assets/images/projects/innov8/3.png",
      "assets/images/projects/innov8/4.png",
      "assets/images/projects/innov8/5.png",
      "assets/images/projects/innov8/6.png",
    ],
  },
  {
    id: "lms",
    title: "LMS",
    category: ["ui"],
    description:
      "Learning management platform enabling employees to access courses, assessments, and training programs.",
    tags: ["Web", "Education"],
    image: "assets/images/projects/lms/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2.5 months",
    client: "Internal Project",
    tools: "Figma",
    overview: {
      problem:
        "The organization relied on a third-party learning platform, resulting in recurring costs and limited customization options for employee training programs.",
      solution:
        "Designed an internal Learning Management System that centralizes training resources, tracks progress, and promotes continuous employee development.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Comparative Research",
        description:
          "Reviewed industry-leading LMS solutions and academic interfaces across Figma, Dribbble, and Behance to isolate core mechanics for dashboard accessibility and retention tracking.",
      },
      {
        icon: "📐",
        title: "User Experience Mapping",
        description:
          "Mapped student learning pathways and course creation cycles for corporate instructors, balancing simple interaction loops with performance metric reporting.",
      },
      {
        icon: "🎨",
        title: "UI Design & Libraries",
        description:
          "Created modular design files in Figma outlining intuitive course library lists, quiz view cards, user progress states, and complete atomic component libraries.",
      },
      {
        icon: "👥",
        title: "Stakeholder Critiques",
        description:
          "Conducted iterative, high-fidelity user walkthrough loops with HR training executives to verify navigation hierarchies and customize layout adjustments.",
      },
      {
        icon: "🚀",
        title: "Design Handover",
        description:
          "Delivered optimized design specification packages containing fully documented screens, tokens, and style definitions directly to the internal development teams.",
      },
    ],
    features: [
      {
        icon: "📚",
        title: "Course Library",
        description:
          "Comprehensive collection of organized courses covering various skills and topics.",
      },
      {
        icon: "📊",
        title: "Progress Tracking",
        description:
          "Visual progress indicators and detailed analytics of learning journey.",
      },
      {
        icon: "✅",
        title: "Certification",
        description:
          "Automatically generated certificates upon course completion.",
      },
    ],
    results: [
      { value: "1000+", label: "Active Users" },
      { value: "+65%", label: "Course Completion" },
      { value: "200+", label: "Courses Available" },
    ],
    gallery: [
      "assets/images/projects/lms/1.png",
      "assets/images/projects/lms/2.png",
      "assets/images/projects/lms/3.png",
      "assets/images/projects/lms/4.png",
      "assets/images/projects/lms/5.png",
      "assets/images/projects/lms/6.png",
    ],
  },
  {
    id: "gemstone-inventory",
    title: "Gemstone Inventory Planner",
    category: ["web"],
    description:
      "Inventory planning solution that helps manage gemstone stock levels based on demand and sales insights.",
    tags: ["Web"],
    image: "assets/images/projects/gemstone-inventory/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "ShopLC",
    tools: "NextJs, MSSQL",
    overview: {
      problem:
        "Inventory planners struggled to forecast gemstone demand accurately, leading to stock shortages, excess inventory, and capital inefficiencies.",
      solution:
        "Built an intelligent inventory planning solution that leverages historical sales data and trends to optimize stock levels and purchasing decisions.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Workflow Mapping",
        description:
          "Shadowed stock inventory planners to understand product sorting parameters, gemstone carat sizes, supply metrics, and manual data-entry fatigue.",
      },
      {
        icon: "💻",
        title: "AI-Assisted Engineering",
        description:
          "Rapidly built and polished a rich single-page data application using Next.js, blending automated assistance from tools like Gemini and ChatGPT with responsive UI constraints.",
      },
      {
        icon: "🔗",
        title: "API Framework Integration",
        description:
          "Wired frontend application structures directly into pythonic data prediction modules and predictive sales forecast endpoints engineered by internal data teams.",
      },
      {
        icon: "✅",
        title: "Validation Testing",
        description:
          "Conducted rigorous testing cycles verifying dashboard accuracy parameters, dataset variations, and overall system processing capabilities.",
      },
      {
        icon: "🚀",
        title: "DevOps Delivery",
        description:
          "Packaged clean, structured files and passed the finalized application layout directly to DevOps pipelines for server deployment.",
      },
    ],
    features: [
      {
        icon: "💎",
        title: "Smart Forecasting",
        description:
          "AI-powered demand forecasting based on historical sales and trends.",
      },
      {
        icon: "📦",
        title: "Stock Optimization",
        description:
          "Automatically calculate optimal stock levels for each gemstone variant.",
      },
      {
        icon: "📈",
        title: "Sales Analytics",
        description:
          "Detailed insights into sales patterns, popular items, and seasonal trends.",
      },
    ],
    results: [
      { value: "-30%", label: "Excess Inventory" },
      { value: "-15%", label: "Stockouts" },
      { value: "+20%", label: "Profit Margin" },
    ],
    gallery: [
      "assets/images/projects/gemstone-inventory/1.png",
      "assets/images/projects/gemstone-inventory/2.png",
      "assets/images/projects/gemstone-inventory/3.png",
      "assets/images/projects/gemstone-inventory/4.png",
      "assets/images/projects/gemstone-inventory/5.png",
      "assets/images/projects/gemstone-inventory/6.png",
    ],
  },
  {
    id: "demand-forecast",
    title: "Demand Forecast",
    category: ["web"],
    description:
      "Data-driven platform that helps teams optimize inventory planning through predictive demand analysis",
    tags: ["Web"],
    image: "assets/images/projects/demand-forecast/mockup-1.jpg",
    role: "UI/UX Designer & Frontend Developer",
    duration: "3 months",
    client: "ShopLC",
    tools: "Figma, NextJs, MSSQL, Apex Charts",
    overview: {
      problem:
        "Inventory planning relied heavily on spreadsheets and manual assumptions, resulting in overstock situations and missed sales opportunities.",
      solution:
        "Developed a predictive demand forecasting platform that uses machine learning and analytics to support data-driven inventory planning.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Market & UX Research",
        description:
          "Explored predictive financial layout engines and deep analytics patterns on Figma, Dribbble, and Behance to find optimal layout methodologies for heavy datasets.",
      },
      {
        icon: "📐",
        title: "Layout Architecture",
        description:
          "Translated dense spreadsheet tasks into intuitive multi-view screens, isolating forecasting controls and graph settings cleanly.",
      },
      {
        icon: "🎨",
        title: "Figma UI Prototyping",
        description:
          "Created comprehensive dashboard mockups in Figma with strict atomic component compliance, high-contrast layouts, and clean typographic grids.",
      },
      {
        icon: "👥",
        title: "Iterative Review Loops",
        description:
          "Presented high-fidelity interactive screens to core business analyst squads to map user workflows and confirm accuracy tolerances.",
      },
      {
        icon: "💻",
        title: "Next.js Frontend Build",
        description:
          "Programmed the complete frontend tier using Next.js, integrating complex data chart systems with Apex Charts and setting up MSSQL queries.",
      },
      {
        icon: "📦",
        title: "Handover Orchestration",
        description:
          "Committed clean production code blocks to Bitbucket repositories, transitioning details over to data engineers for backend hooks.",
      },
    ],
    features: [
      {
        icon: "🔮",
        title: "Predictive Analytics",
        description: "ML-powered demand forecasting with 95% accuracy.",
      },
      {
        icon: "📊",
        title: "Visual Dashboards",
        description:
          "Interactive charts and graphs for easy data interpretation.",
      },
      {
        icon: "⚙️",
        title: "Custom Models",
        description:
          "Customize forecasting parameters for different product categories.",
      },
    ],
    results: [
      { value: "95%", label: "Forecast Accuracy" },
      { value: "-25%", label: "Inventory Costs" },
      { value: "+40%", label: "Revenue Impact" },
    ],
    gallery: [
      "assets/images/projects/demand-forecast/1.png",
      "assets/images/projects/demand-forecast/2.png",
      "assets/images/projects/demand-forecast/3.png",
    ],
  },
  {
    id: "visualoom",
    title: "Visualoom",
    category: ["web"],
    description:
      "Creative portfolio platform showcasing branding, photography, and design work from the studio team.",
    tags: ["Web", "Portfolio"],
    image: "assets/images/projects/visualoom/mockup-1.jpg",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2 months",
    client: "Visualoom Studio",
    tools: "React",
    overview: {
      problem:
        "The creative studio lacked a modern digital presence capable of effectively showcasing projects and attracting potential clients.",
      solution:
        "Created a visually engaging portfolio website featuring modern layouts, animations, and responsive project showcases.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Creative Discovery",
        description:
          "Analyzed high-end digital design agency portfolios and modern layout systems to determine visual expectations, grid sizing, and media delivery styles.",
      },
      {
        icon: "💻",
        title: "Full-Stack Development",
        description:
          "Designed and built the visual portfolio site utilizing AI support tools including Gemini and ChatGPT alongside HTML5, custom CSS layout, Bootstrap frames, and JS animations.",
      },
      {
        icon: "👥",
        title: "Internal Feedback Reviews",
        description:
          "Conducted rapid review sessions with agency directors and studio creatives to tune interactive galleries, hover effects, and responsive asset scales.",
      },
      {
        icon: "🚀",
        title: "DevOps Handover",
        description:
          "Transferred optimized static structures and asset bundles directly over to the infrastructure team for fast production server hosting.",
      },
    ],
    features: [
      {
        icon: "🎨",
        title: "Project Showcase",
        description:
          "Beautiful gallery and detailed project presentations with rich media.",
      },
      {
        icon: "✨",
        title: "Smooth Animations",
        description: "Engaging micro-interactions and smooth page transitions.",
      },
      {
        icon: "📱",
        title: "Responsive Design",
        description:
          "Perfect viewing experience on all devices and screen sizes.",
      },
    ],
    results: [
      { value: "10000+", label: "Monthly Visitors" },
      { value: "+50%", label: "Client Inquiries" },
      { value: "4.9/5", label: "User Rating" },
    ],
    gallery: [
      "assets/images/projects/visualoom/1.png",
      "assets/images/projects/visualoom/2.png",
      "assets/images/projects/visualoom/3.png",
      "assets/images/projects/visualoom/4.png",
      "assets/images/projects/visualoom/5.png",
      "assets/images/projects/visualoom/6.png",
    ],
  },
  {
    id: "vgl-website",
    title: "Corporate Website",
    category: ["web"],
    description:
      "Modernized corporate website with an improved user experience, visual design, and responsive layout.",
    tags: ["Web"],
    image: "assets/images/projects/vgl-website/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2.5 months",
    client: "Vaibhav Global Ltd",
    tools: "HTML, CSS, Bootstrap, JS",
    overview: {
      problem:
        "The existing corporate website was built on an outdated technology stack, resulting in slow performance, poor usability, and an outdated brand presence.",
      solution:
        "Modernized the website with a new technology stack, refreshed UI, and improved user experience to better represent the organization.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Brand & UI Evaluation",
        description:
          "Analyzed the company's legacy layout structures and shareholder communication points to optimize cross-device user flows and typography choices.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Translated updated visual layouts into clean code using structured HTML5, custom optimized CSS grid setups, Bootstrap, and interactive Javascript elements.",
      },
      {
        icon: "🔍",
        title: "Cross-Device Validation",
        description:
          "Conducted intensive testing routines covering responsive breakpoint shifts, browser rendering engines, page speeds, and SEO keyword configurations.",
      },
      {
        icon: "🚀",
        title: "Core Team Delivery",
        description:
          "Packaged structured template files and design libraries, handing over clean components to core application developers.",
      },
    ],
    features: [
      {
        icon: "🏢",
        title: "Company Showcase",
        description:
          "Comprehensive presentation of company services, achievements, and values.",
      },
      {
        icon: "📱",
        title: "Mobile Optimized",
        description:
          "Fully responsive design for seamless experience across all devices.",
      },
      {
        icon: "⚡",
        title: "Fast Performance",
        description: "Optimized for speed and SEO to improve search rankings.",
      },
    ],
    results: [
      { value: "+200%", label: "Website Traffic" },
      { value: "+75%", label: "Lead Generation" },
      { value: "0.8s", label: "Load Time" },
    ],
    gallery: [
      "assets/images/projects/vgl-website/1.png",
      "assets/images/projects/vgl-website/2.png",
      "assets/images/projects/vgl-website/3.png",
      "assets/images/projects/vgl-website/4.png",
      "assets/images/projects/vgl-website/5.png",
      "assets/images/projects/vgl-website/6.png",
    ],
  },
  {
    id: "blog-site",
    title: "ShopLC Blog Site",
    category: ["ui"],
    description:
      "Content-focused blog experience designed to improve engagement, readability, and content discovery.",
    tags: ["Web", "Blog"],
    image: "assets/images/projects/blog-site/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "1.5 months",
    client: "ShopLC",
    tools: "Figma",
    overview: {
      problem:
        "The existing blog platform was difficult to navigate and lacked a modern reading experience, resulting in low engagement and higher bounce rates.",
      solution:
        "Redesigned the blog experience with improved content hierarchy, navigation, readability, and user engagement features.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Content Platform Research",
        description:
          "Explored high-engagement digital publication architectures on Figma, Dribbble, and Behance to isolate best practices for content density and typography settings.",
      },
      {
        icon: "📐",
        title: "Information Architecture",
        description:
          "Restructured the article categorizations and user tags to generate seamless related-post patterns and lower initial page exit rates.",
      },
      {
        icon: "🎨",
        title: "High-Fidelity Interface Design",
        description:
          "Created modular layouts in Figma covering modern text feeds, article detail columns, and interactive author zones utilizing clean grid tokens.",
      },
      {
        icon: "✅",
        title: "Stakeholder Reviews",
        description:
          "Reviewed interactive Figma design mockups directly with editorial and SEO stakeholders to adjust text setups and marketing call-to-action blocks.",
      },
      {
        icon: "🚀",
        title: "Engineering Delivery",
        description:
          "Exported pixel-perfect asset definitions and comprehensive style component specs over to the frontend development squads.",
      },
    ],
    features: [
      {
        icon: "📝",
        title: "Clean Layout",
        description:
          "Minimalist design focused on readability and content discovery.",
      },
      {
        icon: "🏷️",
        title: "Smart Categorization",
        description:
          "Intuitive categorization and tagging system for easy browsing.",
      },
      {
        icon: "💬",
        title: "Reader Engagement",
        description:
          "Comments, sharing, and social integration for community building.",
      },
    ],
    results: [
      { value: "+85%", label: "Avg Time on Page" },
      { value: "-40%", label: "Bounce Rate" },
      { value: "+120%", label: "Social Shares" },
    ],
    gallery: [
      "assets/images/projects/blog-site/1.png",
      "assets/images/projects/blog-site/2.png",
      "assets/images/projects/blog-site/3.png",
      "assets/images/projects/blog-site/4.png",
      "assets/images/projects/blog-site/5.png",
    ],
  },
  {
    id: "hackadmic",
    title: "Hackadmic",
    category: ["web", "ui"],
    description:
      "Innovation platform encouraging students and educators to submit and collaborate on new ideas.",
    tags: ["Web"],
    image: "assets/images/projects/hackadmic/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2.5 months",
    client: "Educational Institute",
    tools: "Adobe XD, HTML, CSS, Bootstrap, JS",
    overview: {
      problem:
        "Students lacked a dedicated platform to collaborate, showcase ideas, and receive mentorship within the academic ecosystem.",
      solution:
        "Created an innovation and collaboration platform that enables students to submit ideas, connect with peers, and develop projects through mentorship.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Contextual Discovery",
        description:
          "Studied ed-tech platforms and hackathon workspaces across Figma, Dribbble, and Behance to build engaging submission cards and project timelines.",
      },
      {
        icon: "📐",
        title: "UX Flow Blueprinting",
        description:
          "Mapped out clear user flows tracking how a student presents a design concept, invites peers, and accesses mentor support threads.",
      },
      {
        icon: "🎨",
        title: "Interface Prototyping",
        description:
          "Designed high-fidelity mockups in Adobe XD using structured components, vivid brand accent lines, and clear visual information groups.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Coded responsive, interactive interfaces utilizing web-standards HTML5, modular CSS patterns, Bootstrap wrappers, and dynamic Javascript views.",
      },
      {
        icon: "✅",
        title: "System Evaluation",
        description:
          "Tested complete portal loops including form submission checks, profile link tracking, and adaptive grid sizing across multiple mobile device screens.",
      },
      {
        icon: "🚀",
        title: "Project Handover",
        description:
          "Transferred clean front-end assets and verified UI templates over to development squads for database wiring.",
      },
    ],
    features: [
      {
        icon: "💡",
        title: "Idea Pitch",
        description:
          "Simple interface for students to describe and pitch their ideas.",
      },
      {
        icon: "👥",
        title: "Team Formation",
        description:
          "Find collaborators and build teams around shared interests.",
      },
      {
        icon: "🏆",
        title: "Competitions",
        description:
          "Participate in hackathons and competitions with real prizes and recognition.",
      },
    ],
    results: [
      { value: "1000+", label: "Ideas Submitted" },
      { value: "500+", label: "Projects Launched" },
      { value: "50000+", label: "Total Users" },
    ],
    gallery: [
      "assets/images/projects/hackadmic/1.png",
      "assets/images/projects/hackadmic/2.png",
      "assets/images/projects/hackadmic/3.png",
      "assets/images/projects/hackadmic/4.png",
      "assets/images/projects/hackadmic/5.png",
      "assets/images/projects/hackadmic/6.png",
    ],
  },
  {
    id: "soulsmart",
    title: "Soulsmart",
    category: ["ui"],
    description:
      "Modern e-commerce experience for showcasing and selling smart watches and smart rings.",
    tags: ["Web", "Ecommerce"],
    image: "assets/images/projects/soulsmart/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "Soulsmart Inc.",
    tools: "HTML, CSS, Bootstrap, JS",
    overview: {
      problem:
        "The existing ShopLC brand experience offered poor product discovery and a complicated purchase journey, contributing to cart abandonment.",
      solution:
        "Redesigned the complete shopping experience with improved product discovery, filtering, and product information presentation.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "E-Commerce Audit",
        description:
          "Audited the existing layout issues, isolating complex checkout barriers, drop-offs, and sizing select limitations on premium wearables.",
      },
      {
        icon: "💻",
        title: "Interface Engineering",
        description:
          "Transformed optimized layouts into responsive, lightweight production code via structured HTML5, custom CSS styling rules, Bootstrap, and Javascript utilities.",
      },
      {
        icon: "✅",
        title: "User Flow Validation",
        description:
          "Conducted intensive validation loops covering multi-step checkout processes, dynamic filter lists, and device performance metrics.",
      },
      {
        icon: "🚀",
        title: "Engineering Delivery",
        description:
          "Bundled cleanly styled components and responsive templates, handoff-ready for integration into backend systems.",
      },
    ],
    features: [
      {
        icon: "📱",
        title: "Smart Product Display",
        description:
          "Interactive 3D product views with detailed specifications and features.",
      },
      {
        icon: "🔍",
        title: "Advanced Filtering",
        description:
          "Powerful search and filter options to help users find exactly what they need.",
      },
      {
        icon: "🛒",
        title: "Smooth Checkout",
        description:
          "Simplified multi-step checkout process with multiple payment options.",
      },
    ],
    results: [
      { value: "-45%", label: "Cart Abandonment" },
      { value: "+60%", label: "Conversion Rate" },
      { value: "4.7/5", label: "Customer Rating" },
    ],
    gallery: [
      "assets/images/projects/soulsmart/1.png",
      "assets/images/projects/soulsmart/2.png",
      "assets/images/projects/soulsmart/3.png",
      "assets/images/projects/soulsmart/4.png",
      "assets/images/projects/soulsmart/5.png",
      "assets/images/projects/soulsmart/6.png",
    ],
  },
  {
    id: "draw-a-design",
    title: "Draw a Design",
    category: ["web"],
    description:
      "Collaborative platform where jewellery design ideas are collected, evaluated, and transformed into products.",
    tags: ["Web"],
    image: "assets/images/projects/draw-a-design/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2.5 months",
    client: "ShopLC",
    tools: "HTML, CSS, Bootstrap, JS",
    overview: {
      problem:
        "The company lacked a structured platform for collecting, evaluating, and transforming community-generated jewelry design ideas into products.",
      solution:
        "Built a collaborative design platform where users can submit ideas, participate in voting, and track selected concepts through production.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "Co-Creation Research",
        description:
          "Reviewed crowd-sourced design systems and artist portals to discover intuitive upload behaviors and secure transparency tools for voting pools.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Coded responsive, visually engaging web assets from source specs using semantic HTML5 code, modular CSS layouts, Bootstrap grids, and custom JavaScript loops.",
      },
      {
        icon: "✅",
        title: "User Path Validation",
        description:
          "Validated upload validation systems, gallery sort parameters, up-voting triggers, and design tracking dashboard status updates.",
      },
      {
        icon: "🚀",
        title: "Repository Handover",
        description:
          "Delivered optimized codebases to the master development pool for final production system wireframe attachments.",
      },
    ],
    features: [
      {
        icon: "🎨",
        title: "Design Submission",
        description:
          "Easy-to-use interface for submitting jewelry design ideas.",
      },
      {
        icon: "👥",
        title: "Community Voting",
        description:
          "Transparent voting system where community chooses favorite designs.",
      },
      {
        icon: "📦",
        title: "Product Launch",
        description:
          "Track winning designs from concept through manufacturing to market.",
      },
    ],
    results: [
      { value: "500+", label: "Designs Submitted" },
      { value: "50+", label: "Products Launched" },
      { value: "+300%", label: "Designer Engagement" },
    ],
    gallery: [
      "assets/images/projects/draw-a-design/1.png",
      "assets/images/projects/draw-a-design/2.png",
      "assets/images/projects/draw-a-design/3.png",
      "assets/images/projects/draw-a-design/4.png",
      "assets/images/projects/draw-a-design/5.png",
      "assets/images/projects/draw-a-design/6.png",
    ],
  },
  {
    id: "sts",
    title: "STS Portal",
    category: ["web"],
    description:
      "Redesigned corporate website experience with a modern interface, improved navigation, and enhanced usability.",
    tags: ["Web"],
    image: "assets/images/projects/sts/mockup-1.jpg",
    role: "UI/UX Designer",
    duration: "2 months",
    client: "STS Organization",
    tools: "HTML, CSS, Bootstrap, JS",
    overview: {
      problem:
        "The existing STS website was built on an outdated technology stack, resulting in slow performance, poor navigation, and a suboptimal user experience.",
      solution:
        "Modernized the platform with a refreshed UI, improved architecture, and enhanced usability.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "UX & Navigation Audit",
        description:
          "Analyzed the old layout architecture to evaluate user click behaviors, pinpointing drop-offs and navigation hierarchy issues.",
      },
      {
        icon: "💻",
        title: "Frontend Build",
        description:
          "Implemented the fully accessible layouts using responsive HTML5 structures, cleanly organized CSS tokens, Bootstrap grids, and fluid JavaScript modules.",
      },
      {
        icon: "✅",
        title: "QA & Device Verification",
        description:
          "Conducted rigorous cross-browser testing across mobile and desktop viewpoints to optimize component spacing and script execution speeds.",
      },
      {
        icon: "🚀",
        title: "Engineering Delivery",
        description:
          "Delivered optimized production code blocks over to engineering teams for enterprise server integration.",
      },
    ],
    features: [
      {
        icon: "🎯",
        title: "Improved Navigation",
        description:
          "Clear and intuitive navigation structure for easy access to all services.",
      },
      {
        icon: "🔍",
        title: "Smart Search",
        description:
          "Powerful search functionality with intelligent suggestions.",
      },
      {
        icon: "📱",
        title: "Mobile First",
        description:
          "Responsive design with mobile-first approach for all devices.",
      },
    ],
    results: [
      { value: "+150%", label: "User Engagement" },
      { value: "-50%", label: "Support Requests" },
      { value: "+90%", label: "User Satisfaction" },
    ],
    gallery: [
      "assets/images/projects/sts/1.png",
      "assets/images/projects/sts/2.png",
      "assets/images/projects/sts/3.png",
      "assets/images/projects/sts/4.png",
      "assets/images/projects/sts/5.png",
      "assets/images/projects/sts/6.png",
    ],
  },
  {
    id: "vdot",
    title: "VDOT",
    category: ["web"],
    description:
      "Internal employee feedback system designed to streamline communication, engagement, and workplace improvements.",
    tags: ["Web"],
    image: "assets/images/projects/vdot/mockup-1.jpg",
    role: "UI/UX Designer & Developer",
    duration: "2 months",
    client: "Internal Project",
    tools: "React",
    overview: {
      problem:
        "The organization lacked a centralized and transparent mechanism for collecting and acting on employee feedback, limiting continuous improvement efforts.",
      solution:
        "Created an internal feedback platform that enables employees to share suggestions, concerns, and feedback while providing visibility into actions taken.",
    },
    designProcess: [
      {
        icon: "🔍",
        title: "UX Strategy & Privacy Patterns",
        description:
          "Researched internal feedback collection tools to draft simple submission paths that balance confidential privacy options with clear resolution metrics.",
      },
      {
        icon: "💻",
        title: "Frontend Engineering",
        description:
          "Developed the semantic React application framework using clean component splitting, managing dynamic form interactions, tracking views, and charts.",
      },
      {
        icon: "✅",
        title: "Workflow Verification",
        description:
          "Executed extensive scenario testing on anonymous routing inputs, backend data filters, admin action updates, and alert flags.",
      },
      {
        icon: "🚀",
        title: "Development Handover",
        description:
          "Pushed structured codebases to engineering branches, conducting technical handovers for downstream database system attachments.",
      },
    ],
    features: [
      {
        icon: "💬",
        title: "Anonymous Feedback",
        description:
          "Safe environment for employees to share feedback anonymously if desired.",
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        description:
          "Management dashboard for analyzing feedback trends and themes.",
      },
      {
        icon: "✅",
        title: "Action Tracking",
        description:
          "Transparent system for tracking and communicating actions taken on feedback.",
      },
    ],
    results: [
      { value: "80%", label: "Employee Participation" },
      { value: "+40%", label: "Engagement Score" },
      { value: "50+", label: "Improvements Implemented" },
    ],
    gallery: [
      "assets/images/projects/vdot/1.png",
      "assets/images/projects/vdot/2.png",
      "assets/images/projects/vdot/3.png",
      "assets/images/projects/vdot/4.png",
      "assets/images/projects/vdot/5.png",
    ],
  },
];

// Function to get a project by ID
function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}