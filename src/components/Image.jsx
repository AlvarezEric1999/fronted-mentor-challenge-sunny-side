

export const Image = ({imgMobile , imgDesktop,order}) => {
  return (
   <picture className={order}>
    <source  media='(max-width:639px)' srcSet={imgMobile} ></source>
    <source  media='(min-width:641px)' srcSet={imgDesktop} ></source>
        <img src={imgMobile} ></img>
    </picture>
  )
}
