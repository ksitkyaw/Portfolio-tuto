import "./testimonial.scss"

export default function Testimonial() {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  {/*data constant is mapped to create three hoverable cards a card has three parts - three images side by side is the 
  uppermost part and a paragraph from data.desc amd lastly name and title at the bottom */}
  return (
    <div id='testimonial'>
      <h1>Testimonials</h1>
      <div className='container'>
        {data.map((d) => {
          return (

        <div className={d.featured? 'item featured': 'item'}>
          <div className="imgContainer">
            <img className='sideimg' src="assets/right-arrow.png" alt="" />
            <div className='middleimgContainer'>
              <img className='middleimg' src={d.img} alt="" />
            </div>
            <img className='sideimg' src={d.icon} alt="" />
          </div>
          <p>
            {d.desc}
          </p>
          <div className="textContainer">
            <h5>{d.name}</h5>
            <span>{d.title}</span>
          </div>
        </div>)})}
      
      </div>
    </div>
  )
}
