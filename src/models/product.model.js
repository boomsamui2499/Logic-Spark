const db = require('../database')

const Product = function (product) {
  this.category_id = product.category_id;
  this.category_name = product.category_name;

  this.product_id = product.product_id;
  this.product_name = product.product_name;
  this.description = product.description;
  this.price = product.price;

};

Product.select = async (data, result) => {
  db.all("SELECT c.category_id,c.category_name,p.product_id,p.product_name,p.description FROM category c LEFT JOIN product p  on c.category_id=p.category_id", (err, res) => {
    if (err) {
      throw err;
    }
    result(null, res);
  });
};

Product.addCategory = async (data, result) => {
  console.log(data);
  let sql = "insert into category(category_name) VALUES(?)";
  await db.run(sql, data.category_name, (err, res) => {
    console.log(sql);
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};

Product.addProduct = async (data, result) => {
  console.log(data);
  await db.run("insert into product(product_name,category_id,description,price) VALUES(?,?,?,?)", data.product_name, data.category_id, data.description, data.price, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};

Product.updateCategory = async (data, result) => {
  console.log(data.category_name);
  let sql = `update category set category_name="${data.category_name}" where category_id=${data.category_id}`;
  console.log(sql);
  await db.run(sql, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};

Product.updateProduct = async (data, result) => {
  console.log(data);
  let sql = `update product set product_name="${data.product_name}" ,category_id=${data.category_id},description="${data.description}",price="${data.price}" where product_id=${data.product_id}`;
  console.log(sql);
  await db.run(sql, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};


Product.deleteCategory = async (data, result) => {
  let sql = `delete from category where category.category_id = (?)`;
  await db.run(sql, [data.category_id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};
Product.deleteProduct = async (data, result) => {
  let sql = `delete from product where product.product_id = (?)`;
  await db.run(sql, [data.product_id], (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null, { status: false });
      return;
    } else {
      result(null, { status: true });
    }
  });
};



module.exports = Product;
