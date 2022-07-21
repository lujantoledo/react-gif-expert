//     //const gift = [1,2,3,4]

export const getGifs = async( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=HrvEVoV7pQk7QMCv5VQ8STK9FJ16dM5l&q=${ category }&limit=10`
     const resp = await fetch( url );

     const {data} = await  resp.json();
     console.log(data)

     const gifs = data.map(img =>
        ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        })
     );
     //console.log(gifs)
     return gifs;
   }
  