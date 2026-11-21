# AWS Certified Solutions Architect - Associate (SAA-C03) Reference Links

A categorized catalog of official AWS documentation, architecture whitepapers, author portals, open-source repositories, and hands-on training links for the AWS Certified Solutions Architect - Associate (SAA-C03) exam.

---

## Primary Study Sources and Author Credits

1. **Official AWS Exam Guide and Syllabus**:
   - URL: [https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html](https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.html)
   - Portal: [AWS Certified Solutions Architect - Associate Official Portal](https://aws.amazon.com/certification/certified-solutions-architect-associate/)
   - Official PDF: [Download Official Exam Guide PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf)
   - Description: Authoritative syllabus outlining exam domains (30%/26%/24%/20%), task statements (1.1–4.4), and in-scope/out-of-scope AWS services.

2. **Mohammed Abdullah Khan Complete Exam Notes**:
   - Author: Mohammed Abdullah Khan (3x AWS Certified)
   - Resource Portal: [https://www.mohammedabdullahkhan.com/resources](https://www.mohammedabdullahkhan.com/resources)
   - Material: AWS Certified Solutions Architect - Associate (SAA-C03) Complete Exam Notes (`01_AWS_SAA-C03_Comprehensive_Study_Notes.pdf`).

3. **RonitSachdev Open-Source SAA-C03 Topic Guides**:
   - Repository: [https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main](https://github.com/RonitSachdev/aws-saa-c03-guides/tree/main)
   - License: [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)
   - Material: 37 structured topic guides covering exam analogies, core concepts, trap callouts, question patterns, and pocket cards (`study-notes/topic-guides/`).

4. **Christian Greciano Notion Study Notes**:
   - Notion Page: [AWS Solutions Architect Associate (SAA-C03) Notion Notes](https://psychedelic-cuticle-e74.notion.site/AWS-Solutions-Architect-Associate-SAA-C03-917631d1eb354a1f9bb355154879358d)
   - Material: Visual notebook across Sections I–IV (`06_AWS_SAA-C03_Notion_Visual_Notebook.pdf`).

5. **Tutorials Dojo Study Guide and Cheat Sheets**:
   - Author: Jon Bonso ([Tutorials Dojo Portal](https://portal.tutorialsdojo.com/))
   - Material: Detailed service deep dives and comparison cheat sheets (`05_AWS_SAA-C03_Tutorials_Dojo_Study_Guide_and_Cheat_Sheets.pdf`).

---

## Official AWS Training and Architecture Frameworks

| Resource | Purpose | Link |
| :--- | :--- | :--- |
| AWS Certification Exam Portal | Official registration, scheduling, policies, and score report info | [AWS SAA-C03 Homepage](https://aws.amazon.com/certification/certified-solutions-architect-associate/) |
| Official Exam Guide (PDF) | Full PDF syllabus (v1.1) including task statements and service listings | [Download Official PDF](https://docs.aws.amazon.com/pdfs/aws-certification/latest/solutions-architect-associate-03/solutions-architect-associate-03.pdf) |
| AWS Skill Builder | Official Practice Question Set (free), full Official Practice Exam, and Exam Prep courses | [AWS Skill Builder](https://explore.skillbuilder.aws/) |
| AWS Well-Architected Framework | Six pillars (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability) | [AWS Well-Architected Docs](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html) |
| Disaster Recovery Whitepaper | Source for Backup & Restore, Pilot Light, Warm Standby, and Multi-Site Active-Active RPO/RTO definitions | [Disaster Recovery of Workloads on AWS](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-workloads-on-aws.html) |

---

## Core AWS Service Documentation by Domain

### Security, Identity, and Governance
- [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html): Policy evaluation logic, roles, STS, permissions boundaries, and federation.
- [AWS IAM Identity Center](https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html): Multi-account workforce SSO and permission sets.
- [AWS Organizations & SCPs](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html): Organization-wide guardrails and consolidated billing.
- [AWS Key Management Service (KMS)](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html): Customer managed keys, envelope encryption, grants, and multi-Region keys.
- [AWS WAF, Shield, and Network Firewall](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html): Edge L7 filtering, DDoS defense, and stateful VPC inspection.
- [Amazon GuardDuty, Macie, and Inspector](https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html): Threat detection, S3 PII discovery, and CVE scanning.

### Networking and Content Delivery
- [Amazon VPC User Guide](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html): Subnets, Security Groups, Network ACLs, NAT Gateways, VPC Peering, and PrivateLink/Endpoints.
- [AWS Transit Gateway](https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html): Hub-and-spoke multi-VPC and hybrid routing.
- [AWS Direct Connect & Site-to-Site VPN](https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html): Dedicated links, VIFs, Direct Connect Gateway, and BGP failover.
- [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html): Routing policies, Alias records, health checks, and Resolver hybrid DNS endpoints.
- [Amazon CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html) and [AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html): HTTP edge caching (OAC, signed URLs/cookies) vs TCP/UDP anycast acceleration.

### Compute, Containers, and Serverless
- [Amazon EC2 & Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html): Instance families, placement groups, Spot/Savings Plans, ALB/NLB/GWLB, and scaling policies.
- [AWS Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) and [Amazon API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html): Execution limits, reserved vs provisioned concurrency, REST vs HTTP APIs.
- [Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html), and [AWS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html): Container orchestration, IAM task roles, and serverless compute.
- [Amazon SQS](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html), [Amazon SNS](https://docs.aws.amazon.com/sns/latest/dg/welcome.html), [Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html), and [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html): Decoupling, fan-out, event routing, and state orchestration.

### Storage, Databases, and Analytics
- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html): Storage classes, lifecycle rules, S3 Object Lock, CRR/SRR, and Multi-Region Access Points.
- [Amazon EBS](https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html), [Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html), and [Amazon FSx](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html): Block, POSIX NFS, Lustre, ONTAP, and SMB storage.
- [Amazon RDS & Aurora](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html): Multi-AZ instances/clusters, Read Replicas, Global Database, and RDS Proxy.
- [Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) and [Amazon ElastiCache](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html): Partition design, LSI/GSI, DAX, Global Tables, and Redis/Memcached.
- [Amazon Kinesis](https://docs.aws.amazon.com/streams/latest/dev/introduction.html), [Amazon Athena](https://docs.aws.amazon.com/athena/latest/ug/what-is.html), [AWS Glue](https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html), and [Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html): Streaming ingestion, serverless S3 analytics, ETL, and data warehousing.

### Cost Management and Migration
- [AWS Cost Explorer](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html), [AWS Budgets](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html), and [Cost & Usage Reports (CUR)](https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html): Cost forecasting, automated budget actions, and granular billing exports.
- [AWS DMS](https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html), [AWS MGN](https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html), [AWS DataSync](https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html), and [AWS Storage Gateway](https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html): Database, server, and hybrid storage migrations.
