import anime from 'animejs';

export const hoverEnterAnimation = (element) => {
	anime({
		targets: element,
		scale: 1.1,
		duration: 100,
		easing: 'linear',
	});
};

export const hoverLeaveAnimation = (element) => {
	anime({
		targets: element,
		scale: 1,
		duration: 100,
		easing: 'linear',
	});
};
