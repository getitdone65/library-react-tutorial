import React from 'react'
import { Link } from 'react-router-dom';

 const Explore = () => {
  return (
    <section id="explorer">
        <div className="coontainer">
            <div className="row row__column">
                <h2>
                   Explore more <span className="purple">Books</span>
                </h2>
                <Link to="/books">
                    <button className="btn">Explore books</button>
                </Link>
            </div>
        </div>
    </section>
  )
}


export default Explore;