import FooterImg from '../../images/logo-footer.svg'
import facebookLogo from '../../images/icon-facebook.svg'
import instagramLogo from '../../images/icon-instagram.svg'
import twitterLogo from '../../images/icon-twitter.svg'
import pinteresLogo from '../../images/icon-pinterest.svg'


export const Footer = ()=> {

    return(

        <footer className='h-[350px] bg-Dark-moderate flex justify-center py-14  px-11'>
      
            <div className=' w-[300px] flex flex-col  items-center'>
                <img className='h-[30px]' src={FooterImg}></img>
                <div className='py-10'>
                    <ul className='flex gap-12 text-Dark-desaturated '>
                        <li className='font-Barlow'>About</li>
                        <li className='font-Barlow'>Services</li>
                        <li className='font-Barlow'>Projects</li>
                    </ul>
                </div>

                <div className='flex gap-8 pt-10'>
                    <img src={facebookLogo} ></img>
                    <img src={instagramLogo} ></img>
                    <img src={twitterLogo} ></img>
                    <img src={pinteresLogo} ></img>
                </div>
                
            </div>
        
        
        </footer>
    )
}