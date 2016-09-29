var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();

var Image = require('../image');

var Gallery = require('../gallery');


describe('Image component', function() {
    it('Renders the image and description',  function() {
        var url = "http://www.example.com/image.png";
        var description = "Example description";

        var renderer = TestUtils.createRenderer();
        renderer.render(<Image url={url} description={description} />);
        var result = renderer.getRenderOutput();
        result.props.className.should.equal('gallery-image');
        console.log(result);
        

        var img = result.props.children[0];
        img.type.should.equal('img');
        img.props.src.should.equal(url);
        img.props.alt.should.equal(description);
        console.log(img);

        var p = result.props.children[1];
        p.type.should.equal('p');
        p.props.children.should.equal(description);
        console.log(p);
    });
});

