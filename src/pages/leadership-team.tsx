import { useState } from 'react'
import PageTitle from "@/components/sections/pageTitle"
import SEO from '@/components/SEO'
import { pageSEOConfig } from '@/lib/seoConfig'
import { teamMembersTwoData } from '@/db/teamMembersTwoData'
import type { TeamMemberDataType } from '@/db/teamMembersOneData'

const LeadershipTeam = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberDataType | null>(null)

  return (
    <>
      <SEO {...pageSEOConfig.leadershipTeam} />
      <PageTitle title="Leadership Team" currentPage="Leadership Team" />

      <section className="team-section section-padding fix">
        <div className="container">
          <div className="text-center mb-5">
            <span style={{ color: 'var(--theme)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '14px' }}>Our Team</span>
            <h2 className="mt-2">Meet Our Leadership Team</h2>
            <p className="text-muted" style={{ maxWidth: '560px', margin: '12px auto 0' }}>Meet the dedicated professionals leading our company to success.</p>
          </div>

          <div className="row">
            {teamMembersTwoData.map((member) => (
              <div
                key={member.id}
                className="col-xl-4 col-lg-4 col-md-6 wow slideUp"
                data-delay={member.delay}
              >
                <div className="team-card-items">
                  <div className="team-image">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      style={{ height: '300px', objectFit: 'cover', width: '100%' }}
                    />
                    <div className="social-profile">
                      <span className="plus-btn">
                        <i className="fas fa-share-alt" />
                      </span>
                      <ul>
                        {member.socialLinks.map(({ icon, link }) => (
                          <li key={icon}>
                            <a href={link || '#'} aria-label={icon.replace(/fab |fa-brands |fa-/g, '').replace(/-/g, ' ')}>
                              <i className={icon} />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                    <button
                      type="button"
                      onClick={() => setSelectedMember(member)}
                      style={{
                        marginTop: '12px',
                        padding: '8px 22px',
                        border: '2px solid var(--theme)',
                        borderRadius: '4px',
                        background: 'transparent',
                        color: 'var(--theme)',
                        fontWeight: 600,
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'var(--theme)'
                        ;(e.currentTarget as HTMLButtonElement).style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLButtonElement).style.background = 'transparent'
                        ;(e.currentTarget as HTMLButtonElement).style.color = 'var(--theme)'
                      }}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.55)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '100%',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '14px',
                right: '18px',
                background: 'none',
                border: 'none',
                fontSize: '22px',
                cursor: 'pointer',
                color: '#666',
                lineHeight: 1,
              }}
            >
              &times;
            </button>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid var(--theme)' }}
              />
            </div>
            <h4 style={{ textAlign: 'center', marginBottom: '4px' }}>{selectedMember.name}</h4>
            <p style={{ textAlign: 'center', color: 'var(--theme)', fontWeight: 600, marginBottom: '20px' }}>{selectedMember.role}</p>
            <p style={{ color: '#555', lineHeight: 1.7, textAlign: 'center' }}>
              {selectedMember.description || 'No description available.'}
            </p>
            {selectedMember.socialLinks.some(s => s.link) && (
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
                {selectedMember.socialLinks.filter(s => s.link).map(({ icon, link }) => (
                  <a
                    key={icon}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={icon.replace(/fab |fa-brands |fa-/g, '').replace(/-/g, ' ')}
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--theme)',
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}
                  >
                    <i className={icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default LeadershipTeam
