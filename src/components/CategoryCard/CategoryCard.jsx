import './CategoryCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'

export default (props) => {
  const {
    className,
    title,
    imgSrc,
    gradient,
  } = props

  return (
    <article
      className={clsx('category-card', className)}
      style={{
        backgroundImage: gradient,
      }}
    >
      <Image className="category-card__image" src={imgSrc} />
      <h3 className="category-card__title h6">{title}</h3>
    </article>
  )
}
