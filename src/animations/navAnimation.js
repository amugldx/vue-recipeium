import anime from 'animejs';

export const navBurgerAnimation = (element, x1, y1, x2, y2, tansl) => {
	anime({
		targets: element,
		x1: x1,
		y1: y1,
		x2: x2,
		y2: y2,
		translateX: tansl,
		duration: 1000,
	});
};
