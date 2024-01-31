import Link from "next/link";
import styles from "@/components/Navbar/Navbar.module.css";

const Navbar = () => {
	return (
		<ul className={`flex items-center justify-end gap-4 text-white ${styles.navbarItems}`}>
			<li className={styles.navItem}>
				<Link href="/" className={styles.navLink}>
					Home
				</Link>
			</li>
			<li className={styles.navItem}>
				<Link href="/listings" className={styles.navLink}>
					Listings
				</Link>
			</li>
			<li className={styles.navItem}>
				<Link href="/open-houses" className={styles.navLink}>
					Open Houses
				</Link>
			</li>
			<li className={styles.navItem}>
				<Link href="/about" className={styles.navLink}>
					About
				</Link>
			</li>
			<li className={styles.navItem}>
				<Link href="/contact" className={styles.navLink}>
					Contact
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
