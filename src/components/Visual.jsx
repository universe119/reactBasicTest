export default function Visual({ Scroll }) {
	// 미션2 - 제목요소가 확대되면서 완전 투명해지도록 스크롤값 연동 (scale과 opacity로)

	// 강사님 주석 - 아래와 같이 스크롤 값을 연동하면 Scroll초기값이 0이 기존 scss스타일을 덮어쓰기 하기 때문에 초기 위치가 틀어짐

	// 미션1 - 현재 위치에서 스크롤이 되면 오른쪽으로 움직이도록 처리 (transform사용)

	// 내 주석 - 기존 스타일에 있는 값 보다(left랑 top이있는 상태인데)스크립트가 우선순위라서 여기 style_h2가 먼저 먹음

	const style_h2 = {
		transform: `translateX(${Scroll}px) translateY(${Scroll}px) rotate(${Scroll * 2}deg) scale(${1 + Scroll / 400})`,
		opacity: `${1 - Scroll / 400}`
	};

	return (
		<div className='visual'>
			<h2 style={style_h2}>ALPACO</h2>
		</div>
	);
}
