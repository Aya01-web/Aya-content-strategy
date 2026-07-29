import { motion, useReducedMotion } from 'framer-motion';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import naraakumImage from '../assets/content-plans/naraakum-content-plan.png';
import psyterNationalImage from '../assets/content-plans/psyter-saudi-national-day.png';
import psyterPodcastImage from '../assets/content-plans/psyter-podcast.png';
import './ContentPlansSection.css';

const plans = [
  {
    id: 'psyter-podcast',
    brand: 'Psyter · Podcast Strategy',
    title: 'Psyter Podcast Plan',
    image: psyterPodcastImage,
    href: 'https://www.canva.com/design/DAGk1fHqIxk/PVpcXSPh2bgvI2QjSAlA-w/edit'
  },
  {
    id: 'saudi-national-day',
    brand: 'Psyter · Seasonal Campaign',
    title: 'Saudi National Day Plan',
    image: psyterNationalImage,
    href: 'https://canva.link/wcf3xkd0deupkty'
  },
  {
    id: 'naraakum-content',
    brand: 'Naraakum · Healthcare Content',
    title: 'Naraakum Content Plan',
    image: naraakumImage,
    href: 'https://www.canva.com/design/DAGysXuuuTM/YZYb-KZO0dDvMnfItyC8xQ/edit'
  }
];

const revealEase = [0.22, 1, 0.36, 1];

export default function ContentPlansSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="content-plans-section"
      id="content-plans"
      aria-labelledby="content-plans-title"
    >
      <div className="content-plans-shell">
        <motion.header
          className="content-plans-header"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: revealEase }}
        >
          <p className="content-plans-kicker">Strategy · Copywriting · Campaigns</p>
          <h2 id="content-plans-title">Copywriting &amp; Content Full Plans</h2>
          <p>
            Selected end-to-end content plans created to give every message a clear
            purpose, voice, and publishing direction.
          </p>
        </motion.header>

        <div className="content-plans-grid">
          {plans.map((plan, index) => (
            <motion.a
              className="content-plan-card"
              href={plan.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${plan.title} on Canva`}
              key={plan.id}
              initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.34 }}
              transition={{
                duration: 0.68,
                delay: reduceMotion ? 0 : index * 0.08,
                ease: revealEase
              }}
            >
              <span className="content-plan-card__shine" aria-hidden="true" />

              <span className="content-plan-card__media">
                <img
                  src={plan.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <span className="content-plan-card__media-reflection" aria-hidden="true" />
              </span>

              <span className="content-plan-card__copy">
                <span className="content-plan-card__identity">
                  <span className="content-plan-card__brand">{plan.brand}</span>
                  <strong>{plan.title}</strong>
                </span>
                <span className="content-plan-card__action">
                  View Full Plan
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
