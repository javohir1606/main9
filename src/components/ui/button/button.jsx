import style from './button.module.scss'
export const Button = (children, variant, type="button", statIcon, endIcon, size) =>{
  return <>
   <button className={`${style[variant]} ${style.btn}`} type={type}>
    {statIcon}
    <span>{children}</span>
    {endIcon}
   </button>
  </>
}