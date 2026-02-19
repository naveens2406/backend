import { useEffect, useRef, useState } from 'react';
import styles from './BackgroundEffects.module.css';

export default function BackgroundEffects() {
    const canvasRef = useRef(null);
    const [orbs, setOrbs] = useState([
        { id: 1, x: 15, y: 20, size: 280, color: 'rgba(0, 255, 0, 0.3)', vx: 0.3, vy: 0.2 },
        { id: 2, x: 75, y: 40, size: 320, color: 'rgba(0, 255, 0, 0.25)', vx: -0.2, vy: 0.3 },
        { id: 3, x: 30, y: 70, size: 240, color: 'rgba(0, 200, 0, 0.2)', vx: 0.25, vy: -0.15 },
        { id: 4, x: 55, y: 25, size: 180, color: 'rgba(0, 255, 0, 0.2)', vx: -0.35, vy: 0.25 },
    ]);
    const [splitOrbs, setSplitOrbs] = useState([]);
    const nextIdRef = useRef(100);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let animationId;
        let particles = [];
        
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        resize();
        window.addEventListener('resize', resize);
        
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 2 + 1,
            });
        }
        
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(0, 255, 0, 0.4)';
                ctx.fill();
                
                particles.slice(i + 1).forEach((p2) => {
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = `rgba(0, 255, 0, ${0.15 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });
            });
            
            animationId = requestAnimationFrame(animate);
        };
        
        animate();
        
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setOrbs(prev => prev.map(orb => ({
                ...orb,
                x: ((orb.x + orb.vx + 100) % 100),
                y: ((orb.y + orb.vy + 100) % 100),
            })));
            setSplitOrbs(prev => prev.map(orb => ({
                ...orb,
                x: ((orb.x + orb.vx + 100) % 100),
                y: ((orb.y + orb.vy + 100) % 100),
                opacity: Math.max(0, orb.opacity - 0.001),
            })).filter(orb => orb.opacity > 0));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    const handleOrbClick = (orb, e) => {
        e.stopPropagation();
        if (orb.size < 80) return;
        
        const newOrbs = [];
        const newSize = orb.size / 2;
        const angle = Math.random() * Math.PI * 2;
        const spread = 8;
        
        for (let i = 0; i < 4; i++) {
            const a = angle + (i * Math.PI / 2);
            nextIdRef.current += 1;
            newOrbs.push({
                id: nextIdRef.current,
                x: orb.x + Math.cos(a) * spread,
                y: orb.y + Math.sin(a) * spread,
                size: newSize,
                color: orb.color,
                vx: Math.cos(a) * 0.8,
                vy: Math.sin(a) * 0.8,
                opacity: 0.6,
            });
        }
        
        setOrbs(prev => prev.filter(o => o.id !== orb.id));
        setSplitOrbs(prev => [...prev, ...newOrbs]);
    };

    const handleContainerClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        nextIdRef.current += 1;
        const colors = [
            'rgba(0, 255, 0, 0.3)',
            'rgba(0, 200, 0, 0.25)',
            'rgba(0, 255, 100, 0.25)',
            'rgba(0, 220, 0, 0.2)',
        ];
        
        const newOrb = {
            id: nextIdRef.current,
            x,
            y,
            size: 100 + Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            opacity: 0.5,
        };
        
        setSplitOrbs(prev => [...prev, newOrb]);
    };

    return (
        <div className={styles.container} onClick={handleContainerClick}>
            <canvas ref={canvasRef} className={styles.canvas} />
            
            <div className={styles.aurora}>
                <div className={styles.auroraLayer1} />
                <div className={styles.auroraLayer2} />
                <div className={styles.auroraLayer3} />
            </div>
            
            <div className={styles.orbs}>
                {orbs.map(orb => (
                    <div
                        key={orb.id}
                        className={styles.orb}
                        style={{
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            width: orb.size,
                            height: orb.size,
                            background: `radial-gradient(circle at 30% 30%, ${orb.color}, transparent 70%)`,
                        }}
                        onClick={(e) => handleOrbClick(orb, e)}
                    />
                ))}
                {splitOrbs.map(orb => (
                    <div
                        key={orb.id}
                        className={`${styles.orb} ${styles.orbSplit}`}
                        style={{
                            left: `${orb.x}%`,
                            top: `${orb.y}%`,
                            width: orb.size,
                            height: orb.size,
                            background: `radial-gradient(circle at 50% 50%, ${orb.color}, transparent 70%)`,
                            opacity: orb.opacity || 0.5,
                        }}
                        onClick={(e) => handleOrbClick(orb, e)}
                    />
                ))}
            </div>
            
            <div className={styles.gridPulse} />
        </div>
    );
}
