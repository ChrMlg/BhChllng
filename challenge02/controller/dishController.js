const Dish = require("../model/dishModel");

const DishController = {
  
    getDish: async(req,res) => {
        try{
            console.log("noquiero")
            const {page =1, limit = 10} = req.query

            const dishes = await Dish.find()
                .limit(limit)
                .skip((page - 1)*limit)
                .exec()
            
            const count = await Dish.countDocuments()
            return res.status(200).json({
                totalPages:Math.ceil(count / limit),
                currentPage: page,
                dishes
            })
        }
        catch (err){
            return res.status(500).json({error: true,message:JSON.stringify(err)})
        }
    },
    postDish: async(req,res) => {
        try{
            var dish = new Dish ({
                name: req.body.name,
                price: req.body.price,
                restaurant: req.body.restaurant
            })
            console.log(dish)
            await dish.save();
            return res.status(201).json({error:false, message: "Dish Created"})
        }
        catch (err){
            console.log(err);
            return res.status(400).json({error: true, message: JSON.stringify(err)})
        }
    }
}

module.exports = DishController;