import { useState, useEffect } from 'react'
import userPhoto from './assets/177.jpg'
import sofaPhoto from './assets/jpg_2000.jpg'

type Tab = 'about' | 'articles' | 'howIWork' | 'contacts' | 'book'

const TABS: { id: Tab; label: string }[] = [
  { id: 'about', label: 'О себе' },
  { id: 'howIWork', label: 'Как работаю' },
  { id: 'articles', label: 'Статьи' },
  { id: 'contacts', label: 'Контакты' },
  { id: 'book', label: 'Записаться' },
]

const articles = [
  {
    tag: 'Тревога',
    title: 'Почему тревога — это не слабость',
    excerpt:
      'Тревога — это сигнал, а не приговор. Разбираемся, откуда она берётся и как с ней выстроить диалог.',
    date: '12 июля 2026',
    time: '5 мин',
  },
  {
    tag: 'Отношения',
    title: 'Созависимость: когда любовь становится ловушкой',
    excerpt:
      'Что стоит за желанием контролировать партнёра и как научиться строить зрелые отношения.',
    date: '3 июня 2026',
    time: '8 мин',
  },
  {
    tag: 'Самооценка',
    title: 'Синдром самозванца: жить под маской успеха',
    excerpt:
      'Почему умные и успешные люди боятся, что их "разоблачат", и как выйти из этого круга.',
    date: '18 мая 2026',
    time: '6 мин',
  },
  {
    tag: 'Горевание',
    title: 'Как переживать потерю — без чувства вины',
    excerpt:
      'Горе не имеет правил. Пространство для слёз, злости и растерянности — это норма, а не слабость.',
    date: '2 апреля 2026',
    time: '7 мин',
  },
]

const steps = [
  {
    num: '01',
    title: 'Первая встреча',
    desc: 'Знакомимся, я слушаю ваш запрос без оценок и суждений. Вы определяете темп и глубину.',
  },
  {
    num: '02',
    title: 'Совместное исследование',
    desc: 'Мы ищем связи между вашими переживаниями, телесными ощущениями и жизненным опытом.',
  },
  {
    num: '03',
    title: 'Контакт с собой',
    desc: 'Гештальт-подход помогает вернуть чувствительность к своим потребностям и желаниям.',
  },
  {
    num: '04',
    title: 'Изменения в жизни',
    desc: 'Новое понимание себя постепенно трансформирует ваши реакции, отношения и решения.',
  },
]


function BookingForm({ onClose }: { onClose?: () => void }) {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    border: '1.5px solid var(--border)',
    borderRadius: '12px',
    fontFamily: 'Nunito, sans-serif',
    fontSize: '15px',
    color: 'var(--fg)',
    background: '#F7F4FF',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <div style={{ fontSize: '52px', marginBottom: '16px' }}>✦</div>
        <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', marginBottom: '12px', color: 'var(--primary)' }}>
          Заявка отправлена
        </h3>
        <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>
          Я свяжусь с вами в течение 24 часов.<br />
          Спасибо, что решились сделать этот шаг.
        </p>
        {onClose && (
          <button
            onClick={onClose}
            style={{ marginTop: '28px', padding: '12px 32px', borderRadius: '50px', background: 'var(--primary)', color: '#fff', border: 'none', cursor: 'pointer', fontFamily: 'Nunito, sans-serif', fontWeight: 600, fontSize: '15px' }}
          >
            Закрыть
          </button>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Имя</label>
        <input
          style={inputStyle}
          placeholder="Ваше имя"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          required
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Телефон</label>
        <input
          style={inputStyle}
          placeholder="+7 (___) ___-__-__"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
          required
        />
      </div>
      <div>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 600, fontSize: '13px', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>С чем хотите работать?</label>
        <textarea
          style={{ ...inputStyle, height: '120px', resize: 'none' }}
          placeholder="Расскажите немного о вашем запросе…"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
        />
      </div>
      <button
        type="submit"
        style={{
          marginTop: '4px',
          padding: '16px',
          background: 'var(--primary)',
          color: '#fff',
          border: 'none',
          borderRadius: '50px',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
          letterSpacing: '0.01em',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Отправить заявку
      </button>
      <p style={{ textAlign: 'center', fontSize: '12px', color: 'var(--muted)', margin: 0 }}>
        Я не передаю личные данные третьим лицам
      </p>
    </form>
  )
}

// Component for reading an article
function ArticleView({ article, onBack }: { article: typeof articles[0]; onBack: () => void }) {
  return (
    <div style={{ paddingTop: '60px', maxWidth: '720px', margin: '0 auto' }}>
      <button
        onClick={onBack}
        style={{
          padding: '10px 24px',
          borderRadius: '50px',
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Nunito, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          marginBottom: '32px',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        ← Назад к статьям
      </button>
      <div
        style={{
          padding: '4px 12px',
          borderRadius: '50px',
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '0.04em',
          display: 'inline-block',
          marginBottom: '16px',
        }}
      >
        {article.tag}
      </div>
      <h1
        style={{
          fontFamily: 'Fraunces, serif',
          fontWeight: 400,
          fontSize: 'clamp(28px, 4vw, 42px)',
          lineHeight: 1.2,
          margin: '0 0 12px',
          color: 'var(--fg)',
        }}
      >
        {article.title}
      </h1>
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', fontSize: '14px', color: 'var(--muted)' }}>
        <span>{article.date}</span>
        <span>{article.time} чтения</span>
      </div>
      <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--fg)', marginBottom: '24px' }}>
        {article.excerpt}
      </p>
      <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)' }}>
        (Содержание статьи пока не добавлено — ведётся работа над контентом.)
      </p>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('about')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedArticleIdx, setSelectedArticleIdx] = useState<number | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (tab: Tab) => {
    // when switching tabs, close any opened article
    setSelectedArticleIdx(null)
    setActiveTab(tab)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* NAV */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(254,252,248,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <button
            onClick={() => goTo('about')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: '10px' }}
          >
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#fff', fontSize: '14px', fontWeight: 700, fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>А</span>
            </div>
            <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '18px', color: 'var(--fg)' }}>Эльвира Зорина</span>
          </button>

          {/* Desktop tabs */}
          <nav style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="hidden-mobile">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => goTo(tab.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  fontSize: '14px',
                  background:
                    tab.id === 'book'
                      ? 'var(--primary)'
                      : activeTab === tab.id
                      ? 'var(--primary-light)'
                      : 'transparent',
                  color:
                    tab.id === 'book'
                      ? '#fff'
                      : activeTab === tab.id
                      ? 'var(--primary)'
                      : 'var(--muted)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  if (tab.id !== 'book' && activeTab !== tab.id)
                    e.currentTarget.style.color = 'var(--fg)'
                }}
                onMouseLeave={e => {
                  if (tab.id !== 'book' && activeTab !== tab.id)
                    e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            onClick={() => setMenuOpen(m => !m)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
          >
            <div style={{ width: '22px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <span style={{ display: 'block', height: '2px', background: 'var(--fg)', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ display: 'block', height: '2px', background: 'var(--fg)', borderRadius: '2px', opacity: menuOpen ? 0 : 1, transition: 'all 0.2s' }} />
              <span style={{ display: 'block', height: '2px', background: 'var(--fg)', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => goTo(tab.id)}
                style={{
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: 'Nunito, sans-serif',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  fontSize: '15px',
                  background: tab.id === 'book' ? 'var(--primary)' : activeTab === tab.id ? 'var(--primary-light)' : 'transparent',
                  color: tab.id === 'book' ? '#fff' : activeTab === tab.id ? 'var(--primary)' : 'var(--fg)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 80px' }}>
        {activeTab === 'about' && <AboutSection onBook={() => goTo('book')} />}
        {activeTab === 'articles' && (
          selectedArticleIdx !== null ? (
            <ArticleView
              article={articles[selectedArticleIdx]}
              onBack={() => setSelectedArticleIdx(null)}
            />
          ) : (
            <ArticlesSection onReadArticle={(idx: number) => setSelectedArticleIdx(idx)} />
          )
        )}
        {activeTab === 'howIWork' && <HowIWorkSection onBook={() => goTo('book')} />}
        {activeTab === 'contacts' && <ContactsSection />}
        {activeTab === 'book' && <BookSection />}
      </main>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  )
}

function AboutSection({ onBook }: { onBook: () => void }) {
  return (
    <div>
      {/* Hero — full-width sofa photo with text overlay */}
      <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', marginBottom: '80px', marginTop: '32px' }}>
        <img
          src={sofaPhoto}
          alt="Уютный кабинет психолога"
          style={{ width: '100%', height: '88vh', minHeight: '520px', objectFit: 'cover', display: 'block' }}
        />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(28,23,48,0.72) 0%, rgba(28,23,48,0.38) 55%, rgba(28,23,48,0.08) 100%)',
        }} />
        {/* Text on top */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(32px, 6vw, 80px)',
          maxWidth: '680px',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: '50px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '12px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '24px',
            width: 'fit-content',
            border: '1px solid rgba(255,255,255,0.25)',
          }}>
            Психолог · Психоаналитический терапевт
          </div>
          <h1 style={{
            fontFamily: 'Fraunces, serif',
            fontWeight: 300,
            fontSize: 'clamp(38px, 5vw, 68px)',
            lineHeight: 1.1,
            margin: '0 0 24px',
            color: '#fff',
          }}>
            Пространство,{' '}
            <em style={{ fontStyle: 'italic', color: '#c4b5fd' }}>где можно быть собой</em>
          </h1>
          <p style={{
            fontSize: 'clamp(15px, 1.8vw, 18px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.82)',
            margin: '0 0 40px',
            maxWidth: '480px',
          }}>
            Я помогаю людям разобраться в себе, справиться с тревогой, найти опору
            в отношениях и лучше понять себя через глубокую аналитическую работу.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onBook}
              style={{
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'var(--primary)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              Записаться на сессию
            </button>
            <button
              onClick={() => {}}
              style={{
                padding: '16px 36px',
                borderRadius: '50px',
                background: 'transparent',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
            >
              Узнать подробнее
            </button>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
          marginBottom: '80px',
        }}
        className="bio-grid"
      >
        {/* Photo left */}
        <div style={{ position: 'relative' }}>
          <img
            src={userPhoto}
            alt="Эльвира Зорина"
            style={{
              width: '100%',
              height: '480px',
              objectFit: 'cover',
              borderRadius: '24px',
              display: 'block',
            }}
          />
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '-16px',
            background: 'var(--accent)',
            color: '#fff',
            borderRadius: '12px',
            padding: '12px 18px',
            fontSize: '13px',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(255,133,82,0.3)',
            lineHeight: 1.4,
          }}>
            500+<br /><span style={{ fontWeight: 400, fontSize: '11px' }}>клиентов</span>
          </div>
        </div>

        {/* Text right */}
        <div style={{ paddingTop: '12px' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '36px', margin: '0 0 8px', lineHeight: 1.2 }}>
            О себе
          </h2>
          <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', margin: '0 0 20px' }}>
            Психолог · Психоаналитический терапевт
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '15px', margin: '0 0 28px' }}>
            С 2005 года работаю с людьми, которые ищут глубокого понимания себя. Опираюсь на психоаналитический подход и современные методы психотерапии. Регулярно прохожу супервизию и повышаю квалификацию.
          </p>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '18px', margin: '0 0 16px', color: 'var(--fg)' }}>
            Профессиональная подготовка
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              '2005 — Диплом психолога, Чувашский Государственный Университет',
              '2008 — Медицинская психология и психотерапия, МАПО СПб',
              '2009 — Психотерапия депрессий, МАПО СПб',
              '2009 — Оценка и мониторинг психического состояния, МАПО СПб',
              '2013 — Арт-терапия в семейном консультировании, РАПМ',
              '2020 — Современная психотерапия: избранные технологии, Институт им. Карвасарского',
              '2020 — Личностно-ориентированная (реконструктивная) психотерапия, Институт им. Карвасарского',
              '2020 — Психоанализ. Теория объектных отношений Р. Фейрберна, ВЭИП',
              '2021 — Современный клинический психоанализ, Восточно-Европейский Институт Психоанализа',
              '2021 — Аналитическое понимание клинической ситуации, Альянс «ПроБоно»',
              '2021–2023 — Психоаналитическая терапия, Европейская Ассоциация развития Психоанализа',
              '2023 — Аналитическое слушание архаического, Высшая Школа Экономики',
              '2024 — Нейропсихоанализ: теория и техника под руководством Марка Солмса',
              '2024 — Теория и техника современного психоанализа, Институт на Чистых Прудах',
              '2024 — A Model of Psychoanalytic Psychotherapy. New Perspectives on Technique',
              '2024 — н.в. Постоянное повышение квалификации: психоаналитические семинары и супервизии',
            ].map(item => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '10px 14px',
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  fontSize: '13px',
                  color: 'var(--fg)',
                  lineHeight: 1.5,
                }}
              >
                <span style={{ color: 'var(--accent)', fontWeight: 700, flexShrink: 0, marginTop: '2px', fontSize: '10px' }}>✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid, .bio-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function ArticlesSection({ onReadArticle }: { onReadArticle: (index: number) => void }) {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div style={{ marginBottom: '48px' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', margin: '0 0 12px' }}>
          Статьи
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', margin: 0 }}>
          Пишу о психологии простым языком — без жаргона и лишней теории.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="articles-grid">
        {articles.map((a, i) => (
          <article
            key={i}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '32px',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onClick={() => onReadArticle(i)}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 16px 40px rgba(91,76,245,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '50px',
                  background: 'var(--primary-light)',
                  color: 'var(--primary)',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                }}
              >
                {a.tag}
              </span>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{a.time} чтения</span>
            </div>
            <h3
              style={{
                fontFamily: 'Fraunces, serif',
                fontWeight: 400,
                fontSize: '22px',
                lineHeight: 1.3,
                margin: '0 0 14px',
                color: 'var(--fg)',
              }}
            >
              {a.title}
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px' }}>{a.excerpt}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{a.date}</span>
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '14px' }}>Читать →</span>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function HowIWorkSection({ onBook }: { onBook: () => void }) {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div style={{ marginBottom: '64px', maxWidth: '560px' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', margin: '0 0 12px' }}>
          Как я работаю
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
          Каждая сессия — уникальная встреча. Но есть этапы, через которые проходит большинство людей.
        </p>
      </div>

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '80px' }}>
        {steps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr',
              gap: '32px',
              padding: '36px 0',
              borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
              alignItems: 'start',
            }}
          >
            <div
              style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '42px',
                fontWeight: 300,
                color: 'var(--border)',
                lineHeight: 1,
              }}
            >
              {step.num}
            </div>
            <div>
              <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '24px', margin: '0 0 10px', color: 'var(--fg)' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Format cards */}
      <h3 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: '32px', margin: '0 0 32px' }}>Форматы работы</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '64px' }} className="format-grid">
        {[
          { icon: '◎', title: 'Онлайн', desc: 'Zoom или Telegram — из любой точки мира. Полноценная терапия без привязки к месту.', price: '4 500 ₽' },
          { icon: '⬡', title: 'Очно', desc: 'Встречи в уютном кабинете в Москве, Чистые Пруды. Для тех, кто ценит живой контакт.', price: '5 500 ₽' },
          { icon: '◈', title: 'Интенсив', desc: 'Трёхчасовая сессия для глубокой работы с одной темой или в кризисный момент.', price: '13 000 ₽' },
        ].map(f => (
          <div
            key={f.title}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '32px 28px',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--primary)' }}>{f.icon}</div>
            <h4 style={{ fontFamily: 'Fraunces, serif', fontWeight: 400, fontSize: '20px', margin: '0 0 10px' }}>{f.title}</h4>
            <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, margin: '0 0 24px' }}>{f.desc}</p>
            <div style={{ fontWeight: 700, fontSize: '20px', color: 'var(--primary)' }}>{f.price}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={onBook}
          style={{
            padding: '18px 48px',
            borderRadius: '50px',
            background: 'var(--primary)',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 700,
            fontSize: '16px',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
          Записаться на первую сессию
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .format-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function ContactsSection() {
  return (
    <div style={{ paddingTop: '60px' }}>
      <div style={{ marginBottom: '56px' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', margin: '0 0 12px' }}>
          Контакты
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', margin: 0 }}>
          Напишите или позвоните — я отвечаю в течение дня.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="contacts-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { icon: '✉', label: 'Email', value: 'anna@sokolova-psy.ru', href: 'mailto:anna@sokolova-psy.ru' },
            { icon: '✆', label: 'Телефон', value: '+7 (916) 234-56-78', href: 'tel:+79162345678' },
            { icon: '◎', label: 'Telegram', value: '@anna_psy', href: '#' },
            { icon: '⊕', label: 'Instagram', value: '@anna.sokolova.psy', href: '#' },
          ].map(c => (
            <a
              key={c.label}
              href={c.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '24px 28px',
                background: 'var(--card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                textDecoration: 'none',
                color: 'var(--fg)',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary)'
                e.currentTarget.style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: 'var(--primary)',
                  flexShrink: 0,
                }}
              >
                {c.icon}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '3px' }}>{c.label}</div>
                <div style={{ fontWeight: 600, fontSize: '15px' }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div>
          <div
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              padding: '32px',
              height: '100%',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '6px' }}>Адрес</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', marginBottom: '6px' }}>Москва, Чистые Пруды</div>
              <div style={{ color: 'var(--muted)', fontSize: '14px' }}>ул. Чистопрудный бульвар, 6<br />м. Чистые Пруды</div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '12px' }}>Часы работы</div>
              {[
                { day: 'Пн — Пт', time: '10:00 — 20:00' },
                { day: 'Суббота', time: '11:00 — 17:00' },
                { day: 'Воскресенье', time: 'выходной' },
              ].map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', fontSize: '14px' }}>
                  <span style={{ color: 'var(--muted)' }}>{h.day}</span>
                  <span style={{ fontWeight: 600 }}>{h.time}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: 'var(--primary-light)',
                borderRadius: '12px',
                padding: '20px',
                fontSize: '14px',
                color: 'var(--primary)',
                lineHeight: 1.6,
              }}
            >
              <strong>Первичная консультация</strong> — бесплатно, 20 минут. Мы познакомимся и поймём, подходим ли друг другу.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contacts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function BookSection() {
  return (
    <div style={{ paddingTop: '60px', maxWidth: '640px', margin: '0 auto' }}>
      <div style={{ marginBottom: '48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Fraunces, serif', fontWeight: 300, fontSize: 'clamp(32px, 4vw, 52px)', margin: '0 0 12px' }}>
          Записаться
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.7, margin: 0 }}>
          Заполните форму, и я свяжусь с вами, чтобы подобрать удобное время.
        </p>
      </div>

      <div
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '48px 40px',
        }}
      >
        <BookingForm />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
        {[
          { icon: '◎', text: 'Бесплатная первичная консультация' },
          { icon: '✦', text: 'Ответ в течение 24 часов' },
          { icon: '⊕', text: 'Конфиденциальность гарантирована' },
        ].map(f => (
          <div key={f.text} style={{ textAlign: 'center', padding: '20px 16px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '12px' }}>
            <div style={{ fontSize: '22px', color: 'var(--primary)', marginBottom: '8px' }}>{f.icon}</div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.5 }}>{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
