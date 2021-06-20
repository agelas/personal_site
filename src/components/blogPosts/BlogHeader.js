import React from "react"
import {Row, Col, Text} from 'atomize';

function BlogHeader(props) {
    return(
       
        <Row>
            <Col size = "10" d = "flex" h = "8vw" bg = "headerBG">
                <Text
                    textColor = "gray700"
                    textWeight = "300"
                    fontFamily = "secondary"
                    textSize = "display2"
                    p = {{t:"3vw", l:"10vw"}}
                >
                    Hi {props.title}
                </Text>
            </Col>
            <Col size = "2" bg = "white">
            
            </Col>
        </Row>
        
    );
}; export default BlogHeader