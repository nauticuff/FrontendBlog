import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GetPublishedBlogItems } from '../Services/DataService';

const BlogPage = () => {
    const [blogItems, setBlogItems] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            let res = await GetPublishedBlogItems();
            setBlogItems(res);
        };
        
        
        fetchData();

    }, []);

  return (
    <Container className='mt-5'>
        <Row className='m-3'>
            <Col>
                {blogItems.map((item, index) => {
                    return (
                        <Row key={`blog-item-${index}`} className='content-cont'>
                            <Col md={6} className={index % 2 === 0 ? 'col1' : 'col2'}>
                                <Row>
                                    <Col md={12} className="text-center"> {item.title}</Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col className="text-center" md={6}>{item.publishedName}</Col>
                                            <Col className="text-center" md={6}>{item.date}</Col>
                                            <p>{item.Id}</p>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <img src={item.image} className='d-block w-100 p-4'></img>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className={index % 2 === 0 ? 'col2' : 'col1'}>
                            {item.description}
                            </Col>
                        </Row>
                    );
                })}
            </Col>
        </Row>
    </Container>
  );
}

export default BlogPage