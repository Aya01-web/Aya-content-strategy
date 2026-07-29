import { motion, useReducedMotion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa6';
import emerlyImage from '../assets/company-work/emerly-perfumes.jpg';
import bassamImage from '../assets/social-pages/dr-bassam-mc-profile.jpg';
import musabakatImage from '../assets/social-pages/musabakat-social-profile.jpeg';
import naraakumImage from '../assets/social-pages/naraakum-profile.jpg';
import psyterImage from '../assets/social-pages/psyter-social-profile.jpeg';
import qqImage from '../assets/social-pages/qq-social-profile.svg';
import sawtakImage from '../assets/social-pages/sawtak-sadaqa-profile.jpg';
import './SocialMediaCarousel.css';

const platformIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok
};

const socialPages = [
  {
    id: 'sawtak-sadaqa',
    name: 'Sawtak Sadaqa',
    arabicName: 'صوتك صدقة',
    type: 'Awareness Campaign',
    image: sawtakImage,
    imageMode: 'logo',
    accent: '#c79a58',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/sawtak_sadaqa?igsh=MXBkMHR0a3JoYnVqaA=='
      },
      {
        platform: 'tiktok',
        href: 'https://www.tiktok.com/@sawtak_sadaqa?_r=1&_t=ZS-98Rosu0l1bJ'
      }
    ]
  },
  {
    id: 'naraakum',
    name: 'Naraakum',
    arabicName: 'نرعاكم',
    type: 'Healthcare Content',
    image: naraakumImage,
    imageMode: 'logo',
    accent: '#10b8b6',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/naraakumsa?igsh=bzJuNXB6N2drN2Nl'
      },
      {
        platform: 'tiktok',
        href: 'https://www.tiktok.com/@naraakumsa?_r=1&_t=ZS-98RoqZmH3C9'
      }
    ]
  },
  {
    id: 'psyter',
    name: 'Psyter',
    arabicName: 'سيطر',
    type: 'Mental Health Content',
    image: psyterImage,
    imageMode: 'logo',
    accent: '#0ab2b8',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/psytersa?igsh=NHF4Ynp3NHI5cjRw'
      },
      {
        platform: 'tiktok',
        href: 'https://www.tiktok.com/@psytersa?_r=1&_t=ZS-98RopCvdI4y'
      }
    ]
  },
  {
    id: 'musabakat',
    name: 'Musabakat',
    arabicName: 'مسابقات',
    type: 'Education Content',
    image: musabakatImage,
    imageMode: 'logo',
    accent: '#7658cd',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/musabakat.sa?igsh=MXY1ZGExamV1N3Fkdw=='
      },
      {
        platform: 'tiktok',
        href: 'https://www.tiktok.com/@musabakat.sa?_r=1&_t=ZS-98RonRvevjR'
      }
    ]
  },
  {
    id: 'bassam-medical-center',
    name: 'Bassam Medical Center',
    arabicName: 'المركز الطبي',
    type: 'Medical Content',
    image: bassamImage,
    imageMode: 'logo',
    accent: '#30a8df',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/dr_bassam_mc?igsh=MXd1aG01Y25ldDh0Mw=='
      },
      {
        platform: 'tiktok',
        href: 'https://www.tiktok.com/@dr_bassam_mc?_r=1&_t=ZS-98RonyR0iSi'
      }
    ]
  },
  {
    id: 'qq-assessment',
    name: 'QQ Assessment',
    arabicName: 'كيو كيو',
    type: 'Assessment Content',
    image: qqImage,
    imageMode: 'logo',
    imageFit: 'contain',
    accent: '#2c72c8',
    channels: [
      {
        platform: 'instagram',
        href: 'https://www.instagram.com/qqassessment?igsh=MWF6c28yMWlkZHJnaQ=='
      }
    ]
  },
  {
    id: 'emerly-perfumes',
    name: 'Emerly Perfumes',
    arabicName: 'إيمرلي',
    type: 'Beauty & Fragrance',
    image: emerlyImage,
    imageMode: 'logo',
    accent: '#d5aa58',
    channels: [
      {
        platform: 'facebook',
        href: 'https://www.facebook.com/share/1LskrtDky3/'
      }
    ]
  }
];

function SocialCard({ page, duplicate = false }) {
  return (
    <article
      className={[
        'social-page-card',
        `social-page-card--${page.imageMode}`,
        page.imageFit === 'contain' ? 'social-page-card--contain' : ''
      ].join(' ')}
      style={{ '--card-accent': page.accent }}
      aria-hidden={duplicate || undefined}
    >
      <span className="social-page-card__glow" aria-hidden="true" />

      <div className="social-page-card__media">
        <img src={page.image} alt="" loading="lazy" decoding="async" />
        <span className="social-page-card__wash" aria-hidden="true" />
        <span className="social-page-card__mirror" aria-hidden="true" />
        <span className="social-page-card__label">{page.type}</span>
      </div>

      <div className="social-page-card__body">
        <div className="social-page-card__identity">
          <span lang="ar" dir="rtl">{page.arabicName}</span>
          <h3>{page.name}</h3>
        </div>

        <div className="social-page-card__channels" aria-label={`${page.name} social links`}>
          {page.channels.map(({ platform, href }) => {
            const Icon = platformIcons[platform];

            return (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${page.name} on ${platform}`}
                tabIndex={duplicate ? -1 : undefined}
                key={platform}
              >
                <Icon aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function SocialMediaCarousel() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="social-pages-section"
      id="social-media"
      aria-labelledby="social-pages-title"
    >
      <div className="social-pages-orb social-pages-orb--one" aria-hidden="true" />
      <div className="social-pages-orb social-pages-orb--two" aria-hidden="true" />

      <motion.header
        className="social-pages-header"
        initial={reduceMotion ? false : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <p>Content · Community · Platform Strategy</p>
        <h2 id="social-pages-title">Social Media Content &amp; Brand Pages</h2>
        <span>
          A selection of pages shaped through content planning, campaign storytelling,
          publishing direction, and audience-focused communication.
        </span>
      </motion.header>

      <motion.div
        className="social-pages-viewport"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.16 }}
        transition={{ duration: 0.9, delay: 0.12 }}
      >
        <div className="social-pages-track">
          <div className="social-pages-set">
            {socialPages.map((page) => (
              <SocialCard page={page} key={page.id} />
            ))}
          </div>

          <div className="social-pages-set" aria-hidden="true">
            {socialPages.map((page) => (
              <SocialCard page={page} duplicate key={`duplicate-${page.id}`} />
            ))}
          </div>
        </div>
      </motion.div>

      <p className="social-pages-note">
        Hover to pause <span aria-hidden="true">·</span> Select a platform to view the page
      </p>
    </section>
  );
}
