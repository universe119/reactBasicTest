import Layout from '../components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Post() {
	const [Posts, setPosts] = useState([]);
	//검색어가 담길 state
	const [SearchText, setSearchText] = useState('');

	//검색폼에서 submit 이벤트 발생시 input요소의 입력값으로 SearchText상태 변경
	const handleSubmit = e => {
		e.preventDefault();
		setSearchText(e.target[0].value);
	};

	useEffect(() => {
		axios.get('http://localhost:8000/posts').then(res => {
			console.log(res.data);
			setPosts(res.data);
		});
	}, []);

	// SearchText 상태값 변경시마다 해당 상태값으로 GET요청 처리
	useEffect(() => {
		if (!SearchText) return;
		axios
			.get(`http://localhost:8000/posts-search/?search=${SearchText}`)
			.then(res => {
				console.log(res.data);
				setPosts(res.data);
			})
			.catch(err => console.log(err.message));
	}, [SearchText]);

	return (
		<Layout title='Post'>
			<form className='searchBox' onSubmit={handleSubmit}>
				<input type='text' />
				<button>Search</button>
			</form>

			<button>
				<Link to='/post-add'>Write Post</Link>
			</button>

			{Posts?.map(post => {
				return (
					<h3 key={post.id}>
						<Link to={`/post/${post.slug}`}>{post.title}</Link>
					</h3>
				);
			})}
		</Layout>
	);
}
