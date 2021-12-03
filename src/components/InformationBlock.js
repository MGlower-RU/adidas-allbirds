import '../styles/information-block.scss'

export default function InformationBlock({
  img,
  title,
  paragraph,
  buttons,
  styles
}) {

  return (
    <div
      style={styles?.main}
      className="information-block"
    >
      <div
        style={styles?.image}
        className="information-block__image"
      >
        <img src={img} alt="" />
      </div>
      <div className="information-block__text">
        <h2
          style={styles?.title}
        >
          {title}
        </h2>
        <p
          style={styles?.para}
        >
          {paragraph}
        </p>
        <div
          className="information-block__text__links"
          style={styles?.links}
        >
          {
            buttons.map(({link, name}) => {
              return (
                <a
                  key={name}
                  href={link}
                  className='big-button'
                  style={styles?.link}
                >
                  {name}
                </a>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}