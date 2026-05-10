import { Database, Calendar, CheckCircle, Star, Briefcase, TrendingUp, ArrowRight, ChevronRight, Clock, MapPin } from 'lucide-react'

// NavBar
function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="font-bold text-xl text-text">CreatorFund</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#grants" className="text-muted hover:text-text transition-colors text-sm font-medium">Grants</a>
            <a href="#features" className="text-muted hover:text-text transition-colors text-sm font-medium">Deadline Tracker</a>
            <a href="#pricing" className="text-muted hover:text-text transition-colors text-sm font-medium">Pricing</a>
            <a href="#" className="text-muted hover:text-text transition-colors text-sm font-medium">Login</a>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            Get Funded
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
          <TrendingUp className="w-4 h-4" />
          Over $50M in grants listed
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text leading-tight mb-6">
          Free money for creators.<br />
          <span className="text-primary">Yes, it exists.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10">
          CreatorFund aggregates grants from YouTube, TikTok, Spotify, brands, and government programs. No agents. No paperwork nightmares. Just opportunities matched to YOU.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
            Start Exploring Grants
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-text text-text hover:bg-text hover:text-surface font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  )
}

// Grant Preview Card
function GrantPreviewCard() {
  return (
    <section id="grants" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Grant</h2>
          <p className="text-muted">One of the thousands of funding opportunities waiting for you.</p>
        </div>
        <div className="max-w-md mx-auto bg-surface rounded-2xl border-2 border-border p-6 hover:shadow-xl hover:shadow-primary/10 transition-all hover:-translate-y-1">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <span className="inline-flex items-center gap-1 bg-success/10 text-success text-xs font-semibold px-3 py-1 rounded-full">
              <Clock className="w-3 h-3" />
              Open
            </span>
          </div>
          <h3 className="text-xl font-bold text-text mb-2">Creator Economy Fund</h3>
          <p className="text-muted text-sm mb-4">Google / YouTube</p>
          <div className="flex items-center gap-4 mb-4">
            <div>
              <p className="text-2xl font-bold text-primary">$25,000</p>
              <p className="text-xs text-muted">Grant Amount</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-sm font-semibold text-text">Dec 31, 2025</p>
              <p className="text-xs text-muted">Deadline</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full">10K+ Followers</span>
            <span className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full">Long-form Content</span>
            <span className="bg-secondary/10 text-secondary text-xs font-medium px-3 py-1 rounded-full">US Residents</span>
          </div>
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
            View Details
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

// Features Grid
const features = [
  { icon: Database, title: 'Grant Database', desc: 'Curated list of 500+ grants from brands, platforms, and governments.' },
  { icon: CheckCircle, title: 'Eligibility Matcher', desc: 'Answer 5 questions. Get matched to grants you actually qualify for.' },
  { icon: Calendar, title: 'Deadline Calendar', desc: 'Never miss a deadline. Get reminders before opportunities close.' },
  { icon: TrendingUp, title: 'Application Tracker', desc: 'Track every application, its status, and follow up smartly.' },
  { icon: Star, title: 'Funded Stories', desc: 'Real stories from creators who got funded. Learn what works.' },
  { icon: Briefcase, title: 'Brand Partner Programs', desc: 'Exclusive brand deals and sponsorships for verified creators.' },
]

function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Everything you need to get funded</h2>
          <p className="text-muted max-w-xl mx-auto">Stop searching. Start applying. We handle the hard part.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-cream rounded-2xl border border-border p-6 hover:shadow-lg hover:shadow-primary/5 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works
const steps = [
  { num: '01', title: 'Create Your Profile', desc: 'Tell us your content type, audience size, and goals. Takes 2 minutes.' },
  { num: '02', title: 'Get Matched', desc: 'Our matcher shows grants you\'re eligible for — filtered and ranked.' },
  { num: '03', title: 'Apply', desc: 'Use our templates and deadline reminders to submit winning applications.' },
  { num: '04', title: 'Get Funded', desc: 'Track your status. Get funded. Reinvest in your content. Grow.' },
]

function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">How It Works</h2>
          <p className="text-muted">From zero to funded in four steps.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{s.title}</h3>
              <p className="text-muted text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Bar
function StatsBar() {
  const stats = [
    { value: '500+', label: 'Grants in Database' },
    { value: '$12M+', label: 'Total Funded' },
    { value: '78%', label: 'Success Rate' },
  ]
  return (
    <section className="py-16 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.value}</p>
              <p className="text-white/80 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
const testimonials = [
  {
    quote: "I had no idea there were $30K in grants I qualified for. CreatorFund showed me three in my first week. Applied to one, got it. Life-changing.",
    name: "Maya Rodriguez",
    platform: "YouTube / Lifestyle",
    handle: "@mayacreates"
  },
  {
    quote: "As a small TikTok creator, I thought grants were for big media companies. Wrong. Got $5K from a brand program I'd never heard of.",
    name: "Jake Thompson",
    platform: "TikTok / Comedy",
    handle: "@jakethompson"
  },
  {
    quote: "The deadline alerts alone saved me from missing two government arts grants. The eligibility matcher is unreal — so accurate.",
    name: "Priya Nair",
    platform: "Instagram / Arts",
    handle: "@priyanairart"
  },
]

function Testimonials() {
  return (
    <section className="py-20 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Funded. Real creators.</h2>
          <p className="text-muted">These stories aren't sponsored. They're real.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-cream rounded-2xl border border-border p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <p className="text-text mb-6 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{t.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-text text-sm">{t.name}</p>
                  <p className="text-xs text-muted">{t.platform}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pricing
const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    desc: 'Browse and discover grants the slow way.',
    features: ['Browse grant database', '3 applications/month', 'Basic eligibility info', 'Community access'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Starter',
    price: '$12',
    period: '/month',
    desc: 'For creators who are serious about funding.',
    features: ['Everything in Free', 'Eligibility matcher', '10 applications/month', 'Deadline email alerts', 'Grant deadline calendar'],
    cta: 'Start Free Trial',
    highlight: true,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    desc: 'For full-time creators who need every advantage.',
    features: ['Everything in Starter', 'Unlimited applications', 'Application writing assistant', 'Priority support', 'Early access to new grants', '1-on-1 strategy call (monthly)'],
    cta: 'Go Pro',
    highlight: false,
  },
]

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Simple, transparent pricing</h2>
          <p className="text-muted">Start free. Scale when you're ready.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border-2 p-8 ${p.highlight ? 'border-primary bg-surface shadow-xl shadow-primary/10' : 'border-border bg-surface'}`}>
              {p.highlight && <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">MOST POPULAR</span>}
              <h3 className="text-xl font-bold text-text mb-1">{p.name}</h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-extrabold text-text">{p.price}</span>
                <span className="text-muted text-sm">{p.period}</span>
              </div>
              <p className="text-muted text-sm mb-6">{p.desc}</p>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-text">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${p.highlight ? 'bg-primary hover:bg-primary/90 text-white' : 'border-2 border-border text-text hover:bg-border hover:text-text'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Your next video could be funded.</h2>
        <p className="text-white/80 text-lg mb-10">Join 12,000+ creators who found funding they didn't know existed.</p>
        <button className="bg-white hover:bg-cream text-secondary font-bold px-10 py-4 rounded-xl text-lg transition-colors inline-flex items-center gap-2">
          Get Started Free
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 bg-text">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">CF</span>
            </div>
            <span className="font-bold text-xl text-white">CreatorFund</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Grants</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">About</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Blog</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
          </div>
          <p className="text-white/40 text-sm">&copy; 2025 CreatorFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <GrantPreviewCard />
      <FeaturesGrid />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTASection />
      <Footer />
    </main>
  )
}
