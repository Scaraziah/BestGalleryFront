import { Container, Row, Image, Col} from 'react-bootstrap'


function ProfilePic() {

    return(
        <Container>
        <Row>
            <Col xs={6} md={4}>

{/********LOGIC FOR PROFILE PIC HERE ********/ }
            <Image 
            src="https://i.ibb.co/Yf5gZ3N/Profile-Pic.webp"  roundedCircle width= "250" />
            </Col>
            
        </Row>
        </Container>
    );
}

export default ProfilePic;