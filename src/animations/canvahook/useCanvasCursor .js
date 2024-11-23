"use client";
import { useEffect } from "react";

const useCanvasCursor = () => {
    // Declare variables with proper scope
    let ctx = null;
    let pos = { x: 0, y: 0 };
    let lines = [];
    let f = null;

    const E = {
        debug: true,
        friction: 0.5,
        trails: 20,
        size: 50,
        dampening: 0.25,
        tension: 0.98,
    };

    // Wave generator class
    function n(e) {
        this.init(e || {});
    }

    n.prototype = {
        init: function (e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
            this.calculatedValue = 0; // Store calculated value
        },
        update: function () {
            this.phase += this.frequency;
            this.calculatedValue = this.offset + Math.sin(this.phase) * this.amplitude;
            return this.calculatedValue;
        },
        value: function () {
            return this.calculatedValue;
        },
    };

    // Node class
    function Node() {
        this.x = 0;
        this.y = 0;
        this.vx = 0;
        this.vy = 0;
    }

    // Line class
    function Line(e) {
        this.init(e || {});
    }

    Line.prototype = {
        init: function (e) {
            this.spring = e.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for (let n = 0; n < E.size; n++) {
                const t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
        },
        update: function () {
            let e = this.spring;
            const t = this.nodes[0];
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;

            for (let i = 0; i < this.nodes.length; i++) {
                const current = this.nodes[i];
                if (i > 0) {
                    const prev = this.nodes[i - 1];
                    current.vx += (prev.x - current.x) * e;
                    current.vy += (prev.y - current.y) * e;
                    current.vx += prev.vx * E.dampening;
                    current.vy += prev.vy * E.dampening;
                }
                current.vx *= this.friction;
                current.vy *= this.friction;
                current.x += current.vx;
                current.y += current.vy;
                e *= E.tension;
            }
        },
        draw: function () {
            let e, t;
            let n = this.nodes[0].x,
                i = this.nodes[0].y;

            ctx.beginPath();
            ctx.moveTo(n, i);

            for (let a = 1, o = this.nodes.length - 2; a < o; a++) {
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }

            e = this.nodes[this.nodes.length - 2];
            t = this.nodes[this.nodes.length - 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        },
    };

    function onMousemove(e) {
        if (e.touches) {
            pos.x = e.touches[0].pageX;
            pos.y = e.touches[0].pageY;
        } else {
            pos.x = e.clientX;
            pos.y = e.clientY;
        }
        e.preventDefault();
    }

    function render() {
        if (ctx && ctx.running) {
            ctx.globalCompositeOperation = "source-over";
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = "lighter";
            ctx.strokeStyle = "#32CD32";
            ctx.lineWidth = 1;

            for (let i = 0; i < E.trails; i++) {
                lines[i].update();
                lines[i].draw();
            }
            ctx.frame++;
            window.requestAnimationFrame(render);
        }
    }

    function resizeCanvas() {
        if (ctx) {
            ctx.canvas.width = window.innerWidth - 20;
            ctx.canvas.height = window.innerHeight;
        }
    }

    const renderCanvas = function () {
        const canvas = document.getElementById("canvas");
        if (!canvas) return;

        ctx = canvas.getContext("2d");
        ctx.running = true;
        ctx.frame = 1;

        f = new n({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 85,
            frequency: 0.0015,
            offset: 285,
        });

        lines = [];
        for (let i = 0; i < E.trails; i++) {
            lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
        }

        document.addEventListener("mousemove", onMousemove);
        document.addEventListener("touchstart", onMousemove);
        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();
        render();
    };

    useEffect(() => {
        renderCanvas();

        return () => {
            if (ctx) {
                ctx.running = false;
                document.removeEventListener("mousemove", onMousemove);
                document.removeEventListener("touchstart", onMousemove);
                window.removeEventListener("resize", resizeCanvas);
            }
        };
    }, []);
};

export default useCanvasCursor;
