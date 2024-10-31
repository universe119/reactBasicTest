import Visual from '../components/Visual';
import News from '../components/News';
import Pics from '../components/Pics';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
	const [Scroll, setScroll] = useState(0);
	const ref_wrap = useRef(null);
	const ref_posArr = useRef([]);

	// 스크롤 이벤트 핸들러 함수
	const handleScroll = () => {
		setScroll(window.scrollY); // 현재 스크롤 위치를 상태에 저장
	};

	const handleResize = () => {
		ref_posArr.current = [];
		for (const el of ref_wrap.current.children) {
			ref_posArr.current.push(el.offsetTop);
		}
		// console.log(ref_posArr.current);
	};

	// 컴포넌트 마운트 시 이벤트 추가 및 언마운트 시 제거
	useEffect(() => {
		window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 연결
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll); // 언마운트 시 스크롤 이벤트 제거
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div ref={ref_wrap}>
			<Visual Scroll={Scroll}></Visual>
			<Pics Scroll={Scroll} pos={ref_posArr.current[1]}></Pics>
			<News Scroll={Scroll} pos={ref_posArr.current[2]}></News>
		</div>
	);
}
