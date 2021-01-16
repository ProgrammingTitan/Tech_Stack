const router = require("express").Router();
const controlPanelAuth = require("../middleware/controlPanelAuth");
const Article = require("../models/articleModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post("/", controlPanelAuth, async (req,res) => {
    try{
        
        let {title, image, date, category, author, body, handleType, handle} = req.body;

        if(!title || !image || !date || !category || !author || !body || !handleType || !handle)
        {
            return res.status(400).json({msg: "Not all fields entered"});
        }

        const obj = new Article ({
            title,
            image,
            date,
            category,
            author,
            body,
            handleType,
            handle,
        });


        const savedArticle = await obj.save();
        
        res.json(savedArticle);

    } catch(err){
        res.status(500).json({error: err.nessage})
    }
});

router.get("/", async (req,res) => {
    const articles = await Aricle.find();
    res.json(articles);


});

router.get('/:id', async(req,res) =>{

    try{
    const article = await Article.findById(
        req.params.id
    )

    if(!article){
        return res
        .status(400)
        .json({
            msg: 'This Article Does Not Exist.'
        });
    }

    res.json(article); 
} catch(err){
    res.status(500).json({error: err.nessage})
}

});


router.get('/category/:id', async(req,res) =>{

    try{
   
    let idString = req.params.id;
    let upChat = idString.substring(0,1).toUpperCase();
    let otherString = upChat + idString.substring(1,idString.length);

    
   
        const articles = await Article.find({
            $or:[
            {category : req.params.id},{category : otherString}
            ]
        })

        if(!articles){
            return res
            .status(400)
            .json({
                msg: 'No Articles Exist Under This Category.'
            });
        }
    
        res.json(articles); 
        
} catch(err){
    res.status(500).json({error: err.nessage})
}

});




router.delete('/:id', controlPanelAuth, async (req,res) =>{
    try{
        const article = await Article.findByIdAndDelete(
            req.params.id
        )
    
        if(!article){
            return res
            .status(400)
            .json({
                msg: 'This Article Does Not Exist.'
            });
        }
    
        res.json(article); 
    } catch(err){
        res.status(500).json({error: err.nessage})
    }
    
})

module.exports = router; 