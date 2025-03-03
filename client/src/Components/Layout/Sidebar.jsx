import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const list = [
        { id: 1, name: 'Dashboard', link: '/home' },
        { id: 2, name: 'Services', link: '/dashboard/admin/services' },
        { id: 3, name: 'Plans', link: '/home' },
        //... more items as needed
    ]
    return (
        <>
            <div className='flex justify-center items-center flex-col bg-black'>
                <h1 className='text-blue-700 font-medium'>Sidebar</h1>
                <ul className='flex items-center justify-center flex-col text-white'>
                    {list.map((l) => (
                        <li key={l.id}><Link to={l.link}>{l.name}</Link></li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Sidebar