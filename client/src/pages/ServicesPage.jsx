import { services } from '../data';

function ServicesPage() {
  return (
    <main className="section page-content">
      <div className="page-intro">
        <p className="eyebrow">Services</p>
        <h1 className="page-title services-page-title">Construction and waterproofing services tailored to each site condition.</h1>
        <p className="page-text">
          Our service approach combines detailed site assessment, dependable material systems, and
          careful execution to deliver work that performs well over time in residential,
          commercial, and institutional projects.
        </p>
      </div>

      <section className="services-page-grid">
        {services.map((service) => (
          <article className="services-page-card" key={service.title}>
            <div className="services-page-media">
              <img className="services-page-image" src={service.image} alt={service.imageAlt} />
            </div>
            <div className="services-page-copy">
              <span>Service</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              {service.details ? <p>{service.details}</p> : null}
              {service.includes?.length ? (
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default ServicesPage;
