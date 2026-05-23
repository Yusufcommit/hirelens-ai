export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-white" />
          <span className="text-sm font-semibold text-white">HireLens AI</span>
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-gray-500">
          AI-powered hiring intelligence. Built by{" "}
          <a
            href="https://github.com/Yusufcommit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition hover:text-white"
          >
            Yusuf Abdirashid
          </a>
          .
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Yusufcommit/ai-resume-screening-system"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://tr.linkedin.com/in/yusuf-abdirashid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yusufabdirashid100@gmail.com"
            className="text-sm text-gray-500 transition hover:text-white"
          >
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
}