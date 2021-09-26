import React from 'react'
import { Link } from 'react-router-dom'
const SingleFollower = ({ avatar_url, login, html_url }) => {
    return (
        <article className='card'>
            <img src={avatar_url} alt={login} />
            <h4>{login}</h4>
            <Link to={{ pathname: `${html_url}` }} target='_blank' className="btn">
                View profile
            </Link>
        </article>
    )
}

export default SingleFollower
