import './App.css'
import UserList,{ SingleUser,ITEMS } from './components/UserList'
import Button from './components/Button'
import Tus from './components/Button'
import listem from './data/veri'

function App() {
  const username="Selimcan Benzinci"
  const users=["C#", "C++","JavaScript","React","HTML","CSS","Python","C"]
  const images=[
    {name:'Italy', image:'https://italyadaegitim.com/wp-content/uploads/2020/11/venedik-1.jpg'},
    {name:'France', image:'https://www.travelandleisure.com/thmb/9xr8CFGR14sLvR4IhLwKV64fEV0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Eiffel-Tower-BESTFRANCE0323-dada0673f8764c099b68d01695ef8057.jpg'},
    {name:'Germany', image:'https://www.germany-visa.org/wp-content/uploads/2017/07/Living-in-Muenchen-Germany.jpg'},
    {name:'England', image:'https://www.tripsavvy.com/thmb/hitaOIDM_pd-bQrp9eAuE1N4NyE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-174726708-9125b51de4e14e759e688c019a0f52ca.jpg'},
    {name:'America', image:'https://www.investopedia.com/thmb/uSjO_BX5Jl550BBLNla1QGFmZ5c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LowerManhattanSkyline-900c48d4f1064a97893dbc1548d775e1.jpg'}
  ]
  const mapImages = images.map((image, i) => <li key={i}><img src={image.image} alt={image.name} width="250px" height="250px" /><p>{image.name}</p></li>)

  const isactive= true
  const styles= {
    h4Style: {backgroundColor:"blue",fontsize:"24px",color:"white"}
  }

  const products=[
    {id:1,name:"Linkedin",link:'https://www.linkedin.com/feed/'},
    {id:2,name:"Github",link:'https://github.com/SelimcanBenzinci'},
    {id:3,name:"Uretken Akademi",link:'https://egitim.uretkenakademi.com/products/mega-yazilim-akademisi'}

  ]

  return (
    <>
    <h1 className="welcome" style={{backgroundColor:`${isactive?"green":"orange"}`}}>Welcome To My Porfolio . This page is {username} PORTFOLIO page.</h1>
    
    <hr />
    <p className="hakkimda" style={{backgroundColor:"purple",fontsize:"40px"}} >About Me </p>
    <hr />
    <div style={{backgroundColor:"orange"}}>
    <p className="yazi">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut vitae iusto hic, voluptas quisquam, ipsa quaerat cum suscipit fugiat tempore quasi perferendis quae accusantium accusamus odio blanditiis quo itaque!</p>
    <p className="yazi">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut vitae iusto hic, voluptas quisquam, ipsa quaerat cum suscipit fugiat tempore quasi perferendis quae accusantium accusamus odio blanditiis quo itaque!</p>
    <p className="yazi">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut vitae iusto hic, voluptas quisquam, ipsa quaerat cum suscipit fugiat tempore quasi perferendis quae accusantium accusamus odio blanditiis quo itaque!</p>
    <p className="yazi">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non ut vitae iusto hic, voluptas quisquam, ipsa quaerat cum suscipit fugiat tempore quasi perferendis quae accusantium accusamus odio blanditiis quo itaque!</p>
    </div>
    <hr />
    <div className="resim1"><img className="resim1" src="https://picsum.photos/200 " alt="image" ></img></div>
    <hr />
    <div className="bg-red">Hobbies:</div>
    <hr />
    <div className="hobby">
    <ul style={{backgroundColor:"green"}}>
    <li>Sports</li>
    <li>Cooking</li>
    <li>Listening Music</li>
    <li>Riding</li>
    <li>Writing</li>
    

    </ul>
    </div>
    <hr />
    <div className="language">
      
    <h4  style={styles.h4Style}>Language</h4>
    <hr />
    <ul style={{backgroundColor:"yellow",listStyle:"none",margin:0,padding:0}}>
    {users.map((user,index)=><li key={index}>{user}</li>)}
    </ul>
    </div>
    <hr />
    <h5 className="places">Places I've Been</h5>
    <hr />
    <ul className="images" style={{backgroundColor:"yellow",listStyle:"none",margin:0,padding:0}}>
      {mapImages}
    </ul>

    <hr />

    <div>
      <h2 className="social">Social Media Accounts</h2>
      <hr />
      <ul className="links">
        {products.map(item => (
          <li key={item.id}>
            <Tus name={item.name} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  


    <hr />
    
    <h5 className="work">Internship Place</h5>
    <div className="intern">
    <hr />
    <ImgThumbnail/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cupiditate aperiam modi maiores sit quo, voluptas excepturi quia libero molestias perferendis magnam corrupti sequi exercitationem vero velit, assumenda reprehenderit accusantium.
    Dignissimos facilis perferendis libero laboriosam provident culpa similique quis, porro obcaecati quam suscipit deserunt sed et, eligendi repudiandae corrupti molestiae nulla cum aperiam minima quisquam debitis incidunt sequi. Quo, ullam!
    Voluptatem, odit, tempora voluptate sunt provident id, maxime optio alias illo incidunt facere quis consequuntur ducimus eum quidem! Unde delectus aperiam optio libero voluptatem minima dolorem laudantium a autem alias!
    Accusamus, itaque. Delectus sapiente itaque animi praesentium facilis et, dolorum officiis qui maxime culpa ipsa minus recusandae, veniam quia earum ut voluptates! Sapiente repellendus non et dignissimos quos doloremque vel.
    Quo nam tempora sapiente amet vitae, ea beatae sit illo harum fuga ipsam, ab, repudiandae tenetur quibusdam minima doloremque rem debitis velit quia! Rem pariatur rerum, impedit soluta necessitatibus facere.
    Ullam mollitia ea deserunt labore quam vero, iste sed libero qui laboriosam rerum corporis excepturi laudantium voluptatum sequi voluptas itaque iure unde, aliquam magni molestiae dolorum quisquam distinctio nemo! Natus?
    Harum maxime praesentium commodi architecto temporibus perferendis vero? Officiis inventore et itaque sint doloremque, veniam optio quae eius accusamus veritatis corrupti quibusdam facere error cum autem dolorum expedita dolores voluptates.
    Earum commodi excepturi quasi aliquam labore atque dolore impedit ducimus exercitationem aperiam facilis neque vitae ea iste sit sed laborum quisquam asperiores optio dolorum itaque, doloremque nemo voluptatum dolorem. Quidem?
    Sed tenetur neque laboriosam, quam delectus obcaecati ipsum harum cum illum libero perferendis et autem tempore saepe commodi reprehenderit excepturi sunt. Dicta quidem, voluptas a sunt unde inventore magnam ullam.
    Nemo maiores possimus aliquam voluptatum animi dolor consectetur amet. Consequuntur minima tempora nisi quidem nostrum cumque, quaerat sit porro architecto natus neque, excepturi laborum maiores ipsa reprehenderit reiciendis vel? Sequi.
    Repellat atque sit laboriosam illum harum hic numquam eum, obcaecati provident laborum asperiores vel, voluptate, inventore ea dicta sint adipisci maiores reprehenderit odit facere voluptatem illo quisquam! Autem, dignissimos modi?
    Tempore dolorum nostrum quod architecto laborum! Odit debitis iste, quam quidem ipsam nihil vero deserunt rerum harum in quia officiis quos facilis illo pariatur impedit. Maiores voluptates reiciendis sed unde.
    Ipsam rerum quos porro dolores et hic culpa ullam recusandae qui eius distinctio sint, aut nobis eum nam maiores deserunt veniam exercitationem voluptatum, ab nihil sapiente? Eaque explicabo pariatur eos.
    Facere unde tempora dolorem minus. Assumenda voluptatibus atque officia debitis eaque impedit molestias optio alias, neque dicta blanditiis, tempora corrupti non? Autem impedit fugiat veritatis sit voluptatibus, excepturi animi delectus.
    Et voluptatibus inventore porro libero velit natus neque cumque commodi iure atque quos enim repellendus, repellat officia architecto, sunt reiciendis corrupti. Possimus, est consequatur commodi doloremque hic id aliquid! Aliquam.
    Mollitia, ducimus cumque. Excepturi maxime deleniti consequuntur facilis, ratione vitae quae et mollitia aspernatur sequi! Modi, ipsum odit odio dicta ullam quia officia amet expedita neque ipsa quidem excepturi! Excepturi.
    Exercitationem fugit, ipsum libero, eaque, magnam debitis esse reiciendis pariatur fugiat ad voluptates qui modi deserunt? Quo iusto minima numquam, earum praesentium facilis, voluptatem neque obcaecati, repudiandae atque eos fugiat.
    Corporis minima autem ducimus voluptatem, tenetur consequatur veritatis incidunt. Perspiciatis alias ut consequatur ab quia placeat unde mollitia quas eaque, quos commodi quaerat modi. Commodi non quaerat a eum iste.
    Obcaecati delectus expedita, qui iste veniam dignissimos molestiae enim in est. Quasi repellat quae, reiciendis tenetur velit expedita nobis veniam! Numquam dignissimos nisi, voluptate sequi facere labore quos. Optio, voluptates?
    Veniam, voluptatum iusto odit, numquam nostrum nulla necessitatibus fuga rerum ipsum impedit eligendi minus reiciendis fugit, iste modi consequatur? Quia laboriosam voluptatum quasi est voluptatibus enim perspiciatis veritatis perferendis minima.
    Eum dignissimos sapiente dolor voluptatum maiores aperiam numquam non. Ad ratione natus pariatur dolores, eligendi quis esse ipsum accusantium veniam sequi, sit doloremque nam recusandae vitae! Illum dolor nam expedita!
    Illo maiores a voluptate officia soluta eveniet ipsum distinctio esse corrupti praesentium nobis iste fuga quis aliquam nostrum perferendis, et accusamus quaerat unde repellat quo possimus, rerum quae? Minus, culpa.
    Nihil, explicabo laborum. Obcaecati facilis ipsam, deserunt, distinctio atque similique est iusto ipsum velit assumenda eum ab dolores, vel quidem explicabo nostrum veniam. Aperiam eligendi illo, hic facilis eaque necessitatibus!
    Pariatur sunt rerum culpa fuga voluptates, aperiam delectus placeat commodi distinctio, exercitationem corporis, dignissimos fugit explicabo dolores quidem nihil nesciunt quasi ea? Quae, sed. Velit, labore. Reprehenderit earum dicta debitis.
    Molestias neque unde, tempore voluptatem repellat dolorem explicabo, dignissimos voluptates asperiores, expedita tenetur distinctio hic doloribus ut quasi perferendis sequi. Numquam officiis laudantium facere fuga error deserunt, sint odio recusandae!
    Quasi mollitia dicta praesentium non voluptatem nobis, repellat corrupti error maxime nesciunt nostrum officia minima vitae, deserunt exercitationem. Soluta reiciendis quasi nihil dolor sit pariatur similique, suscipit harum repellendus dolores?
    Quis architecto, tenetur animi quam ducimus aliquam reiciendis doloremque minus officiis quia natus commodi, saepe voluptatibus totam. Fuga ipsum similique perspiciatis voluptatum, inventore sint dolore nisi corrupti dicta, fugiat cupiditate.
    Alias quod nostrum fugit cum dolore! Quidem quae, eligendi recusandae quaerat ex, explicabo tempore officiis rem assumenda a aliquid accusantium soluta beatae tempora enim saepe officia repellat nam illo quam!
    Temporibus soluta, optio corporis aspernatur cupiditate saepe rerum? Nam harum ex quas possimus cum quis totam beatae dolor repellat non vero est consequatur sunt blanditiis tempora, voluptates officia excepturi aut?
    Optio exercitationem est provident. Quo, perferendis nostrum. Error ipsam, ut nesciunt unde cupiditate at maiores quibusdam est? Facilis aliquid ut aut odio, expedita inventore laudantium, rem corrupti repellendus perferendis recusandae!</p>
    </div>
{/*     <UserList/>
    <SingleUser/>
    {[...Array(10)].map((item,index)=><SingleUser key={index}/>)}
    <h2>ITEMS</h2>
    {ITEMS.map((item,index)=><span key={item.index}>{item}</span>)} 
    <hr />
    <Tus />
    <hr/> */}

    <div className="footer">
    {listem}
    </div>
    </>
  )
}

function ImgThumbnail(){
  return( 
  <div style={{ textAlign: "center" }}>
  <img src="https://upload.wikimedia.org/wikipedia/tr/2/2c/Konya_Büyükşehir_Belediyesi_logosu.png" alt="image" style={{padding:"4px",margin:0,borderRadius:"8px",border:"1px solid #bdc3c7"}}/>
  </div>
  )
}
export default App
