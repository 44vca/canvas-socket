import Tool from "./Tool";


export default class Line extends Tool {
  private mouseDown: boolean;
  private startX: number;
  private startY: number;
  private saved: any;

  constructor(canvas: any) {
    super(canvas);
    this.mouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.listen();
  }

  listen() {
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler() {
    this.mouseDown = false;
  }

  mouseDownHandler(event: any) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.startX = event.pageX - event.target.offsetLeft;
    this.startY = event.pageY - event.target.offsetTop;

    this.ctx.moveTo(this.startX, this.startY);
    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(event: any) {
    if (this.mouseDown) {
      const currentX = event.pageX - event.target.offsetLeft;
      const currentY = event.pageY - event.target.offsetTop;

      this.draw(currentX, currentY);
    }
  }

  draw(x: number, y: number) {
    const image = new Image();
    image.src = this.saved;
    image.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
      this.ctx.lineTo(x, y);
      this.ctx.fill();
      this.ctx.stroke();
    };
  }
}