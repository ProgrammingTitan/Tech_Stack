import React from 'react' ;
import './Components.css' ;


// Props
// Section ""
// Widget Main Child {}
// Widget Side Children []
// Headline Children []

export default function WidgetHeadline(props) {
    console.log(props)
    return (
        <div className="widgetheadline">
            <h1>{props.section}</h1>
            <div className="widgetheadline-row">
                <div className="widgetheadline-col-1">
                    <div className="widgetheadline-main-image">
                        <a href={`${props.children["0"].link}`}>
                        <img src={`${props.children["0"].media}`}/>
                        <h2>{`${props.children["0"].title}`}</h2>
                        </a>
                    </div>
                    <div className = "widgetheadline-under-image">
                        <div className="widgetheadline-under-image-indie">
                        <a href={`${props.children["1"].link}`}>
                            <img src={`${props.children["1"].media}`}/>
                            <h2>{`${props.children["1"].title}`}</h2>
                            </a>
                        </div>
                        <div className="widgetheadline-under-image-indie">
                        <a href={`${props.children["2"].link}`}>
                        <img src={`${props.children["2"].media}`}/>
                        <h2>{`${props.children["2"].title}`}</h2>
                        </a>
                        </div>
                        <div className="widgetheadline-under-image-indie">
                        <a href={`${props.children["3"].link}`}>
                        <img src={`${props.children["3"].media}`}/>
                        <h2>{`${props.children["3"].title}`}</h2>
                        </a>
                        </div>
                    </div>
                </div>    
                <div className="widgetheadline-col-2">
                    <div className="headlinewidget-headline-list">
                    <h4>Top {props.section} Headlines</h4>
                    <ul>
                        
                        {props.headlines.map((child,index) =>
                        
                            <li><a href={child.link}>
                                {child.title}
                                </a></li>
                        )}
                    </ul>
                    </div>
                </div>    
            </div>
        </div>
    )
}
