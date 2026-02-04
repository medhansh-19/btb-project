export type SkillDomain = 'code' | 'design' | 'data-analysis' | 'communication' | 'critical-thinking' | 'logical-reasoning';

export interface Task {
  id: string;
  domain: SkillDomain;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit: number; // in minutes
  prompt: string;
  sampleAnswer?: string;
  inputType: 'text' | 'code' | 'file-upload' | 'multiple-choice';
}

export interface TaskSubmission {
  code?: string;
  text?: string;
  fileUrl?: string;
  selectedOption?: string;
}

export interface AIAnalysis {
  overallScore: number;
  breakdown: {
    [key: string]: number;
  };
  strengths: string[];
  weaknesses: string[];
  recommendations: {
    immediate: string[];
    resources: string[];
  };
}

export interface Assessment {
  id: string;
  userId: string;
  skillDomain: SkillDomain;
  taskId: string;
  taskTitle: string;
  submission: TaskSubmission;
  aiAnalysis: AIAnalysis;
  submittedAt: any;
}

export interface RoadmapSkill {
  name: string;
  category: 'fundamentals' | 'intermediate' | 'advanced';
  estimatedHours: number;
  prerequisites: string[];
  resources: string[];
  status: 'locked' | 'in-progress' | 'completed';
  completedAt?: any;
}

export interface Progress {
  userId: string;
  skillDomain: string;
  roadmap: RoadmapSkill[];
  readinessScore: number;
  lastUpdated: any;
}