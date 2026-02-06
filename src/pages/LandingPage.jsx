import VideoHero from '../components/Hero/VideoHero';
import Statement from '../components/Statement/Statement';
import MoodboardGrid from '../components/Moodboards/MoodboardGrid';
import Services from '../components/Services/Services';
import ContactSection from '../components/Contact/ContactSection';
import FAQ from '../components/Info/FAQ';

const LandingPage = () => {
    return (
        <>
            <VideoHero />
            <Statement />
            <MoodboardGrid />
            <Services />
            <FAQ />
            <ContactSection />
        </>
    );
};

export default LandingPage;
