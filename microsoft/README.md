# Microsoft Certification Track

This section of the repository contains preparation materials, study notes, cheat sheets, official syllabi, and practice questions for Microsoft certifications across Azure, Artificial Intelligence, Data, Security, and Microsoft 365.

---

## Microsoft Certification Roadmap

```
+-------------------------------------------------------------+
|                        FOUNDATIONS                          |
|  • AI-900: Microsoft Azure AI Fundamentals                  |
|  • AZ-900: Microsoft Azure Fundamentals                     |
|  • DP-900: Microsoft Azure Data Fundamentals                |
|  • SC-900: Microsoft Security Fundamentals                  |
+------------------------------+------------------------------+
                               |
       +-----------------------+-----------------------+
       |                       |                       |
+------v------+         +------v------+         +------v------+
|  AI & DATA  |         | CLOUD INFRA |         |  SECURITY   |
| • AI-102    |         | • AZ-104    |         | • SC-200    |
| • DP-600    |         | • AZ-305    |         | • SC-300    |
| • DP-100    |         | • AZ-204    |         | • SC-100    |
+-------------+         +-------------+         +-------------+
```

---

## Certifications Directory

| Exam Code | Certification Title | Solution Area | Status | Planned Directory |
| :---: | :--- | :---: | :---: | :--- |
| **AI-900** | Microsoft Azure AI Fundamentals | AI & Machine Learning | Upcoming | `AI-900-azure-ai-fundamentals/` |
| **AZ-900** | Microsoft Azure Fundamentals | Cloud Infrastructure | Upcoming | `AZ-900-azure-fundamentals/` |
| **AI-102** | Designing and Implementing an Azure AI Solution | AI Engineering | Planned | `AI-102-azure-ai-engineer/` |
| **DP-600** | Implementing Analytics Solutions with Microsoft Fabric | Analytics & Data | Planned | `DP-600-fabric-analytics/` |
| **AZ-104** | Microsoft Azure Administrator | Cloud Infrastructure | Planned | `AZ-104-azure-administrator/` |
| **AZ-305** | Designing Microsoft Azure Infrastructure Solutions | Cloud Architecture | Planned | `AZ-305-azure-solutions-architect/` |
| **DP-900** | Microsoft Azure Data Fundamentals | Data Platform | Planned | `DP-900-azure-data-fundamentals/` |
| **SC-900** | Microsoft Security, Compliance, and Identity Fundamentals | Security & Compliance | Planned | `SC-900-security-fundamentals/` |

---

## Standardized Certification Blueprint

When adding a new Microsoft certification to this directory, follow this standard layout:

```
microsoft/<EXAM-CODE>-<slug>/
├── README.md                                  # Certification hub, skills measured, domain weights
├── resources.md                               # Microsoft Learn paths, documentation, hands-on labs
├── pdfs/                                      # Ordered and standardized PDF collection
│   ├── 00_MS_<EXAM-CODE>_Official_Study_Guide.pdf
│   ├── 01_MS_<EXAM-CODE>_Comprehensive_Notes.pdf
│   ├── 02_MS_<EXAM-CODE>_Exam_Cheat_Sheet.pdf
│   └── 03_MS_<EXAM-CODE>_Practice_Question_Bank.pdf
├── official-guide/                            # Official Microsoft Learn syllabus and objectives
├── study-notes/                               # Modular topic breakdown in markdown
└── practice-exams/                            # Scenario questions with detailed solutions
```
