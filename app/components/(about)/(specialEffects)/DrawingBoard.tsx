import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const DrawingBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    const updateCanvasSize = () => {
      canvas!.width = document.body.scrollWidth;
      canvas!.height = document.body.scrollHeight;
    };

    updateCanvasSize();

    const draw = (e: MouseEvent) => {
      context!.lineWidth = 10;
      context!.lineCap = "round";
      context!.strokeStyle = "#E6A1D9";
      context!.lineTo(e.pageX, e.pageY);
      context!.stroke();
      context!.beginPath();
      context!.moveTo(e.pageX, e.pageY);
    };

    canvas!.addEventListener("mousemove", draw);
    document.addEventListener("resize", updateCanvasSize);

    return () => {
      canvas!.removeEventListener("mousemove", draw);
      document.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return typeof window !== "undefined"
    ? createPortal(
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 z-[9999] "
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />,
        document.body
      )
    : null;
};

export default DrawingBoard;
