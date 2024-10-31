export default function Visual({ Scroll }) {
	// 미션 - 박스 1이 Y축 기준으로 입체적으로 회전하면서 사라지도록 처리
	const style_frame = {
		// background: `rgb(${Math.min(Scroll / 10, 230)},${Math.max(210 - Scroll / 10, 0)},${230})`
		//만약 수치 값이 최대가 255인대 넘어가면 에러가 날 수 있으니 삼항연산자로 처리해야한다
		// background: `rgb(${Scroll / 10 <= 230 ? Scroll / 10 : 230}, ${
		// 	210 - Scroll / 10 >= 0 ? 210 - Scroll / 10 : 50
		// }, 230)`
		backgroundColor: `rgb(${Scroll >= 200 ? 200 : 170 + Scroll / 10}, ${210 - Scroll / 10}, ${230})`
	};
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
		<div className='visual' style={style_frame}>
			<h2 style={style_h2}>ALPACO</h2>
			<div className='box1' style={box1St}></div>
		</div>
	);
}
