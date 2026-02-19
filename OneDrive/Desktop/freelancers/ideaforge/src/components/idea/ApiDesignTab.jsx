import { Copy, Terminal } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import styles from './ApiDesignTab.module.css';

export default function ApiDesignTab({ blueprint }) {
    const { apiEndpoints } = blueprint;
    const [copied, setCopied] = useState(false);

    const codeString = apiEndpoints.map(ep => {
        const method = ep.method.padEnd(8);
        return `${method} ${ep.path.padEnd(25)} ${ep.description}`;
    }).join('\n');

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.label}>
                    <Terminal size={14} />
                    <span>REST API Endpoints</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleCopy} className={styles.copyBtn}>
                    <Copy size={14} />
                    {copied ? 'Copied!' : 'Copy Code'}
                </Button>
            </div>

            <div className={styles.codeBlock}>
                <pre className={styles.pre}>
                    <code>{codeString}</code>
                </pre>
            </div>

            <p className={styles.note}>
        // Base URL: http://localhost:5000/api
            </p>
        </div>
    );
}
