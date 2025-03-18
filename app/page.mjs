import Header from '../components/Header.mjs';
import Hero from '../components/Hero.mjs';
import Features from '../components/Features.mjs';
import Footer from '../components/Footer.mjs';
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <Script id="analytics-script" strategy="afterInteractive">
        {`
          function trackEvent(event, properties = {}) {
            fetch('/api/track', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ event, properties, timestamp: new Date().toISOString() })
            });
          }
          
          // Track page view on load
          window.addEventListener('load', () => trackEvent('page_view', { 
            path: window.location.pathname,
            referrer: document.referrer
          }));
          
          // Track clicks on buttons with data-track attribute
          document.addEventListener('click', (e) => {
            const trackElement = e.target.closest('[data-track]');
            if (trackElement) {
              const eventName = trackElement.getAttribute('data-track');
              trackEvent(eventName, { 
                element: trackElement.tagName,
                elementId: trackElement.id,
                elementText: trackElement.innerText
              });
            }
          });
        `}
      </Script>
      <Header />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}