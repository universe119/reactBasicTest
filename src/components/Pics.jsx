export default function Pics({ Scroll, pos }) {
	const currentScroll = Scroll - pos || 0;

	// 스크롤값이 현재 섹션에 도달하는 순간 position을 fixed로 현재 세로위치값에 프레임 고정처리
	const style_inner = {
		position: Scroll >= pos ? 'fixed' : 'relative',
		top: 0,
		left: 0
	};
	// 제목도 위와 마찬가지로 세로위치값 고정
	const style_h2 = {
		position: Scroll >= pos ? 'fixed' : 'absolute',
		top: 200
	};
	// 고정된 프레임 안쪽에서 ul을 왼쪽으로 이동 (가로로 스크롤되는 것 같은 착시 효과)
	const style_ul = {
		marginLeft: -currentScroll
	};

	return (
		<section className='pics'>
			<h2 style={style_h2}>Gallery Preview</h2>
			<div style={style_inner} className='inner'>
				<ul style={style_ul}>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</section>
	);
}

/*
	미션 - 스크롤이 해당 영역 도달시 가로로 움직이는 것처럼 보이게 처리 
	2시 30분까지 
*/
