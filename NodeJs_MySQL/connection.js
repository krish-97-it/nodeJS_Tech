var mysql = require('mysql2');      // import mysql2 module

var con = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: 'root',
    database: 'krishmish_web_dev'
});

con.connect(function(err) {
    if(err){
        throw err;
    }else{
        console.log("Connected!");
        $sql    =    "select * from wp_create_update_user_data";
        con.query($sql, function(err, data){
            if(err){
                throw err;
            }else{
                console.log("data fetched successfully!!");
                console.log(data);
            }
        });

        var sql    =    "create table wp_node_demo_data (id int(11) PRIMARY KEY AUTO_INCREMENT, name varchar(255) NOT NULL, address varchar(255) NOT NULL, phone_no int(11))";
        con.query($sql, function(err, data){
            if(err){
                throw err;
            }else{

                console.log("table created successfully!!");
            }
        });

        // Insert Query
        var sql        =   "INSERT INTO wp_node_demo_data (name,address,phone_no) VALUES ?";
        var values     =   [
                                ['Ram','Delhi', 223455678],
                                ['Zoya','Delhi', 332244556],
                                ['Titli','Mumbai', 221133449],
                                ['Deep','Chennai', 998867891],
                           ]
                
        con.query(sql, [values], function(err, data){
            if(err){
                throw err;
            }else{

                console.log("Data Inserted Successfully!!");
            }
        });

        // Update query
        var sql        =   "UPDATE wp_node_demo_data SET phone_no = 999999999 WHERE name ='Titli'";
                
        con.query(sql, function(err, data){
            if(err){
                throw err;
            }else{

                console.log("Data Updated Successfully!!");
            }
        });
    }
});
  