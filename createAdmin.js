
// mongod.conf
//   authorization: disabled

var db = db.getSiblingDB("admin"); // use admin

if(db.getUser("admin")){
    db.dropAllUsers();
}
db.createUser({
    user: "admin",
    pwd: "password",
    roles: ["userAdminAnyDatabase", "dbAdminAnyDatabase", "readWriteAnyDatabase"]
});


