import { readFile, readdir, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "../..");
const OUTPUT_DIRECTORY = path.join(ROOT, "research", "search-sources");
const OUTPUT_PATH = path.join(OUTPUT_DIRECTORY, "source-catalog.json");
const TARGET_COUNT = 320;
const VERIFIED_AT = new Date().toISOString();

const ACADEMIES = [
  ["programming-fundamentals", "Programlama Temelleri"],
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript"],
  ["python", "Python"],
  ["frontend", "Frontend Geliştirme"],
  ["react-nextjs", "React ve Next.js"],
  ["backend", "Backend Geliştirme"],
  ["nodejs", "Node.js"],
  ["databases", "Veritabanları"],
  ["git-github", "Git ve GitHub"],
  ["data-structures-algorithms", "Veri Yapıları ve Algoritmalar"],
  ["software-architecture", "Yazılım Mimarisi"],
  ["system-design", "Sistem Tasarımı"],
  ["testing-quality", "Test ve Yazılım Kalitesi"],
  ["devops-containers", "DevOps, Docker ve Kubernetes"],
  ["cloud-engineering", "Cloud Engineering"],
  ["cybersecurity", "Siber Güvenlik"],
  ["ai-machine-learning", "Yapay Zekâ ve Makine Öğrenmesi"],
  ["llm-ai-engineering", "LLM ve AI Uygulama Mühendisliği"],
  ["data-science", "Veri Bilimi"],
  ["mobile-development", "Mobil Uygulama Geliştirme"],
  ["interview-career", "Teknik Mülakat ve Kariyer Hazırlığı"],
];

const academyNames = new Map(ACADEMIES);

// name | URL | owner | source type | topic IDs | optional chapter IDs
const SEEDS = {
  "programming-fundamentals": [
    "MIT OCW Introduction to Computer Science and Programming in Python|https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/|MIT OpenCourseWare|university-course|computational-thinking,program-execution|V01-C01,V01-C02,V01-C03,V01-C04",
    "Harvard CS50x|https://cs50.harvard.edu/x/|Harvard University|university-course|programming,problem-solving|V01-C01,V01-C03,V01-C04",
    "UC Berkeley CS61A|https://cs61a.org/|University of California Berkeley|university-course|functions,recursion,abstraction|V01-C13,V01-C16,V01-C19",
    "Stanford Code in Place|https://codeinplace.stanford.edu/|Stanford University|university-course|programming,problem-solving|V01-C01,V01-C03",
    "Nand2Tetris|https://www.nand2tetris.org/|Hebrew University of Jerusalem|open-course|computer-systems,program-execution|V01-C02",
    "Structure and Interpretation of Computer Programs|https://web.mit.edu/6.001/6.037/sicp.pdf|MIT Press|open-book|abstraction,recursion,programming|V01-C13,V01-C16,V01-C19",
    "How to Design Programs|https://htdp.org/2024-11-6/Book/index.html|Northeastern University|open-book|program-design,data-modeling|V01-C03,V01-C04,V01-C18",
    "Teach Yourself Computer Science|https://teachyourselfcs.com/|TeachYourselfCS|open-curriculum|computer-science,curriculum|",
    "Open Source Society University Computer Science|https://github.com/ossu/computer-science|OSSU|github-repository|computer-science,curriculum|",
    "The Missing Semester of Your CS Education|https://missing.csail.mit.edu/|MIT CSAIL|university-course|developer-tools,shell,git|",
  ],
  javascript: [
    "MDN JavaScript Guide|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide|Mozilla MDN|official-documentation|javascript,language-guide|",
    "MDN JavaScript Reference|https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference|Mozilla MDN|official-documentation|javascript,language-reference|",
    "ECMAScript Language Specification|https://tc39.es/ecma262/|TC39|language-standard|javascript,ecmascript|",
    "JavaScript.info|https://javascript.info/|Ilya Kantor and contributors|open-course|javascript,browser|",
    "You Don't Know JS Yet|https://github.com/getify/You-Dont-Know-JS|Kyle Simpson|github-repository|javascript,language-internals|",
    "Eloquent JavaScript|https://eloquentjavascript.net/|Marijn Haverbeke|open-book|javascript,programming|",
    "Microsoft Web Dev for Beginners|https://github.com/microsoft/Web-Dev-For-Beginners|Microsoft|github-repository|javascript,web-development|",
    "Exercism JavaScript Track|https://exercism.org/tracks/javascript|Exercism|practice-platform|javascript,exercises|",
    "freeCodeCamp JavaScript Algorithms and Data Structures|https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/|freeCodeCamp|open-course|javascript,algorithms|",
    "Node.js Introduction to JavaScript|https://nodejs.org/en/learn/getting-started/introduction-to-nodejs|OpenJS Foundation|official-documentation|javascript,nodejs|",
  ],
  typescript: [
    "TypeScript Handbook|https://www.typescriptlang.org/docs/handbook/intro.html|Microsoft|official-documentation|typescript,handbook|",
    "TypeScript for JavaScript Programmers|https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html|Microsoft|official-documentation|typescript,migration|",
    "TypeScript Playground|https://www.typescriptlang.org/play|Microsoft|interactive-tool|typescript,playground|",
    "TypeScript Repository|https://github.com/microsoft/TypeScript|Microsoft|github-repository|typescript,compiler|",
    "Microsoft Learn TypeScript|https://learn.microsoft.com/en-us/training/paths/build-javascript-applications-typescript/|Microsoft Learn|corporate-training|typescript,javascript|",
    "Exercism TypeScript Track|https://exercism.org/tracks/typescript|Exercism|practice-platform|typescript,exercises|",
    "TypeScript ESLint Documentation|https://typescript-eslint.io/|typescript-eslint|official-documentation|typescript,linting|",
    "Type Challenges|https://github.com/type-challenges/type-challenges|Type Challenges|github-repository|typescript,type-system|",
    "React TypeScript Cheatsheets|https://github.com/typescript-cheatsheets/react|Community|github-repository|typescript,react|",
    "Total TypeScript Tutorials|https://www.totaltypescript.com/tutorials|Total TypeScript|open-course|typescript,exercises|",
  ],
  python: [
    "Python Tutorial|https://docs.python.org/3/tutorial/|Python Software Foundation|official-documentation|python,language-guide|",
    "Python Language Reference|https://docs.python.org/3/reference/|Python Software Foundation|language-standard|python,language-reference|",
    "Harvard CS50P|https://cs50.harvard.edu/python/|Harvard University|university-course|python,programming|",
    "University of Helsinki Python Programming MOOC|https://programming-26.mooc.fi/|University of Helsinki|university-course|python,programming|",
    "MIT 6.0001|https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/|MIT OpenCourseWare|university-course|python,computer-science|",
    "Google Python Class|https://developers.google.com/edu/python|Google for Developers|corporate-training|python,programming|",
    "Kaggle Learn Python|https://www.kaggle.com/learn/python|Kaggle|open-course|python,data-science|",
    "Exercism Python Track|https://exercism.org/tracks/python|Exercism|practice-platform|python,exercises|",
    "Automate the Boring Stuff with Python|https://automatetheboringstuff.com/|Al Sweigart|open-book|python,automation|",
    "Python Packaging User Guide|https://packaging.python.org/en/latest/|Python Packaging Authority|official-documentation|python,packaging|",
  ],
  frontend: [
    "MDN Learn Web Development|https://developer.mozilla.org/en-US/docs/Learn_web_development|Mozilla MDN|open-course|html,css,javascript|",
    "web.dev Learn HTML|https://web.dev/learn/html/|Google Chrome Team|corporate-training|html,accessibility|",
    "web.dev Learn CSS|https://web.dev/learn/css/|Google Chrome Team|corporate-training|css,responsive-design|",
    "web.dev Learn JavaScript|https://web.dev/learn/javascript/|Google Chrome Team|corporate-training|javascript,browser|",
    "W3C Web Accessibility Initiative Tutorials|https://www.w3.org/WAI/tutorials/|W3C|official-documentation|accessibility,frontend|",
    "WHATWG HTML Living Standard|https://html.spec.whatwg.org/|WHATWG|language-standard|html,web-platform|",
    "The Odin Project Foundations|https://www.theodinproject.com/paths/foundations/courses/foundations|The Odin Project|open-course|html,css,javascript|",
    "Full Stack Open|https://fullstackopen.com/en/|University of Helsinki|university-course|frontend,fullstack|",
    "freeCodeCamp Responsive Web Design|https://www.freecodecamp.org/learn/2022/responsive-web-design/|freeCodeCamp|open-course|html,css,responsive-design|",
    "Frontend Mentor Learning Paths|https://www.frontendmentor.io/learning-paths|Frontend Mentor|practice-platform|frontend,projects|",
  ],
  "react-nextjs": [
    "React Learn|https://react.dev/learn|React Team|official-documentation|react,components,state|",
    "React Reference|https://react.dev/reference/react|React Team|official-documentation|react,api-reference|",
    "Next.js Learn|https://nextjs.org/learn|Vercel|corporate-training|nextjs,react|",
    "Next.js Documentation|https://nextjs.org/docs|Vercel|official-documentation|nextjs,app-router|",
    "Vercel Academy|https://vercel.com/academy|Vercel|corporate-training|nextjs,web-development|",
    "Full Stack Open React|https://fullstackopen.com/en/part1|University of Helsinki|university-course|react,javascript|",
    "React TypeScript Cheatsheets|https://github.com/typescript-cheatsheets/react|Community|github-repository|react,typescript|",
    "Next.js Repository Examples|https://github.com/vercel/next.js/tree/canary/examples|Vercel|github-repository|nextjs,examples|",
    "React Testing Library Documentation|https://testing-library.com/docs/react-testing-library/intro/|Testing Library|official-documentation|react,testing|",
    "React Native for React Developers|https://reactnative.dev/docs/getting-started|Meta|official-documentation|react,react-native|",
  ],
  backend: [
    "MDN Server-side Website Programming|https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side|Mozilla MDN|open-course|backend,http|",
    "ASP.NET Core Learning Path|https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/|Microsoft Learn|corporate-training|backend,dotnet|",
    "Spring Guides|https://spring.io/guides|VMware Tanzu|official-documentation|backend,java|",
    "Django Tutorial|https://docs.djangoproject.com/en/stable/intro/tutorial01/|Django Software Foundation|official-documentation|backend,python|",
    "FastAPI Tutorial|https://fastapi.tiangolo.com/tutorial/|FastAPI|official-documentation|backend,python,api|",
    "OpenAPI Learn|https://learn.openapis.org/|OpenAPI Initiative|open-course|api,openapi|",
    "OWASP API Security Top 10|https://owasp.org/API-Security/|OWASP|security-standard|api,security|",
    "Postman Learning Center|https://learning.postman.com/|Postman|corporate-training|api,testing|",
    "Full Stack Open Node Backend|https://fullstackopen.com/en/part3|University of Helsinki|university-course|backend,nodejs|",
    "RESTful Web API Design|https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design|Microsoft|official-documentation|api,architecture|",
  ],
  nodejs: [
    "Node.js Learn|https://nodejs.org/en/learn|OpenJS Foundation|official-documentation|nodejs,javascript|",
    "Node.js API Documentation|https://nodejs.org/docs/latest/api/|OpenJS Foundation|official-documentation|nodejs,api-reference|",
    "Express Getting Started|https://expressjs.com/en/starter/installing.html|OpenJS Foundation|official-documentation|nodejs,express|",
    "Express Guide|https://expressjs.com/en/guide/routing.html|OpenJS Foundation|official-documentation|nodejs,routing|",
    "NestJS Documentation|https://docs.nestjs.com/|NestJS|official-documentation|nodejs,typescript,backend|",
    "npm Documentation|https://docs.npmjs.com/|npm|official-documentation|nodejs,packages|",
    "Node.js Best Practices|https://github.com/goldbergyoni/nodebestpractices|Community|github-repository|nodejs,best-practices|",
    "Microsoft Node.js for Beginners|https://github.com/microsoft/Nodejs-For-Beginners|Microsoft|github-repository|nodejs,backend|",
    "OpenJS Node.js Certification Resources|https://openjsf.org/certification/|OpenJS Foundation|corporate-training|nodejs,certification|",
    "NodeSchool Workshoppers|https://nodeschool.io/|NodeSchool|practice-platform|nodejs,exercises|",
  ],
  databases: [
    "PostgreSQL Tutorial|https://www.postgresql.org/docs/current/tutorial.html|PostgreSQL Global Development Group|official-documentation|sql,postgresql|",
    "CMU Intro to Database Systems|https://15445.courses.cs.cmu.edu/|Carnegie Mellon University|university-course|databases,systems|",
    "MongoDB University|https://learn.mongodb.com/|MongoDB|corporate-training|mongodb,nosql|",
    "MongoDB Documentation|https://www.mongodb.com/docs/|MongoDB|official-documentation|mongodb,nosql|",
    "Redis University|https://university.redis.io/|Redis|corporate-training|redis,data-structures|",
    "Redis Documentation|https://redis.io/docs/latest/|Redis|official-documentation|redis,databases|",
    "SQLBolt|https://sqlbolt.com/|SQLBolt|practice-platform|sql,exercises|",
    "SQLite Documentation|https://www.sqlite.org/docs.html|SQLite|official-documentation|sql,sqlite|",
    "MySQL Tutorial|https://dev.mysql.com/doc/refman/8.4/en/tutorial.html|Oracle|official-documentation|sql,mysql|",
    "Prisma Data Guide|https://www.prisma.io/dataguide|Prisma|open-course|databases,data-modeling|",
  ],
  "git-github": [
    "Pro Git Book|https://git-scm.com/book/en/v2|Git Project|open-book|git,version-control|",
    "Git Reference|https://git-scm.com/docs|Git Project|official-documentation|git,reference|",
    "GitHub Skills|https://skills.github.com/|GitHub|corporate-training|github,git|",
    "GitHub Get Started|https://docs.github.com/en/get-started|GitHub|official-documentation|github,collaboration|",
    "GitHub Flow|https://docs.github.com/en/get-started/using-github/github-flow|GitHub|official-documentation|github,workflow|",
    "Learn Git Branching|https://learngitbranching.js.org/|Community|interactive-tool|git,branching|",
    "Missing Semester Version Control|https://missing.csail.mit.edu/2020/version-control/|MIT CSAIL|university-course|git,version-control|",
    "Conventional Commits|https://www.conventionalcommits.org/en/v1.0.0/|Conventional Commits|open-standard|git,commits|",
    "Semantic Versioning|https://semver.org/|Semantic Versioning|open-standard|versioning,releases|",
    "GitHub Actions Documentation|https://docs.github.com/en/actions|GitHub|official-documentation|github,ci-cd|",
  ],
  "data-structures-algorithms": [
    "Princeton Algorithms|https://algs4.cs.princeton.edu/home/|Princeton University|university-course|algorithms,data-structures|",
    "MIT 6.006 Introduction to Algorithms|https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/|MIT OpenCourseWare|university-course|algorithms,data-structures|",
    "Stanford Algorithms Specialization Resources|https://www.algorithmsilluminated.org/|Stanford University|open-course|algorithms|",
    "UC Berkeley CS61B|https://sp25.datastructur.es/|University of California Berkeley|university-course|data-structures,java|",
    "Open Data Structures|https://opendatastructures.org/|Pat Morin|open-book|data-structures,algorithms|",
    "VisuAlgo|https://visualgo.net/en|National University of Singapore|interactive-tool|algorithms,visualization|",
    "CP Algorithms|https://cp-algorithms.com/|Community|open-reference|algorithms,competitive-programming|",
    "JavaScript Algorithms|https://github.com/trekhleb/javascript-algorithms|Oleksii Trekhleb|github-repository|algorithms,javascript|",
    "USF Data Structure Visualizations|https://www.cs.usfca.edu/~galles/visualization/Algorithms.html|University of San Francisco|university-resource|data-structures,visualization|",
    "OpenDSA|https://opendsa-server.cs.vt.edu/|Virginia Tech|university-course|data-structures,algorithms|",
  ],
  "software-architecture": [
    "Google Engineering Practices|https://google.github.io/eng-practices/|Google|official-documentation|software-engineering,code-review|",
    "Microsoft Azure Architecture Center|https://learn.microsoft.com/en-us/azure/architecture/|Microsoft|official-documentation|architecture,cloud|",
    "AWS Architecture Center|https://aws.amazon.com/architecture/|Amazon Web Services|official-documentation|architecture,cloud|",
    "Cloud Design Patterns|https://learn.microsoft.com/en-us/azure/architecture/patterns/|Microsoft|official-documentation|architecture,patterns|",
    "SEI Software Architecture|https://www.sei.cmu.edu/our-work/software-architecture/|Carnegie Mellon SEI|university-resource|software-architecture|",
    "SWEBOK|https://www.computer.org/education/bodies-of-knowledge/software-engineering|IEEE Computer Society|professional-standard|software-engineering|",
    "The Twelve-Factor App|https://12factor.net/|Heroku|open-reference|architecture,cloud-native|",
    "Martin Fowler Architecture Guide|https://martinfowler.com/architecture/|Martin Fowler|professional-reference|software-architecture|",
    "C4 Model|https://c4model.com/|Simon Brown|open-reference|architecture,visualization|",
    "NASA Software Engineering Handbook|https://swehb.nasa.gov/|NASA|professional-standard|software-engineering,quality|",
  ],
  "system-design": [
    "System Design Primer|https://github.com/donnemartin/system-design-primer|Donne Martin|github-repository|system-design,distributed-systems|",
    "Google Site Reliability Engineering Books|https://sre.google/books/|Google|open-book|distributed-systems,reliability|",
    "AWS Well-Architected|https://aws.amazon.com/architecture/well-architected/|Amazon Web Services|official-documentation|system-design,cloud|",
    "Azure Well-Architected Framework|https://learn.microsoft.com/en-us/azure/well-architected/|Microsoft|official-documentation|system-design,cloud|",
    "MIT 6.5840 Distributed Systems|https://pdos.csail.mit.edu/6.824/|MIT CSAIL|university-course|distributed-systems|",
    "Designing Distributed Systems|https://info.microsoft.com/rs/157-GQE-382/images/EN-CNTNT-eBook-DesigningDistributedSystems.pdf|Microsoft|open-book|distributed-systems,patterns|",
    "Cloudflare Learning Center|https://www.cloudflare.com/learning/|Cloudflare|corporate-training|networking,distributed-systems|",
    "ByteByteGo System Design 101|https://github.com/ByteByteGoHq/system-design-101|ByteByteGo|github-repository|system-design,visualization|",
    "High Scalability Building Blocks|http://highscalability.com/blog/category/building-blocks|High Scalability|professional-reference|system-design,scalability|",
    "Stanford CS244 Advanced Topics in Networking|https://cs244.stanford.edu/|Stanford University|university-course|networking,systems|",
  ],
  "testing-quality": [
    "Google Testing Blog|https://testing.googleblog.com/|Google|professional-reference|testing,quality|",
    "Google Engineering Practices Code Review|https://google.github.io/eng-practices/review/|Google|official-documentation|code-review,quality|",
    "Jest Documentation|https://jestjs.io/docs/getting-started|OpenJS Foundation|official-documentation|javascript,testing|",
    "Vitest Guide|https://vitest.dev/guide/|Vitest|official-documentation|javascript,testing|",
    "Playwright Documentation|https://playwright.dev/docs/intro|Microsoft|official-documentation|end-to-end-testing|",
    "Cypress Learn|https://learn.cypress.io/|Cypress|corporate-training|end-to-end-testing|",
    "Testing Library Documentation|https://testing-library.com/docs/|Testing Library|official-documentation|frontend,testing|",
    "pytest Documentation|https://docs.pytest.org/en/stable/|pytest|official-documentation|python,testing|",
    "JUnit User Guide|https://junit.org/junit5/docs/current/user-guide/|JUnit|official-documentation|java,testing|",
    "OWASP Web Security Testing Guide|https://owasp.org/www-project-web-security-testing-guide/|OWASP|security-standard|security-testing|",
  ],
  "devops-containers": [
    "Docker Get Started|https://docs.docker.com/get-started/|Docker|corporate-training|docker,containers|",
    "Kubernetes Basics|https://kubernetes.io/docs/tutorials/kubernetes-basics/|Cloud Native Computing Foundation|corporate-training|kubernetes,containers|",
    "CNCF Cloud Native Landscape|https://landscape.cncf.io/|Cloud Native Computing Foundation|open-reference|cloud-native,devops|",
    "GitHub Actions Learn|https://docs.github.com/en/actions/learn-github-actions|GitHub|official-documentation|ci-cd,github|",
    "GitLab CI/CD Documentation|https://docs.gitlab.com/ci/|GitLab|official-documentation|ci-cd,devops|",
    "HashiCorp Terraform Tutorials|https://developer.hashicorp.com/terraform/tutorials|HashiCorp|corporate-training|terraform,infrastructure-as-code|",
    "Ansible Getting Started|https://docs.ansible.com/ansible/latest/getting_started/index.html|Red Hat|official-documentation|ansible,automation|",
    "Prometheus Tutorials|https://prometheus.io/docs/tutorials/getting_started/|Cloud Native Computing Foundation|official-documentation|monitoring,observability|",
    "Grafana Tutorials|https://grafana.com/tutorials/|Grafana Labs|corporate-training|observability,monitoring|",
    "DevOps Roadmap|https://roadmap.sh/devops|roadmap.sh|open-curriculum|devops,roadmap|",
  ],
  "cloud-engineering": [
    "AWS Skill Builder|https://skillbuilder.aws/|Amazon Web Services|corporate-training|aws,cloud|",
    "AWS Workshops|https://workshops.aws/|Amazon Web Services|corporate-training|aws,labs|",
    "Google Cloud Skills Boost|https://www.cloudskillsboost.google/|Google Cloud|corporate-training|google-cloud,labs|",
    "Microsoft Learn Azure|https://learn.microsoft.com/en-us/training/azure/|Microsoft Learn|corporate-training|azure,cloud|",
    "IBM SkillsBuild Cloud Computing|https://skillsbuild.org/students/course-catalog/cloud-computing|IBM|corporate-training|cloud,career|",
    "Oracle Cloud Infrastructure Training|https://education.oracle.com/oracle-cloud-infrastructure/pFamily_647|Oracle|corporate-training|oracle-cloud|",
    "Cloudflare Learning Center|https://www.cloudflare.com/learning/|Cloudflare|corporate-training|networking,cloud|",
    "CNCF Training and Certification|https://www.cncf.io/training/|Cloud Native Computing Foundation|corporate-training|cloud-native,kubernetes|",
    "Serverless Land|https://serverlessland.com/|Amazon Web Services|corporate-training|serverless,cloud|",
    "Google Cloud Architecture Framework|https://cloud.google.com/architecture/framework|Google Cloud|official-documentation|cloud,architecture|",
  ],
  cybersecurity: [
    "OWASP Top 10|https://owasp.org/www-project-top-ten/|OWASP|security-standard|web-security|",
    "PortSwigger Web Security Academy|https://portswigger.net/web-security|PortSwigger|corporate-training|web-security,labs|",
    "NIST Cybersecurity Framework|https://www.nist.gov/cyberframework|NIST|security-standard|cybersecurity,risk|",
    "MITRE CWE|https://cwe.mitre.org/|MITRE|security-standard|software-security,weaknesses|",
    "OWASP Cheat Sheet Series|https://cheatsheetseries.owasp.org/|OWASP|open-reference|application-security|",
    "Google Web Fundamentals Security|https://web.dev/secure/|Google Chrome Team|corporate-training|web-security|",
    "picoCTF|https://picoctf.org/|Carnegie Mellon University|practice-platform|cybersecurity,ctf|",
    "OverTheWire Wargames|https://overthewire.org/wargames/|OverTheWire|practice-platform|cybersecurity,linux|",
    "Cryptopals Crypto Challenges|https://cryptopals.com/|Cryptopals|practice-platform|cryptography,security|",
    "Mozilla Web Security Guidelines|https://infosec.mozilla.org/guidelines/web_security|Mozilla|official-documentation|web-security,hardening|",
  ],
  "ai-machine-learning": [
    "Google Machine Learning Crash Course|https://developers.google.com/machine-learning/crash-course|Google|corporate-training|machine-learning,foundations|",
    "Stanford CS229|https://cs229.stanford.edu/|Stanford University|university-course|machine-learning,mathematics|",
    "MIT Introduction to Machine Learning|https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/about|MIT Open Learning|university-course|machine-learning|",
    "fast.ai Practical Deep Learning|https://course.fast.ai/|fast.ai|open-course|deep-learning,python|",
    "Kaggle Intro to Machine Learning|https://www.kaggle.com/learn/intro-to-machine-learning|Kaggle|open-course|machine-learning,practice|",
    "scikit-learn MOOC|https://inria.github.io/scikit-learn-mooc/|Inria|open-course|machine-learning,scikit-learn|",
    "PyTorch Tutorials|https://pytorch.org/tutorials/|PyTorch Foundation|official-documentation|deep-learning,pytorch|",
    "TensorFlow Tutorials|https://www.tensorflow.org/tutorials|Google|official-documentation|deep-learning,tensorflow|",
    "Microsoft ML for Beginners|https://github.com/microsoft/ML-For-Beginners|Microsoft|github-repository|machine-learning,curriculum|",
    "Hugging Face Deep Reinforcement Learning Course|https://huggingface.co/learn/deep-rl-course/unit0/introduction|Hugging Face|open-course|reinforcement-learning|",
  ],
  "llm-ai-engineering": [
    "OpenAI Developer Documentation|https://developers.openai.com/|OpenAI|official-documentation|openai,ai-engineering|",
    "OpenAI Cookbook|https://github.com/openai/openai-cookbook|OpenAI|github-repository|openai,examples|",
    "Hugging Face LLM Course|https://huggingface.co/learn/llm-course/chapter1/1|Hugging Face|open-course|llm,transformers|",
    "Microsoft Generative AI for Beginners|https://github.com/microsoft/generative-ai-for-beginners|Microsoft|github-repository|generative-ai,curriculum|",
    "Google Gemini API Documentation|https://ai.google.dev/gemini-api/docs|Google|official-documentation|gemini,ai-engineering|",
    "Anthropic Documentation|https://docs.anthropic.com/en/docs/intro-to-claude|Anthropic|official-documentation|claude,ai-engineering|",
    "LangChain Academy|https://academy.langchain.com/|LangChain|corporate-training|agents,llm-applications|",
    "LlamaIndex Documentation|https://docs.llamaindex.ai/en/stable/|LlamaIndex|official-documentation|rag,llm-applications|",
    "Vercel AI SDK Documentation|https://ai-sdk.dev/docs|Vercel|official-documentation|ai-sdk,llm-applications|",
    "DeepLearning.AI Short Courses|https://www.deeplearning.ai/short-courses/|DeepLearning.AI|corporate-training|generative-ai,llm|",
  ],
  "data-science": [
    "Kaggle Learn|https://www.kaggle.com/learn|Kaggle|open-course|data-science,practice|",
    "Harvard CS109 Data Science|https://cs109.github.io/2015/|Harvard University|university-course|data-science,python|",
    "UC Berkeley Data 8|https://www.data8.org/|University of California Berkeley|university-course|data-science,statistics|",
    "Python Data Science Handbook|https://jakevdp.github.io/PythonDataScienceHandbook/|Jake VanderPlas|open-book|data-science,python|",
    "pandas Getting Started|https://pandas.pydata.org/docs/getting_started/index.html|pandas|official-documentation|pandas,data-analysis|",
    "NumPy Learn|https://numpy.org/learn/|NumPy|open-course|numpy,numerical-computing|",
    "Matplotlib Tutorials|https://matplotlib.org/stable/tutorials/index.html|Matplotlib|official-documentation|visualization,python|",
    "SciPy Lecture Notes|https://scipy-lectures.org/|Community|open-course|scientific-python|",
    "IBM SkillsBuild Data Science|https://skillsbuild.org/students/course-catalog/data-science|IBM|corporate-training|data-science,career|",
    "DataCamp Data Science Courses|https://www.datacamp.com/category/data-science|DataCamp|commercial-course|data-science|",
  ],
  "mobile-development": [
    "Android Basics with Compose|https://developer.android.com/courses/android-basics-compose/course|Google|corporate-training|android,kotlin|",
    "Android Developer Guides|https://developer.android.com/guide|Google|official-documentation|android,mobile|",
    "Develop in Swift Tutorials|https://developer.apple.com/tutorials/develop-in-swift|Apple|corporate-training|ios,swift|",
    "Swift Programming Language|https://docs.swift.org/swift-book/documentation/the-swift-programming-language/|Apple|official-documentation|swift,ios|",
    "React Native Documentation|https://reactnative.dev/docs/getting-started|Meta|official-documentation|react-native,mobile|",
    "Flutter Codelabs|https://docs.flutter.dev/codelabs|Google|corporate-training|flutter,dart|",
    "Flutter Documentation|https://docs.flutter.dev/|Google|official-documentation|flutter,mobile|",
    "Expo Tutorial|https://docs.expo.dev/tutorial/introduction/|Expo|corporate-training|react-native,expo|",
    "Stanford CS193p|https://cs193p.sites.stanford.edu/|Stanford University|university-course|ios,swift|",
    "Microsoft .NET MAUI Learning Path|https://learn.microsoft.com/en-us/training/paths/build-apps-with-dotnet-maui/|Microsoft Learn|corporate-training|dotnet,mobile|",
  ],
  "interview-career": [
    "Coding Interview University|https://github.com/jwasham/coding-interview-university|John Washam|github-repository|interview,computer-science|",
    "Tech Interview Handbook|https://www.techinterviewhandbook.org/|Tech Interview Handbook|open-reference|interview,career|",
    "System Design Primer|https://github.com/donnemartin/system-design-primer|Donne Martin|github-repository|system-design,interview|",
    "LeetCode Interview Crash Course|https://leetcode.com/explore/interview/card/leetcodes-interview-crash-course-data-structures-and-algorithms/|LeetCode|commercial-course|interview,algorithms|",
    "HackerRank Interview Preparation Kit|https://www.hackerrank.com/interview/interview-preparation-kit|HackerRank|practice-platform|interview,algorithms|",
    "Google Interview Warmup|https://grow.google/certificates/interview-warmup/|Google|interactive-tool|interview,communication|",
    "GitHub Interview Questions|https://github.com/DopplerHQ/awesome-interview-questions|Doppler|github-repository|interview,questions|",
    "Pramp Practice Interviews|https://www.pramp.com/|Pramp|practice-platform|interview,peer-practice|",
    "Microsoft Technical Interview Tips|https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing.html|Microsoft Careers|professional-reference|interview,career|",
    "MIT Career Advising Interview Guide|https://capd.mit.edu/resources/interviewing/|MIT|university-resource|interview,career|",
  ],
};

const PRIMARY_DOMAINS = new Set([
  "developer.mozilla.org",
  "tc39.es",
  "docs.python.org",
  "learn.microsoft.com",
  "docs.oracle.com",
  "ocw.mit.edu",
  "csed.acm.org",
  "docs.github.com",
  "www.w3.org",
  "www.rfc-editor.org",
  "www.unicode.org",
  "nodejs.org",
  "www.typescriptlang.org",
  "go.dev",
  "html.spec.whatwg.org",
  "cheatsheetseries.owasp.org",
  "csrc.nist.gov",
  "nvlpubs.nist.gov",
  "www.computer.org",
  "standards.ieee.org",
  "git-scm.com",
  "llvm.org",
  "v8.dev",
  "json-schema.org",
  "spec.openapis.org",
  "algs4.cs.princeton.edu",
  "sre.google",
  "swehb.nasa.gov",
]);

const GITHUB_LICENSE_CACHE = new Map();

function parseSeed(academyId, value) {
  const [name, url, owner, sourceType, topics, chapters = ""] = value.split("|");
  return {
    academy_id: academyId,
    academy_ids: [academyId],
    academy_name: academyNames.get(academyId),
    chapter_ids: chapters ? chapters.split(",") : [],
    source_name: name,
    source_owner: owner,
    source_type: sourceType,
    topic_ids: topics.split(","),
    url,
  };
}

async function walkMarkdown(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walkMarkdown(fullPath)));
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(fullPath);
  }
  return files;
}

function inferChapterIds(sourcePath) {
  const values = new Set();
  for (const match of sourcePath.matchAll(/v01-c(\d{1,2})/gi)) {
    values.add(`V01-C${match[1].padStart(2, "0")}`);
  }
  const chapterFile = sourcePath.match(/chapters\/(\d{2})-/i);
  if (chapterFile) values.add(`V01-C${chapterFile[1]}`);
  return [...values];
}

async function extractRepositorySources() {
  const records = [];
  const docsPath = path.join(ROOT, "docs");
  for (const filePath of await walkMarkdown(docsPath)) {
    const relativePath = path.relative(ROOT, filePath).replaceAll("\\", "/");
    const markdown = await readFile(filePath, "utf8");
    for (const match of markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g)) {
      let parsed;
      try {
        parsed = new URL(match[2]);
      } catch {
        continue;
      }
      if (!PRIMARY_DOMAINS.has(parsed.hostname.toLowerCase())) continue;
      records.push({
        academy_id: "programming-fundamentals",
        academy_name: academyNames.get("programming-fundamentals"),
        chapter_ids: inferChapterIds(relativePath),
        source_name: match[1].trim(),
        source_owner: parsed.hostname,
        source_type: "existing-authoritative-reference",
        topic_ids: ["programming-foundations"],
        url: parsed.href,
        discovered_in: relativePath,
      });
    }
  }
  return records;
}

function deduplicate(records) {
  const seen = new Map();
  for (const record of records) {
    const key = record.url.replace(/\/$/, "").toLowerCase();
    if (!seen.has(key)) {
      seen.set(key, {
        ...record,
        academy_ids: record.academy_ids ?? [record.academy_id],
      });
      continue;
    }

    const current = seen.get(key);
    current.academy_ids = [
      ...new Set([
        ...(current.academy_ids ?? [current.academy_id]),
        ...(record.academy_ids ?? [record.academy_id]),
      ]),
    ];
    current.chapter_ids = [
      ...new Set([...(current.chapter_ids ?? []), ...(record.chapter_ids ?? [])]),
    ];
    current.topic_ids = [
      ...new Set([...(current.topic_ids ?? []), ...(record.topic_ids ?? [])]),
    ];
  }
  return [...seen.values()];
}

function githubCoordinates(url) {
  const parsed = new URL(url);
  if (parsed.hostname !== "github.com") return null;
  const [owner, repo] = parsed.pathname.split("/").filter(Boolean);
  return owner && repo ? { owner, repo } : null;
}

async function getGitHubMetadata(record) {
  const coordinates = githubCoordinates(record.url);
  if (!coordinates) return null;
  const key = `${coordinates.owner}/${coordinates.repo}`;
  if (GITHUB_LICENSE_CACHE.has(key)) return GITHUB_LICENSE_CACHE.get(key);
  try {
    const response = await fetch(`https://api.github.com/repos/${key}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "asea-source-catalog-research",
      },
      signal: AbortSignal.timeout(12_000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const metadata = {
      archived: Boolean(data.archived),
      default_branch: data.default_branch ?? null,
      fork_count: data.forks_count ?? null,
      license: data.license?.spdx_id ?? "NOASSERTION",
      open_issue_count: data.open_issues_count ?? null,
      pushed_at: data.pushed_at ?? null,
      star_count: data.stargazers_count ?? null,
    };
    GITHUB_LICENSE_CACHE.set(key, metadata);
    return metadata;
  } catch {
    return null;
  }
}

function legalClassification(record, github) {
  if (record.url.includes("developer.mozilla.org")) {
    return {
      license: "CC-BY-SA 2.5 or later; code samples CC0",
      indexing_policy: "Özet ve metadata indekslenebilir",
      recommended_use: "Resmî dokümantasyon",
    };
  }
  if (github) {
    const openLicense =
      github.license &&
      !["NOASSERTION", "OTHER"].includes(github.license);
    return {
      license: github.license ?? "Belirsiz",
      indexing_policy: openLicense
        ? "Lisans koşullarıyla tam metin değerlendirilebilir"
        : "Yalnızca bağlantı gösterilebilir",
      recommended_use: "Yardımcı okuma",
    };
  }
  if (
    record.source_type === "language-standard" ||
    record.source_type === "security-standard" ||
    record.source_type === "professional-standard"
  ) {
    return {
      license: "Kaynak kullanım koşulları geçerlidir",
      indexing_policy: "Özet ve metadata indekslenebilir",
      recommended_use: "Birincil ders kaynağı",
    };
  }
  return {
    license: "Tekil kaynak koşulları doğrulanmalı",
    indexing_policy: "Özet ve metadata indekslenebilir",
    recommended_use:
      record.source_type === "official-documentation"
        ? "Resmî dokümantasyon"
        : "Yardımcı okuma",
  };
}

async function verifyUrl(url) {
  const start = Date.now();
  try {
    let response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      headers: { "User-Agent": "ASEA-Source-Catalog/0.1" },
      signal: AbortSignal.timeout(12_000),
    });
    if ([403, 405, 429].includes(response.status)) {
      response = await fetch(url, {
        method: "GET",
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0 ASEA-Source-Catalog/0.1",
          Range: "bytes=0-1024",
        },
        signal: AbortSignal.timeout(12_000),
      });
    }
    return {
      final_url: response.url || url,
      http_status: response.status,
      last_modified: response.headers.get("last-modified"),
      response_ms: Date.now() - start,
      verification_status:
        response.status >= 200 && response.status < 400
          ? "verified"
          : response.status === 401 || response.status === 403
            ? "reachable-restricted"
            : "review-required",
    };
  } catch (error) {
    return {
      final_url: url,
      http_status: null,
      last_modified: null,
      response_ms: Date.now() - start,
      verification_status: "review-required",
      verification_error:
        error instanceof Error ? error.name : "Unknown network error",
    };
  }
}

function qualityScore(record, verification, github) {
  let score = 72;
  if (
    [
      "university-course",
      "official-documentation",
      "language-standard",
      "security-standard",
      "professional-standard",
    ].includes(record.source_type)
  ) {
    score += 15;
  }
  if (record.source_type === "github-repository") score += 8;
  if (verification.verification_status === "verified") score += 5;
  if (github?.star_count >= 10_000) score += 5;
  else if (github?.star_count >= 1_000) score += 3;
  if (github?.archived) score -= 20;
  if (github?.license && github.license !== "NOASSERTION") score += 3;
  if (record.chapter_ids.length) score += 2;
  return Math.max(0, Math.min(100, score));
}

async function mapWithConcurrency(items, limit, mapper) {
  const results = new Array(items.length);
  let nextIndex = 0;
  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      results[index] = await mapper(items[index], index);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function main() {
  const curated = Object.entries(SEEDS).flatMap(([academyId, entries]) =>
    entries.map((entry) => parseSeed(academyId, entry)),
  );
  const existing = await extractRepositorySources();
  const selected = deduplicate([...curated, ...existing]).slice(0, TARGET_COUNT);

  const enriched = await mapWithConcurrency(selected, 12, async (record, index) => {
    const github = await getGitHubMetadata(record);
    const verification = await verifyUrl(record.url);
    const legal = legalClassification(record, github);
    const parsed = new URL(record.url);
    return {
      source_id: `ASEA-EXT-${String(index + 1).padStart(4, "0")}`,
      source_name: record.source_name,
      source_owner: record.source_owner,
      source_type: record.source_type,
      academy_id: record.academy_id,
      academy_ids: record.academy_ids ?? [record.academy_id],
      academy_name: record.academy_name,
      chapter_ids: record.chapter_ids,
      topic_ids: record.topic_ids,
      url: record.url,
      final_url: verification.final_url,
      domain: parsed.hostname.toLowerCase(),
      language: "en",
      access: record.source_type === "commercial-course" ? "freemium" : "free",
      registration_required: [
        "corporate-training",
        "commercial-course",
      ].includes(record.source_type),
      certificate_available: ["corporate-training", "commercial-course"].includes(
        record.source_type,
      ),
      access_method:
        parsed.hostname === "github.com" ? "GitHub API" : "Statik sayfa",
      robots_txt_url: `${parsed.protocol}//${parsed.hostname}/robots.txt`,
      license: legal.license,
      indexing_policy: legal.indexing_policy,
      recommended_asea_use: legal.recommended_use,
      quality_score: qualityScore(record, verification, github),
      verification,
      github,
      discovered_in: record.discovered_in ?? "curated-web-research",
      verified_at: VERIFIED_AT,
      notes:
        "Tam metin alımı öncesinde robots.txt, kullanım koşulları ve lisans tekil olarak yeniden kontrol edilmelidir.",
    };
  });

  const countsByAcademy = Object.fromEntries(
    ACADEMIES.map(([id]) => [
      id,
      enriched.filter((source) => source.academy_ids.includes(id)).length,
    ]),
  );
  const statusCounts = Object.fromEntries(
    [...new Set(enriched.map((source) => source.verification.verification_status))].map(
      (status) => [
        status,
        enriched.filter(
          (source) => source.verification.verification_status === status,
        ).length,
      ],
    ),
  );

  const output = {
    catalog_version: "0.1.0",
    generated_at: VERIFIED_AT,
    status: "research-candidate",
    target_audience: "Sıfırdan başlayan Türk öğrenciler",
    total_sources: enriched.length,
    methodology: {
      ranking:
        "Resmî/akademik otorite, erişilebilirlik, eğitim amacı, güncellik sinyali, lisans ve GitHub yıldız/bakım verisi.",
      legal_default:
        "Açık lisans kesinleşmedikçe yalnız özet, metadata ve dış bağlantı.",
      verification:
        "URL'ler HEAD, gerektiğinde sınırlı GET isteğiyle kontrol edildi. HTTP erişimi içerik ve lisans onayı anlamına gelmez.",
    },
    academy_counts: countsByAcademy,
    verification_counts: statusCounts,
    sources: enriched,
  };

  await mkdir(OUTPUT_DIRECTORY, { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  process.stdout.write(
    `${JSON.stringify({
      output: path.relative(ROOT, OUTPUT_PATH),
      total: enriched.length,
      academy_counts: countsByAcademy,
      verification_counts: statusCounts,
    })}\n`,
  );
}

await main();
