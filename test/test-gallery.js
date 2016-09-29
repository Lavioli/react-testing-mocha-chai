var React = require("react");
var TestUtils = require("react-addons-test-utils");
var should = require("chai").should();
var Gallery = require("../gallery");

describe('Gallery component', function(){
    var url = "http://www.example.com/gallery";
    var description = "Example description";
    var images = [
        {
            url: url,
            description: description
        }
    ];
        
    it('container has the correct class', function(){ 
        var renderer = TestUtils.createRenderer();
        renderer.render(<Gallery images={images}/>);
        var result = renderer.getRenderOutput();
        //console.log(result.props.children[0].props.url);
        result.props.className.should.equal('gallery');
        result.props.children.length.should.equal(1);
        result.props.children[0].props.url.should.equal(url);
        result.props.children[0].props.description.should.equal(description);
    }); 
    
    //it('renders the correct number of images and each image has the correct props set');
    
});