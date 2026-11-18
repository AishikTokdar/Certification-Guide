# AWS Certified AI Practitioner (AIF-C01) Study Guide

A structured repository of preparation materials, official blueprints, curated notes, cheat sheets, and question banks for the AWS Certified AI Practitioner (AIF-C01) certification exam.

---

## Source Attribution and Credits

This guide consolidates and structures materials derived from the following sources:

1. **Official AWS Certification Documentation**:
   - Portal: [AWS Certified AI Practitioner Exam](https://aws.amazon.com/certification/certified-ai-practitioner/)
   - Exam Guide: [AWS AIF-C01 Official Exam Guide](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html)
   - Official PDF: [Download Official Exam Guide PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf)
   - Content: Authoritative domain breakdown, task statements, in-scope service catalog, and official exam guide PDF.

2. **Mohammed Abdullah Khan Complete Exam Notes**:
   - Author: Mohammed Abdullah Khan (3x AWS Certified)
   - Resource Portal: [https://www.mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)
   - Material: AWS Certified AI Practitioner Complete Exam Notes ([`pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`](pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf)), containing domain-by-domain breakdowns, exam-trigger tables, and domain cheatsheets condensed for exam week.

3. **Nirav Kanan Open-Source Study Notes Repository**:
   - Repository: [kananinirav/aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes/tree/master)
   - Content: Modular section notes, concept summaries, architectural diagrams, AI/ML glossary, and 7 practice test sets (licensed under MIT).

---

## Exam Specifications

| Parameter | Specification |
| :--- | :--- |
| Exam Code | AIF-C01 |
| Level | Foundational |
| Duration | 85 minutes |
| Questions | 65 questions (50 scored, 15 unscored) |
| Question Formats | Multiple choice (one correct answer) and multiple response (two or more correct answers) |
| Passing Score | 700 / 1000 (scaled score range: 100 to 1000) |
| Target Audience | Individuals seeking to validate foundational knowledge of machine learning and generative AI concepts and associated AWS services. |

---

## Exam Domains and Weightings

The exam tests competencies across five domains:

| Domain | Focus Area | Exam Weight | Official Spec Link |
| :---: | :--- | :---: | :--- |
| **Domain 1** | Fundamentals of AI and ML | 20% | [domain-1-fundamentals-of-ai-and-ml.md](official-guide/domains/domain-1-fundamentals-of-ai-and-ml.md) |
| **Domain 2** | Fundamentals of Generative AI | 24% | [domain-2-fundamentals-of-genai.md](official-guide/domains/domain-2-fundamentals-of-genai.md) |
| **Domain 3** | Applications of Foundation Models | 28% | [domain-3-applications-of-foundation-models.md](official-guide/domains/domain-3-applications-of-foundation-models.md) |
| **Domain 4** | Guidelines for Responsible AI | 14% | [domain-4-guidelines-for-responsible-ai.md](official-guide/domains/domain-4-guidelines-for-responsible-ai.md) |
| **Domain 5** | Security, Compliance, and Governance for AI Solutions | 14% | [domain-5-security-compliance-and-governance.md](official-guide/domains/domain-5-security-compliance-and-governance.md) |
| **Scope** | Complete In-Scope and Out-of-Scope Service Lists | - | [in-scope-services.md](official-guide/services/in-scope-services.md) \| [out-of-scope-services.md](official-guide/services/out-of-scope-services.md) |

---

## Curated PDF Library and Usage Guide

All PDF materials are stored in [`pdfs/`](./pdfs/) with standardized numerical prefixes indicating their intended order of use:

| File Name | Pages | What It Covers | When and How to Use It |
| :--- | :---: | :--- | :--- |
| **[`00_AWS_AIF-C01_Official_Exam_Guide.pdf`](pdfs/00_AWS_AIF-C01_Official_Exam_Guide.pdf)** | 26 | Official curriculum, task statements 1.1 through 5.2, in-scope AWS service list, and test delivery rules published by AWS. | **Pre-Study Reference (Day 1)**: Review first to define exact scope boundaries, recognize in-scope vs out-of-scope services, and identify target competencies. |
| **[`01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`](pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf)** | 28 | Comprehensive exam notes by Mohammed Abdullah Khan. Domain-by-domain breakdown, exam-trigger tables, contrast tables, Bedrock parameter guidance, and condensed cheatsheets for every domain. | **Primary Textbook (Days 2 to 7)**: Read cover-to-cover to build core conceptual fluency. Work through the domain cheatsheet at the end of each section before proceeding. |
| **[`02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf`](pdfs/02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf)** | 14 | Dense tabular reference sheet: core concepts, AWS service selection decision matrices, metric formulas (Precision, Recall, F1, AUC-ROC), exam hooks, and failure modes. | **Revision and Quick Lookup (Final 48 Hours)**: Use while solving practice exams to look up service differentiation rules and memorize exact formulas. |
| **[`03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf`](pdfs/03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf)** | 7 | Targeted addendum covering topics missed or lightly covered in standard study notes: ML pipeline vocabulary (EDA, data pre-processing, feature engineering, hyperparameters vs learned weights, train/val/test splits), cost management (AWS Budgets vs Cost Explorer vs allocation tags), supporting data services (Glue DataBrew, EMR, Redshift, Data Exchange, ElastiCache, EKS, Lambda), GenAI service trade-offs (streaming responsiveness, availability, redundancy), and 16 targeted gap questions (G1–G16). | **Gap Closing Audit (Week 2)**: Read immediately after the main study notes to master ML pipeline mechanics, cost controls, and infrastructure services omitted from basic guides. |
| **[`04_AWS_AIF-C01_Practice_Question_Bank.pdf`](pdfs/04_AWS_AIF-C01_Practice_Question_Bank.pdf)** | 73 | 200 scenario-based questions (Set 1 and Set 2) mapped to exam task statements, with detailed answer explanations explaining why correct options are right and distractors are wrong. | **Full Exam Simulation (Week 2 to Exam Day)**: Work through questions in timed blocks of 50. Review explanations for every question answered incorrectly. |

---

## Directory Organization

```
aws/AIF-C01-ai-practitioner/
├── README.md                                  # Certification hub and study methodology
├── resources.md                               # Complete links inventory (docs, courses, tools)
├── pdfs/                                      # Curated and sequenced PDF documents
│   ├── 00_AWS_AIF-C01_Official_Exam_Guide.pdf
│   ├── 01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf
│   ├── 02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf
│   ├── 03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf
│   └── 04_AWS_AIF-C01_Practice_Question_Bank.pdf
├── official-guide/                            # AWS Official Exam Guide specification
│   ├── AWS-AIF-C01-Official-Exam-Guide.pdf
│   ├── exam-guide-overview.md
│   ├── revisions.md
│   ├── domains/                               # Domains 1 to 5 task statements
│   │   ├── domain-1-fundamentals-of-ai-and-ml.md
│   │   ├── domain-2-fundamentals-of-genai.md
│   │   ├── domain-3-applications-of-foundation-models.md
│   │   ├── domain-4-guidelines-for-responsible-ai.md
│   │   └── domain-5-security-compliance-and-governance.md
│   └── services/                              # Service boundaries
│       ├── in-scope-services.md
│       └── out-of-scope-services.md
├── study-notes/                               # Modular topic breakdown
│   ├── README.md                              # Topic index
│   ├── study-guide.md                         # Single-file study outline
│   ├── glossary.md                            # Comprehensive AI/ML and AWS terminology
│   ├── images/                                # Architecture and workflow diagrams
│   └── section/                               # Categorized technical notes
│       ├── ai-and-ml/
│       ├── gen-ai/
│       ├── sagemaker/
│       ├── aws-managed-ai-services/
│       ├── aws-security-services/
│       ├── ai-challenges-and-responsibilities/
│       └── cloud-computing/
└── practice-exams/                            # Practice tests with answer explanations
    ├── README.md
    ├── tests-overview.md
    ├── practice-test-01.md
    ├── practice-test-02.md
    ├── practice-test-03.md
    ├── practice-test-04.md
    ├── practice-test-05.md
    ├── practice-test-06.md
    └── practice-test-07.md
```

---

## Recommended 5-Step Study Workflow

1. **Scope Alignment**:
   Review [official-guide/exam-guide-overview.md](official-guide/exam-guide-overview.md) and cross-reference [official-guide/services/in-scope-services.md](official-guide/services/in-scope-services.md).

2. **Core Reading**:
   Read through [pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf](pdfs/01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf) by Mohammed Abdullah Khan. Refer to [study-notes/glossary.md](study-notes/glossary.md) for unfamiliar terms.

3. **Fill Missing Topics & Edge Cases**:
   Read [pdfs/03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf](pdfs/03_AWS_AIF-C01_Gap_Closer_and_Edge_Cases.pdf) to address the specific ML pipeline steps (EDA, feature engineering, hyperparameters), cost services (Budgets vs Cost Explorer), supporting data stores, and service trade-offs omitted in general notes.

4. **Service Deep Dives**:
   Review the topic notes in [study-notes/section/](study-notes/section/) for core services: Amazon Bedrock (Knowledge Bases, Guardrails, Agents), Amazon SageMaker (Clarify, Model Cards, Canvas), and AWS Managed AI services.

5. **Practice and Verification**:
   - Complete the 7 test sets in [practice-exams/](practice-exams/).
   - Solve the 200 questions in [pdfs/04_AWS_AIF-C01_Practice_Question_Bank.pdf](pdfs/04_AWS_AIF-C01_Practice_Question_Bank.pdf).
   - Use [pdfs/02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf](pdfs/02_AWS_AIF-C01_Exam_Cheat_Sheet_and_Decision_Rules.pdf) for quick reference during question analysis.

---

## Credits & Attribution

- **Mohammed Abdullah Khan**: Author of the complete exam notes ([mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)), incorporated in `01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`.
- **Nirav Kanan**: Creator of the [aws-certified-ai-practitioner-study-notes](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes) repository, whose modular notes and practice tests are structured under `study-notes/` and `practice-exams/` under the MIT License.
- **Amazon Web Services**: For official exam blueprint specifications, domain guidelines, and training materials.
