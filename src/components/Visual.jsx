export default function Visual({ Scroll }) {
	// 미션 - 박스 1이 Y축 기준으로 입체적으로 회전하면서 사라지도록 처리
	const style_h2 = {
		transform: `translateX(${Scroll}px) translateY(${Scroll}px) rotate(${Scroll * 2}deg) scale(${1 + Scroll / 400})`,
		opacity: `${1 - Scroll / 400}`
	};

	const box1St = {
		transform: `rotateY(${Scroll}deg)`,
		opacity: 1 - Scroll / 800,
		background: `rgb(${50 + Scroll * 0.2},${50},${50})`
	};

	return (
		<div className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
			<div className='box1' style={box1St}></div>
		</div>
	);
}
