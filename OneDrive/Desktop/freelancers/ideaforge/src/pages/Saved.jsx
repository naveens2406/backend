import PageWrapper from '../components/layout/PageWrapper';

export default function Saved() {
    return (
        <PageWrapper>
            <div className="container" style={{ padding: '4rem 1.5rem' }}>
                <p className="section-label">// SAVED BLUEPRINTS</p>
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Collection</h2>
                <p style={{ color: 'var(--text-secondary)' }}>You haven't saved any blueprints yet. Start generating to build your collection!</p>
            </div>
        </PageWrapper>
    );
}
