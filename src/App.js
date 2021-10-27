import { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Badge from '@mui/material/Badge';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


function App() {

  return (
    <div className="App">
     {/* <ColorList/> */}
     <MovieList/>
    </div>
  );
}

function MovieList(){
  const Initial_movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: ` When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`,
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`,
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`,
    },

    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`,
    },
  ];
  const [movies,setMovies]=useState(Initial_movies);

  const [name,setName]=useState("");
  const [poster,setPoster]=useState("");
  const [rating,setRating]=useState("");
  const [summary,setSummary]=useState("");
const addmovie=()=>{
  console.log({name,poster,rating,summary})
  const newMovie={name,poster,rating,summary};
  setMovies([...Initial_movies,newMovie]);
  setName("");
  setPoster("");
  setRating("");
  setSummary("");
 
};
  return(
    <section>
  <div className="add-movie-form">
    <TextField 
    variant="outlined"
    value={name}
    onChange={(event)=>setName(event.target.value)}
    label="Name"/>

<TextField 
 value={poster}
 onChange={(event)=>setPoster(event.target.value)}
 label="PosterURL" 
 variant="outlined" />

<TextField 

value={rating}
onChange={(event)=>setRating(event.target.value)}
 label="Rating" 
 variant="outlined" />

<TextField 
value={summary}
onChange={(event)=>setSummary(event.target.value)}
 label="Summary" 
 variant="outlined" />
    
    
    <Button variant="contained" onClick={addmovie}>Add Movie</Button>

  </div>

    <div className="movie-list">
        {movies.map((mv,index) => (
          <Movie
            key={index}
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
          />
        ))}
      </div>
      </section>

  )
}


// pass data from parent to Child -> Props
function Movie({ name, poster, rating, summary }) {
  const [show,setShow]=useState(true)
const styles={display:show?"block":"none"}
  return (
    <Card>
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <CardContent>
      <div className="movie-specs">
          <h3 className="movie-name">{name} <IconButton 
        onClick={(event)=>setShow(!show)}
        color="primary"
        >{show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
        
        </IconButton></h3>
          
        <p className="movie-rating">⭐{rating}</p>
        </div>
        
        
      <p  style={styles}>{summary}</p>

      {/* conditional rendering
      {show? <p  >{summary}</p>:""} */}
      <Counter/>
      </CardContent>
    </div>
    </Card>
  );
}



function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton className="likes-dislikes"
      onClick={() => setLike(like + 1)}
       color="primary" 
       aria-label="likes" 
       component="span"
       >
       <Badge 
       badgeContent= {like} color="primary">
          👍
      </Badge>
  </IconButton>
      <IconButton className="likes-dislikes"
      onClick={() => setDisLike(disLike + 1)}
       color="primary" 
       aria-label="dislikes" 
       component="span"
       >
         <Badge badgeContent= {disLike} color="error">
         👎
</Badge>
          
  </IconButton>
  
      {/* <button className="likes-dislikes" onClick={() => setDisLike(disLike + 1)}>👎 {disLike}</button> */}
    </div>
  );
}

function ColorList(){
  const [color,setColor]=useState("orange");
  const styles={backgroundColor : color, color:"black"};
  const Initial_colors=["crimson","orange","skyblue","pink"];
  const [colors,setColors]=useState(Initial_colors);
  return(
    <div>
    {/* <input
    value={color}
    style={styles}
    onChange={(event)=>setColor(event.target.value)}
    placeholder="Enter a color"
    /> */}
    <TextField 
    value={color}
    style={styles}
    onChange={(event)=>setColor(event.target.value)}
     label="Enter a color" 
     variant="outlined"
    />
    {/* <Button variant="contained">Contained</Button> */}
    <Button variant="contained"
    onClick={()=>setColors([...colors,color])}
    >Add Color</Button>

    {
      colors.map((clr,index)=>(
        <ColorBox key={index} color={clr}/>
      ))
    }
    </div>
  );
  }

  function ColorBox({color}){
    const styles={
      height:"75px",
      width:"150px",
      backgroundColor:color,
      margin:"10px 0px",
    };
    return <div style={styles}></div>;
    }

export default App;
