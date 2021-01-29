## GM游戏后台:blush::smiley: ##

---

## 系统初始化步骤 ##

- 运行环境：node8.x mongodb3.2.10

- 初始化步骤：
1.npm install
2.npm run dev
3.打开浏览器访问 http://localhost:8010/#/install 输入邮箱加载初始存档
4.主页地址 http://localhost:8010

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- config                           // 项目配置
    |-- dist                             // webpack打包目录
    |-- server                           // Node服务端代码目录
	|-- src                              // 前端源码目录
    |   |-- api                          // 存放与后端通信的网络请求
	|   |-- components                   // 组件
	|       |-- common                   // 公共组件
	|           |-- Header.vue           // 公共头部
	|           |-- Home.vue           	 // 公共路由入口
	|           |-- Sidebar.vue          // 公共左边栏
	|		|-- page                   	 // 主要路由页面
	|           |-- xxx.vue              // 核心模块页面
    |   |-- router                       // 前端路由目录
    |   |-- store                        // vuex相关模块
    |   |-- utils                        // 前端公用模块
	|   |-- App.vue                      // 页面入口文件
	|   |-- main.js                      // 程序入口文件，加载各种公共组件
    |   |-- permission.js                // 路由生成及路由重定向管理文件
    |-- static                           // 静态资源目录
    |-- utils                            // 后端公用模块
	|-- .babelrc                         // ES6语法编译配置
	|-- .editorconfig                    // 代码编写规格
	|-- .gitignore                       // 忽略的文件
	|-- index.html                       // 入口html文件
	|-- package.json                     // 项目及工具的依赖配置文件
    |-- package-lock.json                // 依赖库配置文件
    |-- server.js                        // 后端启动文件
	|-- README.md                        // 说明

## 功能列表 ##

> 系统功能

- 资源管理

- 用户管理

- 权限组管理

- 系统日志

> 运营功能

- 玩家数据

- GM邮件

- 公告配置

- 活动配置

- 封号

- 白名单

- 兑换码

- 充值信息查询

> 策划功能

- 导入配表数据

- 配表数据热更新

> 开发者功能

- CDN管理

- 更新服务器代码

- 执行服务器脚本

- 服务器列表管理

- 服务器性能监控
