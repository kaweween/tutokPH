// Shared survey schema. Loaded by both index.html (form) and dashboard.html (analytics).
// type: "single" = pick one (radio). "multi" = pick many (checkbox). max = limit for multi.
// An option literally named "Other" renders a free-text field.
window.SURVEY = {
  title: "Photographer Workflow Survey",
  subtitle: "Help us understand how you work after an event. ~5 minutes, anonymous.",
  questions: [
    {
      id: "Q1",
      text: "What do you do first after an event?",
      type: "single",
      options: ["Import photos", "Selecting photos", "Tag metadata", "Backup files", "Share proof gallery", "Other"]
    },
    {
      id: "Q2",
      text: "What takes the most time after a shoot?",
      type: "single",
      options: ["Selecting photos", "Metadata entry", "Editing", "Uploading", "Client communication", "Matching bib numbers", "Other"]
    },
    {
      id: "Q3",
      text: "How do you keep event photos organized?",
      type: "single",
      options: ["Event folders", "Tags or keywords", "Spreadsheet or notes", "Client names", "Camera folders", "Memory cards", "Other"]
    },
    {
      id: "Q4",
      text: "What slows you down when delivering photos?",
      type: "single",
      options: ["Slow upload", "Finding images", "Editing", "Manual tagging", "Export settings", "Client reviews", "Bad links", "Other"]
    },
    {
      id: "Q5",
      text: "When you have multiple events, how do you manage them?",
      type: "single",
      options: ["One at a time", "Batch similar tasks", "Use helpers or assistants", "Complete all events for the day before processing images", "Other"]
    },
    {
      id: "Q6",
      text: "What would you most like to be easier or more automatic? (pick up to 2)",
      type: "multi",
      max: 2,
      options: ["Auto-tagging", "Editing workflow", "Bib/name matching", "Proof gallery creation", "Upload & backup", "Client review", "Delivery links", "Cloud storage", "Other"]
    },
    {
      id: "Q7",
      text: "Which tools do you already use most often?",
      type: "single",
      options: ["FindMyShots.com", "Fokus.ph", "Lightroom", "Photo Mechanic", "Google Drive", "Dropbox", "Email/WhatsApp", "Spreadsheet", "Event photo site", "Other"]
    },
    {
      id: "Q8",
      text: "What would you improve about your current tools?",
      type: "single",
      options: ["Faster upload", "Better search", "Easier editing", "Easier tagging", "Cleaner sharing", "Less switching", "Better pricing", "Other"]
    },
    {
      id: "Q9",
      text: "How do you capture bib numbers, names, or event IDs?",
      type: "single",
      options: ["Manual notes", "Spreadsheet", "Camera notes", "Organizer list", "In-app tags", "Other"]
    },
    {
      id: "Q10",
      text: "How do you collect feedback or approvals after an event?",
      type: "single",
      options: ["Email", "WhatsApp", "Shared gallery", "Organizer", "Comments in app", "No formal process", "Other"]
    },
    {
      id: "Q11",
      text: "What makes it hard to deliver the right photos fast?",
      type: "single",
      options: ["Wrong labels", "Slow proofs", "Missing metadata", "Poor search", "File sizes", "Link issues", "Other"]
    },
    {
      id: "Q12",
      text: "What worries you most when publishing event photos?",
      type: "single",
      options: ["Theft", "Unauthorized use", "No control", "Weak watermark", "Wrong rights", "Losing originals", "Other"]
    },
    {
      id: "Q13",
      text: "What would help you spend less time on admin and more on shooting?",
      type: "single",
      options: ["One upload workflow", "Smart tagging", "Auto galleries", "Easier editing", "Easy client review", "Instant delivery", "Better search", "Other"]
    },
    {
      id: "Q14",
      text: "How do you usually move photos from your camera or phone into your workflow?",
      type: "single",
      options: ["Memory card reader", "USB cable", "Wi-Fi transfer", "Phone import", "Online service", "Other"]
    },
    {
      id: "Q15",
      text: "On phone or camera, do you pick only selected photos to upload or move everything and sort later?",
      type: "single",
      options: ["Pick selected photos", "Move everything and sort later", "Depends on the event", "I don't use phone photos", "Other"]
    },
    {
      id: "Q16",
      text: "What devices do you use for an event shoot? (select all that apply)",
      type: "multi",
      options: ["DSLR", "Mirrorless camera", "Phone camera", "Action camera", "Drone", "Other"]
    },
    {
      id: "Q17",
      text: "What kind of photo files do you work with most after a shoot?",
      type: "single",
      options: ["JPEG only", "RAW only", "Both JPEG and RAW", "I'm not sure", "Other"]
    },
    {
      id: "Q18",
      text: "How long do you keep a full event gallery available before archiving or deleting it?",
      type: "single",
      options: ["1 week", "2 weeks", "3 weeks", "1-3 months", "3-6 months", "6-12 months", "Until client approves", "Other"]
    },
    {
      id: "Q19",
      text: "How are you usually paid for an event shoot, and does payment status change how long you keep that gallery?",
      type: "single",
      options: ["Paid gig — keep longer", "Paid gig — keep same", "Paid per photo sold — keep while selling", "Free or hobby — delete sooner", "Payment doesn't change retention", "Other"]
    },
    {
      id: "Q20",
      text: "Does getting paid change how fast you deliver photos?",
      type: "single",
      options: ["Paid gigs delivered faster", "Same speed regardless", "Paid gigs delivered slower", "Depends on the client", "Other"]
    },
    {
      id: "Q21",
      text: "When you juggle multiple events, which do you finish first?",
      type: "single",
      options: ["Highest-paying first", "Earliest deadline first", "Easiest/fastest first", "First come first served", "Other"]
    },
    {
      id: "Q22",
      text: "If a shoot is already a paid gig with delivery handled, would you still use an app to deliver and sell photos?",
      type: "single",
      options: ["Yes for extra photo sales", "Yes for easier delivery", "Only if client asks", "No, not needed", "Other"]
    }
  ]
};
