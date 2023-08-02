import { TestimonialsItems } from "./TestimonialItems"
import EmiliImage from '../../images/image-emily.jpg'
import JennieImage from '../../images/image-jennie.jpg'
import ThomasImage from '../../images/image-thomas.jpg'

 export const Testimonials = ()=>{
    return(

<section className="pt-20  flex  flex-col justify-center items-center">
    <h2 className="font-Fraunces text-[1rem] ">CLIENT TESTIMONIALS</h2>
    
    <div className="flex flex-col justify-center md:flex-row gap-6 lg:gap-8 items-center py-[60px]">
    <TestimonialsItems image={EmiliImage} subtitle="Marketing Director" description="we put our trust in sunnyside and they delivered ,making sure our needs were met and dealines were always hit " title={'Emily R.'} ></TestimonialsItems>
    <TestimonialsItems image={ThomasImage} subtitle="Chief Operating Officer" description="SunnySides`s entusiasm coupled with their keen interest in our brand`s success made it a satisfaying and enjoyable experience" title={'Thomas S.'} ></TestimonialsItems>
    <TestimonialsItems image={ JennieImage} subtitle="Business Owner" description="Incredible end results! Our sales increased over 400% when we worked with SunnySide. Highly recommended!" title={'Jennie F.'} ></TestimonialsItems>
    </div>

</section>


    )
 }