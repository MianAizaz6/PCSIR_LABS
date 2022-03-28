import React from 'react'
import ListItems from './ListItems'
import "../../assets/scss/hoverlist.scss"

function HoverList({subHoverList, children, topLevel, dataArray}) {
    // const [subHover, setSubHover] = useState(false);

    return (
        <>
                <ul className={topLevel ? "hover__list" : "hover__list hover__list-right"}>
                    {
                        dataArray.map(item => (

                            <ListItems data={item}>
                                {
                                    item.hoverList && (
                                        <HoverList dataArray={item.hoverListArray}/>
                                    )
                                }
                            </ListItems>
                        ))
                    }
                </ul>
        </>
    )
}

export default HoverList