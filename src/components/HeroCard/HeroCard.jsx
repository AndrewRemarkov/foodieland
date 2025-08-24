import './HeroCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/index.js'
import { Image } from 'minista'
import AuthorCard from '@/components/AuthorCard/index.js'
import Button from '@/components/Button/index.js'

export default (props) => {
  const {
    className,
    category,
    title,
    TitleTag = 'h1',
    description,
    tags = [],
    author,
    imgSrc,
  } = props

  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <header className="hero-card__category">
          <Image className="hero-card__category-image" src={category.imgSrc} />
          <span>{category.label}</span>
        </header>
        <TitleTag className="hero-card__title">{title}</TitleTag>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        <div className="hero-card__tags">
          <ul className="hero-card__tags-list">
            {tags.map(({ iconName, label }) => (
              <li className="hero-card__tags-item" key={label}>
                <Icon name={iconName} hasFill />
                <span className="hero-card__tags-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <footer className="hero-card__footer">
          <AuthorCard className="hero-card__author" {...author} />
          <Button className="hero-card__button" href="/">
            <span>View Recipes</span>
            <Icon name="play" />
          </Button>
        </footer>
      </div>
      <Image
        className="hero-card__image"
        src={imgSrc}
        width={660}
        height={640}
      />
    </div>
  )
}
