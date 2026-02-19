import { useState } from 'react';
import { Send, Hash, Settings } from 'lucide-react';
import Toggle from '../ui/Toggle';
import Button from '../ui/Button';
import styles from './ConfigPanel.module.css';

const domains = [
    'Health', 'Fintech', 'Education', 'E-commerce',
    'Social', 'Productivity', 'Gaming', 'Environment'
];

const projectTypes = [
    'Web App', 'Mobile App', 'CLI Tool',
    'API Service', 'Chrome Extension', 'AI Agent'
];

export default function ConfigPanel({ onGenerate, loading }) {
    const [config, setConfig] = useState({
        domain: domains[0],
        projectType: projectTypes[0],
        skillLevel: 'intermediate',
        keywords: '',
        preferences: {
            schema: true,
            api: true,
            wireframe: false
        }
    });

    const handleChange = (field, value) => {
        setConfig(prev => ({ ...prev, [field]: value }));
    };

    const handlePrefChange = (pref) => {
        setConfig(prev => ({
            ...prev,
            preferences: {
                ...prev.preferences,
                [pref]: !prev.preferences[pref]
            }
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate(config);
    };

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <Settings size={18} className={styles.icon} />
                <h2 className={styles.title}>Configuration</h2>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.field}>
                    <label className={styles.label}>Domain</label>
                    <select
                        className={styles.select}
                        value={config.domain}
                        onChange={(e) => handleChange('domain', e.target.value)}
                    >
                        {domains.map(d => <option key={d} value={d}>{d}</option>)}
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Project Type</label>
                    <select
                        className={styles.select}
                        value={config.projectType}
                        onChange={(e) => handleChange('projectType', e.target.value)}
                    >
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Skill Level</label>
                    <Toggle
                        value={config.skillLevel}
                        onChange={(val) => handleChange('skillLevel', val)}
                    />
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Keywords / Focus Area (Optional)</label>
                    <div className={styles.inputWrapper}>
                        <Hash size={14} className={styles.inputIcon} />
                        <input
                            type="text"
                            className={styles.input}
                            placeholder="e.g. real-time, maps, AI..."
                            value={config.keywords}
                            onChange={(e) => handleChange('keywords', e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <label className={styles.label}>Output Preferences</label>
                    <div className={styles.checkboxes}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={config.preferences.schema}
                                onChange={() => handlePrefChange('schema')}
                            />
                            <span>Include Database Schema</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={config.preferences.api}
                                onChange={() => handlePrefChange('api')}
                            />
                            <span>Include API Design</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={config.preferences.wireframe}
                                onChange={() => handlePrefChange('wireframe')}
                            />
                            <span>Include UI Wireframe</span>
                        </label>
                    </div>
                </div>

                <Button
                    type="submit"
                    variant="primary"
                    fullWidth
                    loading={loading}
                    className={styles.submitBtn}
                >
                    <span className={styles.btnContent}>
                        <Send size={16} />
                        Generate Blueprint
                    </span>
                </Button>

                <div className={styles.footer}>
                    <span className={styles.tokenLabel}>Tokens used:</span>
                    <span className={styles.tokenValue}>0 / 2,048</span>
                </div>
            </form>
        </div>
    );
}
