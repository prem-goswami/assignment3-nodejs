import './index.css'

const ItemCard = props => {
  const {imageDetails, setActiveImageId, renderRandomImage} = props
  const {thumbnailUrl, category, id} = imageDetails

  const onClickCardImage = () => {
    setActiveImageId(id)
  }

  return (
    <li className="imagesList">
      <button type="button" className="butt" onClick={onClickCardImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="imageSizing" />
      </button>
    </li>
  )
}

export default ItemCard
