type Project = {
  ref: string
  title: string
  subtitle: string
  description: string
  highlights: string[]
  tags: string[]
  icon: string
  metric: string
  metricLabel: string
  github?: string
  doc?: string
  featured?: boolean
}

const aiProjects: Project[] = [
  {
    ref: 'REF_001',
    title: '外卖夜宵爆品预测',
    subtitle: 'AI Agent × 即时零售 · 商家 GMV 提升助手',
    description:
      '专攻即时零售夜间场景的 AI 爆品预测助手。事件理解 / 用户情绪分析 / 决策三层 Agent 架构，实现小时级爆品预测 + 动态定价策略。',
    highlights: [
      '事件理解 Agent 分类准确率 97%',
      '用户情绪分析场景识别准确率 80%',
      '决策层爆品预测准确率 68.8%，商家方案采纳率 30%',
      '静态/动态数据分离，节省 80%+ TOKEN，延迟降低 50 倍+',
    ],
    tags: ['Agent', 'LLM', '即时零售'],
    icon: 'restaurant',
    metric: '97%',
    metricLabel: '事件理解准确率',
    github: 'https://github.com/HYFLLLo/Late-night-snack-prediction',
    doc: 'https://my.feishu.cn/wiki/A7OFwzuuzi19RHki2bec1PMEnQX',
    featured: true,
  },
  {
    ref: 'REF_002',
    title: '智能客服系统',
    subtitle: 'RAG + Agent + LLM · 坐席提效系统',
    description:
      '面向企业的 IT 智能客服系统，融合知识库检索、大语言模型与 Agent 决策链。员工侧智能问答 + 坐席侧 AI 辅助，覆盖问—答—解决全流程。',
    highlights: [
      '100 条复杂问题评测：任务完成准确率 > 90%',
      '平均响应时间 5s，95% 请求 5s 内完成',
      'AI 直接解决率 ≥ 70%',
      'BM25 + 向量检索 + RRF 融合重排，置信度三档分流',
    ],
    tags: ['RAG', 'Agent', 'ChromaDB'],
    icon: 'support_agent',
    metric: '>90%',
    metricLabel: '任务完成准确率',
    github: 'https://github.com/HYFLLLo/New-IT-Customer-System',
    doc: 'https://my.feishu.cn/docx/ChTGdisyZomLwrxgExhcC5BKnR1',
  },
  {
    ref: 'REF_003',
    title: '个人工作助手',
    subtitle: '知识管理 + 报告生成 · 个人效率提升',
    description:
      '面向知识工作者的 AI 生产力工具，融合知识库管理、任务意图识别与多轮对话。自动解析多格式文档、智能拆解任务、按模板生成结构化报告。',
    highlights: [
      '复杂报告生成时间从数小时压缩至 1 分钟以内',
      '报告结构完整性 90%，内容相关性 85%',
      '8 种预定义模板，多格式文档支持，私有知识库检索',
      'Planner → Executor → Verifier 流水线，最多 3 次自动重试',
    ],
    tags: ['Agent', 'SSE', '知识库'],
    icon: 'auto_awesome',
    metric: '<1min',
    metricLabel: '报告生成时间',
    github: 'https://github.com/HYFLLLo/New-Assitant',
    doc: 'https://my.feishu.cn/docx/MkWnd95QooqxNOxZpo2cabPhn0f',
  },
]

const workProjects: Project[] = [
  {
    ref: 'REF_004',
    title: 'ECI 容器资源画像',
    subtitle: '节省资源 × 智能调度 · 资源利用率优化',
    description:
      '通过分析容器历史资源使用数据，为 Kubernetes 自动生成合理 Request / Limit 推荐值，在「资源浪费」与「稳定性风险」之间找最优平衡。',
    highlights: [
      '应用层 / ECI 实例层两级资源画像，按状态差异化策略',
      'Target = Recommend × (1 + Buffer)，Degree 偏离度评估',
      'ECI 实例资源闲置率 >60% → 平均 23%，目标利用率 +30%',
    ],
    tags: ['Kubernetes', 'ECI', '资源治理'],
    icon: 'memory',
    metric: '>30%',
    metricLabel: '资源浪费降低',
  },
  {
    ref: 'REF_005',
    title: '存储产品功能建设',
    subtitle: '需求设计 × POC 验证 · 马上云 NAS',
    description:
      '负责马上云 NAS 文件存储产品的需求设计与评审，主导回收站、目录配额等关键模块的功能边界与规则梳理；同时承担云厂商 POC 用例编写与验证。',
    highlights: [
      '主导回收站、目录配额模块需求设计与评审',
      '将 NAS 能力拆解为可执行 POC 用例，对齐口径与结论',
      '沉淀 POC 验证用例与测试支持过程，支撑采购决策',
    ],
    tags: ['NAS', 'POC', '产品设计'],
    icon: 'storage',
    metric: 'POC',
    metricLabel: '用例验证完成',
  },
]

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className={`glass-panel work-card${p.featured ? ' work-card--featured' : ''}`}>
      <div className="work-card__top">
        <span className="label-mono work-card__ref">{p.ref}</span>
        <span className="material-symbols-outlined work-card__icon" aria-hidden>
          {p.icon}
        </span>
      </div>
      {p.featured && <span className="label-mono work-card__featured">★ FEATURED</span>}
      <h3 className="headline-md text-primary-neon work-card__title">{p.title}</h3>
      <p className="label-mono work-card__subtitle muted">{p.subtitle}</p>
      <p className="body-text muted work-card__desc">{p.description}</p>

      <ul className="work-card__highlights">
        {p.highlights.map((h) => (
          <li key={h}>
            <span className="work-card__hl-bullet" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="work-card__bottom">
        <div className="work-card__metric">
          <span className="work-card__metric-value text-primary-neon">{p.metric}</span>
          <span className="label-mono work-card__metric-label muted">{p.metricLabel}</span>
        </div>
        <div className="work-card__links">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" className="work-card__link label-mono">
              <span className="material-symbols-outlined work-card__link-icon" aria-hidden>
                code
              </span>
              GitHub
            </a>
          )}
          {p.doc && (
            <a href={p.doc} target="_blank" rel="noreferrer" className="work-card__link label-mono">
              <span className="material-symbols-outlined work-card__link-icon" aria-hidden>
                article
              </span>
              Doc
            </a>
          )}
        </div>
      </div>

      <div className="work-card__tags">
        {p.tags.map((t) => (
          <span key={t} className="tag label-mono">
            {t}
          </span>
        ))}
      </div>
    </article>
  )
}

export function WorkPage() {
  return (
    <div className="page page--work">
      <section className="work-hero">
        <div className="work-hero__title-row">
          <span className="work-hero__bar" />
          <h1 className="headline-xl text-primary-neon work-hero__title work-hero__title--desktop">
            PROJECT_ARCHIVE
          </h1>
          <h1 className="headline-md text-primary-neon work-hero__title work-hero__title--mobile">ARCHIVE</h1>
        </div>
        <p className="label-mono work-hero__lead muted">
          AI Agent / RAG / 云原生 / B 端产品的真实落地。每一项都包含问题背景、解决方案、可验证指标。
        </p>
      </section>

      <div className="work-section-head">
        <span className="label-mono work-section-head__tag">// AI_PROJECTS</span>
        <h2 className="headline-md text-primary-neon">我的 AI 项目</h2>
      </div>
      <div className="work-project-grid">
        {aiProjects.map((p) => (
          <ProjectCard key={p.ref} p={p} />
        ))}
      </div>

      <div className="work-section-head work-section-head--mt">
        <span className="label-mono work-section-head__tag">// WORK_OUTCOMES</span>
        <h2 className="headline-md text-primary-neon">我的工作成果</h2>
      </div>
      <div className="work-project-grid work-project-grid--two">
        {workProjects.map((p) => (
          <ProjectCard key={p.ref} p={p} />
        ))}
      </div>

      <section className="work-specs">
        <div className="label-mono work-specs__ribbon">TECH_SPECS_V.01</div>
        <div className="work-specs__grid">
          <div>
            <span className="label-mono muted work-specs__k">AI Projects</span>
            <span className="headline-md text-primary-neon">3</span>
          </div>
          <div>
            <span className="label-mono muted work-specs__k">Work Outcomes</span>
            <span className="headline-md text-primary-neon">2</span>
          </div>
          <div>
            <span className="label-mono muted work-specs__k">Top Accuracy</span>
            <span className="headline-md text-primary-neon">97%</span>
          </div>
          <div>
            <span className="label-mono muted work-specs__k">Signal</span>
            <span className="headline-md text-primary-neon">STABLE</span>
          </div>
        </div>
      </section>
    </div>
  )
}
