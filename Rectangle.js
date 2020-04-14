
// Rectangle

let Rectangle = function(width, height) {
	this.width  = Number(width);
	this.height = Number(height);
	alert('Tạo mới hình chữ nhật thành công:\nWidth: ' +this.width+'\nHeight: ' +this.height);
}

// get
Rectangle.prototype.getWidth  = function() {
    return this.width;
}
Rectangle.prototype.getHeight = function() {
    return this.height;
}

// Tính diện tích
Rectangle.prototype.getArea = function() {
    return this.width*this.height;
}

// Tính chu vi
Rectangle.prototype.getPerimeter = function() {
    return this.width*2+this.height*2;
}

// Tính chu vi
Rectangle.prototype.draw = function() {
    let canvas = document.querySelector('#myCanvas');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = 'red';
    ctx.beginPath();
	ctx.fillRect(0, 0, this.width, this.height);
}
