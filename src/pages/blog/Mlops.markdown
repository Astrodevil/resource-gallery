---
title: "Introduction to MLOPS"
excerpt: "Mlops is the fascinating domain where one has to learn about the field of devops and machine learning"
category: "Introduction"
author: "Hardik Sharma"
tags: [Engineer, Devops, ML]
---
> **MLOps**
>
> MLOps as the we can get from the name is made up of ML and Ops . So in
> this field we aim to unify ML system Developement (Dev ) and ML system
> Operations (Ops). Practicing MLOps means that you advocate for
> automation and monitoring at all steps of ML system construction,
> including integration, testing, releasing, deployment and
> infrastructure management.
>
> **MLOps Principles**
>
> Machine learning development pipelines can see changes at three
> levels: data, machine learning model and code. When it comes to MLOps
> principles, they are designed to impact the ML-based software on one
> of these three levels.
>
> The MLOps principles focus on:
>
> ● Versioning: It treats ML scripts, models and datasets as essential
> parts of DevOps processes. It tracks data and model versioning, using
> system controls and alerting changes.
>
> ● Testing: It needs to be performed at all levels of machine learning
> systems, having a different scope when ensuring performance and
> expected outcomes.
>
> Automation: The level of automation determines the level of maturity
> of the ML initiative.●\
> The objective of any MLOps team is to automate the deployment of ML
> models.
>
> ● Reproducibility: Having reproducible and identical results in a
> machine learning workflow, given the same input, is a key MLOps
> principle.
>
> ● Deployment: Model deployment should be done based on experiment
> tracking, which includes feature stores, containerisation of the ML
> stack and the ability to run on-prem, on the cloud or at the edge.
>
> ● Monitoring: Ensuring that ML models perform as expected, once
> deployed, is essential.
>
> Monitoring covers changes around dependencies, data, source systems
> and upgrades.
>
> **MLOps**
>
> Machine learning operations or MLOps aims to more efficiently scale
> from a proof of concept or pilot project to a machine learning
> workload in production.
>
> Implementing MLOps helps you to make your machine learning workloads
> robust and reproducible. For example, you'll be able to monitor,
> retrain, and redeploy a model whenever needed while always keeping a
> model in production.
>
> The purpose of MLOps is to make the machine learning lifecycle
> scalable:

+-----------------------------------+-----------------------------------+
| > 1.\                             | > Train model\                    |
| > 2.\                             | > Package model\                  |
| > 3.                              | > Validate model                  |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

+-----------------------------------+-----------------------------------+
| > 4.\                             | Deploy model\                     |
| > 5.\                             | Monitor model\                    |
| > 6.                              | Retrain model                     |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

![](vertopal_f4175b0cabee45f9bf67c2d31440ee38/media/image1.png){width="6.5in"
height="1.75in"}

> MLOps requires multiple roles and multiple tools. Data scientists
> often focus on all tasks related to training the model, also referred
> to as the inner loop.
>
> To package and deploy the model, data scientists may need the help of
> machine learning engineers who apply DevOps practices to scale the
> machine learning models.
>
> Taking a trained model and deploying it to production is often
> referred to as the outer loop. In the outer loop, the model is
> packaged, validated, deployed, and monitored. When you decide the
> model needs to be retrained, you go back to the inner loop to make
> changes to the model.
>
> **DevOps**
>
> Using DevOps principles like agile planning can help your team
> organize your work and produce deliverables more quickly. With source
> control, you can facilitate the collaboration on projects. And with
> automation you can accelerate the machine learning lifecycle.
>
> This module will introduce you to these DevOps principles and
> highlight two tools commonly used: Azure DevOps and GitHub.
>
> **DevOps and MLOps**
>
> DevOps is described as the *union of people, process, and products to
> enable continuous delivery of value to our end users*, by Donovan
> Brown in .
>
> To understand how it is of use when working with machine learning
> models, let's explore some essential DevOps principles further.
>
> DevOps is a combination of tools and practices guiding developers in
> creating robust and reproducible applications. The goal of using
> DevOps principles is to quickly deliver value to the end user.
>
> If you want to more easily deliver value by integrating machine
> learning models in data transformation pipelines or real-time
> applications, you'll benefit from implementing DevOps principles.
> Learning about DevOps will help you to organize and automate your
> work.
>
> Creating, deploying, and monitoring robust and reproducible models to
> deliver value to the end user is the goal of machine learning
> operations (MLOps).

![](vertopal_f4175b0cabee45f9bf67c2d31440ee38/media/image2.png){width="6.5in"
height="2.6666666666666665in"}

> There are three processes that we want to combine whenever we talk
> about machine learning operations (MLOps):
>
> ● ML includes all the machine learning workloads for which a data
> scientist is responsible. A data scientist will do:

+-----------------------------------+-----------------------------------+
| > ●\                              | > Exploratory data analysis       |
| > ●\                              | > (EDA)\                          |
| > ●\                              | > Feature engineering\            |
| > ●\                              | > Model training and tuning\      |
| > 1.\                             | > DEV refers to the software      |
| > 2.\                             | > development, which includes:\   |
| > 3.\                             | > Plan: Define the model's        |
| > 4.\                             | > requirements and performance    |
| > ●\                              | > metrics.                        |
| > 1.\                             | >                                 |
| > 2.\                             | > Create: Create the model        |
| > 3.                              | > training and scoring scripts.   |
|                                   | >                                 |
|                                   | > Verify: Check for code and      |
|                                   | > model quality.                  |
|                                   | >                                 |
|                                   | > Package: Get ready for          |
|                                   | > deployment by staging the       |
|                                   | > solution.                       |
|                                   | >                                 |
|                                   | > OPS refers to operations and    |
|                                   | > includes:\                      |
|                                   | > Release: Deploy the model to    |
|                                   | > production.                     |
|                                   | >                                 |
|                                   | > Configure: Standardize          |
|                                   | > infrastructure configurations   |
|                                   | > with Infrastructure as Code     |
|                                   | > (IaC).                          |
|                                   | >                                 |
|                                   | > Monitor: Track metrics and      |
|                                   | > ensure the model and            |
|                                   | > infrastructure are performing   |
|                                   | > as                              |
+===================================+===================================+
+-----------------------------------+-----------------------------------+

> expected.
