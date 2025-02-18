import React from 'react'
import Link from 'next/link'

const Page = () => {
    const users = ['user1', 'user2', 'user3', 'user4', 'user5']

    return (
        <div>
            {users.map((user, index) => (
                <Link key={index} href={`/dashboard/users/${index}`}>
                    <p className='mt-3'>{user}</p>
                </Link>
            ))}
        </div>
    )
}

export default Page