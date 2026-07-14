window.COACH_TL_RESPONSE_FIELDS = [
  {
    id: "quality-of-questions",
    label: "Quality of questions",
    hint: "Note what was useful and what could improve. Include timestamps where helpful.",
  },
  {
    id: "tonality",
    label: "Tonality",
    hint: "Consider whether the coach is:",
    criteria: [
      "Friendly and on the student's side",
      "Asking more questions than giving answers and actively listening",
      "Understanding and empathetic about the student's challenges",
      "Using tough love when appropriate",
    ],
  },
  {
    id: "rapport-presence",
    label: "Rapport / presence",
    hint: "Note what was useful and what could improve. Include timestamps where helpful.",
  },
  {
    id: "professionalism",
    label: "Professionalism",
    hint: "Consider whether the coach is:",
    criteria: [
      "Friendly and on the student's side",
      "Asking more questions than giving answers and actively listening",
    ],
  },
  {
    id: "clarity",
    label: "Clarity",
    hint: "Note what was useful and what could improve. Include timestamps where helpful.",
  },
  {
    id: "most-important-improvement",
    label: "Most important improvement",
    hint: "If you could give only one piece of feedback, what would it be?",
  },
];

window.COACH_TL_SCENARIOS = [
  {
    id: "call-review-1",
    title: "Scenario 1",
    video: "assets/videos/call-review-1.mp4",
    prompt:
      "Watch the call with a view to assessing coach engagement. Write 1-5 bullets for each area, focusing on what was useful and what could improve.",
    fields: window.COACH_TL_RESPONSE_FIELDS,
  },
  {
    id: "call-review-2",
    title: "Scenario 2",
    video: "assets/videos/call-review-2.mp4",
    prompt:
      "Watch the call with a view to assessing coach engagement. Write 1-5 bullets for each area, focusing on what was useful and what could improve.",
    fields: window.COACH_TL_RESPONSE_FIELDS,
  },
];
