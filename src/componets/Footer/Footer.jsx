import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <>
        <footer>
            <div className="rrss">
                <a id="facebook" target="_blank" href="https://www.facebook.com">
                    <i className="fa-brands fa-facebook"></i></a>
                <a id="instagram" target="_blank" href="https://www.instagram.com/">
                    <i className="fa-brands fa-instagram"></i>
                </a>
                <a id="whatsapp" target="_blank" href="https://www.whatsapp.com/">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    </>
  )
}

export default Footer