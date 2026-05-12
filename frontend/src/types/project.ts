export interface Project {
  screenshots?: string[];
  codeSnippets?: { title: string, language: string, code: string }[];
  title: string;
  logo?: string;
  impact: string;
  desc: string;
  stack: string[];
  details?: {
    innovation: string;
    strongPoints: string[];
    architecture: string;
    topology?: string;
    url?: string;
    github?: string;
    businessImpact?: string;
    technicalChallenges?: string;
  };
  codeSnippet?: string;
  codeLanguage?: string;
}

export type Language = 'en' | 'pt';
