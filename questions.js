// Shared survey schema. Loaded by both index.html (form) and dashboard.html (analytics).
// type: "single" = radio. "multi" = checkbox. max = pick-limit for multi.
// step, required, requiredReason — used by multi-step form only; dashboard ignores them.
window.SURVEY = {
  title: "Maniniyot Photographer Survey",

  intro: {
    heading: "Can we get 4 minutes of your time?",
    body: "We're building a platform for event photographers in the PH — and we'd rather ask you first than guess. 13 questions, all multiple-choice, totally anonymous. No spam, ever.",
    cta: "Let's go →"
  },

  steps: [
    { id: "s1", title: "Right after the shoot",  desc: "Let's start easy — no trick questions." },
    { id: "s2", title: "Your tools & gear",       desc: "Tell us what you're already working with." },
    { id: "s3", title: "Bibs & delivery",         desc: "This is usually the messy part — we want to know." },
    { id: "s4", title: "Files & storage",         desc: "Two quick ones about keeping your work." },
    { id: "s5", title: "Your take",               desc: "Last stretch — your opinion is the whole point." }
  ],

  questions: [
    // ── Step 1 ─────────────────────────────────────────────────────────────
    {
      id: "Q1", step: "s1", required: false,
      text: "What's the first thing you do right after an event?",
      type: "single",
      options: ["Import photos", "Select the keepers", "Add metadata", "Back up files", "Share a proof gallery", "Other"]
    },
    {
      id: "Q2", step: "s1", required: false,
      text: "What eats up the most time after a shoot?",
      type: "single",
      options: ["Culling / selecting", "Metadata entry", "Editing", "Uploading", "Client messages", "Bib matching", "Other"]
    },

    // ── Step 2 ─────────────────────────────────────────────────────────────
    {
      id: "Q7", step: "s2", required: false,
      text: "Which tools do you already use most?",
      type: "single",
      options: ["FindMyShots.com", "Fokus.ph", "Lightroom", "Photo Mechanic", "Google Drive", "Dropbox", "Email / WhatsApp", "Spreadsheet", "Other"]
    },
    {
      id: "Q14", step: "s2", required: false,
      text: "How do your photos get from camera to your computer?",
      type: "single",
      options: ["Memory card reader", "USB cable", "Wi-Fi transfer", "Phone import", "Online service", "Other"]
    },
    {
      id: "Q16", step: "s2", required: false,
      text: "What do you shoot with? (select all that apply)",
      type: "multi",
      options: ["DSLR", "Mirrorless", "Phone", "Action cam", "Drone", "Other"]
    },

    // ── Step 3 ─────────────────────────────────────────────────────────────
    {
      id: "Q9", step: "s3", required: true,
      requiredReason: "Drives bib-search vs face-match priority in the roadmap.",
      text: "How do you track bib numbers, names, or event IDs on your photos?",
      type: "single",
      options: ["Manual notes", "Spreadsheet", "Camera notes", "Organizer list", "In-app tags", "I don't track them", "Other"]
    },
    {
      id: "Q4", step: "s3", required: false,
      text: "What's usually holding up delivery?",
      type: "single",
      options: ["Slow upload", "Finding the right images", "Editing", "Manual tagging", "Export settings", "Client review cycles", "Other"]
    },
    {
      id: "Q15", step: "s3", required: false,
      text: "When uploading — do you pick only the good ones first, or move everything and sort later?",
      type: "single",
      options: ["Pick selected photos", "Move everything, sort later", "Depends on the event", "I don't upload from phone", "Other"]
    },

    // ── Step 4 ─────────────────────────────────────────────────────────────
    {
      id: "Q17", step: "s4", required: false,
      text: "What file types do you deliver most?",
      type: "single",
      options: ["JPEG only", "RAW only", "Both JPEG and RAW", "Not sure", "Other"]
    },
    {
      id: "Q18", step: "s4", required: false,
      text: "How long do you keep a gallery live before archiving or deleting?",
      type: "single",
      options: ["1–2 weeks", "3 weeks – 1 month", "1–3 months", "3–6 months", "6–12 months", "Until client approves", "Other"]
    },

    // ── Step 5 ─────────────────────────────────────────────────────────────
    {
      id: "Q12", step: "s5", required: false,
      text: "When you publish event photos, what worries you most?",
      type: "single",
      options: ["Photo theft", "Unauthorized use", "Losing originals", "Weak watermarks", "Wrong licensing", "Nothing — I'm not worried", "Other"]
    },
    {
      id: "Q6", step: "s5", required: true,
      requiredReason: "Shapes which features we build first.",
      text: "If you could make two things automatic, what would they be?",
      type: "multi",
      max: 2,
      options: ["Auto-tagging", "Editing", "Bib / name matching", "Proof gallery creation", "Upload & backup", "Client review", "Delivery links", "Cloud storage", "Other"]
    },
    {
      id: "Q22", step: "s5", required: true,
      requiredReason: "Core product adoption signal — tells us if the market is there.",
      text: "If a shoot is already a paid gig with delivery handled, would you still use an app to sell extra prints?",
      type: "single",
      options: ["Yes — extra sales are worth it", "Yes — easier delivery alone is enough", "Only if the client asks", "Probably not", "Other"]
    }
  ]
};
