import './Card.css'

const Card = ({ quote, getQuote }) => {

    const { id, advice } = quote

    return (
        <div className="card">
            <h5 className="quote-title">Advice #{id}</h5>
            <p className='quote'>
                <blockquote>
                    “{advice}”
                </blockquote>
            </p>
            <div className='separator'>
                <hr />
                <div className='vertical'>
                </div>
                <div className='vertical'>
                </div>
                <hr />
            </div>

            <div className='dice-button' onClick={getQuote}>
                <img src='/images/icon-dice.svg' alt='dice' />
            </div>
        </div>
    )
}

export { Card }