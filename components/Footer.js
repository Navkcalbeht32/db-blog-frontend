
const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <footer>
            <div class="footer-wrapper">
                <div class="footer-logos">
                    <img src="#" alt=""></img>
                </div>
                <div class="footer-copyright">
                
                    Created by Alex Sumoski © {date} <br/> 
                    
                    <div><a href="https://www.flaticon.com/authors/iconixar" title="iconixar"></a>Icons from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </div>
            </div>
        </footer>
        
    )
}

export default Footer