const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/918904957029"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '28px',
                right: '28px',
                zIndex: 9999,
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: '#25d366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                textDecoration: 'none',
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.12)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.60)'
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)'
                ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)'
            }}
        >
            {/* Official WhatsApp SVG icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="28"
                height="28"
                fill="#fff"
            >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.643 4.788 1.768 6.805L2 30l7.383-1.74A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.82-1.588l-.418-.247-4.38 1.032 1.058-4.267-.272-.44A11.46 11.46 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.617c-.345-.172-2.04-1.006-2.355-1.12-.315-.117-.545-.172-.774.172-.23.345-.888 1.12-1.09 1.35-.2.23-.4.258-.745.086-.345-.172-1.456-.537-2.773-1.71-1.025-.913-1.717-2.04-1.918-2.385-.2-.345-.021-.532.15-.703.154-.154.345-.4.517-.6.172-.2.23-.345.345-.575.115-.23.057-.43-.029-.602-.086-.172-.774-1.868-1.06-2.557-.28-.672-.563-.58-.774-.59l-.66-.013a1.267 1.267 0 0 0-.918.43c-.315.345-1.203 1.176-1.203 2.867s1.23 3.325 1.402 3.555c.172.23 2.42 3.697 5.865 5.185.82.354 1.46.565 1.959.723.823.262 1.572.225 2.164.137.66-.099 2.04-.834 2.327-1.638.287-.804.287-1.493.2-1.638-.083-.143-.313-.23-.658-.4z" />
            </svg>

            {/* Pulse ring animation */}
            <span style={{
                position: 'absolute',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                backgroundColor: 'rgba(37, 211, 102, 0.4)',
                animation: 'wa-pulse 2s ease-out infinite',
                zIndex: -1,
            }} />

            <style>{`
                @keyframes wa-pulse {
                    0%   { transform: scale(1);   opacity: 0.7; }
                    70%  { transform: scale(1.6); opacity: 0; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
            `}</style>
        </a>
    )
}

export default WhatsAppButton
