auto.waitFor();
setScreenMetrics(1080, 2340);
//打开企业微信
toast("打开后台企业微信");
launchApp("企业微信");
sleep(2000);
//打开工作台
toast("打开工作台");
click("工作台",0);
sleep(1000);
//进入学工系统
toast("进入学工系统");
click("学工系统",0);
sleep(5000);
//打开消息
toast("打开消息");
click("消息",0);
sleep(5000);
//点击最后一条消息
toast("点击最后一条消息");
press(555,2000,100);
sleep(2000);
//进入反馈
toast("进入反馈");
click("反 馈",0);
sleep(2000);
//体温有无异常 无
toast("体温无异常");
press(994,476,100);
press(552,2006,1000);
swipe(552,2006,564,1890,1000);
sleep(1000);
click("确定",0);
sleep(1000);
//是否有发热 健康
toast("健康");
press(931,816,100);
sleep(1000);
click("确定",0);
sleep(1000);
//定位
toast("定位");
press(983,324,100);
sleep(6000);
//提交
toast("提交");
click("提 交",0);
sleep(1000);
alert("执行完成~", "脚本作者：洮羱芝闇(https://github.com/tyza66)")

