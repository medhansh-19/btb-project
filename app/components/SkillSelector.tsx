'use client';

import { SkillDomain } from '../types';
import { Code, Palette, BarChart3, MessageSquare, Brain, Lightbulb } from 'lucide-react';

interface Props {
  onSelect: (domain: SkillDomain) => void;
}

export default function SkillSelector({ onSelect }: Props) {
  const domains = [
    {
      id: 'code' as SkillDomain,
      name: 'Code',
      icon: Code,
      description: 'Write & debug code, solve algorithms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'design' as SkillDomain,
      name: 'Design',
      icon: Palette,
      description: 'UX/UI, visual hierarchy, color theory',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'data' as SkillDomain,
      name: 'Data Analysis',
      icon: BarChart3,
      description: 'Interpret data, find patterns, insights',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'communication' as SkillDomain,
      name: 'Communication',
      icon: MessageSquare,
      description: 'Clear writing, presentations, feedback',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'critical-thinking' as SkillDomain,
      name: 'Critical Thinking',
      icon: Brain,
      description: 'Logic, problem decomposition, analysis',
      color: 'from-indigo-500 to-violet-500'
    },
    {
      id: 'logical-reasoning' as SkillDomain,
      name: 'Logical Reasoning',
      icon: Lightbulb,
      description: 'Patterns, puzzles, deductive reasoning',
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-5xl font-bold text-white mb-4">
            Choose Your <span className="gradient-text">Skill Domain</span>
          </h1>
          <p className="text-xl text-slate-300">
            Select a domain to test your real skills with active assessment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <button
                key={domain.id}
                onClick={() => onSelect(domain.id)}
                className="skill-card text-left p-6 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${domain.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">
                  {domain.name}
                </h3>
                
                <p className="text-slate-400">
                  {domain.description}
                </p>

                <div className="mt-4 text-sm text-slate-500 flex items-center">
                  <span className="mr-2">→</span>
                  Get instant AI feedback
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

---

## 🎯 **HOW IT ALL WORKS NOW:**

### **User Flow:**

1. **User selects domain** (e.g., "Communication")
2. **System fetches random task** from that domain's pool
3. **User completes task** (writes email, solves puzzle, etc.)
4. **AI analyzes** using domain-specific metrics
5. **Returns score 0-100** with detailed breakdown
6. **Shows specific improvements** needed

### **Example Flow - Communication Domain:**
```
User → Selects "Communication"
     → Gets task: "Write professional email about project delay"
     → Writes their email
     → AI analyzes:
        - Clarity: 78/100
        - Structure: 75/100
        - Tone: 73/100
        - Persuasiveness: 74/100
     → Overall: 75/100
     → Recommendations:
        ✓ Strengths: "Professional tone, clear points"
        ✗ Weaknesses: "Could be more concise, weak opening"
        📚 Learn: "Executive summary writing, Email frameworks"