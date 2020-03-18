#利用vue-cli搭建TS环境
+ 首先全局安装vue-cli  
---
`npm install --global @vue/cli`  
或者  
 `cnpm install --global @vue/cli`     
>那么cnpm 与 npm 有什么区别呢？  
>npm是随同NodeJS一起安装的包管理工具，因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常
>cnpm是npmjs.org 的镜像，安装插件时会更快

>如何安装cnpm？  
`npm install -g cnpm --registry=https://registry.npm.taobao.org`   

>nrm又是啥？  
>是用来管理registry地址的工具  
>`npm install -g nrm`    
>添加registry地址  
>`nrm add npm http://registry.npmjs.org`  
>`nrm add taobao https://registry.npm.taobao.org`  
>切换npm registry地址  
>`nrm use taobao`  
  `nrm use npm`  
>查看可选源  
>`nrm ls`   
>删除源  
>`nrm del <registry>`  
>监测镜像速度  
>`nrm test`
