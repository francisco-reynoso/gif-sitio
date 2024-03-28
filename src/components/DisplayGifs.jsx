import UseApi from "./UseApi";
import ImageItem from "./ImageItem";

const DisplayGifs = ({category}) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7ub083hJJe7TGAXCfW890NvNtMwGp71f&q=${category}&limit=50`;
    const {loading,data} = UseApi(url);
    return(
        <div className="container-gif">
            {
                loading ?
                data.map(img=> (
                    <ImageItem key ={img.id} title={img.title} url={img.images.downsized_medium.url}/>
                ))
                : ""
            }
            
        </div>
    )
}

export default DisplayGifs;