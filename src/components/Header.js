import React from "react"
import { Link } from "gatsby"

import styles from "../styles/header.module.scss"

const Header = () => {
    return (
        <div className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </div>
    )
}

export default Header
