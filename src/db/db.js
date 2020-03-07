const { query } = require('./connect')

let createTable = ( sql ) => {
  return query( sql, [] )
}

let users =
`create table if not exists users(
 id INT NOT NULL AUTO_INCREMENT,
 username VARCHAR(100) NOT NULL COMMENT '用户名',
 password VARCHAR(100) NOT NULL COMMENT '密码',
 avator VARCHAR(100) NULL COMMENT '头像',
 name VARCHAR(100) NULL COMMENT '名字',
 mobile INT NULL COMMENT '手机号',
 email VARCHAR(400) NULL COMMENT 'email',
 intro VARCHAR(400) NULL COMMENT '介绍',
 token VARCHAR(2560) NULL COMMENT 'PC端 Token',
 mobileToken VARCHAR(100) NULL COMMENT '移动端 Token',
 registerTime VARCHAR(100) NULL COMMENT '注册时间',
 lastLoginTime VARCHAR(100) NULL COMMENT '最后一次登录时间',
 status INT NULL COMMENT '用户状态',
 PRIMARY KEY ( id )
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

let article =
`create table if not exists article(
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(400) NOT NULL COMMENT '文章题目',
 contentShort VARCHAR(600) NULL COMMENT '概要',
 content TEXT NOT NULL COMMENT '文章内容',
 uid VARCHAR(40) NOT NULL COMMENT '用户id',
 createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
 publishTime VARCHAR(100) NOT NULL COMMENT '发表时间',
 pv VARCHAR(40) NOT NULL DEFAULT '0' COMMENT '浏览量',
 tags VARCHAR(100) NULL COMMENT 'Tag',
 status INT NOT NULL DEFAULT 1 COMMENT '文章状态 1代表published 2代表draft 3代表deleted',
 platforms VARCHAR(100)  NULL COMMENT '发布的平台',
 commentStatus INT NOT NULL DEFAULT 1 COMMENT '评论状态 0 关闭评论 1 开启评论',
 images VARCHAR(300) NULL COMMENT '图片',
 thumb VARCHAR(200) NULL COMMENT '缩略图',
 PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

let source =
`create table if not exists source(
 id INT NOT NULL AUTO_INCREMENT,
 title VARCHAR(400) NOT NULL COMMENT '图片/视频等名称',
 contentShort VARCHAR(600) NULL COMMENT '概要',
 typeId INT NULL COMMENT '所属分类id',
 uid INT NOT NULL COMMENT '用户id',
 createTime VARCHAR(100) NOT NULL COMMENT '创建时间',
 tags VARCHAR(100) NULL COMMENT 'Tag',
 status INT NOT NULL DEFAULT 1 COMMENT '',
 filePath VARCHAR(300) NULL COMMENT '图片',
 PRIMARY KEY(id)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`

let comment =
`create table if not exists comment(
 id INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(100) NOT NULL COMMENT '用户名称',
 content TEXT(0) NOT NULL COMMENT '评论内容',
 moment VARCHAR(40) NOT NULL COMMENT '评论时间',
 postid VARCHAR(40) NOT NULL COMMENT '文章id',
 avator VARCHAR(100) NOT NULL COMMENT '用户头像',
 PRIMARY KEY(id) 
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;`



// 建表
createTable(users)
createTable(article)
createTable(comment)
createTable(source)