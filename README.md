## 简介
我个人比较喜欢MIUI系统应用的简洁风格，所以有了想用前端技术模仿写一套APP的想法。
github：[https://github.com/AlanLee97/react-miui-weather](https://github.com/AlanLee97/react-miui-weather)
预览：[http://alanlee.top/app/react-miui-weather/](http://alanlee.top/app/react-miui-weather/)
![未命名码.png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894884227-a1fcb4b9-2e21-4b20-9a97-7a473f18c270.png#averageHue=%23d2d1d1&clientId=u3f6a7206-af9a-4&from=drop&id=c2opK&originHeight=400&originWidth=400&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55869&status=done&style=none&taskId=uf899e7da-8ce5-4012-9bc5-dbb44042285&title=)

## 技术栈

- React
- React-Router-Dom
- webpack
- echarts
## 界面截图
| ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894571147-b0e95402-7786-4c74-b89c-8f3928f6fafc.png#averageHue=%236796ec&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u52969cea&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=259411&status=done&style=none&taskId=uf4982973-1598-431d-8f9c-43cbc942177&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (1).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894607686-baed9889-f7a2-42a7-84af-48bb2f88668e.png#averageHue=%236494e9&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u5391a046&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232264&status=done&style=none&taskId=u94f96023-f56b-4d83-b3d0-cbb53265ed5&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (2).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894632697-dd393d4c-b78c-4714-8b0f-1ce5c0956711.png#averageHue=%236494e9&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u94f407ff&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=220057&status=done&style=none&taskId=u79608446-19c2-4dbf-943a-c4d1a0b8815&title=&width=1170) |
| --- | --- | --- |
| ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (3).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894657161-fb92fc6a-13de-40db-beb9-75ebdd2e5405.png#averageHue=%23769feb&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=ud107e3d2&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=208261&status=done&style=none&taskId=ue19aff74-fa08-4ed9-b92f-e2772b14a39&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (4).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894682992-cbb265af-7cc0-4870-8b1c-3ccf5f932759.png#averageHue=%23edf1f8&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u04697c47&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=434082&status=done&style=none&taskId=u4d0fb498-cb98-4ad2-b2f4-06bf1a7e52a&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (5).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894699807-cca3b9c1-16f5-4f32-bd04-ec6e3030a22c.png#averageHue=%23fdfdfd&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=ue5931c6b&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=89773&status=done&style=none&taskId=u3dead09e-6141-430c-a56b-90d96044a54&title=&width=1170) |
| ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (6).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894725144-92dd7c35-a9c5-4b06-a6bd-b03471ff63fc.png#averageHue=%23fbf9f6&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u5596b004&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=719124&status=done&style=none&taskId=ud5c78a32-a7ae-434e-9307-3ae40b251fa&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (7).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894762262-745a1c95-ecfd-4a4b-b91c-e291c2495d5e.png#averageHue=%23cfe3cc&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=uf82b9e3b&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=2982498&status=done&style=none&taskId=u2fbc3bb7-760c-4856-8d1a-6ee11933d34&title=&width=1170) | ![alanlee.top_app_react-miui-weather_(iPhone 12 Pro) (8).png](https://cdn.nlark.com/yuque/0/2023/png/743297/1700894783919-4b7bff97-8cb7-48cc-aa77-69395ab6c64c.png#averageHue=%23fafafa&clientId=u3f6a7206-af9a-4&from=paste&height=2532&id=u6c4a5341&originHeight=2532&originWidth=1170&originalType=binary&ratio=1&rotation=0&showTitle=false&size=165413&status=done&style=none&taskId=u26be97ba-40f4-4c3d-ad76-8463e0230a0&title=&width=1170) |

## 其他
React-MIUI系列

- MIUI时钟 [React-MIUI-Clock](https://github.com/AlanLee97/react-miui-clock)
- MIUI天气 [React-MIUI-Weather](https://github.com/AlanLee97/react-miui-weather)

