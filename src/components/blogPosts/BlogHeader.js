import React from "react";
import {Row, Col, Text} from 'atomize';
// import StripeCorner from '../../Pictures/BlogStripeCorner.png'

function BlogHeader(props) {
    return(
       
        <Row w = "100vw">
            <Col size = "10" d = "flex" h = "8vw" bg = "headerBG">
                <Text
                    textColor = "gray700"
                    textWeight = "300"
                    fontFamily = "secondary"
                    textSize = "display2"
                    p = {{t:"4vw", l:"10vw"}}
                >
                    {props.title}
                </Text>
            </Col>
            <Col size = "2" bg = "headerBG">
            
            </Col>
        </Row>
        
    );
}; export default BlogHeader