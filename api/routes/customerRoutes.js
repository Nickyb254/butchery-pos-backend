import express from "express";
const router = express.Router();

router.get('/', (request, response, next) => {
  response.status(200).json({
    message: 'Get Request from a customer!'
  });
});


router.post('/', (request, response, next) => {
  response.status(200).json({
    message: 'Post Reqest from a customer!'
  });
});


export default router;