import { FaGithub } from 'react-icons/fa'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-descr">
                <p>created by Alex Bachurin</p>
                <a href="https://github.com/AlexBachurin/markdown-preview-app" target="_blank">
                    <FaGithub className="footer-icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer