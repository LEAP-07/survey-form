const Form = require('../models/formData')

module.exports.postFormData = async(req,res) =>{
   const form = new Form(req.body.form);
   console.log(form);
   await form.save();
   res.redirect('/form/submitted');
}

module.exports.getFormData = async(req,res) => {
    return res.render('form/form');
}