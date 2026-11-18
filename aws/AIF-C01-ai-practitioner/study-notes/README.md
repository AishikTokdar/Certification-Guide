# AIF-C01 Study Notes Index

This directory contains modular markdown study notes, full-length study guides, terminologies, and architecture diagrams for the AWS Certified AI Practitioner examination.

---

## Master Documents

- **[Full Study Guide](study-guide.md)**: A complete, single-file study outline organized across all 5 exam domains.
- **[AI and ML Glossary](glossary.md)**: Alphabetical reference for core AI, ML, Deep Learning, and AWS terminology.

---

## Technical Topic Sections

Detailed notes are categorized in the `section/` directory:

### 1. Fundamentals of AI and Machine Learning
- **[AI and ML Overview](section/ai-and-ml/ai-and-ml-introduction.md)**
  - Definitions and boundaries: AI vs ML vs Deep Learning vs Generative AI.
  - Learning paradigms: Supervised, unsupervised, semi-supervised, reinforcement learning (RL/RLHF).
  - Machine learning project phases: Business framing, data preparation, feature engineering, model training, evaluation, and deployment.
  - Model evaluation metrics: Confusion matrix, Precision, Recall, F1 score, Specificity, AUC-ROC, MAE, MSE, RMSE.
  - Overfitting and underfitting: Bias-variance tradeoff, regularization techniques, and hyperparameter tuning.

### 2. Generative AI and Foundation Models
- **[Introduction to Generative AI](section/gen-ai/genai-introduction.md)**: Transformers, self-attention mechanisms, diffusion models, and multimodal architectures.
- **[Amazon Bedrock](section/gen-ai/amazon-bedrock.md)**: Model selection, Knowledge Bases (RAG), vector databases, Agents, Guardrails, and pricing models.
- **[Prompt Engineering](section/gen-ai/prompt-engineering.md)**: Zero-shot, few-shot, chain-of-thought, prompt templates, negative prompting, context windows, and latency management.
- **[Amazon Q](section/gen-ai/amazon-q.md)**: Enterprise capabilities of Amazon Q Business, Amazon Q Developer, and Amazon Q Apps.

### 3. Amazon SageMaker
- **[Amazon SageMaker Services](section/sagemaker/aws-sagemaker.md)**
  - SageMaker Studio, Canvas (no-code ML), Data Wrangler, and Feature Store.
  - SageMaker JumpStart for foundation models.
  - SageMaker Clarify for bias detection and model explainability (SHAP).
  - SageMaker Model Cards, Model Registry, and governance dashboards.

### 4. AWS Managed AI Services
- **[Summary of AWS Managed AI Services](section/aws-managed-ai-services/aws-ai-services-summary.md)**
- **[Specialized AI Hardware](section/aws-managed-ai-services/ai-hardware.md)**: AWS Trainium and AWS Inferentia.
- **[Amazon Comprehend](section/aws-managed-ai-services/aws-comprehend.md)**: Entity extraction, sentiment, PII redaction, Comprehend Medical.
- **[Amazon Transcribe](section/aws-managed-ai-services/aws-transcribe.md)**: Speech-to-text, speaker diarization, Transcribe Medical.
- **[Amazon Rekognition](section/aws-managed-ai-services/aws-rekognition.md)**: Object detection, facial recognition, content moderation, Custom Labels.
- **[Amazon Polly](section/aws-managed-ai-services/aws-polly.md)**: Text-to-speech, neural voices, SSML.
- **[Amazon Translate](section/aws-managed-ai-services/aws-translate.md)**: Neural translation, custom terminology.
- **[Amazon Textract](section/aws-managed-ai-services/aws-textract.md)**: Document parsing, forms, tables, query-based extraction.
- **[Amazon Lex](section/aws-managed-ai-services/aws-lex.md)**: Chatbot architecture, intents, utterances, slots.
- **[Amazon Kendra](section/aws-managed-ai-services/aws-kendra.md)**: Semantic search, connectors, indexing.
- **[Amazon Personalize](section/aws-managed-ai-services/aws-personalize.md)**: Collaborative filtering, recommendation recipes.
- **[Amazon Augmented AI (A2I)](section/aws-managed-ai-services/aws-augmented-ai.md)**: Human-in-the-loop review pipelines.
- **[AWS Mechanical Turk](section/aws-managed-ai-services/aws-mechanical-turk.md)**: Crowdsourced data labeling.

### 5. Security, Governance, and Compliance
- **[AWS Security Services for AI](section/aws-security-services/aws-security-services.md)**: IAM roles, AWS KMS encryption, CloudTrail auditing, CloudWatch monitoring, Macie PII scanning.
- **[AI Security and Privacy](section/ai-challenges-and-responsibilities/security-and-privacy.md)**: Shared Responsibility Model for AI, data residency, encryption in transit and at rest.
- **[Governance](section/ai-challenges-and-responsibilities/governance.md)**: Lineage tracking, model cards, auditing.
- **[Compliance](section/ai-challenges-and-responsibilities/compliance.md)**: Regulatory frameworks (HIPAA, GDPR, SOC, ISO/IEC 42001).

### 6. Responsible AI Guidelines and Challenges
- **[Responsible AI Principles](section/ai-challenges-and-responsibilities/responsible-ai.md)**: Fairness, explainability, privacy, robustness, transparency, accountability.
- **[Generative AI Risks](section/ai-challenges-and-responsibilities/genai-challenges.md)**: Hallucinations, data leakage, toxic outputs, prompt injection, copyright issues.
- **[MLOps Best Practices](section/ai-challenges-and-responsibilities/mlops.md)**: Continuous integration, continuous deployment, data drift, concept drift monitoring.

### 7. Cloud Computing Foundations
- **[Cloud Computing and AWS Basics](section/cloud-computing/cloud-computing.md)**: Core cloud benefits, deployment models, shared responsibility basics.

---

## Architecture Diagrams

All visual reference diagrams are maintained in `images/`:
- `rag-flow.png`: Retrieval-Augmented Generation flow (User query -> Embedding -> Vector search -> Augmented prompt -> FM response).
- `amazon-bedrock.png`: Bedrock service architecture and foundation model integrations.
- `shared-responsibility-model.png`: Demarcation of responsibilities between AWS and the customer across AI service layers.
- `sagemaker-jumpstart.png`: Model selection and deployment workflow in SageMaker JumpStart.
- `phases-of-machine-learning-project.png`: Lifecycle stages of an enterprise ML project.
