import { Info, Cpu, List, Map, Webhook } from 'lucide-react';
import Tabs from '../ui/Tabs';
import EmptyState from './EmptyState';
import OverviewTab from '../idea/OverviewTab';
import TechStackTab from '../idea/TechStackTab';
import FeatureListTab from '../idea/FeatureListTab';
import RoadmapTab from '../idea/RoadmapTab';
import ApiDesignTab from '../idea/ApiDesignTab';
import Skeleton, { SkeletonBlock } from '../ui/Skeleton';
import styles from './OutputPanel.module.css';

const tabs = [
    { id: 'overview', label: 'Overview', icon: <Info size={14} /> },
    { id: 'tech', label: 'Tech Stack', icon: <Cpu size={14} /> },
    { id: 'features', label: 'Features', icon: <List size={14} /> },
    { id: 'roadmap', label: 'Roadmap', icon: <Map size={14} /> },
    { id: 'api', label: 'API Design', icon: <Webhook size={14} /> },
];

export default function OutputPanel({ blueprint, loading }) {
    if (loading) {
        return (
            <div className={styles.panel}>
                <div className={styles.loadingWrapper}>
                    <Skeleton height="32px" width="200px" className={styles.loadingTitle} />
                    <SkeletonBlock lines={4} className={styles.loadingBlock} />
                    <div className={styles.loadingGrid}>
                        <Skeleton height="100px" />
                        <Skeleton height="100px" />
                    </div>
                </div>
            </div>
        );
    }

    if (!blueprint) {
        return (
            <div className={styles.panel}>
                <EmptyState />
            </div>
        );
    }

    return (
        <div className={styles.panel}>
            <Tabs tabs={tabs} defaultTab="overview">
                {(activeTab) => (
                    <div className={styles.tabContent}>
                        {activeTab === 'overview' && <OverviewTab blueprint={blueprint} />}
                        {activeTab === 'tech' && <TechStackTab blueprint={blueprint} />}
                        {activeTab === 'features' && <FeatureListTab blueprint={blueprint} />}
                        {activeTab === 'roadmap' && <RoadmapTab blueprint={blueprint} />}
                        {activeTab === 'api' && <ApiDesignTab blueprint={blueprint} />}
                    </div>
                )}
            </Tabs>
        </div>
    );
}
