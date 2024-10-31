import Visual from '../components/Visual';
import News from '../components/News';
import Pics from '../components/Pics';
import { useEffect, useState } from 'react';

export default function Home() {
	const [Scroll, setScroll] = useState(0);

	// 윈도우 스크롤시 현재 스크롤되는 거리값을 Scroll상태값에 담아주는 함수 생성
	// 해당 함수를 윈도우 스크롤이벤트 연결
	// 컴포넌트 언마운트시 스크롤이벤트 해체
	// 비주얼 컴포넌트에 스크롤값 전달
	// Visual안쪽에서 전달되는 Scroll값을 h2요소 원하는 스타일 구문에 연동

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
