import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Member from './pages/Member';
import Post from './pages/Post';
import Youtube from './pages/Youtube';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import PostAdd from './pages/PostAdd';
import PostEdit from './pages/PostEdit';

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/member' element={<Member />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/youtube' element={<Youtube />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/post' element={<Post />} />
				<Route path='/post/:slug' element={<PostDetail />} />
				<Route path='/post-add' element={<PostAdd />} />
				<Route path='/post-edit/:slug' element={<PostEdit />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
