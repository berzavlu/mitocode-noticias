function Card(props) {
  // console.log(props)
  return (
    <div className='card'>
      <div className='card__img'>
        <img src={props.img} />
      </div>
      <div className='card__body'>
        <a href={props.url} target='_blank'>
          {props.title}
        </a>
        <div className='card__body--description'>
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Card
