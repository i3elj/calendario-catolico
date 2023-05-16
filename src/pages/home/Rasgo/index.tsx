import { useEffect } from 'react'

export default function Rasgo({ id }: { id: string }) {
    useEffect(() => {
        const canvas: HTMLCanvasElement = document.getElementById(id) as HTMLCanvasElement
        const h = 75
        const w = window.innerWidth * 3
        canvas.width = w;
        canvas.height = h;

        const M = 4294967296
        const A = 1664525
        const C = 1

        class PSNG {
            Z: number
            next: () => number

            constructor() {
                this.Z = Math.floor(Math.random() * M);

                this.next = () => {
                    this.Z = (A * this.Z + C) % M;
                    return this.Z / M - 0.5;
                }
            }
        }

        function Interpolate(pa: number, pb: number, px: number) {
            const ft = px * Math.PI,
                f = (1 - Math.cos(ft)) * 0.5;
            return pa * (1 - f) + pb * f;
        }

        class Perlin {
            x: number
            amp: number
            wl: number
            fq: number
            psng: PSNG
            a: number
            b: number
            pos: number[]
            width: number

            constructor(amp: number, wl: number, width: number) {
                this.x = 0
                this.amp = amp
                this.wl = 1
                this.fq = 1 / this.wl
                this.psng = new PSNG()
                this.a = this.psng.next()
                this.b = this.psng.next()
                this.pos = []
                this.width = 0
                this.wl = wl
                this.width = width

                while (this.x < this.width) {
                    if (this.x % this.wl === 0) {
                        this.a = this.b;
                        this.b = this.psng.next();
                        this.pos.push(this.a * this.amp);
                    } else {
                        this.pos.push(Interpolate(this.a, this.b, (this.x % this.wl) / this.wl) * this.amp);
                    }
                    this.x++;
                }
            }
        }

        function GenerateNoise(amp: number, wl: number, octaves: number, divisor: number, width: number) {
            const result: Perlin[] = [];
            for (let i = 0; i < octaves; i++) {
                result.push(new Perlin(amp, wl, width));
                amp /= divisor;
                wl /= divisor;
            }
            return result;
        }

        function CombineNoise(pl: Perlin[]) {
            const result: { pos: number[] } = { pos: [] };
            for (let i = 0, total = 0; i < pl[0].pos.length; i++) {
                total = 0
                for (let j = 0; j < pl.length; j++) {
                    total += pl[j].pos[i]
                }
                result.pos.push(total);
            }
            return result;
        }

        function DrawLine(L: { pos: number[] }, color: string) {
            const canvas = document.getElementById(id) as HTMLCanvasElement
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            ctx.beginPath()
            ctx.moveTo(0, h / 2)

            for (let i = 0; i < L.pos.length; i++) {
                ctx.lineTo(i, h / 2 + L.pos[i])
            }

            ctx.lineWidth = 2
            ctx.strokeStyle = color
            ctx.fillStyle = color
            ctx.lineTo(w, h / 2 + 50)
            ctx.lineTo(0, h / 2 + 50)
            ctx.stroke()
            ctx.fill()
            ctx.closePath()
        }

        function Draw(color: string, amp: number, wl: number, octaves: number, divisor: number, width: number) {
            DrawLine(
                CombineNoise(
                    GenerateNoise(amp, wl, octaves, divisor, width)
                ),
                color
            )
        }

        window.addEventListener('resize', () => {
            const canvas = document.getElementById(id) as HTMLCanvasElement
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            Draw("#F8F8F8", 35, 80, 4, 2, window.innerWidth * 2)
            Draw("#FFFFFF", 15, 40, 4, 2, window.innerWidth * 2)
        })

        Draw("#F8F8F8", 35, 80, 4, 2, w)
        Draw("#FFFFFF", 15, 40, 4, 2, w)
    })

    return <canvas id={id} height="75"></canvas>
}
