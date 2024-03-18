import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.css";
import { LuFacebook, LuTwitter, LuInstagram, LuLinkedin } from "react-icons/lu";

const Navbar = () => {
	return (
		<header className={styles.header}>
			<div className={styles.sectionWrapper}>
				<div className={styles.headerWrapper}>
					<div className="z-[10] relative transition-all">
						<div className="relative h-20 w-60">
							<Link href="/">
								<Image
									src="/kwlogo_trans.webp"
									alt="Keller Williams Logo"
									fill
									className="object-contain"
								/>
							</Link>
						</div>
					</div>
					<nav>
						<div>
							<ul className="flex flex-row">
								<li className={styles.menuItem}>
									<Link href="/" className={styles.menuItemLink}>
										Home
									</Link>
								</li>
								<li className={styles.menuItem}>
									<Link href="/listings" className={styles.menuItemLink}>
										Listings
									</Link>
								</li>
								<li className={styles.menuItem}>
									<Link href="/about" className={styles.menuItemLink}>
										About
									</Link>
								</li>
								<li className={styles.menuItem}>
									<Link href="/blog" className={styles.menuItemLink}>
										Blog
									</Link>
								</li>
								<li className={styles.menuItem}>
									<Link href="/contact" className={styles.menuItemLink}>
										Get in Touch
									</Link>
								</li>
							</ul>
						</div>
						<div className="hidden">
							<Link href="#">
								<LuFacebook className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuTwitter className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuInstagram className="w-8 h-8" />
							</Link>
							<Link href="#">
								<LuLinkedin className="w-8 h-8" />
							</Link>
						</div>
					</nav>
					<button className={styles.hamburgerButton}></button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
