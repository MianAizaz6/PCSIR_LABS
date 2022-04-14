import React from 'react'
import ListItems from './ListItems'
import "../../assets/scss/hoverlist.scss"

function HoverList({dataArray}) {
    // const [subHover, setSubHover] = useState(false);

    return (
        <>
                <ul className={"hover__list"}>
                    {
                        dataArray.map(item => (
                            <ListItems content={item} link="about us"/>
                        ))
                    }
                </ul>
        </>
    )
}

export default HoverList