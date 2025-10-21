export type Beer = {
  image: string
  name: string
  abv: string
  volume: string
  price: number
  available: boolean
}

const BeerCard = (props: Beer) => {
  const { image, name, abv, volume, price, available } = props

  return (
    <div className='beerCard'>
      <img src={image} alt={name} />
      <h2>{name} {abv}%, {volume && <p>{volume}</p>}</h2>
      {price !== undefined && <p>{price} Ft</p>}
      <p>{available ? <p className='available'>Raktáron</p> : <p className='notAvailable'>Nincs raktáron</p>}</p>
    </div>
  )
}

export default BeerCard