import React from 'react'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const BlogPage = () => {
    const [blogItems, setBlogItems] = useState([
        {
            Id: 1,
            Title: "Growing Tomatos",
            Publisher: "Walaa AlSalmi",
            Date: "01-12-2022",
            Description: "Devote a prime, sunny spot to growing tomatoes. Tomatoes need at least 6 to 8 hours of sun to bring out their best flavors. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants, then add that support directly after planting. You will need to stake, trellis, or cage most tomato plants to keep them off the ground. Decide on a support plan before you set out your plants.",
            Image:
                "https://www.almanac.com/sites/default/files/styles/landscape/public/image_nodes/tomatoes_helios4eos_gettyimages-edit.jpeg?itok=m9c3T-XV",
            Published: true,
            Tags: 'gardening,plant',
            Category: 'Pastas'
        },

        {
            Id: 2,
            Title: "Growing Peppers",
            Date: "01-06-2022",
            Publisher: "Tom Finland",
            Description: "Set pepper plant seedlings out after the last spring frost. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day. They grow well in raised beds, containers, and in-ground gardens. Plant them 18 to 24 inches apart in a sunny, well-drained spot. Pepper plants need at least 6-8 hours of sunlight per day.",
            Image:
                "https://www.farmersalmanac.com/wp-content/uploads/2020/11/Planting-Guide-Bell-Peppers-A105431708.jpg",
            Published: false,
            Tags: 'plant,hot',
            Category: 'Pastas'
        },
        {
            Id: 3,
            Title: "Growing Eggplants",
            Publisher: "Sam Bilton",
            Date: "12-24-2021",
            Description: "Start eggplant seeds indoors up to 10 weeks before the last frost date. Plant the seeds 1/4inch deep, water after planting and cover loosely with plastic to retain moisture. Transplant the seedlings to the garden when soil temperatures reach 60 degrees. Transplant the seedlings to the garden when soil temperatures reach 60 degrees.",
            Image:
                "https://cleangreensimple.com/wp-content/uploads/2020/05/growing-eggplant.jpg",
            Published: true,
            Tags: 'competitive',
            Category: 'Sports'
        },
        {
            Id: 4,
            Title: "Growing Zucchinis",
            Publisher: "Tina Freedman",
            Date: "12-15-2021",
            Description: "Zucchini needs full sun (at least 6 to 8 hours) and consistently moist soil that is high in organic matter. Some zucchini varieties are vining types that require a trellis or a lot of room to sprawl. There are also bush types suitable for container gardening and small space gardening. There are also bush types suitable for container gardening and small space gardening.",
            Image:
                "https://greenhouseemporium.com/wp-content/uploads/2020/02/How_to_Grow_Zucchini_2.jpg",
            Published: false,
            Tags: 'growing, plant',
            Category: 'Cats'
        }
    ]);

  return (
    <Container>
        <Row className='m-3'>
            <Col>
                {blogItems.map((item, index) => {
                    return (
                        <Row className='content-cont'>
                            <Col md={6} className={item.Id % 2 === 0 ? 'col1' : 'col2'}>
                                <Row>
                                    <Col md={12} className="text-center"> {item.Title}</Col>
                                    <Col md={12}>
                                        <Row>
                                            <Col className="text-center" md={6}>{item.Publisher}</Col>
                                            <Col className="text-center" md={6}>{item.Date}</Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <img src={item.Image} className='d-block w-100 p-4'></img>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md={6} className={item.Id% 2 === 0 ? 'col2' : 'col1'}>
                            {item.Description}
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