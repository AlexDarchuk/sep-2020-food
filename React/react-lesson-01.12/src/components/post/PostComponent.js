import React, {Component} from 'react';

import {Link, withRouter} from "react-router-dom";

class PostComponent extends Component {
    render() {
        let {item, match: {url}} = this.props;
        return (
            <div>
                {item.id} - {item.title} - {item.body} - <Link to={`${url}/${item.id}`}>info</Link>

            </div>
        );
    }
}

export default withRouter(PostComponent);