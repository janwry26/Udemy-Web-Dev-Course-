import Hero from './Hero';

const Home = () => {
    return(
      <>
        <Hero text="Welcome to react component 201" />
      <div className="container-fluid ">
        <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus enim, tempus vel aliquet nec, ultrices sed erat. Phasellus ultrices, lectus id cursus fringilla, erat orci tincidunt nunc, eu molestie nisi nulla eu tellus. Nam vel ornare sapien, quis imperdiet magna. Nam luctus ac risus eget mattis. Suspendisse potenti. Donec non condimentum nibh. Vivamus ac semper ligula. Nullam varius pretium lorem quis rhoncus. Praesent vitae porta ex, quis dignissim turpis. Nam ut tempus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla a leo pellentesque neque porta consectetur. Proin id ante nec felis porttitor posuere ac eu tellus. Proin tincidunt nulla nulla, quis pharetra velit convallis at. Phasellus lectus tellus, convallis eu viverra gravida, tristique ut purus. Quisque nec mauris lacinia, congue odio at, fermentum dolor.
              </p>
            </div>
        </div>
      </div>
      </>
    )
  }
  export default Home;  