import { Image } from "./Image"
import coneMobile from '../../images/mobile/image-gallery-cone.jpg'
import coneDesktop from '../../images/desktop/image-gallery-cone.jpg'
import milkbottlesMobile from '../../images/mobile/image-gallery-milkbottles.jpg'
import milkbottlesDesktop from '../../images/desktop/image-gallery-milkbottles.jpg'
import orangeDesktop  from '../../images/desktop/image-gallery-orange.jpg'
import orangeMobile  from '../../images/mobile/image-gallery-orange.jpg'
import milkDesktop from '../../images/desktop/image-gallery-milkbottles.jpg'
import milkMobile from '../../images/mobile/image-gallery-milkbottles.jpg'



export const ImagesSection = ()=> {

    return(
        <section className="grid grid-cols-2 sm:flex">
            <Image imgDesktop={coneDesktop} imgMobile={coneMobile}></Image>
            <Image imgDesktop={milkbottlesDesktop} imgMobile={milkbottlesMobile} ></Image>
            <Image imgDesktop={orangeDesktop} imgMobile={orangeMobile} ></Image>
            <Image imgDesktop={milkDesktop} imgMobile={milkMobile} ></Image>
        </section>
    )
}