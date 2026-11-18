# Cloud and AI Certification Guide

A centralized repository of personal study notes, official exam blueprints, rapid-revision cheat sheets, practice exam banks, and curated documentation links for technical certifications.

The repository is structured to scale across multiple certification providers, beginning with **Amazon Web Services (AWS)** and **Microsoft**.

- **Live Showcase Website**: [https://aishiktokdar.github.io/Certification-Guide/](https://aishiktokdar.github.io/Certification-Guide/)
- **GitHub Repository**: [https://github.com/AishikTokdar/Certification-Guide](https://github.com/AishikTokdar/Certification-Guide)

---

## Source Attribution and Primary References

This repository aggregates, structures, and builds upon resources from the following primary sources:

- **Official AWS Certification Documentation**:
  - Exam Guide: [AWS Certified AI Practitioner (AIF-C01) Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html)
  - Examination Portal: [AWS Certified AI Practitioner Official Portal](https://aws.amazon.com/certification/certified-ai-practitioner/)
  - Official Exam Guide PDF: [Download Official PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf)
- **Nirav Kanan Open-Source Study Notes Repository**:
  - GitHub Repository: [kananinirav/aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes/tree/master)
  - Material: Domain notes, service summaries, architecture diagrams, AI/ML glossary, and 7 practice test sets (MIT License).

---

## Certification Catalog

| Provider | Exam Code | Certification Title | Level | Status | Guide Link |
| :---: | :---: | :--- | :---: | :---: | :--- |
| **AWS** | **AIF-C01** | **AWS Certified AI Practitioner** | Foundational | Ready | [aws/AIF-C01-ai-practitioner/](aws/AIF-C01-ai-practitioner/) |
| **AWS** | **CLF-C02** | AWS Certified Cloud Practitioner | Foundational | Planned | [aws/](aws/) |
| **AWS** | **SAA-C03** | AWS Certified Solutions Architect - Associate | Associate | Planned | [aws/](aws/) |
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
│   └── AIF-C01-ai-practitioner/              # AWS Certified AI Practitioner study hub
│       ├── README.md                          # Certification blueprint and study guide
│       ├── resources.md                       # Comprehensive links and docs catalog
│       ├── pdfs/                              # Sequenced offline study and question PDFs
│       │   ├── 00_AWS_AIF-C01_Official_Exam_Guide.pdf
│       │   ├── 01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf
│       │   ├── 02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf
│       │   ├── 03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf
│       │   └── 04_AWS_AIF-C01_Practice_Question_Bank_200_Scenarios.pdf
│       ├── official-guide/                    # Scraped official AWS documentation
│       │   ├── AWS-AIF-C01-Official-Exam-Guide.pdf
│       │   ├── exam-guide-overview.md
│       │   ├── domains/                       # Domain 1 through 5 specifications
│       │   └── services/                      # In-scope and out-of-scope services
│       ├── study-notes/                       # Modular markdown notes and diagrams
│       │   ├── study-guide.md
│       │   ├── glossary.md
│       │   ├── images/                        # 21 architecture and workflow diagrams
│       │   └── section/                       # Categorized technical notes
│       └── practice-exams/                    # Scenario-based practice tests
│           ├── tests-overview.md
│           └── practice-test-01.md ... practice-test-07.md
└── microsoft/                                 # Microsoft track (Azure, AI, Data, Security)
    └── README.md                              # Track roadmap and template blueprint
```

---

## Featured Guide: AWS Certified AI Practitioner (AIF-C01)

The complete guide is available at [**aws/AIF-C01-ai-practitioner/**](aws/AIF-C01-ai-practitioner/).

### Detailed PDF Breakdown & Target Content

Each PDF in `aws/AIF-C01-ai-practitioner/pdfs/` addresses a distinct stage of preparation:

| File Name | Pages | Exact Content & Scope | When and How to Use |
| :--- | :---: | :--- | :--- |
| **`00_AWS_AIF-C01_Official_Exam_Guide.pdf`** | 26 | Official curriculum, task statements 1.1–5.2, in-scope service lists, out-of-scope services, and scoring criteria published by AWS. | **Step 0 — Scope Calibration**: Read before starting to define exact syllabus boundaries and eliminate out-of-scope distraction. |
| **`01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`** | 26 | Complete narrative textbook across all 5 domains. Covers AI/ML hierarchy, Bedrock vs SageMaker trade-offs, inference parameters (Temperature, Top-P, Top-K), prompt engineering strategies, contrast tables, and common exam traps. | **Step 1 — Core Textbook**: Read cover-to-cover to build conceptual foundations. Complete each domain cheatsheet at the end of every chapter. |
| **`02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf`** | 14 | Tabular high-yield reference: core concept definitions, AWS service selection decision matrices, metric formulas (Precision, Recall, F1, Specificity, AUC-ROC), exam hooks, and Bedrock pricing models. | **Step 2 — Rapid Revision & Formula Recall**: Keep open during practice tests to look up service selection boundaries; review in final 48 hours. |
| **`03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf`** | 7 | Audit of specific topics omitted or lightly treated in general notes: ML pipeline mechanics (EDA, pre-processing, feature engineering, hyperparameter tuning vs learned weights, train/val/test splits), AWS Cost Management (Budgets vs Cost Explorer vs Allocation Tags), supporting infrastructure (Glue DataBrew, EMR, Redshift, Data Exchange, ElastiCache, EKS), GenAI trade-offs (streaming responsiveness, availability, redundancy), and 16 gap questions (G1–G16). | **Step 3 — Closing Omitted Topics**: Read immediately after finishing the main notes to master the ML pipeline and cost/infrastructure topics missed in standard materials. |
| **`04_AWS_AIF-C01_Practice_Question_Bank_200_Scenarios.pdf`** | 73 | 200 scenario-based questions (Set 1 and Set 2) mapped to exam task statements, with detailed answer explanations for both correct choices and distractors. | **Step 4 — Full Exam Simulation**: Practice in timed blocks of 50 questions; review rationales for all missed questions. |

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

## License

- Study notes and practice exam sets for AIF-C01 are adapted from [kananinirav/aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes) under the MIT License.
- Official exam guides and documentation excerpts are copyright Amazon Web Services, Inc. and Microsoft Corporation.
