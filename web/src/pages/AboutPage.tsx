const primaryStack = ['Trae / Claude Code / Cursor', 'RAG / Agent / LLM', 'Prompt / 多模态']
const cyberToolkit = ['Kubernetes / ECI', 'NAS / 容器画像', 'Next.js / React / Framer']

const capabilities = [
  '具备 Vibe Coding 快速原型开发经验：使用 Trae、Claude Code、Cursor 等工具建立实用工作流，支持 Demo 与原型的快速开发及方案验证。',
  '具备系统架构基础认知与 AI 原生思维，可参与 Agent 工作流的设计与优化，配合团队推进智能化方案落地。',
  '能将成本与效率相关问题拆解为具体规则与机制：在容器 ECI 资源闲置率较高的场景中，参与设计资源画像分层架构与风险冗余机制。',
  '了解大模型、对话交互、提示词设计、RAG、多模态等技术的基本概念与常见应用方式。',
  '持续关注国内外 AI 领域动态，对 Agent 技术生态保持学习与跟进。',
]

const timeline = [
  {
    range: '2025.07 — 2026.02',
    org: '马上消费金融股份有限公司',
    role: '产品经理 · B 端 · 云计算（NAS / 容器）',
    points: [
      '主导马上云 NAS 文件存储产品需求设计与评审，覆盖回收站、目录配额模块',
      '设计容器资源画像分层架构（应用层 / 实例层），引入风险冗余机制',
      'ECI 实例资源闲置率从 >60% 降至平均 23%，目标提升利用率 30%',
    ],
    tags: ['NAS', 'ECI', '产品设计', '资源治理', 'POC'],
  },
  {
    range: '2022.09 — 2025.06',
    org: '电子科技大学（985）',
    role: '硕士 · 交通运输 · 云计算 / 边缘计算方向',
    points: [
      '研究方向：云计算、边缘计算、服务网格',
      '中国移动「梧桐·鸿鹄」2024 研学夏令营（2024.06 — 2024.09）',
      '研究无服务器函数在多云环境的交互，发表论文《Research on Intelligent Scheduling of Multi-Cloud Serverless Functions》',
    ],
    tags: ['云计算', '边缘计算', '服务网格'],
  },
  {
    range: '2018.09 — 2022.06',
    org: '福州大学（211）',
    role: '本科 · 自动化',
    points: ['自动化专业本科，打下扎实的系统控制与编程基础', '本科期间积累系统思维与工程实践能力'],
    tags: ['自动化', '系统工程'],
  },
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="about-list">
      {items.map((item) => (
        <li key={item}>
          <span className="about-list__bullet" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function AboutPage() {
  return (
    <div className="page page--about">
      <div className="about-glow about-glow--tl" aria-hidden />
      <div className="about-glow about-glow--br" aria-hidden />

      <div className="about-grid">
        <div className="about-bio glass-panel">
          <div className="label-mono about-bio__ref">REF_ID: //YUFENG_BIO_01</div>
          <div className="about-bio__inner">
            <h1 className="headline-xl about-bio__title">
              胡雨丰 <br />
              <span className="text-secondary">YuFeng.Hu // Yven</span>
            </h1>
            <div className="chip-row">
              <span className="chip chip--secondary">B 端 产品经理</span>
              <span className="chip chip--primary">AI Agent 工程</span>
              <span className="chip chip--muted">云计算 // 容器</span>
            </div>
            <div className="about-copy">
              <p className="body-text">
                关注 AI Agent、云原生与 B 端产品三者的交叉。把复杂数据流与成本/效率问题，拆解为可被工程化、可被复盘的规则与机制；用 Vibe Coding
                把方案快速跑成 Demo。
              </p>
              <ul className="about-capabilities">
                {capabilities.map((c, i) => (
                  <li key={c}>
                    <span className="label-mono about-capabilities__index">{String(i + 1).padStart(2, '0')}.</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="about-skills">
              <div>
                <span className="label-mono about-skills__label">Primary_Stack</span>
                <BulletList items={primaryStack} />
              </div>
              <div>
                <span className="label-mono about-skills__label">Cyber_Toolkit</span>
                <BulletList items={cyberToolkit} />
              </div>
            </div>
            <div className="about-cta">
              <a
                href="https://github.com/HYFLLLo"
                target="_blank"
                rel="noreferrer"
                className="manifest-btn label-mono"
              >
                [ Open_GitHub ]
                <span className="manifest-btn__corner manifest-btn__corner--tr" />
                <span className="manifest-btn__corner manifest-btn__corner--bl" />
              </a>
            </div>
          </div>
        </div>

        <div className="about-side">
          <div className="glass-panel neo-stroke code-panel">
            <div className="code-panel__bar">
              <span className="label-mono code-panel__title">
                <span className="material-symbols-outlined code-panel__icon" aria-hidden>
                  code
                </span>
                yven_profile.ts
              </span>
              <div className="code-panel__dots" aria-hidden>
                <span />
                <span />
                <span />
              </div>
            </div>
            <pre className="code-panel__pre label-mono">
              <code>
                {`import { Operator } from '@yven/core';

const yven = new Operator({
  identity: 'YuFeng.Hu',
  role: ['B-end PM', 'AI Engineer'],
  focus: ['Agent', 'RAG', 'Cloud'],
  tools: ['Trae', 'Claude Code', 'Cursor']
});

await yven.connect();
// READY for collaboration
console.log('[ONLINE] mailto:huyufeng227@163.com');`}
              </code>
            </pre>
          </div>

          <div className="metrics-row">
            <div className="glass-panel neo-stroke metric-card">
              <span className="label-mono metric-card__label">Event_Accuracy</span>
              <div className="metric-card__value text-primary-neon">
                97<span className="metric-card__unit">%</span>
              </div>
              <div className="metric-card__bar">
                <div className="metric-card__fill metric-card__fill--cyan" style={{ width: '97%' }} />
              </div>
            </div>
            <div className="glass-panel neo-stroke metric-card">
              <span className="label-mono metric-card__label">Task_Pass_Rate</span>
              <div className="metric-card__value text-secondary">
                90<span className="metric-card__unit">%</span>
              </div>
              <div className="metric-card__bar">
                <div className="metric-card__fill metric-card__fill--purple" style={{ width: '90%' }} />
              </div>
            </div>
          </div>

          <div className="glass-panel neo-stroke hex-viz">
            <div className="hex-viz__bg" aria-hidden>
              <span className="material-symbols-outlined">grid_view</span>
            </div>
            <div className="hex-viz__rings">
              <div className="hex-ring hex-ring--outer">
                <div className="hex-ring hex-ring--mid">
                  <div className="hex-ring hex-ring--inner">
                    <div className="hex-core" />
                  </div>
                </div>
              </div>
              <span className="label-mono hex-viz__axis hex-viz__axis--t">AGENT</span>
              <span className="label-mono hex-viz__axis hex-viz__axis--b">CLOUD</span>
              <span className="label-mono hex-viz__axis hex-viz__axis--l">PRODUCT</span>
              <span className="label-mono hex-viz__axis hex-viz__axis--r">VIBE</span>
            </div>
            <div className="label-mono hex-viz__caption">CAPABILITY_RADAR // V0.9</div>
          </div>
        </div>
      </div>

      <section className="about-log">
        <div className="about-log__head">
          <h2 className="headline-md text-primary-neon uppercase">Log_History</h2>
          <div className="about-log__rule" />
        </div>
        <div className="about-log__grid">
          {timeline.map((item) => (
            <article key={item.org} className="glass-panel neo-stroke log-card">
              <span className="label-mono log-card__range text-secondary">{item.range}</span>
              <h3 className="headline-sm log-card__org">{item.org}</h3>
              <p className="label-mono log-card__role text-primary-neon">{item.role}</p>
              <ul className="log-card__points">
                {item.points.map((p) => (
                  <li key={p}>
                    <span className="log-card__bullet" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="log-card__tags">
                {item.tags.map((t) => (
                  <span key={t} className="tag label-mono">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
