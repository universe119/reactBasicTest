import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

export default function PostDetail() {
	const { slug } = useParams();
	return (
		<Layout title='Post Detail'>
			<h3>{slug}</h3>
		</Layout>
	);
}
