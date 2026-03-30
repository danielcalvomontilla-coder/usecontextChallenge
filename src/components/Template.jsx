export const Template = ({title, img, color}) => {
    return (
         <>
        <div className={color}>
           <h1>{title}</h1>
           <img src={img} alt={title} />
        </div>
         </>
    )

}