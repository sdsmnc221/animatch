import React, { useRef, useEffect, useState } from 'react';

import configs from '../../configs';
import utils from '../../utils';

const Canvas = () => {
	if (utils.hasWindow()) {
		const refCanvas = useRef(null);
		const [ctx, setCtx] = useState(null);
		const [W, setW] = useState(configs.dimensions.W());
		const [H, setH] = useState(configs.dimensions.H());

		const mouse = { x: W / 2, y: H / 2, r: 40 };
		let { x, y, r } = mouse;
		let timer;

		const mouseMove = () => {
			if (ctx) {
				x += ((mouse.x - x) * 0.1) / 2;
				y += (mouse.y - y) * 0.1;
				r += (mouse.r - r) * 0.1;
				const circle = new Path2D();
				circle.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fillStyle = configs.colors.peru;
				ctx.fill(circle);
			}
		};

		const animate = () => {
			if (ctx) {
				window.requestAnimationFrame(animate);

				ctx.globalAlpha = 0.4;
				ctx.resetTransform();
				ctx.clearRect(0, 0, W, H);

				mouseMove();
			}
		};

		const onMouseMove = ({ pageX, pageY }) => {
			mouse.x = pageX;
			mouse.y = pageY;
		};

		const whileHold = () => {
			mouse.r = mouse.r + 20;
		};

		const onMouseDown = () => {
			timer = setInterval(whileHold, 200);
		};

		const onMouseUp = () => {
			mouse.r = 40;
			if (timer) clearInterval(timer);
		};

		const onResize = () => {
			setW(configs.dimensions.W());
			setH(configs.dimensions.H());
		};

		useEffect(() => {
			if (refCanvas.current !== null) {
				const canvas = refCanvas.current;

				canvas.width = W;
				canvas.height = H;

				setCtx(canvas.getContext('2d'));

				animate();

				window.addEventListener('mousemove', onMouseMove);
				window.addEventListener('mousedown', onMouseDown);
				window.addEventListener('mouseup', onMouseUp);
				window.addEventListener('resize', onResize);
			}

			return () => {
				window.removeEventListener('mousemove', onMouseMove);
				window.removeEventListener('mousedown', onMouseDown);
				window.removeEventListener('mouseup', onMouseUp);
				window.removeEventListener('resize', onResize);
			};
		}, [refCanvas.current, W, H]);

		return <canvas ref={refCanvas}></canvas>;
	} else {
		return <></>;
	}
};

export default Canvas;
