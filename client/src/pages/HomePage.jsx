import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { services } from '../data';
import homeVideo1 from '../assets/video 1.mp4';
import homeVideo2 from '../assets/video2.mp4';
import homeVideo3 from '../assets/video 3.mp4';
import homeVideo4 from '../assets/video 4.mp4';
import brandImage1 from '../assets/1.webp';
import brandImage2 from '../assets/2.jpg';
import brandImage3 from '../assets/3 (2).png';
import brandImage4 from '../assets/4.jpg';
import brandImage5 from '../assets/5.png';
import brandImage6 from '../assets/6.jpg';
import brandImage7 from '../assets/7.jpg';
import brandImage8 from '../assets/8.jpg';
import brandImage9 from '../assets/9.avif';
import brandImage10 from '../assets/10.png';
import whoWeAreImage11 from '../assets/new 11.jpg';
import whoWeAreImage12 from '../assets/new 12.jpg';
import whoWeAreImage13 from '../assets/new 13.jpg';
import whoWeAreImage14 from '../assets/new 14.jpg';
import itSectorImage from '../assets/new it.jpg';
import universityImage from '../assets/new university.jpg';
import schoolImage from '../assets/new school.jpg';
import hospitalityImage from '../assets/new hospitality.jpg';
import corporateRetailImage from '../assets/new corporate.jpg';
import healthcareImage from '../assets/new healthcare.jpg';
import industriesImage from '../assets/new industries.jpg';
import residentialImage from '../assets/new rentals.jpg';
import supremeProfilePdf from '../assets/Supreme Profile.pdf';

const valueCounters = [
  { value: 37, suffix: '+', label: 'Years Of Experience' },
  { value: 210, suffix: '+', label: 'Projects Delivered' },
  { value: 24, suffix: '/7', label: 'Support Response' },
  { value: 99, suffix: '%', label: 'Leak Control Success' }
];

const sliderItems = [
  {
    mediaType: 'video',
    eyebrow: 'On-Site Execution',
    title: 'Real project progress captured from the field.',
    text: 'See our teams in motion across active construction and waterproofing work with practical coordination and steady site momentum.',
    metric: 'Live project visuals',
    ctaLabel: 'Explore Projects',
    ctaTo: '/projects',
    image: homeVideo1,
    imageAlt: 'Construction site progress video'
  },
  {
    mediaType: 'video',
    eyebrow: 'Waterproofing In Action',
    title: 'Application quality that holds up beyond handover.',
    text: 'Our process focuses on surface prep, layered protection, and disciplined execution so critical areas perform for the long term.',
    metric: 'Protection-focused delivery',
    ctaLabel: 'View Services',
    ctaTo: '/services',
    image: homeVideo2,
    imageAlt: 'Waterproofing work video'
  },
  {
    mediaType: 'video',
    eyebrow: 'Built To Last',
    title: 'Hands-on delivery for demanding construction environments.',
    text: 'From planning through execution, we keep projects moving with accountable site management, strong workmanship, and reliable updates.',
    metric: 'Field-tested execution',
    ctaLabel: 'Contact Us',
    ctaTo: '/contact',
    image: homeVideo3,
    imageAlt: 'Construction team working on site video'
  },
  {
    mediaType: 'video',
    eyebrow: 'Project Momentum',
    title: 'Progress you can see across every critical stage.',
    text: 'Our teams keep execution moving with steady site coordination, practical decisions, and close attention to build quality on the ground.',
    metric: 'Visible site progress',
    ctaLabel: 'Explore Projects',
    ctaTo: '/projects',
    image: homeVideo4,
    imageAlt: 'Project progress and construction activity video'
  }
];

const premiumBrands = [
  { name: 'Home Premium Brand 1', image: brandImage1 },
  { name: 'Home Premium Brand 2', image: brandImage2 },
  { name: 'Home Premium Brand 3', image: brandImage3 },
  { name: 'Home Premium Brand 4', image: brandImage4 },
  { name: 'Home Premium Brand 5', image: brandImage5 },
  { name: 'Home Premium Brand 6', image: brandImage6 },
  { name: 'Home Premium Brand 7', image: brandImage7 },
  { name: 'Home Premium Brand 8', image: brandImage8 },
  { name: 'Home Premium Brand 9', image: brandImage9 },
  { name: 'Home Premium Brand 10', image: brandImage10 }
];

const whoWeAreImages = [
  { src: whoWeAreImage11, alt: 'Who we are gallery image 1' },
  { src: whoWeAreImage12, alt: 'Who we are gallery image 2' },
  { src: whoWeAreImage13, alt: 'Who we are gallery image 3' },
  { src: whoWeAreImage14, alt: 'Who we are gallery image 4' }
];

const projectSectors = [
  { title: 'IT Sector', image: itSectorImage, alt: 'IT sector project photo', to: '/projects?sector=it-sector' },
  { title: 'University', image: universityImage, alt: 'University project photo', to: '/projects?sector=university' },
  { title: 'Schools', image: schoolImage, alt: 'School project photo', to: '/projects?sector=schools' },
  { title: 'Hospitality', image: hospitalityImage, alt: 'Hospitality project photo', to: '/projects?sector=hospitality' },
  { title: 'Corporate / Retail', image: corporateRetailImage, alt: 'Corporate and retail project photo', to: '/projects?sector=corporate-retail' },
  { title: 'Healthcare', image: healthcareImage, alt: 'Healthcare project photo', to: '/projects?sector=healthcare' },
  { title: 'Industries', image: industriesImage, alt: 'Industrial project photo', to: '/projects?sector=industries' },
  { title: 'Rentals', image: residentialImage, alt: 'Rental project photo', to: '/projects?sector=rentals' }
];

const loopingServices = [...services, ...services];

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [counterValues, setCounterValues] = useState(() => valueCounters.map(() => 0));
  const [hasAnimatedCounters, setHasAnimatedCounters] = useState(false);
  const valueSectionRef = useRef(null);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => {
        if (currentSlide >= sliderItems.length - 1) {
          return 0;
        }

        return currentSlide + 1;
      });
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimatedCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (valueSectionRef.current) {
      observer.observe(valueSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimatedCounters) {
      return undefined;
    }

    const duration = 1400;
    const startTime = performance.now();
    let animationFrameId = 0;

    const animateCounters = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCounterValues(valueCounters.map((item) => Math.round(item.value * progress)));

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animateCounters);
      }
    };

    animationFrameId = window.requestAnimationFrame(animateCounters);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [hasAnimatedCounters]);

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + sliderItems.length) % sliderItems.length);
  };
  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % sliderItems.length);
  };

  return (
    <main className="home-page">
      <section className="home-slider">
        <div className="carousel-shell">
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {sliderItems.map((slide) => (
                <article className="carousel-slide" key={slide.title}>
                  {slide.mediaType === 'video' ? (
                    <video
                      className="carousel-image"
                      src={slide.image}
                      aria-label={slide.imageAlt}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img className="carousel-image" src={slide.image} alt={slide.imageAlt} />
                  )}
                  <div className="carousel-content">
                    <div className="carousel-panel">
                      <p className="carousel-eyebrow">{slide.eyebrow}</p>
                      <h2 className="carousel-title">{slide.title}</h2>
                      <p className="carousel-text">{slide.text}</p>
                      <div className="carousel-actions">
                        <Link className="primary-btn carousel-cta" to={slide.ctaTo}>{slide.ctaLabel}</Link>
                        <span className="carousel-metric">{slide.metric}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="carousel-controls" aria-label="Carousel controls">
            <button type="button" className="carousel-arrow" onClick={goToPreviousSlide} aria-label="Previous slide">
              &#8249;
            </button>
            <button type="button" className="carousel-arrow" onClick={goToNextSlide} aria-label="Next slide">
              &#8250;
            </button>
          </div>

          <div className="carousel-preview" aria-label="Homepage highlights">
            {sliderItems.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={`carousel-dot ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-pressed={index === activeSlide}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              >
                <span className="carousel-dot-fill" />
              </button>
            ))}
          </div>

        </div>
      </section>

      <section className="section who-we-are-section">
        <div className="who-we-are-grid">
          <div className="who-we-are-copy">
            <p className="eyebrow">Who We Are</p>
            <h2 className="who-we-are-title">We are a construction and waterproofing team focused on durable, practical results.</h2>
            <p className="page-text">
              Established in 1988, Supreme Aqua Seal Private Limited is one of the most trusted
              waterproofing brands in India. As one of the early movers in the industry, we have
              leveraged our experience in creating reliable, effective, and lasting waterproofing
              solutions across industries. From commercial terraces with light and heavy traffic,
              to indoor areas with prolonged wetness, our solutions are customized to your
              specific needs, ensuring a perfect fit for your puzzle.
            </p>
            <div className="hero-actions">
              <Link className="primary-btn" to="/about">Read More</Link>
              <a className="secondary-btn" href={supremeProfilePdf} download="Supreme Profile.pdf">Download Brochure</a>
            </div>
          </div>

          <div className="who-we-are-gallery">
            {whoWeAreImages.map((image) => (
              <article className="who-we-are-card" key={image.alt}>
                <img className="who-we-are-image" src={image.src} alt={image.alt} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section ref={valueSectionRef} className="section value-strip">
        <div className="value-grid">
          {valueCounters.map((item, index) => (
            <article className="value-card" key={item.label}>
              <strong>
                {counterValues[index]}
                {item.suffix}
              </strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Construction and waterproofing services built for durable protection.</h2>
        </div>
        <div className="service-slider-shell">
          <div className="service-slider-header">
            <p className="page-text">Browse our key protection and construction solutions for residential and commercial spaces.</p>
          </div>
          <div className="service-slider-viewport service-marquee-shell">
            <div className="service-slider-track service-marquee-track">
              {loopingServices.map((service, index) => (
                <article className="info-card service-slide-card" key={`${service.title}-${index}`}>
                  <img className="service-slide-image" src={service.image} alt={service.imageAlt} />
                  <h3>{service.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section project-sectors-section">
        <div className="section-heading">
          <p className="eyebrow">Our Projects</p>
          <h2>Project experience across high-demand sectors and client environments.</h2>
        </div>
        <div className="project-sector-grid">
          {projectSectors.map((sector) => (
            <Link className="project-sector-card" key={sector.title} to={sector.to}>
              <img className="project-sector-image" src={sector.image} alt={sector.alt} />
              <span>Sector</span>
              <h3>{sector.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="section highlight-band">
        <div className="band-copy">
          <p className="eyebrow">Why Clients Choose Us</p>
          <h2>Reliable planning on paper. Confident execution on site.</h2>
        </div>
        <div className="band-points">
          <div>
            <strong>Budget Discipline</strong>
            <p>Clear estimates, responsible procurement, and practical decision-making throughout the build.</p>
          </div>
          <div>
            <strong>Site Safety</strong>
            <p>Structured oversight, trained crews, and consistent standards across every phase of work.</p>
          </div>
          <div>
            <strong>Modern Delivery</strong>
            <p>Fast reporting, milestone visibility, and efficient communication that keeps stakeholders aligned.</p>
          </div>
        </div>
      </section>

      <section className="section brands-section">
        <div className="section-heading">
          <p className="eyebrow">Premium Brands</p>
          <h2>Premium brands used in our process.</h2>
        </div>
        <div className="brands-grid">
          {premiumBrands.map((brand) => (
            <article className="brand-tile" key={brand.name}>
              <img src={brand.image} alt={brand.name} className="brand-logo" />
            </article>
          ))}
        </div>
      </section>

    </main>
  );
}

export default HomePage;
