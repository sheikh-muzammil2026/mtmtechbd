export const translations = {
  en: {
    navbar: {
      tagline: "Educational Management Systems",
      links: [
        { name: "Home", href: "#home" },
        { name: "MMIS", href: "#mmis" },
        { name: "Services", href: "#services" },
        { name: "Projects", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Pricing", href: "#pricing" },
        { name: "Contact", href: "#contact" },
      ],
      getStarted: "Book a Free Demo",
      getStartedShort: "Book Demo",
      menuOpen: "Open navigation menu",
      menuClose: "Close navigation menu",
    },
    hero: {
      badge: "EDUCATIONAL MANAGEMENT SYSTEMS",
      badgeSub: "ERP for Schools, Colleges & Madrasahs",
      headlinePrefix: "Complete Digital Management for",
      headlineHighlight1: "Modern Educational",
      headlineMiddle: "Institutions & Campuses.",
      subheadline:
        "MTM Tech BD provides specialized Institutional ERP, dynamic school & madrasah websites, automated student billing, exam marksheets, smart attendance, and guardian SMS alerts.",
      ctaPrimary: "Book a Free Live Demo",
      ctaSecondary: "Explore Solutions & Modules",
      ratingText: "50+ Institutions Trust Us",
      onTimeDelivery: "100% Audit-Ready Accounts",
      webStandards: "Strict Data Privacy & Security",
      terminalTitle: "campus-erp.config.ts",
      terminalLive: "Active Campus",
      terminalComment: "// MTM Tech Educational ERP Suite",
      terminalDeployed: "System Operational • High-Speed Ready",
      metricSpeed: "Result Server Speed",
      metricConversion: "Admin Time Saved",
      conversionSub: "Office & Billing Tasks",
      stats: [
        { value: "50+", label: "Active Campuses", sub: "Schools, Colleges & Madrasahs" },
        { value: "25,000+", label: "Active Students Managed", sub: "Daily admission & profile records" },
        { value: "100%", label: "Transparent Accounts", sub: "Audit-ready daily ledger & vouchers" },
        { value: "24/7", label: "Dedicated Support", sub: "On-site and remote training assistance" },
      ],
    },
    mmis: {
      badge: "FLAGSHIP ERP PRODUCT • LIVE IN PRODUCTION",
      titlePrefix: "Smart Madrasah Management System",
      titleHighlight: "(MMIS)",
      subheading:
        "An all-in-one institutional ERP built for madrasahs, schools, and academies—automating academics, GPS attendance, split-voucher accounting, admissions, and parent portals in one unified platform.",
      tabs: [
        { id: "academics", label: "Academics & Smart Classroom" },
        { id: "finance", label: "Finance, HR & GPS Attendance" },
        { id: "admissions", label: "Admissions & Administration" },
        { id: "website", label: "Public Website & Trilingual CMS" },
      ],
      modules: {
        academics: [
          {
            id: "MOD-01",
            badge: "Color-Coded Preview",
            title: "Automated Result & Merit Ranking Engine",
            description:
              "Subject-wise mark entry with color-coded pre-publish admin preview that visibly shifts color once released. Calculates merit standing automatically to update student roll numbers in the database upon publishing, with 3-term cumulative annual progress evaluation.",
            tags: [
              "Pre-Publish Preview",
              "Auto Roll Update on Publish",
              "3-Term Cumulative GPA",
            ],
          },
          {
            id: "MOD-02",
            badge: "Printable PDF",
            title: "Exam Seat Plan, Admit Cards & Routine Builder",
            description:
              "Automated examination hall seat mapping, hall summary breakdown, and exam attendance rosters. Generates instant printable PDF admit cards with student photos and barcodes, alongside smart routines syncing subjects and syllabi to dashboards.",
            tags: [
              "Hall Seat Allocation",
              "Photo & Barcode Admit Cards",
              "Live Syllabus Sync",
            ],
          },
          {
            id: "MOD-03",
            badge: "Digital LMS",
            title: "Smart Classroom & Digital Learning Hub",
            description:
              "Integrated digital learning portal hosting live classroom links, indexed video lectures, downloadable e-books and PDF lecture sheets, online exams with instant grading, and an interactive academic calendar.",
            tags: [
              "Live Class Integration",
              "Lecture Sheets & E-Books",
              "Online Quizzes & Exams",
            ],
          },
        ],
        finance: [
          {
            id: "MOD-04",
            badge: "A4 Split Print",
            title: "Split-Voucher Accounting & Chart of Accounts",
            description:
              "Structured income and expense entry with admin approval workflow generating date-coded vouchers (YYYYMMDD-XXXX). Formats each A4 sheet into an Office Copy and Student/Donor Copy, backed by custom Chart of Accounts and daily financial registers.",
            tags: [
              "Date-Coded Vouchers",
              "A4 Half-Page Split Print",
              "Custom Chart of Accounts",
            ],
          },
          {
            id: "MOD-05",
            badge: "Geo-Fenced Perimeter",
            title: "GPS Geo-Fenced Staff Attendance & Payroll Automation",
            description:
              "Real-time campus boundary radius verification upon check-in. Automatically flags staff as Late after 8:05 AM and Early Departure before 1:10 PM, updating a live admin monitor that calculates rule-based salary deductions.",
            tags: [
              "GPS Boundary Verification",
              "8:05 AM / 1:10 PM Rules",
              "Automated Salary Deductions",
            ],
          },
          {
            id: "MOD-06",
            badge: "Instant PDF CV",
            title: "Teacher Management & Instant PDF CV Builder",
            description:
              "Automated monthly salary sheets, digital staff ID cards, and formal appointment letters. Features an interactive Teacher CV Maker that compiles profile records, certifications, and service history into an institutional PDF resume.",
            tags: [
              "Digital Staff ID Cards",
              "Appointment Letters",
              "Interactive Teacher CV Maker",
            ],
          },
        ],
        admissions: [
          {
            id: "MOD-07",
            badge: "123-Field Intake",
            title: "123-Field Online Admission & Auto-ID Engine",
            description:
              "Comprehensive 123-field admission workflow capturing student biometric details, guardian verification, prior academic records, and document uploads. Admin approval auto-generates unique 04-prefixed Student IDs with dynamic fee charts.",
            tags: [
              "123-Field Intake Form",
              "Auto 04-Prefix Student IDs",
              "Dynamic Admission Fees",
            ],
          },
          {
            id: "MOD-08",
            badge: "5-Role Portals",
            title: "5-Role Access Control & Student Lifecycle Management",
            description:
              "Dedicated dashboard portals with proxy-secured permission policies for Admin, Teacher, Student, Parent, and Accountant roles. Manages digital student IDs, transfer certificates (TC), testimonials, and dropout tracking.",
            tags: [
              "5 Dedicated Portals",
              "TC & Testimonial Generator",
              "Dropout & Transfer Logs",
            ],
          },
          {
            id: "MOD-09",
            badge: "Residential Hostel",
            title: "Parent Portal & Residential Hostel Management",
            description:
              "Real-time guardian portal displaying attendance, due fees, online payment slips, exam routines, and subject-wise teacher feedback. Includes a complete residential hostel system for boarding rules, mess fees, and meal charts.",
            tags: [
              "Guardian Real-Time View",
              "Subject Teacher Feedback",
              "Boarding & Meal Records",
            ],
          },
        ],
        website: [
          {
            id: "MOD-10",
            badge: "Trilingual CMS",
            title: "Trilingual Public Website & 95%+ Dynamic CMS",
            description:
              "Instant switching across Bengali, English, and Arabic with light/dark theme support. Driven by a 12-menu dynamic navigation structure where faculty rosters, managing committees, notices, and institutional policies update live from the admin panel.",
            tags: [
              "বাংলা • English • عربي",
              "12-Menu Dynamic Header",
              "95%+ Admin Panel CMS",
            ],
          },
          {
            id: "MOD-11",
            badge: "24/7 AI & WhatsApp",
            title: "AI Admission Assistant, WhatsApp & Live Notice Ticker",
            description:
              "Floating AI conversational agent answering admission and curriculum queries 24/7, paired with a one-click floating WhatsApp support button and an auto-scrolling urgent notice ticker positioned below the header.",
            tags: [
              "24/7 AI Admission Bot",
              "1-Click WhatsApp Direct",
              "Auto-Scrolling Notice Ticker",
            ],
          },
          {
            id: "MOD-12",
            badge: "Islamic Modules",
            title: "Public Result Lookup, Media Gallery & Fatwa Q&A",
            description:
              "Direct-URL student examination result verification, photo/YouTube/Facebook multimedia gallery, and a dedicated Islamic Fatwa & Q&A portal with categorized searchable archives for community guidance.",
            tags: [
              "Shareable Result Link",
              "Multimedia Photo/Video Hub",
              "Dedicated Fatwa & Q&A",
            ],
          },
        ],
      },
      techBadges: [
        { label: "Architecture", value: "Next.js 16 & React 19" },
        { label: "Backend & DB", value: "Node.js & MongoDB Engine" },
        { label: "Security & Auth", value: "Better Auth + HTTP-Only JWT" },
        { label: "Document Engine", value: "Custom PDF, Barcode & QR" },
        { label: "Reliability", value: "99.9% SLA & Daily Backups" },
      ],
      cta: {
        title:
          "Deploy this complete ERP for your institution—customized with your branding, domain, and rules.",
        description:
          "Available as a turnkey deployment with full institutional data migration, custom domain setup, staff training, and ongoing SLA maintenance.",
        demoBtn: "Schedule a Live Demo",
        liveBtn: "View Live Deployment (AIM Habiganj)",
      },
    },
    services: {
      badge: "Institutional Modules",
      titlePrefix: "Unified Campus Systems.",
      titleHighlight: "Engineered for Daily Administrative Ease.",
      description:
        "Purpose-built software modules designed to streamline student admissions, accounts, examination grading, attendance tracking, and parent communication.",
      requestProposal: "Request Solution Demo",
      consultationBadge: "Need Custom Educational Modules?",
      consultationTitle: "Have specific accounting, grading, or campus policies?",
      consultationDesc:
        "Our education technology consultants evaluate your workflows and customize the ERP to fit your administrative policies perfectly.",
      consultationBtn: "Consult with Education Specialist",
      items: [
        {
          id: "01",
          title: "Campus & School Management ERP",
          description:
            "Centralized institutional software managing student admissions, detailed digital profiles, teacher payroll, and automated tuition billing.",
          tag: "Core System",
          features: [
            "Online & counter student admission with slip printing",
            "Monthly tuition fee collection & printed receipts",
            "Boarding, hostel & mess fund ledger management",
            "Teacher & staff payroll, leaves, and records",
          ],
        },
        {
          id: "02",
          title: "Dynamic Institutional Website & Portal",
          description:
            "Modern institutional web portal featuring digital notice board, public event gallery, online admission form, and public result search.",
          tag: "Online Identity",
          features: [
            "Instant notice publishing with PDF attachments",
            "Digital online admission registration portal",
            "Event, achievement & campus photo gallery",
            "Roll-based public result lookup engine",
          ],
        },
        {
          id: "03",
          title: "Examination, Marksheets & QR Admit Cards",
          description:
            "Automated examination marks calculation, custom grading scales, printable student marksheets, and anti-fraud QR-coded admit cards.",
          tag: "Examination",
          features: [
            "Custom board grading rules & GPA calculations",
            "One-click marksheet generation with institution seal",
            "Automated merit lists & division standings",
            "Secure QR code verifiable student admit cards",
          ],
        },
        {
          id: "04",
          title: "Smart Attendance & Guardian SMS Alerts",
          description:
            "Device-integrated fingerprint/RFID attendance system with instant automated absent SMS alerts sent directly to parents' phones.",
          tag: "Attendance & SMS",
          features: [
            "Biometric fingerprint & RFID card attendance sync",
            "Instant automated absent SMS notification to parents",
            "Campus-wide announcements & emergency notice SMS",
            "Monthly attendance summary reports for teachers",
          ],
        },
        {
          id: "05",
          title: "Online Academy & Live Class Platform",
          description:
            "Integrated distance learning platform supporting live video classes, archived lessons, and international card tuition billing.",
          tag: "E-Learning",
          features: [
            "Secure live video sessions & interactive schedule",
            "Archived lecture repository for students",
            "Multi-currency international card tuition payments",
            "Assignment submission & teacher feedback portal",
          ],
        },
        {
          id: "06",
          title: "Institutional Accounting & Ledger",
          description:
            "Double-entry bookkeeping designed for educational campuses, fund tracking, general donation receipts, and Excel data migration.",
          tag: "Accounting",
          features: [
            "Double-entry bookkeeping & fund reconciliation",
            "Import existing student rosters directly from Excel",
            "Audit-ready daily income & expenditure registers",
            "Multi-branch centralized administrative dashboard",
          ],
        },
      ],
    },
    about: {
      badge: "Why Institutions Choose Us",
      titlePrefix: "Intuitive Technology Designed for",
      titleHighlight: "Administrative Excellence.",
      description:
        "We understand that educational institutions need simplicity and reliability above all. Our systems are built so that teachers, clerks, and administrators can operate them with zero prior technical training.",
      guaranteedText: "100% Institutional Data Privacy",
      networkTitle: "Active Across Bangladesh & Campuses",
      coverageText: "On-Site & Remote Onboarding",
      commitmentBadge: "OUR INSTITUTIONAL COMMITMENT",
      commitmentQuote: "“Trust in Your Institution | Excellence in Our Tech”",
      commitmentDesc:
        "We provide complete onboarding training for teachers and office staff, continuous technical handholding, and dedicated WhatsApp and phone hotlines.",
      hubsTitle: "Active Regional Campuses",
      latencyLabel: "Result Query Speed",
      timezoneLabel: "Data Backup Frequency",
      pillars: [
        {
          title: "User-Friendly for Non-Tech Staff",
          description:
            "Clean bilingual and trilingual interfaces designed so clerks, accountants, and teachers can manage data without steep learning curves.",
          badge: "Simple Interface",
        },
        {
          title: "Transparent & Audit-Ready Accounts",
          description:
            "Zero discrepancy in tuition fees, teacher payroll, or institutional funds with automated printable receipts and registers.",
          badge: "100% Financial Accuracy",
        },
        {
          title: "High-Speed Result Day Infrastructure",
          description:
            "Optimized cloud servers engineered to remain lightning-fast when thousands of parents and students check examination results simultaneously.",
          badge: "High Concurrency",
        },
        {
          title: "Dedicated Training & Lifelong Support",
          description:
            "Direct phone and WhatsApp helpline for any data entry help, routine training, or custom module additions as your campus grows.",
          badge: "Dedicated Support",
        },
      ],
      hubs: [
        { city: "Dhaka Central Campus", region: "Capital Division", status: "Active" },
        { city: "Habiganj & Sylhet Region", region: "Eastern Division", status: "Active" },
        { city: "Chittagong & Comilla Zone", region: "Southeastern Division", status: "Active" },
        { city: "Purbachal & Regional Centers", region: "Metro & Regional", status: "Active" },
      ],
    },
    portfolio: {
      badge: "Featured Work",
      titlePrefix: "Tested in Production.",
      titleHighlight: "Proven Across Educational & Web Domains.",
      description:
        "Explore our featured educational ERP deployments alongside specialized web applications, e-commerce stores, and booking platforms.",
      categories: [
        "All Projects",
        "Educational ERP",
        "E-Commerce",
        "Booking & EdTech",
        "Streaming & Media",
      ],
      statusLive: "STATUS: LIVE",
      verifiedBadge: "Verified",
      requestSimilar: "Request Solution Demo",
      bottomPrompt: "Looking for a custom ERP or digital web platform for your organization?",
      bottomCta: "Schedule an Institutional Presentation",
      liveDemoBtn: "Live Demo",
      viewRepoBtn: "View Code",
      demoOnRequest: "Demo Available Upon Request",
    },
    testimonials: {
      badge: "Institutional Testimonials",
      titlePrefix: "What Principals & Directors Say",
      titleHighlight: "About MTM Tech BD.",
      description:
        "Read verified feedback from College Principals, Madrasah Muhtamims, and Academy Directors who rely on our software for daily campus operations.",
      verifiedRating: "5.0 / 5.0 VERIFIED",
      trustSubtitle: "Trusted by Leading Colleges, Schools, Madrasahs & Academies",
    },
    pricing: {
      badge: "Fair Institutional Pricing",
      titlePrefix: "Predictable Pricing.",
      titleHighlight: "Tailored for Institutions of All Sizes.",
      description:
        "Choose an institutional package that matches your student enrollment and administrative scope. Zero hidden fees, free onboarding, and complete data ownership.",
      toggleProject: "One-Time Setup & Deployment",
      toggleRetainer: "Annual Maintenance & SLA",
      mostPopular: "Most Recommended for Campuses",
      capabilitiesTitle: "Included Modules & Features:",
      customPrice: "Custom",
      guarantees: [
        {
          title: "100% Data Privacy & Ownership",
          desc: "Your student records, financial vouchers, and institutional data remain 100% confidential and owned by your institution.",
        },
        {
          title: "Automatic Daily Cloud Backup",
          desc: "Continuous automated backups guarantee that your critical attendance, billing, and exam data are never lost.",
        },
        {
          title: "Complete Staff Training Included",
          desc: "We provide hands-on video and in-person training sessions so your teachers and office staff feel completely confident.",
        },
      ],
    },
    contact: {
      badge: "Request Consultation & Demo",
      titlePrefix: "Ready to Modernize Your Campus?",
      titleHighlight: "Let's Schedule a Live Demo.",
      description:
        "Tell us about your institution, current student capacity, and specific administrative requirements. Our education consultant will arrange a live interactive demonstration.",
      promiseBadge: "OUR PROMISE TO INSTITUTIONS",
      promiseTitle: "Dignified Technology. Zero Complexities.",
      promiseDesc:
        "We build software that honors institutional values while eliminating administrative clutter, paper waste, and accounting mistakes.",
      directInquiries: "Official Inquiries Email",
      technicalAdvisory: "Campus Helpline / WhatsApp",
      engineeringBase: "Main Office & Support Hub",
      baseLocation: "Tejgaon, Dhaka-1215 • Nationwide Delivery",
      availableBadge: "AVAILABLE",
      slaNotice: "Same-Day Response: Direct discussion with our educational software leads.",
      ndaNotice: "Strict Confidentiality: All financial and student records remain strictly protected.",
      successTitle: "Demo Request Received!",
      successDesc:
        "Thank you for contacting MTM Tech BD. Our educational technology specialist will reach out within 4 business hours to schedule your live presentation.",
      sendAnother: "Send Another Message",
      servicesLabel: "1. Which software modules do you need?",
      budgetLabel: "2. Estimated Student Capacity / Budget",
      nameLabel: "Contact Person & Designation *",
      namePlaceholder: "e.g. Principal / Muhtamim / Admin Head",
      emailLabel: "Official Email *",
      emailPlaceholder: "admin@institution.edu",
      companyLabel: "Institution / Campus Name *",
      companyPlaceholder: "e.g. Ideal Model School / Markazul Iman",
      messageLabel: "Campus Details & Requirements *",
      messagePlaceholder:
        "Share details about your institution, number of students/branches, and any specific modules you need...",
      submitBtn: "Request Free Live Demo",
      submittingBtn: "Submitting Request...",
      privacyBadge: "Zero Spam • 100% Institutional Confidentiality",
    },
    footer: {
      newsletterBadge: "CAMPUS TECH BULLETIN",
      newsletterTitle: "Stay Updated on Modern Institutional Management",
      newsletterDesc:
        "Receive practical guides and articles on optimizing student admissions, maintaining error-free accounts, and modernizing campus workflows.",
      newsletterPlaceholder: "Enter your official email",
      subscribeBtn: "Subscribe",
      subscribedBtn: "Subscribed!",
      tagline: "Educational Management Systems",
      elevatorPitch:
        "Specialized institutional software, dynamic portals, automated fee accounting, and exam result systems built exclusively for Schools, Colleges, Madrasahs, and Academies.",
      operationalStatus: "Campus Servers Active • 99.9% High Availability",
      col1Title: "Solutions & Modules",
      col2Title: "Institution Showcase",
      col3Title: "Trust & Support",
      copyright: "MTM Tech BD. All rights reserved.",
      builtWith: "Built with Next.js 16, React 19 & Tailwind CSS",
      backToTop: "Back to Top",
    },
  },
  bn: {
    navbar: {
      tagline: "শিক্ষা ও প্রাতিষ্ঠানিক ব্যবস্থাপনা প্রযুক্তি",
      links: [
        { name: "হোম", href: "#home" },
        { name: "ফিচারস", href: "#mmis" },
        { name: "সেবাসমূহ", href: "#services" },
        { name: "প্রজেক্টসমূহ", href: "#portfolio" },
        { name: "বৈশিষ্ট্য", href: "#about" },
        { name: "প্রাইস", href: "#pricing" },
        { name: "যোগাযোগ", href: "#contact" },
      ],
      getStarted: "ফ্রি ডেমো দেখুন",
      getStartedShort: "ফ্রি ডেমো",
      menuOpen: "মেনু খুলুন",
      menuClose: "মেনু বন্ধ করুন",
    },
    hero: {
      badge: "শিক্ষা ও প্রতিষ্ঠান ব্যবস্থাপনা সফটওয়্যার",
      badgeSub: "স্কুল, কলেজ ও মাদ্রাসার আধুনিক প্রযুক্তি",
      headlinePrefix: "শিক্ষা প্রতিষ্ঠানের সকল প্রশাসনিক কাজ",
      headlineHighlight1: "এক সফটওয়্যারেই",
      headlineMiddle: "স্বচ্ছ ও সম্পূর্ণ নির্ভুল।",
      subheadline:
        "ছাত্র-ছাত্রী ভর্তি, বেতন ও ফান্ডের নির্ভুল হিসাব, পরীক্ষার মার্কশিট ও রেজাল্ট প্রকাশনা, ডিজিটাল হাজিরা এবং অভিভাবক এসএমএস—কিন্ডারগার্টেন, স্কুল ও কওমী-আলিয়া মাদ্রাসা থেকে শুরু করে কলেজ ও বিশ্ববিদ্যালয়ের প্রতিটি প্রশাসনিক কাজের জন্য তৈরি সবচেয়ে নির্ভরযোগ্য সমাধান।",
      ctaPrimary: "ফ্রি লাইভ ডেমো দেখুন",
      ctaSecondary: "আমাদের সমাধানসমূহ দেখুন",
      ratingText: "৫০+ শিক্ষা প্রতিষ্ঠানের আস্থা",
      onTimeDelivery: "১০০% নির্ভুল হিসাবরক্ষণ",
      webStandards: "গোপনীয়তা ও ডেটা নিরাপত্তা",
      terminalTitle: "campus-erp.config.ts",
      terminalLive: "সক্রিয় ক্যাম্পাস",
      terminalComment: "// এমটিএম টেক শিক্ষা ব্যবস্থাপনা সিস্টেম",
      terminalDeployed: "সিস্টেম সচল • প্রোডাকশন রেডি",
      metricSpeed: "রেজাল্ট সার্ভার স্পিড",
      metricConversion: "প্রশাসনিক সময় সাশ্রয়",
      conversionSub: "অফিস ও হিসাব পরিচালনায়",
      stats: [
        { value: "৫০+", label: "সফল শিক্ষা প্রতিষ্ঠান", sub: "স্কুল, কলেজ ও মাদ্রাসা" },
        { value: "২৫,০০০+", label: "ছাত্র-ছাত্রীর তথ্য সংরক্ষিত", sub: "ভর্তি ও রেজাল্ট রেকর্ডস" },
        { value: "১০০%", label: "স্বচ্ছ হিসাব ও ভাউচার সিস্টেম", sub: "অডিট-রেডি ডেইলি লেজার" },
        { value: "২৪/৭", label: "সার্বক্ষণিক ট্রেনিং ও সাপোর্ট", sub: "অন-সাইট ও রিমোট সহায়তা" },
      ],
    },
    mmis: {
      badge: "ফ্ল্যাগশিপ ইআরপি সফটওয়্যার • প্রোডাকশনে সচল",
      titlePrefix: "স্মার্ট মাদ্রাসা ম্যানেজমেন্ট সিস্টেম",
      titleHighlight: "(MMIS)",
      subheading:
        "মাদ্রাসা, স্কুল ও শিক্ষা প্রতিষ্ঠানের জন্য একটি সমন্বিত পূর্ণাঙ্গ ইআরপি—একাডেমিক কার্যক্রম, জিপিএস হাজিরা, হাফ-পেজ ভাউচার হিসাব, ভর্তি ও অভিভাবক পোর্টাল এক ছাদের নিচে।",
      tabs: [
        { id: "academics", label: "একাডেমিক ও স্মার্ট ক্লাসরুম" },
        { id: "finance", label: "হিসাব, এইচআর ও জিপিএস হাজিরা" },
        { id: "admissions", label: "ভর্তি, পোর্টাল ও প্রশাসন" },
        { id: "website", label: "পাবলিক ওয়েবসাইট ও ত্রিভাষিক সিএমএস" },
      ],
      modules: {
        academics: [
          {
            id: "MOD-01",
            badge: "কালার-কোডেড প্রিভিউ",
            title: "স্বয়ংক্রিয় রেজাল্ট ও মেরিট র‍্যাংকিং ইঞ্জিন",
            description:
              "বিষয়ভিত্তিক নম্বর এন্ট্রি ও পাবলিশ-পূর্ব কালার-কোডেড প্রিভিউ (পাবলিশের সাথে সাথে কালার পরিবর্তন হয়)। রেজাল্ট প্রকাশের সাথে সাথেই ডাটাবেসে স্বয়ংক্রিয়ভাবে শিক্ষার্থীদের রোল নম্বর আপডেট এবং ৩-টার্মের সমন্বিত বার্ষিক মূল্যায়ন।",
            tags: [
              "পাবলিশ-পূর্ব প্রিভিউ",
              "স্বয়ংক্রিয় রোল আপডেট",
              "৩-টার্ম সমন্বিত ফলাফল",
            ],
          },
          {
            id: "MOD-02",
            badge: "প্রিন্টযোগ্য পিডিএফ",
            title: "পরীক্ষার সিট প্ল্যান, প্রবেশপত্র ও রুটিন বিল্ডার",
            description:
              "পরীক্ষার হল অনুযায়ী স্বয়ংক্রিয় সিট ম্যাপিং, হল সামারি রিপোর্ট ও হাজিরা শিট। শিক্ষার্থীর ছবি ও বারকোডযুক্ত প্রিন্টযোগ্য পিডিএফ প্রবেশপত্র এবং শিক্ষক-শিক্ষার্থীদের ড্যাশবোর্ডে স্বয়ংক্রিয় সিলেবাস সমন্বিত রুটিন।",
            tags: [
              "হল অনুযায়ী সিট প্ল্যান",
              "ছবিযুক্ত পিডিএফ প্রবেশপত্র",
              "লাইভ রুটিন ও সিলেবাস",
            ],
          },
          {
            id: "MOD-03",
            badge: "ডিজিটাল এলএমএস",
            title: "স্মার্ট ক্লাসরুম ও ডিজিটাল লার্নিং হাব",
            description:
              "লাইভ ক্লাসের লিংক, বিষয়ভিত্তিক ভিডিও লেকচার, ডাউনলোডযোগ্য ই-বুক ও লেকচার শিট, তাৎক্ষণিক নম্বর মূল্যায়নসহ অনলাইন পরীক্ষা ও কুইজ এবং একাডেমিক ক্যালেন্ডার সমৃদ্ধ লার্নিং পোর্টাল।",
            tags: [
              "লাইভ ক্লাস ইন্টিগ্রেশন",
              "লেকচার শিট ও ই-বুক",
              "অনলাইন কুইজ ও পরীক্ষা",
            ],
          },
        ],
        finance: [
          {
            id: "MOD-04",
            badge: "A4 হাফ-পেজ স্প্লিট",
            title: "স্প্লিট-ভাউচার অ্যাকাউন্টিং ও চার্ট অফ অ্যাকাউন্টস",
            description:
              "অনুমোদন ভিত্তিক আয়-ব্যয় এন্ট্রি যা তারিখভিত্তিক কোডেড ভাউচার (YYYYMMDD-XXXX) তৈরি করে। প্রতিটি A4 পাতায় স্বয়ংক্রিয়ভাবে হাফ-পেজ স্প্লিট করে 'অফিস কপি' ও 'শিক্ষার্থী/দাতা কপি' প্রিন্ট এবং কাস্টম লেজার ও রিপোর্ট।",
            tags: [
              "তারিখ-কোডেড ভাউচার",
              "A4 হাফ-পেজ স্প্লিট প্রিন্ট",
              "কাস্টম চার্ট অফ অ্যাকাউন্টস",
            ],
          },
          {
            id: "MOD-05",
            badge: "জিও-ফেন্সড সীমানা",
            title: "জিপিএস জিও-ফেন্সড স্টাফ হাজিরা ও স্বয়ংক্রিয় বেতন",
            description:
              "চেক-ইন করার সময় ক্যাম্পাসের ভৌগোলিক সীমানা স্বয়ংক্রিয়ভাবে যাচাই। সকাল ৮:০৫-এর পরে 'লেইট' এবং দুপুর ১:১০-এর পূর্বে 'আর্লি ডিপার্চার' চিহ্নিত করে লাইভ মনিটরে প্রদর্শন ও স্বয়ংক্রিয় বেতন কর্তন হিসাব।",
            tags: [
              "জিপিএস সীমানা যাচাই",
              "৮:০৫ লেইট / ১:১০ আর্লি নিয়ম",
              "স্বয়ংক্রিয় বেতন কর্তন",
            ],
          },
          {
            id: "MOD-06",
            badge: "তাত্ক্ষণিক পিডিএফ সিভি",
            title: "শিক্ষক ব্যবস্থাপনা ও তাৎক্ষণিক পিডিএফ সিভি বিল্ডার",
            description:
              "স্বয়ংক্রিয় মাসিক বেতন শিট, ডিজিটাল আইডি কার্ড ও প্রাতিষ্ঠানিক নিয়োগপত্র। সাথে ড্যাশবোর্ডের প্রোফাইল ডেটা থেকে সরাসরি এক ক্লিকে দৃষ্টিনন্দন প্রাতিষ্ঠানিক ফরম্যাটের শিক্ষক সিভি (PDF) তৈরির সুবিধা।",
            tags: [
              "ডিজিটাল স্টাফ আইডি কার্ড",
              "অফিসিয়াল নিয়োগপত্র",
              "এক ক্লিকে শিক্ষক সিভি মেকার",
            ],
          },
        ],
        admissions: [
          {
            id: "MOD-07",
            badge: "১২৩-ফিল্ড ভর্তি ফরম",
            title: "১২৩-ফিল্ড অনলাইন ভর্তি ও স্বয়ংক্রিয় আইডি ইঞ্জিন",
            description:
              "শিক্ষার্থী, অভিভাবক ও পূর্ববর্তী প্রাতিষ্ঠানিক তথ্যের পূর্ণাঙ্গ ১২৩-ফিল্ডের সমন্বিত ডিজিটাল আবেদন ফরম। অ্যাডমিন অনুমোদনের পর স্বয়ংক্রিয়ভাবে '04'-প্রিফিক্সযুক্ত স্টুডেন্ট আইডি এবং ডাইনামিক ফি চার্ট।",
            tags: [
              "১২৩-ফিল্ড ভর্তি ফরম",
              "স্বয়ংক্রিয় '04' স্টুডেন্ট আইডি",
              "ডাইনামিক ভর্তি ফি চার্ট",
            ],
          },
          {
            id: "MOD-08",
            badge: "৫টি পৃথক পোর্টাল",
            title: "৫-রোল ভিত্তিক ড্যাশবোর্ড ও শিক্ষার্থী লাইফসাইকেল",
            description:
              "অ্যাডমিন, শিক্ষক, শিক্ষার্থী, অভিভাবক ও হিসাবরক্ষকের জন্য প্রক্সি-সুরক্ষিত পৃথক পৃথক ড্যাশবোর্ড। ডিজিটাল আইডি কার্ড, প্রশংসাপত্র ও ছাড়পত্র (TC) প্রিন্ট, অভিভাবক ডিরেক্টরি এবং ড্রপআউট ট্র্যাকিং।",
            tags: [
              "৫টি পৃথক ড্যাশবোর্ড",
              "ছাড়পত্র (TC) ও প্রশংসাপত্র",
              "ড্রপআউট ও ট্রান্সফার লগ",
            ],
          },
          {
            id: "MOD-09",
            badge: "আবাসিক হোস্টেল",
            title: "অভিভাবক পোর্টাল ও আবাসিক হোস্টেল ব্যবস্থাপনা",
            description:
              "অভিভাবকদের জন্য উপস্থিতি, বকেয়া ফি, অনলাইন পেমেন্ট স্লিপ, পরীক্ষার সময়সূচি ও বিষয়ভিত্তিক শিক্ষক ফিডব্যাক পোর্টাল। সাথে আবাসিক হোস্টেলের খাবার মেনু, বোর্ডিং ফি ও ছাত্র রুটিন ব্যবস্থাপনা।",
            tags: [
              "অভিভাবক রিয়েল-টাইম ভিউ",
              "বিষয়ভিত্তিক শিক্ষক ফিডব্যাক",
              "হোস্টেল ও খাবার হিসাব",
            ],
          },
        ],
        website: [
          {
            id: "MOD-10",
            badge: "ত্রিভাষিক সিএমএস",
            title: "ত্রিভাষিক পাবলিক ওয়েবসাইট ও ৯৫%+ ডাইনামিক সিএমএস",
            description:
              "বাংলা, ইংরেজি ও আরবি ভাষার তাৎক্ষণিক সুইচিং ও লাইট/ডার্ক মোড। ১২-মেনু বিশিষ্ট আধুনিক নেভিগেশন যেখানে শিক্ষক তালিকা, পরিচালনা কমিটি, নোটিশ ও নীতিমালা অ্যাডমিন প্যানেল থেকে লাইভ আপডেট হয়।",
            tags: [
              "বাংলা • English • عربي",
              "১২-মেনু ডাইনামিক হেডার",
              "৯৫%+ অ্যাডমিন প্যানেল সিএমএস",
            ],
          },
          {
            id: "MOD-11",
            badge: "২৪/৭ এআই ও হোয়াটসঅ্যাপ",
            title: "এআই ভর্তি সহকারী, হোয়াটসঅ্যাপ ও লাইভ নোটিশ স্ক্রলার",
            description:
              "ভর্তিচ্ছুদের যেকোনো প্রশ্নের উত্তর দিতে ২৪/৭ ভাসমান এআই চ্যাটবট, সরাসরি যোগাযোগের ভাসমান হোয়াটসঅ্যাপ বাটন এবং হেডারের নিচে তাৎক্ষণিক জরুরি সংবাদের স্ক্রলিং নোটিশ বার।",
            tags: [
              "২৪/৭ এআই চ্যাটবট",
              "১-ক্লিক হোয়াটসঅ্যাপ",
              "স্ক্রলিং নোটিশ বার",
            ],
          },
          {
            id: "MOD-12",
            badge: "ইসলামিক মডিউল",
            title: "পাবলিক রেজাল্ট অনুসন্ধান, মিডিয়া গ্যালারি ও ফতোয়া পোর্টাল",
            description:
              "সরাসরি শেয়ারযোগ্য লিংকের মাধ্যমে অনলাইন রেজাল্ট যাচাই, ছবি ও ভিডিও মিডিয়া গ্যালারি এবং জনসাধারণের দ্বীনি দিকনির্দেশনার জন্য একটি পৃথক ইসলামিক ফতোয়া ও প্রশ্ন-উত্তর পোর্টাল।",
            tags: [
              "সরাসরি রেজাল্ট লিংক",
              "মাল্টিমিডিয়া গ্যালারি",
              "ইসলামিক ফতোয়া ও প্রশ্নোত্তর",
            ],
          },
        ],
      },
      techBadges: [
        { label: "আর্কিটেকচার", value: "Next.js 16 ও React 19" },
        { label: "ব্যাকএন্ড ও ডাটাবেস", value: "Node.js ও নেটিভ MongoDB" },
        { label: "নিরাপত্তা ও অথ", value: "Better Auth + HTTP-Only JWT" },
        { label: "ডকুমেন্ট ইঞ্জিন", value: "কাস্টম PDF, বারকোড ও QR" },
        { label: "আপটাইম গ্যারান্টি", value: "৯৯.৯% SLA ও ক্লাউড ব্যাকআপ" },
      ],
      cta: {
        title:
          "আপনার প্রতিষ্ঠানের নিজস্ব ব্র্যান্ডিং, ডোমেইন ও নিয়মে চালু করুন এই স্বয়ংক্রিয় ইআরপি।",
        description:
          "পূর্ববর্তী সকল ডাটা মাইগ্রেশন, কাস্টম ডোমেইন সেটআপ, শিক্ষক-স্টাফ প্রশিক্ষণ এবং সার্বক্ষণিক টেকনিক্যাল সাপোর্টসহ সম্পূর্ণ প্রস্তুত সলিউশন।",
        demoBtn: "লাইভ ডেমো শিডিউল করুন",
        liveBtn: "সরাসরি সচল প্রজেক্ট দেখুন (AIM Habiganj)",
      },
    },
    services: {
      badge: "আমাদের বিশেষায়িত সেবাসমূহ",
      titlePrefix: "কাগজে-কলমের ঝামেলা এড়িয়ে",
      titleHighlight: "শিক্ষা প্রতিষ্ঠানের উপযোগী নির্ভরযোগ্য প্রযুক্তি।",
      description:
        "স্কুল, কলেজ, মাদ্রাসা ও কোচিং সেন্টারের প্রশাসনিক ও অ্যাকাডেমিক সকল প্রক্রিয়াকে এক প্ল্যাটফর্মে নিয়ে আসার জন্য আধুনিক ও স্বাচ্ছন্দ্যপূর্ণ সফটওয়্যার সমাধান।",
      requestProposal: "ডেমো অনুরোধ করুন",
      consultationBadge: "বিশেষ কোনো মডিউল প্রয়োজন?",
      consultationTitle: "আপনার প্রতিষ্ঠানের নিজস্ব কোনো ফি বা গ্রেডিং পলিসি আছে?",
      consultationDesc:
        "আমাদের শিক্ষা প্রযুক্তি বিশেষজ্ঞের সাথে কথা বলুন। আপনার প্রতিষ্ঠানের নিয়ম ও কাঠামো অনুযায়ী সফটওয়্যার কাস্টমাইজ করে দেওয়া হবে।",
      consultationBtn: "শিক্ষা বিশেষজ্ঞের সাথে পরামর্শ করুন",
      items: [
        {
          id: "০১",
          title: "ক্যাম্পাস ও স্কুল ম্যানেজমেন্ট ইআরপি",
          description:
            "ছাত্র-ছাত্রী ভর্তি, ডিজিটাল প্রোফাইল, মাসিক বেতন গ্রহণ ও প্রিন্ট রশিদ এবং শিক্ষক-কর্মচারীদের বেতন সংরক্ষণের পূর্ণাঙ্গ ব্যবস্থা।",
          tag: "কোর সিস্টেম",
          features: [
            "অনলাইন ও অফিস কাউন্টারে দ্রুত ছাত্র-ছাত্রী ভর্তি",
            "মাসিক ফি কালেকশন ও এক ক্লিকে প্রিন্ট ভাউচার",
            "হোস্টেল, বোর্ডিং ও ডাইনিং ফান্ড ব্যবস্থাপনা",
            "শিক্ষক ও কর্মকর্তা-কর্মচারীদের বেতন ও ছুটির হিসাব",
          ],
        },
        {
          id: "০২",
          title: "ডাইনামিক প্রাতিষ্ঠানিক ওয়েবসাইট ও পোর্টাল",
          description:
            "আধুনিক ডাইনামিক ওয়েবসাইট যাতে রয়েছে ডিজিটাল নোটিশ বোর্ড, অনলাইন ভর্তি আবেদন এবং রোল নাম্বার দিয়ে পাবলিক রেজাল্ট সার্চ।",
          tag: "ডিজিটাল পরিচিতি",
          features: [
            "পিডিএফ নোটিশ আপলোড ও তাৎক্ষণিক নোটিফিকেশন",
            "অনলাইনে শিক্ষার্থী ভর্তি ফরম ও প্রিন্ট স্লিপ",
            "প্রতিষ্ঠানের ইতিহাস, অর্জন ও ফটোগ্যালারি",
            "রোল ও রেজিস্ট্রেশন নম্বর দিয়ে দ্রুত রেজাল্ট অনুসন্ধান",
          ],
        },
        {
          id: "০৩",
          title: "পরীক্ষার ফলাফল, মার্কশিট ও কিউআর প্রবেশপত্র",
          description:
            "স্বয়ংক্রিয়ভাবে জিপিএ ও গ্রেড গণনা, প্রাতিষ্ঠানিক লোগো ও সিলযুক্ত মার্কশিট প্রিন্ট এবং জালিয়াতিরোধক কিউআর কোডযুক্ত প্রবেশপত্র।",
          tag: "পরীক্ষা ও রেজাল্ট",
          features: [
            "কাস্টম গ্রেডিং সিস্টেম ও জিপিএ স্বয়ংক্রিয় গণনা",
            "এক ক্লিকে সকল শিক্ষার্থীর প্রিন্টযোগ্য নম্বরফর্দ",
            "মেধা তালিকা ও বিভাগীয় পজিশন শিট তৈরি",
            "কিউআর কোড সিকিউরড ডিজিটাল প্রবেশপত্র",
          ],
        },
        {
          id: "০৪",
          title: "স্মার্ট ডিজিটাল হাজিরা ও অভিভাবক এসএমএস",
          description:
            "ফিঙ্গারপ্রিন্ট বা আরএফআইডি কার্ড পাঞ্চ হাজিরা এবং অনুপস্থিত শিক্ষার্থীদের অভিভাবকদের মোবাইলে তাৎক্ষণিক স্বয়ংক্রিয় এসএমএস এলার্ট।",
          tag: "হাজিরা ও এসএমএস",
          features: [
            "ডিভাইস ইন্টিগ্রেটেড ফিঙ্গারপ্রিন্ট ও কার্ড হাজিরা",
            "অনুপস্থিত থাকলে অভিভাবকের মোবাইলে অটোমেটিক এসএমএস",
            "জরুরি প্রাতিষ্ঠানিক নোটিশ ও ছুটির এসএমএস ব্রডকাস্ট",
            "শিক্ষক ও ক্লাসভিত্তিক মাসিক উপস্থিতি রিপোর্ট",
          ],
        },
        {
          id: "০৫",
          title: "অনলাইন একাডেমি ও দূরশিক্ষণ প্ল্যাটফর্ম",
          description:
            "লাইভ ভিডিও ক্লাস, রেকর্ডেড ক্লাস লাইব্রেরি এবং দূরবর্তী বা প্রবাসী শিক্ষার্থীদের জন্য আন্তর্জাতিক কার্ড পেমেন্ট সুবিধা।",
          tag: "অনলাইন ক্যাম্পাস",
          features: [
            "নিরাপদ লাইভ ভিডিও ক্লাস ও শিডিউল রুটিন",
            "আর্কাইভ অডিও/ভিডিও লেকচার লাইব্রেরি",
            "প্রবাসী শিক্ষার্থীদের জন্য আন্তর্জাতিক কার্ডে ফি গ্রহণ",
            "হোমওয়ার্ক সাবমিশন ও শিক্ষকের মূল্যায়ন পোর্টাল",
          ],
        },
        {
          id: "০৬",
          title: "প্রাতিষ্ঠানিক হিসাবরক্ষণ ও লেজার সিস্টেম",
          description:
            "শিক্ষা প্রতিষ্ঠানের জন্য ডাবল-এন্ট্রি হিসাব ব্যবস্থা, বিভিন্ন ফান্ড ও অনুদান ট্র্যাকিং এবং এক্সেল ফাইল থেকে সরাসরি ডাটা মাইগ্রেশন।",
          tag: "হিসাব ও অডিট",
          features: [
            "ডাবল-এন্ট্রি অ্যাকাউন্টিং ও স্বয়ংক্রিয় ভাউচার",
            "এক্সেল থেকে সরাসরি পুরোনো ডাটা সফটওয়্যারে ইমপোর্ট",
            "অডিট-রেডি দৈনিক আয়-ব্যয় ও ক্যাশ রেজিস্টার",
            "মাল্টি-ব্রাঞ্চ বা একাধিক শাখার কেন্দ্রীয় ড্যাশবোর্ড",
          ],
        },
      ],
    },
    about: {
      badge: "কেন শিক্ষা প্রতিষ্ঠানসমূহ আমাদের বেছে নেয়",
      titlePrefix: "শিক্ষা প্রতিষ্ঠানের ভাবগাম্ভীর্য ও কাজের উপযোগী,",
      titleHighlight: "অত্যন্ত সহজ ও নিখুঁত প্রযুক্তি।",
      description:
        "প্রতিষ্ঠান পরিচালনার হিসাব ও নিয়ম সাধারণ কর্পোরেট ক্ষেত্র থেকে আলাদা। আমাদের সফটওয়্যার এমনভাবে তৈরি, যাতে শিক্ষক ও অফিস সহকারী যে কেউ কোনো কম্পিউটার ট্রেনিং ছাড়াই সহজে পরিচালনা করতে পারেন।",
      guaranteedText: "১০০% তথ্যের গোপনীয়তা ও সুরক্ষা",
      networkTitle: "সারা দেশে সক্রিয় সেবা নেটওয়ার্ক",
      coverageText: "অন-সাইট ও রিমোট প্রশিক্ষণ সহায়তা",
      commitmentBadge: "আমাদের প্রাতিষ্ঠানিক অঙ্গীকার",
      commitmentQuote: "“আপনার প্রতিষ্ঠানের আস্থা | আমাদের প্রযুক্তির সেবা”",
      commitmentDesc:
        "আমরা প্রতিটি প্রতিষ্ঠানের শিক্ষক ও দায়িত্বশীলদের হাতে-কলমে সফটওয়্যার ব্যবহারের পূর্ণাঙ্গ প্রশিক্ষণ ও সার্বক্ষণিক হটলাইন সহায়তা নিশ্চিত করি।",
      hubsTitle: "সফলভাবে পরিচালিত অঞ্চলসমূহ",
      latencyLabel: "রেজাল্ট সার্চ স্পিড",
      timezoneLabel: "নিয়মিত ডাটা ব্যাকআপ",
      pillars: [
        {
          title: "শিক্ষক ও স্টাফদের জন্য সহজ ইন্টারফেস",
          description:
            "বাংলা ও ইংরেজিতে সহজ ইন্টারফেস, ফলে অ্যাকাউন্ট্যান্ট, শিক্ষক বা অফিস সহকারী যে কেউ কোনো জটিলতা ছাড়াই ব্যবহার করতে পারেন।",
          badge: "সহজ ইন্টারফেস",
        },
        {
          title: "স্বচ্ছ ও নির্ভুল হিসাবরক্ষণ",
          description:
            "শিক্ষার্থীদের বকেয়া বেতন, শিক্ষক-কর্মচারীদের বেতন ও প্রাতিষ্ঠানিক ফান্ডের স্বচ্ছ হিসাব এবং প্রতিটি লেনদেনের প্রিন্ট ভাউচার।",
          badge: "১০০% নির্ভুল হিসাব",
        },
        {
          title: "ভর্তি ও রেজাল্ট প্রকাশের দিনেও দ্রুত সার্ভার",
          description:
            "ক্লাউড সার্ভার এমনভাবে অপ্টিমাইজ করা, যাতে হাজার হাজার অভিভাবক ও শিক্ষার্থী একযোগে রেজাল্ট দেখলেও সার্ভার স্লো বা ডাউন না হয়।",
          badge: "হাই স্পিড সার্ভার",
        },
        {
          title: "হাতে-কলমে প্রশিক্ষণ ও দীর্ঘমেয়াদী সাপোর্ট",
          description:
            "সরাসরি ফোন ও হোয়াটসঅ্যাপ হেল্পলাইন। ডাটা এন্ট্রি সহায়তা, নতুন শিক্ষক প্রশিক্ষণ বা ভবিষ্যৎ ফিচার সংযোগে আমরা সবসময় পাশে থাকি।",
          badge: "ডেডিকেটেড সাপোর্ট",
        },
      ],
      hubs: [
        { city: "ঢাকা কেন্দ্রীয় ক্যাম্পাস", region: "রাজধানী বিভাগ", status: "সক্রিয়" },
        { city: "হবিগঞ্জ ও সিলেট অঞ্চল", region: "পূর্বাঞ্চল", status: "সক্রিয়" },
        { city: "চট্টগ্রাম ও কুমিল্লা অঞ্চল", region: "দক্ষিণ-পূর্বাঞ্চল", status: "সক্রিয়" },
        { city: "পূর্বাচল ও উত্তরবঙ্গ শাখা", region: "মেট্রো ও আঞ্চলিক", status: "সক্রিয়" },
      ],
    },
    portfolio: {
      badge: "বাস্তবায়িত সফল প্রজেক্টসমূহ",
      titlePrefix: "প্রোডাকশনে সচল।",
      titleHighlight: "শিক্ষা প্রতিষ্ঠান ও আধুনিক ওয়েব সলিউশন।",
      description:
        "আমাদের তৈরিকৃত এডুকেশনাল ইআরপি, আধুনিক ই-কমার্স, টিউটর বুকিং ও স্ট্রিমিং প্ল্যাটফর্মের সফল প্রোডাকশন প্রজেক্টসমূহ দেখুন।",
      categories: [
        "সকল প্রজেক্ট",
        "এডুকেশনাল ইআরপি",
        "ই-কমার্স",
        "বুকিং ও এডটেক",
        "স্ট্রিমিং ও মিডিয়া",
      ],
      statusLive: "স্ট্যাটাস: লাইভ",
      verifiedBadge: "যাচাইকৃত",
      requestSimilar: "ডেমো অনুরোধ করুন",
      bottomPrompt: "আপনার প্রতিষ্ঠানের জন্য একটি কাস্টম ইআরপি বা আধুনিক ডিজিটাল প্ল্যাটফর্ম চান?",
      bottomCta: "আপনার প্রতিষ্ঠানে ডেমো প্রদর্শনের সময় নির্ধারণ করুন",
      liveDemoBtn: "লাইভ ডেমো",
      viewRepoBtn: "সোর্স কোড",
      demoOnRequest: "অনুরোধ সাপেক্ষে ডেমো উপলব্ধ",
    },
    testimonials: {
      badge: "মাদ্রাসা ও প্রতিষ্ঠান কর্তৃপক্ষের মূল্যায়ন",
      titlePrefix: "সম্মানিত অধ্যক্ষ ও পরিচালনা পর্ষদের",
      titleHighlight: "বাস্তব অভিজ্ঞতা ও অভিমত।",
      description:
        "যেসকল স্কুল, কলেজ, মাদ্রাসা ও একাডেমি কর্তৃপক্ষ আমাদের সফটওয়্যার ব্যবহার করে ভর্তি, হিসাব ও রেজাল্ট পরিচালনা করছেন, তাদের বাস্তব মন্তব্য।",
      verifiedRating: "৫.০ / ৫.০ ভেরিফায়েড",
      trustSubtitle: "সারা দেশের শীর্ষস্থানীয় স্কুল, কলেজ, মাদ্রাসা ও একাডেমির বিশ্বস্ত প্রযুক্তি সহযোগী",
    },
    pricing: {
      badge: "প্রতিষ্ঠানের জন্য সহজ ও সাশ্রয়ী প্যাকেজ",
      titlePrefix: "স্বচ্ছ ও সাশ্রয়ী প্যাকেজ,",
      titleHighlight: "যেকোনো আকারের প্রতিষ্ঠানের উপযোগী।",
      description:
        "আপনার শিক্ষা প্রতিষ্ঠানের শিক্ষার্থী সংখ্যা ও প্রয়োজনীয় মডিউল অনুযায়ী উপযুক্ত প্যাকেজ বেছে নিন। কোনো অতিরিক্ত বা গোপন ফি নেই।",
      toggleProject: "এককালীন সেটআপ ও সফটওয়্যার",
      toggleRetainer: "বার্ষিক রক্ষণাবেক্ষণ ও সার্ভার সাপোর্ট",
      mostPopular: "শিক্ষা প্রতিষ্ঠানের জন্য সর্বাধিক পছন্দের",
      capabilitiesTitle: "অন্তর্ভুক্ত সেবাসমূহ:",
      customPrice: "কাস্টম",
      guarantees: [
        {
          title: "১০০% তথ্যের গোপনীয়তা ও মালিকানা",
          desc: "আপনার প্রতিষ্ঠানের শিক্ষার্থী রেকর্ড, আর্থিক হিসাব ও সকল ডাটার পূর্ণ মালিকানা শতভাগ আপনার থাকবে।",
        },
        {
          title: "স্বয়ংক্রিয় ক্লাউড ব্যাকআপ",
          desc: "প্রতিদিনের ডাটা স্বয়ংক্রিয়ভাবে ক্লাউড সার্ভারে ব্যাকআপ থাকে, ফলে ডাটা হারানোর কোনো ঝুঁকি নেই।",
        },
        {
          title: "শিক্ষক ও স্টাফদের বিনামূল্যে প্রশিক্ষণ",
          desc: "সফটওয়্যারটি ব্যবহারের জন্য আমরা শিক্ষক ও অফিস সহকারীদের হাতে-কলমে সম্পূর্ণ প্রশিক্ষণ প্রদান করি।",
        },
      ],
    },
    contact: {
      badge: "পরামর্শ ও ফ্রি ডেমো অনুরোধ",
      titlePrefix: "আপনার প্রতিষ্ঠানের ব্যবস্থাপনাকে আধুনিক করতে চান?",
      titleHighlight: "আমাদের সাথে যোগাযোগ করে ফ্রি ডেমো দেখুন।",
      description:
        "আপনার প্রতিষ্ঠানের শিক্ষার্থী সংখ্যা, শাখা ও বিশেষ প্রয়োজনীয়তার কথা আমাদের জানান। আমাদের প্রতিনিধি অতি দ্রুত আপনার সাথে যোগাযোগ করে বিস্তারিত ডেমো প্রদর্শন করবেন।",
      promiseBadge: "আমাদের প্রাতিষ্ঠানিক প্রতিশ্রুতি",
      promiseTitle: "দ্বীনি ও প্রাতিষ্ঠানিক মর্যাদার প্রতি শ্রদ্ধা। সহজতম প্রযুক্তি।",
      promiseDesc:
        "আমরা কোনো অপ্রয়োজনীয় জটিলতা তৈরি করি না। প্রতিষ্ঠানের প্রতিটি টাকা ও সময় যাতে সাশ্রয় হয়, সেই লক্ষ্যেই আমাদের প্রতিটি ফিচার তৈরি।",
      directInquiries: "প্রাতিষ্ঠানিক যোগাযোগ ইমেইল",
      technicalAdvisory: "ক্যাম্পাস হেল্পলাইন / হোয়াটসঅ্যাপ",
      engineeringBase: "প্রধান কার্যালয় ও সাপোর্ট সেন্টার",
      baseLocation: "তেজগাঁও, ঢাকা-১২১৫ • সারা দেশে সেবা",
      availableBadge: "উপলব্ধ",
      slaNotice: "একই দিনে উত্তর: শিক্ষা সফটওয়্যার বিশেষজ্ঞ সরাসরি কথা বলবেন।",
      ndaNotice: "শতভাগ নিরাপত্তা: আপনার প্রতিষ্ঠানের সকল তথ্য সম্পূর্ণ সুরক্ষিত থাকবে।",
      successTitle: "ডেমো অনুরোধ সফলভাবে পৌঁছেছে!",
      successDesc:
        "এমটিএম টেক বিডি-তে যোগাযোগ করার জন্য ধন্যবাদ। আমাদের প্রতিনিধি অতি দ্রুত আপনার সাথে যোগাযোগ করে লাইভ ডেমো প্রদর্শনের সময় নির্ধারণ করবেন।",
      sendAnother: "আরেকটি বার্তা পাঠান",
      servicesLabel: "১. আপনার প্রতিষ্ঠানে কোন কোন সমাধান প্রয়োজন?",
      budgetLabel: "২. শিক্ষার্থী সংখ্যা বা আনুমানিক বাজেট",
      nameLabel: "যোগাযোগকারী ব্যক্তি ও পদবী *",
      namePlaceholder: "উদাঃ অধ্যক্ষ / মুহতামিম / অ্যাডমিন হেড",
      emailLabel: "প্রাতিষ্ঠানিক ইমেইল *",
      emailPlaceholder: "admin@institution.edu",
      companyLabel: "প্রতিষ্ঠানের নাম *",
      companyPlaceholder: "উদাঃ আইডিয়াল মডেল কলেজ / মারকাযুল ঈমান",
      messageLabel: "শাখা, শিক্ষার্থী সংখ্যা বা বিশেষ প্রয়োজনীয়তার বিবরণ *",
      messagePlaceholder:
        "আপনার শিক্ষা প্রতিষ্ঠানের শিক্ষার্থী সংখ্যা, শাখা ও বিশেষ কোনো মডিউলের প্রয়োজনীয়তা থাকলে বিস্তারিত লিখুন...",
      submitBtn: "ফ্রি লাইভ ডেমো অনুরোধ পাঠান",
      submittingBtn: "অনুরোধ পাঠানো হচ্ছে...",
      privacyBadge: "জিরো স্প্যাম • ১০০% তথ্য গোপনীয়তার গ্যারান্টি",
    },
    footer: {
      newsletterBadge: "শিক্ষা ও প্রযুক্তি বার্তা",
      newsletterTitle: "প্রতিষ্ঠান আধুনিকায়ন ও ডিজিটাল ব্যবস্থাপনা আপডেট",
      newsletterDesc:
        "নতুন শিক্ষার্থী ভর্তি বৃদ্ধি, স্বচ্ছ হিসাব পরিচালনা ও আধুনিক শিক্ষা ব্যবস্থাপনা সংক্রান্ত দরকারি টিপস পেতে যুক্ত হোন।",
      newsletterPlaceholder: "আপনার অফিশিয়াল ইমেইল দিন",
      subscribeBtn: "সাবস্ক্রাইব",
      subscribedBtn: "সাবস্ক্রাইবড!",
      tagline: "শিক্ষা ও প্রাতিষ্ঠানিক ব্যবস্থাপনা প্রযুক্তি",
      elevatorPitch:
        "স্কুল, কলেজ, মাদ্রাসা ও শিক্ষা প্রতিষ্ঠানের জন্য বিশেষায়িত ডিজিটাল ম্যানেজমেন্ট সফটওয়্যার, ডাইনামিক ওয়েবসাইট, স্বয়ংক্রিয় হিসাব ও রেজাল্ট প্রকাশনা ব্যবস্থা।",
      operationalStatus: "ক্যাম্পাস সার্ভার সক্রিয় • ৯৯.৯% আপটাইম গ্যারান্টি",
      col1Title: "মূল সমাধানসমূহ",
      col2Title: "সফল প্রজেক্ট ও পরিচয়",
      col3Title: "নিরাপত্তা ও সহায়তা",
      copyright: "এমটিএম টেক বিডি (mtmtechbd)। সর্বস্বত্ব সংরক্ষিত।",
      builtWith: "Next.js 16, React 19 ও Tailwind CSS দিয়ে নির্মিত",
      backToTop: "উপরে যান",
    },
  },
  ar: {
    navbar: {
      tagline: "أنظمة إدارة المؤسسات التعليمية",
      links: [
        { name: "الرئيسية", href: "#home" },
        { name: "نظام MMIS", href: "#mmis" },
        { name: "الحلول والأنظمة", href: "#services" },
        { name: "المشاريع المنفذة", href: "#portfolio" },
        { name: "لماذا تختارنا", href: "#about" },
        { name: "الباقات والأسعار", href: "#pricing" },
        { name: "تواصل معنا", href: "#contact" },
      ],
      getStarted: "طلب عرض توضيحي",
      getStartedShort: "عرض تجريبي",
      menuOpen: "فتح القائمة",
      menuClose: "إغلاق القائمة",
    },
    hero: {
      badge: "أنظمة إدارة التعليم والمدارس",
      badgeSub: "حلول متكاملة للمدارس والمعاهد والأكاديميات",
      headlinePrefix: "الإدارة الرقمية المتكاملة",
      headlineHighlight1: "للمدارس والمعاهد",
      headlineMiddle: "والأكاديميات الحديثة.",
      subheadline:
        "توفر MTM Tech BD أنظمة متطورة لإدارة المؤسسات التعليمية (ERP)، ومواقع إلكترونية تفاعلية، وتحصيل الرسوم، ورصد الدرجات وإصدار الشهادات وبطاقات الاختبارات، ومتابعة الحضور ورسائل أولياء الأمور.",
      ctaPrimary: "احجز عرضاً توضيحياً مجاناً",
      ctaSecondary: "استكشف الأنظمة والمشاريع",
      ratingText: "أكثر من 50 مؤسسة تعليمية تثق بنا",
      onTimeDelivery: "حسابات مالية دقيقة بنسبة 100%",
      webStandards: "أمان وسرية تامة لبيانات الطلاب",
      terminalTitle: "campus-erp.config.ts",
      terminalLive: "النظام قيد التشغيل",
      terminalComment: "// نظام MTM Tech لإدارة المؤسسات التعليمية",
      terminalDeployed: "النظام يعمل بنجاح • جاهز للإنتاج",
      metricSpeed: "سرعة خوادم النتائج",
      metricConversion: "توفير الوقت الإداري",
      conversionSub: "في المهام المحاسبية اليومية",
      stats: [
        { value: "+50", label: "مؤسسة تعليمية نشطة", sub: "مدارس، كليات ومعاهد" },
        { value: "+25,000", label: "طالب مسجل في النظام", sub: "إدارة القبول والملفات" },
        { value: "100%", label: "تقارير مالية جاهزة للتدقيق", sub: "سجلات يومية وإيصالات آلية" },
        { value: "24/7", label: "دعم فني وتدريب مستمر", sub: "تدريب حضوري وعن بُعد" },
      ],
    },
    mmis: {
      badge: "نظام ERP الرائد للمؤسسات • مباشر في الإنتاج",
      titlePrefix: "نظام إدارة المعاهد والمدارس الذكي",
      titleHighlight: "(MMIS)",
      subheading:
        "نظام مؤسسي متكامل صُمم خصيصاً للمدارس والمعاهد والأكاديميات—يجمع بين الأكاديميا، وحضور GPS الجغرافي، والمحاسبة المجزأة، والقبول، وبوابات أولياء الأمور في منصة واحدة موحدة.",
      tabs: [
        { id: "academics", label: "الأكاديميا والفصول الذكية" },
        { id: "finance", label: "المالية والموارد البشرية وحضور GPS" },
        { id: "admissions", label: "القبول والبوابات والإدارة" },
        { id: "website", label: "الموقع العام واللغات الثلاث" },
      ],
      modules: {
        academics: [
          {
            id: "MOD-01",
            badge: "معاينة بالألوان",
            title: "محرك النتائج وحساب الترتيب التلقائي",
            description:
              "إدخال الدرجات حسب المواد مع معاينة ملونة قبل النشر يتغير لونها بمجرد الاعتماد. تحديث أرقام جلوس وترتيب الطلاب في قاعدة البيانات تلقائياً، مع تقييم تراكمي سنوي على 3 فصول دراسية.",
            tags: [
              "معاينة ملونة قبل النشر",
              "تحديث فوري لترتيب الطلاب",
              "تقييم تراكمي لـ 3 فصول",
            ],
          },
          {
            id: "MOD-02",
            badge: "مستندات PDF",
            title: "مخطط قاعات الامتحانات والبطاقات والجدول",
            description:
              "توزيع تلقائي للمقاعد داخل القاعات، وكشوف حضور الاختبارات والملخصات. إصدار بطاقات دخول الامتحانات بصور الطلاب والرموز الشريطية، مع مزامنة الجداول والمناهج للطلاب والمعلمين.",
            tags: [
              "توزيع مقاعد القاعات",
              "بطاقات اختبار مع الصور وQR",
              "مزامنة الجداول والمناهج",
            ],
          },
          {
            id: "MOD-03",
            badge: "منصة تعليمية LMS",
            title: "الفصول الذكية ومستودع المحتوى الرقمي",
            description:
              "بوابة متكاملة تشمل روابط الحصص المباشرة، والمحاضرات المسجلة، والكتب والمذكرات القابلة للتحميل، والاختبارات القصيرة الإلكترونية مع التصحيح الفوري والتقويم الأكاديمي.",
            tags: [
              "حصص افتراضية مباشرة",
              "مذكرات وكتب رقمية",
              "اختبارات وتصحيح فوري",
            ],
          },
        ],
        finance: [
          {
            id: "MOD-04",
            badge: "طباعة A4 مجزأة",
            title: "محاسبة السندات المجزأة ودليل الحسابات",
            description:
              "تسجيل الإيرادات والمصروفات بدورة اعتماد إدارية تصدر سندات مرمزة بالتاريخ (YYYYMMDD-XXXX). طباعة مجزأة لنصف صفحة A4 (نسخة الإدارة ونسخة الطالب/المتبرع) مع دليل حسابات وتقارير دورية.",
            tags: [
              "سندات مرمزة بالتاريخ",
              "طباعة نصف صفحة A4 مزدوجة",
              "دليل حسابات وتقارير مالية",
            ],
          },
          {
            id: "MOD-05",
            badge: "نطاق جغرافي GPS",
            title: "حضور الموظفين بنظام GPS وأتمتة الرواتب",
            description:
              "تحقق تلقائي من النطاق الجغرافي للحرم المدرسي عند تسجيل الدخول. تسجيل التأخير بعد الساعة 8:05 صباحاً والانصراف المبكر قبل 1:10 ظهراً، مع شاشة مراقبة حية وخصومات آلية.",
            tags: [
              "تحديد النطاق الجغرافي GPS",
              "قواعد 8:05 و 1:10",
              "احتساب الخصومات آلياً",
            ],
          },
          {
            id: "MOD-06",
            badge: "سيرة ذاتية PDF فورية",
            title: "إدارة الكادر التعليمي ومنشئ السيرة الذاتية",
            description:
              "مسيرات الرواتب الشهرية التلقائية، والبطاقات التعريفية الرقمية، وخطابات التعيين الرسمية. منشئ سيرة ذاتية تفاعلي يستخرج سيرة مهنية معتمدة بصيغة PDF مباشرة من بيانات الملف الشخصي.",
            tags: [
              "بطاقات الموظفين الرقمية",
              "خطابات التعيين الرسمية",
              "إنشاء سيرة ذاتية PDF فورية",
            ],
          },
        ],
        admissions: [
          {
            id: "MOD-07",
            badge: "123 حقلاً للقبول",
            title: "محرك القبول الإلكتروني وتوليد الأرقام التعريفية",
            description:
              "استمارة قبول مفصلة تشمل 123 حقلاً للبيانات الشخصية وولي الأمر والوثائق وسجلات الطالب السابقة. توليد تلقائي للرقم التعريفي المسبوق بـ 04 عند الاعتماد، مع جداول رسوم تفاعلية.",
            tags: [
              "استمارة قبول بـ 123 حقلاً",
              "أرقام تعريفية تبدأ بـ 04",
              "جداول الرسوم والتواريخ",
            ],
          },
          {
            id: "MOD-08",
            badge: "5 بوابات متخصصة",
            title: "صلاحيات 5 أدوار وإدارة دورة حياة الطالب",
            description:
              "بوابات ولوحات تحكم مخصصة ومؤمنة للمدير، والمعلم، والطالب، وولي الأمر، والمحاسب. تشمل استخراج شهادات الانتقال والإفادات، وسجل أولياء الأمور، ومتابعة الانقطاع والتسرب.",
            tags: [
              "5 بوابات إدارية مخصصة",
              "إصدار شهادات الانتقال",
              "متابعة سجلات الطلاب",
            ],
          },
          {
            id: "MOD-09",
            badge: "السكن الداخلي",
            title: "بوابة أولياء الأمور وإدارة السكن الداخلي",
            description:
              "بوابة حية لولي الأمر لمتابعة الحضور، والرسوم المستحقة، وإيصالات الدفع، والجداول، والنتائج، وإرسال الملاحظات للمعلمين. نظام سكن داخلي متكامل لقواعد الإقامة ولوائح الوجبات.",
            tags: [
              "متابعة فورية لولي الأمر",
              "تقييم وتواصل مع المعلمين",
              "إدارة السكن الداخلي والوجبات",
            ],
          },
        ],
        website: [
          {
            id: "MOD-10",
            badge: "نظام CMS ثلاثي اللغات",
            title: "موقع عام بثلاث لغات ونظام إدارة محتوى متكامل 95%+",
            description:
              "تبديل فوري بين العربية والإنجليزية والبنغالية مع الوضع الليلي والنهاري. قائمة تنقل ديناميكية من 12 قسماً تتيح تحديث الكادر التعليمي، ومجلس الإدارة، واللوائح والإعلانات مباشرة من لوحة التحكم.",
            tags: [
              "عربي • English • বাংলা",
              "قائمة ديناميكية من 12 قسماً",
              "إدارة محتوى بنسبة 95%+",
            ],
          },
          {
            id: "MOD-11",
            badge: "ذكاء اصطناعي وواتساب",
            title: "مساعد القبول الذكي وزر الواتساب وشريط الأخبار",
            description:
              "روبوت محادثة ذكي يجيب على استفسارات الزوار والقبول على مدار الساعة، مع زر واتساب عائم للتواصل المباشر، وشريط إعلانات متحرك وتنبيهات فورية أسفل الترويسة.",
            tags: [
              "مساعد ذكاء اصطناعي 24/7",
              "تواصل مباشر عبر واتساب",
              "شريط إخباري متحرك",
            ],
          },
          {
            id: "MOD-12",
            badge: "بوابات إسلامية",
            title: "الاستعلام عن النتائج ومعرض الوسائط والفتاوى",
            description:
              "بوابة تحقق مباشر من النتائج عبر روابط مخصصة، ومعرض للصور والفيديوهات، وقسم خاص بالفتاوى الشرعية والأسئلة الشائعة مع أرشيف مصنف ومفهرس للبحث.",
            tags: [
              "رابط مباشر للتحقق من النتائج",
              "معرض صور وفيديوهات",
              "أرشيف الفتاوى والأسئلة",
            ],
          },
        ],
      },
      techBadges: [
        { label: "البنية البرمجية", value: "Next.js 16 و React 19" },
        { label: "الخادم وقاعدة البيانات", value: "Node.js ومحرك MongoDB" },
        { label: "الحماية والتوثيق", value: "Better Auth + HTTP-Only JWT" },
        { label: "محرك المستندات", value: "PDF مخصص و Barcode و QR" },
        { label: "الاعتمادية والتشغيل", value: "99.9% SLA ونسخ احتياطي" },
      ],
      cta: {
        title:
          "انشر هذا النظام المتكامل لمؤسستك التعليمية—بهويتك ونطاقك وقواعدك الإدارية الخاصة.",
        description:
          "حل جاهز للتسليم يشمل ترحيل كافة البيانات السابقة، وإعداد النطاق الخاص، وتدريب الكادر الإداري والتعليمي، مع دعم فني مستمر.",
        demoBtn: "حجز موعد لعرض تجريبي مباشر",
        liveBtn: "معاينة النظام قيد التشغيل (AIM Habiganj)",
      },
    },
    services: {
      badge: "حلولنا التعليمية المتكاملة",
      titlePrefix: "دقة تقنية متناهية.",
      titleHighlight: "مصممة خصيصاً لإدارة المؤسسات التعليمية.",
      description:
        "أنظمة برمجية متطورة مصممة خصيصاً لتيسير إدارة القبول، والحسابات المالية، ورصد الدرجات، ومتابعة الحضور، والتواصل الفعال مع أولياء الأمور.",
      requestProposal: "طلب عرض للنظام",
      consultationBadge: "هل تحتاج إلى ميزات مخصصة؟",
      consultationTitle: "هل لديك متطلبات محاسبية أو أكاديمية خاصة بمؤسستك؟",
      consultationDesc:
        "خبراؤنا مستعدون لدراسة احتياجات مؤسستك وتخصيص النظام ليتناسب مع لوائحك الإدارية والأكاديمية بكل مرونة.",
      consultationBtn: "استشر متخصص النظم التعليمية",
      items: [
        {
          id: "01",
          title: "نظام إدارة المدارس والمؤسسات (ERP)",
          description:
            "نظام شامل لإدارة بيانات الطلاب والقبول والتسجيل، وحسابات الرسوم الدراسية وإصدار الفواتير، ورواتب الكادر التعليمي.",
          tag: "النظام الأساسي",
          features: [
            "تسجيل الطلاب إلكترونياً وعبر مكاتب القبول مع طباعة الاستمارات",
            "تحصيل الرسوم الشهرية وإصدار سندات القبض بضغطة زر",
            "إدارة السكن الداخلي وصناديق الإعاشة والمصروفات اليومية",
            "إدارة رواتب المعلمين والموظفين والإجازات والسجلات",
          ],
        },
        {
          id: "02",
          title: "بوابة إلكترونية وموقع رسمي تفاعلي",
          description:
            "موقع إلكتروني رسمي للمؤسسة مزود بلوحة إعلانات رقمية، واستمارة تسجيل الطلاب عبر الإنترنت، والبحث عن النتائج برقم الجلوس.",
          tag: "الهوية الرقمية",
          features: [
            "نشر الإعلانات والتعاميم المدرسية مع مرفقات PDF",
            "بوابة قبول الطلاب الإلكترونية وطباعة كروت المراجعة",
            "معرض صور للفعاليات وإنجازات المؤسسة",
            "محرك بحث مباشر لنتائج الاختبارات برقم الجلوس",
          ],
        },
        {
          id: "03",
          title: "إدارة الاختبارات والشهادات والبطاقات الذكية",
          description:
            "احتساب تلقائي للدرجات والمعدلات التراكمية، وإصدار كشوف العلامات بشعار المؤسسة، وطباعة بطاقات دخول الاختبارات برمز QR.",
          tag: "نظام الامتحانات",
          features: [
            "حساب الدرجات والمعدلات التراكمية وفق القواعد المعتمدة",
            "إصدار شهادات العلامات الرسمية وطباعتها بنقرة واحدة",
            "إعداد قوائم الشرف والترتيب العام للطلاب تلقائياً",
            "بطاقات دخول الامتحانات مؤمنة برمز استجابة سريع (QR)",
          ],
        },
        {
          id: "04",
          title: "الحضور الذكي ورسائل أولياء الأمور الفورية",
          description:
            "تسجيل حضور الطلاب عبر البصمة أو بطاقات RFID مع إرسال رسائل نصية (SMS) فورية وتلقائية لأولياء الأمور في حال الغياب.",
          tag: "الحضور والتواصل",
          features: [
            "مزامنة أجهزة الحضور بالبصمة والبطاقات الذكية",
            "إشعار فوري لولي الأمر عبر SMS في حال غياب أو تأخر الطالب",
            "إرسال الإعلانات والتعاميم العامة عبر الرسائل النصية الجماعية",
            "تقارير حضور شهرية تفصيلية لكل فصل ومعلم",
          ],
        },
        {
          id: "05",
          title: "منصة الفصول التفاعلية والتعليم عن بعد",
          description:
            "منصة تعليم إلكتروني متكاملة تدعم الفصول المرئية المباشرة، والمحاضرات المسجلة، وبوابة دفع للطلاب المغتربين والبعيدين.",
          tag: "التعليم الإلكتروني",
          features: [
            "فصول دراسية مباشرة ومشفرة مع جدول حصص منتظم",
            "مكتبة للمحاضرات والدروس الصوتية والمرئية المسجلة",
            "بوابة دفع دولية متعددة العملات لطلاب الخارج",
            "بوابة لتسليم الواجبات وتصحيحها من قبل المعلمين",
          ],
        },
        {
          id: "06",
          title: "النظام المحاسبي وإدارة الصناديق والمصروفات",
          description:
            "نظام قيد محاسبي مزدوج مهيأ للمؤسسات التعليمية والمدارس، وإدارة الرسوم والمصروفات، واستيراد البيانات من ملفات Excel.",
          tag: "المحاسبة والمالية",
          features: [
            "محاسبة دقيقة وقيود يومية وسندات صرف وقبض آلية",
            "استيراد بيانات الطلاب والرسوم القديمة مباشرة من ملفات Excel",
            "دفاتر يومية جاهزة للتدقيق المالي وتقارير الإيرادات",
            "لوحة تحكم مركزية لإدارة الفروع المتعددة للمؤسسة",
          ],
        },
      ],
    },
    about: {
      badge: "لماذا تختار أنظمتنا التعليمية",
      titlePrefix: "حلول برمجية ذكية صُممت",
      titleHighlight: "لتحقيق التميز الأكاديمي والإداري.",
      description:
        "ندرك أن إدارة التعليم تتطلب السهولة والدقة العالية. لذا صممنا واجهات النظام لتكون سلسة وبسيطة، تمكّن المعلمين والموظفين من أداء مهامهم دون الحاجة إلى تدريب تقني معقد.",
      guaranteedText: "خصوصية وأمان بيانات المؤسسة 100%",
      networkTitle: "شبكة دعم نشطة وموزعة في مختلف المناطق",
      coverageText: "تدريب حضوري ودعم مباشر",
      commitmentBadge: "التزامنا تجاه المؤسسات",
      commitmentQuote: "“ثقة مؤسستكم | تميز حلولنا التقنية”",
      commitmentDesc:
        "نقدم تدريباً شاملاً للكوادر الإدارية والتعليمية مع دعم فني مستمر عبر الهاتف والواتساب طوال أيام الأسبوع.",
      hubsTitle: "المناطق والفروع النشطة",
      latencyLabel: "سرعة البحث في النتائج",
      timezoneLabel: "النسخ الاحتياطي التلقائي",
      pillars: [
        {
          title: "واجهة سهلة للموظفين والمعلمين",
          description:
            "واجهات واضحة باللغات العربية والإنجليزية والبنغالية تمكن المحاسب والموظف والمعلم من أداء مهامهم اليومية بكل يسر.",
          badge: "سهولة الاستخدام",
        },
        {
          title: "محاسبة مالية شفافة ودقيقة",
          description:
            "تسوية دقيقة لمستحقات الرسوم، ورواتب المعلمين، وتبرعات المؤسسة مع إصدار إيصالات مطبوعة لكل حركة مالية.",
          badge: "دقة محاسبية 100%",
        },
        {
          title: "خوادم سريعة ومستقرة وقت إعلان النتائج",
          description:
            "بنية سحابية مهيأة لتحمل ضغط آلاف أولياء الأمور والطلاب في نفس اللحظة دون أي تباطؤ أو انقطاع في الخدمة.",
          badge: "تحمل فائق للضغط",
        },
        {
          title: "تدريب مستمر ودعم فني دائم",
          description:
            "خط مساعدة مباشر عبر الهاتف والواتساب، وتدريب مستمر لأي موظف جديد لضمان استمرارية العمل دون انقطاع.",
          badge: "دعم فني مخصص",
        },
      ],
      hubs: [
        { city: "مجمع دكا المركزي", region: "العاصمة والوسط", status: "نشط" },
        { city: "منطقة هبيغانج وسيلهيت", region: "المنطقة الشرقية", status: "نشط" },
        { city: "منطقة تشيتاغونغ وكوميلا", region: "المنطقة الجنوبية الشرقية", status: "نشط" },
        { city: "منطقة بورباتشال والفروع الإقليمية", region: "الفروع الإقليمية", status: "نشط" },
      ],
    },
    portfolio: {
      badge: "المشاريع المنفذة",
      titlePrefix: "تعمل بنجاح في الإنتاج.",
      titleHighlight: "حلول تعليمية وتطبيقات ويب متطورة.",
      description:
        "استكشف مشاريعنا المنفذة في إدارة المؤسسات التعليمية (ERP)، بجانب المتاجر الإلكترونية، ومنصات الحجوزات، والبث الترفيهي.",
      categories: [
        "جميع المشاريع",
        "إدارة المؤسسات التعليمية",
        "التجارة الإلكترونية",
        "الحجوزات والتعليم",
        "البث والوسائط",
      ],
      statusLive: "الحالة: مباشر",
      verifiedBadge: "مفعل ومؤكد",
      requestSimilar: "طلب عرض مماثل",
      bottomPrompt: "هل تبحث عن نظام مخصص أو موقع متطور لمؤسستك؟",
      bottomCta: "حدد موعداً لعرض النظام في مؤسستك",
      liveDemoBtn: "معاينة حية",
      viewRepoBtn: "كود المشروع",
      demoOnRequest: "طلب العرض متاح",
    },
    testimonials: {
      badge: "شهادات القيادات التعليمية",
      titlePrefix: "ماذا يقول مديرو ورؤساء",
      titleHighlight: "المؤسسات عن MTM Tech BD.",
      description:
        "آراء موثقة من مديري المدارس والكليات والمعاهد الذين يعتمدون على أنظمتنا في إدارة مهامهم اليومية.",
      verifiedRating: "5.0 / 5.0 تقييم موثق",
      trustSubtitle: "شريك تقني موثوق لكبرى المدارس والكليات والمعاهد والأكاديميات",
    },
    pricing: {
      badge: "باقات واضحة ومناسبة للمؤسسات",
      titlePrefix: "استثمار شفاف ومرن،",
      titleHighlight: "يلائم المؤسسات التعليمية بجميع أحجامها.",
      description:
        "اختر الباقة المناسبة لحجم طلابك واحتياجاتك الإدارية. ملكية كاملة لبياناتك مع تدريب مجاني ودعم متواصل.",
      toggleProject: "إعداد وتركيب لمرة واحدة",
      toggleRetainer: "الصيانة السنوية والخوادم",
      mostPopular: "الباقة الأكثر طلباً للمدارس",
      capabilitiesTitle: "الميزات والوحدات المشمولة:",
      customPrice: "مخصص",
      guarantees: [
        {
          title: "ملكية وسرية تامة لبيانات المؤسسة",
          desc: "بيانات الطلاب وسجلات الحسابات تظل ملكاً حصرياً ومحمياً لمؤسستك بنسبة 100%.",
        },
        {
          title: "نسخ احتياطي سحابي يومي تلقائي",
          desc: "نظام نسخ احتياطي آلي يضمن عدم ضياع أي بيانات حضور أو درجات أو إيصالات مالية.",
        },
        {
          title: "تدريب شامل ومجاني للكادر الإداري",
          desc: "جلسات تدريب عملية للمعلمين والموظفين حتى يتقنوا استخدام النظام بكل سهولة.",
        },
      ],
    },
    contact: {
      badge: "طلب استشارة وعرض توضيحي",
      titlePrefix: "هل ترغب في ترقية إدارة مؤسستك رقمياً؟",
      titleHighlight: "تواصل معنا واحجز عرضاً توضيحياً مجاناً.",
      description:
        "شاركنا تفاصيل مؤسستك، وعدد الطلاب، والمتطلبات الإدارية التي تحتاجها. سيتواصل معك مستشار النظم التعليمية لتنسيق العرض التفاعلي.",
      promiseBadge: "التزامنا تجاه المؤسسات التعليمية",
      promiseTitle: "تقنية راقية ومحترمة. سهولة دون أي تعقيد.",
      promiseDesc:
        "نبني أنظمة تحترم مكانة وأهداف المؤسسات التعليمية وتختصر الوقت وتهدر الأوراق وتمنع الأخطاء المحاسبية.",
      directInquiries: "البريد الإلكتروني الرسمي",
      technicalAdvisory: "خط المساعدة المباشر / واتساب",
      engineeringBase: "المكتب الرئيسي ومركز الدعم",
      baseLocation: "دكا، بنغلاديش • خدمة متاحة لجميع المناطق",
      availableBadge: "متاح الآن",
      slaNotice: "رد في نفس اليوم: تواصل مباشر مع أخصائي النظم التعليمية.",
      ndaNotice: "سرية تامة: كافة سجلات وبيانات الطلاب والمالية محمية تماماً.",
      successTitle: "تم استلام طلب العرض التوضيحي بنجاح!",
      successDesc:
        "شكراً لتواصلك مع MTM Tech BD. سيتصل بك فريقنا المتخصص خلال 4 ساعات عمل لتنسيق العرض التوضيحي المباشر.",
      sendAnother: "إرسال طلب آخر",
      servicesLabel: "1. ما هي الأنظمة أو الموديولات التي تحتاجها؟",
      budgetLabel: "2. السعة الطلابية التقريبية / الميزانية المقدرة",
      nameLabel: "اسم المسؤول والصفة الوظيفية *",
      namePlaceholder: "مثال: المدير / رئيس مجلس الإدارة / مسؤول القبول",
      emailLabel: "البريد الإلكتروني الرسمي *",
      emailPlaceholder: "admin@institution.edu",
      companyLabel: "اسم المدرسة أو المؤسسة التعليمية *",
      companyPlaceholder: "مثال: مدرسة الإيمان النموذجية / كلية الحكمة",
      messageLabel: "تفاصيل المؤسسة والمتطلبات الخاصة *",
      messagePlaceholder:
        "أخبرنا عن عدد الطلاب والفروع والميزات المحددة التي تود تضمينها في نظامك...",
      submitBtn: "إرسال طلب العرض التوضيحي",
      submittingBtn: "جاري إرسال الطلب...",
      privacyBadge: "بدون أي رسائل مزعجة • سرية وخصوصية تامة لبيانات المؤسسة",
    },
    footer: {
      newsletterBadge: "نشرة تكنولوجيا التعليم",
      newsletterTitle: "كن على اطلاع دائم بأحدث حلول الإدارة المدرسية",
      newsletterDesc:
        "نصائح ومقالات عملية حول زيادة كفاءة القبول، وضبط الحسابات بدقة، وأتمتة المهام المدرسية.",
      newsletterPlaceholder: "أدخل بريدك الإلكتروني الرسمي",
      subscribeBtn: "اشتراك",
      subscribedBtn: "تم الاشتراك!",
      tagline: "أنظمة إدارة المؤسسات التعليمية",
      elevatorPitch:
        "أنظمة برمجية متطورة، وبوابات إلكترونية تفاعلية، وحسابات رسوم دقيقة، وإدارة نتائج الاختبارات مخصصة للمدارس والكليات والمعاهد.",
      operationalStatus: "الخوادم السحابية نشطة • جاهزية 99.9%",
      col1Title: "الحلول والأنظمة",
      col2Title: "المشاريع والمؤسسات",
      col3Title: "الأمان والدعم",
      copyright: "MTM Tech BD. جميع الحقوق محفوظة.",
      builtWith: "تم التطوير باستخدام Next.js 16 و React 19 و Tailwind CSS",
      backToTop: "العودة للأعلى",
    },
  },
};
