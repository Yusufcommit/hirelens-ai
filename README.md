# HireLens AI — Frontend

> The Next.js frontend for HireLens AI, an AI-powered resume screening and candidate ranking platform.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)

**Live Demo:** https://hirelens-ai-sigma.vercel.app  
**Backend Repo:** [hirelens-backend](https://github.com/Yusufcommit/hirelens-backend)  
**Live API:** https://hirelens-backend-s2sg.onrender.com

---

## What It Does

HireLens AI helps recruiters screen and rank candidates intelligently. Upload multiple resumes, paste a job description, and get an AI-ranked list of candidates with match scores, missing skills, and explainable breakdowns — in seconds.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, features, how it works |
| `/dashboard` | Main product — upload resumes, paste JD, view ranked results |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| State | React hooks |
| API | FastAPI (see backend repo) |
| Deployment | Vercel |

---

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Yusufcommit/hirelens-ai.git
cd hirelens-ai

# 2. Install dependencies
npm install

# 3. Set environment variable
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local

# 4. Start dev server
npm run dev
```

Open `http://localhost:3000`

> Make sure the [backend](https://github.com/Yusufcommit/hirelens-backend) is also running on port 8000.

---

## Project Structure

```
hirelens-ai/
├── src/
│   └── app/
│       ├── page.tsx              # Landing page
│       ├── dashboard/
│       │   └── page.tsx          # Dashboard product page
│       └── components/
│           ├── Navbar.tsx
│           ├── Features.tsx
│           ├── HowItWorks.tsx
│           └── Footer.tsx
├── public/
├── tailwind.config.ts
└── next.config.ts
```

---

## Roadmap

- [x] Landing page with hero, features, how it works
- [x] Dashboard with resume upload and job description input
- [x] Candidate ranking results with score bars
- [x] Missing skills display per candidate
- [x] Production deployment on Vercel
- [ ] Loading animations and skeleton states
- [ ] Candidate detail modal
- [ ] Authentication (NextAuth)
- [ ] Screening history saved per user
- [ ] Mobile responsive polish

---

## Related

- **Backend API:** [hirelens-backend](https://github.com/Yusufcommit/hirelens-backend)
- **Original prototype:** [ai-resume-screening-system](https://github.com/Yusufcommit/ai-resume-screening-system)

---

## Built by Yusuf

**Yusuf Abdirashid** — AI Full Stack Developer  
Building polished AI-powered tools for hiring and job applications.

[![GitHub](https://img.shields.io/badge/GitHub-Yusufcommit-181717?style=flat&logo=github)](https://github.com/Yusufcommit)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Yusuf_Abdirashid-0A66C2?style=flat&logo=linkedin)](https://tr.linkedin.com/in/yusuf-abdirashid)
[![Email](https://img.shields.io/badge/Email-yusufabdirashid100@gmail.com-EA4335?style=flat&logo=gmail)](mailto:yusufabdirashid100@gmail.com)