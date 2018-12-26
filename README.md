# sw-api 前端仓库

## 1.How-To


### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 2 Using Docker

### build a image from DockerFile

``` shell
# 位于项目的根目录下
docker build -t my-swapi-vue:v1 .
```

### run contrainer

``` shell

docker run -it -p 8080:8080 my-swapi-vue:v1

```

## 3协作方式

[参考网站](https://github.com/SYSUMonkeyEye/MonkeyEye-FE)

### 3.1  准备工作

在github上fork本仓库到你自己的github，将你fork之后的远程仓库克隆到本地，并在你的本地仓库上添加上游仓库，即源仓库。fork一般是fork了仓库的master分支，所以可能还需要自己去切出dev分支然后拉取源仓库dev分支上的内容。

``` bash
git clone https://github.com/{你的github仓库}
# 上游的源仓库地址只需添加一次
git remote add upstream https://github.com/{组织仓库}
# 切出dev分支并拉取源仓库dev分支上的内容
git checkout -b dev
git pull upstream dev
```
### 3.2 方式-1

要开发某个模块的时候，在你的本地仓库创建一个分支，例如mydev。

```bash

git checkout -b mydev

```

切换之后你的本地仓库上就有3个分支了，如下所示。checkout之后会自动切换到mydev分支。

```txt
├─master
├─dev
└─mydev
```

在mydev分支上进行开发和测试，完成相应的功能或者模块，完成之后再切回到dev分支将mydev的内容合并到dev。

```bash
# mydev分支上提交你的更新
git add *
git commit -m "add something"
# 切换到dev分支
git checkout dev
```

由于在你开发过程中，我也可能在开发并且更新了仓库，为了避免冲突，在合并分支之前你还需要更新你本地仓库的dev分支。先在本地仓库上添加上游仓库upstream，上游仓库即我的仓库，然后使用pull命令从上游仓库拉取更新。

```bash
# 拉取上游的源仓库dev分支上的更新
git pull upstream dev
```

更新完dev之后，将mydev分支合并到dev分支并提交到你自己的远程仓库。完成之后，mydev分支就可以删除了，你也可以继续留着。

```bash
# 将mydev分支合并到dev，可能会有冲突需要自行解决
git merge mydev
# 推送到你自己的远程仓库，注意这里是push到origin dev，不是upstream dev
git push origin dev
# 删除mydev分支
git branch -d mydev
```

推送到自己的远程仓库后，就可以到github上面给我发Pull Request了，然后等待我合并你的代码。

#### 2.3 方式-2

嫌上面太麻烦？你也可以直接在fork之后的的dev分支上面进行开发，然后在发送PR之前先从源仓库拉取更新。

```bash
# 提交你的代码
git add *
git commit -m "add something"
# 拉取上游的源仓库dev分支上的更新，可能会有冲突需要自行解决
git pull upstream dev
# 推送到你自己的远程仓库，注意这里是push到origin dev，不是upstream dev
git push origin dev
```

## 4.应用容器化

### 4.1 使用Dockerfile文件构建容器的原因：

Dockerfile是一种被Docker程序解释的脚本，Dockerfile由一条一条的指令组成，每条指令对应Linux下面的一条命令。Docker程序将这些Dockerfile指令翻译真正的Linux命令。Dockerfile有自己书写格式和支持的命令，Docker程序解决这些命令间的依赖关系，类似于Makefile。Docker程序将读取Dockerfile，根据指令生成定制的image。相比image这种黑盒子，Dockerfile这种显而易见的脚本更容易被使用者接受，它明确的表明image是怎么产生的。有了Dockerfile，当我们需要定制自己额外的需求时，只需在Dockerfile上添加或者修改指令，重新生成image即可，省去了敲命令的麻烦。

### 4.2 前端应用容器化具体操作：

- 指定基础image：

``` shell
FROM node:9.11.1-alpine
```

- 安装软件：

``` shell
# install simple http server for serving static content
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install -g http-server
# install project dependencies
# RUN npm install
RUN cnpm install
# build app for production with minification
RUN npm run build
```

- 复制路径：

``` shell
# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .
```

- 切换工作路径：

``` shell
# make the 'app' folder the current working directory
WORKDIR /app
```

- 指定容器映射到主机的端口：

``` shell
EXPOSE 8080
```

- 设置container启动时执行的操作：

``` shell
CMD [ "http-server", "dist" ]
```
