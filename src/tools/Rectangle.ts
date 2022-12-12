import Tool from "./Tool";


export default class Rectangle extends Tool {
  private mouseDown: boolean;
  private startX: number;
  private startY: number;
  private currentX: number;
  private currentY: number;
  private saved: any;

  constructor(canvas: any) {
    super(canvas);
    this.mouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.currentX = 0;
    this.currentY = 0;
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

    this.saved = this.canvas.toDataURL();
  }

  mouseMoveHandler(event: any) {
    if (this.mouseDown) {
      this.currentX = event.pageX - event.target.offsetLeft;
      this.currentY = event.pageY - event.target.offsetTop;
      const width = this.currentX - this.startX;
      const height = this.currentY - this.startY;

      this.draw(this.startX, this.startY, width, height);
    }
  }

  draw(x: number, y: number, width: number, height: number) {
    const image = new Image();
    image.src = this.saved;
    image.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(image, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx.beginPath();
      this.ctx.rect(x, y, width, height);
      this.ctx.fill();
      this.ctx.stroke();
    };
  }
}