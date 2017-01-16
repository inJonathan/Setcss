(function () {
	// 配置插件默认值
	var def = {
		fontSize: 16,
		color: '#999'
	}
	var options = {}

	// 插件功能定义
	var feature = {
		setFontSize: function (elem, opt) {
			elem.style.fontSize = opt + "px";
		},
		setColor: function (elem, opt) {
			elem.style.color = opt;
		}
	}

	// 提供可调用的API
	var api = {
		config: function (elem, opts) {

			// 覆盖配置项，如果配置项不存在则使用默认值
			if (!opts) {
				for (var key in def) {
					options[key] = def[key];
				}
			} else {
				for (var key in opts) {
					options[key] = opts[key];
				}
			}

			// 通过选择器获取元素
			var listen = function (elem) {
				if (typeof elem === 'string') {
					var elems = document.querySelectorAll(elem),
						i = elems.length;
					while (i--) {
						listen(elems[i]);
					}
					return
				}
				// 执行插件功能
				feature.setFontSize(elem, options.fontSize);
				feature.setColor(elem, options.color);
			}
			listen(elem);
			// 插件执行完毕后将配置项恢复默认状态，避免影响其他元素调用
			for (var key in def) {
				options[key] = def[key];
			}
		}
	}
	this.Setcss = api;
})();