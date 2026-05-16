import { useState } from 'react'

const nodes = [
  {
    id: 'NODE_01',
    label: 'WeChat',
    value: 'HYF0227uio',
    icon: 'chat_bubble',
    hint: 'COPY_ID',
    href: '#wechat',
    copy: 'HYF0227uio',
  },
  {
    id: 'NODE_02',
    label: 'GitHub',
    value: 'HYFLLLo',
    icon: 'terminal',
    hint: 'SOURCE_ACCESS',
    href: 'https://github.com/HYFLLLo',
  },
  {
    id: 'NODE_03',
    label: 'Email',
    value: 'huyufeng227@163.com',
    icon: 'mail',
    hint: 'OPEN_MAIL',
    href: 'mailto:huyufeng227@163.com',
  },
] as const

export function ContactPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, copy?: string) => {
    if (!copy) return
    e.preventDefault()
    navigator.clipboard
      .writeText(copy)
      .then(() => {
        setCopied(copy)
        window.setTimeout(() => setCopied(null), 2000)
      })
      .catch(() => {})
  }

  return (
    <div className="page page--contact">
      <div className="contact-meta label-mono">
        <div className="contact-meta__left">
          <span className="contact-meta__dot" />
          <span>Status: Secure_Protocol_Active</span>
        </div>
        <span>Target: YUFENG.HU</span>
      </div>

      <section className="contact-section">
        <div className="contact-avatar" aria-hidden>
          <div className="contact-avatar__halo" />
          <div className="contact-avatar__ring" />
          <div className="contact-avatar__core">
            <span className="material-symbols-outlined contact-avatar__print">fingerprint</span>
            <div className="label-mono contact-avatar__tag">REF_USR_HYF</div>
          </div>
        </div>

        <div className="contact-brand copy-block">
          <h1 className="headline-xl text-primary-neon contact-brand__title">欢迎随时联系我 👏</h1>
          <p className="body-text muted">
            已屏蔽「在吗」，请直接说事 😌&nbsp;&nbsp;选择下方任一节点建立链接，或复制邮箱 / 微信号到任何客户端。
          </p>
        </div>

        <div className="contact-nodes">
          {nodes.map((n) => {
            const isCopy = 'copy' in n && Boolean(n.copy)
            const isCopied = isCopy && copied === n.copy
            const external = n.href.startsWith('http')
            return (
              <a
                key={n.id}
                href={n.href}
                className="contact-node"
                onClick={(e) => isCopy && handleClick(e, n.copy)}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                <span className="label-mono contact-node__id">{n.id}</span>
                <span className="material-symbols-outlined contact-node__icon">{n.icon}</span>
                <span className="label-mono contact-node__label">{n.label}</span>
                <span className="label-mono contact-node__value muted">{n.value}</span>
                <div className="contact-node__line" />
                <span className="label-mono contact-node__hint">{isCopied ? 'COPIED!' : n.hint}</span>
              </a>
            )
          })}
        </div>

        <div className="contact-form">
          <label className="label-mono contact-form__label" htmlFor="contact-msg">
            Transmit Message
          </label>
          <div className="contact-form__field">
            <input
              id="contact-msg"
              className="contact-form__input label-mono"
              placeholder="huyufeng227@163.com"
              type="email"
              autoComplete="email"
              defaultValue="huyufeng227@163.com"
            />
            <a
              href="mailto:huyufeng227@163.com"
              className="contact-form__send"
              aria-label="发送邮件"
            >
              <span className="material-symbols-outlined">send</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
