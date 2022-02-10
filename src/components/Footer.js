import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className="footer-container">
            <h1>Rishi Mungia</h1>
            <p>This website was bootstrapped with GatsbyJS.</p>

            <div className="copyright-container">
                <p>© {new Date().getFullYear()} Rishi Mungia. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
