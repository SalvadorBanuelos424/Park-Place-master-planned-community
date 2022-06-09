<<<<<<< HEAD
module.exports = {print: (print) => {
    return print;
},
};
=======
const authUser = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    if (permissions.includes(userRole)) {
      next();
    } else {
      return res.status(401).json("You don't have permission");
    }
  };
};

module.exports = { authUser };
>>>>>>> 13286acbf9008f6cc97eb298cb16ffc285fcc7da
