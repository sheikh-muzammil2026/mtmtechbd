export const translations = {
  en: {
    navbar: {
      tagline: "Your Vision | Our Technology",
      links: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
      ],
      getStarted: "Get Started",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
    },
    hero: {
      badge: "YOUR VISION | OUR TECHNOLOGY",
      badgeSub: "Next-Gen IT Solutions",
      headlinePrefix: "Architecting",
      headlineHighlight1: "World-Class",
      headlineMiddle: "Digital Experiences",
      headlineSuffix: "& Web Systems.",
      subheadline:
        "MTM Tech engineers modern web applications, enterprise software, and scalable IT infrastructure that empower brands to dominate their markets globally.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "Explore Our Work",
      ratingText: "4.9/5 Rating",
      onTimeDelivery: "100% On-Time Delivery",
      webStandards: "ISO & Modern Web Standards",
      terminalTitle: "mtm-tech-engine.config.ts",
      terminalLive: "Live",
      terminalComment: "// Initialize MTM Tech Core Stack",
      terminalDeployed: "Deployed: Production Ready (v2.4)",
      metricSpeed: "Page Speed",
      metricConversion: "Performance Boost",
      conversionSub: "Conversion",
      stats: [
        { value: "99.8%", label: "Client Satisfaction", sub: "Based on 120+ reviews" },
        { value: "150+", label: "Projects Delivered", sub: "Across 14+ countries" },
        { value: "5x", label: "Faster Deployment", sub: "Optimized CI/CD & tech" },
        { value: "24/7", label: "IT & Cloud Support", sub: "Enterprise SLA guaranteed" },
      ],
    },
    services: {
      badge: "Our Capabilities & Solutions",
      titlePrefix: "Engineered for Scale.",
      titleHighlight: "Crafted for Growth.",
      description:
        "We blend technical ingenuity with cutting-edge engineering to build digital infrastructure that gives your business an unfair competitive advantage.",
      requestProposal: "Request Proposal",
      consultationBadge: "Custom Engineering Requirements?",
      consultationTitle: "Have a specialized project or complex tech stack in mind?",
      consultationDesc:
        "Our senior software architects can evaluate your requirements, recommend the ideal architecture, and deliver an actionable technical roadmap.",
      consultationBtn: "Book Technical Consultation",
      items: [
        {
          id: "01",
          title: "Custom Web Development",
          description:
            "Lightning-fast, SEO-optimized, and responsive web platforms built with Next.js, React, and modern Jamstack architectures.",
          tag: "High Performance",
          features: [
            "Next.js App Router & SSR/SSG",
            "Sub-second load times & 99+ Core Web Vitals",
            "Headless CMS integration (Sanity, Strapi)",
            "Enterprise SEO & accessibility standards",
          ],
        },
        {
          id: "02",
          title: "Full-Stack Web Applications",
          description:
            "Robust, scalable SaaS products and complex web apps designed to handle mission-critical business logic and high concurrency.",
          tag: "Scalable SaaS",
          features: [
            "Custom RESTful & GraphQL APIs",
            "Secure authentication & RBAC authorization",
            "Relational & NoSQL database architecture",
            "Real-time data synchronization & WebSockets",
          ],
        },
        {
          id: "03",
          title: "UI/UX & Product Design",
          description:
            "Intuitive, visually arresting digital product interfaces engineered to maximize user engagement and business conversion rates.",
          tag: "Conversion-Focused",
          features: [
            "User research & competitive UX audits",
            "Interactive Figma prototyping & design systems",
            "Conversion Rate Optimization (CRO)",
            "Responsive cross-device design polish",
          ],
        },
        {
          id: "04",
          title: "E-Commerce Engineering",
          description:
            "High-converting online store experiences with seamless checkout flows, inventory synchronization, and secure payment integrations.",
          tag: "Revenue Engine",
          features: [
            "Shopify Plus & headless custom storefronts",
            "Global payment gateways (Stripe, PayPal)",
            "Automated tax, currency, and shipping logic",
            "Abandoned cart recovery & sales funnels",
          ],
        },
        {
          id: "05",
          title: "Cloud Architecture & DevOps",
          description:
            "Resilient cloud deployment pipelines, containerization, and automated workflows ensuring 99.99% availability and data integrity.",
          tag: "Enterprise Grade",
          features: [
            "AWS, Google Cloud & Vercel deployments",
            "Automated CI/CD pipelines & zero downtime",
            "Containerization with Docker & Kubernetes",
            "SSL encryption, WAF & automated backups",
          ],
        },
        {
          id: "06",
          title: "24/7 IT Maintenance & Support",
          description:
            "Dedicated long-term technical partnership offering proactive monitoring, security updates, feature expansions, and bug triage.",
          tag: "Continuous Care",
          features: [
            "Guaranteed SLA response times",
            "Continuous vulnerability scanning & patching",
            "Performance optimization & server health",
            "Ongoing feature sprints & improvements",
          ],
        },
      ],
    },
    about: {
      badge: "Why Partner With MTM Tech",
      titlePrefix: "Empowering Visionary Brands With",
      titleHighlight: "Global Tech Excellence.",
      description:
        "We don’t just write code—we serve as your strategic digital co-engineers. We turn complex business requirements into fast, intuitive, and future-proof digital assets.",
      guaranteedText: "Guaranteed Excellence",
      networkTitle: "Global Delivery Network",
      coverageText: "Global 24/7 Coverage",
      commitmentBadge: "OUR CORE COMMITMENT",
      commitmentQuote: "“YOUR VISION | OUR TECHNOLOGY”",
      commitmentDesc:
        "We adapt to your timezone, your sprint cycle, and your team structure for frictionless international collaboration.",
      hubsTitle: "Primary Client Hubs",
      latencyLabel: "Edge CDN Latency",
      timezoneLabel: "Timezone Alignment",
      pillars: [
        {
          title: "International Engineering Standards",
          description:
            "We build adhering to global ISO, WCAG accessibility, and Silicon Valley engineering benchmarks—guaranteeing clean, modular, and maintainable codebases.",
          badge: "Enterprise Grade",
        },
        {
          title: "Transparent & Agile Velocity",
          description:
            "Direct Slack/Teams channel with dedicated senior engineers, weekly live sprint demos, and continuous progress visibility with zero guesswork.",
          badge: "Agile Sprints",
        },
        {
          title: "Bank-Grade Security & Compliance",
          description:
            "OWASP top-10 mitigation, end-to-end encryption, GDPR-readiness, and automated vulnerability scanning embedded from Day 1.",
          badge: "Zero-Trust Security",
        },
        {
          title: "100% In-House Senior Talent",
          description:
            "No sub-contracting or junior hand-offs. Every line of code and UI component is architected by vetted senior software engineers and product designers.",
          badge: "Elite Engineers",
        },
      ],
      hubs: [
        { city: "San Francisco", region: "Americas", status: "Active" },
        { city: "London", region: "Europe", status: "Active" },
        { city: "Singapore", region: "Asia Pacific", status: "Active" },
        { city: "Dubai", region: "Middle East", status: "Active" },
      ],
    },
    portfolio: {
      badge: "Selected Case Studies",
      titlePrefix: "Crafted With Precision.",
      titleHighlight: "Proven in Production.",
      description:
        "Explore a curated selection of web platforms, enterprise software, and conversion-engineered digital products built for global disruptors.",
      categories: [
        "All Projects",
        "Web Apps & SaaS",
        "Custom Websites",
        "E-Commerce",
        "UI/UX Design",
      ],
      statusLive: "STATUS: LIVE",
      verifiedBadge: "Verified",
      requestSimilar: "Request Similar Project",
      bottomPrompt: "Have a custom platform or product specification you'd like to discuss?",
      bottomCta: "Discuss Your Product Architecture",
    },
    testimonials: {
      badge: "Client Testimonials & Trust",
      titlePrefix: "Trusted by Innovators.",
      titleHighlight: "Validated Worldwide.",
      description:
        "Discover how MTM Tech empowers global engineering leaders, startup founders, and enterprises to build high-performance digital products.",
      verifiedRating: "5.0 / 5.0 VERIFIED",
      trustSubtitle: "Empowering Visionary Companies Across 14+ Countries",
    },
    pricing: {
      badge: "Transparent Investment Models",
      titlePrefix: "Predictable Pricing.",
      titleHighlight: "Uncompromising Quality.",
      description:
        "Choose between fixed-scope turnkey delivery or dedicated ongoing sprint pods. Zero surprise fees, zero vendor lock-in.",
      toggleProject: "Project-Based (Fixed Scope)",
      toggleRetainer: "Dedicated Monthly Pod",
      mostPopular: "Most Popular Choice",
      capabilitiesTitle: "Included Capabilities:",
      customPrice: "Custom",
      guarantees: [
        {
          title: "100% Source Code & IP Ownership",
          desc: "You own every single asset, repo, and database right after delivery.",
        },
        {
          title: "Strict NDA Signed Upfront",
          desc: "Your intellectual property, algorithms, and business logic stay 100% confidential.",
        },
        {
          title: "Milestone-Driven Execution",
          desc: "Transparent payments aligned strictly with tangible code and sprint deliverables.",
        },
      ],
    },
    contact: {
      badge: "Start Your Digital Transformation",
      titlePrefix: "Let's Build Something",
      titleHighlight: "Extraordinary Together.",
      description:
        "Have an upcoming project, system redesign, or complex technical requirement? Tell us about your vision and let's map out the engineering roadmap.",
      promiseBadge: "OUR PROMISE",
      promiseTitle: "YOUR VISION | OUR TECHNOLOGY",
      promiseDesc:
        "Whether you need a high-velocity sprint pod or a comprehensive digital overhaul, we engineer solutions designed to yield quantifiable enterprise value.",
      directInquiries: "Direct Inquiries",
      technicalAdvisory: "Technical Advisory",
      engineeringBase: "Engineering Base",
      baseLocation: "Dhaka, Bangladesh • Global Remote Hubs",
      availableBadge: "AVAILABLE",
      slaNotice: "4-Hour Response SLA: Direct response from an engineering lead.",
      ndaNotice: "Mutual NDA: All shared ideas and specifications remain 100% confidential.",
      successTitle: "Message Successfully Received!",
      successDesc:
        "Thank you for contacting MTM Tech. Our senior software engineering team is reviewing your project details and will respond within 4 business hours.",
      sendAnother: "Send Another Inquiry",
      servicesLabel: "1. What services are you interested in?",
      budgetLabel: "2. Estimated Project Scope / Budget",
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Work Email *",
      emailPlaceholder: "john@company.com",
      companyLabel: "Company Name / Current Website",
      companyPlaceholder: "Company Ltd. or https://example.com",
      messageLabel: "Project Overview & Goals *",
      messagePlaceholder:
        "Tell us about your project requirements, timeline, target audience, and key deliverables...",
      submitBtn: "Submit Project Inquiry",
      submittingBtn: "Encrypting & Sending Inquiry...",
      privacyBadge: "Zero Spam • 100% Confidentiality Guaranteed",
    },
    footer: {
      newsletterBadge: "STAY AHEAD IN MODERN TECH",
      newsletterTitle: "Subscribe to MTM Tech Engineering Insights",
      newsletterDesc:
        "Receive quarterly deep dives into Next.js 16 architectures, server components, database scaling, and high-conversion design patterns.",
      newsletterPlaceholder: "Enter your work email",
      subscribeBtn: "Subscribe",
      subscribedBtn: "Subscribed!",
      tagline: "Your Vision | Our Technology",
      elevatorPitch:
        "International-standard web development, scalable full-stack applications, and resilient cloud IT systems engineered to propel visionary businesses forward.",
      operationalStatus: "All Systems Operational • 99.99% Uptime",
      col1Title: "Core Capabilities",
      col2Title: "Company & Showcase",
      col3Title: "Standards & Security",
      copyright: "MTM Tech (mtmtechbd). All rights reserved.",
      builtWith: "Built with Next.js 16, React 19 & Tailwind CSS",
      backToTop: "Back to Top",
    },
  },
  bn: {
    navbar: {
      tagline: "আপনার স্বপ্ন | আমাদের প্রযুক্তি",
      links: [
        { name: "হোম", href: "#home" },
        { name: "সেবাসমূহ", href: "#services" },
        { name: "পোর্টফোলিও", href: "#portfolio" },
        { name: "আমাদের সম্পর্কে", href: "#about" },
        { name: "প্রাইসিং", href: "#pricing" },
        { name: "যোগাযোগ", href: "#contact" },
      ],
      getStarted: "শুরু করুন",
      menuOpen: "মেনু খুলুন",
      menuClose: "মেনু বন্ধ করুন",
    },
    hero: {
      badge: "আপনার স্বপ্ন | আমাদের প্রযুক্তি",
      badgeSub: "অত্যাধুনিক আইটি সমাধান",
      headlinePrefix: "বিশ্বমানের",
      headlineHighlight1: "ডিজিটাল অভিজ্ঞতা",
      headlineMiddle: "ও শক্তিশালী ওয়েব সিস্টেম",
      headlineSuffix: "তৈরিতে বিশ্বস্ত অংশীদার।",
      subheadline:
        "এমটিএম টেক আন্তর্জাতিক মানের কাস্টম ওয়েব অ্যাপ্লিকেশন, এন্টারপ্রাইজ সফটওয়্যার ও আধুনিক ক্লাউড সলিউশন তৈরি করে আপনার ব্যবসাকে বিশ্ববাজারে এগিয়ে রাখে।",
      ctaPrimary: "প্রজেক্ট শুরু করুন",
      ctaSecondary: "আমাদের কাজ দেখুন",
      ratingText: "৪.৯/৫ রেটিং",
      onTimeDelivery: "১০০% অন-টাইম ডেলিভারি",
      webStandards: "আইএসও ও আধুনিক ওয়েব স্ট্যান্ডার্ড",
      terminalTitle: "mtm-tech-engine.config.ts",
      terminalLive: "লাইভ",
      terminalComment: "// এমটিএম টেক কোর আর্কিটেকচার",
      terminalDeployed: "ডিপ্লয়েড: প্রোডাকশন রেডি (v২.৪)",
      metricSpeed: "পেজ স্পিড",
      metricConversion: "পারফরম্যান্স বৃদ্ধি",
      conversionSub: "কনভার্সন",
      stats: [
        { value: "৯৯.৮%", label: "ক্লায়েন্ট সন্তুষ্টি", sub: "১২০+ ভেরিফায়েড রিভিউ" },
        { value: "১৫০+", label: "সফল প্রজেক্ট ডেলিভারি", sub: "১৪+ দেশে বিস্তৃত" },
        { value: "৫ গুণ", label: "দ্রুততম ডিপ্লয়মেন্ট", sub: "আধুনিক CI/CD ও ক্লাউড" },
        { value: "২৪/৭", label: "আইটি ও ক্লাউড সাপোর্ট", sub: "এন্টারপ্রাইজ SLA গ্যারান্টি" },
      ],
    },
    services: {
      badge: "আমাদের প্রযুক্তি ও দক্ষতাসমূহ",
      titlePrefix: "গতি ও স্কেলের জন্য তৈরি।",
      titleHighlight: "ব্যবসায়িক প্রবৃদ্ধির জন্য ডিজাইন।",
      description:
        "আমরা আধুনিক ইঞ্জিনিয়ারিং এবং আন্তর্জাতিক কোয়ালিটি সমন্বয় করে এমন প্রযুক্তি তৈরি করি যা আপনার ব্যবসাকে বাজারে অপ্রতিদ্বন্দ্বী করে তোলে।",
      requestProposal: "প্রস্তাবনা অনুরোধ করুন",
      consultationBadge: "কাস্টম ইঞ্জিনিয়ারিং প্রয়োজন?",
      consultationTitle: "জটিল টেকনোলজি বা স্পেশালাইজড প্রজেক্ট নিয়ে ভাবছেন?",
      consultationDesc:
        "আমাদের সিনিয়র সফটওয়্যার আর্কিটেক্টরা আপনার প্রয়োজনীয়তা বিশ্লেষণ করে উপযুক্ত আর্কিটেকচার ও পূর্ণাঙ্গ রোডম্যাপ প্রদান করবেন।",
      consultationBtn: "ফ্রি টেকনিক্যাল কনসালটেশন নিন",
      items: [
        {
          id: "০১",
          title: "কাস্টম ওয়েব ডেভেলপমেন্ট",
          description:
            "Next.js ও React দিয়ে তৈরি সুপার-ফাস্ট, এসইও-ফ্রেন্ডলি এবং রেসপন্সিভ ওয়েব প্ল্যাটফর্ম যা আপনার ব্র্যান্ডকে শক্তিশালী করে।",
          tag: "হাই পারফরম্যান্স",
          features: [
            "Next.js অ্যাপ রাউটার ও SSR/SSG আর্কিটেকচার",
            "সাব-সেকেন্ড লোডিং স্পিড ও ৯৯+ কোর ওয়েব ভাইটালস",
            "হেডলেস সিএমএস ইন্টিগ্রেশন (Sanity, Strapi)",
            "আন্তর্জাতিক এসইও ও অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ড",
          ],
        },
        {
          id: "০২",
          title: "ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন",
          description:
            "স্কেলেবল SaaS প্ল্যাটফর্ম এবং জটিল ওয়েব সফটওয়্যার যা উচ্চ ট্রাফিক ও বিজনেস-ক্রিটিকাল লজিক সহজেই পরিচালনা করে।",
          tag: "স্কেলেবল SaaS",
          features: [
            "কাস্টম RESTful ও GraphQL হাই-স্পিড API",
            "নিরাপদ অথেনটিকেশন ও RBAC অ্যাক্সেস কন্ট্রোল",
            "রিলেশনাল ও NoSQL ডাটাবেস ডিজাইন",
            "রিয়েল-টাইম ডাটা সিঙ্ক ও WebSockets",
          ],
        },
        {
          id: "০৩",
          title: "ইউআই/ইউএক্স ও প্রোডাক্ট ডিজাইন",
          description:
            "চোখ জুড়ানো এবং ব্যবহারকারী-বান্ধব ডিজিটাল ইন্টারফেস যা ইউজার এনগেজমেন্ট ও বিক্রয় উল্লেখযোগ্য হারে বৃদ্ধি করে।",
          tag: "কনভার্সন-কেন্দ্রিক",
          features: [
            "ইউজার রিসার্চ ও প্রতিযোগিতামূলক অডিট",
            "ইন্টারেক্টিভ ফিগমা প্রোটোটাইপিং ও ডিজাইন সিস্টেম",
            "কনভার্সন রেট অপ্টিমাইজেশন (CRO)",
            "সকল ডিভাইসের জন্য নিখুঁত রেসপন্সিভ ডিজাইন",
          ],
        },
        {
          id: "০৪",
          title: "ই-কমার্স ইঞ্জিনিয়ারিং",
          description:
            "উচ্চ কনভার্সন রেটের অনলাইন শপ, দ্রুততম চেকআউট ও পেমেন্ট গেটওয়ে ইন্টিগ্রেশন সহ পূর্ণাঙ্গ ই-কমার্স সলিউশন।",
          tag: "সেলস ইঞ্জিন",
          features: [
            "Shopify Plus ও হেডলেস কাস্টম স্টোরফ্রন্ট",
            "আন্তর্জাতিক পেমেন্ট গেটওয়ে (Stripe, PayPal, SSLCommerz)",
            "স্বয়ংক্রিয় ট্যাক্স, কারেন্সি ও শিপিং লজিক",
            "অর্ডারের তথ্য ও কার্ট রিকভারি অটোমেশন",
          ],
        },
        {
          id: "০৫",
          title: "ক্লাউড আর্কিটেকচার ও ডেভঅপ্স",
          description:
            "অটোমেটেড ডিপ্লয়মেন্ট পাইপলাইন, ডকার ও কুবারনেটিসের মাধ্যমে ৯৯.৯৯% আপটাইম ও ডেটা সিকিউরিটি নিশ্চিতকরণ।",
          tag: "এন্টারপ্রাইজ গ্রেড",
          features: [
            "AWS, Google Cloud ও Vercel ডিপ্লয়মেন্ট",
            "অটোমেটেড CI/CD পাইপলাইন ও জিরো ডাউনটাইম",
            "Docker ও কনটেইনারাইজড ক্লাউড সেটআপ",
            "SSL এনক্রিপশন, WAF ও অটো ক্লাউড ব্যাকআপ",
          ],
        },
        {
          id: "০৬",
          title: "২৪/৭ আইটি মেইনটেন্যান্স ও সাপোর্ট",
          description:
            "দীর্ঘমেয়াদী নির্ভরযোগ্য পার্টনারশিপ—প্রোঅ্যাকটিভ মনিটরিং, সিকিউরিটি প্যাচ, বাগ সমাধান ও নিয়মিত ফিচার আপডেট।",
          tag: "সার্বক্ষণিক সেবা",
          features: [
            "গ্যারান্টিযুক্ত দ্রুত SLA রেসপন্স টাইম",
            "নিয়মিত সিকিউরিটি স্ক্যান ও ভালনারেবিলিটি প্যাচ",
            "পারফরম্যান্স মনিটরিং ও সার্ভার হেলথ চেক",
            "ধারাবাহিক স্প্রিন্ট ও নতুন ফিচার সংযোজন",
          ],
        },
      ],
    },
    about: {
      badge: "কেন এমটিএম টেক বেছে নেবেন",
      titlePrefix: "উদ্ভাবনী ব্র্যান্ডগুলোকে ক্ষমতায়ন করছি",
      titleHighlight: "গ্লোবাল টেক শ্রেষ্ঠত্ব দিয়ে।",
      description:
        "আমরা শুধু কোড লিখি না—আমরা আপনার ডিজিটাল প্রযুক্তিগত সহযোগী হিসেবে কাজ করি। জটিল ব্যবসায়িক লক্ষ্যকে রূপান্তর করি সুরক্ষিত ও ভবিষ্যৎমুখী সম্পদে।",
      guaranteedText: "নিশ্চিত গুণমান",
      networkTitle: "গ্লোবাল ডেলিভারি নেটওয়ার্ক",
      coverageText: "বিশ্বজুড়ে ২৪/৭ কাভারেজ",
      commitmentBadge: "আমাদের মূল অঙ্গীকার",
      commitmentQuote: "“আপনার স্বপ্ন | আমাদের প্রযুক্তি”",
      commitmentDesc:
        "আমরা আপনার টাইমজোন, স্প্রিন্ট সাইকেল এবং টিমের সাথে সম্পূর্ণ সমন্বয় রেখে আন্তর্জাতিক মানের সেবা প্রদান করি।",
      hubsTitle: "প্রধান ক্লায়েন্ট হাবসমূহ",
      latencyLabel: "এজ সিডিএন লেটেন্সি",
      timezoneLabel: "টাইমজোন সমন্বয়",
      pillars: [
        {
          title: "আন্তর্জাতিক ইঞ্জিনিয়ারিং স্ট্যান্ডার্ড",
          description:
            "আমরা গ্লোবাল ISO, WCAG অ্যাক্সেসিবিলিটি এবং সিলিকন ভ্যালি ইঞ্জিনিয়ারিং মানদণ্ড মেনে ক্লীন এবং মডুলার কোডবেস নিশ্চিত করি।",
          badge: "এন্টারপ্রাইজ গ্রেড",
        },
        {
          title: "স্বচ্ছ ও দ্রুত অ্যাজাইল স্প্রিন্ট",
          description:
            "সিনিয়র ইঞ্জিনিয়ারদের সাথে সরাসরি স্ল্যাক/টিমস যোগাযোগ, প্রতি সপ্তাহে লাইভ ডেমো এবং কাজের সম্পূর্ণ দৃশ্যমানতা।",
          badge: "অ্যাজাইল স্প্রিন্ট",
        },
        {
          title: "ব্যাংক-গ্রেড নিরাপত্তা ও কমপ্লায়েন্স",
          description:
            "OWASP শীর্ষ-১০ প্রতিরক্ষা, এন্ড-টু-এন্ড এনক্রিপশন ও GDPR-কমপ্লায়েন্ট সিকিউরিটি ব্যবস্থা শুরু থেকেই নিশ্চিত করা হয়।",
          badge: "জিরো-ট্রাস্ট সিকিউরিটি",
        },
        {
          title: "১০০% ইন-হাউস সিনিয়র ইঞ্জিনিয়ার",
          description:
            "কোনো থার্ড-পার্টি আউটসোর্সিং নয়। প্রতিটি কোড ও ইউআই ডিজাইন আমাদের অভিজ্ঞ ইন-হাউস ইঞ্জিনিয়ারদের দ্বারা নির্মিত।",
          badge: "অভিজ্ঞ দল",
        },
      ],
      hubs: [
        { city: "সান ফ্রান্সিসকো", region: "আমেরিকা", status: "সক্রিয়" },
        { city: "লন্ডন", region: "ইউরোপ", status: "সক্রিয়" },
        { city: "সিঙ্গাপুর", region: "এশিয়া প্যাসিফিক", status: "সক্রিয়" },
        { city: "দুবাই", region: "মধ্যপ্রাচ্য", status: "সক্রিয়" },
      ],
    },
    portfolio: {
      badge: "বাছাইকৃত কেস স্টাডিজ",
      titlePrefix: "নিখুঁত প্রযুক্তিগত কারুকার্য।",
      titleHighlight: "প্রোডাকশনে পরীক্ষিত।",
      description:
        "বিশ্বমানের উদ্ভাবক ও প্রবৃদ্ধিশীল প্রতিষ্ঠানের জন্য নির্মিত ওয়েব প্ল্যাটফর্ম ও এন্টারপ্রাইজ সফটওয়্যার প্রকল্পের এক ঝলক।",
      categories: [
        "সকল প্রজেক্ট",
        "ওয়েব অ্যাপস ও SaaS",
        "কাস্টম ওয়েবসাইট",
        "ই-কমার্স",
        "ইউআই/ইউএক্স ডিজাইন",
      ],
      statusLive: "স্ট্যাটাস: লাইভ",
      verifiedBadge: "যাচাইকৃত",
      requestSimilar: "অনুরূপ প্রজেক্টের প্রস্তাব চান",
      bottomPrompt: "আপনার কি কোনো বিশেষ প্ল্যাটফর্ম বা প্রোডাক্ট আইডিয়া আছে যা নিয়ে আলোচনা করতে চান?",
      bottomCta: "আপনার প্রোডাক্ট আর্কিটেকচার নিয়ে আলোচনা করুন",
    },
    testimonials: {
      badge: "ক্লায়েন্ট রিভিউ ও বিশ্বস্ততা",
      titlePrefix: "উদ্ভাবকদের পছন্দ।",
      titleHighlight: "বিশ্বজুড়ে প্রশংসিত।",
      description:
        "জেনে নিন কীভাবে এমটিএম টেক গ্লোবাল ফাউন্ডার, সিটিও এবং এন্টারপ্রাইজ টিমকে দ্রুত প্রবৃদ্ধি অর্জনে সহায়তা করে চলেছে।",
      verifiedRating: "৫.০ / ৫.০ ভেরিফায়েড",
      trustSubtitle: "১৪+ দেশের নেতৃস্থানীয় ব্র্যান্ডের বিশ্বস্ত প্রযুক্তি অংশীদার",
    },
    pricing: {
      badge: "স্বচ্ছ ইনভেস্টমেন্ট মডেল",
      titlePrefix: "স্পষ্ট ও নির্ধারিত মূল্য।",
      titleHighlight: "আপসহীন বিশ্বমানের মান।",
      description:
        "প্রজেক্ট-ভিত্তিক নির্দিষ্ট বাজেট অথবা মাসিক ডেডিকেটেড ইঞ্জিনিয়ারিং স্প্রিন্ট পড বেছে নিন। কোনো গোপন চার্জ নেই।",
      toggleProject: "প্রজেক্ট-ভিত্তিক (ফিক্সড স্কোপ)",
      toggleRetainer: "মাসিক ডেডিকেটেড পড",
      mostPopular: "সর্বাধিক জনপ্রিয় প্যাকেজ",
      capabilitiesTitle: "অন্তর্ভুক্ত সেবাসমূহ:",
      customPrice: "কাস্টম",
      guarantees: [
        {
          title: "১০০% সোর্স কোড ও আইপি মালিকানা",
          desc: "প্রজেক্ট ডেলিভারির সাথে সাথেই কোডবেস, ডেটাবেস ও সকল অ্যাসেটের পূর্ণ মালিকানা আপনার।",
        },
        {
          title: "কঠোর নন-ডিসক্লোজার চুক্তি (NDA)",
          desc: "আপনার ব্যবসায়িক আইডিয়া, অ্যালগরিদম ও সকল গোপনীয় তথ্য সম্পূর্ণ সুরক্ষিত থাকবে।",
        },
        {
          title: "মাইলস্টোন-ভিত্তিক নিরাপদ পেমেন্ট",
          desc: "প্রতিটি ধাপের সফল কোড ডেলিভারি ও যাচাইয়ের পরেই কেবল পেমেন্ট সম্পন্ন হবে।",
        },
      ],
    },
    contact: {
      badge: "ডিজিটাল ট্রান্সফর্মেশন শুরু করুন",
      titlePrefix: "আসুন একসাথে গড়ি",
      titleHighlight: "অসাধারণ কিছু।",
      description:
        "নতুন কোনো প্রজেক্ট, প্ল্যাটফর্ম রিডিজাইন বা টেকনিক্যাল পরামর্শ প্রয়োজন? আপনার চিন্তাভাবনা আমাদের জানান, আমরা পরিকল্পনা সাজাবো।",
      promiseBadge: "আমাদের প্রতিশ্রুতি",
      promiseTitle: "আপনার স্বপ্ন | আমাদের প্রযুক্তি",
      promiseDesc:
        "হাই-স্পিড স্প্রিন্ট পড হোক বা পূর্ণাঙ্গ সিস্টেম ডেভেলপমেন্ট—আমরা পরিমাপযোগ্য ব্যবসায়িক সাফল্যের প্রযুক্তি উপহার দিই।",
      directInquiries: "সরাসরি যোগাযোগ",
      technicalAdvisory: "টেকনিক্যাল অ্যাডভাইজরি",
      engineeringBase: "ইঞ্জিনিয়ারিং হেডকোয়ার্টার",
      baseLocation: "ঢাকা, বাংলাদেশ • গ্লোবাল রিমোট হাব",
      availableBadge: "উপলব্ধ",
      slaNotice: "৪ ঘণ্টার মধ্যে রেসপন্স SLA: সিনিয়র ইঞ্জিনিয়ারিং টিম সরাসরি উত্তর দেবে।",
      ndaNotice: "মিউচুয়াল NDA: আপনার সকল তথ্য ও আইডিয়া ১০০% নিরাপদ ও গোপনীয় থাকবে।",
      successTitle: "বার্তা সফলভাবে পাঠানো হয়েছে!",
      successDesc:
        "এমটিএম টেক-এ যোগাযোগ করার জন্য ধন্যবাদ। আমাদের সিনিয়র ইঞ্জিনিয়ারিং দল আপনার প্রজেক্ট বিশ্লেষণ করে ৪ কার্যঘণ্টার মধ্যে যোগাযোগ করবে।",
      sendAnother: "আরেকটি বার্তা পাঠান",
      servicesLabel: "১. আপনি কোন কোন সেবায় আগ্রহী?",
      budgetLabel: "২. আনুমানিক বাজেট বা প্রজেক্ট স্কোপ",
      nameLabel: "আপনার পূর্ণ নাম *",
      namePlaceholder: "উদাঃ মোঃ রহিম",
      emailLabel: "ব্যবসায়িক ইমেইল *",
      emailPlaceholder: "rahim@company.com",
      companyLabel: "কোম্পানির নাম / বর্তমান ওয়েবসাইট",
      companyPlaceholder: "কোম্পানি লিমিটেড বা https://example.com",
      messageLabel: "প্রজেক্টের বিবরণ ও লক্ষ্য *",
      messagePlaceholder:
        "আপনার প্রজেক্টের রিকোয়ারমেন্ট, সময়সীমা ও মূল লক্ষ্যসমূহ বিস্তারিত লিখুন...",
      submitBtn: "প্রজেক্ট প্রস্তাব পাঠান",
      submittingBtn: "এনক্রিপ্ট করে বার্তা পাঠানো হচ্ছে...",
      privacyBadge: "জিরো স্প্যাম • ১০০% তথ্য গোপনীয়তার গ্যারান্টি",
    },
    footer: {
      newsletterBadge: "আধুনিক প্রযুক্তির সাথে আপডেট থাকুন",
      newsletterTitle: "এমটিএম টেক ইঞ্জিনিয়ারিং নিউজলেটারে যুক্ত হোন",
      newsletterDesc:
        "Next.js 16 আর্কিটেকচার, ক্লাউড স্কেলিং এবং হাই-কনভার্সন ডিজাইন প্যাটার্নের নিয়মিত টেকনিক্যাল বিশ্লেষণ পান।",
      newsletterPlaceholder: "আপনার কাজের ইমেইল দিন",
      subscribeBtn: "সাবস্ক্রাইব",
      subscribedBtn: "সাবস্ক্রাইবড!",
      tagline: "আপনার স্বপ্ন | আমাদের প্রযুক্তি",
      elevatorPitch:
        "আন্তর্জাতিক মানের ওয়েব ডেভেলপমেন্ট, ফুল-স্ট্যাক অ্যাপ্লিকেশন ও ক্লাউড সিস্টেম তৈরিতে দূরদর্শী ব্র্যান্ডগুলোর বিশ্বস্ত সহযোগী।",
      operationalStatus: "সকল সিস্টেম সক্রিয় • ৯৯.৯৯% আপটাইম",
      col1Title: "মূল দক্ষতাসমূহ",
      col2Title: "প্রতিষ্ঠান ও কাজ",
      col3Title: "স্ট্যান্ডার্ড ও নিরাপত্তা",
      copyright: "এমটিএম টেক (mtmtechbd)। সর্বস্বত্ব সংরক্ষিত।",
      builtWith: "Next.js 16, React 19 ও Tailwind CSS দিয়ে নির্মিত",
      backToTop: "উপরে যান",
    },
  },
};
