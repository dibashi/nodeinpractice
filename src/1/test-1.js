

function My_EventEmitter() {
	this.handles = {};
	this.handles["newListener"] = [];
}

My_EventEmitter.prototype.addEventListener = function (eventName, listener) {
	if (!this.handles[eventName]) {
		this.handles[eventName] = [];
	}

	this.handles[eventName].push(listener);
	this.emit("newListener");
}

My_EventEmitter.prototype.on = My_EventEmitter.prototype.addEventListener;

My_EventEmitter.prototype.emit = function (eventName, ...args) {
	if (this.handles[eventName]) {
		for (let i = 0, len = this.handles[eventName].length; i < len; i++) {
			this.handles[eventName][i](...args);
		}
	}
}