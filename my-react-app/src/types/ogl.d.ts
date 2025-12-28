declare module 'ogl' {
  export class Renderer {
    gl: WebGLRenderingContext & { canvas: HTMLCanvasElement };
    constructor(options?: {
      alpha?: boolean;
      antialias?: boolean;
      dpr?: number;
      canvas?: HTMLCanvasElement;
      width?: number;
      height?: number;
    });
    setSize(width: number, height: number): void;
    render(options: { scene: Transform; camera: Camera }): void;
  }

  export class Camera {
    fov: number;
    aspect: number;
    position: Vec3;
    constructor(gl: WebGLRenderingContext, options?: {
      fov?: number;
      near?: number;
      far?: number;
      aspect?: number;
    });
    perspective(options?: { aspect?: number }): void;
  }

  export class Transform {
    position: Vec3;
    rotation: { x: number; y: number; z: number };
    scale: Vec3;
    constructor();
    setParent(parent: Transform | Mesh): void;
  }

  export class Mesh extends Transform {
    program: Program;
    constructor(gl: WebGLRenderingContext, options?: {
      geometry?: Plane;
      program?: Program;
    });
  }

  export class Plane {
    constructor(gl: WebGLRenderingContext, options?: {
      width?: number;
      height?: number;
      widthSegments?: number;
      heightSegments?: number;
    });
  }

  export class Program {
    uniforms: Record<string, { value: any }>;
    constructor(gl: WebGLRenderingContext, options?: {
      vertex?: string;
      fragment?: string;
      uniforms?: Record<string, { value: any }>;
      transparent?: boolean;
      depthTest?: boolean;
      depthWrite?: boolean;
    });
  }

  export class Texture {
    image: HTMLImageElement | HTMLCanvasElement | null;
    constructor(gl: WebGLRenderingContext, options?: {
      generateMipmaps?: boolean;
      minFilter?: number;
      magFilter?: number;
    });
  }

  export class Vec3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    set(x: number, y: number, z: number): this;
  }
}

