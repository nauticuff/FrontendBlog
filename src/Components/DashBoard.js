import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Modal, Form, Accordion, ListGroup } from 'react-bootstrap';
import { checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem } from '../Services/DataService';
import { useNavigate } from 'react-router-dom';

function DashBoard() {
    
    let navigate = useNavigate();
    useEffect(() => {

        const getLoggedInData = async () => {
            const loggedIn = loggedInData();
            setBlogUserId(loggedIn.userId);
            setBlogPublisherName(loggedIn.publisherName);
            console.log(loggedIn)
            let userBlogItems = await getBlogItemsByUserId(loggedIn.userId);
            setBlogItems(userBlogItems);
            console.log(userBlogItems)
        }

        if(!checkToken){
            navigate('/Login')
        }else{
            getLoggedInData();
        }
    }, [])

    //-----Forms-------------------------------------
    const [blogTitle, setBlogTitle] = useState('');
    const [blogImage, setBlogImage] = useState('');
    const [blogDescription, setBlogDescription] = useState('');
    const [blogCatecory, setBlogCategory] = useState('');
    const [blogTags, setBlogTags] = useState('');
    const [blogItems, setBlogItems] = useState([]);
    const [blogId, setBlogId] = useState(0);
    const [blogUserId, setBlogUserId] = useState(0);
    const [blogPublisherName, setBlogPublisherName] = useState('');

    //-----------------------------------------------

    // ---------------- Bools-----------------------
    const [show, setShow] = useState(false);
    const [editBool, setEdit] = useState(false);
    const [blogIsDeleted, setBlogIsDeleted] = useState(false);
    const [blogIsPublisher, setBlogIsPublished] = useState(false);

    //------------------------------------------
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true);
        if (e.target.textContent == 'Add Blog Item') {
            setEdit(false);
            setBlogTitle("");
            setBlogDescription("");
            setBlogCategory("");
            setBlogTags("");
        } else {
            setEdit(true);
            setBlogTitle("Spicy Noodles");
            setBlogDescription("Spicy noodles are good");
            setBlogCategory("Pastas");
            setBlogTags("yummy,spicy,fuego");
        }
    }

    //----------------------FUNCTION

    const handleTitle = (e) => setBlogTitle(e.targat.value);
    const handleDescription = (e) => setBlogDescription(e.targat.value);
    const handleCategory = ({ target: { value } }) => setBlogCategory(value);
    const handleTags = ({ target }) => setBlogTags(target.value);

    // ({target:{value}})

    // let e = {
    //     target:{
    //         value:'Anything we type',
    //         random: 'something random'
    //     }
    // }

    const handleImage = (e) => {
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            console.log(reader.result);
            setBlogImage(reader.result);
        }

        reader.readAsDataURL(file);
    }

    return (
        <Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{editBool ? 'Edit' : 'Add'} Blog Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Title, image, description, category, tags */}
                    <Form>
                        <Form.Group className="mb-3" controlId="Title">
                            <Form.Label>Title</Form.Label>
                            {/* <Form.Control type="text" placeholder="Enter title" onChange={(e) => setBlogTitle(e.target.value)} value={blogTitle}/> */}
                            <Form.Control type="text" placeholder="Enter title" onChange={handleTitle} value={blogTitle} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Description" onChange={handleDescription} value={blogDescription} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Category" >
                            <Form.Select aria-label="Pick a category" onChange={handleCategory} value={blogCatecory}>
                                <option hidden>Pick a Categorys</option>
                                <option value="Sports">Sports</option>
                                <option value="Cats">Cats</option>
                                <option value="Pastas">Pastas</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Tags">
                            <Form.Label>Tags separated by commas</Form.Label>
                            <Form.Control type="text" placeholder="Enter Tags separated by commas" onChange={handleTags} value={blogTags} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="Image">
                            <Form.Label>Pick an image</Form.Label>
                            <Form.Control type="file" accept='image/png, image/jpg' placeholder="Enter an image" onChange={() => handleImage()}/>
                        </Form.Group>
                    </Form>


                </Modal.Body>

                <Modal.Footer>


                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {editBool ? 'Save Changes' : 'Save'}
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        {editBool ? 'Save Changes' : 'Save'} and Publish
                    </Button>


                </Modal.Footer>
            </Modal>


            <Row>
                <Col md={12}>
                    <Button onClick={handleShow}>Add Blog Item</Button>
                    <Button className='m-4' onClick={handleShow}>Edit Blog Item</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Published Blog Items</Accordion.Header>
                            <Accordion.Body>

                                <ListGroup>
                                    {
                                        blogItems.map((item, index) => {
                                            return (
                                                <div key={`published-${index}`}>
                                                    {item.Published ? <ListGroup.Item>
                                                        <Col>
                                                            {item.Title}
                                                        </Col>
                                                        <Col>
                                                            <Button variant='danger'>
                                                                Delete
                                                            </Button>
                                                            <Button className='m-2' variant='info'>
                                                                Edit
                                                            </Button>
                                                            <Button variant="success">
                                                                Unpublish
                                                            </Button>
                                                        </Col>
                                                        </ListGroup.Item> : null}
                                                </div>
                                            );
                                        })
                                    }
                                    {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                                </ListGroup>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Unpublished Blog Items</Accordion.Header>
                            <Accordion.Body>
                            <ListGroup>
                                    {
                                        blogItems.map((item, index) => {
                                            return (
                                                <>
                                                    {!item.Published ? <ListGroup.Item>
                                                        <Col>
                                                            {item.Title}
                                                        </Col>
                                                        <Col>
                                                            <Button variant='danger'>
                                                                Delete
                                                            </Button>
                                                            <Button className='m-2' variant='info'>
                                                                Edit
                                                            </Button>
                                                            <Button variant="success">
                                                                Publish
                                                            </Button>
                                                        </Col>
                                                        </ListGroup.Item> : null}
                                                </>
                                            );
                                        })
                                    }
                                </ListGroup>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
}

export default DashBoard;
