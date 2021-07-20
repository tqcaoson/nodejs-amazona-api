import User from '../models/userModel.js';
import getToken from '../build/getToken.js';
import bcrypt from 'bcryptjs';

const editUser = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
      user.name = req.body.name || user.name; 
      user.password = bcrypt.hashSync(req.body.password, 8) || user.password;
      user.isAdmin = req.body.isAdmin || user.isAdmin;
      user.isSeller = req.body.isSeller || user.isSeller;
      user.seller = req.body.seller || user.seller;
      const updatedUser = await user.save(); 
      res.send({
        _id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        isSeller: updatedUser.isSeller,
        token: getToken(updatedUser),
      });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
};

//Bearer  
const signIn = async (req, res) => {
    const signinUser = await User.findOne({
      email: req.body.email
    });
    //console.log(signinUser);
    const check = await bcrypt.compareSync(req.body.password, signinUser.password);
    if (signinUser && check) {
      res.send({
        _id: signinUser.id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        isSeller: signinUser.isSeller,
        token: getToken(signinUser),
      });
    } else {
      res.status(401).send({ message: 'Invalid Email or Password.' });
    }
};

const register = async (req, res) => {
    if(req.body.rePassword !== req.body.password)
      res.status(406).send({ message: 'Password and re-password not match' });
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const newUser = await user.save();
    if (newUser) {
      res.send({
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
        isSeller: newUser.isSeller,
        token: getToken(newUser),
      }); 
    } else {
      res.status(401).send({ message: 'Invalid User Data.' });
    }
};

const createAdmin = async (req, res) => {
    try {
      const user = new User({
        name: 'Abc',
        email: 'uio@gmail.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
        isSeller: true,
        seller: {
          name: "Abc",
          logo: "",
          description: "Quản trị",
          rating: 4.5,
          numReviews: 10,
        }
      });
      const newUser = await user.save();
      res.send(newUser);
    } catch (error) {
      res.send({ message: error.message });
    }
};
  
  export { editUser, signIn, register, createAdmin };
  