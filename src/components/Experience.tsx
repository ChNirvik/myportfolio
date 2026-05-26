'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Marketing Consultant',
    company: 'eCorp Services',
    period: '04/2024 – Present',
    location: 'Remote',
    bullets: [
      'Designed and launched an AI-powered lead generation pipeline using Apify and Smartlead, targeting real estate professionals nationally—automating prospecting workflows and reducing manual effort by 80%+.',
      'Architected a productized subscription go-to-market strategy for a 5-tier SaaS model with pricing anchored to competitive benchmarks and a beta lock-in mechanic.',
      'Led an SEO content sprint delivering 11 new marketing pages, improving Google Search Console coverage and accelerating organic discoverability.',
      'Designed automated outreach sequences and CRM workflows using n8n and Zapier to improve pipeline velocity and reduce cost-per-qualified-lead.',
      'Led performance-driven demand generation systems for a US SMB platform, focusing on lead quality, conversion efficiency, and pipeline velocity.',
      'Built automated growth workflows combining paid acquisition signals, attribution insights, and CRM automation.',
      'Analyzed funnel performance and conversion trends to improve cost efficiency and revenue per lead.',
      'Supported brand credibility and retention through content-led growth initiatives.',
    ],
  },
  {
    title: 'Sr. Manager – Branding & Marketing',
    company: 'Explorex',
    period: '03/2022 – 03/2024',
    location: 'Bangalore',
    bullets: [
      'Scaled a hospitality SaaS platform from ~80 to 1300+ partner venues, driving sustained growth through performance marketing, CRM retargeting, and experimentation-led acquisition.',
      'Influenced ₹30–40 Cr in annualized partner revenue by optimizing media-led guest acquisition and repeat visit funnels.',
      'Launched a Marketing-as-a-Service vertical, enabling partner brands to invest more in paid campaigns—generating ₹12L/month recurring revenue.',
      'Ran campaign audits, creative tests, and audience segmentation experiments to improve conversion rates and marketing ROI.',
      'Collaborated with analytics and product teams to refine attribution signals and optimize growth loops.',
    ],
  },
  {
    title: 'Marketing Operations Manager',
    company: '17inchCanvas',
    period: '10/2018 – 02/2022',
    location: 'Mumbai',
    bullets: [
      'Managed Meta and Google Ads campaigns across multiple consumer brands, delivering ~4x ROAS through continuous optimization.',
      'Led hyperlocal and category-specific campaigns, tailoring creatives and targeting for city-level performance.',
      'Conducted A/B tests on creatives, audiences, and landing pages to improve CPC and conversion rates.',
      'Executed SEO and paid media strategies that improved organic traffic 120–180% YoY while supporting paid acquisition efficiency.',
      'Presented campaign performance, insights, and optimization recommendations to senior stakeholders.',
    ],
  },
];

const skills = [
  'Performance Marketing (Meta Ads, Google Ads)',
  'ROAS, CPC, CPA Optimization',
  'Hyperlocal & Category-Based Campaigns',
  'Experimentation (A/B Testing, Geo-based Tests)',
  'Growth Funnels & Retention Loops',
  'Attribution & Analytics (GA4, CRM Insights)',
  'AI-Powered Growth Systems & Automation',
  'Partner / Client Growth & Upsell Strategy',
  'Agency & Channel Partnerships',
  'Campaign Audits & Media Optimization',
  'Automation Solutions & AI Integrations',
  'Cross-functional Collaboration (Product, Revenue, Ops)',
];

const tools = [
  'Meta Ads Manager', 'Google Ads', 'HubSpot', 'GA4', 'Mixpanel', 'n8n', 'Zapier', 'Make.com', 'Apify', 'Smartlead', 'Webflow',
];

const achievements = [
  'Generated ₹12L/month in recurring revenue by scaling partner marketing investments through performance-led growth models.',
  'Influenced ₹30–40 Cr in partner revenue outcomes via paid acquisition, retargeting, and lifecycle optimization.',
  'Delivered ~4x ROAS across Meta and Google Ads portfolios.',
  'Built scalable hyperlocal growth playbooks across multiple Indian metros.',
  'Launched an AI-powered outreach and lead pipeline system, reducing manual prospecting effort by 80%+.',
  'Led 15-member marketing & activation org; managed agencies, vendors, and creator pods.',
  'Partnered cross-functionally with Sales, Product, BizDev, and Founders to align growth initiatives with business outcomes.',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

export default function Experience() {
  return (
    <section className="bg-[#0d0d0d] py-28 px-4 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-500/5 blur-3xl" />
      <div className="max-w-6xl mx-auto space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-3"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Career</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            8+ years driving performance-led growth, revenue scaling, and retention across hospitality, SaaS, and digital platforms.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative space-y-0"
        >
          <div className="absolute left-0 md:left-[260px] top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="relative flex flex-col md:flex-row gap-6 md:gap-10 pb-24 last:pb-0"
            >
              <div className="md:w-[260px] md:text-right flex-shrink-0 pt-1 md:pr-10">
                <p className="text-sm font-semibold text-blue-400 tracking-wide">{exp.period}</p>
                <p className="text-xs text-gray-500 mt-1">{exp.location}</p>
              </div>
              <div className="hidden md:flex absolute left-[260px] top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 z-10" />
              <div className="flex-1 md:pl-8">
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.title}</h3>
                  <p className="text-base text-gray-400 font-medium mt-1">{exp.company}</p>
                </div>
                <ul className="space-y-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/70 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: b.replace(/~?(\d[\d,\.–]+[xX%]?\s*(?:ROAS|Cr|L\/month)?[^,.<]*)|(₹[\d,\.–]+\s*(?:Cr|L\/month)?[^,.<]*)|(\d{1,3}%–?\d{0,3}%?\s*YoY)/g, '<strong class="text-white font-semibold">$&</strong>') }} />
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((a, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-emerald-400 text-lg mt-0.5">✦</span>
                <p className="text-gray-300 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-400 inline-block" />
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-purple-400/50 hover:text-white transition-colors duration-200">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" />
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400/50 hover:text-white transition-colors duration-200">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
