import { useRouter } from 'next/router';
import React from 'react';

import styles from './Card.module.css';

export default function Card({ email, id, image, name, phone }) {
  const router = useRouter();

	return (
		<div className={styles.card} onClick={() => router.push(`/cats/${id}`)}>
			<div className={styles['card-header']}>
				<img src={image.url} alt={image.alt} className={styles['card-img']} />
			</div>
			<div>
				<h3>{name}</h3>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
}
