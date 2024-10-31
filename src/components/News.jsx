export default function News({ Scroll, pos }) {
	const currentScroll = Scroll - pos || 0;

	const style_h2 = {
		left: currentScroll * 6
	};
	const style_h3 = { transform: `translateX(${currentScroll * 1.5}px) ` };

	return (
		<section className='news'>
			<h2 style={style_h2}>POST</h2>
			<h3 style={style_h3}>INFORMATION</h3>

			<article></article>
			<article></article>
			<article></article>
		</section>
	);
}
