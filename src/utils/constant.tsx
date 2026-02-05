import BagIcon from "@/components/icons/BagIcon";
import FileShareIcon from "@/components/icons/FileShareIcon";
import GraphIcon from "@/components/icons/GraphIcon";
import SpannerIcon from "@/components/icons/SpannerIcon";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
export enum APP_ROLES {
  FABS_EMS = "EMS",
  FABS_PM = "PM",
  FABS_TALENT_MANAGER = "TALENT_MANAGER",
  FABS_TALENTS = "TALENTS",
  FABS_BOM = "BOM",
}

export interface Item {
  id: number;
  name: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  label: string;
  role: APP_ROLES[];
}

export const projectFiles = [
  {
    id: 1,
    projectId: "PRJ-001",
    projectName: "Fischer Int'l PCB Assembly",
    files: [
      {
        name: "gerber_files.zip",
        type: "gerber",
        size: "2.4 MB",
        uploadDate: "2024-01-15",
        uploader: "John Doe",
      },
      {
        name: "BOM_v2.xlsx",
        type: "bom",
        size: "156 KB",
        uploadDate: "2024-01-16",
        uploader: "Jane Smith",
      },
      {
        name: "assembly_drawing.pdf",
        type: "drawing",
        size: "890 KB",
        uploadDate: "2024-01-17",
        uploader: "John Doe",
      },
      {
        name: "pick_place.csv",
        type: "pickplace",
        size: "45 KB",
        uploadDate: "2024-01-18",
        uploader: "Tech Lead",
      },
      {
        name: "quote_final.pdf",
        type: "quote",
        size: "234 KB",
        uploadDate: "2024-01-20",
        uploader: "Sales Team",
      },
    ],
  },
  {
    id: 2,
    projectId: "PRJ-002",
    projectName: "TechCorp Component Analysis",
    files: [
      {
        name: "gerber_v3.zip",
        type: "gerber",
        size: "3.1 MB",
        uploadDate: "2024-01-22",
        uploader: "Engineer A",
      },
      {
        name: "component_list.xlsx",
        type: "bom",
        size: "198 KB",
        uploadDate: "2024-01-23",
        uploader: "Procurement",
      },
      {
        name: "assembly_instructions.pdf",
        type: "drawing",
        size: "1.2 MB",
        uploadDate: "2024-01-24",
        uploader: "Manufacturing",
      },
    ],
  },
];

export const documentTypes = [
  { value: "test-instructions", label: "Test Instructions" },
  { value: "purchase-order", label: "Purchase Order" },
  { value: "assembly-instructions", label: "Assembly Instructions" },
  { value: "cost-estimator", label: "Assembly Cost Estimator" },
];

export const aiModels = [
  { value: "claude-sonnet", label: "Claude Sonnet" },
  { value: "claude-opus", label: "Claude Opus" },
  { value: "gpt-4", label: "GPT-4" },
  { value: "gpt-3.5-turbo", label: "GPT-3.5 Turbo" },
  { value: "gemini-pro", label: "Gemini Pro" },
  { value: "gemini-ultra", label: "Gemini Ultra" },
];

export const ndaDocuments = [
  {
    id: 1,
    companyName: "Fischer International",
    documentName: "Standard NDA Agreement",
    signedDate: "2024-01-10",
    expiryDate: "2025-01-10",
    status: "Active",
    fileSize: "456 KB",
  },
  {
    id: 2,
    companyName: "TechCorp Solutions",
    documentName: "Mutual NDA - Electronics",
    signedDate: "2024-01-15",
    expiryDate: "2025-01-15",
    status: "Active",
    fileSize: "523 KB",
  },
  {
    id: 3,
    companyName: "Global Manufacturing",
    documentName: "Supplier NDA",
    signedDate: "2023-12-01",
    expiryDate: "2024-12-01",
    status: "Expired",
    fileSize: "378 KB",
  },
];

export const states = ["All States", "California", "Texas", "Massachusetts", "Illinois", "Florida"];
export const ratings = ["All Ratings", "4+ Stars", "3+ Stars", "2+ Stars", "1+ Stars", "0+ Stars"];
export const contactsData = [
  {
    id: "1",
    name: "Steve B.",
    company: "Goldmansachs",
    role: "Purchasing Manager",
    avatar: "/images/user-2.png",
    lastMessage: "Everything looks good.",
    time: "7:45PM",
    unreadCount: 4,
    isOnline: true,
  },
  {
    id: "2",
    name: "Nath Kith",
    company: "Avicon Landmark Recovery",
    role: "Director",
    avatar: "/images/user-3.png",
    lastMessage: "Looking forward to the project update",
    time: "7:45PM",
    unreadCount: 2,
  },
  {
    id: "3",
    name: "Elon Musk",
    company: "Tesla",
    role: "CEO",
    lastMessage: "Can we schedule a call for tomorrow?",
    time: "7:45PM",
  },
  {
    id: "4",
    name: "Gary Johnson",
    company: "Avicon Landmark Recovery",
    role: "Director",
    avatar: "/images/user-illustration.png",
    lastMessage: "Specs look good.",
    time: "7:45PM",
  },
  {
    id: "5",
    name: "Terrence Peters",
    company: "Avicon Landmark Recovery",
    role: "Director",
    lastMessage: "When can we expect the prototype?",
    time: "7:45PM",
  },
  {
    id: "6",
    name: "Nick Jonas",
    company: "Avicon Landmark Recovery",
    role: "Director",
    avatar: "/images/user-img.png",
    lastMessage: "Thanks for the quick turnaround",
    time: "7:45PM",
    unreadCount: 1,
  },
];

export const messages = {
  "1": [
    {
      id: "1",
      senderId: "1",
      text: "Hello Steve, the documents have been shared.",
      time: "9:00 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Thanks. I’ll confirm once reviewed.",
      time: "9:03 AM",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "1",
      text: "Everything looks good on my end.",
      time: "9:10 AM",
      isOwn: false,
    },
  ],
  "2": [
    {
      id: "1",
      senderId: "2",
      text: "Any updates on the launch timeline?",
      time: "11:15 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Pushed back by a week, but final confirmation pending.",
      time: "11:18 AM",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "2",
      text: "Noted, thanks.",
      time: "11:20 AM",
      isOwn: false,
    },
  ],
  "3": [
    {
      id: "1",
      senderId: "3",
      text: "Can we sync up later today?",
      time: "1:00 PM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Sure, let's connect around 3 PM.",
      time: "1:05 PM",
      isOwn: true,
    },
  ],
  "4": [
    {
      id: "1",
      senderId: "4",
      text: "Specs approved. Go ahead with procurement.",
      time: "2:30 PM",
      isOwn: false,
    },
  ],
  "5": [
    {
      id: "1",
      senderId: "5",
      text: "Prototype ETA still the same?",
      time: "10:10 AM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "Should arrive by Friday.",
      time: "10:13 AM",
      isOwn: true,
    },
  ],
  "6": [
    {
      id: "1",
      senderId: "6",
      text: "Thanks for the quick turnaround on the report.",
      time: "12:45 PM",
      isOwn: false,
    },
    {
      id: "2",
      senderId: "me",
      text: "You're welcome. Let me know if you need revisions.",
      time: "12:48 PM",
      isOwn: true,
    },
    {
      id: "3",
      senderId: "6",
      text: "All good. Appreciate it.",
      time: "12:50 PM",
      isOwn: false,
    },
  ],
};

export const emsCompanies = [
  {
    id: 1,
    name: "Pacific Electronics Manufacturing",
    location: "San Jose, CA",
    state: "California",
    rating: 4.8,
    reviewCount: 127,
    coordinates: { lat: 37.3382, lng: -121.8863 },
    certifications: ["ISO 9001", "ISO 14001", "ITAR", "AS9100"],
    capabilities: ["PCB Assembly", "Box Build", "Testing", "Design Services"],
    equipment: [
      "SMT Lines (6)",
      "Wave Solder",
      "Selective Solder",
      "AOI Systems",
      "X-Ray Inspection",
    ],
    projectsCompleted: 1200,
    established: 1995,
    employees: "100-500",
    specialties: ["Aerospace", "Medical", "Industrial"],
    phone: "+1 (408) 555-0123",
    email: "info@pacificems.com",
  },
  {
    id: 2,
    name: "TechAssembly Solutions",
    location: "Austin, TX",
    state: "Texas",
    rating: 4.6,
    reviewCount: 89,
    coordinates: { lat: 30.2672, lng: -97.7431 },
    certifications: ["ISO 9001", "IPC-A-610", "J-STD-001"],
    capabilities: ["SMT Assembly", "Through-hole", "Cable Assembly", "Enclosure Assembly"],
    equipment: [
      "SMT Lines (4)",
      "Manual Assembly Stations",
      "Conformal Coating",
      "Functional Test",
    ],
    projectsCompleted: 850,
    established: 2001,
    employees: "50-100",
    specialties: ["Automotive", "Consumer Electronics", "IoT"],
    phone: "+1 (512) 555-0456",
    email: "contact@techassembly.com",
  },
  {
    id: 3,
    name: "Northeast Manufacturing Corp",
    location: "Boston, MA",
    state: "Massachusetts",
    rating: 4.9,
    reviewCount: 156,
    coordinates: { lat: 42.3601, lng: -71.0589 },
    certifications: ["ISO 9001", "ISO 13485", "FDA", "ITAR"],
    capabilities: ["Medical Device Assembly", "Precision Assembly", "Clean Room Assembly"],
    equipment: [
      "Class 10,000 Clean Room",
      "SMT Lines (3)",
      "Manual Assembly",
      "Validation Equipment",
    ],
    projectsCompleted: 650,
    established: 1988,
    employees: "200-500",
    specialties: ["Medical Devices", "Life Sciences", "Defense"],
    phone: "+1 (617) 555-0789",
    email: "info@nemfg.com",
  },
  {
    id: 4,
    name: "Midwest Electronics Assembly",
    location: "Chicago, IL",
    state: "Illinois",
    rating: 4.5,
    reviewCount: 73,
    coordinates: { lat: 41.8781, lng: -87.6298 },
    certifications: ["ISO 9001", "UL", "IPC-A-610"],
    capabilities: ["High Volume Assembly", "Prototype Build", "Supply Chain Management"],
    equipment: ["SMT Lines (8)", "Wave Solder", "ICT Testing", "Automated Packaging"],
    projectsCompleted: 2100,
    established: 1992,
    employees: "500+",
    specialties: ["Industrial", "Telecommunications", "Power Electronics"],
    phone: "+1 (312) 555-0321",
    email: "sales@midwestems.com",
  },
  {
    id: 5,
    name: "Florida Precision Manufacturing",
    location: "Orlando, FL",
    state: "Florida",
    rating: 4.4,
    reviewCount: 94,
    coordinates: { lat: 28.5383, lng: -81.3792 },
    certifications: ["ISO 9001", "IPC-A-610", "RoHS"],
    capabilities: ["Quick Turn Assembly", "Prototype to Production", "Design Support"],
    equipment: ["SMT Lines (5)", "BGA Rework", "Conformal Coating", "Environmental Testing"],
    projectsCompleted: 920,
    established: 1999,
    employees: "50-100",
    specialties: ["Aerospace", "Marine", "Defense"],
    phone: "+1 (407) 555-0654",
    email: "info@floridaprecision.com",
  },
];

export const LearnSliderData = [
  {
    image: "/images/user-img.png",
    description:
      " FabSpaceAI is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short period.",
    name: "Cooper, Kristin",
    company: "Purchasing Manager, Protronics Inc.",
  },
  {
    image: "/images/user-3.png",
    description:
      " FabSpaceAI is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short period.",
    name: "Cooper, Kristin",
    company: "Purchasing Manager, Protronics Inc.",
  },
  {
    image: "/images/user-2.png",
    description:
      " FabSpaceAI is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short period.",
    name: "Cooper, Kristin",
    company: "Purchasing Manager, Protronics Inc.",
  },
  {
    image: "/images/user-2.png",
    description:
      " FabSpaceAI is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short period.",
    name: "Cooper, Kristin",
    company: "Purchasing Manager, Protronics Inc.",
  },
];

export const TalentData = [
  {
    id: 1,
    name: "Praise Dan B.",
    location: "Kentucky, USA",
    role: "PCB Assembly | Purchasing Manager",
    rate: "$24,000 - $30,000/hr",
    rating: 4.99,
    image: "/images/user-3.png",
    // style:'left-0'
  },
  {
    id: 2,
    name: "Agnes John I.",
    location: "New Jersey, USA",
    role: "PCB Assembly | Purchasing Manager",
    rate: "$24,000 - $30,000/hr",
    rating: 4.99,
    image: "/images/user-img.png",
    // style: 'left-[7rem]  h-[23rem] top-[-15px]'
  },
  {
    id: 3,
    name: "Ann T.",
    location: "Arizona, USA",
    role: "PCB Assembly | Purchasing Manager",
    rate: "$24,000 - $30,000/hr",
    rating: 4.99,
    image: "/images/user-3.png",
    // style: 'left-[14rem] z-20 h-[25rem] top-[-2rem]'
  },
  {
    id: 4,
    name: "Jordan L.",
    location: "California, USA",
    role: "PCB Assembly | Purchasing Manager",
    rate: "$24,000 - $30,000/hr",
    rating: 4.98,
    image: "/images/user-3.png",
    // style: 'left-[22rem] h-[23rem] top-[-15px] z-10',
  },
  {
    id: 5,
    name: "Sophia R.",
    location: "Florida, USA",
    role: "PCB Assembly | Purchasing Manager",
    rate: "$24,000 - $30,000/hr",
    rating: 4.97,
    image: "/images/user-2.png",
    index: "z-0",
    // style: 'left-[30rem]',
  },
];

export const languageData = [
  {
    id: 1,
    name: "Eng",
  },
  {
    id: 2,
    name: "Fre",
  },
];

export const pendingData = [
  {
    id: "PCB0005",
    project: "PCB Assembly",
    quote: "Open Quote",
    time: "1 week",
    bidders: 10,
    date: "6 Jul, 2023",
    hour: "1:00 PM",
  },
  {
    id: "PCB0005",
    project: "PCB Assembly",
    quote: "Fixed Quote",
    time: "1 week",
    bidders: 10,
    date: "7 Jul, 2023",
    hour: "10:00 AM",
  },
  {
    id: "PCB0005",
    project: "PCB Assembly",
    quote: "Open Quote",
    time: "1 week",
    bidders: 10,
    date: "7 Jul, 2023",
    hour: "4:00 PM",
  },
  {
    id: "PCB0005",
    project: "PCB Assembly",
    quote: "Fixed Quote",
    time: "1 week",
    bidders: 10,
    date: "11 Jul, 2023",
    hour: "8:00 AM",
  },
  {
    id: "PCB0005",
    project: "PCB Assembly",
    quote: "Open Quote",
    time: "1 week",
    bidders: 10,
    date: "20 Jul, 2023",
    hour: "11:00 AM",
  },
];

export const deals = [
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 1,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$200,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:32AM",
    status: "Pending",
  },
  {
    id: 2,
    company: "Fischer Int’l",
    email: "thekdfischer@email.com",
    amount: "$120,000.00",
    projectType: "PCB Assembly",
    date: "Apr 12, 2023",
    time: "09:24AM",
    status: "Pending",
  },
];

export const respondData = [
  {
    id: 1,
    name: "Yes",
  },
  {
    id: 1,
    name: "No",
  },
];
export const quotetypeData = [
  {
    id: 1,
    name: "PCB Assembly",
  },
  {
    id: 2,
    name: "PCB Volume",
  },
  {
    id: 3,
    name: "PCB Design",
  },
  {
    id: 4,
    name: "IC Packaging",
  },
  {
    id: 4,
    name: "Rework and Repair",
  },
  {
    id: 4,
    name: "PCB Fabrication",
  },
];

export const talentHireData = [
  {
    id: 1,
    title: "Hire a talent",
    desc: "Empowering Manufacturing Engineers,  Purchasing Manager.",
    buttonText: "Find Talent",
  },
  {
    id: 2,
    title: "Get Hired Today",
    desc: "Empowering Design Engineers,  Purchasing Manager.",
    buttonText: "Join Fab Talent",
  },
];

export const locationData = [
  {
    id: 1,
    name: "Nigeria",
  },
  {
    id: 2,
    name: "Ghana",
  },
];
export const quoteTypeData = [
  {
    id: 1,
    name: "FIX QUOTE",
  },
  {
    id: 2,
    name: "OPEN QUOTE",
  },
];
export const boardTypeData = [
  {
    id: 1,
    name: "109",
  },
  {
    id: 2,
    name: "120",
  },
];
export const turnTimeData = [
  {
    id: 1,
    name: "3 days",
  },
  {
    id: 2,
    name: "5 days",
  },
  {
    id: 2,
    name: "10 days",
  },
];

export const quoteMaterialsData = ["PCB", "Component", "Stencil"];

export const navBarItems = [
  {
    title: "Product",
    dropdown: [
      { link: "/core-market", name: "Core Marketplace" },
      { link: "/ai-agent", name: "AI Agents & Automation" },
      { link: "/integration", name: "Integrations" },
    ],
  },
  {
    title: "Customers",
    dropdown: [
      { link: "/purchase-manager", name: "Purchasing Managers" },
      { link: "/design-engineer", name: "Design Engineers" },
      { link: "/ems-providers", name: "EMS Providers / Contract Manufacturers" },
      { link: "", name: "Talents" },
      { link: "", name: "Case Studies & Testimonials" },
    ],
  },
  {
    title: "Resources",
    dropdown: [
      { link: "", name: "Blog & Insights" },
      { link: "", name: "Help Center" },
      { link: "", name: "Documentation" },
      { link: "", name: "Webinars & Events" },
      { link: "", name: "Developer API & SDK" },
      { link: "", name: "Whitepapers" },
    ],
  },
  { title: "Pricing" },
  {
    title: "Company",
    dropdown: [
      { link: "", name: "About" },
      { link: "", name: "Contact Us" },
      { link: "", name: "Team" },
      { link: "", name: "Careers" },
      { link: "", name: "Support  & FAQs" },
      { link: "", name: "Affiliates & Partners" },
    ],
  },
];
export const stats = [
  {
    label: "purchase",
    value: "Purchasing managers burn 20+ hours per project triaging quotes manually.",
  },
  {
    label: "design engineer",
    value: "Design engineers find out about DFM errors only after prototype costs pile up.    ",
  },
  {
    label: "ops manager",
    value:
      "Ops managers are stuck using spreadsheets to schedule technicians and approve shifts.    ",
  },
  {
    label: "missed deadlines",
    value: "Missed deadlines, human errors, and lost emails drag down profitability.",
  },
];
export const integrationChallenges = [
  {
    label: "Design teams email",
    value: "Design teams email outdated Gerber files.",
  },
  {
    label: "manually tracks",
    value: "Purchasing re-enters BOM data into ERP tools. ",
  },
  {
    label: "ops manager",
    value: "HR manually tracks technician shifts in spreadsheets. ",
  },
  {
    label: "Procurement",
    value: "Procurement spends hours chasing signatures for POs.",
  },
];

export const aiAgentEMS = [
  {
    name: "QuoteBot – Smart Quote Triage Agent",
    description:
      "Auto-compares incoming EMS bids by cost, lead time, certifications & historical performance.",
  },
  {
    name: "POBot – Automated Purchase Order Agent",
    description:
      "Auto-generates branded POs with payment terms, line items, and e-signature routing.",
  },
  {
    name: "FollowUpBot – EMS Engagement Tracker",
    description:
      "Notifies you when suppliers open, ignore, or respond to your RFQs, cutting follow-up time in half.",
  },
  {
    name: "DFM Checker – AI Design Review Agent",
    description:
      "Flags component mismatches, footprint conflicts, and spacing issues in Gerber files before fab.",
  },
  {
    name: "BOM Checker – BOM Cost Optimizer",
    description:
      "Checks BOM for errors and suggests cheaper, in-stock alternatives for BOM parts with pricing trends and lead time alerts.",
  },
  {
    name: "RevTrack Agent – Design Revision Logger",
    description:
      "Automatically annotates and tracks design file updates across shared EMS workspaces.",
  },
];

export const EMSIntegration = [
  {
    name: "BOM Tool Integrations",
    description:
      "Sync real-time part pricing and availability from Octopart, Digi-Key, Mouser, and LCSC directly into your BOM uploads.",
  },
  {
    name: "Gerber/CAD Integration",
    description:
      "Upload native design files directly from Altium, Eagle, OrCAD, KiCAD, and Autodesk Fusion 360. Our AI DRC checker launches immediately on upload.",
  },
  {
    name: "PLM Sync",
    description:
      "Automatically push updated designs, notes, and BOMs to tools like Arena PLM, Upchain, and Propel.",
  },
  {
    name: "Procurement System Integrations",
    description:
      "Push accepted quotes directly into NetSuite, SAP Ariba, or Zoho Inventory for tracking and vendor management.",
  },
  {
    name: "E-Signature Workflows",
    description:
      "One-click PO approvals via integrations with DocuSign, HelloSign, Adobe Sign—fully auditable and timestamped.",
  },
  {
    name: "Real-Time RFQ Sync",
    description:
      "Trigger new RFQ submissions from your procurement system. Automatically notify vendors and EMS partners when specs are updated.",
  },
];

export const aiAgentTalent = [
  {
    name: "ShiftBot – Smart Technician Scheduler",
    description:
      "Auto-assigns certified techs to open shifts based on location, availability, and pay rates.",
  },
  {
    name: "TimeTrack Agent – Attendance & Pay Automation",
    description:
      "Tracks hours worked and routes timesheets to payroll platforms like QuickBooks & ADP.",
  },
  {
    name: "SkillMatch Agent – Talent Recommender",
    description:
      "Matches IPC-certified techs to roles using AI-powered filters (certification, tools, experience level)",
  },
];
export const integrationTalent = [
  {
    name: "Payroll & HR Integration",
    description:
      "Sync technician shifts, time tracking, and payroll data to QuickBooks, ADP, Workday, or Paycom in real-time.",
  },
  {
    name: "ATS & Technician Profiles",
    description:
      "Pull candidate profiles from Greenhouse, BambooHR, or Lever. Update talent availability across FabSpace AI and your ATS instantly.",
  },
  {
    name: "Compliance Tools",
    description:
      "Export shift logs, job descriptions, and technician certifications for compliance audits in seconds.",
  },
];
export const AiTestomonial = [
  {
    image: "/images/user-img.png",
    description:
      " The AI quote triage cut my review time from 6 hours to 30 minutes—and we finally know which EMS partners are most responsive.",
    name: "Maria L., Sr. Buyer",
    company: "Purchasing Manager, Delta Instruments",
  },
  {
    image: "/images/user-3.png",
    description:
      "Fabspace AI caught a DFM error that saved us from wasting 3 prototypes—we've made the checker part of every NPI handoff.",
    name: "Tom K., Application Engineer",
    company: "Phoenix Microtech",
  },
  {
    image: "/images/user-3.png",
    description:
      "ShiftBot saved my ops team dozens of hours each week. We now staff our line faster with better technician-job matches.",
    name: "Diana O., Production Manager",
    company: "Titan PCB Assembly",
  },
];
export const integrationTestomonial = [
  {
    image: "/images/user-img.png",
    description:
      "With the QuickBooks and Workday integrations, we finally have shift hours, payroll, and job roles in sync—zero back-office bottlenecks.",
    name: "Stephanie J.",
    company: "HR Lead, Nova Electronics Assembly",
  },
  {
    image: "/images/user-3.png",
    description:
      "Our procurement team now sends POs in minutes, not days—DocuSign + FabSpace AI = game-changer.",
    name: "Carlos T.",
    company: "Procurement Director, Delta Instruments",
  },
  {
    image: "/images/user-3.png",
    description:
      "No more exporting BOMs from Altium and pasting into spreadsheets—live part availability right in the FabSpace AI dashboard!",
    name: "Brian O.",
    company: "Senior PCB Designer, OptiPower Tech",
  },
];
export const coreTestomonial = [
  {
    image: "/images/user-img.png",
    description: "Fabspace AI reduced our quote-to-order time from 5 days to under 24 hours.",
    name: "Maria L., Sr.",
    company: "Purchasing Manager, Delta Instruments",
  },
  {
    image: "/images/user-3.png",
    description: "It flagged a PCB clearance issue that saved us thousands in prototype rework.",
    name: "Tom K. ",
    company: "Lead Design Engineer, Phoenix Microtech",
  },
  {
    image: "/images/user-3.png",
    description:
      "We’re winning more jobs because customers now see us at the top of their quote rankings.",
    name: "James O.",
    company: "Director of Ops, Titan EMS.",
  },
];
export const AIStats = [
  {
    id: 1,
    value: "4x",
    name: "faster quote evaluations",
  },
  {
    id: 2,
    value: "100%",
    name: "automated PO creation in trials",
  },
  {
    id: 3,
    value: "35%",
    name: "fewer DFM reworks per project",
  },
  { id: 4, value: "70%", name: "shift scheduling efficiency boost" },
  { id: 5, value: "20–25%", name: " average BOM cost savings with AI part suggestions" },
];
export const coreStat = [
  {
    id: 1,
    value: "50%",
    name: "Faster RFQ Turnaround.",
  },
  {
    id: 2,
    value: "100%",
    name: "File Security & NDA Compliance.",
  },
  {
    id: 3,
    value: "1‑Click",
    name: " PO Generation = 20+ hours saved/project.",
  },
  {
    id: 4,
    value: "25%",
    name: "Reduction in BOM Cost through AI Substitution Suggestions.",
  },
  {
    id: 5,
    value: "35%",
    name: "Reduction in Engineering Rework via DFM Flagging.",
  },
];

export const integrationStats = [
  {
    id: 1,
    value: "80%",
    name: "reduction in admin time via connected PO & signature tools",
  },
  {
    id: 2,
    value: "100%",
    name: "traceability on design-to-order process across systems",
  },
  {
    id: 3,
    value: "25%",
    name: "faster BOM updates with live distributor feedst",
  },
  {
    id: 4,
    value: "Up to 35%",
    name: " payroll time saved per technician/montt",
  },
];

export const PurchaseManagerData = [
  {
    title: "One Upload = Multiple EMS Bids",
    logo: <BagIcon width="35" height="35" />,
    description:
      "Upload your BOM once. Our secure data room distributes it to pre-vetted EMS partners across the U.S. and Mexico—under NDA.",
  },
  {
    title: "AI Bid Triage",
    logo: <FileShareIcon />,
    description:
      "Our AI ranks EMS quotes by cost, lead time, certifications, and past performance. No spreadsheets required.",
  },
  {
    title: "Real-Time Quote Monitoring",
    logo: <SpannerIcon />,
    description:
      "See who’s opened your RFQ, get alerts on new bids, and track supplier engagement in one dashboard.",
  },
  {
    title: "Auto-Generate POs",
    logo: <GraphIcon />,
    description:
      "Draft branded POs with terms, line items, and e-signature routing—automatically populated from accepted quotes.",
  },
];
export const DesignEngineersData = [
  {
    title: "Real-Time BOM Pricing & Availability",
    logo: <BagIcon width="35" height="35" />,
    description: "Instantly view live pricing and lead times for every part in your BOM.",
  },
  {
    title: "AI-Powered DFM Checks",
    logo: <FileShareIcon />,
    description:
      "Upload Gerbers & BOM—our AI flags issues like clearance errors, mismatches, and layout problems before fab.",
  },
  {
    title: "Version-Controlled Data Room",
    logo: <SpannerIcon />,
    description:
      "Share all revisions securely with EMS teams. Auto-track changes and inline comments in one encrypted space.",
  },
  {
    title: "Collaborative Project Workspaces",
    logo: <GraphIcon />,
    description:
      "Invite EMS partners to your project, review suggestions, and finalize builds in real time.",
  },
];
export const EmsManufacturersData = [
  {
    title: "Matched to the Right RFQs.    ",
    logo: <BagIcon width="35" height="35" />,
    description:
      "Only receive projects that match your certifications, capacity, and specialization.",
  },
  {
    title: "Quote Faster with AI Assistance.s",
    logo: <FileShareIcon />,
    description:
      "Fill in line items, attach comments, and respond within minutegggs—not days.      ",
  },
  {
    title: "Access Project Files Under NDA.    ",
    logo: <SpannerIcon />,
    description: "Work inside a secure data room with BOMs, Gerbers, and customer notes.      .",
  },
  {
    title: "Streamlined PO Acceptance.s",
    logo: <GraphIcon />,
    description: "Once selected, review and confirm POs directly within the platform.",
  },
];
export const CoreDifferentData = [
  {
    feature: "One RFQ → Many EMS Under NDA",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "No", type: "error" },
    manual: { text: "No", type: "error" },
  },
  {
    feature: "AI-Based Quote Ranking",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "Manual", type: "muted" },
    manual: { text: "Manual", type: "muted" },
  },
  {
    feature: "PO Auto-Generation & E-Signature",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "Manual", type: "muted" },
    manual: { text: "Manual", type: "muted" },
  },
  {
    feature: "Secure Data Room w/ Version Control",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "No", type: "error" },
    manual: { text: "No", type: "error" },
  },
  {
    feature: "DFM Checks + BOM Pricing",
    fabspace: { text: "Integrated", type: "success" },
    portal: { text: "Separate Tools", type: "muted" },
    manual: { text: "Manual", type: "muted" },
  },
  {
    feature: "EMS Profile Matching by Capability",
    fabspace: { text: "Smart Match", type: "success" },
    portal: { text: "Static Directory", type: "muted" },
    manual: { text: "N/A", type: "error" },
  },
];
export const AiAgentDifferentData = [
  {
    feature: "Real-time EMS quote scoring with BOM Checker",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "No", type: "error" },
    manual: { text: "No", type: "error" },
  },
  {
    feature: "AI-based PO generation & routing",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "Manual", type: "muted" },
    manual: { text: "Manual", type: "muted" },
  },
  {
    feature: "DFM checker integrated with Gerber",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "Separate Tool", type: "muted" },
    manual: { text: "None", type: "error" },
  },
  {
    feature: "Smart shift assignment for techs",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "No", type: "error" },
    manual: { text: "Spreadsheet-based", type: "muted" },
  },
  {
    feature: "BOM cost reduction agent",
    fabspace: { text: "Yes", type: "success" },
    portal: { text: "Limited", type: "muted" },
    manual: { text: "Manual sourcing", type: "muted" },
  },
];
export const purchasingManagersStats = [
  { id: 1, name: "Faster RFQ Turnaround.", value: "50% " },
  { id: 2, name: "File Security & NDA Compliance.", value: "100%" },
  { id: 3, name: "PO Generation = 20+ hours saved/project.", value: "1‑Click " },
  { id: 4, name: "Reduction in BOM Cost through AI Substitution Suggestions.", value: "25%" },
  { id: 5, name: "Reduction in Engineering Rework via DFM Flagging.", value: "35%" },
  { id: 6, name: "hours saved per project", value: "20+" },
];
export const DesignEngineersStats = [
  { id: 1, name: "Fewer prototype reworks.", value: "35% " },
  { id: 2, name: "Faster design‑to‑quote cycle", value: "50% " },
  { id: 3, name: "File Security & NDA Compliance.", value: "100%" },
  { id: 4, name: "PO Generation = 20+ hours saved/project.", value: "1‑Click " },
  { id: 5, name: "Reduction in BOM Cost through AI Substitution Suggestions.", value: "25%" },
  { id: 6, name: "Reduction in Engineering Rework via DFM Flagging.", value: "35%" },
  { id: 7, name: "hours saved per project", value: "20+" },
];
export const ContractManufacturersStats = [
  { id: 1, name: "File Security & NDA Compliance.", value: "100%" },
  { id: 2, name: "hours saved per project", value: "20+" },
  { id: 3, name: "faster quote turnaround", value: "4×" },
  { id: 4, name: "higher win rates", value: "30%" },
];

export const WhyFabspacePurchase = [
  {
    name: "One‑Click RFQ Distribution",
    description:
      "Upload your BOM and specs once—our Secure Data Room shares them with 1,200+ pre‑vetted U.S. & Mexico EMS partners under NDA.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "AI‑Driven Quote Triage.",
    description:
      "Instantly compare bids by cost, lead time, and certification status with our AI bid triage—no more manual scorecards or missed emails.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Automated PO Generation",
    description:
      "Draft, brand, and e‑sign POs in seconds. FabSpace AI auto‑populates your company logo, payment terms, and line‑items—eliminating copy‑paste errors.",
    icon: FingerPrintIcon,
  },
  {
    name: "Real‑Time Dashboard & Alerts",
    description:
      "Track supplier engagement, get push notifications on new bids or delays, and approve your preferred vendor from one pane of glass.",
    icon: ServerIcon,
  },
  {
    name: "Seamless Integrations",
    description:
      "Sync accepted quotes and POs with NetSuite, SAP Ariba, DocuSign, and more—so data flows seamlessly through your procurement stack.",
    icon: ArrowPathIcon,
  },
];
export const WhyFabspaceDesigners = [
  {
    name: "Instant AI‑Driven DFM Checks",
    description:
      "Upload Gerber files—our DFM Checker flags footprint, clearance, and component mismatches before prototyping.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Real‑Time BOM Pricing & Availability",
    description:
      "Sync part costs and lead times from Octopart, Digi‑Key, and Mouser as you design, avoiding ordering surprises.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Secure Data Room & Version Control",
    description:
      "Store, share, and annotate every design revision in a fully encrypted workspace—no more “which version?” emails.",
    icon: FingerPrintIcon,
  },
  {
    name: "Collaborative Design Workflows",
    description:
      "Invite EMS partners into your project room: comment, approve changes, and lock in specs in real time.",
    icon: ServerIcon,
  },
  {
    name: "Automated Prototyping Quotes",
    description:
      "Get instant cost estimates for your design—compare EMS partner bids without leaving the CAD environment.",
    icon: ArrowPathIcon,
  },
];
export const WhyFabspaceEMSProviders = [
  {
    name: "Smart RFQ Matching",
    description:
      "Receive only the RFQs that fit your certifications, capacity, and lead times—no more chasing mismatched bids.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "AI‑Powered Quote Automation",
    description:
      "Auto‑populate quote templates with part costs, assembly details, and your company branding. Respond up to 4× faster.",
    icon: Cog6ToothIcon,
  },
  {
    name: "Secure Data Room Access",
    description:
      "View BOMs, Gerbers, and project specs under NDA. Collaborate directly with buyers on clarifications and design feedback.",
    icon: FingerPrintIcon,
  },
  {
    name: "One-Click PO Acceptance",
    description:
      "When your quote wins, generate and accept POs instantly—complete with terms, e‑signature routing, and audit trails.",
    icon: ServerIcon,
  },
  {
    name: "Verified EMS Profiles",
    description:
      "Showcase IPC/ISO certifications, equipment lists, and customer ratings to stand out and build trust.",
    icon: ArrowPathIcon,
  },
];

export const designersTestomonial = [
  {
    image: "/images/user-img.png",
    description: " It flagged a PCB clearance issue that saved us thousands in prototype rework.",
    name: "Tom K.",
    company: " Lead Design Engineer, Phoenix Microtech",
  },
  {
    image: "/images/user-img.png",
    description: " It flagged a PCB clearance issue that saved us thousands in prototype rework.",
    name: "Tom K.",
    company: " Lead Design Engineer, Phoenix Microtech",
  },
];
export const contractManufactureTestomonial = [
  {
    image: "/images/user-img.png",
    description:
      "We doubled our bid response rate and increased our win rate by 30%—all thanks to FabSpace AI’s automated quoting.",
    name: "Eric Johnson",
    company: "Operations Director, Titan PCB Assembly",
  },
  {
    image: "/images/user-img.png",
    description:
      "We doubled our bid response rate and increased our win rate by 30%—all thanks to FabSpace AI’s automated quoting.",
    name: "Eric Johnson",
    company: "Operations Director, Titan PCB Assembly",
  },
];
