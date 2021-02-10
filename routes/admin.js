var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  let products=[
    {
    name:"Manchester City",
    category:"Clubs",
    description:"2015-16 Away Jersey",
    image:"http://s3.amazonaws.com/nikeinc/assets/44662/Fa15_FB_WE_Club_Kits_PR_Match_Front_A_Manchester_City_R_native_1600.jpg?1437375840"
  },
  {
    name:"Manchester United",
    category:"Clubs",
    description:"2020-21 Home Jesrey",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.I5LgxiiERY_XDZgZs7e2YQHaEU%26pid%3DApi&f=1"
  },
  {
    name:"Chelsea",
    category:"Clubs",
    description:"2020-21 Home Jersey",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.4NmowWqkb9-Mr5WsP35m9AHaFS%26pid%3DApi&f=1"
  },
  {
    name:"Everton",
    category:"Clubs",
    description:"2017-18 Third Jersey",
    image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WqifaOnbETPEgZx_AUwLEQHaHa%26pid%3DApi&f=1"
  }
    
  ]
  res.render('admin/view-products',{admin:true,products})
});
router.get('/add-product',function(req,res){
  res.render('admin/add-product')
})
router.post('/add-product',(req,res)=>{
  console.log(req.body);
  
  console.log(req.files && req.files.Image);
  
})
module.exports = router;
