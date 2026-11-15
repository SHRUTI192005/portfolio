import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      radius: 140
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initNodes();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Node & Trace simulation
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 65);
    let nodes = [];

    class Node {
      constructor(x, y) {
        this.x = x || Math.random() * width;
        this.y = y || Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 1;
        this.isChipPin = Math.random() > 0.82;
        this.pulse = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction: subtle push/pull
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }

      draw() {
        ctx.save();
        const glow = Math.sin(this.pulse) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        if (this.isChipPin) {
          ctx.fillStyle = `rgba(56, 189, 248, ${0.8 * glow})`;
          ctx.shadowColor = '#00f2fe';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(129, 140, 248, ${0.5 * glow})`;
          ctx.shadowColor = '#818cf8';
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.restore();
      }
    }

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push(new Node());
      }
    };

    initNodes();

    // Pulses traveling across circuit traces
    let packets = [];
    const createPacket = (n1, n2) => {
      if (packets.length < 12 && Math.random() < 0.04) {
        packets.push({
          x1: n1.x,
          y1: n1.y,
          x2: n2.x,
          y2: n2.y,
          progress: 0,
          speed: 0.015 + Math.random() * 0.02
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw circuit connection traces
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.16;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();

            // Right-angle PCB trace style randomly for tech feel
            if (dist < 80 && (i + j) % 3 === 0) {
              const midX = nodes[i].x;
              const midY = nodes[j].y;
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(midX, midY);
              ctx.lineTo(nodes[j].x, nodes[j].y);
            } else {
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
            }
            ctx.stroke();

            createPacket(nodes[i], nodes[j]);
          }
        }
      }

      // Update & Draw Packets (data pulses moving through lines)
      for (let p = packets.length - 1; p >= 0; p--) {
        const pkt = packets[p];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const curX = pkt.x1 + (pkt.x2 - pkt.x1) * pkt.progress;
        const curY = pkt.y1 + (pkt.y2 - pkt.y1) * pkt.progress;

        ctx.save();
        ctx.beginPath();
        ctx.arc(curX, curY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#00f2fe';
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.restore();
      }

      // Update & draw nodes
      nodes.forEach((node) => {
        node.update();
        node.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default HeroCanvas;
