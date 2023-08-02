import { Image } from './Image'
import { Text } from './Text'
import { ImageText } from './ImageText'
import yellowImage  from '../../images/mobile/image-transform.jpg'
import yellowImageDesktop from '../../images/desktop/image-transform.jpg'
import glassMobile from '../../images/mobile/image-stand-out.jpg'
import glassDesktop from '../../images/desktop/image-stand-out.jpg'
import photographyDesktop from '../../images/desktop/image-photography.jpg'
import photographyMobile from '../../images/mobile/image-photography.jpg'
import GraphicDesingDesktop from '../../images/desktop/image-graphic-design.jpg'
import GraphicDesingMobile from '../../images/mobile/image-graphic-design.jpg'

export const Services = () => {
  return (
   <section className='sm:grid sm:grid-cols-2'>
    <Image imgMobile={yellowImage} imgDesktop={yellowImageDesktop} order={'order-2'} />
    <Text  title={'Transform you brand'}  button={'learn more'} description={'we are full-service creative agency specializing in helping brands grow fast engage your clients through compelling visuals that do most of the marketing for you'}  color={'Soft-red'} order={'order-1'}/>
    <Image imgMobile={glassMobile} imgDesktop={glassDesktop} order={'order-3'} />
    <Text  title={'stand out to the right audience'}  button={'learn more'} description={'using collaboration formula of desingners,researchers, and copywriters, well build and extend your brand in digital places.'} color={'bg-Yellow'} order={'order-4'}/>
    <ImageText  imageDesktop={GraphicDesingDesktop} imageMobile={GraphicDesingMobile} title={'Graphic Desing'} description={'great desing makes you memorable.We deliver artwork that undercores your brand message and captura potencial clients attention'} order={'order-6'}/>
    <ImageText  imageDesktop={photographyDesktop} imageMobile={photographyMobile} title={'Photography'} description={'increase your credibility by getting the most stunnig high-quality photos that improve your business image '} order={'order-5'}/>
    </section>
  )
}
