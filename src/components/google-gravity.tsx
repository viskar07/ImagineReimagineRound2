'use client'
import { useEffect, useRef } from 'react';
import p2 from 'p2';

const GoogleGravityP2: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const world = new p2.World({ gravity: [0, 10] });

    // Load the image
    const image = new Image();
    image.src = '/box.png';
    image.onload = () => {
      imageRef.current = image;
      createDraggableElements();
    };
    image.onerror = () => {
      console.error('Failed to load image');
    };

    // Function to create draggable elements
    const createDraggableElements = () => {
      const createDraggable = (x: number, y: number, width: number, height: number, text: string) => {
        if (!imageRef.current) return;

        const shape = new p2.Box({ width: width / 30, height: height / 30 });
        const body = new p2.Body({
          position: [x / 30, y / 30], // Convert to physics units
          mass: 1
        });

        body.addShape(shape);
        world.addBody(body);

        // Draw the body
        const draw = () => {
          if (!context || !imageRef.current) return;

          context.clearRect(0, 0, canvas.width, canvas.height);

          world.step(1 / 60);

          world.bodies.forEach(body => {
            const position = body.position;
            const angle = body.angle;

            context.save();
            context.translate(position[0] * 30, position[1] * 30); // Convert back to canvas units
            context.rotate(angle);
            context.drawImage(imageRef.current, -width / 2, -height / 2, width, height);
            context.restore();
          });

          requestAnimationFrame(draw);
        };

        draw();
      };

      createDraggable(150, 50, 200, 50, 'Google');
      createDraggable(100, 150, 100, 30, 'Search');
      createDraggable(300, 150, 200, 30, 'I\'m Feeling Lucky');
    };

    // Resize the canvas
    canvas.width = 800;
    canvas.height = 600;

    // Cleanup on unmount
    return () => {
      // Clean up world or other resources if necessary
    };
  }, []);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
};

export default GoogleGravityP2;
