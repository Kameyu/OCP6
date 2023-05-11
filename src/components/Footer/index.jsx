import '../../utils/styles/footer.css'
import FooterLogo from '../../assets/footer_logo.svg'

function Footer() {
	return (
		<div className='footer'>
			<img src={FooterLogo} alt="Logo Kasa"/>
			<p>© 2020 Kasa. All rights reserved</p>
		</div>
	)
}

export default Footer