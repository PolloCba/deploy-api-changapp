const { Category } = require("../db");
const { allCategories } = require("../utils/utils");

const getCategories = async (req, res) => {
  try {
    let categories = await Category.findAll();
    return res.status(200).send(categories);
  } catch (err) {
    return res.status(400).send(console.log(err.message));
  }
};

const postCategorie = async (req, res) => {
  try {
    const { name, img } = req.body;
    Category.create({
      name,
      img,
    });

    res.status(201).send("Category created");
  } catch (error) {
    res.status(404).send(error);
  }
};

const deleteCategory = async (req, res) => {
  const {id} = req.params

  console.log(id)
  try {
    await Category.destroy({
      where: {
        id
      }
    }) 
    res.status(200).send("Category deleted");
  } catch (error) {
    res.status(404).send(error);
  }

}

module.exports = {
  getCategories,
  postCategorie,
  deleteCategory
};
