import Visual from '../components/Visual';
import News from '../components/News';
import Pics from '../components/Pics';
import { useEffect, useState } from 'react';

export default function Home() {
	const [Scroll, setScroll] = useState(0);
	console.log(Scroll);

	// 스크롤 이벤트 핸들러 함수
	const handleScroll = () => {
		setScroll(window.scrollY); // 현재 스크롤 위치를 상태에 저장
	};

	// 컴포넌트 마운트 시 이벤트 추가 및 언마운트 시 제거
	useEffect(() => {
		window.addEventListener('scroll', handleScroll); // 스크롤 이벤트 연결
		return () => {
			window.removeEventListener('scroll', handleScroll); // 언마운트 시 스크롤 이벤트 제거
		};
	}, []);

	return (
		<>
			<Visual Scroll={Scroll}></Visual>
			<News Scroll={Scroll}></News>
			<Pics Scroll={Scroll}></Pics>
		</>
	);
}
