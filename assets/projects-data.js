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
    image: "assets/images/projects/esop/1.png",
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
        title: "Research",
        description:
          "Studied financial dashboard designs on Figma, Dribbble, Behance, and other platforms. Analyzed requirements and created user flows.",
      },
      {
        icon: "🎨",
        title: "Design",
        description:
          "Designed complete user and admin interfaces in Figma with reusable components and color themes.",
      },
      {
        icon: "✅",
        title: "Testing",
        description:
          "Validated designs with stakeholders at every stage to ensure alignment with business requirements.",
      },
      {
        icon: "💻",
        title: "Development",
        description:
          "Developed the frontend using React based on approved designs.",
      },
      {
        icon: "🚀",
        title: "Handover",
        description:
          "Pushed code to Bitbucket and handed over the project to the backend development team.",
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
    image: "assets/images/projects/whatsapp-db/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Explored analytics dashboard patterns and reporting systems to understand customer service requirements.'
    },
    {
        icon: '🎨',
        title: 'Design',
        description: 'Designed the complete dashboard in Figma with reusable components and data visualization layouts.'
    },
    {
        icon: '✅',
        title: 'Testing',
        description: 'Conducted regular design reviews with stakeholders to ensure requirements were met.'
    },
    {
        icon: '💻',
        title: 'Development',
        description: 'Built the frontend using Next.js and implemented dashboard interactions and visualizations.'
    },
    {
        icon: '🚀',
        title: 'Handover',
        description: 'Pushed code to Bitbucket and handed over the project to the team.'
    }
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
    image: "assets/images/projects/shopping-assistant/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
    },
    {
        icon: '✅',
        title: 'Testing',
        description: 'Integrated the frontend with backend services and validated customer journeys and chatbot workflows.'
    },
    {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed implementation for integration into the ShopLC platform.'
    }
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
      "assets/images/projects/shopping-assistant/3.png"
    ],
  },
  {
    id: "voc",
    title: "Voice of Customer",
    category: ["web"],
    description:
      "Customer insights dashboard that analyzes feedback, sentiments, and trends to support business decisions.",
    tags: ["Web", "Dashboard"],
    image: "assets/images/projects/voc/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Studied customer analytics and dashboard platforms to define reporting and sentiment analysis workflows.'
    },
    {
        icon: '🎨',
        title: 'Design',
        description: 'Designed the complete dashboard experience in Figma with reusable components and visual consistency.'
    },
    {
        icon: '✅',
        title: 'Testing',
        description: 'Reviewed designs continuously with stakeholders to validate requirements.'
    },
    {
        icon: '💻',
        title: 'Development',
        description: 'Developed the platform using Next.js and integrated APIs for analytics and insights.'
    },
    {
        icon: '🚀',
        title: 'Handover',
        description: 'Pushed code to Bitbucket and handed over the completed project to the team.'
    }
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
    image: "assets/images/projects/genai/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI in Next.js.'
    },
    {
        icon: '✅',
        title: 'Testing',
        description: 'Integrated the frontend with AI-powered backend services and validated content generation workflows.'
    },
    {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed application to the DevOps team for deployment.'
    }
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
    image: "assets/images/projects/lc-miles/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Designed and implemented the single-page application using AI-assisted tools including Gemini and ChatGPT, based on project requirements.'
    },
    {
        icon: '🔗',
        title: 'Integration',
        description: 'Connected the frontend with Python-based APIs developed by the backend team.'
    },
    {
        icon: '✅',
        title: 'Testing',
        description: 'Performed end-to-end validation of route optimization and logistics workflows.'
    },
    {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed application to the DevOps team for deployment.'
    }
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
      "assets/images/projects/lc-miles/2.png"
    ],
  },
  {
    id: "innov8",
    title: "Innov8",
    category: ["web"],
    description:
      "Idea management platform enabling employees to submit, explore, and implement innovations across the organization.",
    tags: ["Web"],
    image: "assets/images/projects/innov8/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Validated all user flows and platform functionality.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed frontend to the development team for further enhancements.'
      }
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
    image: "assets/images/projects/lms/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Reviewed LMS platforms and learning dashboard designs across Figma, Dribbble, Behance, and industry products.'
      },
      {
        icon: '🎨',
        title: 'Design',
        description: 'Created complete LMS screens, component libraries, and design systems in Figma.'
      },
      {
        icon: '👥',
        title: 'Testing',
        description: 'Conducted design reviews with stakeholders throughout the process.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the finalized design system and screens to the frontend development team.'
      }
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
    image: "assets/images/projects/gemstone-inventory/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Designed and implemented the single-page application using AI-assisted tools including Gemini and ChatGPT.'
      },
      {
        icon: '🔗',
        title: 'Integration',
        description: 'Connected the frontend with Python-based forecasting APIs developed by the backend team.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Validated inventory planning workflows and forecasting functionality.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the application to the DevOps team for deployment.'
      }
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
    image: "assets/images/projects/demand-forecast/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Explored forecasting and analytics dashboards on Figma, Dribbble, Behance, and similar platforms.'
      },
      {
        icon: '🎨',
        title: 'Design',
        description: 'Created complete dashboard experiences in Figma with reusable components and visual consistency.'
      },
      {
        icon: '👥',
        title: 'Testing',
        description: 'Conducted design reviews with stakeholders throughout the process.'
      },
      {
        icon: '🚀',
        title: 'Development',
        description: 'Built the frontend using Next.js and integrated forecasting APIs.'
      },
      {
        icon: '📦',
        title: 'Handover',
        description: 'Pushed code to Bitbucket and handed over the project to the team.'
      }
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
      "assets/images/projects/demand-forecast/3.png"
    ],
  },
  {
    id: "visualoom",
    title: "Visualoom",
    category: ["web"],
    description:
      "Creative portfolio platform showcasing branding, photography, and design work from the studio team.",
    tags: ["Web", "Portfolio"],
    image: "assets/images/projects/visualoom/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Designed and developed the entire website using AI-assisted tools including Gemini and ChatGPT with HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '👥',
        title: 'Testing',
        description: 'Conducted reviews with business stakeholders and studio team members.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the final website to the DevOps team for deployment.'
      }
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
    image: "assets/images/projects/vgl-website/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '🔍',
        title: 'Testing',
        description: 'Verified responsiveness, performance, and functionality across devices.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed frontend to the development team.'
      }
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
    image: "assets/images/projects/blog-site/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Explored blog and content-focused interfaces on Figma, Dribbble, Behance, and similar platforms.'
      },
      {
        icon: '🎨',
        title: 'Design',
        description: 'Created blog listing and article detail page designs in Figma with reusable components.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Conducted design reviews with stakeholders to ensure requirements were met.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered finalized designs to the frontend development team.'
      }
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
      "assets/images/projects/blog-site/5.png"
    ],
  },
  {
    id: "hackadmic",
    title: "Hackadmic",
    category: ["web", "ui"],
    description:
      "Innovation platform encouraging students and educators to submit and collaborate on new ideas.",
    tags: ["Web"],
    image: "assets/images/projects/hackadmic/1.png",
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
        icon: '🔍',
        title: 'Research',
        description: 'Studied modern landing pages and innovation platforms across Figma, Dribbble, and Behance.'
      },
      {
        icon: '🎨',
        title: 'Design',
        description: 'Designed the complete application in Adobe XD with a structured design system and color theme.'
      },
      {
        icon: '💻',
        title: 'Development',
        description: 'Implemented the frontend using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Validated all workflows and functionality.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the project to the development team for further enhancements.'
      }
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
    image: "assets/images/projects/soulsmart/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Verified user flows, responsiveness, and shopping experiences.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the frontend to the development team.'
      }
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
    image: "assets/images/projects/draw-a-design/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Validated submission, voting, and tracking workflows.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the frontend to the development team for further enhancements.'
      }
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
    image: "assets/images/projects/sts/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Implemented the provided UI using HTML, CSS, Bootstrap, and JavaScript.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Conducted cross-device and functional testing.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the completed frontend to the development team.'
      }
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
    image: "assets/images/projects/vdot/1.png",
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
        icon: '💻',
        title: 'Development',
        description: 'Built the frontend using React based on provided requirements and designs.'
      },
      {
        icon: '✅',
        title: 'Testing',
        description: 'Validated feedback submission, tracking, and reporting workflows.'
      },
      {
        icon: '🚀',
        title: 'Handover',
        description: 'Delivered the application to the development team for further development.'
      }
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
      "assets/images/projects/vdot/5.png"
    ],
  },
];

// Function to get a project by ID
function getProjectById(projectId) {
  return projects.find((project) => project.id === projectId);
}
