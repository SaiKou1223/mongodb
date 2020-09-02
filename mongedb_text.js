use database_text
//存在的数据库则切换到该数据库，不存在则创建
db.database_text.insert({"name":"P1","price":"28"})
db.database_text.insert({"name":"P2","price":"5"})
db.database_text.insert({"name":"P3","price":"19"})
db.database_text.insert({"name":"P4","price":"55"})
db.database_text.insert({"name":"P5","price":"34"})
db.database_text.insert({"name":"P6","price":"26"})

// 入库的key值不能相同，相同取最后一个键值对

db.database_text.find()
// 查看数据库
db.users.find().limit(2).skip(1)
// limit查看个数   skip起始位置

db.database_text.find({"price":{$lt:20}})
// 小于20的数据

db.database_text.find({"price":{$lte:30}})
// 小于等于30的数据

db.database_text.find({"price":{$gt:30}})
// 大于30的数据

db.database_text.find({"price":{$gte:40}})
// 大于等于40的数据

db.database_text.find({"price":{$ne:55}})
// 不等于55的数据

db.database_text.remove({"price":15})
// 删除15的数据

db.database_text.update({"name":"P1"},{$set:{"price":9.9}})
// 修改P1的数据为9.9

db.database_text.update({"name":"P1"},{$set:{"price":9.9}})
// 修改一个
db.database_text.update({"name":"P1"},{$set:{"price":9.9}},{multi:true})
修改所以

// 排序
db.database_text.find().sort({"price":1})
// 升序

db.database_text.find().sort({"price":-1})
// 降序

db.database_text.drop()
// 删除