import React, {useEffect , useState} from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoremPicsumService } from '../../services/LoremPicsumService';
import PictureObject from '../../components/pictureObject/PictureObject';

function PicturesPage() {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    const loremService = LoremPicsumService();

    loremService.getListOfImages()
      .then(response => {
        setImageList(response.data);
      })
      .catch(error => {
        console.error('Error fetching image list:', error);
      });
  }, []);

  return (
    <main>
        <h2>Aquí estarán todos los objetos de la primera llamada</h2>
        <Navbar/>
        <div className="image-list">
        {imageList.map(image => (
          <PictureObject key={image.id} image={image} />
        ))}
      </div>
    </main>
  )
}

export default PicturesPage