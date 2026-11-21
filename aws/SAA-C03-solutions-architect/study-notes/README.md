# SAA-C03 Study Notes Index

This directory contains 37 modular topic guides covering the AWS Certified Solutions Architect - Associate (SAA-C03) syllabus, paired with offline PDF handbooks and cheat sheets in [`../pdfs/`](../pdfs/).

> **Attribution (CC BY 4.0)**: The markdown topic guides in [`topic-guides/`](topic-guides/) are adapted from [RonitSachdev/aws-saa-c03-guides](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main) under the Creative Commons Attribution 4.0 International License (formatted and stripped of emoji characters to match repository standards).

---

## Companion PDF Textbooks & Visual Notebooks

| Resource | Author / Source | Scope | Link |
| :--- | :--- | :--- | :--- |
| Complete Exam Notes | Mohammed Abdullah Khan | 27-page domain-by-domain textbook, exam triggers, and morning cheatsheets | [`../pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`](../pdfs/01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf) |
| Exam Cheat Sheet & Decision Rules | Curated Pack | 7-page condensed decision rules, keyword decoder, limits, and Top 24 traps | [`../pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf`](../pdfs/02_AWS_SAA-C03_Exam_Cheat_Sheet_and_Decision_Rules.pdf) |
| Tutorials Dojo Study Guide | Jon Bonso (Tutorials Dojo) | 315-page service deep dives and service-vs-service comparison sheets | [`../pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`](../pdfs/05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf) |
| Comprehensive Notion Notebook | Christian Greciano ([Notion](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)) | 297-page visual course notebook covering Sections I–IV and whitepaper architectures | [`../pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`](../pdfs/06_AWS_SAA-C03_Notion_Visual_Notebook.pdf) |

---

## Modular Topic Guides (Priority Reading Order)

Full study index: [`topic-guides/00-README.md`](topic-guides/00-README.md)

### 1. Core Infrastructure (Highest Exam Weight)
- [06 - VPC Architecture](topic-guides/06-VPC.md): Subnets, route tables, NAT, SG vs NACL, endpoints, VPC peering, Transit Gateway, PrivateLink
- [02 - Amazon S3](topic-guides/02-S3.md): Storage classes, lifecycle policies, encryption, Object Lock, pre-signed URLs, replication
- [03 - Amazon EC2](topic-guides/03-EC2.md): Instance families, purchasing models (Spot, Savings Plans, RI), placement groups
- [04 - EBS, EFS, and Instance Store](topic-guides/04-EBS-EFS-InstanceStore.md): Block vs file vs ephemeral storage, Multi-Attach, snapshots
- [05 - ELB and Auto Scaling](topic-guides/05-ELB-AutoScaling.md): ALB vs NLB vs GWLB, target tracking, warm pools, health checks
- [01 - AWS IAM](topic-guides/01-IAM.md): Policy evaluation logic, roles, STS, SCPs, permissions boundaries

### 2. Databases
- [09 - Amazon RDS and Aurora](topic-guides/09-RDS-Aurora.md): Multi-AZ vs Read Replicas, Aurora Global Database, RDS Proxy
- [10 - Amazon DynamoDB](topic-guides/10-DynamoDB.md): Partition design, LSI vs GSI, DAX, Global Tables, Streams, PITR
- [11 - Amazon ElastiCache](topic-guides/11-ElastiCache.md): Redis vs Memcached, cluster mode, caching patterns
- [12 - Purpose-Built Databases and Analytics](topic-guides/12-Other-Databases.md): Redshift, Athena, Neptune, DocumentDB, Keyspaces, OpenSearch, Glue, EMR

### 3. Serverless and Application Integration
- [13 - AWS Lambda](topic-guides/13-Lambda.md): Execution limits, reserved vs provisioned concurrency, VPC networking
- [14 - ECS, EKS, and Fargate](topic-guides/14-ECS-EKS-Fargate.md): Task role vs execution role, network modes, serverless containers
- [15 - AWS Elastic Beanstalk](topic-guides/15-Elastic-Beanstalk.md): Deployment policies and rollback mechanics
- [16 - Amazon API Gateway](topic-guides/16-API-Gateway.md): REST vs HTTP vs WebSocket, Cognito/Lambda authorizers, throttling
- [17 - SQS, SNS, and Kinesis](topic-guides/17-SQS-SNS-Kinesis.md): Queueing, fan-out, FIFO, Data Streams vs Firehose
- [18 - EventBridge and Step Functions](topic-guides/18-EventBridge-StepFunctions.md): Event bus routing, Standard vs Express workflows

### 4. Networking and Edge Delivery
- [07 - Amazon Route 53](topic-guides/07-Route53.md): Routing policies, Alias vs CNAME, Resolver hybrid endpoints
- [08 - CloudFront and Global Accelerator](topic-guides/08-CloudFront-GlobalAccelerator.md): OAC, signed URLs/cookies, anycast failover
- [32 - Direct Connect and Site-to-Site VPN](topic-guides/32-DirectConnect-VPN.md): Hybrid encryption, DX gateways, BGP failover
- [33 - AWS Transit Gateway](topic-guides/33-Transit-Gateway.md): Hub-and-spoke VPC routing, appliance mode, AWS RAM sharing

### 5. Security, Identity, and Key Management
- [20 - AWS KMS and CloudHSM](topic-guides/20-KMS-CloudHSM.md): Envelope encryption, CMK rotation, cross-account key policies
- [21 - Secrets Manager and Parameter Store](topic-guides/21-SecretsManager-ParameterStore.md): Secret rotation, cost comparison, SecureString
- [22 - WAF, Shield, and Security Services](topic-guides/22-WAF-Shield-SecurityServices.md): GuardDuty, Macie, Inspector, Detective, Security Hub, Network Firewall
- [23 - Amazon Cognito](topic-guides/23-Cognito.md): User Pools vs Identity Pools
- [24 - AWS Directory Services](topic-guides/24-Directory-Services.md): Managed Microsoft AD vs AD Connector vs Simple AD

### 6. Monitoring, Governance, and Cost Optimization
- [19 - CloudWatch, CloudTrail, and AWS Config](topic-guides/19-CloudWatch-CloudTrail-Config.md): Observability vs API auditing vs configuration compliance
- [28 - AWS CloudFormation](topic-guides/28-CloudFormation.md): Stacks, StackSets, drift detection, change sets
- [29 - AWS Organizations and Control Tower](topic-guides/29-Organizations-ControlTower.md): Multi-account guardrails, SCP inheritance
- [30 - Service Catalog and Trusted Advisor](topic-guides/30-ServiceCatalog-TrustedAdvisor.md): Self-service governance and advisory checks
- [31 - Cost Management](topic-guides/31-Cost-Management.md): Cost Explorer, Budgets, Cost and Usage Reports, Cost Anomaly Detection

### 7. Hybrid Storage and Data Migration
- [25 - Storage Gateway, DataSync, and Transfer Family](topic-guides/25-StorageGateway-DataSync-TransferFamily.md): Online transfers, SFTP, File/Volume/Tape gateways
- [26 - Amazon FSx Family](topic-guides/26-FSx.md): Windows File Server, Lustre, NetApp ONTAP, OpenZFS
- [27 - AWS Snow Family](topic-guides/27-Snow-Family.md): Offline transfer sizing and edge compute

### 8. Final Review and Synthesis
- [34 - AWS Well-Architected Framework](topic-guides/34-Well-Architected.md): Trade-offs across all 6 pillars
- [35 - Disaster Recovery Strategies](topic-guides/35-Disaster-Recovery.md): Backup & Restore, Pilot Light, Warm Standby, Multi-Site Active-Active
- [37 - Gap-Fill Services](topic-guides/37-GapFill-Services.md): Low-frequency single-question services (MQ, MGN, DMS, ACM, SSM, Batch, ML APIs)
- [36 - Exam Traps and Key Patterns](topic-guides/36-Exam-Traps-KeyPatterns.md): High-yield distractor traps and qualifier elimination framework
