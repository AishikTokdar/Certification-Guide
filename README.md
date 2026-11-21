# Cloud and AI Certification Guide

A centralized repository of personal study notes, official exam blueprints, rapid-revision cheat sheets, practice exam banks, and curated documentation links for technical certifications.

The repository is structured to scale across multiple certification providers, beginning with **Amazon Web Services (AWS)** and **Microsoft**.

- **Live Showcase Website**: [https://aishiktokdar.github.io/Certification-Guide/](https://aishiktokdar.github.io/Certification-Guide/)
- **GitHub Repository**: [https://github.com/AishikTokdar/Certification-Guide](https://github.com/AishikTokdar/Certification-Guide)

---

## Source Attribution and Primary References

This repository aggregates, structures, and builds upon resources from the following primary authors and official sources:

- **Official AWS Certification Documentation**:
  - **AIF-C01 Exam Guide**: [AWS Certified AI Practitioner Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html) | [Official Portal](https://aws.amazon.com/certification/certified-ai-practitioner/) | [Official PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf)
  - **SAA-C03 Exam Guide**: [AWS Certified Solutions Architect - Associate Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html) | [Official Portal](https://aws.amazon.com/certification/certified-solutions-architect-associate/) | [Official PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf)
- **Mohammed Abdullah Khan Study Notes**:
  - Author Website & Resources: [mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)
  - Material: Author of the complete exam notes incorporated in both [`aws/AIF-C01-ai-practitioner/pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`](aws/AIF-C01-ai-practitioner/pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf) and [`aws/SAA-C03-solutions-architect/pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`](aws/SAA-C03-solutions-architect/pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf), providing domain-by-domain breakdowns, exam-trigger tables, and cheatsheets.
- **Nirav Kanan Open-Source Study Notes Repository (AIF-C01)**:
  - GitHub Repository: [kananinirav/aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes/tree/master)
  - Material: Domain notes, service summaries, architecture diagrams, AI/ML glossary, and 7 practice test sets (MIT License).
- **RonitSachdev Open-Source Topic Guides (SAA-C03)**:
  - GitHub Repository: [RonitSachdev/aws-saa-c03-guides](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main)
  - Material: 37 modular topic guides covering core infrastructure, databases, serverless, networking, security, gap-fill services, and exam traps ([CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)).
- **Christian Greciano Notion Study Notes (SAA-C03)**:
  - Notion Portal: [AWS Solutions Architect Associate (SAA-C03) Notion Notes](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)
  - Material: Exhaustive visual study notebook incorporated in [`aws/SAA-C03-solutions-architect/pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`](aws/SAA-C03-solutions-architect/pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf).
- **Jon Bonso / Tutorials Dojo (SAA-C03)**:
  - Portal: [portal.tutorialsdojo.com](https://portal.tutorialsdojo.com/)
  - Material: Tutorials Dojo Study Guide and Service Comparison Cheat Sheets incorporated in [`aws/SAA-C03-solutions-architect/pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`](aws/SAA-C03-solutions-architect/pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf).

---

## Certification Catalog

| Provider | Exam Code | Certification Title | Level | Status | Guide Link |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **AWS** | **AIF-C01** | **AWS Certified AI Practitioner** | Foundational | Ready | [aws/AIF-C01-ai-practitioner/](aws/AIF-C01-ai-practitioner/) |
| **AWS** | **SAA-C03** | **AWS Certified Solutions Architect - Associate** | Associate | Ready | [aws/SAA-C03-solutions-architect/](aws/SAA-C03-solutions-architect/) |
| **AWS** | **CLF-C02** | AWS Certified Cloud Practitioner | Foundational | Planned | [aws/](aws/) |
| **AWS** | **MLA-C01** | AWS Certified Machine Learning Engineer - Associate | Associate | Planned | [aws/](aws/) |
| **Microsoft** | **AI-900** | Microsoft Azure AI Fundamentals | Foundational | Upcoming | [microsoft/](microsoft/) |
| **Microsoft** | **AZ-900** | Microsoft Azure Fundamentals | Foundational | Upcoming | [microsoft/](microsoft/) |
| **Microsoft** | **AI-102** | Designing and Implementing an Azure AI Solution | Associate | Planned | [microsoft/](microsoft/) |
| **Microsoft** | **DP-600** | Implementing Analytics Solutions with Microsoft Fabric | Associate | Planned | [microsoft/](microsoft/) |

---

## Repository Architecture

The repository enforces a provider-centric hierarchy (`aws/`, `microsoft/`) with standardized internal structures for each certification:

```
Certification-Guide/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml                   # Automated GitHub Actions deployment to Pages
├── site/                                      # Showcase website (HTML5, CSS3, Vanilla JS)
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── data/
│       └── certifications.json                # Structured certification manifest
├── README.md                                  # Root index, roadmap, and attribution
├── aws/                                       # Amazon Web Services track
│   ├── README.md                              # AWS certification path overview
│   ├── AIF-C01-ai-practitioner/               # AWS Certified AI Practitioner study hub
│   │   ├── README.md
│   │   ├── resources.md
│   │   ├── pdfs/                              # 5 sequenced PDFs (00 through 04)
│   │   ├── official-guide/                    # Scraped AWS official specification
│   │   ├── study-notes/                       # Modular notes, glossary, and 21 diagrams
│   │   └── practice-exams/                    # 7 markdown practice tests
│   └── SAA-C03-solutions-architect/           # AWS Solutions Architect Associate study hub
│       ├── README.md
│       ├── resources.md
│       ├── pdfs/                              # 7 sequenced PDFs (00 through 06)
│       ├── official-guide/                    # Official AWS v1.1 domain and service specs
│       ├── study-notes/                       # 37 modular topic guides + study index
│       └── practice-exams/                    # 515-question bank index & readiness guide
└── microsoft/                                 # Microsoft track (Azure, AI, Data, Security)
    └── README.md                              # Track roadmap and template blueprint
```

---

## Featured Guide 1: AWS Certified AI Practitioner (AIF-C01)

The complete guide is available at [**aws/AIF-C01-ai-practitioner/**](aws/AIF-C01-ai-practitioner/).

### Detailed PDF Breakdown & Target Content

Each PDF in [`aws/AIF-C01-ai-practitioner/pdfs/`](aws/AIF-C01-ai-practitioner/pdfs/) addresses a distinct stage of preparation:

| File Link | Pages | Exact Content & Scope | When and How to Use |
| :--- | :---: | :--- | :--- |
| **[`00_AWS_AIF-C01_Official_Exam_Guide.pdf`](aws/AIF-C01-ai-practitioner/pdfs/00_AWS_AIF-C01_Official_Exam_Guide.pdf)** | 26 | Official curriculum, task statements 1.1–5.2, in-scope service lists, out-of-scope services, and scoring criteria published by AWS. | **Step 0 — Scope Calibration**: Read before starting to define exact syllabus boundaries and eliminate out-of-scope distraction. |
| **[`01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`](aws/AIF-C01-ai-practitioner/pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf)** | 28 | Complete exam notes by Mohammed Abdullah Khan ([mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)). Covers AI/ML hierarchy, Bedrock vs SageMaker trade-offs, inference parameters, prompt engineering, contrast tables, and domain cheatsheets. | **Step 1 — Core Textbook**: Read cover-to-cover to build conceptual foundations. Complete each domain cheatsheet at the end of every chapter. |
| **[`02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf`](aws/AIF-C01-ai-practitioner/pdfs/02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf)** | 14 | Tabular high-yield reference: core concept definitions, AWS service selection decision matrices, metric formulas (Precision, Recall, F1, Specificity, AUC-ROC), exam hooks, and Bedrock pricing models. | **Step 2 — Rapid Revision & Formula Recall**: Keep open during practice tests to look up service selection boundaries; review in final 48 hours. |
| **[`03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf`](aws/AIF-C01-ai-practitioner/pdfs/03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf)** | 7 | Audit of specific topics omitted or lightly treated in general notes: ML pipeline mechanics (EDA, pre-processing, feature engineering, hyperparameter tuning vs learned weights, train/val/test splits), AWS Cost Management (Budgets vs Cost Explorer vs Allocation Tags), supporting infrastructure (Glue DataBrew, EMR, Redshift, Data Exchange, ElastiCache, EKS), GenAI trade-offs, and 16 gap questions (G1–G16). | **Step 3 — Closing Omitted Topics**: Read immediately after finishing the main notes to master the ML pipeline and cost/infrastructure topics missed in standard materials. |
| **[`04_AWS_AIF-C01_Practice_Question_Bank.pdf`](aws/AIF-C01-ai-practitioner/pdfs/04_AWS_AIF-C01_Practice_Question_Bank.pdf)** | 73 | 200 scenario-based questions (Set 1 and Set 2) mapped to exam task statements, with detailed answer explanations for both correct choices and distractors. | **Step 4 — Full Exam Simulation**: Practice in timed blocks of 50 questions; review rationales for all missed questions. |

---

## Featured Guide 2: AWS Certified Solutions Architect - Associate (SAA-C03)

The complete guide is available at [**aws/SAA-C03-solutions-architect/**](aws/SAA-C03-solutions-architect/).

### Detailed PDF Breakdown & Target Content

Each PDF in [`aws/SAA-C03-solutions-architect/pdfs/`](aws/SAA-C03-solutions-architect/pdfs/) serves a specific role in architecture study, gap remediation, and scenario simulation:

| File Link | Pages | Exact Content & Scope | When and How to Use |
| :--- | :---: | :--- | :--- |
| **[`00_AWS_SAA-C03_Official_Exam_Guide.pdf`](aws/SAA-C03-solutions-architect/pdfs/00_AWS_SAA-C03_Official_Exam_Guide.pdf)** | 30 | Official AWS syllabus (v1.1), task statements 1.1–4.4 across 4 domains (30%/26%/24%/20%), technologies and concepts list, in-scope/out-of-scope service lists, and scoring policy. | **Step 0 — Scope Calibration**: Read on Day 1 to bound the syllabus and verify exact in-scope AWS services. |
| **[`01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`](aws/SAA-C03-solutions-architect/pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf)** | 27 | Complete exam notes by Mohammed Abdullah Khan ([mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)). Domain-by-domain coverage (1.1–4.5), exam-trigger tables, master quick-fire contrast table, top exam traps, Feynman self-tests, and per-domain cheatsheets. | **Step 1 — Core Textbook**: Read cover-to-cover during Week 1 to lock in core architectural decision patterns and domain cheatsheets. |
| **[`02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf`](aws/SAA-C03-solutions-architect/pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf)** | 7 | Rapid lookup sheet: keyword decoder, Domains 1–4 tables, 12 reference architecture shapes, numbers to memorize, Top 24 Traps, v1.1 Gap Addendum, ports and protocols, distributed patterns, and last-10-minutes checklist. | **Step 2 — Quick Lookup & Final 48h Review**: Keep open when eliminating distractors during practice drills and re-read on exam morning. |
| **[`03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf`](aws/SAA-C03-solutions-architect/pdfs/03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf)** | 10 | Official syllabus coverage audit mapping all 179 knowledge/skill bullets and 117 in-scope services to Q1–Q515, scope calibration (services not to over-study vs out-of-scope), 12 hands-on console lab blueprints, 4-week / 10-day plans, and readiness gates. | **Step 3 — Coverage Audit & Lab Plan**: Identify thin bullets, run the 12 practical AWS labs, and verify readiness targets (80%+ timed mock score). |
| **[`04_AWS_SAA-C03_Practice_Question_Bank.pdf`](aws/SAA-C03-solutions-architect/pdfs/04_AWS_SAA-C03_Practice_Question_Bank.pdf)** | 246 | 515 original scenario-based questions (481 multiple-choice, 34 multiple-response; 295 Medium, 220 Hard) organized across Volumes 1–7, including targeted gap-closer volumes (Vol 6: Q415–Q476, Vol 7: Q477–Q515) with full distractor rationales. | **Step 4 — Scenario Question Bank**: Drill Volumes 1–5 by domain, then complete Volumes 6 and 7 to master edge-case services and wording qualifiers. |
| **[`05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`](aws/SAA-C03-solutions-architect/pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf)** | 315 | Tutorials Dojo reference textbook by Jon Bonso ([portal.tutorialsdojo.com](https://portal.tutorialsdojo.com/)). Deep service walkthroughs, Well-Architected principles, sample questions, and extensive Service-vs-Service Comparison Cheat Sheets (pp. 282–314). | **Step 5 — Service Comparison Deep Dive**: Use to resolve subtle boundary questions (Gateway vs Interface Endpoint, EFS vs FSx, Global Accelerator vs CloudFront). |
| **[`06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`](aws/SAA-C03-solutions-architect/pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf)** | 297 | Exhaustive Notion notebook compiled by Christian Greciano ([Notion Source](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)). Sections I–IV covering IAM, EC2, VPC, S3, Databases, Containers, Serverless, Analytics, DR, and Whitepapers with visual diagrams. | **Step 6 — Visual Course Notebook**: Reference whenever you need visual architecture flows, console screenshots, or detailed walkthroughs. |

---

## Adding New Certifications

To maintain structural consistency when adding new certifications, use the standardized blueprint:

```
<provider>/<EXAM-CODE>-<slug>/
├── README.md                                  # Exam blueprint, domain weights, and study plan
├── resources.md                               # External links, official docs, and courses
├── pdfs/                                      # Numbered PDFs (00_Guide, 01_Notes, 02_CheatSheet, etc.)
├── official-guide/                            # Official provider syllabus and task statements
├── study-notes/                               # Modular markdown notes and diagrams
└── practice-exams/                            # Practice test sets with solutions
```

---

## License & Credits

- Complete study notes in `01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf` and `01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf` are authored by [Mohammed Abdullah Khan](https://www.mohammedabdullahkhan.com/resources).
- Modular study notes and practice exam sets for AIF-C01 are adapted from [kananinirav/aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes) under the MIT License.
- Modular topic guides for SAA-C03 are adapted from [RonitSachdev/aws-saa-c03-guides](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main) under the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/).
- SAA-C03 visual course notes and study textbook PDFs are credited to Christian Greciano ([Notion Notes](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)) and Jon Bonso ([Tutorials Dojo](https://portal.tutorialsdojo.com/)).
- Official exam guides and documentation excerpts are copyright Amazon Web Services, Inc. and Microsoft Corporation.
