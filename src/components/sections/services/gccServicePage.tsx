import PageTitle from "@/components/sections/pageTitle";
import SectionTitle from "@/components/ui/sectionTitle";
import { GCCServicePageData } from "@/db/gccServicePagesData";
import { ServiceIcon } from "@/lib/serviceIcons";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

const ActionLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  if (isExternalHref(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  );
};

const GCCServicePage = ({ page }: { page: GCCServicePageData }) => {
  const accordionId = `${page.key}-accordion`;

  return (
    <>
      <PageTitle
        title={page.pageTitle}
        currentPage={page.currentPage}
        backgroundImage={page.bannerImage}
      />

      <section className="gcc-service-page section-padding">
        <div className="container">
          <div className="gcc-service-page__hero">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="gcc-service-page__hero-content">
                  <span className="gcc-service-page__eyebrow">{page.heroLabel}</span>
                  <h2>{page.heroTitle}</h2>
                  <p>{page.heroDescription}</p>
                  <div className="gcc-service-page__actions">
                    <ActionLink href={page.primaryCta.link} className="theme-btn">
                      {page.primaryCta.label} <i className="fa-solid fa-arrow-right-long" />
                    </ActionLink>
                    <ActionLink href={page.secondaryCta.link} className="theme-btn-outline">
                      {page.secondaryCta.label} <i className="fa-regular fa-envelope" />
                    </ActionLink>
                  </div>
                  <ul className="gcc-service-page__trust-points">
                    {page.trustPoints.map((point) => (
                      <li key={point}>
                        <i className="fa-regular fa-circle-check" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="gcc-service-page__hero-media">
                  <img src={page.heroImage} alt={page.pageTitle} />
                </div>
              </div>
            </div>
          </div>

          <div className="gcc-service-page__section">
            <SectionTitle className="text-center">
              <SectionTitle.SubTitle>Introduction</SectionTitle.SubTitle>
              <SectionTitle.Title>{page.introTitle}</SectionTitle.Title>
            </SectionTitle>
            <div className="gcc-service-page__intro">
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="gcc-service-page__section">
            <div className="section-title-area">
              <SectionTitle>
                <SectionTitle.SubTitle>Solutions Overview</SectionTitle.SubTitle>
                <SectionTitle.Title>{page.serviceSectionTitle}</SectionTitle.Title>
              </SectionTitle>
            </div>
            <p className="gcc-service-page__lead">{page.serviceSectionDescription}</p>
            <div className="row g-4">
              {page.offerings.map((offering, index) => (
                <div key={offering.title} className="col-xl-4 col-md-6 wow slideUp" data-delay={`.${3 + index}`}>
                  <div className="service-box-items style-3 gcc-service-page__card h-100">
                    <div className="icon">
                      {offering.iconKey ? (
                        <ServiceIcon iconKey={offering.iconKey} />
                      ) : offering.icon ? (
                        <img src={offering.icon} alt={offering.title} loading="lazy" decoding="async" />
                      ) : null}
                    </div>
                    <div className="content">
                      <h4>{offering.title}</h4>
                      <p>{offering.description}</p>
                      <ul className="gcc-service-page__bullet-list">
                        {offering.items.map((item) => (
                          <li key={item}>
                            <i className="fa-solid fa-chevron-right" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gcc-service-page__section">
            <SectionTitle className="text-center">
              <SectionTitle.SubTitle>Why Pixel Advant</SectionTitle.SubTitle>
              <SectionTitle.Title>{page.whyChooseTitle}</SectionTitle.Title>
            </SectionTitle>
            <p className="gcc-service-page__lead gcc-service-page__lead--center">
              {page.whyChooseDescription}
            </p>
            <div className="row g-4">
              {page.highlights.map((highlight, index) => (
                <div key={highlight.title} className="col-xl-4 col-md-6 wow slideUp" data-delay={`.${3 + index}`}>
                  <div className="gcc-service-page__mini-card h-100">
                    <h4>{highlight.title}</h4>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gcc-service-page__section gcc-service-page__section--soft">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <SectionTitle>
                  <SectionTitle.SubTitle>Industries</SectionTitle.SubTitle>
                  <SectionTitle.Title>{page.industriesTitle}</SectionTitle.Title>
                </SectionTitle>
                <p className="gcc-service-page__lead">{page.industriesDescription}</p>
              </div>
              <div className="col-lg-7">
                <ul className="gcc-service-page__industry-list">
                  {page.industries.map((industry) => (
                    <li key={industry}>{industry}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="gcc-service-page__section">
            <SectionTitle className="text-center">
              <SectionTitle.SubTitle>Execution Model</SectionTitle.SubTitle>
              <SectionTitle.Title>{page.processTitle}</SectionTitle.Title>
            </SectionTitle>
            <p className="gcc-service-page__lead gcc-service-page__lead--center">
              {page.processDescription}
            </p>
            <div className="row g-4">
              {page.processSteps.map((step, index) => (
                <div key={step.step} className="col-xl-4 col-md-6 wow slideUp" data-delay={`.${3 + index}`}>
                  <div className="gcc-service-page__process-card h-100">
                    <span className="gcc-service-page__step">{step.step}</span>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="gcc-service-page__section">
            <SectionTitle className="text-center">
              <SectionTitle.SubTitle>FAQ</SectionTitle.SubTitle>
              <SectionTitle.Title>Frequently Asked Questions</SectionTitle.Title>
            </SectionTitle>
            <div className="faq-content style-3">
              <div className="faq-accordion">
                <div className="accordion" id={accordionId}>
                  {page.faqs.map((item, index) => {
                    const collapseId = `${page.key}-faq-${index}`;
                    const isExpanded = index === 0;

                    return (
                      <div key={item.question} className="accordion-item mb-3 wow slideUp" data-delay=".3">
                        <h5 className="accordion-header">
                          <button
                            className={`accordion-button ${isExpanded ? "" : "collapsed"}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={isExpanded ? "true" : "false"}
                            aria-controls={collapseId}
                          >
                            {item.question}
                          </button>
                        </h5>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse ${isExpanded ? "show" : ""}`}
                          data-bs-parent={`#${accordionId}`}
                        >
                          <div className="accordion-body">{item.answer}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="gcc-service-page__cta">
            <div className="row g-4 align-items-center">
              <div className="col-lg-8">
                <span className="gcc-service-page__eyebrow">Let&apos;s Talk</span>
                <h3>{page.ctaTitle}</h3>
                <p>{page.ctaDescription}</p>
              </div>
              <div className="col-lg-4">
                <div className="gcc-service-page__cta-actions">
                  <ActionLink href={page.primaryCta.link} className="theme-btn">
                    {page.primaryCta.label} <i className="fa-solid fa-arrow-right-long" />
                  </ActionLink>
                  <ActionLink href={page.secondaryCta.link} className="theme-btn-outline">
                    {page.secondaryCta.label} <i className="fa-regular fa-envelope" />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GCCServicePage;
