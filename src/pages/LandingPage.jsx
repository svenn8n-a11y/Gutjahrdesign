import VideoHero from '../components/Hero/VideoHero';
import MoodboardGrid from '../components/Moodboards/MoodboardGrid';
import Services from '../components/Services/Services';
import ContactSection from '../components/Contact/ContactSection';

const LandingPage = () => {
    return (
        <>
            <VideoHero />
            <MoodboardGrid />
            <Services />
            <ContactSection />
        </>
    );
};

export default LandingPage;
