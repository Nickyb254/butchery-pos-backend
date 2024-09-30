// import ImageModel from '../models/images';

//  const createProductImages =  (request, response) => {
//     const stockImage = ImageModel.create({
//       image: request.file.filename
//     })
//     stockImage
//     .save()
//     .then(result => {console.log(result)
//       response.status(200).json({
//         message: 'Image posted!',
//         image: image
//       })
//     })
//     .catch(error => console.log(error))
//   }

//   export default createProductImages