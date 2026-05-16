import { Link } from 'react-router-dom'

const featureCards = [
  {
    id: 'STATUS_01',
    title: 'AI_AGENT',
    body: '具备系统架构基础认知与 AI 原生思维，可参与 Agent 工作流的设计与优化，配合团队推进智能化方案落地。',
  },
  {
    id: 'STATUS_02',
    title: 'CLOUD_OPS',
    body: '在容器 ECI 资源闲置率较高的场景中，参与设计资源画像分层架构与风险冗余机制，资源利用率与成本效率有所改善。',
  },
  {
    id: 'STATUS_03',
    title: 'VIBE_CODE',
    body: '使用 Trae、Claude Code、Cursor 等工具建立实用工作流，支持 Demo 与原型的快速开发及方案验证。',
  },
]

export function HomePage() {
  return (
    <div className="page page--home">
      <div className="home-decor home-decor--tl" aria-hidden>
        <p>NODE: HYF // YVEN</p>
        <p>STACK: AGENT_OS_v2</p>
        <p>SYNC_STATUS: VERIFIED</p>
        <div className="glitch-line glitch-line--sm" />
      </div>
      <div className="home-decor home-decor--br" aria-hidden>
        <p>UPTIME: 2026.05</p>
        <p>FOCUS: B-END · AI · CLOUD</p>
        <p>PORT: 8080/UDP</p>
        <div className="glitch-line glitch-line--md" />
      </div>

      <div className="home-hero">
        <div className="home-logo-wrap">
          <div className="home-logo-glow" />
          <h1 className="home-y hologram-y">Y</h1>
          <div className="home-ref label-mono">REF_ID: YUFENG.HU</div>
        </div>

        <div className="home-intro">
          <div className="home-greeting">
            <span className="label-mono home-greeting__tag">INITIALIZING_GREETING</span>
            <p className="headline-lg home-greeting__line">Hello，我是 Yven，也是 YuFeng.Hu</p>
          </div>
          <p className="body-text home-lead">
            B 端产品 / AI Agent 工程 / 云计算方向。专注把成本与效率问题拆解为可执行的规则与机制，
            用 Vibe Coding 把想法快速变成可验证的原型。
          </p>
        </div>

        <div className="home-cta">
          <Link to="/work" className="chamfer-btn label-mono">
            看我的项目
          </Link>
          <a
            className="ghost-link label-mono"
            href="https://github.com/HYFLLLo"
            target="_blank"
            rel="noreferrer"
          >
            <span className="ghost-link__dot" />
            View Repository
          </a>
        </div>
      </div>

      <div className="home-grid">
        {featureCards.map((card) => (
          <article key={card.id} className="neo-card">
            <div className="neo-card__corner" />
            <span className="label-mono neo-card__id">{card.id}</span>
            <h3 className="headline-md neo-card__title">{card.title}</h3>
            <p className="body-text neo-card__body">{card.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
