import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import ayaOriginal from '../assets/aya-photo/aya-original.jpeg';
import './Hero.css';

const enterEase = [0.22, 1, 0.36, 1];

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/aya-saeid-a3743a195/',
    icon: FaLinkedinIn,
    newTab: true
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=020163344708',
    icon: FaWhatsapp,
    newTab: true
  },
  {
    label: 'Email',
    href: 'mailto:ayasaeid2412020@gmail.com',
    icon: FaEnvelope,
    newTab: false
  }
];

export default function Hero() {
  const heroRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const parallaxEnabledRef = useRef(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    parallaxEnabledRef.current = !reduceMotion && !isTouchDevice;

    if (!parallaxEnabledRef.current) {
      node.style.setProperty('--parallax-x', '0');
      node.style.setProperty('--parallax-y', '0');
      return undefined;
    }

    const updateFrame = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x += (target.x - current.x) * 0.085;
      current.y += (target.y - current.y) * 0.085;

      node.style.setProperty('--parallax-x', current.x.toFixed(4));
      node.style.setProperty('--parallax-y', current.y.toFixed(4));

      rafRef.current = window.requestAnimationFrame(updateFrame);
    };

    rafRef.current = window.requestAnimationFrame(updateFrame);
    return () => window.cancelAnimationFrame(rafRef.current);
  }, [reduceMotion]);

  const updatePointerTarget = (clientX, clientY) => {
    const node = heroRef.current;
    if (!node || !parallaxEnabledRef.current) return;

    const rect = node.getBoundingClientRect();
    const relativeX = (clientX - rect.left) / rect.width;
    const relativeY = (clientY - rect.top) / rect.height;

    targetRef.current.x = Math.max(-1, Math.min(1, (relativeX - 0.5) * 2));
    targetRef.current.y = Math.max(-1, Math.min(1, (relativeY - 0.5) * 2));
  };

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={(event) => updatePointerTarget(event.clientX, event.clientY)}
      onMouseLeave={() => {
        targetRef.current = { x: 0, y: 0 };
      }}
    >
      <div className="hero-background" aria-hidden="true">
        <span className="blob blob-one" />
        <span className="blob blob-two" />
      </div>

      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-content">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: enterEase }}
        >
          <p className="hero-kicker">CONTENT STRATEGIST &amp; DIGITAL MARKETER</p>
          <h1>
            <span className="hero-headline-lead">I’m Aya Saeid a Content Strategist</span>{' '}
            &amp; Digital Marketer with 3+ Years of Experience
          </h1>
          <p className="hero-subtitle">
            I turn ideas into powerful content strategies that build brands and inspire action—across
            e-commerce, education, healthcare, and cosmetics.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              aria-label="Download My CV"
            >
              Download My CV
            </button>
            <a href="#latest-content" className="btn btn-secondary" aria-label="View Portfolio">
              Portfolio
            </a>
          </div>

          <ul className="hero-socials" aria-label="Social links">
            {socialLinks.map(({ label, href, icon: Icon, newTab }) => (
              <li key={label}>
                <a
                  href={href}
                  target={newTab ? '_blank' : undefined}
                  rel={newTab ? 'noreferrer' : undefined}
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="hero-stage-wrap"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: enterEase }}
        >
          <div className="hero-stage">
            <img
              className="hero-stage-photo"
              src={ayaOriginal}
              alt="Aya Saeid surrounded by flowers and greenery"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className="hero-stage-reflection" aria-hidden="true" />
            <span className="hero-stage-glow" aria-hidden="true" />
            <span className="hero-stage-tone" aria-hidden="true" />
            <span className="hero-stage-left-fade" aria-hidden="true" />
            <span className="hero-stage-vignette" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
