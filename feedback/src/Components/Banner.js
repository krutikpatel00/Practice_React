import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



const Banner = () => {
      return (
            <div>
                  <Carousel>
                        <Carousel.Item interval={1000}>
                              <img src="https://images.thedirect.com/media/article_full/the-marvels-mcu_Mz0Hyar.jpg" alt="" className='w-100 h-screen object-cover' />
                              <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500}>
                              <img src="https://images.thedirect.com/media/article_full/the-marvels-mcu_Mz0Hyar.jpg" alt="" className='w-100 h-screen object-cover' />
                              <Carousel.Caption>
                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                              <img src="https://images.thedirect.com/media/article_full/the-marvels-mcu_Mz0Hyar.jpg" alt="" className='w-100 h-screen object-cover' />
                              <Carousel.Caption>
                                    <h3>Third slide label</h3>
                                    <p>
                                          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </div>
      )
}

export default Banner