import {
  PersonalInfo,
  NavItem,
  SkillCategory,
  ProjectItem,
  ExperienceItem,
} from '@/types';

export const personalInfo: PersonalInfo = {
  name: '[Placeholder: Developer Name]',
  role: '[Placeholder: Senior Fullstack & Distributed Systems Engineer]',
  tagline: '[Placeholder: Architecting fault-tolerant distributed backends with tactile, cinematic frontend interfaces.]',
  location: '[Placeholder: San Francisco, CA / Remote]',
  email: 'developer@example.com',
  availability: 'available',
  availabilityLabel: 'AVAILABLE FOR SELECT ROLES',
  cvUrl: null, // Set to a URL string (e.g., '/resume.pdf') when ready; null gracefully enables fallback state
  bio: [
    '[Placeholder: Paragraph 1 — Background overview: Specializing in high-throughput backend services, event-driven architectures, and performance-critical frontend systems.]',
    '[Placeholder: Paragraph 2 — Technical ethos: Believing software is an exact craft where zero-latency networking meets intuitive, fluid spatial interfaces.]',
    '[Placeholder: Paragraph 3 — Current focus: Designing scalable microservices in Go and Rust, exploring WebGL/WebGPU shaders, and optimizing database concurrency.]',
  ],
  metrics: [
    {
      label: 'Throughput',
      value: '[Placeholder: 100k+ req/s]',
      description: '[Placeholder: Peak production ingress handled with sub-15ms p99 latency]',
    },
    {
      label: 'Reliability',
      value: '[Placeholder: 99.99%]',
      description: '[Placeholder: Operational SLA sustained across distributed cloud deployments]',
    },
    {
      label: 'Experience',
      value: '[Placeholder: 7+ Years]',
      description: '[Placeholder: Building production-grade systems from seed to scale]',
    },
  ],
  socials: [
    {
      platform: 'GitHub',
      url: 'https://github.com/[placeholder-username]',
      handle: '@[placeholder-github]',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/[placeholder-username]',
      handle: 'in/[placeholder-linkedin]',
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/[placeholder-username]',
      handle: '@[placeholder-twitter]',
    },
    {
      platform: 'Email',
      url: 'mailto:developer@example.com',
      handle: 'developer@example.com',
    },
  ],
};

export const navItems: ReadonlyArray<NavItem> = [
  { index: '01', label: 'About', href: '#about' },
  { index: '02', label: 'Skills', href: '#skills' },
  { index: '03', label: 'Work', href: '#projects' },
  { index: '04', label: 'Journey', href: '#experience' },
  { index: '05', label: 'Contact', href: '#contact' },
];

export const skillCategories: ReadonlyArray<SkillCategory> = [
  {
    category: 'Backend',
    index: '01',
    description: '[Placeholder: Resilient server runtimes, distributed consensus, and microservice protocols]',
    skills: [
      { name: 'Go / Golang', proficiency: 'core', highlight: true },
      { name: 'Rust', proficiency: 'proficient', highlight: true },
      { name: 'Node.js / TypeScript', proficiency: 'core', highlight: true },
      { name: 'gRPC & Protobuf', proficiency: 'core', highlight: true },
      { name: 'GraphQL & REST APIs', proficiency: 'proficient' },
      { name: 'C++ Systems', proficiency: 'exploring' },
    ],
  },
  {
    category: 'Frontend',
    index: '02',
    description: '[Placeholder: Precision editorial web interfaces, state management, and spatial 3D shaders]',
    skills: [
      { name: 'React 19 / Next.js', proficiency: 'core', highlight: true },
      { name: 'TypeScript', proficiency: 'core', highlight: true },
      { name: 'Tailwind CSS', proficiency: 'core', highlight: true },
      { name: 'Three.js / WebGL', proficiency: 'proficient', highlight: true },
      { name: 'GSAP Animation', proficiency: 'proficient' },
      { name: 'WebSockets & WebRTC', proficiency: 'proficient' },
    ],
  },
  {
    category: 'Database',
    index: '03',
    description: '[Placeholder: High-availability transactional storage, distributed caches, and event logs]',
    skills: [
      { name: 'PostgreSQL', proficiency: 'core', highlight: true },
      { name: 'Redis / Dragonfly', proficiency: 'core', highlight: true },
      { name: 'Apache Kafka', proficiency: 'core', highlight: true },
      { name: 'ClickHouse OLAP', proficiency: 'proficient', highlight: true },
      { name: 'Elasticsearch', proficiency: 'proficient' },
      { name: 'Cassandra / ScyllaDB', proficiency: 'exploring' },
    ],
  },
  {
    category: 'Tools & Infrastructure',
    index: '04',
    description: '[Placeholder: Container orchestration, infrastructure-as-code, and distributed observability]',
    skills: [
      { name: 'Kubernetes (K8s)', proficiency: 'core', highlight: true },
      { name: 'Docker & OCI', proficiency: 'core', highlight: true },
      { name: 'Terraform / OpenTofu', proficiency: 'proficient', highlight: true },
      { name: 'AWS & Cloudflare Edge', proficiency: 'core' },
      { name: 'Prometheus & Grafana', proficiency: 'proficient' },
      { name: 'CI/CD Automation', proficiency: 'core' },
    ],
  },
];

export const projectsData: ReadonlyArray<ProjectItem> = [
  {
    id: 'project-alpha',
    indexNumber: '01',
    title: '[Placeholder: Project Alpha — Distributed Real-Time Event Broker]',
    slug: 'project-alpha-event-broker',
    category: 'Distributed Systems',
    summary:
      '[Placeholder: High-performance append-only distributed event log achieving sub-millisecond replication latency across multi-region nodes.]',
    techStack: ['Go', 'Raft Consensus', 'gRPC', 'RocksDB', 'Docker'],
    metricsPlaceholder: '[Placeholder: 1.2M msgs/sec throughput, <1.8ms p99 end-to-end latency]',
    liveUrl: 'https://example.com/demo-alpha',
    repoUrl: 'https://github.com/[placeholder]/project-alpha',
    featured: true,
  },
  {
    id: 'project-beta',
    indexNumber: '02',
    title: '[Placeholder: Project Beta — Intelligent API Gateway & Rate Limiter]',
    slug: 'project-beta-api-gateway',
    category: 'Cloud Infrastructure',
    summary:
      '[Placeholder: Cloud-native edge proxy providing distributed token-bucket rate limiting, TLS termination, and dynamic routing.]',
    techStack: ['Rust', 'Tokio', 'Redis', 'eBPF', 'Prometheus'],
    metricsPlaceholder: '[Placeholder: Zero memory leaks across 90-day soak test, 40% memory reduction]',
    liveUrl: 'https://example.com/demo-beta',
    repoUrl: 'https://github.com/[placeholder]/project-beta',
    featured: true,
  },
  {
    id: 'project-gamma',
    indexNumber: '03',
    title: '[Placeholder: Project Gamma — Analytical Metrics Pipeline]',
    slug: 'project-gamma-analytical-pipeline',
    category: 'Data Engineering',
    summary:
      '[Placeholder: Near-instant aggregation pipeline parsing streaming clickstream telemetry and converting events to real-time column stores.]',
    techStack: ['TypeScript', 'Apache Kafka', 'ClickHouse', 'PostgreSQL', 'Grafana'],
    metricsPlaceholder: '[Placeholder: Ingesting 50GB telemetry daily, dashboard query response <80ms]',
    liveUrl: 'https://example.com/demo-gamma',
    repoUrl: 'https://github.com/[placeholder]/project-gamma',
    featured: true,
  },
  {
    id: 'project-delta',
    indexNumber: '04',
    title: '[Placeholder: Project Delta — Spatial Systems Topology Visualizer]',
    slug: 'project-delta-spatial-topology',
    category: 'Interactive WebGL',
    summary:
      '[Placeholder: Interactive 3D visualization dashboard rendering live microservice mesh topologies and latency graphs.]',
    techStack: ['Next.js', 'Three.js', 'React Three Fiber', 'WebSockets', 'Tailwind CSS'],
    metricsPlaceholder: '[Placeholder: 60fps graph rendering with 1,000+ simultaneous nodes]',
    liveUrl: 'https://example.com/demo-delta',
    repoUrl: 'https://github.com/[placeholder]/project-delta',
    featured: false,
  },
];

export const experienceData: ReadonlyArray<ExperienceItem> = [
  {
    id: 'exp-1',
    role: '[Placeholder: Lead Systems Architect]',
    company: '[Placeholder: Enterprise Cloud Solutions Corp]',
    location: '[Placeholder: San Francisco, CA / Hybrid]',
    period: '[Placeholder: 2023 — Present]',
    current: true,
    description:
      '[Placeholder: Leading the core infrastructure guild responsible for distributed backplane services, service mesh, and database reliability.]',
    highlights: [
      '[Placeholder: Spearheaded migration from legacy monolith to decoupled Go microservices, shrinking compute cost by 32%.]',
      '[Placeholder: Architected multi-region failover automation that reduced recovery time objective (RTO) from 45 minutes to <30 seconds.]',
      '[Placeholder: Mentored a team of 8 backend engineers on concurrency patterns, profiling, and distributed consensus.]',
    ],
    technologies: ['Go', 'Kubernetes', 'PostgreSQL', 'Kafka', 'Terraform', 'Datadog'],
  },
  {
    id: 'exp-2',
    role: '[Placeholder: Senior Backend Engineer]',
    company: '[Placeholder: HyperScale Fintech Labs]',
    location: '[Placeholder: New York, NY / Remote]',
    period: '[Placeholder: 2021 — 2023]',
    current: false,
    description:
      '[Placeholder: Designed high-frequency ledger processing engines and transactional reconciliation pipelines handling card transactions.]',
    highlights: [
      '[Placeholder: Built immutable audit trail subsystem processing $10M+ daily volume with deterministic double-entry guarantees.]',
      '[Placeholder: Optimized PostgreSQL queries and partition strategy, cutting read latency by 65% for historical lookups.]',
      '[Placeholder: Implemented zero-downtime deployment pipelines reducing deployment window failures to zero.]',
    ],
    technologies: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
  },
  {
    id: 'exp-3',
    role: '[Placeholder: Software Engineer — Platform]',
    company: '[Placeholder: DataStream Nexus]',
    location: '[Placeholder: Austin, TX]',
    period: '[Placeholder: 2018 — 2021]',
    current: false,
    description:
      '[Placeholder: Contributed to backend APIs, developer tooling, and distributed caching layers for an enterprise analytics suite.]',
    highlights: [
      '[Placeholder: Integrated distributed caching layer reducing database pressure by 40% during peak traffic bursts.]',
      '[Placeholder: Standardized OpenAPI specifications and automated SDK generation across client development teams.]',
    ],
    technologies: ['Python', 'Go', 'Docker', 'Redis', 'RabbitMQ', 'MySQL'],
  },
];
