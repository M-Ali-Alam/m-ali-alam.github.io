# Portfolio Site Rebuild — Project Brief

## Who this is for
Muhammad Ali Alam — M.Sc. Computer Science student, University of Siegen, Germany.
Specializes in NLP and multimodal AI, currently pivoting into computational genomics
with a PhD in that direction as the long-term goal. This site is a research/professional
portfolio aimed at academic and industry audiences (PIs, PhD committees, collaborators),
not a generic "dev for hire" template.

Repo: github.com/M-Ali-Alam/m-ali-alam.github.io (currently the unmodified "vCard" template —
being fully replaced)

## Stack
- **Astro** + **Tailwind CSS**
- MDX for project write-ups (each project gets a real page, not just a card)
- Deploy via GitHub Actions to GitHub Pages, same repo
- Drop in React components only where real interactivity is needed (e.g. a filterable
  project list) — author already knows React from prior work, but the site should ship
  minimal JS by default

## Design direction
Editorial and restrained — think "credible researcher's site," not "flashy dev portfolio."
Strong typography, generous whitespace, one accent color, no gradient/glassmorphism
template feel. Should read as trustworthy within 30 seconds to a PI skimming it.

## Site structure

### 1. Home
Identity statement up front — NLP/multimodal AI, now moving into computational genomics,
MSc @ Siegen. Links to CV (PDF, to be added), GitHub, LinkedIn, email. No generic
"Full Stack Software Developer" framing — that's stale and doesn't reflect current focus.

### 2. About
Path: B.Sc. from IBA Karachi → ERASMUS+ exchange → software engineering at CreditBook →
M.Sc. at Siegen → pivot into computational genomics. Frame the pivot as a deliberate move
toward ML for biology, not a detour.

### 3. Research / Projects (core of the site)

**ECHO** — audio-only depression detection system, evaluated on DAIC-WOZ. In active
development since May 2026, expected to wrap end of August 2026.
- Compares self-supervised learning models against classical acoustic features
- Six-paradigm feature extraction: eGeMAPS/openSMILE, HuBERT-Large, WavLM-Large,
  emotion2vec+, data2vec/Audio-JEPA, and a custom WavLM-CLAP head
- pyannote.audio-based speaker diarization, run on HPC/SLURM
- Macro-behavioral timing features from diarization output, plus COVAREP/glottal features
- Evaluation protocol: official train/dev split *and* subject-disjoint k-fold CV, with an
  explicit speaker-leakage probe — worth highlighting as methodological rigor
- Predecessor work: multimodal depression detection (WavLM, MentalRoBERTa, Cross-Modal
  Transformers, XAI pipeline) on E-DAIC, using a Gated Multimodal Unit (GMU) fusion
  architecture for binary classification and PHQ-8 regression — submitted to Elsevier
  Procedia CS and IEEE COINS 2026

**GenoBench** — Python benchmarking framework for Genomic Foundation Models.
- Published as GenoBench v1.0.0 on PyPI — link directly to the package
- Supports HyenaDNA-tiny and DNABERT-2
- Grew out of a thesis-direction exploration into hardware-aware inference of
  linear-time genomic language models (SSMs/Mamba vs. HyenaDNA vs. Transformers)

### 4. Experience
- **AuratTech (mentoring)** — guides a cohort of ~45 students through DataCamp's
  "AI Engineer for Data Scientists Associate" track; runs twice-weekly sessions;
  built a scaled progress-review process (async pre-session forms + triage-based
  live check-ins). Good evidence of teaching/communication ability.
- **CreditBook** — software development, NestJS + ReactJS + AWS Lambda.

### 5. Skills
Python, R, TypeScript, SQL, Bash, PyTorch, HuggingFace, SLURM, Docker, AWS.
Languages: English (C1), Urdu/Hindi (native), German (B1).

### 6. Side projects
**AlamKitab** — an online bookstore, live side project. Light mention, not top billing —
this section exists to show "also ships things independently," not to compete with the
research section.

### 7. CV / Contact
Downloadable CV (placeholder until provided), email, GitHub, LinkedIn prominent.

## Notes for implementation
- Don't invent metrics, results, or claims not listed above — leave placeholders
  (e.g. "[results pending]") rather than fabricating numbers for ECHO or GenoBench.
- Keep the thesis-direction description general (hardware-aware inference of genomic
  language models) — do not speculate about or name specific target labs/institutions;
  that's a private strategic detail, not site content.
- Content should be easy to update — thesis progress, ECHO results, and future
  publications will need to slot in as they land over the next few months.
