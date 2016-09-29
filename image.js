var React = require('react');

var Image = function(props) {
    return (
        <div className="gallery-image">
            <img src={props.url} alt={props.description} />
            <p>{props.description}</p>
        </div>
    );
};

module.exports = Image;