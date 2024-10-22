import Footer from './components/Footer';
import Header from './components/Header';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Member from './pages/Member';
import Post from './pages/Post';
import Youtube from './pages/Youtube';

function App() {
	return (
		<>
			<Header />
			<Member />
			<Gallery />
			<Youtube />
			<Contact />
			<Post />
			<Footer />
		</>
	);
}

export default App;
