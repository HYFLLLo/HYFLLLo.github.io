import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { VscAccount, VscArchive, VscHome, VscMail } from 'react-icons/vsc'
import Dock, { type DockItemData } from './Dock'
import PillNav, { type PillNavItem } from './Pill_Nav'
import SplashCursor from './Splash_cursor'

const PILL_NAV_ITEMS: PillNavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

function pad(n: number) {
  return n.toString().padStart(2, '0')
}

function formatUtc(d: Date) {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
}

function TerminalBar() {
  const [utc, setUtc] = useState(() => formatUtc(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => setUtc(formatUtc(new Date())), 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="terminal-bar" aria-hidden>
      <div className="terminal-bar__left">
        <span className="terminal-bar__pulse" />
        <span className="label-mono terminal-bar__status">SYSTEM_STATUS: ONLINE</span>
        <span className="label-mono terminal-bar__meta terminal-bar__loc">LOC: 34.0522° N, 118.2437° W</span>
      </div>
      <span className="label-mono terminal-bar__meta">{utc}</span>
    </div>
  )
}

function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header className="site-header site-header--pill">
      <PillNav
        logo="/favicon.svg"
        logoAlt="Yven Portfolio"
        items={PILL_NAV_ITEMS}
        activeHref={pathname}
        className="site-pill-nav-bar"
        ease="power2.easeOut"
        baseColor="#11131e"
        pillColor="#00f3ff"
        hoveredPillTextColor="#11131e"
        pillTextColor="#11131e"
        initialLoadAnimation={false}
      />
      <div className="site-header__pill-tools">
        <button type="button" className="icon-btn" aria-label="终端">
          <span className="material-symbols-outlined">terminal</span>
        </button>
        <button type="button" className="icon-btn" aria-label="组件">
          <span className="material-symbols-outlined">settings_input_component</span>
        </button>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <span className="label-glitch site-footer__status">
            胡雨丰 · YuFeng.Hu // © {new Date().getFullYear()} NEURAL_ARCHIVE
          </span>
        </div>
        <div className="site-footer__links">
          <a href="https://github.com/HYFLLLo" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:huyufeng227@163.com">Email</a>
          <a href="#" onClick={(e) => e.preventDefault()}>
            WeChat: HYF0227uio
          </a>
        </div>
        <div className="site-footer__node label-mono">
          <span className="material-symbols-outlined site-footer__node-icon" aria-hidden>
            terminal
          </span>
          NODE_HYF // SYNC_SUCCESS
        </div>
      </div>
    </footer>
  )
}

function SiteDock() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const items = useMemo<DockItemData[]>(
    () => [
      {
        icon: <VscHome size={18} />,
        label: 'Home',
        onClick: () => {
          navigate('/')
        },
        className: pathname === '/' ? 'dock-item--active' : undefined,
      },
      {
        icon: <VscAccount size={18} />,
        label: 'About',
        onClick: () => {
          navigate('/about')
        },
        className: pathname === '/about' ? 'dock-item--active' : undefined,
      },
      {
        icon: <VscArchive size={18} />,
        label: 'Work',
        onClick: () => {
          navigate('/work')
        },
        className: pathname === '/work' ? 'dock-item--active' : undefined,
      },
      {
        icon: <VscMail size={18} />,
        label: 'Contact',
        onClick: () => {
          navigate('/contact')
        },
        className: pathname === '/contact' ? 'dock-item--active' : undefined,
      },
    ],
    [navigate, pathname],
  )

  return (
    <nav className="site-dock-wrap" aria-label="底部程序坞">
      <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
    </nav>
  )
}

export function Layout() {
  return (
    <div className="app-shell">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#A855F7"
      />
      <div className="app-shell__content">
        <div className="scanline-overlay" aria-hidden />
        <TerminalBar />
        <SiteHeader />
        <main className="site-main">
          <Outlet />
        </main>
        <SiteFooter />
        <SiteDock />
      </div>
    </div>
  )
}
