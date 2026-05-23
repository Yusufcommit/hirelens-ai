const steps = [
  {
    number: "01",
    title: "Upload Resumes",
    description:
      "Upload one or multiple resumes in PDF or DOCX format. HireLens extracts and structures candidate information automatically.",
  },
  {
    number: "02",
    title: "Paste Job Description",
    description:
      "Add the job description for the role you're hiring for. Our NLP engine maps every requirement to candidate profiles semantically.",
  },
  {
    number: "03",
    title: "Get Ranked Results",
    description:
      "Receive an instant ranked list of candidates with match scores, missing skills, and explainable breakdowns for every decision.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/10 bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
            How it works
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            From resumes to ranked candidates in seconds
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-px w-1/2 bg-white/10 md:block" />
              )}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="mb-4 text-4xl font-bold text-white/10">
                  {step.number}
                </p>
                <h3 className="mb-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}