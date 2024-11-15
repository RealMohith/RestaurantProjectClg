const db = require('../config');
const Hotel = db.model("Restaurant", {
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['chinese', 'thai', 'continental', 'south', 'north', 'andhra'],
    required: true
  },
  location: {
    type: String,
    required: true
  },
  rating: {
    //number between 1-5
    type: Number,
    required: true

  },
  topFood: {
    type: String,
    required: true
  }
})



const CreateRestaurant = async(req,res) =>{ // post body
  try {
    const data = new Hotel({
      name: req.body.name,
      password: req.body.password,
      type: req.body.type,
      location: req.body.location,
      rating: req.body.rating,
      topFood: req.body.topFood
    }); 
    await data.save();
    res.send(data);
  } catch(err) {
    res.send("Error creating db");
    process.exit();
  }
}

const UpdateRestaurant = async(req,res) =>{ // put finding params update body
  try {
    const data = await Hotel.findOneAndUpdate({
      "name": req.params.name
    },
    {
      $set:req.body
    }
    ,
    {
      new: true
    });
    res.send(data);

  } catch(err) {
    res.send("Error updating db");
  }
}

const DeleteRestaurant = async(req,res) =>{ // delete 
  try {
    const data = await Hotel.findOneAndDelete({ // delete body name
      "name": req.params.name
    });
    res.send(data);

  } catch(err) {
    res.send("Error deleting db");

  }
}

const GetRestaurant = async(req,res) =>{ // get params name 
  try {
    const data = await Hotel.findOne({
      "name": req.params.name
    });
    res.send(data);

  } catch(err) {
    res.send("Error fetching db", err);

  }
}

const GetRestaurantList = async(req ,res) =>{ //get all
  try {
    const data = await Hotel.find();
    res.send(data);
  } catch(err) {
    res.send("Error fetching db", err);
  }
}

//CreateRestaurant();
//UpdateRestaurant();
//DeleteRestaurant();
//GetRestaurant();
//GetRestaurantList();


module.exports = {
  CreateRestaurant
  ,UpdateRestaurant
  ,DeleteRestaurant
  ,GetRestaurant
  ,GetRestaurantList
}

  
