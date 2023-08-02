export const TestimonialsItems = ({image,description,title,subtitle})=> {
    return(
        <article className="w-[300px] md:w-[230px] py-10 flex  text-center flex-col justify-center items-center  ">
            <img className="rounded-full w-[60px]" src={image}></img>
            <p className=" font-Barlow py-8 md:text-[14px]">{description}</p>
            <h2 className="font-Fraunces">{title}</h2>
            <p className="text-[12px] font-Barlow">{subtitle}</p>
        </article>
    )
}