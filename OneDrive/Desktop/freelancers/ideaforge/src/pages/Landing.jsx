import AnnouncementBar from '../components/landing/AnnouncementBar';
import Hero from '../components/landing/Hero';
import LogosBand from '../components/landing/LogosBand';
import StatsRow from '../components/landing/StatsRow';
import FeaturesGrid from '../components/landing/FeaturesGrid';
import HowItWorks from '../components/landing/HowItWorks';
import DemoSection from '../components/landing/DemoSection';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';
import CTABanner from '../components/landing/CTABanner';
import PageWrapper from '../components/layout/PageWrapper';
import BackgroundEffects from '../components/ui/BackgroundEffects';

export default function Landing() {
    return (
        <PageWrapper>
            <AnnouncementBar />
            <BackgroundEffects />
            <Hero />
            <LogosBand />
            <StatsRow />
            <FeaturesGrid />
            <HowItWorks />
            <DemoSection />
            <Testimonials />
            <Pricing />
            <FAQ />
            <CTABanner />
        </PageWrapper>
    );
}
