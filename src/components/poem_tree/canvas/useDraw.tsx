import { RefObject, useEffect } from 'react';

export const useDraw = (ref: RefObject<HTMLCanvasElement>, width: number, height: number) => {
    const length = window.innerHeight * 0.25;
    let curve1: number = Math.random() * 15 + 10;
    let curve2: number = Math.random() * 16 + 9;

    useEffect(() => {
        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas!.getContext('2d');
            drawTree(ctx!, width / 2, height, length, 0, 20, 'blue', 'green');
        }
    }, []);

    function drawTree(
        ctx: CanvasRenderingContext2D,
        startX: number,
        startY: number,
        len: number,
        angle: number,
        branchWidth: number = 20,
        color1: string = 'blue',
        color2: string = 'green'
    ) {
        ctx.beginPath();
        ctx!.save();
        ctx!.strokeStyle = color1;
        ctx!.fillStyle = color2;
        ctx!.shadowBlur = 3;
        ctx!.shadowColor = 'black';

        let coinFlip: boolean = Math.floor(Math.random() * 10) > 5;

        ctx!.lineWidth = branchWidth;

        ctx!.translate(startX, startY); // move canvas
        ctx!.rotate(angle * (Math.PI / 180)); // rotate based on current angle
        ctx!.moveTo(0, 0); // move canvas

        if (angle > 0)
            ctx!.bezierCurveTo(
                coinFlip ? curve1 : curve2 * 0.5,
                -len / 2,
                coinFlip ? curve2 : curve1 * 0.5,
                -len / 2,
                0,
                -len
            );
        else
            ctx!.bezierCurveTo(
                coinFlip ? curve1 : curve2 * 0.5,
                -len / 2,
                -coinFlip ? curve1 : curve2 * 0.48,
                -len / 2,
                0,
                -len
            );

        ctx!.stroke(); // draw a simple line

        if (len < 6) {
            ctx!.beginPath();
            ctx!.arc(0, -len, 10, 0, Math.PI / 2);
            ctx!.fill();
            ctx!.restore();
            return;
        }

        // len*.75 makes the length 25% shorter each iteration
        drawTree(ctx!, 0, -len, len * 0.75, angle + curve1, branchWidth * 0.76); // the angle changes how the branches wrap around the previous branch
        drawTree(ctx!, 0, -len, len * 0.76, angle - curve2, branchWidth * 0.8);

        ctx!.restore(); // puts canvas back to original position
    }
};
