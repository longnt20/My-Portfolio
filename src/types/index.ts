/**
 * Types & Schemas: "Beyond The Code"
 */

export interface SocialLink {
  readonly platform: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Email' | 'Resume';
  readonly url: string;
  readonly handle: string;
}

export interface MetricItem {
  readonly label: string;
  readonly value: string;
  readonly description: string;
}

export interface PersonalInfo {
  readonly name: string;
  readonly role: string;
  readonly tagline: string;
  readonly location: string;
  readonly email: string;
  readonly availability: 'available' | 'contract' | 'unavailable';
  readonly availabilityLabel: string;
  readonly cvUrl: string | null;
  readonly bio: ReadonlyArray<string>;
  readonly metrics: ReadonlyArray<MetricItem>;
  readonly socials: ReadonlyArray<SocialLink>;
}

export type SkillProficiency = 'core' | 'proficient' | 'exploring';

export interface SkillItem {
  readonly name: string;
  readonly proficiency: SkillProficiency;
  readonly highlight?: boolean;
}

export interface SkillCategory {
  readonly category: 'Backend' | 'Frontend' | 'Database' | 'Tools & Infrastructure';
  readonly index: string;
  readonly description: string;
  readonly skills: ReadonlyArray<SkillItem>;
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly slug: string;
  readonly category: string;
  readonly indexNumber: string;
  readonly summary: string;
  readonly techStack: ReadonlyArray<string>;
  readonly metricsPlaceholder: string;
  readonly liveUrl?: string;
  readonly repoUrl?: string;
  readonly featured: boolean;
}

export interface ExperienceItem {
  readonly id: string;
  readonly role: string;
  readonly company: string;
  readonly location: string;
  readonly period: string;
  readonly current: boolean;
  readonly description: string;
  readonly highlights: ReadonlyArray<string>;
  readonly technologies: ReadonlyArray<string>;
}

export interface NavItem {
  readonly index: string;
  readonly label: string;
  readonly href: string;
}
