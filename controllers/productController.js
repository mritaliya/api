const Product=require('../model/Product');
const productController=(req,res)=>{
    try {

    const fileName = req.file.filename
    const basePath = `${req.protocol}://${req.get('host')}/api/product/`
        const product = new Product({
            name: req.body.name,
            image:`${basePath}${fileName}`,
            quantity: req.body.quantity,
            size:req.body.size,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price
        })
        product.save();
        res.send(product)
        
    } catch (error) {
        res.status(400).send(error.massage)
        console.log(error);
        
    }
}

const allProduct=async(req,res)=>{
    const product=await Product.find({});
res.send(product)

}


module.exports={productController,allProduct};