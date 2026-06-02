export const categoryColors = {
  Development: "bg-[#2B7EC1]/15 text-[#79b8f0] border-[#2B7EC1]/25",
  Mobile: "bg-[#6B3FA0]/15 text-[#b392d8] border-[#6B3FA0]/25",
  AI: "bg-[#00B4C8]/15 text-[#00B4C8] border-[#00B4C8]/25",
  Cloud: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  Connectivity: "bg-blue-500/15 text-blue-300 border-blue-500/25",
  Cybersecurity: "bg-red-500/15 text-red-300 border-red-500/25",
  Robotics: "bg-orange-500/15 text-orange-300 border-orange-500/25",
  "Space Tech": "bg-slate-500/15 text-slate-300 border-slate-500/25",
  "Data Privacy": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  Sustainability: "bg-green-500/15 text-green-300 border-green-500/25",
};

export const posts = [
  {
    slug: "agentic-ai-acts-not-talks",
    featured: true,
    title: "Agentic AI — The AI That Acts, Not Just Talks",
    excerpt:
      "AI agents are evolving beyond chatbots. From booking travel to fixing code and running research autonomously, Agentic AI is redefining business automation.",
    category: "AI",
    imageSrc: "/site/agentic_ai.jpeg",
    author: {
      name: "Amaan Husain",
      role: "AI Strategist",
      avatar: "AH",
    },
    date: "Jan 12, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "lead",
        text: "AI is entering a new era where systems are no longer limited to responding to prompts. Agentic AI can reason, plan, and execute tasks autonomously.",
      },
      {
        type: "h2",
        text: "What Is Agentic AI?",
      },
      {
        type: "p",
        text: "Traditional AI responds to instructions. Agentic AI takes initiative. It can break down goals, choose tools, and execute workflows with minimal human input.",
      },
      {
        type: "callout",
        label: "Key Shift",
        text: "The future of AI is not just answering questions — it's completing work.",
      },
      {
        type: "h2",
        text: "Business Applications",
      },
      {
        type: "p",
        text: "Companies are using AI agents for research, software engineering, support automation, logistics, and operational decision-making.",
      },
    ],
  },

  {
    slug: "multi-agent-ai-systems",
    title: "Multi-Agent AI Systems",
    excerpt:
      "Multi-agent AI systems allow specialized agents to collaborate, improving enterprise automation and scalability.",
    category: "AI",
    imageSrc: "/site/Multiagent_AI.jpeg",
    author: {
      name: "Amaan Husain",
      role: "AI Strategist",
      avatar: "AH",
    },
    date: "Jan 18, 2026",
    readTime: "7 min read",
    content: [
      {
        type: "lead",
        text: "Single AI models are powerful, but teams of AI agents working together unlock entirely new capabilities.",
      },
      {
        type: "h2",
        text: "Why Multi-Agent?",
      },
      {
        type: "p",
        text: "Each agent can specialize in planning, execution, validation, or communication, creating resilient systems.",
      },
      {
        type: "h2",
        text: "Enterprise Benefits",
      },
      {
        type: "p",
        text: "Multi-agent systems provide scalability, modularity, and fault tolerance across enterprise workflows.",
      },
    ],
  },

  {
    slug: "6g-connectivity-beyond-5g",
    title: "6G Connectivity — Beyond 5G",
    excerpt:
      "6G is expected to transform wireless communication through ultra-low latency and AI-native networking.",
    category: "Connectivity",
    imageSrc: "/site/6G_connectivity.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Technology Analyst",
      avatar: "AH",
    },
    date: "Jan 25, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "lead",
        text: "The conversation around wireless technology is already moving beyond 5G.",
      },
      {
        type: "h2",
        text: "What Makes 6G Different?",
      },
      {
        type: "p",
        text: "6G introduces AI-driven networking, real-time adaptation, and extremely low latency.",
      },
    ],
  },

  {
    slug: "cloud-3-hybrid-multicloud",
    title: "Cloud 3.0 — Hybrid, Multi-Cloud & Sovereign Architectures",
    excerpt:
      "Cloud 3.0 introduces resilient hybrid and sovereign strategies for AI-scale infrastructure.",
    category: "Cloud",
    imageSrc: "/site/cloud_3.0.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Cloud Consultant",
      avatar: "AH",
    },
    date: "Feb 2, 2026",
    readTime: "8 min read",
    content: [
      {
        type: "lead",
        text: "Cloud architecture is shifting from centralized dependence to distributed resilience.",
      },
      {
        type: "h2",
        text: "Hybrid and Multi-Cloud",
      },
      {
        type: "p",
        text: "Organizations increasingly spread workloads across providers for redundancy and flexibility.",
      },
    ],
  },

  {
    slug: "preemptive-cybersecurity-ai",
    title: "Preemptive Cybersecurity (AI-Powered Defense)",
    excerpt:
      "AI-powered defense systems predict and stop attacks before they escalate.",
    category: "Cybersecurity",
    imageSrc: "/site/Cybersecurity.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Security Analyst",
      avatar: "AH",
    },
    date: "Feb 10, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "lead",
        text: "Cybersecurity is evolving from reactive monitoring to predictive defense.",
      },
      {
        type: "h2",
        text: "AI Security Layer",
      },
      {
        type: "p",
        text: "Machine learning systems now identify suspicious behavior before damage occurs.",
      },
    ],
  },

  {
    slug: "physical-ai-robotics",
    title: "Physical AI & Robotics",
    excerpt:
      "Physical AI is bringing intelligence into robotics, industrial systems and autonomous machines.",
    category: "Robotics",
    imageSrc: "/site/Robotics.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Robotics Researcher",
      avatar: "AH",
    },
    date: "Feb 18, 2026",
    readTime: "7 min read",
    content: [
      {
        type: "lead",
        text: "AI is moving beyond screens and entering physical environments.",
      },
      {
        type: "h2",
        text: "Autonomous Systems",
      },
      {
        type: "p",
        text: "Robotics powered by AI can operate in unpredictable real-world conditions.",
      },
    ],
  },

  {
    slug: "space-computing-frontier",
    title: "Space as a Computing Frontier",
    excerpt:
      "Space-based computing may become the next frontier for AI infrastructure.",
    category: "Space Tech",
    imageSrc: "/site/Space_tech.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Technology Analyst",
      avatar: "AH",
    },
    date: "Feb 25, 2026",
    readTime: "5 min read",
    content: [
      {
        type: "lead",
        text: "Future data centers may not remain on Earth.",
      },
      {
        type: "h2",
        text: "Why Space?",
      },
      {
        type: "p",
        text: "Cooling, power generation, and orbital positioning create interesting opportunities.",
      },
    ],
  },

  {
    slug: "confidential-computing-privacy",
    title: "Confidential Computing & Data Privacy",
    excerpt:
      "Confidential computing protects sensitive information even during processing.",
    category: "Data Privacy",
    imageSrc: "/site/Data_privacy.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Privacy Consultant",
      avatar: "AH",
    },
    date: "Mar 4, 2026",
    readTime: "6 min read",
    content: [
      {
        type: "lead",
        text: "Privacy is becoming a competitive advantage.",
      },
      {
        type: "h2",
        text: "Secure Processing",
      },
      {
        type: "p",
        text: "Confidential computing encrypts workloads during execution, not just at rest.",
      },
    ],
  },

  {
    slug: "green-ai-sustainable-tech",
    title: "Green AI / Sustainable Tech",
    excerpt:
      "Organizations are shifting toward energy-efficient AI and sustainable technology strategies.",
    category: "Sustainability",
    imageSrc: "/site/Green_ai.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Technology Analyst",
      avatar: "AH",
    },
    date: "Mar 12, 2026",
    readTime: "7 min read",
    content: [
      {
        type: "lead",
        text: "Sustainability is now part of technology strategy.",
      },
      {
        type: "h2",
        text: "Green AI",
      },
      {
        type: "p",
        text: "Efficient AI models reduce infrastructure cost and environmental impact.",
      },
    ],
  },

  {
    slug: "ai-native-software-development",
    title: "AI-Native Software Development",
    excerpt:
      "Software engineering is moving toward AI-native workflows where developers guide intent and AI handles execution.",
    category: "Development",
    imageSrc: "/site/Ai_Native.jpeg",
    author: {
      name: "Amaan Husain",
      role: "Engineering Lead",
      avatar: "AH",
    },
    date: "Mar 20, 2026",
    readTime: "8 min read",
    content: [
      {
        type: "lead",
        text: "Software development is shifting from writing code to orchestrating intelligence.",
      },
      {
        type: "h2",
        text: "Intent-Driven Engineering",
      },
      {
        type: "p",
        text: "Developers increasingly focus on architecture and goals while AI handles repetitive implementation work.",
      },
    ],
  },
];

export const featuredPost =
  posts.find((post) => post.featured) || posts[0];