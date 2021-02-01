import React, { Component } from 'react';

class Demo extends Component {

    const title = "前端js框架列表"
    const data = ["Angular", "React", "Vue"]
    const myId = "xyz"

    const VDOM = (
        <div>
            <h1 className="ti" id={myId}>
                {title}
            </h1>
            <ul>
                {
                    data.map((item, index) => {
                        return <li key={index}> {item}</li>
                    })
                }
            </ul>
        </div>
    )
    ReactDOM.render(VDOM, document.getElementById("list"));
            }

}

export default Demo;