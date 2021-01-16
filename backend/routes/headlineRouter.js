const router = require("express").Router();
const controlPanelAuth = require("../middleware/controlPanelAuth");
const Headline = require("../models/headlineModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/", controlPanelAuth, async (req,res) => {
    try{
        
        let {title, image, date, category, articleLink} = req.body;

        if(!title || !image || !date || !category || !articleLink)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }

        const obj = new Headline ({
            title,
            image,
            date,
            category,
            articleLink
        });


        const savedHeadline = await obj.save();
        
        res.json(savedHeadline);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", async (req,res) => {
    const headlines = await Headline.find();
    res.json(headlines);


});

router.get('/:id', async(req,res) =>{

    try{
    const headline = await Headline.findById(
        req.params.id
    )

    if(!headline){
        return res
        .status(400)
        .json({
            msg: 'This Headline Does Not Exist.'
        });
    }

    res.json(headline); 
} catch(err){
    res.status(500).json({error: err.nessage})
}

});


router.get('/category/:id', async(req,res) =>{

    try{
   
    let idString = req.params.id;
    let upChat = idString.substring(0,1).toUpperCase();
    let otherString = upChat + idString.substring(1,idString.length);

    
   
        const headlines = await Headline.find({
            $or:[
            {category : req.params.id},{category : otherString}
            ]
        })

        if(!headlines){
            return res
            .status(400)
            .json({
                msg: 'No Articles Exist Under This Category.'
            });
        }
    
        res.json(headlines); 
        
} catch(err){
    res.status(500).json({error: err.nessage})
}

});




router.delete('/:id', controlPanelAuth, async (req,res) =>{
    try{
        const headline = await Headline.findByIdAndDelete(
            req.params.id
        )
    
        if(!headline){
            return res
            .status(400)
            .json({
                msg: 'This Headline Does Not Exist.'
            });
        }
    
        res.json(headline); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})

module.exports = router; 