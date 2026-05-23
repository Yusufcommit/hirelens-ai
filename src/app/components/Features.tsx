const features = [
  {
    icon: "⚡",
    title: "Semantic Resume Ranking",
    description:
      "Goes beyond keyword matching. Uses transformer-based NLP to understand context, relevance, and meaning across every resume.",
  },
  {
    icon: "🎯",
    title: "Job Description Matching",
    description:
      "Paste any job description and instantly see how each candidate maps to the role — with a precise match score.",
  },
  {
    icon: "🔍",
    title: "Missing Skills Detection",
    description:
      "Automatically identifies gaps between a candidate's profile and the role requirements. No more manual comparison.",
  },
  {
    icon: "📊",
    title: "Score Explainability",
    description:
      "Every score comes with a human-readable breakdown. Understand exactly why a candidate ranked where they did.",
  },
  {
    icon: "📁",
    title: "Batch Resume Processing",
    description:
      "Upload multiple PDF or DOCX resumes at once. Screen an entire applicant pool in seconds, not hours.",
  },
  {
    icon: "🛡️",
    title: "Objective Evaluation",
    description:
      "Removes unconscious bias from the screening process. Candidates are ranked on skills and relevance alone.",
  },
];

export default function Features() {
  return (
    <section id="features" className="border-t border-white/10 bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
            Features
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need to hire smarter
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            HireLens AI replaces hours of manual resume review with intelligent,
            explainable, bias-free candidate ranking.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-4 text-2xl">{feature.icon}</div>
              <h3 className="mb-2 text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}