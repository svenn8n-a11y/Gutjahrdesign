import { useRef } from 'react';
import VideoHero from '../components/Hero/VideoHero';
import Statement from '../components/Statement/Statement';
import MoodboardGrid from '../components/Moodboards/MoodboardGrid';
import Services from '../components/Services/Services';
import ContactSection from '../components/Contact/ContactSection';
import FAQ from '../components/Info/FAQ';
import ConciergPopup from '../components/Popup/ConciergPopup';

const LandingPage = () => {
    const statementRef = useRef(null);

    return (
        <>
            <VideoHero />
            <div ref={statementRef}>
                <Statement />
            </div>
            <MoodboardGrid />
            <Services />
            <FAQ />
            <ContactSection />
            <ConciergPopup triggerRef={statementRef} />
        </>
    );
};

export default LandingPage;
