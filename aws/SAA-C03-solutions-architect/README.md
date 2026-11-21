# AWS Certified Solutions Architect - Associate (SAA-C03) Study Guide

A structured repository of preparation materials, official blueprints, modular topic guides, cheat sheets, readiness audits, and scenario question banks for the AWS Certified Solutions Architect - Associate (SAA-C03) certification exam.

---

## Source Attribution and Credits

This guide consolidates and structures materials derived from the following primary authors and official sources:

1. **Official AWS Certification Documentation**:
   - Portal: [AWS Certified Solutions Architect - Associate Exam](https://aws.amazon.com/certification/certified-solutions-architect-associate/)
   - Exam Guide: [AWS SAA-C03 Official Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html)
   - Official PDF: [Download Official Exam Guide PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf)
   - Content: Authoritative domain breakdown, task statements (1.1–4.4), technologies and concepts, in-scope/out-of-scope service catalogs, and official exam guide PDF (v1.1).

2. **Mohammed Abdullah Khan Complete Exam Notes**:
   - Author: Mohammed Abdullah Khan (3x AWS Certified)
   - Resource Portal: [https://www.mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)
   - Material: AWS Certified Solutions Architect - Associate (SAA-C03) Complete Exam Notes ([`pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`](pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf)), providing domain-by-domain breakdowns, exam-trigger tables, a master quick-fire contrast table, top exam traps, Feynman self-tests, and condensed domain cheatsheets.

3. **RonitSachdev Open-Source SAA-C03 Topic Guides**:
   - Repository: [RonitSachdev/aws-saa-c03-guides](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main)
   - Content: 37 modular topic guides covering IAM, VPC, S3, EC2, RDS/Aurora, DynamoDB, SQS/SNS/Kinesis, hybrid connectivity, Disaster Recovery, Well-Architected Framework, gap-fill services, and exam traps (adapted under the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/) with emoji symbols removed).

4. **Christian Greciano Notion Visual Study Notebook**:
   - Source Page: [AWS Solutions Architect Associate (SAA-C03) Notion Notes](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)
   - Material: Full visual notebook compiled in [`pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`](pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf) covering Sections I–IV, diagrams, whitepapers, and service walkthroughs.

5. **Tutorials Dojo Study Guide and Cheat Sheets**:
   - Author: Jon Bonso (10x AWS Certified, Co-Founder of [Tutorials Dojo](https://portal.tutorialsdojo.com/))
   - Material: Comprehensive reference book and service comparison cheat sheets in [`pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`](pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf).

---

## Exam Specifications

| Parameter | Specification |
| :--- | :--- |
| Exam Code | SAA-C03 |
| Level | Associate |
| Duration | 130 minutes |
| Questions | 65 questions (50 scored, 15 unscored) |
| Question Formats | Multiple choice (1 correct of 4) and multiple response (2 or more correct of 5+) |
| Passing Score | 720 / 1000 (scaled score range: 100 to 1000, compensatory scoring) |
| Target Audience | Individuals with at least 1 year of hands-on experience designing secure, resilient, high-performing, and cost-optimized solutions on AWS. |

---

## Exam Domains and Weightings

The exam tests competencies across four domains:

| Domain | Focus Area | Exam Weight | Official Spec Link |
| :---: | :--- | :---: | :--- |
| **Domain 1** | Design Secure Architectures | 30% | [domain-1-design-secure-architectures.md](official-guide/domains/domain-1-design-secure-architectures.md) |
| **Domain 2** | Design Resilient Architectures | 26% | [domain-2-design-resilient-architectures.md](official-guide/domains/domain-2-design-resilient-architectures.md) |
| **Domain 3** | Design High-Performing Architectures | 24% | [domain-3-design-high-performing-architectures.md](official-guide/domains/domain-3-design-high-performing-architectures.md) |
| **Domain 4** | Design Cost-Optimized Architectures | 20% | [domain-4-design-cost-optimized-architectures.md](official-guide/domains/domain-4-design-cost-optimized-architectures.md) |
| **Scope** | In-Scope Services, Out-of-Scope Services, Concepts & Mentions | - | [in-scope-services.md](official-guide/services/in-scope-services.md) \| [out-of-scope-services.md](official-guide/services/out-of-scope-services.md) \| [technologies-and-concepts.md](official-guide/technologies-and-concepts.md) |

---

## Curated PDF Library and Usage Guide

All PDF materials are stored in [`pdfs/`](./pdfs/) with standardized numerical prefixes indicating their intended role in your study sequence:

| File Name | Pages | What It Covers | When and How to Use It |
| :--- | :---: | :--- | :--- |
| **[`00_AWS_SAA-C03_Official_Exam_Guide.pdf`](pdfs/00_AWS_SAA-C03_Official_Exam_Guide.pdf)** | 30 | Official AWS syllabus (v1.1), task statements 1.1 through 4.4, technologies and concepts list, in-scope and out-of-scope service lists, and scoring policy. | **Step 0 — Scope Calibration (Day 1)**: Review first to anchor syllabus boundaries, confirm short service names, and exclude out-of-scope services. |
| **[`01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`](pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf)** | 27 | Concise domain-by-domain exam notes by Mohammed Abdullah Khan. Covers 4 domains (1.1–4.5), exam-trigger tables, master quick-fire contrast table, top exam traps, Feynman self-test, and per-domain cheatsheets. | **Step 1 — Core Textbook (Days 2 to 7)**: Read cover-to-cover to lock in domain-aligned architecture trade-offs and run through each domain cheatsheet at the end of every chapter. |
| **[`02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf`](pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf)** | 7 | High-density lookup guide: keyword decoder (`least overhead`, `static IP`, `private`), Domain 1–4 tables, 12 Reference Architecture Patterns, Numbers to Memorize, Top 24 Traps, v1.1 Gap Addendum, ports, and last-10-minutes checklist. | **Step 2 — Decision Rules & Final 48h Review**: Keep beside you while solving practice sets to resolve closely matched distractors and review numeric limits before exam day. |
| **[`03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf`](pdfs/03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf)** | 10 | Official syllabus audit mapping all 179 knowledge/skill bullets and 117 in-scope services to Q1–Q515 and the cheat sheet, plus scope calibration (services NOT to over-study vs out-of-scope), 12 hands-on AWS lab blueprints, 4-week and 10-day plans, and readiness gates. | **Step 3 — Gap Audit & Lab Planner (Mid-Prep)**: Check off weak task statements, follow the 12 practical AWS console labs, and validate readiness gates (80%+ on timed full exams, 75%+ per domain). |
| **[`04_AWS_SAA-C03_Practice_Question_Bank.pdf`](pdfs/04_AWS_SAA-C03_Practice_Question_Bank.pdf)** | 246 | 515 original scenario-based questions (481 multiple-choice, 34 multiple-response; 295 Medium, 220 Hard) organized across Volumes 1–7, including gap-closer volumes (Vol 6: Q415–Q476, Vol 7: Q477–Q515) with full distractor rationales and answer keys. | **Step 4 — Scenario Drills (Weeks 2 to 4)**: Drill Volumes 1–5 by domain first, then complete Volumes 6 and 7 to close thin-coverage bullets (Proton, Data Pipeline, EKS Distro, CIDR planning). |
| **[`05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`](pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf)** | 315 | Tutorials Dojo textbook by Jon Bonso. Deep architectural walkthroughs across Compute/ECS/EKS/Lambda, Storage/EFS/FSx, RDS/Aurora/DynamoDB, Networking, Security/KMS/WAF, Analytics, sample questions, and extensive Service-vs-Service comparison tables (pp. 282–314). | **Step 5 — Deep Service Reference**: Consult whenever a practice question hinges on subtle service comparisons (CloudTrail vs CloudWatch, Gateway vs Interface Endpoint, Global Accelerator vs CloudFront). |
| **[`06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`](pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf)** | 297 | Exhaustive Notion compilation (Sections I–IV) covering IAM, EC2, HA/Scalability, RDS/Aurora, Route 53, S3, CloudFront, Decoupling, Containers, Serverless, Analytics, ML, VPC Networking, DR & Migrations, and AWS Whitepapers & Architectures. | **Step 6 — Visual Course Notebook**: Use when you want detailed step-by-step diagrams, configuration checklists, and visual breakdowns for complex topics like VPC routing, S3 security, and Disaster Recovery. |

---

## Directory Organization

```
aws/SAA-C03-solutions-architect/
├── README.md                                  # Certification hub, PDF roles, and study workflow
├── resources.md                               # External links inventory (AWS docs, whitepapers, labs)
├── pdfs/                                      # Curated and sequenced offline PDFs
│   ├── 00_AWS_SAA-C03_Official_Exam_Guide.pdf
│   ├── 01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf
│   ├── 02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf
│   ├── 03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf
│   ├── 04_AWS_SAA-C03_Practice_Question_Bank.pdf
│   ├── 05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf
│   └── 06_AWS_SAA-C03_Notion_Visual_Notebook.pdf
├── official-guide/                            # Official AWS Exam Guide specifications
│   ├── AWS-SAA-C03-Official-Exam-Guide.pdf
│   ├── exam-guide-overview.md
│   ├── technologies-and-concepts.md
│   ├── revisions.md
│   ├── domains/                               # Domains 1 to 4 task statements
│   │   ├── domain-1-design-secure-architectures.md
│   │   ├── domain-2-design-resilient-architectures.md
│   │   ├── domain-3-design-high-performing-architectures.md
│   │   └── domain-4-design-cost-optimized-architectures.md
│   └── services/                              # Service boundaries and short-name policy
│       ├── in-scope-services.md
│       ├── out-of-scope-services.md
│       └── service-mentions.md
├── study-notes/                               # Modular topic guides
│   ├── README.md                              # Categorized index and attribution
│   └── topic-guides/                          # 37 exam-focused guides + 00-README.md
│       ├── 00-README.md
│       ├── 01-IAM.md ... 37-GapFill-Services.md
└── practice-exams/                            # Question bank indexing and readiness targets
    ├── README.md
    └── tests-overview.md
```

---

## Recommended 5-Step Study Workflow

1. **Scope Alignment**:
   Review [official-guide/exam-guide-overview.md](official-guide/exam-guide-overview.md) and cross-check [official-guide/services/in-scope-services.md](official-guide/services/in-scope-services.md) against [official-guide/services/out-of-scope-services.md](official-guide/services/out-of-scope-services.md).

2. **Core Reading**:
   Read [pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf](pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf) by Mohammed Abdullah Khan to build a clean mental model across all four domains.

3. **Service Deep Dives & Visual Review**:
   Work through the highest-weight topic guides in [study-notes/topic-guides/](study-notes/topic-guides/) (`06-VPC.md`, `02-S3.md`, `09-RDS-Aurora.md`, `17-SQS-SNS-Kinesis.md`, `01-IAM.md`). Keep [pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf](pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf) and [pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf](pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf) handy whenever you need deeper architectural diagrams or comparison matrices.

4. **Gap Audit & Hands-On Practice**:
   Follow [pdfs/03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf](pdfs/03_AWS_SAA-C03_Exam_Readiness_Guide_and_Gap_Audit.pdf) to execute the 12 core console labs and audit all 179 syllabus bullets. Read [study-notes/topic-guides/37-GapFill-Services.md](study-notes/topic-guides/37-GapFill-Services.md) and [study-notes/topic-guides/36-Exam-Traps-KeyPatterns.md](study-notes/topic-guides/36-Exam-Traps-KeyPatterns.md).

5. **Simulation & Final Calibration**:
   - Complete Volumes 1–7 in [pdfs/04_AWS_SAA-C03_Practice_Question_Bank.pdf](pdfs/04_AWS_SAA-C03_Practice_Question_Bank.pdf) (see [practice-exams/tests-overview.md](practice-exams/tests-overview.md) for pacing and volume mappings).
   - Keep [pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf](pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf) open during review to cement numeric limits, traps, and decision heuristics.
   - Finish with AWS's official timed practice exam on [AWS Skill Builder](https://explore.skillbuilder.aws/).

---

## Credits & Attribution

- **Mohammed Abdullah Khan**: Author of the complete exam notes ([mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)), incorporated in `01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`.
- **RonitSachdev**: Creator of the [aws-saa-c03-guides](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main) repository, whose 37 topic guides and study index are adapted under `study-notes/topic-guides/` under the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/) (formatted and stripped of emojis).
- **Christian Greciano**: Compiler of the [AWS Solutions Architect Associate (SAA-C03) Notion Notes](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d), exported in `06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`.
- **Jon Bonso / Tutorials Dojo**: Author of the Tutorials Dojo Study Guide and Cheat Sheets ([portal.tutorialsdojo.com](https://portal.tutorialsdojo.com/)), provided in `05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`.
- **Amazon Web Services**: For official exam blueprint specifications, domain guidelines, and training materials.
