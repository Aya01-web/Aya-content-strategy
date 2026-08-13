import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { blogPostImages } from './BlogPostImages';
import './BlogPosts.css';

const articles = [
  {
    brand: 'Naraakum',
    type: 'Healthcare',
    title: 'دور الاستشارات الطبية عن بعد في تسهيل الوصول إلى الخدمات الصحية',
    href: 'https://www.naraakum.com/ArticleInfo?Id=42',
    image: blogPostImages[0],
    language: 'ar'
  },
  {
    brand: 'Naraakum',
    type: 'Home Healthcare',
    title: 'أهمية الرعاية الصحية المنزلية في تحسين جودة حياة المرضى',
    href: 'https://www.naraakum.com/ArticleInfo?Id=43',
    image: blogPostImages[1],
    language: 'ar'
  },
  {
    brand: 'Naraakum',
    type: 'Health Awareness',
    title: 'اليوم العالمي للكلى: عادات يومية تدعم صحة الكلى',
    href: 'https://www.naraakum.com/ArticleInfo?Id=44',
    image: blogPostImages[2],
    language: 'ar'
  },
  {
    brand: 'QQ Assessment',
    type: 'Academic Integrity',
    title: 'How to reduce cheating in remote exams without friction',
    href: 'https://www.qqassessment.com/en/blog/cheating-remote-exams',
    image: blogPostImages[3],
    language: 'en'
  },
  {
    brand: 'QQ Assessment',
    type: 'Online Proctoring',
    title: 'What Is Online Proctoring for Exams? The Ultimate Guide',
    href: 'https://www.qqassessment.com/en/blog/online-proctoring-exams',
    image: blogPostImages[4],
    language: 'en'
  },
  {
    brand: 'QQ Assessment',
    type: 'Assessment Analytics',
    title: 'Assessment Analytics: Transform assessment data into decisions',
    href: 'https://www.qqassessment.com/en/blog/assessment-analytics',
    image: blogPostImages[5],
    language: 'en'
  }
];

export default function BlogPosts() {
  const trackRef = useRef(null);

  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.82, behavior: 'smooth' });
  };

  const handleKeys = (event) => {
    if (event.key === 'ArrowRight') move(1);
    if (event.key === 'ArrowLeft') move(-1);
  };

  return (
    <section className="blog-posts" id="blog-posts" aria-labelledby="blog-posts-title">
      <div className="blog-posts__glow" aria-hidden="true" />
      <div className="blog-posts__shell">
        <header className="blog-posts__header">
          <div>
            <p className="blog-posts__eyebrow">Healthcare · EdTech · Strategy</p>
            <h2 id="blog-posts-title">Blog Posts</h2>
            <p className="blog-posts__intro">
              Selected articles that turn complex ideas into clear, useful content for real audiences.
            </p>
          </div>
          <div className="blog-posts__controls" aria-label="Blog slider controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous blog posts">
              <FaArrowLeft aria-hidden="true" />
            </button>
            <button type="button" onClick={() => move(1)} aria-label="Next blog posts">
              <FaArrowRight aria-hidden="true" />
            </button>
          </div>
        </header>

        <div
          className="blog-posts__track"
          ref={trackRef}
          onKeyDown={handleKeys}
          tabIndex="0"
          aria-label="Featured blog posts"
        >
          {articles.map((article, index) => (
            <article className="blog-card" key={article.href}>
              <a href={article.href} target="_blank" rel="noreferrer" aria-label={`Read ${article.title}`}>
                <span className="blog-card__media">
                  <img src={article.image} alt="" loading="lazy" decoding="async" />
                  <span className="blog-card__number">0{index + 1}</span>
                </span>
                <span className="blog-card__body">
                  <span className="blog-card__meta">
                    <span>{article.brand}</span>
                    <span>{article.type}</span>
                  </span>
                  <strong lang={article.language} dir={article.language === 'ar' ? 'rtl' : 'ltr'}>
                    {article.title}
                  </strong>
                  <span className="blog-card__link">
                    Read Article <FaArrowUpRightFromSquare aria-hidden="true" />
                  </span>
                </span>
              </a>
            </article>
          ))}
        </div>

        <p className="blog-posts__hint">Swipe or use the arrows to explore all six articles.</p>
      </div>
    </section>
  );
}
