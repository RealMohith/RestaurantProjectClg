const express = require('express');
const router = express.Router();
const {
    CreateRestaurant
    ,UpdateRestaurant
    ,DeleteRestaurant
    ,GetRestaurant
    ,GetRestaurantList
  } = require ("../Model/models");

  router.post("/restaurants" , CreateRestaurant);
  router.get("/restaurants",  GetRestaurantList);
  router.get("/restaurants/:name" , GetRestaurant);
  router.put("/restaurants/:name" , UpdateRestaurant);
  router.delete("/restaurants/:name" , DeleteRestaurant);
   module.exports = router;