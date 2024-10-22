import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className='header'>
			<h1 className='logo'>
				<Link to='/'>DCODELAB</Link>
			</h1>

			<ul className='gnb'>
				<li>
					<Link to='/member'>MEMBER</Link>
				</li>
				<li>
					<Link to='/post'>POST</Link>
				</li>
				<li>
					<Link to='/gallery'>GALLERY</Link>
				</li>
				<li>
					<Link to='/youtube'>YOUTUBUE</Link>
				</li>
				<li>
					<Link to='/contact'>CONTACT</Link>
				</li>
			</ul>
		</header>
	);
}
