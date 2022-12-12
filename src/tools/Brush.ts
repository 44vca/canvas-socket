import Tool from "./Tool";

export default class Brush extends Tool {
  private mouseDown: boolean;

  constructor(canvas: any) {
    super(canvas);
    this.mouseDown = false;
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
    this.ctx.moveTo(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
  }

  mouseMoveHandler(event: any) {
    if (this.mouseDown) {
      this.draw(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
    }
  }

  draw(x: number, y: number) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }
}