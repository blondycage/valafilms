import React from 'react'
import img1 from "../files/Guzape1.jpeg"
import img2 from "./ololcover.png"
import img3 from "./Seun.jpg"
import img4 from "./Saraya.jpg"
import img5 from "./Chavala.jpg"
import Button from '@material-ui/core/Button';
import { Scrollbars } from 'react-custom-scrollbars';
import InfiniteScroll from "react-infinite-scroll-component";
import firebase from './firebase'

export default function About () {
  const [items,setitems]=React.useState()
   const [hasMore,sethasmore]= React.useState(true)
   const [count,setcount]= React.useState(0)
  const fetchMoreData = () => {
    setcount(count++)
    if (count >= 4) {
      sethasmore(false );
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
   
  };
  const loadContent = () => {
    const todoRef = firebase.database().ref('/teammembers');
    todoRef.on('value', (snapshot) => {
      setitems(snapshot.val())
    console.log(snapshot.val())

    });
  }

  React.useEffect(() => {
    // Create an scoped async function in the hook
    async function anyNameFunction() {
      await loadContent();
    }
    // Execute the created function directly
    anyNameFunction();
    

  }, []);
  return (
      <div className="teampage">
<div className="teamtext">
<h1>OUR TEAM</h1>
<br />
      <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate porro veritatis quos accusamus. Velit inventore recusandae labore aut tenetur earum corrupti praesentium, error accusamus dolores necessitatibus assumenda optio perspiciatis illo quod. Id ut excepturi blanditiis perspiciatis, similique voluptatem dolore velit aut corrupti! Recusandae nobis rerum rem voluptatibus ullam deleniti distinctio!</h2>
<br />
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eligendi ipsa fugiat iusto consequatur ullam quidem quam nihil suscipit tempore odio cupiditate sunt est aliquid, voluptatem quae quas accusamus non vel inventore delectus aliquam? Error accusantium facere tempore commodi quasi quia tempora est magni repellendus natus excepturi nesciunt et eligendi amet consequuntur, nam eaque ducimus tenetur voluptatem. Dolore cum odio explicabo voluptates voluptate non corporis nam placeat sint cumque rem velit et, inventore, tenetur labore voluptas quae minus? Ex distinctio magnam doloremque reprehenderit, eaque minus rerum voluptatibus dolorem consequatur architecto natus soluta dolores doloribus ullam. Molestias, voluptatibus! Quis illo harum maxime dolor perferendis illum repellendus ipsam, minima repellat ad aliquam laboriosam ex distinctio laborum aperiam quia quibusdam ipsa eveniet totam vel reprehenderit error mollitia odio eius! Voluptatem, iste. Consequuntur, illum.</p>

</div>
        <div className="teammembers ">
        <InfiniteScroll
          dataLength={4}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          height={500}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>...</b>
            </p>
          }
        >
         {!!items && Object.keys(items).reverse().map((member, index) => (
            <div className="teamcontent">
            <img src={items[member].imageUrl} alt="" width="300"  />
            <h4>{`${items[member].name} : ${items[member].role} `}</h4>
           <div className="ics">
           <div className='lk'> <a href="#" className="fa fa-facebook"></a>
       <a href="#" className="fa fa-twitter"></a>
       <a href="#" className="fa fa-google"></a></div></div>
           <br />
            </div>
          ))}
        </InfiniteScroll>
    

     
     
    </div>
    </div>
    )
}
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: '#9f7036'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = props => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);