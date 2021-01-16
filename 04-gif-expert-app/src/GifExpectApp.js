import React, { useState } from 'react'
import { AddCategoriy } from './components/AddCategoriy'

export const GifExpectApp = () => {

    const [categories, setCategories] = useState(['item 1', 'item 2', 'item 3'])

    return (
        <>
            <h2>GifExpectApp</h2>
            <AddCategoriy setCategories={setCategories} />
            <hr />
            {
                <ol>
                    {
                        categories.map(category => {
                            return <li key={category}> {category}</li>
                        })
                    }
                </ol>
            }
        </>
    )
}
