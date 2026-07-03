import { useEffect, useRef } from "react";

export default function ConnectAnimate({
  color = "129,140,248",
  mode = "connect",
  className = "",
  children,
}) {
  const canvasRef = useRef(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  // Keep a ref for mode + color so the animation loop always reads the
  // latest value without needing to restart the loop on every prop change
  const modeRef  = useRef(mode);
  const colorRef = useRef(color);

  useEffect(() => { modeRef.current  = mode;  }, [mode]);
  useEffect(() => { colorRef.current = color; }, [color]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const wrap   = canvas.parentElement;

    // ── resize ──────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = wrap.offsetWidth;
      canvas.height = wrap.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // ── particles ───────────────────────────────────────────────
    const particles = Array.from({ length: 110 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.3,
      r:  1.5 + Math.random() * 2,
    }));

    const REPEL_R   = 120;
    const CONNECT_R = 140;

    // ── main loop ───────────────────────────────────────────────
    let raf;
    const draw = () => {
      const W   = canvas.width;
      const H   = canvas.height;
      const rgb = colorRef.current;
      const m   = modeRef.current;
      const { x: mx, y: my } = mouseRef.current;

      ctx.clearRect(0, 0, W, H);

      // 1. physics
      for (const p of particles) {
        const dx   = mx - p.x;
        const dy   = my - p.y;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist < REPEL_R) {
          const strength = (1 - dist / REPEL_R) * 0.4;
          if (m === "repel") {
            p.vx -= (dx / dist) * strength;
            p.vy -= (dy / dist) * strength;
          } else if (m === "attract") {
            p.vx += (dx / dist) * strength;
            p.vy += (dy / dist) * strength;
          }
          // connect — no cursor force, particles drift freely
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x  += p.vx;
        p.y  += p.vy;

        // bounce off walls
        if (p.x < 0)  { p.x = 0;  p.vx *= -1; }
        if (p.x > W)  { p.x = W;  p.vx *= -1; }
        if (p.y < 0)  { p.y = 0;  p.vy *= -1; }
        if (p.y > H)  { p.y = H;  p.vy *= -1; }
      }

      // 2. lines — drawn BEFORE dots so dots sit on top
      if (m === "connect") {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];

          // particle ↔ particle
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < CONNECT_R) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(${rgb},${(1 - d / CONNECT_R) * 0.45})`;
              ctx.lineWidth   = 0.8;
              ctx.stroke();
            }
          }

          // particle ↔ mouse
          const md = Math.hypot(mx - a.x, my - a.y);
          if (md < CONNECT_R * 1.5 && mx > 0) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${rgb},${(1 - md / (CONNECT_R * 1.5)) * 0.7})`;
            ctx.lineWidth   = 0.9;
            ctx.stroke();
          }
        }
      }

      // 3. dots — ALWAYS drawn, on top of lines
      for (const p of particles) {
        const dist      = Math.hypot(mx - p.x, my - p.y);
        const proximity = Math.max(0, 1 - dist / REPEL_R);
        const alpha     = 0.35 + proximity * 0.65;
        const radius    = p.r + proximity * 1.5;

        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    // ── mouse / touch ────────────────────────────────────────────
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    const onTouch = (e) => {
      e.preventDefault();
      const r = wrap.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - r.left,
        y: e.touches[0].clientY - r.top,
      };
    };

    wrap.addEventListener("mousemove",  onMove);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchmove",  onTouch, { passive: false });
    wrap.addEventListener("touchend",   onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove",  onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchmove",  onTouch);
      wrap.removeEventListener("touchend",   onLeave);
    };
  }, []); // ← empty deps: loop starts once, reads latest values via refs

  return (
    <div className={`relative overflow-hidden bg-gray-950 ${className}`}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}