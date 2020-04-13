
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
