var TmcClient = require('../index.js').TmcClient;

var tmcClient = new TmcClient('23021137','6c4522b216ad2314477ae33616d9e1f9','default');

tmcClient.connect('ws://mc.api.taobao.com/',
    function (message,confirmCb) {
        console.log(message);
	    //如果处理失败,不用调用confirmCb

	    //如果处理成功
        confirmCb();
    });