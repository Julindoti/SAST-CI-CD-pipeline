 # <center> SAST-DAST-pipeline </center>
On this project im using 2 tools, Snyk and OWASP ZAP framework,respectively for SAST and DAST scanning on CI/CD pipelines

## Snyk (Inside-Out Security)
Snyk is a developer-first security platform used to find and fix vulnerabilities in your application's "building blocks." It operates primarily during the development and build phases.

SCA (Software Composition Analysis): Scans your package.json, pom.xml, or requirements.txt to find vulnerabilities in third-party libraries.

SAST (Static Analysis): Scans your source code for insecure coding patterns (e.g., hardcoded secrets or SQL injection risks) before the code is even run.

Container & IaC: Checks Dockerfiles and Infrastructure-as-Code (Terraform, Kubernetes) for misconfigurations.

When to use: Integrated into the IDE and CI/CD pipeline to catch issues during development.

## OWASP ZAP (Outside-In Security)
The Zed Attack Proxy (ZAP) is a powerful, open-source DAST (Dynamic Application Security Testing) tool. Unlike Snyk, it tests the application while it is actually running.

Automated Scanning: Mimics real-world attacks (like XSS or broken authentication) by sending malicious payloads to your web server.

Spidering: Automatically crawls the application to discover all available pages, endpoints, and APIs.

Passive & Active Scanning: Passive scanning watches traffic without interference, while Active scanning actively probes for weaknesses.

When to use: Typically run against a Staging or QA environment to see how the application behaves under attack.

### Together they offer a complete scan inside and outside the code !
