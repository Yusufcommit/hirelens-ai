"use client";

import { useState } from "react";

export default function Dashboard() {
  const [jobDescription, setJobDescription] = useState("");
  const [files, setFiles] = useState<FileList | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | any[]>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async () => {
    if (!files || files.length === 0 || !jobDescription.trim()) return;

    setLoading(true);
    setResults(null);

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("resumes", file));
    formData.append("job_description", jobDescription);

    try {
      const res = await fetch("http://localhost:8000/screen", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResults(data.candidates);
    } catch (err) {
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Top Bar */}
      <div className="border-b border-white/10 bg-black/60 px-8 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white" />
            <span className="text-sm font-semibold text-white">HireLens AI</span>
          </div>
          <span className="text-sm text-gray-500">Dashboard</span>
        </div>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl gap-8 px-8 py-10 lg:grid-cols-2">

        {/* LEFT — Input Panel */}
        <div className="flex flex-col gap-6">

          <div>
            <h1 className="text-2xl font-bold text-white">Screen Candidates</h1>
            <p className="mt-1 text-sm text-gray-500">
              Upload resumes and paste a job description to get AI-ranked results.
            </p>
          </div>

          {/* Upload */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Resumes
            </label>
            <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-white/5 px-6 py-10 text-center transition hover:border-white/40">
              <p className="mb-1 text-sm text-gray-400">
                Drag & drop or click to upload
              </p>
              <p className="mb-4 text-xs text-gray-600">PDF or DOCX — multiple files supported</p>
              <input
                type="file"
                accept=".pdf,.docx"
                multiple
                onChange={handleFileChange}
                className="text-sm text-gray-400 file:mr-4 file:rounded-lg file:border-0 file:bg-white/10 file:px-4 file:py-2 file:text-sm file:text-white file:transition file:hover:bg-white/20"
              />
            </div>
            {files && files.length > 0 && (
              <p className="mt-3 text-xs text-gray-500">
                {files.length} file{files.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>

          {/* Job Description */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Job Description
            </label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the full job description here..."
              rows={10}
              className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-gray-300 placeholder-gray-600 outline-none transition focus:border-white/30 focus:ring-0"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={loading || !files || !jobDescription.trim()}
            className="w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? "Analyzing..." : "Screen Candidates"}
          </button>

        </div>

        {/* RIGHT — Results Panel */}
        <div className="flex flex-col gap-4">

          <div>
            <h2 className="text-2xl font-bold text-white">Results</h2>
            <p className="mt-1 text-sm text-gray-500">
              Candidates ranked by semantic match score.
            </p>
          </div>

          {/* Empty State */}
          {!results && !loading && (
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 py-24 text-center">
              <p className="text-sm text-gray-600">
                Results will appear here after screening.
              </p>
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 py-24 text-center">
              <div className="mb-4 h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
              <p className="text-sm text-gray-400">Analyzing candidates...</p>
            </div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <div className="flex flex-col gap-4">
              {results.map((candidate, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-white/20 hover:bg-white/10"
                >
                  {/* Rank + Name */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                        #{index + 1}
                      </span>
                      <h3 className="font-semibold text-white">
                        {candidate.name || `Candidate ${index + 1}`}
                      </h3>
                    </div>
                    {/* Score */}
                    <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                      {Math.round(candidate.score * 100)}%
                    </span>
                  </div>

                  {/* Score Bar */}
                  <div className="mb-4 h-1.5 w-full rounded-full bg-white/10">
                    <div
                      className="h-1.5 rounded-full bg-white transition-all"
                      style={{ width: `${Math.round(candidate.score * 100)}%` }}
                    />
                  </div>

                  {/* Missing Skills */}
                  {candidate.missing_skills && candidate.missing_skills.length > 0 && (
                    <div>
                      <p className="mb-2 text-xs font-medium text-gray-500">
                        Missing Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {candidate.missing_skills.map((skill: string) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Explanation */}
                  {candidate.explanation && (
                    <p className="mt-4 text-xs leading-relaxed text-gray-500">
                      {candidate.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </main>
  );
}