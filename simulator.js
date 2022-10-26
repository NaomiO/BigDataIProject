var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "elisheva7",
  database: "naomi"
});

var rand_index = 0;
con.connect(function(err) {
    let restaurants = []; 
    if (err) throw err;
    con.query("SELECT CityCode, NameCity, NameOwner, Vanilla, Chocolate, Strawberry, Lemon, Halva FROM city_data", function (err, result, fields) {
      if (err) throw err;
      while(true) {
        rand_index = Math.floor(Math.random() * 99); //randomly selects one of the snifim 
        console.log(result[rand_index]);
        update(result[rand_index].CityCode, result); //sends citycode of random snif
    }
});


    function update(code, city){

        con.connect(function(err) {
            if (err) throw err;
            var vani = Math.floor(Math.random() * 100);
            let sql1 = `UPDATE city_data SET Vanilla = ${vani} WHERE CityCode = ${code} `
            con.query(sql1, function (err, result) {if (err) throw err;});                
                
            var choc = Math.floor(Math.random() * 100);
            let sql2 = `UPDATE city_data SET Chocolate = ${choc} WHERE CityCode = ${code} `
            con.query(sql2, function (err, result) {if (err) throw err;});                
                
            var stra = Math.floor(Math.random() * 100);
            let sql3 = `UPDATE city_data SET Strawberry = ${stra} WHERE CityCode = ${code} `
            con.query(sql3, function (err, result) {if (err) throw err;});                
                
            var lem = Math.floor(Math.random() * 100);
            let sql4 = `UPDATE city_data SET Lemon = ${lem} WHERE CityCode = ${code} `
            con.query(sql4, function (err, result) {if (err) throw err;});                
                
            var hal = Math.floor(Math.random() * 100);
            let sql5 = `UPDATE city_data SET Halva = ${hal} WHERE CityCode = ${code} `
            con.query(sql5, function (err, result) {if (err) throw err;});                
                
            });}
                            
});
