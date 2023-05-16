import { useEffect } from 'react'

export default function Rasgo({ id }: { id: string }) {
    useEffect(() => {
        var canvas: HTMLCanvasElement = document.getElementById(id) as HTMLCanvasElement
        var h = 75
        var w = window.innerWidth * 3
        canvas.width = w;
        canvas.height = h;

        var M = 4294967296
        var A = 1664525
        var C = 1

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
            var ft = px * Math.PI,
                f = (1 - Math.cos(ft)) * 0.5;
            return pa * (1 - f) + pb * f;
        }

        class Perlin {
            x: number
            amp: any
            wl: number
            fq: number
            psng: PSNG
            a: number
            b: number
            pos: number[]
            width: number

            constructor(amp: any, wl: any, width: any) {
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

        function GenerateNoise(amp: number, wl: number, octaves: number, divisor: number, width: any) {
            var result = [];
            for (var i = 0; i < octaves; i++) {
                result.push(new Perlin(amp, wl, width));
                amp /= divisor;
                wl /= divisor;
            }
            return result;
        }

        function CombineNoise(pl: string | any[]) {
            var result: { pos: number[] } = { pos: [] };
            var total = 0
            for (var i = 0, total: number = 0, j = 0; i < pl[0].pos.length; i++) {
                total = 0
                for (var j = 0; j < pl.length; j++) {
                    total += pl[j].pos[i]
                }
                result.pos.push(total);
            }
            return result;
        }

        function DrawLine(L: { pos: any }, color: any) {
            let canvas = document.getElementById(id) as HTMLCanvasElement
            let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            ctx.beginPath()
            ctx.moveTo(0, h / 2)

            for (var i = 0; i < L.pos.length; i++) {
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
            let canvas = document.getElementById(id) as HTMLCanvasElement
            let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            Draw("#F8F8F8", 35, 80, 4, 2, window.innerWidth * 2)
            Draw("#FFFFFF", 15, 40, 4, 2, window.innerWidth * 2)
        })

        Draw("#F8F8F8", 35, 80, 4, 2, w)
        Draw("#FFFFFF", 15, 40, 4, 2, w)
    })

    return <canvas id={id} height="75"></canvas>
}
