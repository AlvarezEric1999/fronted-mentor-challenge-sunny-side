 
 
 export const ImageText = ({imageDesktop, imageMobile, title, description,order }) => {

    return (

        <div className={`${order} relative`}>
        
            <picture>
                <source  media='(max-width:639px)'  srcSet={imageMobile}></source>
                <source  media='(min-width:641px)'  srcSet={imageDesktop}></source>
            
                <img src={imageMobile}></img>
            </picture>
        
        
            <div className="absolute sm:top-[220px] md:top-[180px]  md:w-[350px]  lg:top-[250px] xl:top-[390px] top-[400px] left-0  right-0 mx-auto sm:w-[320px] w-[300px] text-center ">
                <h2 className="sm:pb-4 font-Fraunces text-[1.5rem]">{title}</h2>
                <p className="font-Barlow">{description}</p>
        
            </div>
        
        
        </div>
    )

 }