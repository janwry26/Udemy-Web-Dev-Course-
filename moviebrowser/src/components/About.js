import Hero from './Hero'
const About = () => {
    return(
        <>
        <Hero text="About" />
      <div className="container-fluid ">
        <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus enim, tempus vel aliquet nec, ultrices sed erat. Phasellus ultrices, lectus id cursus fringilla, erat orci tincidunt nunc, eu molestie nisi nulla eu tellus. Nam vel ornare sapien, quis imperdiet magna. Nam luctus ac risus eget mattis. Suspendisse potenti. Donec non condimentum nibh. Vivamus ac semper ligula. Nullam varius pretium lorem quis rhoncus. 
                
              </p>
            </div>
        </div>
      </div>
      </>
    )
}
export default About;