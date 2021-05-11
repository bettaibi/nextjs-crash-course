import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
    
    return (
        <div className = "not-found">
            <h4>Ooops, This page cannot be found</h4>
            <small>This is a custom 404 page</small>
            <p>
                <span>Back to The  </span>
                <Link href="/">
                    Home page
                </Link>
            </p>
        </div>
    )
}

export default NotFoundPage
