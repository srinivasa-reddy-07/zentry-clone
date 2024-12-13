import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";

export const VideoPreview = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);

  const sectionRef = useRef(null); // Reference for the container section
  const contentRef = useRef(null); // Reference for the inner content

  // Handles mouse movement over the container
  const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
    const rect = currentTarget.getBoundingClientRect(); // Get dimensions of the container

    const xOffset = clientX - (rect.left + rect.width / 2); // Calculate X offset
    const yOffset = clientY - (rect.top + rect.height / 2); // Calculate Y offset

    if (isHovering) {
      // Adjust the scaling factor for more pronounced movement
      const scaleFactor = 0.35; // Increased movement factor (for x, y offsets)
      const zFactor = 0.35; // Increased factor for z-axis (depth) movement
      const tiltFactor = 0.2; // Factor for tilt on the x and y axes

      // Calculate the depth (z-axis) based on the mouse's distance from the center
      const zOffset = (Math.abs(xOffset) + Math.abs(yOffset)) * zFactor;

      // Calculate tilt based on mouse position
      const tiltX = yOffset * tiltFactor;
      const tiltY = -xOffset * tiltFactor;

      // Move the container slightly in the direction of the cursor (with 3D movement)
      gsap.to(sectionRef.current, {
        x: xOffset * scaleFactor, // Horizontal movement (x-axis)
        y: yOffset * scaleFactor, // Vertical movement (y-axis)
        z: -zOffset, // 3D depth movement (z-axis), making it feel like it's moving closer/further
        rotationX: tiltX, // Tilt the container along the X-axis (up/down tilt)
        rotationY: tiltY, // Tilt the container along the Y-axis (left/right tilt)
        transformPerspective: 500, // Perspective for 3D effect
        duration: 1,
        ease: "power1.out",
      });

      // Move the inner content in the opposite direction for a parallax effect
      gsap.to(contentRef.current, {
        x: -xOffset * scaleFactor, // Reverse movement for parallax effect
        y: -yOffset * scaleFactor,
        duration: 1,
        ease: "power1.out",
      });
    }
  };

  useEffect(() => {
    // Reset the position of the content when hover ends
    if (!isHovering) {
      gsap.to(sectionRef.current, {
        x: 0,
        y: 0,
        z: 0, // Reset the z position (depth)
        rotationX: 0, // Reset the tilt on the X-axis
        rotationY: 0, // Reset the tilt on the Y-axis
        duration: 1,
        ease: "power1.out",
      });

      gsap.to(contentRef.current, {
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.out",
      });
    }
  }, [isHovering]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="absolute z-50 size-full overflow-hidden rounded-lg"
      style={{
        perspective: "500px", // 3D perspective for the whole container
      }}
    >
      <div
        ref={contentRef}
        className="origin-center rounded-lg"
        style={{
          transformStyle: "preserve-3d", // Enables 3D transformations
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default VideoPreview;
