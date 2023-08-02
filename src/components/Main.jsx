
import desktop from '../../images/desktop/image-header.jpg'
import mobile from '../../images/mobile/image-header.jpg'
import arrow from '../../images/icon-arrow-down.svg'

export const Main = () => {
  return (
    <section>
    
    <picture>
        <source media='(max-width:640px )' srcSet={mobile}></source>
        <source media='(min-width:641px )' srcSet={desktop}></source>
        <img src=''></img>
        <p className='absolute font-Fraunces text-[40px] tracking-[6.25px] uppercase w-[327px] 
        top-[144px]  left-0 right-0 mx-auto text-center sm:w-[600px] text-white'>we are creatives</p>
        
        </picture>
        
        <img src={arrow} className='absolute top-[300px] left-0 right-0 mx-auto '  ></img>
    

        
    </section>
  )
}

 