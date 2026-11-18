# AWS Certified AI Practitioner (AIF-C01) Reference Links

A categorized catalog of official documentation, study repositories, author resources, courses, and technical documentation used for the AWS Certified AI Practitioner (AIF-C01) examination.

---

## Primary Study Sources and Author Credits

1. **Official AWS Exam Guide and Syllabus**:
   - URL: [https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html](https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html)
   - Description: The authoritative curriculum published by AWS Certification, outlining exam domains, task statements, and in-scope AWS services.
   - Portal: [AWS Certified AI Practitioner Official Portal](https://aws.amazon.com/certification/certified-ai-practitioner/)
   - Official PDF: [Download Official Exam Guide PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf)

2. **Mohammed Abdullah Khan Complete Exam Notes**:
   - Author: Mohammed Abdullah Khan (3x AWS Certified)
   - Resource Portal: [https://www.mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)
   - Material: AWS Certified AI Practitioner (AIF-C01) Complete Exam Notes (`01_AWS_AIF-C01_Comprehensive_Study_Notes.pdf`), providing domain-by-domain breakdowns, exam-trigger tables, and domain cheatsheets condensed for exam week.

3. **Nirav Kanan Community Study Notes Repository**:
   - Repository: [https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes/tree/master](https://github.com/kananinirav/aws-certified-ai-practitioner-study-notes/tree/master)
   - Material: Community study notes, topic deep-dives, architectural diagrams, AI/ML glossary, and 7 practice exam sets (MIT License).

---

## Official AWS Training and Examination Portals

| Resource | Purpose | Link |
| :--- | :--- | :--- |
| AWS Certification Exam Portal | Official registration, scheduling, exam policies, and candidate guidelines | [AWS Exam Homepage](https://aws.amazon.com/certification/certified-ai-practitioner/) |
| Official Exam Guide (PDF) | Full PDF syllabus including task statements and service listings | [Download Official PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.pdf) |
| AWS Skill Builder: Exam Prep | Free digital courses, exam readiness modules, and sample question sets | [AWS Skill Builder](https://explore.skillbuilder.aws/) |
| AWS Generative AI Ramp-Up Guide | Curated guide outlining AWS digital courses for generative AI and foundation models | [Download Ramp-Up Guide (PDF)](https://d1.awsstatic.com/training-and-certification/ramp-up_guides/Ramp-Up_Guide_Generative_AI.pdf) |

---

## Core AWS Service Documentation

### Generative AI and Foundation Models
- **Amazon Bedrock**:
  - [Overview and Core Architecture](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)
  - [Supported Foundation Models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html) (Amazon Titan, Anthropic Claude, Meta Llama, AI21 Jurassic, Cohere Command)
  - [Knowledge Bases for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html) (Retrieval Augmented Generation, OpenSearch Serverless, vector embeddings)
  - [Guardrails for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html) (Content filtering, PII masking, toxic prompt mitigation)
  - [Agents for Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html) (Multi-step reasoning, action groups, API execution)
- **Amazon Q**:
  - [Amazon Q Overview](https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/what-is.html)
  - [Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html) (Enterprise data search, access control, connectors)
  - [Amazon Q Developer](https://docs.aws.amazon.com/amazonq/latest/aws-builder-use-ug/what-is-q-dev.html) (Code generation, code refactoring, inline suggestions)
  - [Amazon Q Apps](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/q-apps.html) (Natural language prompt-to-application generator)

### Machine Learning Platforms and Infrastructure
- **Amazon SageMaker**:
  - [SageMaker Technical Documentation](https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html)
  - [SageMaker Studio and Canvas](https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html) (Visual no-code/low-code ML development)
  - [SageMaker JumpStart](https://docs.aws.amazon.com/sagemaker/latest/dg/studio-jumpstart.html) (Pre-trained open-source and proprietary model deployment)
  - [SageMaker Clarify](https://docs.aws.amazon.com/sagemaker/latest/dg/clarify-fairness-and-explainability.html) (Fairness, pre/post-training bias detection, SHAP explainability)
  - [SageMaker Model Governance](https://docs.aws.amazon.com/sagemaker/latest/dg/model-governance.html) (Model Cards, Model Dashboard, Model Registry)
- **Specialized AI Hardware**:
  - [AWS Trainium](https://aws.amazon.com/machine-learning/trainium/) (Custom silicon optimized for deep learning training)
  - [AWS Inferentia](https://aws.amazon.com/machine-learning/inferentia/) (Custom silicon optimized for high-throughput, low-latency inference)

### AWS Pre-Built AI Services
- [Amazon Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html): Computer vision for images and videos, face detection, content moderation, and Custom Labels.
- [Amazon Comprehend](https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html): Natural language processing (NLP), entity extraction, sentiment analysis, syntax detection, and Comprehend Medical.
- [Amazon Transcribe](https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html): Automatic speech recognition (ASR), speaker identification, redaction, and Transcribe Medical.
- [Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/what-is.html): Text-to-speech (TTS), neural text-to-speech voices, and Speech Synthesis Markup Language (SSML).
- [Amazon Translate](https://docs.aws.amazon.com/translate/latest/dg/what-is.html): Neural machine translation with support for custom terminology.
- [Amazon Textract](https://docs.aws.amazon.com/textract/latest/dg/what-is.html): Intelligent document processing, optical character recognition (OCR), forms, tables, and Query API.
- [Amazon Lex](https://docs.aws.amazon.com/lex/latest/dg/what-is.html): Conversational AI for building voice and text chatbots (intents, utterances, slots, fulfillments).
- [Amazon Kendra](https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html): Intelligent enterprise search engine powered by machine learning.
- [Amazon Personalize](https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html): Real-time personalized recommendation engine.
- [Amazon Augmented AI (A2I)](https://docs.aws.amazon.com/a2i/latest/dg/what-is-a2i.html): Human-in-the-loop review workflows for ML inference.

---

## Security, Compliance, and Responsible AI References

- **AWS Responsible AI Pillars**:
  - [Responsible AI at AWS](https://aws.amazon.com/ai/responsible-ai/)
  - Focus dimensions: Fairness, Explainability, Robustness, Privacy, Safety, Transparency, Verifiability.
- **AWS Generative AI Security Scoping Matrix**:
  - [Securing Generative AI Guide](https://aws.amazon.com/blogs/security/securing-generative-ai-an-introduction-to-the-generative-ai-security-scoping-matrix/)
  - Defines shared responsibility across Scope 1 (Consumer applications), Scope 2 (Enterprise applications using commercial FMs), Scope 3 (Fine-tuned FMs), and Scope 4 (Custom self-trained models).
- **Compliance and Data Privacy**:
  - [AWS Cloud Compliance Programs](https://aws.amazon.com/compliance/programs/) (HIPAA, GDPR, SOC 1/2/3, ISO/IEC 42001 for AI management systems).
