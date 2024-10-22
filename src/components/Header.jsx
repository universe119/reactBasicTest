export default function Header() {
	return (
		<header className='header'>
			<h1 className='logo'>
				<a href='/'>DCODELAB</a>
			</h1>

			<ul className='gnb'>
				<li>
					<a href='/members'>MEMBERS</a>
				</li>
				<li>
					<a href='/post'>POST</a>
				</li>
				<li>
					<a href='/gallery'>GALLERY</a>
				</li>
				<li>
					<a href='/youtube'>YOUTUBUE</a>
				</li>
				<li>
					<a href='/contact'>CONTACT</a>
				</li>
			</ul>
		</header>
	);
}
