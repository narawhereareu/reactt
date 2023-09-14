
import Navbar from './Navbar'

function Owner() {
  return (
    <div className="">
        <Navbar/>

        <div className="flex justify-center flex-col text-center p-4">
        
        
        <h1 className="p-4" id='names'>Narathip G F</h1>
        
        <img className = "h-1/4 w-1/4 self-center p-4" id='picture'
        src='https://scontent.fbkk30-1.fna.fbcdn.net/v/t1.6435-9/79732217_2590491214391100_5647285260073828352_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=Z5faZGWqiZEAX9zkvLr&_nc_ht=scontent.fbkk30-1.fna&oh=00_AfCvB2EE9jXiiuF5c-oqc5RTCobw2yDXgOpIKUdQ2GT1aQ&oe=652964C1'/>
        
       
        <p className="p-4" id='bio'>Heelo halolo</p>
        </div>
    </div>
  )
}

export default Owner